import {ApiClient} from '../ApiClient';
import {MsgVpnTelemetryProfileTraceFilterCollectionsModel} from './MsgVpnTelemetryProfileTraceFilterCollectionsModel';
import {MsgVpnTelemetryProfileTraceFilterLinksModel} from './MsgVpnTelemetryProfileTraceFilterLinksModel';
import {MsgVpnTelemetryProfileTraceFilterModel} from './MsgVpnTelemetryProfileTraceFilterModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnTelemetryProfileTraceFilterResponseModel model module.
 * @module model/MsgVpnTelemetryProfileTraceFilterResponseModel
 * @version 2.36
 */
export class MsgVpnTelemetryProfileTraceFilterResponseModel {
  /**
   * Constructs a new <code>MsgVpnTelemetryProfileTraceFilterResponseModel</code>.
   * @alias module:model/MsgVpnTelemetryProfileTraceFilterResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnTelemetryProfileTraceFilterResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTelemetryProfileTraceFilterResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTelemetryProfileTraceFilterResponseModel} The populated <code>MsgVpnTelemetryProfileTraceFilterResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTelemetryProfileTraceFilterResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnTelemetryProfileTraceFilterCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnTelemetryProfileTraceFilterModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnTelemetryProfileTraceFilterLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnTelemetryProfileTraceFilterCollectionsModel} collections
 */
MsgVpnTelemetryProfileTraceFilterResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnTelemetryProfileTraceFilterModel} data
 */
MsgVpnTelemetryProfileTraceFilterResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnTelemetryProfileTraceFilterLinksModel} links
 */
MsgVpnTelemetryProfileTraceFilterResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnTelemetryProfileTraceFilterResponseModel.prototype.meta = undefined;

