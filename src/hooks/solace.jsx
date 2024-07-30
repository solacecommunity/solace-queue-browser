import { createContext, useContext, useEffect, useState } from "react";
import solace from "solclientjs";
import { ApiClient, QueueApi as QueueMonitorApi } from "../utils/solace/semp/monitor";
import { QueueApi as QueueConfigApi } from "../utils/solace/semp/config";
import { QueueApi as QueueActionApi } from "../utils/solace/semp/action";
import { MsgVpnQueueModel, MsgVpnQueueSubscriptionModel } from "../utils/solace/semp/config";

const factoryProps = new solace.SolclientFactoryProperties();
factoryProps.profile = solace.SolclientFactoryProfiles.version10_5;
solace.SolclientFactory.init(factoryProps);
solace.SolclientFactory.setLogLevel(solace.LogLevel.INFO);

const SolaceQueueContext = createContext([{}, () => {}]);

export function SolaceQueueContextProvider({ children }) {
  const [queueDefinition, setQueueDefinition] = useState({});
  const [messages, setMessages] = useState([]);
  const [activeMessage, setActiveMessage] = useState({});
  const [fromTime, setFromTime] = useState(null);

  const getMessages = async ({ count = 10, startTime, messageId } = {}) => {
    if(!queueDefinition.queueName) {
      return;
    }

    console.log('Duplicating queue', queueDefinition.queueName, queueDefinition);

    function createApi(ClientCtor, ApiCtor, basePath, username, password) {
      const client = new ClientCtor();
      Object.assign(client, { basePath });
      Object.assign(client.authentications.basicAuth, { username, password });
      return new ApiCtor(client);
    }

    const queueMonitorApi = createApi(
      ApiClient,
      QueueMonitorApi,
      `http://${queueDefinition.url}:8080/SEMP/v2/monitor`,
      queueDefinition.username,
      queueDefinition.password
    );
    
    const queueConfigApi = createApi(
      ApiClient,
      QueueConfigApi,
      `http://${queueDefinition.url}:8080/SEMP/v2/config`,
      queueDefinition.username,
      queueDefinition.password
    );

    const queueActionApi = createApi(
      ApiClient,
      QueueActionApi,
      `http://${queueDefinition.url}:8080/SEMP/v2/action`,
      queueDefinition.username,
      queueDefinition.password
    );

    const q = await queueMonitorApi.getMsgVpnQueue(queueDefinition.vpn, queueDefinition.queueName);
    console.log('got queue', q);
    const s = await queueMonitorApi.getMsgVpnQueueSubscriptions(queueDefinition.vpn, queueDefinition.queueName);
    console.log('got subs', s);

    const m = await queueMonitorApi.getMsgVpnQueueMsg(queueDefinition.vpn, queueDefinition.queueName, q.data.lowestMsgId);
    console.log('got lowest msg', m);

    const queueName = `#QB/${queueDefinition.queueName}/${Date.now()}`;

    const qConfig = MsgVpnQueueModel.constructFromObject(q);

    await queueConfigApi.createMsgVpnQueue({...qConfig.data, queueName, egressEnabled: true, owner: 'client'}, 'default');

    console.log('create queue subscription');
    queueConfigApi.createMsgVpnQueueSubscription(MsgVpnQueueSubscriptionModel.constructFromObject({
      subscriptionTopic: `#P2P/QUE/${queueDefinition.queueName}`,
      msgVpnName: queueDefinition.vpn,
      queueName
    }), queueDefinition.vpn, queueName);
    console.log('add topic subscriptions');
    await Promise.all(s.data.map(sub => {
      console.log('subscribing to:', sub);
      return queueConfigApi.createMsgVpnQueueSubscription(MsgVpnQueueSubscriptionModel.constructFromObject({...sub, queueName}), queueDefinition.vpn, queueName);
    }));
    //await queueMonitorApi.getMsgVpnQueueSubscriptions(queueDefinition.vpn, queueName); // must query to make sure the subs are applied (bug?)

    const session = solace.SolclientFactory.createSession({
      url: 'ws://broker-std.local:8008',
      vpnName: 'default',
      userName: 'client',
      password: 'password'
    });
  
    await new Promise(rs => {
      session.on(solace.SessionEventCode.UP_NOTICE, rs);
      console.log('connecting....');
      session.connect();
    });

    console.log('connected to Solace');
    
    const msgCount = 20;
    let messagesLeft = msgCount;
    let messages = [];
    let gotMessages = new Promise(resolveGotAllMessages => {
      const subscriber = session.createMessageConsumer({
        queueDescriptor: { name: queueName, type: solace.QueueType.QUEUE }
      });

      subscriber.on(solace.MessageConsumerEventName.MESSAGE, msg => {
        console.log(' -- got message');
        messagesLeft--;

        messages.push(msg);

        if(messagesLeft <= 0) {
          subscriber.stop();
          subscriber.disconnect();
          resolveGotAllMessages();
        }
      });

      console.log('starting subscriber');

      subscriber.connect();
      subscriber.start();
    });

    console.log('kicking off replay..?');
    await queueActionApi.doMsgVpnQueueStartReplay(fromTime ? { fromTime } : {}, queueDefinition.vpn, queueName);

    console.log('enabling ingress..');
    await queueConfigApi.updateMsgVpnQueue({
      ingressEnabled: true,
    }, queueDefinition.vpn, queueName);

    console.log('waiting for messages.')
    await gotMessages;

    console.log('got 10 messages, shutting things down...');

    const msgMetaData = await queueMonitorApi.getMsgVpnQueueMsgs(queueDefinition.vpn, queueName, { count: msgCount });

    await queueActionApi.doMsgVpnQueueCancelReplay({ forceComplete: true}, queueDefinition.vpn, queueName);
    await queueConfigApi.deleteMsgVpnQueue(queueDefinition.vpn, queueName);
    console.log('replay cancelled, queue deleted');

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
        setActiveMessage,
        fromTime,
        setFromTime
      }
    }>
      {children}
    </SolaceQueueContext.Provider>
  );
}

export function useSolaceQueueContext() {
  return useContext(SolaceQueueContext);
}