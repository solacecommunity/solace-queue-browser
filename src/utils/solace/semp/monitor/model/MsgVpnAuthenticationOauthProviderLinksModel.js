import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnAuthenticationOauthProviderLinksModel model module.
 * @module model/MsgVpnAuthenticationOauthProviderLinksModel
 * @version 2.36
 */
export class MsgVpnAuthenticationOauthProviderLinksModel {
  /**
   * Constructs a new <code>MsgVpnAuthenticationOauthProviderLinksModel</code>.
   * @alias module:model/MsgVpnAuthenticationOauthProviderLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAuthenticationOauthProviderLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAuthenticationOauthProviderLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAuthenticationOauthProviderLinksModel} The populated <code>MsgVpnAuthenticationOauthProviderLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAuthenticationOauthProviderLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this OAuth Provider object.
 * @member {String} uri
 */
MsgVpnAuthenticationOauthProviderLinksModel.prototype.uri = undefined;

