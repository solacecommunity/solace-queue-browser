import {ApiClient} from '../ApiClient';
import {MsgVpnTelemetryProfileTraceFilterSubscriptionCollectionsModel} from './MsgVpnTelemetryProfileTraceFilterSubscriptionCollectionsModel';
import {MsgVpnTelemetryProfileTraceFilterSubscriptionLinksModel} from './MsgVpnTelemetryProfileTraceFilterSubscriptionLinksModel';
import {MsgVpnTelemetryProfileTraceFilterSubscriptionModel} from './MsgVpnTelemetryProfileTraceFilterSubscriptionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnTelemetryProfileTraceFilterSubscriptionsResponseModel model module.
 * @module model/MsgVpnTelemetryProfileTraceFilterSubscriptionsResponseModel
 * @version 2.36
 */
export class MsgVpnTelemetryProfileTraceFilterSubscriptionsResponseModel {
  /**
   * Constructs a new <code>MsgVpnTelemetryProfileTraceFilterSubscriptionsResponseModel</code>.
   * @alias module:model/MsgVpnTelemetryProfileTraceFilterSubscriptionsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnTelemetryProfileTraceFilterSubscriptionsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTelemetryProfileTraceFilterSubscriptionsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTelemetryProfileTraceFilterSubscriptionsResponseModel} The populated <code>MsgVpnTelemetryProfileTraceFilterSubscriptionsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTelemetryProfileTraceFilterSubscriptionsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnTelemetryProfileTraceFilterSubscriptionCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnTelemetryProfileTraceFilterSubscriptionModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnTelemetryProfileTraceFilterSubscriptionLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnTelemetryProfileTraceFilterSubscriptionCollectionsModel>} collections
 */
MsgVpnTelemetryProfileTraceFilterSubscriptionsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnTelemetryProfileTraceFilterSubscriptionModel>} data
 */
MsgVpnTelemetryProfileTraceFilterSubscriptionsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnTelemetryProfileTraceFilterSubscriptionLinksModel>} links
 */
MsgVpnTelemetryProfileTraceFilterSubscriptionsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnTelemetryProfileTraceFilterSubscriptionsResponseModel.prototype.meta = undefined;

