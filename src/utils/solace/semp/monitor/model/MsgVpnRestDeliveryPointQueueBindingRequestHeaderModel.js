import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnRestDeliveryPointQueueBindingRequestHeaderModel model module.
 * @module model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderModel
 * @version 2.36
 */
export class MsgVpnRestDeliveryPointQueueBindingRequestHeaderModel {
  /**
   * Constructs a new <code>MsgVpnRestDeliveryPointQueueBindingRequestHeaderModel</code>.
   * @alias module:model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnRestDeliveryPointQueueBindingRequestHeaderModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderModel} The populated <code>MsgVpnRestDeliveryPointQueueBindingRequestHeaderModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRestDeliveryPointQueueBindingRequestHeaderModel();
      if (data.hasOwnProperty('headerName'))
        obj.headerName = ApiClient.convertToType(data['headerName'], 'String');
      if (data.hasOwnProperty('headerValue'))
        obj.headerValue = ApiClient.convertToType(data['headerValue'], 'String');
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
 * The name of the HTTP request header.
 * @member {String} headerName
 */
MsgVpnRestDeliveryPointQueueBindingRequestHeaderModel.prototype.headerName = undefined;

/**
 * A substitution expression for the value of the HTTP request header.
 * @member {String} headerValue
 */
MsgVpnRestDeliveryPointQueueBindingRequestHeaderModel.prototype.headerValue = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnRestDeliveryPointQueueBindingRequestHeaderModel.prototype.msgVpnName = undefined;

/**
 * The name of a queue in the Message VPN.
 * @member {String} queueBindingName
 */
MsgVpnRestDeliveryPointQueueBindingRequestHeaderModel.prototype.queueBindingName = undefined;

/**
 * The name of the REST Delivery Point.
 * @member {String} restDeliveryPointName
 */
MsgVpnRestDeliveryPointQueueBindingRequestHeaderModel.prototype.restDeliveryPointName = undefined;

