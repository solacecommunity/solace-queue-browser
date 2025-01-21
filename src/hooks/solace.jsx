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
  constructor(sourceDefinition, startFrom, sempApi, solclientFactory) {    
    this.sourceDefinition = sourceDefinition;
    this.startFrom = startFrom;

    const { config } = sourceDefinition;
    this.sempClient = sempApi.getClient(config);

    const {
      hostName, clientPort, useTls, vpn,
      clientUsername, clientPassword
    } = config;

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
    const { sourceName: queueName, config: { vpn }} = this.sourceDefinition;

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

    timeLog('connected to broker');

    const queueTopic = queue.networkTopic;
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
    ]);
    
    timeLog('triggering replay on consumer');
    messageConsumer.connect();
    messageConsumer.disconnect();
    
    const queueBrowser = this.session.createQueueBrowser({ queueDescriptor });
    const [, messages] = await Promise.all([
      queueBrowser.connect(),
      queueBrowser.readMessages(count, 500)
    ]);
    queueBrowser.disconnect();

    timeLog('getting metadata');
    const { data: msgMetaData } = await this.sempClient.getMsgVpnQueueMsgs(vpn, tempQueueName, { count });

    timeLog('disconnecting browser');
    this.session.deprovisionEndpoint(queueDescriptor);
    this.session.disconnect();

    timeEnd();

    this.replayPages.push(replayFrom);
    this.lastRgmid = messages[messages.length - 1]?.getReplicationGroupMessageId().toString();
    this.hasNext = msgMetaData[msgMetaData.length - 1]?.msgId < queue.highestMsgId;

    return messages.map((msg, n) => ({
      meta: msgMetaData[n],
      payload: msg.getSdtContainer()?.getValue() || msg.getBinaryAttachment().toString(),
      headers: {
        destination: msg.getDestination().getName(),
        replicationGroupMsgId: msg.getReplicationGroupMessageId().toString(),
        guaranteedMessageId: msg.getGuaranteedMessageId()?.low,
        applicationMessageId: msg.getApplicationMessageId(),
        applicationMessageType: msg.getApplicationMessageType(),
        correlationId: msg.getCorrelationId(),
        deliveryMode: ['Direct','Persistent','Non-Persistent'][msg.getDeliveryMode()],
        replyTo: msg.getReplyTo(),
        senderId: msg.getSenderId(),
        senderTimestamp: msg.getSenderTimestamp(),
        sequenceNumber: msg.getSequenceNumber()
      },
      userProperties: Object.fromEntries((msg.getUserPropertyMap()?.getKeys() || []).map(key => {
        return [key, msg.getUserPropertyMap().getField(key).getValue()]
      }))
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
  async getMinMaxFromTime() {
    const { config: { vpn } } = this.sourceDefinition;

    try {
      const replayLogs = await this.sempClient.getMsgVpnReplayLogs(vpn, { select: ['replayLogName'] });
      const { replayLogName } = replayLogs.data[0];

      const minMaxSpooledTime = await Promise.all([
        this.sempClient.getMsgVpnReplayLogMsgs(vpn, replayLogName, {
          cursor: [
            `<rpc><show><replay-log>`,
            `<name>${replayLogName}</name>`,
            `<vpn-name>${vpn}</vpn-name>`,
            `<messages/><oldest/>`,
            `<msg-id>1</msg-id>`,
            `<detail/>`,
            `<num-elements>1</num-elements>`,
            `</replay-log></show></rpc>`,
          ].join(''),
          select: ['spooledTime'],
          count: 1
        }).then(({ data: [ { spooledTime } ] }) => ['min', spooledTime]).catch(() => ['min', null]),
        this.sempClient.getMsgVpnReplayLogMsgs(vpn, replayLogName, {
          cursor: [
            `<rpc><show><replay-log>`,
            `<name>${replayLogName}</name>`,
            `<vpn-name>${vpn}</vpn-name>`,
            `<messages/><newest/>`,
            `<msg-id>9223372036854775808</msg-id>`,
            `<detail/>`,
            `<num-elements>1</num-elements>`,
            `</replay-log></show></rpc>`,
          ].join(''),
          select: ['spooledTime'],
          count: 1
        }).then(({ data: [ { spooledTime } ] }) => ['max', spooledTime]).catch(() => ['max', null]),
      ]);
      return Object.fromEntries(minMaxSpooledTime);
    } catch (ex) {
      return { min: null, max: null};
    }
  }
  async #getQueueReplayFrom({ lowestMsgId }) {
    const { config: { vpn } } = this.sourceDefinition;
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

class ReplayTopicBrowser {
  constructor(sourceDefinition, startFrom, sempApi, solclientFactory) {
    this.sourceDefinition = sourceDefinition;
    this.startFrom = startFrom;

    const { config } = sourceDefinition;
    this.sempClient = sempApi.getClient(config);

    const {
      hostName, clientPort, useTls, vpn,
      clientUsername, clientPassword
    } = config;

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
    const { sourceName: subscriptionName, topics, config: { vpn }} = this.sourceDefinition;

    const timeStart = () => console.time('ReplayTopicBrowser:getMessages');
    const timeLog = (message, ...rest) => console.timeLog('ReplayTopicBrowser:getMessages', message, ...rest);
    const timeEnd = () => console.timeEnd('ReplayTopicBrowser:getMessages');

    timeStart();
    timeLog('starting browser');

    await this.session.connect();

    timeLog('connected to broker');

    const tempQueueName = `#QB/${subscriptionName}/${Date.now()}`;
    const queueDescriptor = { name: tempQueueName, type: solace.QueueType.QUEUE };

    await this.session.provisionEndpoint(queueDescriptor, {}, true);
    timeLog('queue created', replayFrom);

    const messageConsumer = this.session.createMessageConsumer({
      queueDescriptor,
      acknowledgeMode: solace.MessageConsumerAcknowledgeMode.CLIENT,
      windowSize: 1,
      replayStartLocation: 
        replayFrom?.afterMsg ? this.solclientFactory.createReplicationGroupMessageId(replayFrom.afterMsg) :
        replayFrom?.fromTime ? this.solclientFactory.createReplayStartLocationDate(new Date(replayFrom.fromTime * 1000)) :
        this.solclientFactory.createReplayStartLocationBeginning()
    });

    
    await Promise.all([
      ...topics.map(topic => (
        messageConsumer.addSubscription(
          this.solclientFactory.createTopicDestination(topic),
          topic,
          2000
        )
      )),
    ]);
    
    timeLog('triggering replay on consumer');
    messageConsumer.connect();
    messageConsumer.disconnect();
    
    const queueBrowser = this.session.createQueueBrowser({ queueDescriptor });
    const [, messages] = await Promise.all([
      queueBrowser.connect(),
      queueBrowser.readMessages(count, 500)
    ]);
    queueBrowser.disconnect();
    
    timeLog(`got ${messages.length} messages, getting metadata`);
    const { data: msgMetaData } = await this.sempClient.getMsgVpnQueueMsgs(vpn, tempQueueName, { count });
    
    timeLog(`got metadata for ${msgMetaData.length} messages, disconnecting browser`);
    this.session.deprovisionEndpoint(queueDescriptor);
    this.session.disconnect();

    timeEnd();

    this.replayPages.push(replayFrom);
    this.lastRgmid = messages[messages.length - 1]?.getReplicationGroupMessageId().toString();
    this.hasNext = true; // TODO: compare last message ID vs lowest message ID on replay log

    const result = messages.map((msg, n) => ({
      meta: msgMetaData[n],
      payload: msg.getSdtContainer()?.getValue() || msg.getBinaryAttachment().toString(),
      headers: {
        destination: msg.getDestination().getName(),
        replicationGroupMsgId: msg.getReplicationGroupMessageId().toString(),
        guaranteedMessageId: msg.getGuaranteedMessageId()?.low,
        applicationMessageId: msg.getApplicationMessageId(),
        applicationMessageType: msg.getApplicationMessageType(),
        correlationId: msg.getCorrelationId(),
        deliveryMode: ['Direct','Persistent','Non-Persistent'][msg.getDeliveryMode()],
        replyTo: msg.getReplyTo(),
        senderId: msg.getSenderId(),
        senderTimestamp: msg.getSenderTimestamp(),
        sequenceNumber: msg.getSequenceNumber()
      },
      userProperties: Object.fromEntries((msg.getUserPropertyMap()?.getKeys() || []).map(key => {
        return [key, msg.getUserPropertyMap().getField(key).getValue()]
      }))
    }));

    return result;
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
  async getMinMaxFromTime() {
    const { vpn } = this.queueDefinition;

    try {
      const replayLogs = await this.sempClient.getMsgVpnReplayLogs(vpn, { select: ['replayLogName'] });
      const { replayLogName } = replayLogs.data[0];

      const minMaxSpooledTime = await Promise.all([
        this.sempClient.getMsgVpnReplayLogMsgs(vpn, replayLogName, {
          cursor: [
            `<rpc><show><replay-log>`,
            `<name>${replayLogName}</name>`,
            `<vpn-name>${vpn}</vpn-name>`,
            `<messages/><oldest/>`,
            `<msg-id>1</msg-id>`,
            `<detail/>`,
            `<num-elements>1</num-elements>`,
            `</replay-log></show></rpc>`,
          ].join(''),
          select: ['spooledTime'],
          count: 1
        }).then(({ data: [ { spooledTime } ] }) => ['min', spooledTime]).catch(() => ['min', null]),
        this.sempClient.getMsgVpnReplayLogMsgs(vpn, replayLogName, {
          cursor: [
            `<rpc><show><replay-log>`,
            `<name>${replayLogName}</name>`,
            `<vpn-name>${vpn}</vpn-name>`,
            `<messages/><newest/>`,
            `<msg-id>9223372036854775808</msg-id>`,
            `<detail/>`,
            `<num-elements>1</num-elements>`,
            `</replay-log></show></rpc>`,
          ].join(''),
          select: ['spooledTime'],
          count: 1
        }).then(({ data: [ { spooledTime } ] }) => ['max', spooledTime]).catch(() => ['max', null]),
      ]);
      return Object.fromEntries(minMaxSpooledTime);
    } catch (ex) {
      return { min: null, max: null};
    }
  }
}
class ForwardQueueBrowser {
  static #MIN_MSG_ID = 1n;

  constructor(sourceDefinition, startFrom, sempApi, solclientFactory) {
    this.sourceDefinition = sourceDefinition;
    this.startFrom = startFrom;

    const { config } = sourceDefinition;
    this.sempClient = sempApi.getClient(config);

    const {
      hostName, clientPort, useTls, vpn,
      clientUsername, clientPassword
    } = config;

    this.solclientFactory = solclientFactory;
    this.session = solclientFactory.createAsyncSession({
      url: `${(useTls ? 'wss' : 'ws')}://${hostName}:${clientPort}`,
      vpnName: vpn,
      userName: clientUsername,
      password: clientPassword
    });

    this.msgIdPages = [];
    this.oldestMsgId = ForwardQueueBrowser.#MIN_MSG_ID;
    this.hasNext = false;
  }

  async getMessages({ count = 50, fromMsgId = ForwardQueueBrowser.#MIN_MSG_ID } = {}) {
    const { sourceName: queueName, config: { vpn }} = this.sourceDefinition;
    const { data: queue } = await this.sempClient.getMsgVpnQueue(vpn, queueName);
    const { data: msgMetaData } = await this.sempClient.getMsgVpnQueueMsgs(vpn, queueName, {
      cursor: [
        `<rpc><show><queue>`,
        `<name>${queueName}</name>`,
        `<vpn-name>${vpn}</vpn-name>`,
        `<messages/><oldest/>`,
        `<msg-id>${fromMsgId}</msg-id>`,
        `<detail/><count/>`,
        `<num-elements>${count}</num-elements>`,
        `</queue></show></rpc>`
      ].join(''),
      count 
    });

    if(msgMetaData.length === 0) {
      return [];
    }

    const lowestMsgId = msgMetaData[0].msgId;
    const highestMsgId = msgMetaData[msgMetaData.length - 1].msgId;
    const replayFrom = await this.#getQueueReplayFrom({ lowestMsgId });

    const { data: subscriptions } = await this.sempClient.getMsgVpnQueueSubscriptions(vpn, queueName);
    await this.session.connect();

    const queueTopic = queue.networkTopic;
    const tempQueueName = `#QB/${queueName}/${Date.now()}`;
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
      ))
    ]);
    
    messageConsumer.connect();
    messageConsumer.disconnect();
    
    const queueBrowser = this.session.createQueueBrowser({ queueDescriptor });
    const [, messages] = await Promise.all([
      queueBrowser.connect(),
      queueBrowser.readMessages(count, 500)
    ]);
    queueBrowser.disconnect();

    this.session.deprovisionEndpoint(queueDescriptor);
    this.session.disconnect();

    const messageIdx = new Map(msgMetaData.map(meta => ([ meta.replicationGroupMsgId, { meta } ])));

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
          deliveryMode: ['Direct','Persistent','Non-Persistent'][msg.getDeliveryMode()],
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
      if(metaData) {
        Object.assign(metaData, msgObj);
      }
    });

    this.oldestMsgId = highestMsgId + 1;
    this.hasNext = highestMsgId < queue.highestMsgId;
    this.msgIdPages.push(fromMsgId);

    return [ ...messageIdx.values() ];
  }
  getFirstPage() {
    this.msgIdPages.length = 0;
    return this.getMessages();
  }
  getNextPage() { 
    return this.getMessages( { fromMsgId: this.oldestMsgId });
  }
  getPrevPage() {
    this.msgIdPages.pop();
    return this.getMessages( { fromMsgId: this.msgIdPages.pop() });
  }
  hasNextPage() { return this.hasNext; }
  hasPrevPage() { return this.msgIdPages.length > 1; }
  close() { }

  async #getQueueReplayFrom({ lowestMsgId }) {
    const { config: { vpn } } = this.sourceDefinition;
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

class ReverseQueueBrowser {
  static #MAX_MSG_ID = 9223372036854775808n;

  constructor(sourceDefinition, startFrom, sempApi, solclientFactory) {
    this.sourceDefinition = sourceDefinition;
    this.startFrom = startFrom;

    const { config } = sourceDefinition;
    this.sempClient = sempApi.getClient(config);

    const {
      hostName, clientPort, useTls, vpn,
      clientUsername, clientPassword
    } = config;

    this.solclientFactory = solclientFactory;
    this.session = solclientFactory.createAsyncSession({
      url: `${(useTls ? 'wss' : 'ws')}://${hostName}:${clientPort}`,
      vpnName: vpn,
      userName: clientUsername,
      password: clientPassword
    });

    this.msgIdPages = [];
    this.oldestMsgId = ReverseQueueBrowser.#MAX_MSG_ID;
    this.hasNext = false;
  }

  async getMessages({ count = 50, fromMsgId = ReverseQueueBrowser.#MAX_MSG_ID } = {}) {
    const { sourceName: queueName, config: { vpn }} = this.sourceDefinition;
    const { data: queue } = await this.sempClient.getMsgVpnQueue(vpn, queueName);
    const { data: msgMetaData } = await this.sempClient.getMsgVpnQueueMsgs(vpn, queueName, {
      cursor: [
        `<rpc><show><queue>`,
        `<name>${queueName}</name>`,
        `<vpn-name>${vpn}</vpn-name>`,
        `<messages/><newest/>`,
        `<msg-id>${fromMsgId}</msg-id>`,
        `<detail/><count/>`,
        `<num-elements>${count}</num-elements>`,
        `</queue></show></rpc>`
      ].join(''),
      count 
    });

    if(msgMetaData.length === 0) {
      return [];
    }

    const lowestMsgId = msgMetaData[msgMetaData.length - 1].msgId;
    const replayFrom = await this.#getQueueReplayFrom({ lowestMsgId });

    const { data: subscriptions } = await this.sempClient.getMsgVpnQueueSubscriptions(vpn, queueName);
    await this.session.connect();

    const queueTopic = queue.networkTopic;
    const tempQueueName = `#QB/${queueName}/${Date.now()}`;
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
    ]);
    
    messageConsumer.connect();
    messageConsumer.disconnect();
    
    const queueBrowser = this.session.createQueueBrowser({ queueDescriptor });
    const [, messages] = await Promise.all([
      queueBrowser.connect(),
      queueBrowser.readMessages(count, 500)
    ]);
    queueBrowser.disconnect();
    
    this.session.deprovisionEndpoint(queueDescriptor);
    this.session.disconnect();

    const messageIdx = new Map(msgMetaData.map(meta => ([ meta.replicationGroupMsgId, { meta } ])));

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
          deliveryMode: ['Direct','Persistent','Non-Persistent'][msg.getDeliveryMode()],
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
      if(metaData) {
        Object.assign(metaData, msgObj);
      }
    });

    this.oldestMsgId = lowestMsgId - 1;
    this.hasNext = lowestMsgId > queue.lowestMsgId;
    this.msgIdPages.push(fromMsgId);

    return [ ...messageIdx.values() ];
  }
  getFirstPage() {
    this.msgIdPages.length = 0;
    return this.getMessages();
  }
  getNextPage() { 
    return this.getMessages( { fromMsgId: this.oldestMsgId });
  }
  getPrevPage() {
    this.msgIdPages.pop();
    return this.getMessages( { fromMsgId: this.msgIdPages.pop() });
  }
  hasNextPage() { return this.hasNext; }
  hasPrevPage() { return this.msgIdPages.length > 1; }
  close() { }

  async #getQueueReplayFrom({ lowestMsgId }) {
    const { config: { vpn } } = this.sourceDefinition;
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

export function useQueueBrowser(sourceDefinition, startFrom) {
  console.log('useQueueBrowser', sourceDefinition);
  const sempApi = useSempApi();
  const solclientFactory = solace.SolclientFactory;
  
  const [browser, setBrowser] = useState(NULL_BROWSER);

  const { sourceName, type, config, topics } = sourceDefinition;

  useEffect(() => {
    const newBrowser = (type === 'queue') ? (
      startFrom?.tail ? 
        new ReverseQueueBrowser(sourceDefinition, startFrom, sempApi, solclientFactory) :
      startFrom?.head ?
        new ForwardQueueBrowser(sourceDefinition, startFrom, sempApi, solclientFactory) :
        new ReplayQueueBrowser(sourceDefinition, startFrom, sempApi, solclientFactory)
    ) : (type === 'topic') ? (
      new ReplayTopicBrowser(sourceDefinition, startFrom, sempApi, solclientFactory)
    ) : NULL_BROWSER;

    setBrowser(newBrowser);
    return () => newBrowser.close();
  }, [sourceDefinition, startFrom]);

  return browser;
};