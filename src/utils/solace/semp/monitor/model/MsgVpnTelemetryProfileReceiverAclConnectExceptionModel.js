import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnTelemetryProfileReceiverAclConnectExceptionModel model module.
 * @module model/MsgVpnTelemetryProfileReceiverAclConnectExceptionModel
 * @version 2.36
 */
export class MsgVpnTelemetryProfileReceiverAclConnectExceptionModel {
  /**
   * Constructs a new <code>MsgVpnTelemetryProfileReceiverAclConnectExceptionModel</code>.
   * @alias module:model/MsgVpnTelemetryProfileReceiverAclConnectExceptionModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTelemetryProfileReceiverAclConnectExceptionModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTelemetryProfileReceiverAclConnectExceptionModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTelemetryProfileReceiverAclConnectExceptionModel} The populated <code>MsgVpnTelemetryProfileReceiverAclConnectExceptionModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTelemetryProfileReceiverAclConnectExceptionModel();
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('receiverAclConnectExceptionAddress'))
        obj.receiverAclConnectExceptionAddress = ApiClient.convertToType(data['receiverAclConnectExceptionAddress'], 'String');
      if (data.hasOwnProperty('telemetryProfileName'))
        obj.telemetryProfileName = ApiClient.convertToType(data['telemetryProfileName'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnTelemetryProfileReceiverAclConnectExceptionModel.prototype.msgVpnName = undefined;

/**
 * The IP address/netmask of the receiver connect exception in CIDR form.
 * @member {String} receiverAclConnectExceptionAddress
 */
MsgVpnTelemetryProfileReceiverAclConnectExceptionModel.prototype.receiverAclConnectExceptionAddress = undefined;

/**
 * The name of the Telemetry Profile.
 * @member {String} telemetryProfileName
 */
MsgVpnTelemetryProfileReceiverAclConnectExceptionModel.prototype.telemetryProfileName = undefined;

