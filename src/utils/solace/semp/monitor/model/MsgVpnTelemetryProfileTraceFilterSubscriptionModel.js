import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnTelemetryProfileTraceFilterSubscriptionModel model module.
 * @module model/MsgVpnTelemetryProfileTraceFilterSubscriptionModel
 * @version 2.36
 */
export class MsgVpnTelemetryProfileTraceFilterSubscriptionModel {
  /**
   * Constructs a new <code>MsgVpnTelemetryProfileTraceFilterSubscriptionModel</code>.
   * @alias module:model/MsgVpnTelemetryProfileTraceFilterSubscriptionModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTelemetryProfileTraceFilterSubscriptionModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTelemetryProfileTraceFilterSubscriptionModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTelemetryProfileTraceFilterSubscriptionModel} The populated <code>MsgVpnTelemetryProfileTraceFilterSubscriptionModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTelemetryProfileTraceFilterSubscriptionModel();
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('subscription'))
        obj.subscription = ApiClient.convertToType(data['subscription'], 'String');
      if (data.hasOwnProperty('subscriptionSyntax'))
        obj.subscriptionSyntax = ApiClient.convertToType(data['subscriptionSyntax'], 'String');
      if (data.hasOwnProperty('telemetryProfileName'))
        obj.telemetryProfileName = ApiClient.convertToType(data['telemetryProfileName'], 'String');
      if (data.hasOwnProperty('traceFilterName'))
        obj.traceFilterName = ApiClient.convertToType(data['traceFilterName'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnTelemetryProfileTraceFilterSubscriptionModel.prototype.msgVpnName = undefined;

/**
 * Messages matching this subscription will follow this filter's configuration.
 * @member {String} subscription
 */
MsgVpnTelemetryProfileTraceFilterSubscriptionModel.prototype.subscription = undefined;

/**
 * Allowed values for the <code>subscriptionSyntax</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnTelemetryProfileTraceFilterSubscriptionModel.SubscriptionSyntaxEnum = {
  /**
   * value: "smf"
   * @const
   */
  smf: "smf",

  /**
   * value: "mqtt"
   * @const
   */
  mqtt: "mqtt"
};
/**
 * The syntax of the trace filter subscription. The allowed values and their meaning are:  <pre> \"smf\" - Subscription uses SMF syntax. \"mqtt\" - Subscription uses MQTT syntax. </pre> 
 * @member {module:model/MsgVpnTelemetryProfileTraceFilterSubscriptionModel.SubscriptionSyntaxEnum} subscriptionSyntax
 */
MsgVpnTelemetryProfileTraceFilterSubscriptionModel.prototype.subscriptionSyntax = undefined;

/**
 * The name of the Telemetry Profile.
 * @member {String} telemetryProfileName
 */
MsgVpnTelemetryProfileTraceFilterSubscriptionModel.prototype.telemetryProfileName = undefined;

/**
 * A name used to identify the trace filter. Consider a name that describes the subscriptions contained within the filter, such as the name of the application and/or the scenario in which the trace filter might be enabled, such as \"appNameDebug\".
 * @member {String} traceFilterName
 */
MsgVpnTelemetryProfileTraceFilterSubscriptionModel.prototype.traceFilterName = undefined;

