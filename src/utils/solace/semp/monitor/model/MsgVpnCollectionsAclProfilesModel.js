import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnCollectionsAclProfilesModel model module.
 * @module model/MsgVpnCollectionsAclProfilesModel
 * @version 2.36
 */
export class MsgVpnCollectionsAclProfilesModel {
  /**
   * Constructs a new <code>MsgVpnCollectionsAclProfilesModel</code>.
   * @alias module:model/MsgVpnCollectionsAclProfilesModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnCollectionsAclProfilesModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCollectionsAclProfilesModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCollectionsAclProfilesModel} The populated <code>MsgVpnCollectionsAclProfilesModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCollectionsAclProfilesModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the aclProfiles collection.
 * @member {Number} count
 */
MsgVpnCollectionsAclProfilesModel.prototype.count = undefined;

