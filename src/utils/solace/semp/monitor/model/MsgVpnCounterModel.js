import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnCounterModel model module.
 * @module model/MsgVpnCounterModel
 * @version 2.36
 */
export class MsgVpnCounterModel {
  /**
   * Constructs a new <code>MsgVpnCounterModel</code>.
   * The counters for the Message VPN. Deprecated since 2.13. All attributes in this object have been moved to the MsgVpn object.
   * @alias module:model/MsgVpnCounterModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnCounterModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCounterModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCounterModel} The populated <code>MsgVpnCounterModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCounterModel();
      if (data.hasOwnProperty('controlRxByteCount'))
        obj.controlRxByteCount = ApiClient.convertToType(data['controlRxByteCount'], 'Number');
      if (data.hasOwnProperty('controlRxMsgCount'))
        obj.controlRxMsgCount = ApiClient.convertToType(data['controlRxMsgCount'], 'Number');
      if (data.hasOwnProperty('controlTxByteCount'))
        obj.controlTxByteCount = ApiClient.convertToType(data['controlTxByteCount'], 'Number');
      if (data.hasOwnProperty('controlTxMsgCount'))
        obj.controlTxMsgCount = ApiClient.convertToType(data['controlTxMsgCount'], 'Number');
      if (data.hasOwnProperty('dataRxByteCount'))
        obj.dataRxByteCount = ApiClient.convertToType(data['dataRxByteCount'], 'Number');
      if (data.hasOwnProperty('dataRxMsgCount'))
        obj.dataRxMsgCount = ApiClient.convertToType(data['dataRxMsgCount'], 'Number');
      if (data.hasOwnProperty('dataTxByteCount'))
        obj.dataTxByteCount = ApiClient.convertToType(data['dataTxByteCount'], 'Number');
      if (data.hasOwnProperty('dataTxMsgCount'))
        obj.dataTxMsgCount = ApiClient.convertToType(data['dataTxMsgCount'], 'Number');
      if (data.hasOwnProperty('discardedRxMsgCount'))
        obj.discardedRxMsgCount = ApiClient.convertToType(data['discardedRxMsgCount'], 'Number');
      if (data.hasOwnProperty('discardedTxMsgCount'))
        obj.discardedTxMsgCount = ApiClient.convertToType(data['discardedTxMsgCount'], 'Number');
      if (data.hasOwnProperty('loginRxMsgCount'))
        obj.loginRxMsgCount = ApiClient.convertToType(data['loginRxMsgCount'], 'Number');
      if (data.hasOwnProperty('loginTxMsgCount'))
        obj.loginTxMsgCount = ApiClient.convertToType(data['loginTxMsgCount'], 'Number');
      if (data.hasOwnProperty('msgSpoolRxMsgCount'))
        obj.msgSpoolRxMsgCount = ApiClient.convertToType(data['msgSpoolRxMsgCount'], 'Number');
      if (data.hasOwnProperty('msgSpoolTxMsgCount'))
        obj.msgSpoolTxMsgCount = ApiClient.convertToType(data['msgSpoolTxMsgCount'], 'Number');
      if (data.hasOwnProperty('tlsRxByteCount'))
        obj.tlsRxByteCount = ApiClient.convertToType(data['tlsRxByteCount'], 'Number');
      if (data.hasOwnProperty('tlsTxByteCount'))
        obj.tlsTxByteCount = ApiClient.convertToType(data['tlsTxByteCount'], 'Number');
    }
    return obj;
  }
}

/**
 * The amount of client control messages received from clients by the Message VPN, in bytes (B). Deprecated since 2.13. This attribute has been moved to the MsgVpn object.
 * @member {Number} controlRxByteCount
 */
MsgVpnCounterModel.prototype.controlRxByteCount = undefined;

/**
 * The number of client control messages received from clients by the Message VPN. Deprecated since 2.13. This attribute has been moved to the MsgVpn object.
 * @member {Number} controlRxMsgCount
 */
MsgVpnCounterModel.prototype.controlRxMsgCount = undefined;

/**
 * The amount of client control messages transmitted to clients by the Message VPN, in bytes (B). Deprecated since 2.13. This attribute has been moved to the MsgVpn object.
 * @member {Number} controlTxByteCount
 */
MsgVpnCounterModel.prototype.controlTxByteCount = undefined;

/**
 * The number of client control messages transmitted to clients by the Message VPN. Deprecated since 2.13. This attribute has been moved to the MsgVpn object.
 * @member {Number} controlTxMsgCount
 */
MsgVpnCounterModel.prototype.controlTxMsgCount = undefined;

/**
 * The amount of client data messages received from clients by the Message VPN, in bytes (B). Deprecated since 2.13. This attribute has been moved to the MsgVpn object.
 * @member {Number} dataRxByteCount
 */
MsgVpnCounterModel.prototype.dataRxByteCount = undefined;

/**
 * The number of client data messages received from clients by the Message VPN. Deprecated since 2.13. This attribute has been moved to the MsgVpn object.
 * @member {Number} dataRxMsgCount
 */
MsgVpnCounterModel.prototype.dataRxMsgCount = undefined;

/**
 * The amount of client data messages transmitted to clients by the Message VPN, in bytes (B). Deprecated since 2.13. This attribute has been moved to the MsgVpn object.
 * @member {Number} dataTxByteCount
 */
MsgVpnCounterModel.prototype.dataTxByteCount = undefined;

/**
 * The number of client data messages transmitted to clients by the Message VPN. Deprecated since 2.13. This attribute has been moved to the MsgVpn object.
 * @member {Number} dataTxMsgCount
 */
MsgVpnCounterModel.prototype.dataTxMsgCount = undefined;

/**
 * The number of messages discarded during reception by the Message VPN. Deprecated since 2.13. This attribute has been moved to the MsgVpn object.
 * @member {Number} discardedRxMsgCount
 */
MsgVpnCounterModel.prototype.discardedRxMsgCount = undefined;

/**
 * The number of messages discarded during transmission by the Message VPN. Deprecated since 2.13. This attribute has been moved to the MsgVpn object.
 * @member {Number} discardedTxMsgCount
 */
MsgVpnCounterModel.prototype.discardedTxMsgCount = undefined;

/**
 * The number of login request messages received by the Message VPN. Deprecated since 2.13. This attribute has been moved to the MsgVpn object.
 * @member {Number} loginRxMsgCount
 */
MsgVpnCounterModel.prototype.loginRxMsgCount = undefined;

/**
 * The number of login response messages transmitted by the Message VPN. Deprecated since 2.13. This attribute has been moved to the MsgVpn object.
 * @member {Number} loginTxMsgCount
 */
MsgVpnCounterModel.prototype.loginTxMsgCount = undefined;

/**
 * The number of guaranteed messages received by the Message VPN. Deprecated since 2.13. This attribute has been moved to the MsgVpn object.
 * @member {Number} msgSpoolRxMsgCount
 */
MsgVpnCounterModel.prototype.msgSpoolRxMsgCount = undefined;

/**
 * The number of guaranteed messages transmitted by the Message VPN. One message to multiple clients is counted as one message. Deprecated since 2.13. This attribute has been moved to the MsgVpn object.
 * @member {Number} msgSpoolTxMsgCount
 */
MsgVpnCounterModel.prototype.msgSpoolTxMsgCount = undefined;

/**
 * The amount of TLS messages received by the Message VPN, in bytes (B). Deprecated since 2.13. This attribute has been moved to the MsgVpn object.
 * @member {Number} tlsRxByteCount
 */
MsgVpnCounterModel.prototype.tlsRxByteCount = undefined;

/**
 * The amount of TLS messages transmitted by the Message VPN, in bytes (B). Deprecated since 2.13. This attribute has been moved to the MsgVpn object.
 * @member {Number} tlsTxByteCount
 */
MsgVpnCounterModel.prototype.tlsTxByteCount = undefined;

