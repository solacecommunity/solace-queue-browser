import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnRestDeliveryPointModel model module.
 * @module model/MsgVpnRestDeliveryPointModel
 * @version 2.36
 */
export class MsgVpnRestDeliveryPointModel {
  /**
   * Constructs a new <code>MsgVpnRestDeliveryPointModel</code>.
   * @alias module:model/MsgVpnRestDeliveryPointModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnRestDeliveryPointModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRestDeliveryPointModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRestDeliveryPointModel} The populated <code>MsgVpnRestDeliveryPointModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRestDeliveryPointModel();
      if (data.hasOwnProperty('clientName'))
        obj.clientName = ApiClient.convertToType(data['clientName'], 'String');
      if (data.hasOwnProperty('clientProfileName'))
        obj.clientProfileName = ApiClient.convertToType(data['clientProfileName'], 'String');
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('lastFailureReason'))
        obj.lastFailureReason = ApiClient.convertToType(data['lastFailureReason'], 'String');
      if (data.hasOwnProperty('lastFailureTime'))
        obj.lastFailureTime = ApiClient.convertToType(data['lastFailureTime'], 'Number');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('restDeliveryPointName'))
        obj.restDeliveryPointName = ApiClient.convertToType(data['restDeliveryPointName'], 'String');
      if (data.hasOwnProperty('service'))
        obj.service = ApiClient.convertToType(data['service'], 'String');
      if (data.hasOwnProperty('timeConnectionsBlocked'))
        obj.timeConnectionsBlocked = ApiClient.convertToType(data['timeConnectionsBlocked'], 'Number');
      if (data.hasOwnProperty('up'))
        obj.up = ApiClient.convertToType(data['up'], 'Boolean');
      if (data.hasOwnProperty('vendor'))
        obj.vendor = ApiClient.convertToType(data['vendor'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the Client for the REST Delivery Point.
 * @member {String} clientName
 */
MsgVpnRestDeliveryPointModel.prototype.clientName = undefined;

/**
 * The name of the Client Profile for the REST Delivery Point.
 * @member {String} clientProfileName
 */
MsgVpnRestDeliveryPointModel.prototype.clientProfileName = undefined;

/**
 * Indicates whether the REST Delivery Point is enabled.
 * @member {Boolean} enabled
 */
MsgVpnRestDeliveryPointModel.prototype.enabled = undefined;

/**
 * The reason for the last REST Delivery Point failure.
 * @member {String} lastFailureReason
 */
MsgVpnRestDeliveryPointModel.prototype.lastFailureReason = undefined;

/**
 * The timestamp of the last REST Delivery Point failure. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} lastFailureTime
 */
MsgVpnRestDeliveryPointModel.prototype.lastFailureTime = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnRestDeliveryPointModel.prototype.msgVpnName = undefined;

/**
 * The name of the REST Delivery Point.
 * @member {String} restDeliveryPointName
 */
MsgVpnRestDeliveryPointModel.prototype.restDeliveryPointName = undefined;

/**
 * The name of the service that this REST Delivery Point connects to. Internally the broker does not use this value; it is informational only. Available since 2.19.
 * @member {String} service
 */
MsgVpnRestDeliveryPointModel.prototype.service = undefined;

/**
 * The percentage of time the REST Delivery Point connections are blocked from transmitting data.
 * @member {Number} timeConnectionsBlocked
 */
MsgVpnRestDeliveryPointModel.prototype.timeConnectionsBlocked = undefined;

/**
 * Indicates whether the operational state of the REST Delivery Point is up.
 * @member {Boolean} up
 */
MsgVpnRestDeliveryPointModel.prototype.up = undefined;

/**
 * The name of the vendor that this REST Delivery Point connects to. Internally the broker does not use this value; it is informational only. Available since 2.19.
 * @member {String} vendor
 */
MsgVpnRestDeliveryPointModel.prototype.vendor = undefined;

