import { useEffect, useState } from "react";
import solace from '../utils/solace/solclientasync';

import { useSempApi } from "../providers/SempClientProvider";

class NullBrowser {
  getMessages() { return []; }
  getFirstPage() { return []; }
  getNextPage() { return []; }
  getPrevPage() { return []; }
  hasNextPage() { return false; }
  hasPrevPage() { return false; }
  close() { }
}

class ReplayQueueBrowser {
  constructor(queueDefinition, startFrom, sempApi, solclientFactory) {
    this.queueDefinition = queueDefinition;
    this.startFrom = startFrom;
    this.sempClient = sempApi.getClient(queueDefinition);

    const {
      hostName, clientPort, useTls, vpn,
      clientUsername, clientPassword
    } = queueDefinition;

    this.solclientFactory = solclientFactory;
    this.session = solclientFactory.createAsyncSession({
      url: `${(useTls ? 'wss' : 'ws')}://${hostName}:${clientPort}`,
      vpnName: vpn,
      userName: clientUsername,
      password: clientPassword
    });

    this.replayPages = [];
    this.lastRgmid = '';
    this.hasNext = false;
  }

  async getMessages({ count = 50, replayFrom = this.startFrom } = {}) {
    const { vpn, queueName } = this.queueDefinition;

    if (!queueName) {
      return [];
    }

    const timeStart = () => console.time('getMessages');
    const timeLog = (message) => console.timeLog('getMessages', message);
    const timeEnd = () => console.timeEnd('getMessages');

    timeStart();
    timeLog('starting browser');

    const [{ data: queue }, { data: subscriptions }] = await Promise.all([
      this.sempClient.getMsgVpnQueue(vpn, queueName),
      this.sempClient.getMsgVpnQueueSubscriptions(vpn, queueName),
      this.session.connect()
    ]);

    if (!replayFrom && queue.lowestMsgId) {
      // check if lowestMsgId is on the replay log at all
      replayFrom = await this.#getQueueReplayFrom(queue);
    }
    this.replayPages.push(replayFrom);

    timeLog('connected to broker');

    const queueTopic = `#P2P/QUE/${queueName}`;
    const tempQueueName = `#QB/${queueName}/${Date.now()}`;
    const queueDescriptor = { name: tempQueueName, type: solace.QueueType.QUEUE };

    await this.session.provisionEndpoint(queueDescriptor, {}, true);
    timeLog('queue created');

    const messageConsumer = this.session.createMessageConsumer({
      queueDescriptor,
      acknowledgeMode: solace.MessageConsumerAcknowledgeMode.CLIENT,
      windowSize: 1,
      replayStartLocation:
        replayFrom?.afterMsg ? this.solclientFactory.createReplicationGroupMessageId(replayFrom.afterMsg) :
          replayFrom?.fromTime ? this.solclientFactory.createReplayStartLocationDate(new Date(replayFrom.fromTime * 1000)) :
            replayFrom ? this.solclientFactory.createReplayStartLocationBeginning() :
              null
    });

    const queueBrowser = this.session.createQueueBrowser({ queueDescriptor });

    await Promise.all([
      messageConsumer.addSubscription(
        this.solclientFactory.createTopicDestination(queueTopic),
        queueTopic,
        2000
      ),
      ...subscriptions.map(s => (
        messageConsumer.addSubscription(
          this.solclientFactory.createTopicDestination(s.subscriptionTopic),
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
    const { data: msgMetaData } = await this.sempClient.getMsgVpnQueueMsgs(vpn, tempQueueName, { count });

    timeLog('disconnecting browser');
    queueBrowser.disconnect();
    this.session.deprovisionEndpoint(queueDescriptor);
    this.session.disconnect();

    timeEnd();
    this.lastRgmid = messages[messages.length - 1]?.getReplicationGroupMessageId().toString();
    this.hasNext = msgMetaData[msgMetaData.length - 1]?.msgId < queue.highestMsgId;

    return messages.map((msg, n) => ({
      ...(msgMetaData[n]),
      payload: msg.getBinaryAttachment().toString(),
      size: msg.getBinaryAttachment().length,
      rgmid: msg.getReplicationGroupMessageId().toString(),
      destination: msg.getDestination(),
    }));
  }
  getFirstPage() {
    this.replayPages.length = 0;
    return this.getMessages();
  }
  getNextPage() {
    return this.getMessages({ replayFrom: { afterMsg: this.lastRgmid } });
  }
  getPrevPage() {
    this.replayPages.pop();
    return this.getMessages({ replayFrom: this.replayPages.pop() });
  }
  hasNextPage() {
    return this.hasNext;
  }
  hasPrevPage() {
    return this.replayPages.length > 1;
  }
  close() {
  }
  async #getQueueReplayFrom({ lowestMsgId }) {
    const { vpn } = this.queueDefinition;
    try {
      const replayLogs = await this.sempClient.getMsgVpnReplayLogs(vpn, { select: ['replayLogName'] });
      const { replayLogName } = replayLogs.data[0];

      const prevMessages = await this.sempClient.getMsgVpnReplayLogMsgs(vpn, replayLogName, {
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
  }
}

const NULL_BROWSER = new NullBrowser();

export function useQueueBrowser(queueDefinition, startFrom) {
  const sempApi = useSempApi();
  const solclientFactory = solace.SolclientFactory;
  
  const [browser, setBrowser] = useState(NULL_BROWSER);

  useEffect(() => {
    const newBrowser = queueDefinition.queueName ?
      new ReplayQueueBrowser(queueDefinition, startFrom, sempApi, solclientFactory) :
      NULL_BROWSER;

    setBrowser(newBrowser);
    return () => newBrowser.close();
  }, [queueDefinition, startFrom]);

  return browser;
};