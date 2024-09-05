import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnTelemetryProfileTraceFilterModel model module.
 * @module model/MsgVpnTelemetryProfileTraceFilterModel
 * @version 2.36
 */
export class MsgVpnTelemetryProfileTraceFilterModel {
  /**
   * Constructs a new <code>MsgVpnTelemetryProfileTraceFilterModel</code>.
   * @alias module:model/MsgVpnTelemetryProfileTraceFilterModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTelemetryProfileTraceFilterModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTelemetryProfileTraceFilterModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTelemetryProfileTraceFilterModel} The populated <code>MsgVpnTelemetryProfileTraceFilterModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTelemetryProfileTraceFilterModel();
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('telemetryProfileName'))
        obj.telemetryProfileName = ApiClient.convertToType(data['telemetryProfileName'], 'String');
      if (data.hasOwnProperty('traceFilterName'))
        obj.traceFilterName = ApiClient.convertToType(data['traceFilterName'], 'String');
    }
    return obj;
  }
}

/**
 * Enable or disable the trace filter. When the filter is disabled, the filter's subscriptions will not trigger a message to be traced.
 * @member {Boolean} enabled
 */
MsgVpnTelemetryProfileTraceFilterModel.prototype.enabled = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnTelemetryProfileTraceFilterModel.prototype.msgVpnName = undefined;

/**
 * The name of the Telemetry Profile.
 * @member {String} telemetryProfileName
 */
MsgVpnTelemetryProfileTraceFilterModel.prototype.telemetryProfileName = undefined;

/**
 * A name used to identify the trace filter. Consider a name that describes the subscriptions contained within the filter, such as the name of the application and/or the scenario in which the trace filter might be enabled, such as \"appNameDebug\".
 * @member {String} traceFilterName
 */
MsgVpnTelemetryProfileTraceFilterModel.prototype.traceFilterName = undefined;

