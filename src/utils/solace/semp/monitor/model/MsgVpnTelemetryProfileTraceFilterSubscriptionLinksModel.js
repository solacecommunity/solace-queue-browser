import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnTelemetryProfileTraceFilterSubscriptionLinksModel model module.
 * @module model/MsgVpnTelemetryProfileTraceFilterSubscriptionLinksModel
 * @version 2.36
 */
export class MsgVpnTelemetryProfileTraceFilterSubscriptionLinksModel {
  /**
   * Constructs a new <code>MsgVpnTelemetryProfileTraceFilterSubscriptionLinksModel</code>.
   * @alias module:model/MsgVpnTelemetryProfileTraceFilterSubscriptionLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTelemetryProfileTraceFilterSubscriptionLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTelemetryProfileTraceFilterSubscriptionLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTelemetryProfileTraceFilterSubscriptionLinksModel} The populated <code>MsgVpnTelemetryProfileTraceFilterSubscriptionLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTelemetryProfileTraceFilterSubscriptionLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Telemetry Trace Filter Subscription object.
 * @member {String} uri
 */
MsgVpnTelemetryProfileTraceFilterSubscriptionLinksModel.prototype.uri = undefined;

