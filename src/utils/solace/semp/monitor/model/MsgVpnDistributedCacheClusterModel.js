import {ApiClient} from '../ApiClient';
import {EventThresholdByPercentModel} from './EventThresholdByPercentModel';
import {EventThresholdByValueModel} from './EventThresholdByValueModel';

/**
 * The MsgVpnDistributedCacheClusterModel model module.
 * @module model/MsgVpnDistributedCacheClusterModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheClusterModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheClusterModel</code>.
   * @alias module:model/MsgVpnDistributedCacheClusterModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheClusterModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheClusterModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheClusterModel} The populated <code>MsgVpnDistributedCacheClusterModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheClusterModel();
      if (data.hasOwnProperty('cacheName'))
        obj.cacheName = ApiClient.convertToType(data['cacheName'], 'String');
      if (data.hasOwnProperty('clusterName'))
        obj.clusterName = ApiClient.convertToType(data['clusterName'], 'String');
      if (data.hasOwnProperty('deliverToOneOverrideEnabled'))
        obj.deliverToOneOverrideEnabled = ApiClient.convertToType(data['deliverToOneOverrideEnabled'], 'Boolean');
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('eventDataByteRateThreshold'))
        obj.eventDataByteRateThreshold = EventThresholdByValueModel.constructFromObject(data['eventDataByteRateThreshold']);
      if (data.hasOwnProperty('eventDataMsgRateThreshold'))
        obj.eventDataMsgRateThreshold = EventThresholdByValueModel.constructFromObject(data['eventDataMsgRateThreshold']);
      if (data.hasOwnProperty('eventMaxMemoryThreshold'))
        obj.eventMaxMemoryThreshold = EventThresholdByPercentModel.constructFromObject(data['eventMaxMemoryThreshold']);
      if (data.hasOwnProperty('eventMaxTopicsThreshold'))
        obj.eventMaxTopicsThreshold = EventThresholdByPercentModel.constructFromObject(data['eventMaxTopicsThreshold']);
      if (data.hasOwnProperty('eventRequestQueueDepthThreshold'))
        obj.eventRequestQueueDepthThreshold = EventThresholdByPercentModel.constructFromObject(data['eventRequestQueueDepthThreshold']);
      if (data.hasOwnProperty('eventRequestRateThreshold'))
        obj.eventRequestRateThreshold = EventThresholdByValueModel.constructFromObject(data['eventRequestRateThreshold']);
      if (data.hasOwnProperty('eventResponseRateThreshold'))
        obj.eventResponseRateThreshold = EventThresholdByValueModel.constructFromObject(data['eventResponseRateThreshold']);
      if (data.hasOwnProperty('globalCachingEnabled'))
        obj.globalCachingEnabled = ApiClient.convertToType(data['globalCachingEnabled'], 'Boolean');
      if (data.hasOwnProperty('globalCachingHeartbeat'))
        obj.globalCachingHeartbeat = ApiClient.convertToType(data['globalCachingHeartbeat'], 'Number');
      if (data.hasOwnProperty('globalCachingTopicLifetime'))
        obj.globalCachingTopicLifetime = ApiClient.convertToType(data['globalCachingTopicLifetime'], 'Number');
      if (data.hasOwnProperty('maxMemory'))
        obj.maxMemory = ApiClient.convertToType(data['maxMemory'], 'Number');
      if (data.hasOwnProperty('maxMsgsPerTopic'))
        obj.maxMsgsPerTopic = ApiClient.convertToType(data['maxMsgsPerTopic'], 'Number');
      if (data.hasOwnProperty('maxRequestQueueDepth'))
        obj.maxRequestQueueDepth = ApiClient.convertToType(data['maxRequestQueueDepth'], 'Number');
      if (data.hasOwnProperty('maxTopicCount'))
        obj.maxTopicCount = ApiClient.convertToType(data['maxTopicCount'], 'Number');
      if (data.hasOwnProperty('msgLifetime'))
        obj.msgLifetime = ApiClient.convertToType(data['msgLifetime'], 'Number');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('msgsLost'))
        obj.msgsLost = ApiClient.convertToType(data['msgsLost'], 'Boolean');
      if (data.hasOwnProperty('newTopicAdvertisementEnabled'))
        obj.newTopicAdvertisementEnabled = ApiClient.convertToType(data['newTopicAdvertisementEnabled'], 'Boolean');
    }
    return obj;
  }
}

/**
 * The name of the Distributed Cache.
 * @member {String} cacheName
 */
MsgVpnDistributedCacheClusterModel.prototype.cacheName = undefined;

/**
 * The name of the Cache Cluster.
 * @member {String} clusterName
 */
MsgVpnDistributedCacheClusterModel.prototype.clusterName = undefined;

/**
 * Indicates whether deliver-to-one override is enabled for the Cache Cluster.
 * @member {Boolean} deliverToOneOverrideEnabled
 */
MsgVpnDistributedCacheClusterModel.prototype.deliverToOneOverrideEnabled = undefined;

/**
 * Indicates whether the Cache Cluster is enabled.
 * @member {Boolean} enabled
 */
MsgVpnDistributedCacheClusterModel.prototype.enabled = undefined;

/**
 * @member {module:model/EventThresholdByValueModel} eventDataByteRateThreshold
 */
MsgVpnDistributedCacheClusterModel.prototype.eventDataByteRateThreshold = undefined;

/**
 * @member {module:model/EventThresholdByValueModel} eventDataMsgRateThreshold
 */
MsgVpnDistributedCacheClusterModel.prototype.eventDataMsgRateThreshold = undefined;

/**
 * @member {module:model/EventThresholdByPercentModel} eventMaxMemoryThreshold
 */
MsgVpnDistributedCacheClusterModel.prototype.eventMaxMemoryThreshold = undefined;

/**
 * @member {module:model/EventThresholdByPercentModel} eventMaxTopicsThreshold
 */
MsgVpnDistributedCacheClusterModel.prototype.eventMaxTopicsThreshold = undefined;

/**
 * @member {module:model/EventThresholdByPercentModel} eventRequestQueueDepthThreshold
 */
MsgVpnDistributedCacheClusterModel.prototype.eventRequestQueueDepthThreshold = undefined;

/**
 * @member {module:model/EventThresholdByValueModel} eventRequestRateThreshold
 */
MsgVpnDistributedCacheClusterModel.prototype.eventRequestRateThreshold = undefined;

/**
 * @member {module:model/EventThresholdByValueModel} eventResponseRateThreshold
 */
MsgVpnDistributedCacheClusterModel.prototype.eventResponseRateThreshold = undefined;

/**
 * Indicates whether global caching for the Cache Cluster is enabled, and the Cache Instances will fetch topics from remote Home Cache Clusters when requested, and subscribe to those topics to cache them locally.
 * @member {Boolean} globalCachingEnabled
 */
MsgVpnDistributedCacheClusterModel.prototype.globalCachingEnabled = undefined;

/**
 * The heartbeat interval, in seconds, used by the Cache Instances to monitor connectivity with the remote Home Cache Clusters.
 * @member {Number} globalCachingHeartbeat
 */
MsgVpnDistributedCacheClusterModel.prototype.globalCachingHeartbeat = undefined;

/**
 * The topic lifetime, in seconds. If no client requests are received for a given global topic over the duration of the topic lifetime, then the Cache Instance will remove the subscription and cached messages for that topic. A value of 0 disables aging.
 * @member {Number} globalCachingTopicLifetime
 */
MsgVpnDistributedCacheClusterModel.prototype.globalCachingTopicLifetime = undefined;

/**
 * The maximum memory usage, in megabytes (MB), for each Cache Instance in the Cache Cluster.
 * @member {Number} maxMemory
 */
MsgVpnDistributedCacheClusterModel.prototype.maxMemory = undefined;

/**
 * The maximum number of messages per topic for each Cache Instance in the Cache Cluster. When at the maximum, old messages are removed as new messages arrive.
 * @member {Number} maxMsgsPerTopic
 */
MsgVpnDistributedCacheClusterModel.prototype.maxMsgsPerTopic = undefined;

/**
 * The maximum queue depth for cache requests received by the Cache Cluster.
 * @member {Number} maxRequestQueueDepth
 */
MsgVpnDistributedCacheClusterModel.prototype.maxRequestQueueDepth = undefined;

/**
 * The maximum number of topics for each Cache Instance in the Cache Cluster.
 * @member {Number} maxTopicCount
 */
MsgVpnDistributedCacheClusterModel.prototype.maxTopicCount = undefined;

/**
 * The message lifetime, in seconds. If a message remains cached for the duration of its lifetime, the Cache Instance will remove the message. A lifetime of 0 results in the message being retained indefinitely.
 * @member {Number} msgLifetime
 */
MsgVpnDistributedCacheClusterModel.prototype.msgLifetime = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnDistributedCacheClusterModel.prototype.msgVpnName = undefined;

/**
 * Indicates whether one or more messages were lost by any Cache Instance in the Cache Cluster.
 * @member {Boolean} msgsLost
 */
MsgVpnDistributedCacheClusterModel.prototype.msgsLost = undefined;

/**
 * Indicates whether advertising of new topics learned by the Cache Instances in this Cache Cluster is enabled.
 * @member {Boolean} newTopicAdvertisementEnabled
 */
MsgVpnDistributedCacheClusterModel.prototype.newTopicAdvertisementEnabled = undefined;

