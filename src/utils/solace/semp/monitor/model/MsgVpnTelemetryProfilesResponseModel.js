import {ApiClient} from '../ApiClient';
import {MsgVpnTelemetryProfileCollectionsModel} from './MsgVpnTelemetryProfileCollectionsModel';
import {MsgVpnTelemetryProfileLinksModel} from './MsgVpnTelemetryProfileLinksModel';
import {MsgVpnTelemetryProfileModel} from './MsgVpnTelemetryProfileModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnTelemetryProfilesResponseModel model module.
 * @module model/MsgVpnTelemetryProfilesResponseModel
 * @version 2.36
 */
export class MsgVpnTelemetryProfilesResponseModel {
  /**
   * Constructs a new <code>MsgVpnTelemetryProfilesResponseModel</code>.
   * @alias module:model/MsgVpnTelemetryProfilesResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnTelemetryProfilesResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTelemetryProfilesResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTelemetryProfilesResponseModel} The populated <code>MsgVpnTelemetryProfilesResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTelemetryProfilesResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnTelemetryProfileCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnTelemetryProfileModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnTelemetryProfileLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnTelemetryProfileCollectionsModel>} collections
 */
MsgVpnTelemetryProfilesResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnTelemetryProfileModel>} data
 */
MsgVpnTelemetryProfilesResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnTelemetryProfileLinksModel>} links
 */
MsgVpnTelemetryProfilesResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnTelemetryProfilesResponseModel.prototype.meta = undefined;

