import {ApiClient} from '../ApiClient';
import {MsgVpnTelemetryProfileTraceFilterSubscriptionCollectionsModel} from './MsgVpnTelemetryProfileTraceFilterSubscriptionCollectionsModel';
import {MsgVpnTelemetryProfileTraceFilterSubscriptionLinksModel} from './MsgVpnTelemetryProfileTraceFilterSubscriptionLinksModel';
import {MsgVpnTelemetryProfileTraceFilterSubscriptionModel} from './MsgVpnTelemetryProfileTraceFilterSubscriptionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnTelemetryProfileTraceFilterSubscriptionResponseModel model module.
 * @module model/MsgVpnTelemetryProfileTraceFilterSubscriptionResponseModel
 * @version 2.36
 */
export class MsgVpnTelemetryProfileTraceFilterSubscriptionResponseModel {
  /**
   * Constructs a new <code>MsgVpnTelemetryProfileTraceFilterSubscriptionResponseModel</code>.
   * @alias module:model/MsgVpnTelemetryProfileTraceFilterSubscriptionResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnTelemetryProfileTraceFilterSubscriptionResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTelemetryProfileTraceFilterSubscriptionResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTelemetryProfileTraceFilterSubscriptionResponseModel} The populated <code>MsgVpnTelemetryProfileTraceFilterSubscriptionResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTelemetryProfileTraceFilterSubscriptionResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnTelemetryProfileTraceFilterSubscriptionCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnTelemetryProfileTraceFilterSubscriptionModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnTelemetryProfileTraceFilterSubscriptionLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnTelemetryProfileTraceFilterSubscriptionCollectionsModel} collections
 */
MsgVpnTelemetryProfileTraceFilterSubscriptionResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnTelemetryProfileTraceFilterSubscriptionModel} data
 */
MsgVpnTelemetryProfileTraceFilterSubscriptionResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnTelemetryProfileTraceFilterSubscriptionLinksModel} links
 */
MsgVpnTelemetryProfileTraceFilterSubscriptionResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnTelemetryProfileTraceFilterSubscriptionResponseModel.prototype.meta = undefined;

