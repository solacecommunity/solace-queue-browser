import {ApiClient} from '../ApiClient';

/**
 * The OauthProfileLinksModel model module.
 * @module model/OauthProfileLinksModel
 * @version 2.36
 */
export class OauthProfileLinksModel {
  /**
   * Constructs a new <code>OauthProfileLinksModel</code>.
   * @alias module:model/OauthProfileLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OauthProfileLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileLinksModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileLinksModel} The populated <code>OauthProfileLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileLinksModel();
      if (data.hasOwnProperty('accessLevelGroupsUri'))
        obj.accessLevelGroupsUri = ApiClient.convertToType(data['accessLevelGroupsUri'], 'String');
      if (data.hasOwnProperty('clientAllowedHostsUri'))
        obj.clientAllowedHostsUri = ApiClient.convertToType(data['clientAllowedHostsUri'], 'String');
      if (data.hasOwnProperty('clientAuthorizationParametersUri'))
        obj.clientAuthorizationParametersUri = ApiClient.convertToType(data['clientAuthorizationParametersUri'], 'String');
      if (data.hasOwnProperty('clientRequiredClaimsUri'))
        obj.clientRequiredClaimsUri = ApiClient.convertToType(data['clientRequiredClaimsUri'], 'String');
      if (data.hasOwnProperty('defaultMsgVpnAccessLevelExceptionsUri'))
        obj.defaultMsgVpnAccessLevelExceptionsUri = ApiClient.convertToType(data['defaultMsgVpnAccessLevelExceptionsUri'], 'String');
      if (data.hasOwnProperty('resourceServerRequiredClaimsUri'))
        obj.resourceServerRequiredClaimsUri = ApiClient.convertToType(data['resourceServerRequiredClaimsUri'], 'String');
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this OAuth Profile's collection of Group Access Level objects.
 * @member {String} accessLevelGroupsUri
 */
OauthProfileLinksModel.prototype.accessLevelGroupsUri = undefined;

/**
 * The URI of this OAuth Profile's collection of Allowed Host Value objects.
 * @member {String} clientAllowedHostsUri
 */
OauthProfileLinksModel.prototype.clientAllowedHostsUri = undefined;

/**
 * The URI of this OAuth Profile's collection of Authorization Parameter objects.
 * @member {String} clientAuthorizationParametersUri
 */
OauthProfileLinksModel.prototype.clientAuthorizationParametersUri = undefined;

/**
 * The URI of this OAuth Profile's collection of Required Claim objects.
 * @member {String} clientRequiredClaimsUri
 */
OauthProfileLinksModel.prototype.clientRequiredClaimsUri = undefined;

/**
 * The URI of this OAuth Profile's collection of Message VPN Access-Level Exception objects.
 * @member {String} defaultMsgVpnAccessLevelExceptionsUri
 */
OauthProfileLinksModel.prototype.defaultMsgVpnAccessLevelExceptionsUri = undefined;

/**
 * The URI of this OAuth Profile's collection of Required Claim objects.
 * @member {String} resourceServerRequiredClaimsUri
 */
OauthProfileLinksModel.prototype.resourceServerRequiredClaimsUri = undefined;

/**
 * The URI of this OAuth Profile object.
 * @member {String} uri
 */
OauthProfileLinksModel.prototype.uri = undefined;

