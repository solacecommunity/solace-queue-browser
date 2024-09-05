import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderModel model module.
 * @module model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderModel
 * @version 2.36
 */
export class MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderModel {
  /**
   * Constructs a new <code>MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderModel</code>.
   * @alias module:model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderModel} The populated <code>MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderModel();
      if (data.hasOwnProperty('headerName'))
        obj.headerName = ApiClient.convertToType(data['headerName'], 'String');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('queueBindingName'))
        obj.queueBindingName = ApiClient.convertToType(data['queueBindingName'], 'String');
      if (data.hasOwnProperty('restDeliveryPointName'))
        obj.restDeliveryPointName = ApiClient.convertToType(data['restDeliveryPointName'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the protected HTTP request header.
 * @member {String} headerName
 */
MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderModel.prototype.headerName = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderModel.prototype.msgVpnName = undefined;

/**
 * The name of a queue in the Message VPN.
 * @member {String} queueBindingName
 */
MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderModel.prototype.queueBindingName = undefined;

/**
 * The name of the REST Delivery Point.
 * @member {String} restDeliveryPointName
 */
MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderModel.prototype.restDeliveryPointName = undefined;

