import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnMqttRetainCacheModel model module.
 * @module model/MsgVpnMqttRetainCacheModel
 * @version 2.36
 */
export class MsgVpnMqttRetainCacheModel {
  /**
   * Constructs a new <code>MsgVpnMqttRetainCacheModel</code>.
   * @alias module:model/MsgVpnMqttRetainCacheModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnMqttRetainCacheModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnMqttRetainCacheModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnMqttRetainCacheModel} The populated <code>MsgVpnMqttRetainCacheModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnMqttRetainCacheModel();
      if (data.hasOwnProperty('backupCacheInstance'))
        obj.backupCacheInstance = ApiClient.convertToType(data['backupCacheInstance'], 'String');
      if (data.hasOwnProperty('backupFailureReason'))
        obj.backupFailureReason = ApiClient.convertToType(data['backupFailureReason'], 'String');
      if (data.hasOwnProperty('backupUp'))
        obj.backupUp = ApiClient.convertToType(data['backupUp'], 'Boolean');
      if (data.hasOwnProperty('backupUptime'))
        obj.backupUptime = ApiClient.convertToType(data['backupUptime'], 'Number');
      if (data.hasOwnProperty('cacheCluster'))
        obj.cacheCluster = ApiClient.convertToType(data['cacheCluster'], 'String');
      if (data.hasOwnProperty('cacheName'))
        obj.cacheName = ApiClient.convertToType(data['cacheName'], 'String');
      if (data.hasOwnProperty('distributedCache'))
        obj.distributedCache = ApiClient.convertToType(data['distributedCache'], 'String');
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('failureReason'))
        obj.failureReason = ApiClient.convertToType(data['failureReason'], 'String');
      if (data.hasOwnProperty('msgLifetime'))
        obj.msgLifetime = ApiClient.convertToType(data['msgLifetime'], 'Number');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('primaryCacheInstance'))
        obj.primaryCacheInstance = ApiClient.convertToType(data['primaryCacheInstance'], 'String');
      if (data.hasOwnProperty('primaryFailureReason'))
        obj.primaryFailureReason = ApiClient.convertToType(data['primaryFailureReason'], 'String');
      if (data.hasOwnProperty('primaryUp'))
        obj.primaryUp = ApiClient.convertToType(data['primaryUp'], 'Boolean');
      if (data.hasOwnProperty('primaryUptime'))
        obj.primaryUptime = ApiClient.convertToType(data['primaryUptime'], 'Number');
      if (data.hasOwnProperty('up'))
        obj.up = ApiClient.convertToType(data['up'], 'Boolean');
      if (data.hasOwnProperty('uptime'))
        obj.uptime = ApiClient.convertToType(data['uptime'], 'Number');
    }
    return obj;
  }
}

/**
 * The name of the backup Cache Instance associated with this MQTT Retain Cache.
 * @member {String} backupCacheInstance
 */
MsgVpnMqttRetainCacheModel.prototype.backupCacheInstance = undefined;

/**
 * The reason why the backup cache associated with this MQTT Retain Cache is operationally down, if any.
 * @member {String} backupFailureReason
 */
MsgVpnMqttRetainCacheModel.prototype.backupFailureReason = undefined;

/**
 * Indicates whether the backup cache associated with this MQTT Retain Cache is operationally up.
 * @member {Boolean} backupUp
 */
MsgVpnMqttRetainCacheModel.prototype.backupUp = undefined;

/**
 * The number of seconds that the backup cache associated with this MQTT Retain Cache has been operationally up.
 * @member {Number} backupUptime
 */
MsgVpnMqttRetainCacheModel.prototype.backupUptime = undefined;

/**
 * The name of the Cache Cluster associated with this MQTT Retain Cache.
 * @member {String} cacheCluster
 */
MsgVpnMqttRetainCacheModel.prototype.cacheCluster = undefined;

/**
 * The name of the MQTT Retain Cache.
 * @member {String} cacheName
 */
MsgVpnMqttRetainCacheModel.prototype.cacheName = undefined;

/**
 * The name of the Distributed Cache associated with this MQTT Retain Cache.
 * @member {String} distributedCache
 */
MsgVpnMqttRetainCacheModel.prototype.distributedCache = undefined;

/**
 * Indicates whether this MQTT Retain Cache is enabled. When the cache is disabled, neither retain messages nor retain requests will be delivered by the cache. However, live retain messages will continue to be delivered to currently connected MQTT clients.
 * @member {Boolean} enabled
 */
MsgVpnMqttRetainCacheModel.prototype.enabled = undefined;

/**
 * The reason why this MQTT Retain Cache is operationally down, if any.
 * @member {String} failureReason
 */
MsgVpnMqttRetainCacheModel.prototype.failureReason = undefined;

/**
 * The message lifetime, in seconds. If a message remains cached for the duration of its lifetime, the cache will remove the message. A lifetime of 0 results in the message being retained indefinitely, otherwise it must be 3 seconds or more.
 * @member {Number} msgLifetime
 */
MsgVpnMqttRetainCacheModel.prototype.msgLifetime = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnMqttRetainCacheModel.prototype.msgVpnName = undefined;

/**
 * The name of the primary Cache Instance associated with this MQTT Retain Cache.
 * @member {String} primaryCacheInstance
 */
MsgVpnMqttRetainCacheModel.prototype.primaryCacheInstance = undefined;

/**
 * The reason why the primary cache associated with this MQTT Retain Cache is operationally down, if any.
 * @member {String} primaryFailureReason
 */
MsgVpnMqttRetainCacheModel.prototype.primaryFailureReason = undefined;

/**
 * Indicates whether the primary cache associated with this MQTT Retain Cache is operationally up.
 * @member {Boolean} primaryUp
 */
MsgVpnMqttRetainCacheModel.prototype.primaryUp = undefined;

/**
 * The number of seconds that the primary cache associated with this MQTT Retain Cache has been operationally up.
 * @member {Number} primaryUptime
 */
MsgVpnMqttRetainCacheModel.prototype.primaryUptime = undefined;

/**
 * Indicates whether this MQTT Retain Cache is operationally up.
 * @member {Boolean} up
 */
MsgVpnMqttRetainCacheModel.prototype.up = undefined;

/**
 * The number of seconds that the MQTT Retain Cache has been operationally up.
 * @member {Number} uptime
 */
MsgVpnMqttRetainCacheModel.prototype.uptime = undefined;

