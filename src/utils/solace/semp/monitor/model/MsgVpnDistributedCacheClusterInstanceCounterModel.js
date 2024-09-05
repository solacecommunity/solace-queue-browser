import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnDistributedCacheClusterInstanceCounterModel model module.
 * @module model/MsgVpnDistributedCacheClusterInstanceCounterModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheClusterInstanceCounterModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheClusterInstanceCounterModel</code>.
   * The counters associated with the Cache Instance. Deprecated since 2.13. All attributes in this object have been moved to the MsgVpnDistributedCacheClusterInstance object.
   * @alias module:model/MsgVpnDistributedCacheClusterInstanceCounterModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheClusterInstanceCounterModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheClusterInstanceCounterModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheClusterInstanceCounterModel} The populated <code>MsgVpnDistributedCacheClusterInstanceCounterModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheClusterInstanceCounterModel();
      if (data.hasOwnProperty('msgCount'))
        obj.msgCount = ApiClient.convertToType(data['msgCount'], 'Number');
      if (data.hasOwnProperty('msgPeakCount'))
        obj.msgPeakCount = ApiClient.convertToType(data['msgPeakCount'], 'Number');
      if (data.hasOwnProperty('requestQueueDepthCount'))
        obj.requestQueueDepthCount = ApiClient.convertToType(data['requestQueueDepthCount'], 'Number');
      if (data.hasOwnProperty('requestQueueDepthPeakCount'))
        obj.requestQueueDepthPeakCount = ApiClient.convertToType(data['requestQueueDepthPeakCount'], 'Number');
      if (data.hasOwnProperty('topicCount'))
        obj.topicCount = ApiClient.convertToType(data['topicCount'], 'Number');
      if (data.hasOwnProperty('topicPeakCount'))
        obj.topicPeakCount = ApiClient.convertToType(data['topicPeakCount'], 'Number');
    }
    return obj;
  }
}

/**
 * The number of messages cached for the Cache Instance. Deprecated since 2.13. This attribute has been moved to the MsgVpnDistributedCacheClusterInstance object.
 * @member {Number} msgCount
 */
MsgVpnDistributedCacheClusterInstanceCounterModel.prototype.msgCount = undefined;

/**
 * The number of messages cached peak for the Cache Instance. Deprecated since 2.13. This attribute has been moved to the MsgVpnDistributedCacheClusterInstance object.
 * @member {Number} msgPeakCount
 */
MsgVpnDistributedCacheClusterInstanceCounterModel.prototype.msgPeakCount = undefined;

/**
 * The received request message queue depth for the Cache Instance. Deprecated since 2.13. This attribute has been moved to the MsgVpnDistributedCacheClusterInstance object.
 * @member {Number} requestQueueDepthCount
 */
MsgVpnDistributedCacheClusterInstanceCounterModel.prototype.requestQueueDepthCount = undefined;

/**
 * The received request message queue depth peak for the Cache Instance. Deprecated since 2.13. This attribute has been moved to the MsgVpnDistributedCacheClusterInstance object.
 * @member {Number} requestQueueDepthPeakCount
 */
MsgVpnDistributedCacheClusterInstanceCounterModel.prototype.requestQueueDepthPeakCount = undefined;

/**
 * The number of topics cached for the Cache Instance. Deprecated since 2.13. This attribute has been moved to the MsgVpnDistributedCacheClusterInstance object.
 * @member {Number} topicCount
 */
MsgVpnDistributedCacheClusterInstanceCounterModel.prototype.topicCount = undefined;

/**
 * The number of topics cached peak for the Cache Instance. Deprecated since 2.13. This attribute has been moved to the MsgVpnDistributedCacheClusterInstance object.
 * @member {Number} topicPeakCount
 */
MsgVpnDistributedCacheClusterInstanceCounterModel.prototype.topicPeakCount = undefined;

