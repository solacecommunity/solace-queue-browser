import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnAuthenticationOauthProviderCollectionsModel model module.
 * @module model/MsgVpnAuthenticationOauthProviderCollectionsModel
 * @version 2.36
 */
export class MsgVpnAuthenticationOauthProviderCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnAuthenticationOauthProviderCollectionsModel</code>.
   * @alias module:model/MsgVpnAuthenticationOauthProviderCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAuthenticationOauthProviderCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAuthenticationOauthProviderCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAuthenticationOauthProviderCollectionsModel} The populated <code>MsgVpnAuthenticationOauthProviderCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAuthenticationOauthProviderCollectionsModel();
    }
    return obj;
  }
}
