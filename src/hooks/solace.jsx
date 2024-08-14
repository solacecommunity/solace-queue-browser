import { createContext, useContext, useEffect, useState } from "react";
import solace from "solclientjs";
import { ApiClient } from "../utils/solace/semp/tauriClient";
import { QueueApi as QueueMonitorApi, ReplayLogApi } from "../utils/solace/semp/monitor";
import { QueueApi as QueueConfigApi } from "../utils/solace/semp/config";
import { QueueApi as QueueActionApi } from "../utils/solace/semp/action";
import { MsgVpnQueueModel, MsgVpnQueueSubscriptionModel } from "../utils/solace/semp/config";

import { fs } from "@tauri-apps/api";
import { BaseDirectory } from "@tauri-apps/api/fs";

const factoryProps = new solace.SolclientFactoryProperties();
factoryProps.profile = solace.SolclientFactoryProfiles.version10_5;
solace.SolclientFactory.init(factoryProps);
solace.SolclientFactory.setLogLevel(solace.LogLevel.INFO);

const SolaceConfigContext = createContext(null);
const SolaceQueueContext = createContext([{}, () => { }]);

export function SolaceConfigProvider({ children }) {
  useEffect(() => {
    (async () => {
      if (await fs.exists('config.json', { dir: BaseDirectory.AppConfig })) {
        const configData = await fs.readTextFile('config.json', { dir: BaseDirectory.AppConfig })
        setBrokers(JSON.parse(configData));
      } else {
        console.log('no config found');
      }
    })();
  }, []);

  const [brokers, setBrokers] = useState([]);

  const saveBroker = (config) => {
    const match = brokers.find(b => b.id === config.id);
    if (match === undefined) {
      config.id = Date.now();
      brokers.push(config);
    } else {
      Object.assign(match, config);
    }
    fs.writeTextFile('config.json', JSON.stringify(brokers), { dir: BaseDirectory.AppConfig });
    setBrokers([...brokers]);
  };

  const deleteBroker = (config) => {
    const fileredBrokers =  brokers.filter(b => b.id !== config.id);
    fs.writeTextFile('config.json', JSON.stringify(fileredBrokers), { dir: BaseDirectory.AppConfig });
    setBrokers(fileredBrokers);
  };

  const value = {
    brokers,
    saveBroker,
    deleteBroker
  };

  return (
    <SolaceConfigContext.Provider value={value}>
      {children}
    </SolaceConfigContext.Provider>
  )
}

export function useSolaceConfigContext() {
  return useContext(SolaceConfigContext);
}


export function SolaceQueueContextProvider({ children }) {
  const [queueDefinition, setQueueDefinition] = useState({});
  const [messages, setMessages] = useState([]);
  const [activeMessage, setActiveMessage] = useState({});
  const [replayPages, setReplayPages] = useState([]);

  useEffect(() => {
    replayPages.length = 0;
    setReplayPages([]);
  }, [queueDefinition]);

  const getMessages = async ({ count = 10, fromTime, afterMsg, prevPage, firstPage } = {}) => {
    if (!queueDefinition.queueName) {
      return;
    }

    const { hostName, useTls, vpn, clientUsername, clientPassword, sempUsername, sempPassword, queueName } = queueDefinition;

    console.log('Duplicating queue', queueName, queueDefinition);

    function createApi(ClientCtor, ApiCtor, apiBase) {
      const client = new ClientCtor();
      Object.assign(client, { 
        basePath: useTls ? `https://${hostName}:943/SEMP/v2/${apiBase}` : `http://${hostName}:8080/SEMP/v2/${apiBase}`
      });
      Object.assign(client.authentications.basicAuth, { username: sempUsername, password: sempPassword });
      return new ApiCtor(client);
    }

    const queueMonitorApi = createApi(ApiClient, QueueMonitorApi, `monitor`);
    const replayLogMonitorApi = createApi(ApiClient, ReplayLogApi, `monitor`);
    const queueConfigApi = createApi(ApiClient, QueueConfigApi, `config`);
    const queueActionApi = createApi(ApiClient, QueueActionApi, `action`);

    const q = await queueMonitorApi.getMsgVpnQueue(vpn, queueName);
    console.log('got queue', q);
    const s = await queueMonitorApi.getMsgVpnQueueSubscriptions(vpn, queueName);
    console.log('got subs', s);

    let replayFrom;
    if (prevPage) {
      replayPages.pop();
      replayFrom = replayPages[replayPages.length - 1] || {};
    } else if (firstPage) {
      replayFrom = replayPages[0] || {};
      replayPages.length = 0;
      replayPages.push(replayFrom);
    } else if (fromTime) {
      replayFrom = { fromTime };
      replayPages.length = 0;
      replayPages.push(replayFrom);
    } else if (afterMsg) {
      replayFrom = { afterMsg };
      replayPages.push(replayFrom);
    } else if (q.data.lowestMsgId) {
      // check if lowestMsgId is on the replay log at all
      try {
        const replayLogs = await replayLogMonitorApi.getMsgVpnReplayLogs(vpn);
        const { replayLogName } = replayLogs.data[0];
        const prevMessage = await replayLogMonitorApi.getMsgVpnReplayLogMsg(vpn, replayLogName, q.data.lowestMsgId - 1); //TODO: use cursor instead of decrement
        console.log('prevMessage', prevMessage);
        replayFrom = { afterMsg: prevMessage.data.replicationGroupMsgId };
        replayPages.push(replayFrom);
      } catch (ex) {
        console.warn('Unable to find a suitable RGMID to start from. Will replay from beginning.');
        replayFrom = {};
        replayPages.push(replayFrom);
      }
    } else {
      // No messages on source queue, will skip replay
      replayFrom = null;
    }

    const tempQueueName = `#QB/${queueName}/${Date.now()}`;

    const qConfig = MsgVpnQueueModel.constructFromObject(q);

    await queueConfigApi.createMsgVpnQueue({ ...qConfig.data, queueName: tempQueueName, egressEnabled: true, owner: clientUsername }, vpn);

    queueConfigApi.createMsgVpnQueueSubscription(MsgVpnQueueSubscriptionModel.constructFromObject({
      subscriptionTopic: `#P2P/QUE/${queueName}`,
      msgVpnName: vpn,
      queueName: tempQueueName
    }), vpn, tempQueueName);
    await Promise.all(s.data.map(sub => {
      return queueConfigApi.createMsgVpnQueueSubscription(MsgVpnQueueSubscriptionModel.constructFromObject({ ...sub, queueName: tempQueueName }), vpn, tempQueueName);
    }));

    const session = solace.SolclientFactory.createSession({
      url: useTls ? `wss://${hostName}:443` : `ws://${hostName}:8008`,
      vpnName: vpn,
      userName: clientUsername,
      password: clientPassword
    });

    await new Promise(rs => {
      session.on(solace.SessionEventCode.UP_NOTICE, rs);
      session.connect();
    });

    console.log('connected to broker');

    const msgCount = 18;
    let messagesLeft = msgCount;
    let messages = [];
    let gotMessages = new Promise(resolveGotAllMessages => {
      const browser = session.createQueueBrowser({
        queueDescriptor: { name: tempQueueName, type: solace.QueueType.QUEUE }
      });

      browser.on(solace.QueueBrowserEventName.MESSAGE, msg => {
        console.log('got message')
        messagesLeft--;
        messages.push(msg);

        if (messagesLeft <= 0) {
          browser.stop();
          browser.disconnect();
          resolveGotAllMessages();
        }
      });

      browser.connect();
      browser.start();

      setTimeout(() => { 
        console.warn('Timeout waiting for messages');
        resolveGotAllMessages();
      }, 1000);
    });

    if (replayFrom) {
      console.log('kicking off replay from: ', replayFrom);
      console.log(`${replayPages.length} pages`, replayPages);

      await queueActionApi.doMsgVpnQueueStartReplay(
        replayFrom.fromTime ? { fromTime: replayFrom.fromTime } :
          replayFrom.afterMsg ? { afterMsg: replayFrom.afterMsg } : {},
        vpn,
        tempQueueName);

      await queueConfigApi.updateMsgVpnQueue({
        ingressEnabled: true,
      }, vpn, tempQueueName);
    }

    await gotMessages;

    const msgMetaData = await queueMonitorApi.getMsgVpnQueueMsgs(vpn, tempQueueName, { count: msgCount });

    if (replayFrom) {
      await queueActionApi.doMsgVpnQueueCancelReplay({ forceComplete: true }, vpn, tempQueueName);
    }

    await queueConfigApi.deleteMsgVpnQueue(vpn, tempQueueName);
    session.disconnect();


    setReplayPages([...replayPages]);
    setMessages(messages.map((msg, n) => ({
      ...(msgMetaData.data[n]),
      payload: msg.getBinaryAttachment().toString(),
      size: msg.getBinaryAttachment().length,
      rgmid: msg.getReplicationGroupMessageId().toString(),
      destination: msg.getDestination(),
    })));
  };

  useEffect(() => {
    setMessages([]);
  }, [queueDefinition]);

  return (
    <SolaceQueueContext.Provider value={
      {
        queueDefinition,
        setQueueDefinition,
        messages,
        getMessages,
        activeMessage,
        setActiveMessage
      }
    }>
      {children}
    </SolaceQueueContext.Provider>
  );
}

export function useSolaceQueueContext() {
  return useContext(SolaceQueueContext);
}