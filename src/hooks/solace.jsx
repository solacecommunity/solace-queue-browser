import { useEffect, useState } from "react";
import solace from '../utils/solace/solclientasync';
import { QueueApi as QueueMonitorApi, ReplayLogApi } from "../utils/solace/semp/monitor";

import { useSempApi } from "../providers/SolaceSempProvider";

export function useQueueBrowser(queueDefinition, startFrom) {
  const {
    hostName, clientPort, useTls,
    vpn, queueName,
    clientUsername, clientPassword,
  } = queueDefinition;

  const [replayPages, setReplayPages] = useState([]);
  const [lastRgmid, setLastRgmid] = useState();
  const [endOfQueue, setEndOfQueue] = useState();

  const queueMonitorApi = useSempApi(QueueMonitorApi).with(queueDefinition);
  const replayLogMonitorApi = useSempApi(ReplayLogApi).with(queueDefinition);

  useEffect(() => {
    replayPages.length = 0;
    setReplayPages([]);
    setLastRgmid();
    setEndOfQueue();
  }, [queueDefinition]);

  const getQueueReplayFrom = async ({ lowestMsgId }) => {
    try {
      const replayLogs = await replayLogMonitorApi.getMsgVpnReplayLogs(vpn, { select: ['replayLogName'] });
      const { replayLogName } = replayLogs.data[0];

      const prevMessages = await replayLogMonitorApi.getMsgVpnReplayLogMsgs(vpn, replayLogName, {
        cursor: [
          `<rpc><show><replay-log>`,
          `<name>${replayLogName}</name>`,
          `<vpn-name>${vpn}</vpn-name>`,
          `<messages/><newest/>`,
          `<msg-id>${lowestMsgId}</msg-id>`,
          `<detail/>`,
          `<num-elements>2</num-elements>`,
          `</replay-log></show></rpc>`,
        ].join(''),
        select: ['replicationGroupMsgId'],
        count: 2
      });

      return { afterMsg: prevMessages.data[1].replicationGroupMsgId };
    } catch (ex) {
      console.warn('Unable to find a suitable RGMID to start from. Will replay from beginning.', ex);
      return {};
    }
  };
  
  const getMessages = async ({ count = 50, replayFrom = startFrom } = {}) => {
    if (!queueDefinition.queueName) {
      return [];
    }
    
    const timeStart = () => console.time('getMessages');
    const timeLog = (message) => console.timeLog('getMessages', message);
    const timeEnd = () => console.timeEnd('getMessages');

    timeStart();
    timeLog('starting browser');

    const session = solace.SolclientFactory.createAsyncSession({
      url: `${(useTls ? 'wss' : 'ws')}://${hostName}:${clientPort}`,
      vpnName: vpn,
      userName: clientUsername,
      password: clientPassword
    });

    const [{ data: queue }, { data: subscriptions }] = await Promise.all([
      queueMonitorApi.getMsgVpnQueue(vpn, queueName),
      queueMonitorApi.getMsgVpnQueueSubscriptions(vpn, queueName),
      session.connect()
    ]);

    if (!replayFrom && queue.lowestMsgId) {
      // check if lowestMsgId is on the replay log at all
      replayFrom = await getQueueReplayFrom(queue);
    }
    replayPages.push(replayFrom);

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
      ...subscriptions.map(s => (
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
    const { data: msgMetaData } = await queueMonitorApi.getMsgVpnQueueMsgs(vpn, tempQueueName, { count });

    timeLog('disconnecting browser');
    queueBrowser.disconnect();
    session.deprovisionEndpoint(queueDescriptor);
    session.disconnect();
    
    timeEnd();
    setReplayPages([...replayPages]);
    setLastRgmid(messages[messages.length - 1]?.getReplicationGroupMessageId().toString());
    setEndOfQueue(msgMetaData[msgMetaData.length - 1]?.msgId >= queue.highestMsgId);

    return messages.map((msg, n) => ({
      ...(msgMetaData[n]),
      payload: msg.getBinaryAttachment().toString(),
      size: msg.getBinaryAttachment().length,
      rgmid: msg.getReplicationGroupMessageId().toString(),
      destination: msg.getDestination(),
    }));
  };

  const getFirstPage = () => {
    replayPages.length = 0;
    return getMessages();
  };

  const getNextPage = () => {
    return getMessages({ replayFrom: { afterMsg: lastRgmid } });
  };

  const getPrevPage = () => {
    replayPages.pop();
    return getMessages({ replayFrom: replayPages.pop() });
  };

  const hasNextPage = () => {
    return !endOfQueue;
  };

  const hasPrevPage = () => {
    return replayPages.length > 1;
  };

  return {
    getMessages,
    getFirstPage,
    getNextPage,
    getPrevPage,
    hasNextPage,
    hasPrevPage
  };
};