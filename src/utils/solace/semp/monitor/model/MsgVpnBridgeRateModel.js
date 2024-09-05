import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnBridgeRateModel model module.
 * @module model/MsgVpnBridgeRateModel
 * @version 2.36
 */
export class MsgVpnBridgeRateModel {
  /**
   * Constructs a new <code>MsgVpnBridgeRateModel</code>.
   * The rates for the Bridge. Deprecated since 2.13. All attributes in this object have been moved to the MsgVpnBridge object.
   * @alias module:model/MsgVpnBridgeRateModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnBridgeRateModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnBridgeRateModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnBridgeRateModel} The populated <code>MsgVpnBridgeRateModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnBridgeRateModel();
      if (data.hasOwnProperty('averageRxByteRate'))
        obj.averageRxByteRate = ApiClient.convertToType(data['averageRxByteRate'], 'Number');
      if (data.hasOwnProperty('averageRxMsgRate'))
        obj.averageRxMsgRate = ApiClient.convertToType(data['averageRxMsgRate'], 'Number');
      if (data.hasOwnProperty('averageTxByteRate'))
        obj.averageTxByteRate = ApiClient.convertToType(data['averageTxByteRate'], 'Number');
      if (data.hasOwnProperty('averageTxMsgRate'))
        obj.averageTxMsgRate = ApiClient.convertToType(data['averageTxMsgRate'], 'Number');
      if (data.hasOwnProperty('rxByteRate'))
        obj.rxByteRate = ApiClient.convertToType(data['rxByteRate'], 'Number');
      if (data.hasOwnProperty('rxMsgRate'))
        obj.rxMsgRate = ApiClient.convertToType(data['rxMsgRate'], 'Number');
      if (data.hasOwnProperty('txByteRate'))
        obj.txByteRate = ApiClient.convertToType(data['txByteRate'], 'Number');
      if (data.hasOwnProperty('txMsgRate'))
        obj.txMsgRate = ApiClient.convertToType(data['txMsgRate'], 'Number');
    }
    return obj;
  }
}

/**
 * The one minute average of the message rate received from the Bridge, in bytes per second (B/sec). Deprecated since 2.13. This attribute has been moved to the MsgVpnBridge object.
 * @member {Number} averageRxByteRate
 */
MsgVpnBridgeRateModel.prototype.averageRxByteRate = undefined;

/**
 * The one minute average of the message rate received from the Bridge, in messages per second (msg/sec). Deprecated since 2.13. This attribute has been moved to the MsgVpnBridge object.
 * @member {Number} averageRxMsgRate
 */
MsgVpnBridgeRateModel.prototype.averageRxMsgRate = undefined;

/**
 * The one minute average of the message rate transmitted to the Bridge, in bytes per second (B/sec). Deprecated since 2.13. This attribute has been moved to the MsgVpnBridge object.
 * @member {Number} averageTxByteRate
 */
MsgVpnBridgeRateModel.prototype.averageTxByteRate = undefined;

/**
 * The one minute average of the message rate transmitted to the Bridge, in messages per second (msg/sec). Deprecated since 2.13. This attribute has been moved to the MsgVpnBridge object.
 * @member {Number} averageTxMsgRate
 */
MsgVpnBridgeRateModel.prototype.averageTxMsgRate = undefined;

/**
 * The current message rate received from the Bridge, in bytes per second (B/sec). Deprecated since 2.13. This attribute has been moved to the MsgVpnBridge object.
 * @member {Number} rxByteRate
 */
MsgVpnBridgeRateModel.prototype.rxByteRate = undefined;

/**
 * The current message rate received from the Bridge, in messages per second (msg/sec). Deprecated since 2.13. This attribute has been moved to the MsgVpnBridge object.
 * @member {Number} rxMsgRate
 */
MsgVpnBridgeRateModel.prototype.rxMsgRate = undefined;

/**
 * The current message rate transmitted to the Bridge, in bytes per second (B/sec). Deprecated since 2.13. This attribute has been moved to the MsgVpnBridge object.
 * @member {Number} txByteRate
 */
MsgVpnBridgeRateModel.prototype.txByteRate = undefined;

/**
 * The current message rate transmitted to the Bridge, in messages per second (msg/sec). Deprecated since 2.13. This attribute has been moved to the MsgVpnBridge object.
 * @member {Number} txMsgRate
 */
MsgVpnBridgeRateModel.prototype.txMsgRate = undefined;

