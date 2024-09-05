import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnTelemetryProfileLinksModel model module.
 * @module model/MsgVpnTelemetryProfileLinksModel
 * @version 2.36
 */
export class MsgVpnTelemetryProfileLinksModel {
  /**
   * Constructs a new <code>MsgVpnTelemetryProfileLinksModel</code>.
   * @alias module:model/MsgVpnTelemetryProfileLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTelemetryProfileLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTelemetryProfileLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTelemetryProfileLinksModel} The populated <code>MsgVpnTelemetryProfileLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTelemetryProfileLinksModel();
      if (data.hasOwnProperty('receiverAclConnectExceptionsUri'))
        obj.receiverAclConnectExceptionsUri = ApiClient.convertToType(data['receiverAclConnectExceptionsUri'], 'String');
      if (data.hasOwnProperty('traceFiltersUri'))
        obj.traceFiltersUri = ApiClient.convertToType(data['traceFiltersUri'], 'String');
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Telemetry Profile's collection of Receiver ACL Connect Exception objects.
 * @member {String} receiverAclConnectExceptionsUri
 */
MsgVpnTelemetryProfileLinksModel.prototype.receiverAclConnectExceptionsUri = undefined;

/**
 * The URI of this Telemetry Profile's collection of Trace Filter objects.
 * @member {String} traceFiltersUri
 */
MsgVpnTelemetryProfileLinksModel.prototype.traceFiltersUri = undefined;

/**
 * The URI of this Telemetry Profile object.
 * @member {String} uri
 */
MsgVpnTelemetryProfileLinksModel.prototype.uri = undefined;

