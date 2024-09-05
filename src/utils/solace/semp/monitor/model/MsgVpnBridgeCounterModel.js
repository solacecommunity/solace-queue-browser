import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnBridgeCounterModel model module.
 * @module model/MsgVpnBridgeCounterModel
 * @version 2.36
 */
export class MsgVpnBridgeCounterModel {
  /**
   * Constructs a new <code>MsgVpnBridgeCounterModel</code>.
   * The counters for the Bridge. Deprecated since 2.13. All attributes in this object have been moved to the MsgVpnBridge object.
   * @alias module:model/MsgVpnBridgeCounterModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnBridgeCounterModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnBridgeCounterModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnBridgeCounterModel} The populated <code>MsgVpnBridgeCounterModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnBridgeCounterModel();
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
      if (data.hasOwnProperty('rxByteCount'))
        obj.rxByteCount = ApiClient.convertToType(data['rxByteCount'], 'Number');
      if (data.hasOwnProperty('rxMsgCount'))
        obj.rxMsgCount = ApiClient.convertToType(data['rxMsgCount'], 'Number');
      if (data.hasOwnProperty('txByteCount'))
        obj.txByteCount = ApiClient.convertToType(data['txByteCount'], 'Number');
      if (data.hasOwnProperty('txMsgCount'))
        obj.txMsgCount = ApiClient.convertToType(data['txMsgCount'], 'Number');
    }
    return obj;
  }
}

/**
 * The amount of client control messages received from the Bridge, in bytes (B). Deprecated since 2.13. This attribute has been moved to the MsgVpnBridge object.
 * @member {Number} controlRxByteCount
 */
MsgVpnBridgeCounterModel.prototype.controlRxByteCount = undefined;

/**
 * The number of client control messages received from the Bridge. Deprecated since 2.13. This attribute has been moved to the MsgVpnBridge object.
 * @member {Number} controlRxMsgCount
 */
MsgVpnBridgeCounterModel.prototype.controlRxMsgCount = undefined;

/**
 * The amount of client control messages transmitted to the Bridge, in bytes (B). Deprecated since 2.13. This attribute has been moved to the MsgVpnBridge object.
 * @member {Number} controlTxByteCount
 */
MsgVpnBridgeCounterModel.prototype.controlTxByteCount = undefined;

/**
 * The number of client control messages transmitted to the Bridge. Deprecated since 2.13. This attribute has been moved to the MsgVpnBridge object.
 * @member {Number} controlTxMsgCount
 */
MsgVpnBridgeCounterModel.prototype.controlTxMsgCount = undefined;

/**
 * The amount of client data messages received from the Bridge, in bytes (B). Deprecated since 2.13. This attribute has been moved to the MsgVpnBridge object.
 * @member {Number} dataRxByteCount
 */
MsgVpnBridgeCounterModel.prototype.dataRxByteCount = undefined;

/**
 * The number of client data messages received from the Bridge. Deprecated since 2.13. This attribute has been moved to the MsgVpnBridge object.
 * @member {Number} dataRxMsgCount
 */
MsgVpnBridgeCounterModel.prototype.dataRxMsgCount = undefined;

/**
 * The amount of client data messages transmitted to the Bridge, in bytes (B). Deprecated since 2.13. This attribute has been moved to the MsgVpnBridge object.
 * @member {Number} dataTxByteCount
 */
MsgVpnBridgeCounterModel.prototype.dataTxByteCount = undefined;

/**
 * The number of client data messages transmitted to the Bridge. Deprecated since 2.13. This attribute has been moved to the MsgVpnBridge object.
 * @member {Number} dataTxMsgCount
 */
MsgVpnBridgeCounterModel.prototype.dataTxMsgCount = undefined;

/**
 * The number of messages discarded during reception from the Bridge. Deprecated since 2.13. This attribute has been moved to the MsgVpnBridge object.
 * @member {Number} discardedRxMsgCount
 */
MsgVpnBridgeCounterModel.prototype.discardedRxMsgCount = undefined;

/**
 * The number of messages discarded during transmission to the Bridge. Deprecated since 2.13. This attribute has been moved to the MsgVpnBridge object.
 * @member {Number} discardedTxMsgCount
 */
MsgVpnBridgeCounterModel.prototype.discardedTxMsgCount = undefined;

/**
 * The number of login request messages received from the Bridge. Deprecated since 2.13. This attribute has been moved to the MsgVpnBridge object.
 * @member {Number} loginRxMsgCount
 */
MsgVpnBridgeCounterModel.prototype.loginRxMsgCount = undefined;

/**
 * The number of login response messages transmitted to the Bridge. Deprecated since 2.13. This attribute has been moved to the MsgVpnBridge object.
 * @member {Number} loginTxMsgCount
 */
MsgVpnBridgeCounterModel.prototype.loginTxMsgCount = undefined;

/**
 * The number of guaranteed messages received from the Bridge. Deprecated since 2.13. This attribute has been moved to the MsgVpnBridge object.
 * @member {Number} msgSpoolRxMsgCount
 */
MsgVpnBridgeCounterModel.prototype.msgSpoolRxMsgCount = undefined;

/**
 * The amount of messages received from the Bridge, in bytes (B). Deprecated since 2.13. This attribute has been moved to the MsgVpnBridge object.
 * @member {Number} rxByteCount
 */
MsgVpnBridgeCounterModel.prototype.rxByteCount = undefined;

/**
 * The number of messages received from the Bridge. Deprecated since 2.13. This attribute has been moved to the MsgVpnBridge object.
 * @member {Number} rxMsgCount
 */
MsgVpnBridgeCounterModel.prototype.rxMsgCount = undefined;

/**
 * The amount of messages transmitted to the Bridge, in bytes (B). Deprecated since 2.13. This attribute has been moved to the MsgVpnBridge object.
 * @member {Number} txByteCount
 */
MsgVpnBridgeCounterModel.prototype.txByteCount = undefined;

/**
 * The number of messages transmitted to the Bridge. Deprecated since 2.13. This attribute has been moved to the MsgVpnBridge object.
 * @member {Number} txMsgCount
 */
MsgVpnBridgeCounterModel.prototype.txMsgCount = undefined;

