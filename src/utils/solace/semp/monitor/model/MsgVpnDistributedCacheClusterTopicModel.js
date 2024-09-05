import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnDistributedCacheClusterTopicModel model module.
 * @module model/MsgVpnDistributedCacheClusterTopicModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheClusterTopicModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheClusterTopicModel</code>.
   * @alias module:model/MsgVpnDistributedCacheClusterTopicModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheClusterTopicModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheClusterTopicModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheClusterTopicModel} The populated <code>MsgVpnDistributedCacheClusterTopicModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheClusterTopicModel();
      if (data.hasOwnProperty('cacheName'))
        obj.cacheName = ApiClient.convertToType(data['cacheName'], 'String');
      if (data.hasOwnProperty('clusterName'))
        obj.clusterName = ApiClient.convertToType(data['clusterName'], 'String');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('topic'))
        obj.topic = ApiClient.convertToType(data['topic'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the Distributed Cache.
 * @member {String} cacheName
 */
MsgVpnDistributedCacheClusterTopicModel.prototype.cacheName = undefined;

/**
 * The name of the Cache Cluster.
 * @member {String} clusterName
 */
MsgVpnDistributedCacheClusterTopicModel.prototype.clusterName = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnDistributedCacheClusterTopicModel.prototype.msgVpnName = undefined;

/**
 * The value of the Topic in the form a/b/c.
 * @member {String} topic
 */
MsgVpnDistributedCacheClusterTopicModel.prototype.topic = undefined;

