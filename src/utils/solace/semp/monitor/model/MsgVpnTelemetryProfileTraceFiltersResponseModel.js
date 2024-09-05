import {ApiClient} from '../ApiClient';
import {MsgVpnTelemetryProfileTraceFilterCollectionsModel} from './MsgVpnTelemetryProfileTraceFilterCollectionsModel';
import {MsgVpnTelemetryProfileTraceFilterLinksModel} from './MsgVpnTelemetryProfileTraceFilterLinksModel';
import {MsgVpnTelemetryProfileTraceFilterModel} from './MsgVpnTelemetryProfileTraceFilterModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnTelemetryProfileTraceFiltersResponseModel model module.
 * @module model/MsgVpnTelemetryProfileTraceFiltersResponseModel
 * @version 2.36
 */
export class MsgVpnTelemetryProfileTraceFiltersResponseModel {
  /**
   * Constructs a new <code>MsgVpnTelemetryProfileTraceFiltersResponseModel</code>.
   * @alias module:model/MsgVpnTelemetryProfileTraceFiltersResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnTelemetryProfileTraceFiltersResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTelemetryProfileTraceFiltersResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTelemetryProfileTraceFiltersResponseModel} The populated <code>MsgVpnTelemetryProfileTraceFiltersResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTelemetryProfileTraceFiltersResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnTelemetryProfileTraceFilterCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnTelemetryProfileTraceFilterModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnTelemetryProfileTraceFilterLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnTelemetryProfileTraceFilterCollectionsModel>} collections
 */
MsgVpnTelemetryProfileTraceFiltersResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnTelemetryProfileTraceFilterModel>} data
 */
MsgVpnTelemetryProfileTraceFiltersResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnTelemetryProfileTraceFilterLinksModel>} links
 */
MsgVpnTelemetryProfileTraceFiltersResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnTelemetryProfileTraceFiltersResponseModel.prototype.meta = undefined;

