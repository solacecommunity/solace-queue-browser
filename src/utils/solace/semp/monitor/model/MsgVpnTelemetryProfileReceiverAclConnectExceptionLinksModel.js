import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnTelemetryProfileReceiverAclConnectExceptionLinksModel model module.
 * @module model/MsgVpnTelemetryProfileReceiverAclConnectExceptionLinksModel
 * @version 2.36
 */
export class MsgVpnTelemetryProfileReceiverAclConnectExceptionLinksModel {
  /**
   * Constructs a new <code>MsgVpnTelemetryProfileReceiverAclConnectExceptionLinksModel</code>.
   * @alias module:model/MsgVpnTelemetryProfileReceiverAclConnectExceptionLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTelemetryProfileReceiverAclConnectExceptionLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTelemetryProfileReceiverAclConnectExceptionLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTelemetryProfileReceiverAclConnectExceptionLinksModel} The populated <code>MsgVpnTelemetryProfileReceiverAclConnectExceptionLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTelemetryProfileReceiverAclConnectExceptionLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Receiver ACL Connect Exception object.
 * @member {String} uri
 */
MsgVpnTelemetryProfileReceiverAclConnectExceptionLinksModel.prototype.uri = undefined;

