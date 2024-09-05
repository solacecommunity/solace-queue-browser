import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnCollectionsTelemetryProfilesModel model module.
 * @module model/MsgVpnCollectionsTelemetryProfilesModel
 * @version 2.36
 */
export class MsgVpnCollectionsTelemetryProfilesModel {
  /**
   * Constructs a new <code>MsgVpnCollectionsTelemetryProfilesModel</code>.
   * @alias module:model/MsgVpnCollectionsTelemetryProfilesModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnCollectionsTelemetryProfilesModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCollectionsTelemetryProfilesModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCollectionsTelemetryProfilesModel} The populated <code>MsgVpnCollectionsTelemetryProfilesModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCollectionsTelemetryProfilesModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the telemetryProfiles collection. Available since 2.31.
 * @member {Number} count
 */
MsgVpnCollectionsTelemetryProfilesModel.prototype.count = undefined;

