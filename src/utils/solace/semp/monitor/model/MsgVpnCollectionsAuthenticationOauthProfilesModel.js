import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnCollectionsAuthenticationOauthProfilesModel model module.
 * @module model/MsgVpnCollectionsAuthenticationOauthProfilesModel
 * @version 2.36
 */
export class MsgVpnCollectionsAuthenticationOauthProfilesModel {
  /**
   * Constructs a new <code>MsgVpnCollectionsAuthenticationOauthProfilesModel</code>.
   * @alias module:model/MsgVpnCollectionsAuthenticationOauthProfilesModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnCollectionsAuthenticationOauthProfilesModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCollectionsAuthenticationOauthProfilesModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCollectionsAuthenticationOauthProfilesModel} The populated <code>MsgVpnCollectionsAuthenticationOauthProfilesModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCollectionsAuthenticationOauthProfilesModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the authenticationOauthProfiles collection. Available since 2.25.
 * @member {Number} count
 */
MsgVpnCollectionsAuthenticationOauthProfilesModel.prototype.count = undefined;

