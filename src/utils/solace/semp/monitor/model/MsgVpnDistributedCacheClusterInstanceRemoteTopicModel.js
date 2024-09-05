import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnDistributedCacheClusterInstanceRemoteTopicModel model module.
 * @module model/MsgVpnDistributedCacheClusterInstanceRemoteTopicModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheClusterInstanceRemoteTopicModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheClusterInstanceRemoteTopicModel</code>.
   * @alias module:model/MsgVpnDistributedCacheClusterInstanceRemoteTopicModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheClusterInstanceRemoteTopicModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheClusterInstanceRemoteTopicModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheClusterInstanceRemoteTopicModel} The populated <code>MsgVpnDistributedCacheClusterInstanceRemoteTopicModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheClusterInstanceRemoteTopicModel();
      if (data.hasOwnProperty('cacheName'))
        obj.cacheName = ApiClient.convertToType(data['cacheName'], 'String');
      if (data.hasOwnProperty('clusterName'))
        obj.clusterName = ApiClient.convertToType(data['clusterName'], 'String');
      if (data.hasOwnProperty('globalTopic'))
        obj.globalTopic = ApiClient.convertToType(data['globalTopic'], 'Boolean');
      if (data.hasOwnProperty('homeClusterName'))
        obj.homeClusterName = ApiClient.convertToType(data['homeClusterName'], 'String');
      if (data.hasOwnProperty('instanceName'))
        obj.instanceName = ApiClient.convertToType(data['instanceName'], 'String');
      if (data.hasOwnProperty('msgCount'))
        obj.msgCount = ApiClient.convertToType(data['msgCount'], 'Number');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('suspect'))
        obj.suspect = ApiClient.convertToType(data['suspect'], 'Boolean');
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
MsgVpnDistributedCacheClusterInstanceRemoteTopicModel.prototype.cacheName = undefined;

/**
 * The name of the Cache Cluster.
 * @member {String} clusterName
 */
MsgVpnDistributedCacheClusterInstanceRemoteTopicModel.prototype.clusterName = undefined;

/**
 * Indicates whether the type of the remote Topic is global.
 * @member {Boolean} globalTopic
 */
MsgVpnDistributedCacheClusterInstanceRemoteTopicModel.prototype.globalTopic = undefined;

/**
 * The name of the remote Home Cache Cluster.
 * @member {String} homeClusterName
 */
MsgVpnDistributedCacheClusterInstanceRemoteTopicModel.prototype.homeClusterName = undefined;

/**
 * The name of the Cache Instance.
 * @member {String} instanceName
 */
MsgVpnDistributedCacheClusterInstanceRemoteTopicModel.prototype.instanceName = undefined;

/**
 * The number of messages cached for the remote Topic.
 * @member {Number} msgCount
 */
MsgVpnDistributedCacheClusterInstanceRemoteTopicModel.prototype.msgCount = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnDistributedCacheClusterInstanceRemoteTopicModel.prototype.msgVpnName = undefined;

/**
 * Indicates whether the remote Topic is suspect due to the remote Home Cache Cluster being in the lost message state.
 * @member {Boolean} suspect
 */
MsgVpnDistributedCacheClusterInstanceRemoteTopicModel.prototype.suspect = undefined;

/**
 * The value of the remote Topic.
 * @member {String} topic
 */
MsgVpnDistributedCacheClusterInstanceRemoteTopicModel.prototype.topic = undefined;

