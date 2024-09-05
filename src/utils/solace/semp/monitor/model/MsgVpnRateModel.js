import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnRateModel model module.
 * @module model/MsgVpnRateModel
 * @version 2.36
 */
export class MsgVpnRateModel {
  /**
   * Constructs a new <code>MsgVpnRateModel</code>.
   * The rates for the Message VPN. Deprecated since 2.13. All attributes in this object have been moved to the MsgVpn object.
   * @alias module:model/MsgVpnRateModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnRateModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRateModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRateModel} The populated <code>MsgVpnRateModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRateModel();
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
      if (data.hasOwnProperty('tlsAverageRxByteRate'))
        obj.tlsAverageRxByteRate = ApiClient.convertToType(data['tlsAverageRxByteRate'], 'Number');
      if (data.hasOwnProperty('tlsAverageTxByteRate'))
        obj.tlsAverageTxByteRate = ApiClient.convertToType(data['tlsAverageTxByteRate'], 'Number');
      if (data.hasOwnProperty('tlsRxByteRate'))
        obj.tlsRxByteRate = ApiClient.convertToType(data['tlsRxByteRate'], 'Number');
      if (data.hasOwnProperty('tlsTxByteRate'))
        obj.tlsTxByteRate = ApiClient.convertToType(data['tlsTxByteRate'], 'Number');
      if (data.hasOwnProperty('txByteRate'))
        obj.txByteRate = ApiClient.convertToType(data['txByteRate'], 'Number');
      if (data.hasOwnProperty('txMsgRate'))
        obj.txMsgRate = ApiClient.convertToType(data['txMsgRate'], 'Number');
    }
    return obj;
  }
}

/**
 * The one minute average of the message rate received by the Message VPN, in bytes per second (B/sec). Deprecated since 2.13. This attribute has been moved to the MsgVpn object.
 * @member {Number} averageRxByteRate
 */
MsgVpnRateModel.prototype.averageRxByteRate = undefined;

/**
 * The one minute average of the message rate received by the Message VPN, in messages per second (msg/sec). Deprecated since 2.13. This attribute has been moved to the MsgVpn object.
 * @member {Number} averageRxMsgRate
 */
MsgVpnRateModel.prototype.averageRxMsgRate = undefined;

/**
 * The one minute average of the message rate transmitted by the Message VPN, in bytes per second (B/sec). Deprecated since 2.13. This attribute has been moved to the MsgVpn object.
 * @member {Number} averageTxByteRate
 */
MsgVpnRateModel.prototype.averageTxByteRate = undefined;

/**
 * The one minute average of the message rate transmitted by the Message VPN, in messages per second (msg/sec). Deprecated since 2.13. This attribute has been moved to the MsgVpn object.
 * @member {Number} averageTxMsgRate
 */
MsgVpnRateModel.prototype.averageTxMsgRate = undefined;

/**
 * The current message rate received by the Message VPN, in bytes per second (B/sec). Deprecated since 2.13. This attribute has been moved to the MsgVpn object.
 * @member {Number} rxByteRate
 */
MsgVpnRateModel.prototype.rxByteRate = undefined;

/**
 * The current message rate received by the Message VPN, in messages per second (msg/sec). Deprecated since 2.13. This attribute has been moved to the MsgVpn object.
 * @member {Number} rxMsgRate
 */
MsgVpnRateModel.prototype.rxMsgRate = undefined;

/**
 * The one minute average of the TLS message rate received by the Message VPN, in bytes per second (B/sec). Deprecated since 2.13. This attribute has been moved to the MsgVpn object.
 * @member {Number} tlsAverageRxByteRate
 */
MsgVpnRateModel.prototype.tlsAverageRxByteRate = undefined;

/**
 * The one minute average of the TLS message rate transmitted by the Message VPN, in bytes per second (B/sec). Deprecated since 2.13. This attribute has been moved to the MsgVpn object.
 * @member {Number} tlsAverageTxByteRate
 */
MsgVpnRateModel.prototype.tlsAverageTxByteRate = undefined;

/**
 * The current TLS message rate received by the Message VPN, in bytes per second (B/sec). Deprecated since 2.13. This attribute has been moved to the MsgVpn object.
 * @member {Number} tlsRxByteRate
 */
MsgVpnRateModel.prototype.tlsRxByteRate = undefined;

/**
 * The current TLS message rate transmitted by the Message VPN, in bytes per second (B/sec). Deprecated since 2.13. This attribute has been moved to the MsgVpn object.
 * @member {Number} tlsTxByteRate
 */
MsgVpnRateModel.prototype.tlsTxByteRate = undefined;

/**
 * The current message rate transmitted by the Message VPN, in bytes per second (B/sec). Deprecated since 2.13. This attribute has been moved to the MsgVpn object.
 * @member {Number} txByteRate
 */
MsgVpnRateModel.prototype.txByteRate = undefined;

/**
 * The current message rate transmitted by the Message VPN, in messages per second (msg/sec). Deprecated since 2.13. This attribute has been moved to the MsgVpn object.
 * @member {Number} txMsgRate
 */
MsgVpnRateModel.prototype.txMsgRate = undefined;

