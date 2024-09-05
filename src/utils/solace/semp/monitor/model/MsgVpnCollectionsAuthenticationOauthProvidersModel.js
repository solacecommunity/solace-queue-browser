import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnCollectionsAuthenticationOauthProvidersModel model module.
 * @module model/MsgVpnCollectionsAuthenticationOauthProvidersModel
 * @version 2.36
 */
export class MsgVpnCollectionsAuthenticationOauthProvidersModel {
  /**
   * Constructs a new <code>MsgVpnCollectionsAuthenticationOauthProvidersModel</code>.
   * @alias module:model/MsgVpnCollectionsAuthenticationOauthProvidersModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnCollectionsAuthenticationOauthProvidersModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCollectionsAuthenticationOauthProvidersModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCollectionsAuthenticationOauthProvidersModel} The populated <code>MsgVpnCollectionsAuthenticationOauthProvidersModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCollectionsAuthenticationOauthProvidersModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the authenticationOauthProviders collection. Deprecated since 2.25. Replaced by authenticationOauthProfiles.
 * @member {Number} count
 */
MsgVpnCollectionsAuthenticationOauthProvidersModel.prototype.count = undefined;

