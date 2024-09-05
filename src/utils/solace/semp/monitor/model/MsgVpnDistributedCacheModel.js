import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnDistributedCacheModel model module.
 * @module model/MsgVpnDistributedCacheModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheModel</code>.
   * @alias module:model/MsgVpnDistributedCacheModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheModel} The populated <code>MsgVpnDistributedCacheModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheModel();
      if (data.hasOwnProperty('cacheManagementUp'))
        obj.cacheManagementUp = ApiClient.convertToType(data['cacheManagementUp'], 'Boolean');
      if (data.hasOwnProperty('cacheName'))
        obj.cacheName = ApiClient.convertToType(data['cacheName'], 'String');
      if (data.hasOwnProperty('cacheVirtualRouter'))
        obj.cacheVirtualRouter = ApiClient.convertToType(data['cacheVirtualRouter'], 'String');
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('heartbeat'))
        obj.heartbeat = ApiClient.convertToType(data['heartbeat'], 'Number');
      if (data.hasOwnProperty('lastFailureReason'))
        obj.lastFailureReason = ApiClient.convertToType(data['lastFailureReason'], 'String');
      if (data.hasOwnProperty('lastFailureTime'))
        obj.lastFailureTime = ApiClient.convertToType(data['lastFailureTime'], 'Number');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('msgsLost'))
        obj.msgsLost = ApiClient.convertToType(data['msgsLost'], 'Boolean');
      if (data.hasOwnProperty('scheduledDeleteMsgDayList'))
        obj.scheduledDeleteMsgDayList = ApiClient.convertToType(data['scheduledDeleteMsgDayList'], 'String');
      if (data.hasOwnProperty('scheduledDeleteMsgTimeList'))
        obj.scheduledDeleteMsgTimeList = ApiClient.convertToType(data['scheduledDeleteMsgTimeList'], 'String');
    }
    return obj;
  }
}

/**
 * Indicates whether managing of the distributed cache over the  message bus is operationally up in the Message VPN. Available since 2.28.
 * @member {Boolean} cacheManagementUp
 */
MsgVpnDistributedCacheModel.prototype.cacheManagementUp = undefined;

/**
 * The name of the Distributed Cache.
 * @member {String} cacheName
 */
MsgVpnDistributedCacheModel.prototype.cacheName = undefined;

/**
 * Allowed values for the <code>cacheVirtualRouter</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnDistributedCacheModel.CacheVirtualRouterEnum = {
  /**
   * value: "auto"
   * @const
   */
  auto: "auto"
};
/**
 * The virtual router of the Distributed Cache. The allowed values and their meaning are:  <pre> \"auto\" - The Distributed Cache is automatically assigned a virtual router at creation, depending on the broker's active-standby role. </pre>  Available since 2.28.
 * @member {module:model/MsgVpnDistributedCacheModel.CacheVirtualRouterEnum} cacheVirtualRouter
 */
MsgVpnDistributedCacheModel.prototype.cacheVirtualRouter = undefined;

/**
 * Indicates whether the Distributed Cache is enabled.
 * @member {Boolean} enabled
 */
MsgVpnDistributedCacheModel.prototype.enabled = undefined;

/**
 * The heartbeat interval, in seconds, used by the Cache Instances to monitor connectivity with the message broker.
 * @member {Number} heartbeat
 */
MsgVpnDistributedCacheModel.prototype.heartbeat = undefined;

/**
 * The reason for the last distributed cache management failure. Available since 2.28.
 * @member {String} lastFailureReason
 */
MsgVpnDistributedCacheModel.prototype.lastFailureReason = undefined;

/**
 * The timestamp of the last distributed cache management failure. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time). Available since 2.28.
 * @member {Number} lastFailureTime
 */
MsgVpnDistributedCacheModel.prototype.lastFailureTime = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnDistributedCacheModel.prototype.msgVpnName = undefined;

/**
 * Indicates whether one or more messages were lost by any Cache Instance in the Distributed Cache.
 * @member {Boolean} msgsLost
 */
MsgVpnDistributedCacheModel.prototype.msgsLost = undefined;

/**
 * The scheduled delete message day(s), specified as \"daily\" or a comma-separated list of days. Days must be specified as \"Sun\", \"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", or \"Sat\", with no spaces, and in sorted order from Sunday to Saturday. The empty-string (\"\") can also be specified, indicating no schedule is configured (\"scheduledDeleteMsgTimeList\" must also be configured to the empty-string).
 * @member {String} scheduledDeleteMsgDayList
 */
MsgVpnDistributedCacheModel.prototype.scheduledDeleteMsgDayList = undefined;

/**
 * The scheduled delete message time(s), specified as \"hourly\" or a comma-separated list of 24-hour times in the form hh:mm, or h:mm. There must be no spaces, and times (up to 4) must be in sorted order from 0:00 to 23:59. The empty-string (\"\") can also be specified, indicating no schedule is configured (\"scheduledDeleteMsgDayList\" must also be configured to the empty-string).
 * @member {String} scheduledDeleteMsgTimeList
 */
MsgVpnDistributedCacheModel.prototype.scheduledDeleteMsgTimeList = undefined;

