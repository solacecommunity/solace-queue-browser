import {ApiClient} from '../ApiClient';
import {MsgVpnTelemetryProfileTraceFilterCollectionsSubscriptionsModel} from './MsgVpnTelemetryProfileTraceFilterCollectionsSubscriptionsModel';

/**
 * The MsgVpnTelemetryProfileTraceFilterCollectionsModel model module.
 * @module model/MsgVpnTelemetryProfileTraceFilterCollectionsModel
 * @version 2.36
 */
export class MsgVpnTelemetryProfileTraceFilterCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnTelemetryProfileTraceFilterCollectionsModel</code>.
   * @alias module:model/MsgVpnTelemetryProfileTraceFilterCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTelemetryProfileTraceFilterCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTelemetryProfileTraceFilterCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTelemetryProfileTraceFilterCollectionsModel} The populated <code>MsgVpnTelemetryProfileTraceFilterCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTelemetryProfileTraceFilterCollectionsModel();
      if (data.hasOwnProperty('subscriptions'))
        obj.subscriptions = MsgVpnTelemetryProfileTraceFilterCollectionsSubscriptionsModel.constructFromObject(data['subscriptions']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnTelemetryProfileTraceFilterCollectionsSubscriptionsModel} subscriptions
 */
MsgVpnTelemetryProfileTraceFilterCollectionsModel.prototype.subscriptions = undefined;

