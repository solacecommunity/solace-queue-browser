import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnTelemetryProfileTraceFilterCollectionsSubscriptionsModel model module.
 * @module model/MsgVpnTelemetryProfileTraceFilterCollectionsSubscriptionsModel
 * @version 2.36
 */
export class MsgVpnTelemetryProfileTraceFilterCollectionsSubscriptionsModel {
  /**
   * Constructs a new <code>MsgVpnTelemetryProfileTraceFilterCollectionsSubscriptionsModel</code>.
   * @alias module:model/MsgVpnTelemetryProfileTraceFilterCollectionsSubscriptionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTelemetryProfileTraceFilterCollectionsSubscriptionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTelemetryProfileTraceFilterCollectionsSubscriptionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTelemetryProfileTraceFilterCollectionsSubscriptionsModel} The populated <code>MsgVpnTelemetryProfileTraceFilterCollectionsSubscriptionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTelemetryProfileTraceFilterCollectionsSubscriptionsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the subscriptions collection.
 * @member {Number} count
 */
MsgVpnTelemetryProfileTraceFilterCollectionsSubscriptionsModel.prototype.count = undefined;

