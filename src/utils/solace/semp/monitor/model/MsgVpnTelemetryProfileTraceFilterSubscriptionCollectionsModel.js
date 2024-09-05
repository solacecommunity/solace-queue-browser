import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnTelemetryProfileTraceFilterSubscriptionCollectionsModel model module.
 * @module model/MsgVpnTelemetryProfileTraceFilterSubscriptionCollectionsModel
 * @version 2.36
 */
export class MsgVpnTelemetryProfileTraceFilterSubscriptionCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnTelemetryProfileTraceFilterSubscriptionCollectionsModel</code>.
   * @alias module:model/MsgVpnTelemetryProfileTraceFilterSubscriptionCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTelemetryProfileTraceFilterSubscriptionCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTelemetryProfileTraceFilterSubscriptionCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTelemetryProfileTraceFilterSubscriptionCollectionsModel} The populated <code>MsgVpnTelemetryProfileTraceFilterSubscriptionCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTelemetryProfileTraceFilterSubscriptionCollectionsModel();
    }
    return obj;
  }
}
