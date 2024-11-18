import { createContext, useContext, useEffect, useState } from "react";
import solace from '../utils/solace/solclientasync';
import { QueueApi as QueueMonitorApi, ReplayLogApi } from "../utils/solace/semp/monitor";

import { useSempApi } from "../providers/SolaceSempProvider";

const SolaceQueueContext = createContext([{}, () => { }]);

export function SolaceQueueContextProvider({ children }) {

  const build = (queueDefinition) => {
    const [replayPages, setReplayPages] = useState([]);

    const queueMonitorApi = useSempApi(QueueMonitorApi).with(queueDefinition);
    const replayLogMonitorApi = useSempApi(ReplayLogApi).with(queueDefinition);

    useEffect(() => {
      replayPages.length = 0;
      setReplayPages([]);
    }, [queueDefinition]);

    const getMessages = async ({ count = 50, fromTime, afterMsg, prevPage, firstPage } = {}) => {
      if (!queueDefinition.queueName) {
        return [];
      }

      const {
        hostName, clientPort, useTls,
        vpn, queueName,
        clientUsername, clientPassword,
      } = queueDefinition;

      const timeLog = (() => {
        const startTime = Date.now();
        return (message) => {
          console.log(`${(Date.now() - startTime).toString().padStart(6, '0')}: ${message}`);
        };
      })();

      timeLog('starting browser');

      const session = solace.SolclientFactory.createAsyncSession({
        url: `${(useTls ? 'wss' : 'ws')}://${hostName}:${clientPort}`,
        vpnName: vpn,
        userName: clientUsername,
        password: clientPassword
      });

      const [queue, subscriptions] = await Promise.all([
        queueMonitorApi.getMsgVpnQueue(vpn, queueName, { select: ['lowestMsgId'] }),
        queueMonitorApi.getMsgVpnQueueSubscriptions(vpn, queueName),
        session.connect()
      ]);

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
      } else if (queue.data.lowestMsgId) {
        // check if lowestMsgId is on the replay log at all
        try {
          const replayLogs = await replayLogMonitorApi.getMsgVpnReplayLogs(vpn, { select: ['replayLogName'] });
          const { replayLogName } = replayLogs.data[0];

          const prevMessages = await replayLogMonitorApi.getMsgVpnReplayLogMsgs(vpn, replayLogName, {
            cursor: [
              `<rpc><show><replay-log>`,
              `<name>${replayLogName}</name>`,
              `<vpn-name>${vpn}</vpn-name>`,
              `<messages/><newest/>`,
              `<msg-id>${queue.data.lowestMsgId}</msg-id>`,
              `<detail/>`,
              `<num-elements>2</num-elements>`,
              `</replay-log></show></rpc>`,
            ].join(''),
            select: ['replicationGroupMsgId'],
            count: 2
          });

          replayFrom = { afterMsg: prevMessages.data[1].replicationGroupMsgId };
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

      timeLog('connected to broker');

      const queueTopic = `#P2P/QUE/${queueName}`;
      const tempQueueName = `#QB/${queueName}/${Date.now()}`;
      const queueDescriptor = { name: tempQueueName, type: solace.QueueType.QUEUE };

      await session.provisionEndpoint(queueDescriptor, {}, true);
      timeLog('queue created');

      const messageConsumer = session.createMessageConsumer({
        queueDescriptor,
        acknowledgeMode: solace.MessageConsumerAcknowledgeMode.CLIENT,
        windowSize: 1,
        replayStartLocation:
          replayFrom?.afterMsg ? solace.SolclientFactory.createReplicationGroupMessageId(replayFrom.afterMsg) :
            replayFrom?.fromTime ? solace.SolclientFactory.createReplayStartLocationDate(new Date(replayFrom.fromTime * 1000)) :
              replayFrom ? solace.SolclientFactory.createReplayStartLocationBeginning() :
                null
      });

      const queueBrowser = session.createQueueBrowser({ queueDescriptor });

      await Promise.all([
        messageConsumer.addSubscription(
          solace.SolclientFactory.createTopicDestination(queueTopic),
          queueTopic,
          2000
        ),
        ...subscriptions.data.map(s => (
          messageConsumer.addSubscription(
            solace.SolclientFactory.createTopicDestination(s.subscriptionTopic),
            s.subscriptionTopic,
            2000
          )
        )),
        queueBrowser.connect()
      ]);

      timeLog('triggering replay on consumer');
      messageConsumer.connect();
      messageConsumer.disconnect();

      const messages = await queueBrowser.readMessages(count, 500);

      timeLog('getting metadata');
      const msgMetaData = await queueMonitorApi.getMsgVpnQueueMsgs(vpn, tempQueueName, { count });

      timeLog('disconnecting browser');
      queueBrowser.disconnect();
      session.deprovisionEndpoint(queueDescriptor);
      session.disconnect();

      setReplayPages([...replayPages]);
      
      return messages.map((msg, n) => ({
        ...(msgMetaData.data[n]),
        payload: msg.getBinaryAttachment().toString(),
        size: msg.getBinaryAttachment().length,
        rgmid: msg.getReplicationGroupMessageId().toString(),
        destination: msg.getDestination(),
      }));
    };

    return {
      getMessages,
    };
  };

  const queueContextValue = { build };

  return (
    <SolaceQueueContext.Provider value={queueContextValue}>
      {children}
    </SolaceQueueContext.Provider>
  );
}

export function useSolaceQueueContext(queueDefinition) {
  return useContext(SolaceQueueContext).build(queueDefinition);
}