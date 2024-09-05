import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnTelemetryProfileReceiverAclConnectExceptionCollectionsModel model module.
 * @module model/MsgVpnTelemetryProfileReceiverAclConnectExceptionCollectionsModel
 * @version 2.36
 */
export class MsgVpnTelemetryProfileReceiverAclConnectExceptionCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnTelemetryProfileReceiverAclConnectExceptionCollectionsModel</code>.
   * @alias module:model/MsgVpnTelemetryProfileReceiverAclConnectExceptionCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTelemetryProfileReceiverAclConnectExceptionCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTelemetryProfileReceiverAclConnectExceptionCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTelemetryProfileReceiverAclConnectExceptionCollectionsModel} The populated <code>MsgVpnTelemetryProfileReceiverAclConnectExceptionCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTelemetryProfileReceiverAclConnectExceptionCollectionsModel();
    }
    return obj;
  }
}
