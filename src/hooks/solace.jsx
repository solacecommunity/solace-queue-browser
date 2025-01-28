import { useEffect, useState } from "react";
import solace from '../utils/solace/solclientasync';

import { useSempApi } from "../providers/SempClientProvider";

const MIN_MSG_ID = 1n;
const MAX_MSG_ID = 9223372036854775808n;

export const SOURCE_TYPE = {
  QUEUE: 'queue',
  TOPIC: 'topic'
};

export const MESSAGE_ORDER = {
  OLDEST: 'oldest',   // Forward Browsing
  NEWEST: 'newest'    // Reverse Browsing
};


class BaseBrowser {
  constructor({ sourceDefinition = { config: {} }, startFrom, sempApi, solclientFactory } = {}) {
    this.sourceDefinition = sourceDefinition;
    this.startFrom = startFrom;

    const { config, topics } = sourceDefinition;
    this.sempClient = sempApi?.getClient(config);
    this.solclientFactory = solclientFactory;
    this.topics = topics;
    this.replayLogName = undefined;

    const {
      hostName, clientPort, useTls, vpn,
      clientUsername, clientPassword
    } = config;

    this.session = hostName ? solclientFactory.createAsyncSession({
      url: `${(useTls ? 'wss' : 'ws')}://${hostName}:${clientPort}`,
      vpnName: vpn,
      userName: clientUsername,
      password: clientPassword
    }) : null;

    this.nextPage = null;
    this.prevPages = [];
    this.pageSize = 50;
  }

  getFirstPage() {
    this.prevPages.length = 0;
    return this.getPage(this.startFrom);
  }

  getNextPage() {
    return this.getPage(this.nextPage);
  }

  getPrevPage() {
    this.prevPages.pop();
    return this.getPage(this.prevPages.pop())
  }

  hasNextPage() {
    return (this.nextPage !== null);
  }

  hasPrevPage() {
    return (this.prevPages.length > 1);
  }

  async getPage(page) {
    return [];
  }

  async getMessageMetaData({ queueName, fromMsgId = null, direction }) {
    const { config: { vpn } } = this.sourceDefinition;
    const count = this.pageSize;
    const cursor = (fromMsgId !== null) ? [
      `<rpc><show><queue>`,
      `<name>${queueName}</name>`,
      `<vpn-name>${vpn}</vpn-name>`,
      `<messages/><${direction}/>`,
      `<msg-id>${fromMsgId}</msg-id>`,
      `<detail/><count/>`,
      `<num-elements>${count}</num-elements>`,
      `</queue></show></rpc>`
    ].join('') : undefined;

    const { data: msgMetaData } = await this.sempClient
      .getMsgVpnQueueMsgs(vpn, queueName, { cursor, count });

    return msgMetaData;
  }

  async replayToTempQueue({ sourceName, replayFrom }) {
    const count = this.pageSize;

    const topics = await this.getTopics(sourceName);
    await this.session.connect();

    const tempQueueName = `#QB/${sourceName}/${Date.now()}`;
    const queueDescriptor = { name: tempQueueName, type: solace.QueueType.QUEUE };

    await this.session.provisionEndpoint(queueDescriptor, {}, true);

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

    await Promise.all(topics.map(topic => (
      messageConsumer.addSubscription(
        this.solclientFactory.createTopicDestination(topic),
        topic,
        2000
      )))
    );

    messageConsumer.connect();
    messageConsumer.disconnect();

    const queueBrowser = this.session.createQueueBrowser({ queueDescriptor });
    const [, messages] = await Promise.all([
      queueBrowser.connect(),
      queueBrowser.readMessages(count, 500)
    ]);
    queueBrowser.disconnect();

    return {
      messages,
      tempQueueName,
      cleanupReplay: () => {
        this.session.deprovisionEndpoint(queueDescriptor);
        this.session.disconnect();
      }
    };
  }

  async getReplayLogName() {
    const { config: { vpn } } = this.sourceDefinition;
    if (this.replayLogName === undefined) {
      const { data: [{ replayLogName }] } = await this.sempClient.getMsgVpnReplayLogs(vpn, { select: ['replayLogName'] });
      this.replayLogName = replayLogName;
    }
    return this.replayLogName;
  }

  async getTopics(sourceName) {
    if (this.topics === undefined) {
      const { config: { vpn } } = this.sourceDefinition;
      const { data: { networkTopic } } = await this.sempClient.getMsgVpnQueue(vpn, sourceName, { select: ['networkTopic'] });
      const { data: subscriptions } = await this.sempClient.getMsgVpnQueueSubscriptions(vpn, sourceName);

      this.topics = [
        networkTopic,
        ...subscriptions.map(s => s.subscriptionTopic)
      ];
    }
    return this.topics;
  }

  async getQueueReplayFrom({ messageId }) {
    try {
      const { config: { vpn } } = this.sourceDefinition;
      const replayLogName = await this.getReplayLogName();
      const cursor = [
        `<rpc><show><replay-log>`,
        `<name>${replayLogName}</name>`,
        `<vpn-name>${vpn}</vpn-name>`,
        `<messages/><newest/>`,
        `<msg-id>${messageId}</msg-id>`,
        `<detail/>`,
        `<num-elements>2</num-elements>`,
        `</replay-log></show></rpc>`,
      ].join('');

      const { data: msgMetaData } = await this.sempClient
        .getMsgVpnReplayLogMsgs(vpn, replayLogName, { cursor, count: 2 });
      const [, nextOldestMessage] = msgMetaData;
      return ({
        afterMsg: nextOldestMessage.replicationGroupMsgId
      });
    } catch (ex) {
      console.warn('Unable to find a suitable RGMID to start from. Will replay from beginning of time.', ex);
      return {};
    }
  }

  merge({ messages, msgMetaData }) {
    const messageIdx = new Map(msgMetaData.map(meta => ([meta.replicationGroupMsgId, { meta }])));
    messages.forEach(msg => {
      const msgObj = {
        payload: msg.getSdtContainer()?.getValue() || msg.getBinaryAttachment().toString(),
        headers: {
          destination: msg.getDestination().getName(),
          replicationGroupMsgId: msg.getReplicationGroupMessageId().toString(),
          guaranteedMessageId: msg.getGuaranteedMessageId()?.low,
          applicationMessageId: msg.getApplicationMessageId(),
          applicationMessageType: msg.getApplicationMessageType(),
          correlationId: msg.getCorrelationId(),
          deliveryMode: ['Direct', 'Persistent', 'Non-Persistent'][msg.getDeliveryMode()],
          replyTo: msg.getReplyTo(),
          senderId: msg.getSenderId(),
          senderTimestamp: msg.getSenderTimestamp(),
          sequenceNumber: msg.getSequenceNumber()
        },
        userProperties: Object.fromEntries((msg.getUserPropertyMap()?.getKeys() || []).map(key => {
          return [key, msg.getUserPropertyMap().getField(key).getValue()]
        }))
      };
      const metaData = messageIdx.get(msgObj.headers.replicationGroupMsgId);
      if (metaData) {
        Object.assign(metaData, msgObj);
      }
    });
    return [...messageIdx.values()];
  }

  close() { }
}

class LoggedMessagesReplayBrowser extends BaseBrowser {
  constructor({ sourceDefinition, startFrom, sempApi, solclientFactory }) {
    super({ sourceDefinition, sempApi, solclientFactory });
    this.startFrom = startFrom;
  }

  async getPage(page) {
    const { fromMsgId } = page;
    const { config: { vpn }, sourceName } = this.sourceDefinition;
    const count = this.pageSize;

    const replayFrom = fromMsgId ? await this.getQueueReplayFrom({ messageId: fromMsgId }) : page;
    const { tempQueueName, messages, cleanupReplay } = await this.replayToTempQueue({ sourceName, replayFrom });
    const msgMetaData =
      await this.getMessageMetaData({
        queueName: tempQueueName,
        fromMsgId,
        direction: MESSAGE_ORDER.OLDEST,
        count
      });

    const { data: tempQueue } = await this.sempClient.getMsgVpnQueue(vpn, tempQueueName);
    cleanupReplay();

    if (msgMetaData.length === 0) {
      return [];
    }

    const highestMsgId = msgMetaData[msgMetaData.length - 1]?.msgId;

    this.nextPage =
      (tempQueue.spooledMsgCount > count) ? ({ fromMsgId: highestMsgId + 1 }) : null;
    this.prevPages.push({ fromMsgId });

    return this.merge({ messages, msgMetaData });
  }

  async getMinMaxFromTime() {
    try {
      const { config: { vpn } } = this.sourceDefinition;
      const replayLogName = await this.getReplayLogName();
      const minMaxSpooledTime = await Promise.all([
        this.sempClient.getMsgVpnReplayLogMsgs(vpn, replayLogName, {
          cursor: [
            `<rpc><show><replay-log>`,
            `<name>${replayLogName}</name>`,
            `<vpn-name>${vpn}</vpn-name>`,
            `<messages/><oldest/>`,
            `<msg-id>${MIN_MSG_ID}</msg-id>`,
            `<detail/>`,
            `<num-elements>1</num-elements>`,
            `</replay-log></show></rpc>`,
          ].join(''),
          select: ['spooledTime'],
          count: 1
        }).then(({ data: [{ spooledTime }] }) => ['min', spooledTime]).catch(() => ['min', null]),
        this.sempClient.getMsgVpnReplayLogMsgs(vpn, replayLogName, {
          cursor: [
            `<rpc><show><replay-log>`,
            `<name>${replayLogName}</name>`,
            `<vpn-name>${vpn}</vpn-name>`,
            `<messages/><newest/>`,
            `<msg-id>${MAX_MSG_ID}</msg-id>`,
            `<detail/>`,
            `<num-elements>1</num-elements>`,
            `</replay-log></show></rpc>`,
          ].join(''),
          select: ['spooledTime'],
          count: 1
        }).then(({ data: [{ spooledTime }] }) => ['max', spooledTime]).catch(() => ['max', null]),
      ]);
      return Object.fromEntries(minMaxSpooledTime);
    } catch (ex) {
      return { min: null, max: null };
    }
  }
}

class QueuedMessagesReplayBrowser extends BaseBrowser {
  constructor({ sourceDefinition, startFrom, sempApi, solclientFactory }) {
    const messageOrderBy = startFrom.queuePosition;
    const isReversed = (messageOrderBy === MESSAGE_ORDER.NEWEST);

    super({
      sourceDefinition,
      startFrom: { fromMsgId: isReversed ? MAX_MSG_ID : MIN_MSG_ID },
      sempApi,
      solclientFactory
    });

    this.messageOrderBy = messageOrderBy;
    this.isReversed = isReversed;
  }

  async getPage(page) {
    const { fromMsgId } = page;
    const { config: { vpn }, sourceName } = this.sourceDefinition;
    const count = this.pageSize;
    const msgMetaData =
      await this.getMessageMetaData({
        queueName: sourceName,
        fromMsgId,
        direction: this.messageOrderBy,
        count
      });
    if (msgMetaData.length === 0) {
      return [];
    }

    const { data: queue } = await this.sempClient.getMsgVpnQueue(vpn, sourceName);

    const lowestMsgId = msgMetaData[this.isReversed ? (msgMetaData.length - 1) : 0].msgId;
    const highestMsgId = msgMetaData[this.isReversed ? 0 : (msgMetaData.length - 1)].msgId;

    const replayFrom = await this.getQueueReplayFrom({ messageId: lowestMsgId });
    const { messages, cleanupReplay } = await this.replayToTempQueue({ sourceName, replayFrom });
    cleanupReplay();

    this.nextPage = this.isReversed ?
      ((lowestMsgId > queue.lowestMsgId) ? ({ fromMsgId: lowestMsgId - 1 }) : null) :
      ((highestMsgId < queue.highestMsgId) ? ({ fromMsgId: highestMsgId + 1 }) : null);
    this.prevPages.push({ fromMsgId });

    return this.merge({ messages, msgMetaData });
  }
}

const NULL_BROWSER = new BaseBrowser();

export function useQueueBrowser(sourceDefinition, startFrom) {
  const [browser, setBrowser] = useState(NULL_BROWSER);
  const sempApi = useSempApi();

  useEffect(() => {
    const solclientFactory = solace.SolclientFactory;
    const { type } = sourceDefinition;

    if (startFrom === null) {
      return;
    }
    const newBrowser = (type) ? (
      (startFrom?.queuePosition) ?
        new QueuedMessagesReplayBrowser({ sourceDefinition, startFrom, sempApi, solclientFactory }) :
        new LoggedMessagesReplayBrowser({ sourceDefinition, startFrom, sempApi, solclientFactory })
    ) : NULL_BROWSER;

    setBrowser(newBrowser);
    return () => newBrowser.close();
  }, [sourceDefinition, startFrom]);

  return browser;
};