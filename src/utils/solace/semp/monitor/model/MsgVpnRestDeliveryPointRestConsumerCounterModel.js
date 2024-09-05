import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnRestDeliveryPointRestConsumerCounterModel model module.
 * @module model/MsgVpnRestDeliveryPointRestConsumerCounterModel
 * @version 2.36
 */
export class MsgVpnRestDeliveryPointRestConsumerCounterModel {
  /**
   * Constructs a new <code>MsgVpnRestDeliveryPointRestConsumerCounterModel</code>.
   * The counters for the REST Consumer. Deprecated since 2.13. All attributes in this object have been moved to the MsgVpnRestDeliveryPointRestConsumer object.
   * @alias module:model/MsgVpnRestDeliveryPointRestConsumerCounterModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnRestDeliveryPointRestConsumerCounterModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRestDeliveryPointRestConsumerCounterModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRestDeliveryPointRestConsumerCounterModel} The populated <code>MsgVpnRestDeliveryPointRestConsumerCounterModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRestDeliveryPointRestConsumerCounterModel();
      if (data.hasOwnProperty('httpRequestConnectionCloseTxMsgCount'))
        obj.httpRequestConnectionCloseTxMsgCount = ApiClient.convertToType(data['httpRequestConnectionCloseTxMsgCount'], 'Number');
      if (data.hasOwnProperty('httpRequestOutstandingTxMsgCount'))
        obj.httpRequestOutstandingTxMsgCount = ApiClient.convertToType(data['httpRequestOutstandingTxMsgCount'], 'Number');
      if (data.hasOwnProperty('httpRequestTimedOutTxMsgCount'))
        obj.httpRequestTimedOutTxMsgCount = ApiClient.convertToType(data['httpRequestTimedOutTxMsgCount'], 'Number');
      if (data.hasOwnProperty('httpRequestTxByteCount'))
        obj.httpRequestTxByteCount = ApiClient.convertToType(data['httpRequestTxByteCount'], 'Number');
      if (data.hasOwnProperty('httpRequestTxMsgCount'))
        obj.httpRequestTxMsgCount = ApiClient.convertToType(data['httpRequestTxMsgCount'], 'Number');
      if (data.hasOwnProperty('httpResponseErrorRxMsgCount'))
        obj.httpResponseErrorRxMsgCount = ApiClient.convertToType(data['httpResponseErrorRxMsgCount'], 'Number');
      if (data.hasOwnProperty('httpResponseRxByteCount'))
        obj.httpResponseRxByteCount = ApiClient.convertToType(data['httpResponseRxByteCount'], 'Number');
      if (data.hasOwnProperty('httpResponseRxMsgCount'))
        obj.httpResponseRxMsgCount = ApiClient.convertToType(data['httpResponseRxMsgCount'], 'Number');
      if (data.hasOwnProperty('httpResponseSuccessRxMsgCount'))
        obj.httpResponseSuccessRxMsgCount = ApiClient.convertToType(data['httpResponseSuccessRxMsgCount'], 'Number');
    }
    return obj;
  }
}

/**
 * The number of HTTP request messages transmitted to the REST Consumer to close the connection. Deprecated since 2.13. This attribute has been moved to the MsgVpnRestDeliveryPointRestConsumer object.
 * @member {Number} httpRequestConnectionCloseTxMsgCount
 */
MsgVpnRestDeliveryPointRestConsumerCounterModel.prototype.httpRequestConnectionCloseTxMsgCount = undefined;

/**
 * The number of HTTP request messages transmitted to the REST Consumer that are waiting for a response. Deprecated since 2.13. This attribute has been moved to the MsgVpnRestDeliveryPointRestConsumer object.
 * @member {Number} httpRequestOutstandingTxMsgCount
 */
MsgVpnRestDeliveryPointRestConsumerCounterModel.prototype.httpRequestOutstandingTxMsgCount = undefined;

/**
 * The number of HTTP request messages transmitted to the REST Consumer that have timed out. Deprecated since 2.13. This attribute has been moved to the MsgVpnRestDeliveryPointRestConsumer object.
 * @member {Number} httpRequestTimedOutTxMsgCount
 */
MsgVpnRestDeliveryPointRestConsumerCounterModel.prototype.httpRequestTimedOutTxMsgCount = undefined;

/**
 * The amount of HTTP request messages transmitted to the REST Consumer, in bytes (B). Deprecated since 2.13. This attribute has been moved to the MsgVpnRestDeliveryPointRestConsumer object.
 * @member {Number} httpRequestTxByteCount
 */
MsgVpnRestDeliveryPointRestConsumerCounterModel.prototype.httpRequestTxByteCount = undefined;

/**
 * The number of HTTP request messages transmitted to the REST Consumer. Deprecated since 2.13. This attribute has been moved to the MsgVpnRestDeliveryPointRestConsumer object.
 * @member {Number} httpRequestTxMsgCount
 */
MsgVpnRestDeliveryPointRestConsumerCounterModel.prototype.httpRequestTxMsgCount = undefined;

/**
 * The number of HTTP client/server error response messages received from the REST Consumer. Deprecated since 2.13. This attribute has been moved to the MsgVpnRestDeliveryPointRestConsumer object.
 * @member {Number} httpResponseErrorRxMsgCount
 */
MsgVpnRestDeliveryPointRestConsumerCounterModel.prototype.httpResponseErrorRxMsgCount = undefined;

/**
 * The amount of HTTP response messages received from the REST Consumer, in bytes (B). Deprecated since 2.13. This attribute has been moved to the MsgVpnRestDeliveryPointRestConsumer object.
 * @member {Number} httpResponseRxByteCount
 */
MsgVpnRestDeliveryPointRestConsumerCounterModel.prototype.httpResponseRxByteCount = undefined;

/**
 * The number of HTTP response messages received from the REST Consumer. Deprecated since 2.13. This attribute has been moved to the MsgVpnRestDeliveryPointRestConsumer object.
 * @member {Number} httpResponseRxMsgCount
 */
MsgVpnRestDeliveryPointRestConsumerCounterModel.prototype.httpResponseRxMsgCount = undefined;

/**
 * The number of HTTP successful response messages received from the REST Consumer. Deprecated since 2.13. This attribute has been moved to the MsgVpnRestDeliveryPointRestConsumer object.
 * @member {Number} httpResponseSuccessRxMsgCount
 */
MsgVpnRestDeliveryPointRestConsumerCounterModel.prototype.httpResponseSuccessRxMsgCount = undefined;

