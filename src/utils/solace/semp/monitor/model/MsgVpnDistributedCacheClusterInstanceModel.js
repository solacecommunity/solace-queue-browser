import {ApiClient} from '../ApiClient';
import {MsgVpnDistributedCacheClusterInstanceCounterModel} from './MsgVpnDistributedCacheClusterInstanceCounterModel';
import {MsgVpnDistributedCacheClusterInstanceRateModel} from './MsgVpnDistributedCacheClusterInstanceRateModel';

/**
 * The MsgVpnDistributedCacheClusterInstanceModel model module.
 * @module model/MsgVpnDistributedCacheClusterInstanceModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheClusterInstanceModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheClusterInstanceModel</code>.
   * @alias module:model/MsgVpnDistributedCacheClusterInstanceModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheClusterInstanceModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheClusterInstanceModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheClusterInstanceModel} The populated <code>MsgVpnDistributedCacheClusterInstanceModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheClusterInstanceModel();
      if (data.hasOwnProperty('autoStartEnabled'))
        obj.autoStartEnabled = ApiClient.convertToType(data['autoStartEnabled'], 'Boolean');
      if (data.hasOwnProperty('averageDataRxBytePeakRate'))
        obj.averageDataRxBytePeakRate = ApiClient.convertToType(data['averageDataRxBytePeakRate'], 'Number');
      if (data.hasOwnProperty('averageDataRxByteRate'))
        obj.averageDataRxByteRate = ApiClient.convertToType(data['averageDataRxByteRate'], 'Number');
      if (data.hasOwnProperty('averageDataRxMsgPeakRate'))
        obj.averageDataRxMsgPeakRate = ApiClient.convertToType(data['averageDataRxMsgPeakRate'], 'Number');
      if (data.hasOwnProperty('averageDataRxMsgRate'))
        obj.averageDataRxMsgRate = ApiClient.convertToType(data['averageDataRxMsgRate'], 'Number');
      if (data.hasOwnProperty('averageDataTxMsgPeakRate'))
        obj.averageDataTxMsgPeakRate = ApiClient.convertToType(data['averageDataTxMsgPeakRate'], 'Number');
      if (data.hasOwnProperty('averageDataTxMsgRate'))
        obj.averageDataTxMsgRate = ApiClient.convertToType(data['averageDataTxMsgRate'], 'Number');
      if (data.hasOwnProperty('averageRequestRxPeakRate'))
        obj.averageRequestRxPeakRate = ApiClient.convertToType(data['averageRequestRxPeakRate'], 'Number');
      if (data.hasOwnProperty('averageRequestRxRate'))
        obj.averageRequestRxRate = ApiClient.convertToType(data['averageRequestRxRate'], 'Number');
      if (data.hasOwnProperty('cacheName'))
        obj.cacheName = ApiClient.convertToType(data['cacheName'], 'String');
      if (data.hasOwnProperty('clusterName'))
        obj.clusterName = ApiClient.convertToType(data['clusterName'], 'String');
      if (data.hasOwnProperty('counter'))
        obj.counter = MsgVpnDistributedCacheClusterInstanceCounterModel.constructFromObject(data['counter']);
      if (data.hasOwnProperty('dataRxBytePeakRate'))
        obj.dataRxBytePeakRate = ApiClient.convertToType(data['dataRxBytePeakRate'], 'Number');
      if (data.hasOwnProperty('dataRxByteRate'))
        obj.dataRxByteRate = ApiClient.convertToType(data['dataRxByteRate'], 'Number');
      if (data.hasOwnProperty('dataRxMsgPeakRate'))
        obj.dataRxMsgPeakRate = ApiClient.convertToType(data['dataRxMsgPeakRate'], 'Number');
      if (data.hasOwnProperty('dataRxMsgRate'))
        obj.dataRxMsgRate = ApiClient.convertToType(data['dataRxMsgRate'], 'Number');
      if (data.hasOwnProperty('dataTxMsgPeakRate'))
        obj.dataTxMsgPeakRate = ApiClient.convertToType(data['dataTxMsgPeakRate'], 'Number');
      if (data.hasOwnProperty('dataTxMsgRate'))
        obj.dataTxMsgRate = ApiClient.convertToType(data['dataTxMsgRate'], 'Number');
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('instanceName'))
        obj.instanceName = ApiClient.convertToType(data['instanceName'], 'String');
      if (data.hasOwnProperty('lastRegisteredTime'))
        obj.lastRegisteredTime = ApiClient.convertToType(data['lastRegisteredTime'], 'Number');
      if (data.hasOwnProperty('lastRxHeartbeatTime'))
        obj.lastRxHeartbeatTime = ApiClient.convertToType(data['lastRxHeartbeatTime'], 'Number');
      if (data.hasOwnProperty('lastRxSetLostMsgTime'))
        obj.lastRxSetLostMsgTime = ApiClient.convertToType(data['lastRxSetLostMsgTime'], 'Number');
      if (data.hasOwnProperty('lastStoppedReason'))
        obj.lastStoppedReason = ApiClient.convertToType(data['lastStoppedReason'], 'String');
      if (data.hasOwnProperty('lastStoppedTime'))
        obj.lastStoppedTime = ApiClient.convertToType(data['lastStoppedTime'], 'Number');
      if (data.hasOwnProperty('lastTxClearLostMsgTime'))
        obj.lastTxClearLostMsgTime = ApiClient.convertToType(data['lastTxClearLostMsgTime'], 'Number');
      if (data.hasOwnProperty('memoryUsage'))
        obj.memoryUsage = ApiClient.convertToType(data['memoryUsage'], 'Number');
      if (data.hasOwnProperty('msgCount'))
        obj.msgCount = ApiClient.convertToType(data['msgCount'], 'Number');
      if (data.hasOwnProperty('msgPeakCount'))
        obj.msgPeakCount = ApiClient.convertToType(data['msgPeakCount'], 'Number');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('msgsLost'))
        obj.msgsLost = ApiClient.convertToType(data['msgsLost'], 'Boolean');
      if (data.hasOwnProperty('rate'))
        obj.rate = MsgVpnDistributedCacheClusterInstanceRateModel.constructFromObject(data['rate']);
      if (data.hasOwnProperty('requestQueueDepthCount'))
        obj.requestQueueDepthCount = ApiClient.convertToType(data['requestQueueDepthCount'], 'Number');
      if (data.hasOwnProperty('requestQueueDepthPeakCount'))
        obj.requestQueueDepthPeakCount = ApiClient.convertToType(data['requestQueueDepthPeakCount'], 'Number');
      if (data.hasOwnProperty('requestRxPeakRate'))
        obj.requestRxPeakRate = ApiClient.convertToType(data['requestRxPeakRate'], 'Number');
      if (data.hasOwnProperty('requestRxRate'))
        obj.requestRxRate = ApiClient.convertToType(data['requestRxRate'], 'Number');
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
      if (data.hasOwnProperty('stopOnLostMsgEnabled'))
        obj.stopOnLostMsgEnabled = ApiClient.convertToType(data['stopOnLostMsgEnabled'], 'Boolean');
      if (data.hasOwnProperty('topicCount'))
        obj.topicCount = ApiClient.convertToType(data['topicCount'], 'Number');
      if (data.hasOwnProperty('topicPeakCount'))
        obj.topicPeakCount = ApiClient.convertToType(data['topicPeakCount'], 'Number');
    }
    return obj;
  }
}

/**
 * Indicates whether auto-start for the Cache Instance is enabled, and the Cache Instance will automatically attempt to transition from the Stopped operational state to Up whenever it restarts or reconnects to the message broker.
 * @member {Boolean} autoStartEnabled
 */
MsgVpnDistributedCacheClusterInstanceModel.prototype.autoStartEnabled = undefined;

/**
 * The peak of the one minute average of the data message rate received by the Cache Instance, in bytes per second (B/sec). Available since 2.13.
 * @member {Number} averageDataRxBytePeakRate
 */
MsgVpnDistributedCacheClusterInstanceModel.prototype.averageDataRxBytePeakRate = undefined;

/**
 * The one minute average of the data message rate received by the Cache Instance, in bytes per second (B/sec). Available since 2.13.
 * @member {Number} averageDataRxByteRate
 */
MsgVpnDistributedCacheClusterInstanceModel.prototype.averageDataRxByteRate = undefined;

/**
 * The peak of the one minute average of the data message rate received by the Cache Instance, in messages per second (msg/sec). Available since 2.13.
 * @member {Number} averageDataRxMsgPeakRate
 */
MsgVpnDistributedCacheClusterInstanceModel.prototype.averageDataRxMsgPeakRate = undefined;

/**
 * The one minute average of the data message rate received by the Cache Instance, in messages per second (msg/sec). Available since 2.13.
 * @member {Number} averageDataRxMsgRate
 */
MsgVpnDistributedCacheClusterInstanceModel.prototype.averageDataRxMsgRate = undefined;

/**
 * The peak of the one minute average of the data message rate transmitted by the Cache Instance, in messages per second (msg/sec). Available since 2.13.
 * @member {Number} averageDataTxMsgPeakRate
 */
MsgVpnDistributedCacheClusterInstanceModel.prototype.averageDataTxMsgPeakRate = undefined;

/**
 * The one minute average of the data message rate transmitted by the Cache Instance, in messages per second (msg/sec). Available since 2.13.
 * @member {Number} averageDataTxMsgRate
 */
MsgVpnDistributedCacheClusterInstanceModel.prototype.averageDataTxMsgRate = undefined;

/**
 * The peak of the one minute average of the request rate received by the Cache Instance, in requests per second (req/sec). Available since 2.13.
 * @member {Number} averageRequestRxPeakRate
 */
MsgVpnDistributedCacheClusterInstanceModel.prototype.averageRequestRxPeakRate = undefined;

/**
 * The one minute average of the request rate received by the Cache Instance, in requests per second (req/sec). Available since 2.13.
 * @member {Number} averageRequestRxRate
 */
MsgVpnDistributedCacheClusterInstanceModel.prototype.averageRequestRxRate = undefined;

/**
 * The name of the Distributed Cache.
 * @member {String} cacheName
 */
MsgVpnDistributedCacheClusterInstanceModel.prototype.cacheName = undefined;

/**
 * The name of the Cache Cluster.
 * @member {String} clusterName
 */
MsgVpnDistributedCacheClusterInstanceModel.prototype.clusterName = undefined;

/**
 * @member {module:model/MsgVpnDistributedCacheClusterInstanceCounterModel} counter
 */
MsgVpnDistributedCacheClusterInstanceModel.prototype.counter = undefined;

/**
 * The data message peak rate received by the Cache Instance, in bytes per second (B/sec). Available since 2.13.
 * @member {Number} dataRxBytePeakRate
 */
MsgVpnDistributedCacheClusterInstanceModel.prototype.dataRxBytePeakRate = undefined;

/**
 * The data message rate received by the Cache Instance, in bytes per second (B/sec). Available since 2.13.
 * @member {Number} dataRxByteRate
 */
MsgVpnDistributedCacheClusterInstanceModel.prototype.dataRxByteRate = undefined;

/**
 * The data message peak rate received by the Cache Instance, in messages per second (msg/sec). Available since 2.13.
 * @member {Number} dataRxMsgPeakRate
 */
MsgVpnDistributedCacheClusterInstanceModel.prototype.dataRxMsgPeakRate = undefined;

/**
 * The data message rate received by the Cache Instance, in messages per second (msg/sec). Available since 2.13.
 * @member {Number} dataRxMsgRate
 */
MsgVpnDistributedCacheClusterInstanceModel.prototype.dataRxMsgRate = undefined;

/**
 * The data message peak rate transmitted by the Cache Instance, in messages per second (msg/sec). Available since 2.13.
 * @member {Number} dataTxMsgPeakRate
 */
MsgVpnDistributedCacheClusterInstanceModel.prototype.dataTxMsgPeakRate = undefined;

/**
 * The data message rate transmitted by the Cache Instance, in messages per second (msg/sec). Available since 2.13.
 * @member {Number} dataTxMsgRate
 */
MsgVpnDistributedCacheClusterInstanceModel.prototype.dataTxMsgRate = undefined;

/**
 * Indicates whether the Cache Instance is enabled.
 * @member {Boolean} enabled
 */
MsgVpnDistributedCacheClusterInstanceModel.prototype.enabled = undefined;

/**
 * The name of the Cache Instance.
 * @member {String} instanceName
 */
MsgVpnDistributedCacheClusterInstanceModel.prototype.instanceName = undefined;

/**
 * The timestamp of when the Cache Instance last registered with the message broker. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} lastRegisteredTime
 */
MsgVpnDistributedCacheClusterInstanceModel.prototype.lastRegisteredTime = undefined;

/**
 * The timestamp of the last heartbeat message received from the Cache Instance. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} lastRxHeartbeatTime
 */
MsgVpnDistributedCacheClusterInstanceModel.prototype.lastRxHeartbeatTime = undefined;

/**
 * The timestamp of the last request for setting the lost message indication received from the Cache Instance. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} lastRxSetLostMsgTime
 */
MsgVpnDistributedCacheClusterInstanceModel.prototype.lastRxSetLostMsgTime = undefined;

/**
 * The reason why the Cache Instance was last stopped.
 * @member {String} lastStoppedReason
 */
MsgVpnDistributedCacheClusterInstanceModel.prototype.lastStoppedReason = undefined;

/**
 * The timestamp of when the Cache Instance was last stopped. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} lastStoppedTime
 */
MsgVpnDistributedCacheClusterInstanceModel.prototype.lastStoppedTime = undefined;

/**
 * The timestamp of the last request for clearing the lost message indication transmitted to the Cache Instance. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} lastTxClearLostMsgTime
 */
MsgVpnDistributedCacheClusterInstanceModel.prototype.lastTxClearLostMsgTime = undefined;

/**
 * The memory usage of the Cache Instance, in megabytes (MB).
 * @member {Number} memoryUsage
 */
MsgVpnDistributedCacheClusterInstanceModel.prototype.memoryUsage = undefined;

/**
 * The number of messages cached for the Cache Instance. Available since 2.13.
 * @member {Number} msgCount
 */
MsgVpnDistributedCacheClusterInstanceModel.prototype.msgCount = undefined;

/**
 * The number of messages cached peak for the Cache Instance. Available since 2.13.
 * @member {Number} msgPeakCount
 */
MsgVpnDistributedCacheClusterInstanceModel.prototype.msgPeakCount = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnDistributedCacheClusterInstanceModel.prototype.msgVpnName = undefined;

/**
 * Indicates whether one or more messages were lost by the Cache Instance.
 * @member {Boolean} msgsLost
 */
MsgVpnDistributedCacheClusterInstanceModel.prototype.msgsLost = undefined;

/**
 * @member {module:model/MsgVpnDistributedCacheClusterInstanceRateModel} rate
 */
MsgVpnDistributedCacheClusterInstanceModel.prototype.rate = undefined;

/**
 * The received request message queue depth for the Cache Instance. Available since 2.13.
 * @member {Number} requestQueueDepthCount
 */
MsgVpnDistributedCacheClusterInstanceModel.prototype.requestQueueDepthCount = undefined;

/**
 * The received request message queue depth peak for the Cache Instance. Available since 2.13.
 * @member {Number} requestQueueDepthPeakCount
 */
MsgVpnDistributedCacheClusterInstanceModel.prototype.requestQueueDepthPeakCount = undefined;

/**
 * The request peak rate received by the Cache Instance, in requests per second (req/sec). Available since 2.13.
 * @member {Number} requestRxPeakRate
 */
MsgVpnDistributedCacheClusterInstanceModel.prototype.requestRxPeakRate = undefined;

/**
 * The request rate received by the Cache Instance, in requests per second (req/sec). Available since 2.13.
 * @member {Number} requestRxRate
 */
MsgVpnDistributedCacheClusterInstanceModel.prototype.requestRxRate = undefined;

/**
 * The operational state of the Cache Instance. The allowed values and their meaning are:  <pre> \"invalid\" - The Cache Instance state is invalid. \"down\" - The Cache Instance is operationally down. \"stopped\" - The Cache Instance has stopped processing cache requests. \"stopped-lost-msg\" - The Cache Instance has stopped due to a lost message. \"register\" - The Cache Instance is registering with the broker. \"config-sync\" - The Cache Instance is synchronizing its configuration with the broker. \"cluster-sync\" - The Cache Instance is synchronizing its messages with the Cache Cluster. \"up\" - The Cache Instance is operationally up. \"backup\" - The Cache Instance is backing up its messages to disk. \"restore\" - The Cache Instance is restoring its messages from disk. \"not-available\" - The Cache Instance state is not available. </pre> 
 * @member {String} state
 */
MsgVpnDistributedCacheClusterInstanceModel.prototype.state = undefined;

/**
 * Indicates whether stop-on-lost-message is enabled, and the Cache Instance will transition to the Stopped operational state upon losing a message. When Stopped, it cannot accept or respond to cache requests, but continues to cache messages.
 * @member {Boolean} stopOnLostMsgEnabled
 */
MsgVpnDistributedCacheClusterInstanceModel.prototype.stopOnLostMsgEnabled = undefined;

/**
 * The number of topics cached for the Cache Instance. Available since 2.13.
 * @member {Number} topicCount
 */
MsgVpnDistributedCacheClusterInstanceModel.prototype.topicCount = undefined;

/**
 * The number of topics cached peak for the Cache Instance. Available since 2.13.
 * @member {Number} topicPeakCount
 */
MsgVpnDistributedCacheClusterInstanceModel.prototype.topicPeakCount = undefined;

