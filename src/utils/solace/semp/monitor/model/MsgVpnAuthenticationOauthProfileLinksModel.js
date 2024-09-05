import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnAuthenticationOauthProfileLinksModel model module.
 * @module model/MsgVpnAuthenticationOauthProfileLinksModel
 * @version 2.36
 */
export class MsgVpnAuthenticationOauthProfileLinksModel {
  /**
   * Constructs a new <code>MsgVpnAuthenticationOauthProfileLinksModel</code>.
   * @alias module:model/MsgVpnAuthenticationOauthProfileLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAuthenticationOauthProfileLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAuthenticationOauthProfileLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAuthenticationOauthProfileLinksModel} The populated <code>MsgVpnAuthenticationOauthProfileLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAuthenticationOauthProfileLinksModel();
      if (data.hasOwnProperty('clientRequiredClaimsUri'))
        obj.clientRequiredClaimsUri = ApiClient.convertToType(data['clientRequiredClaimsUri'], 'String');
      if (data.hasOwnProperty('resourceServerRequiredClaimsUri'))
        obj.resourceServerRequiredClaimsUri = ApiClient.convertToType(data['resourceServerRequiredClaimsUri'], 'String');
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this OAuth Profile's collection of Required Claim objects.
 * @member {String} clientRequiredClaimsUri
 */
MsgVpnAuthenticationOauthProfileLinksModel.prototype.clientRequiredClaimsUri = undefined;

/**
 * The URI of this OAuth Profile's collection of Required Claim objects.
 * @member {String} resourceServerRequiredClaimsUri
 */
MsgVpnAuthenticationOauthProfileLinksModel.prototype.resourceServerRequiredClaimsUri = undefined;

/**
 * The URI of this OAuth Profile object.
 * @member {String} uri
 */
MsgVpnAuthenticationOauthProfileLinksModel.prototype.uri = undefined;

