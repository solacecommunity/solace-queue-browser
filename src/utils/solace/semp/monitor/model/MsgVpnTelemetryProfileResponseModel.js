import {ApiClient} from '../ApiClient';
import {MsgVpnTelemetryProfileCollectionsModel} from './MsgVpnTelemetryProfileCollectionsModel';
import {MsgVpnTelemetryProfileLinksModel} from './MsgVpnTelemetryProfileLinksModel';
import {MsgVpnTelemetryProfileModel} from './MsgVpnTelemetryProfileModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnTelemetryProfileResponseModel model module.
 * @module model/MsgVpnTelemetryProfileResponseModel
 * @version 2.36
 */
export class MsgVpnTelemetryProfileResponseModel {
  /**
   * Constructs a new <code>MsgVpnTelemetryProfileResponseModel</code>.
   * @alias module:model/MsgVpnTelemetryProfileResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnTelemetryProfileResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTelemetryProfileResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTelemetryProfileResponseModel} The populated <code>MsgVpnTelemetryProfileResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTelemetryProfileResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnTelemetryProfileCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnTelemetryProfileModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnTelemetryProfileLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnTelemetryProfileCollectionsModel} collections
 */
MsgVpnTelemetryProfileResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnTelemetryProfileModel} data
 */
MsgVpnTelemetryProfileResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnTelemetryProfileLinksModel} links
 */
MsgVpnTelemetryProfileResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnTelemetryProfileResponseModel.prototype.meta = undefined;

