import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnCollectionsClientProfilesModel model module.
 * @module model/MsgVpnCollectionsClientProfilesModel
 * @version 2.36
 */
export class MsgVpnCollectionsClientProfilesModel {
  /**
   * Constructs a new <code>MsgVpnCollectionsClientProfilesModel</code>.
   * @alias module:model/MsgVpnCollectionsClientProfilesModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnCollectionsClientProfilesModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCollectionsClientProfilesModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCollectionsClientProfilesModel} The populated <code>MsgVpnCollectionsClientProfilesModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCollectionsClientProfilesModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the clientProfiles collection.
 * @member {Number} count
 */
MsgVpnCollectionsClientProfilesModel.prototype.count = undefined;

