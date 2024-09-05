import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnTelemetryProfileTraceFilterLinksModel model module.
 * @module model/MsgVpnTelemetryProfileTraceFilterLinksModel
 * @version 2.36
 */
export class MsgVpnTelemetryProfileTraceFilterLinksModel {
  /**
   * Constructs a new <code>MsgVpnTelemetryProfileTraceFilterLinksModel</code>.
   * @alias module:model/MsgVpnTelemetryProfileTraceFilterLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTelemetryProfileTraceFilterLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTelemetryProfileTraceFilterLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTelemetryProfileTraceFilterLinksModel} The populated <code>MsgVpnTelemetryProfileTraceFilterLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTelemetryProfileTraceFilterLinksModel();
      if (data.hasOwnProperty('subscriptionsUri'))
        obj.subscriptionsUri = ApiClient.convertToType(data['subscriptionsUri'], 'String');
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Trace Filter's collection of Telemetry Trace Filter Subscription objects.
 * @member {String} subscriptionsUri
 */
MsgVpnTelemetryProfileTraceFilterLinksModel.prototype.subscriptionsUri = undefined;

/**
 * The URI of this Trace Filter object.
 * @member {String} uri
 */
MsgVpnTelemetryProfileTraceFilterLinksModel.prototype.uri = undefined;

