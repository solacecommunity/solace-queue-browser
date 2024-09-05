import {ApiClient} from '../ApiClient';

/**
 * The OauthProfileResourceServerRequiredClaimModel model module.
 * @module model/OauthProfileResourceServerRequiredClaimModel
 * @version 2.36
 */
export class OauthProfileResourceServerRequiredClaimModel {
  /**
   * Constructs a new <code>OauthProfileResourceServerRequiredClaimModel</code>.
   * @alias module:model/OauthProfileResourceServerRequiredClaimModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OauthProfileResourceServerRequiredClaimModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileResourceServerRequiredClaimModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileResourceServerRequiredClaimModel} The populated <code>OauthProfileResourceServerRequiredClaimModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileResourceServerRequiredClaimModel();
      if (data.hasOwnProperty('oauthProfileName'))
        obj.oauthProfileName = ApiClient.convertToType(data['oauthProfileName'], 'String');
      if (data.hasOwnProperty('resourceServerRequiredClaimName'))
        obj.resourceServerRequiredClaimName = ApiClient.convertToType(data['resourceServerRequiredClaimName'], 'String');
      if (data.hasOwnProperty('resourceServerRequiredClaimValue'))
        obj.resourceServerRequiredClaimValue = ApiClient.convertToType(data['resourceServerRequiredClaimValue'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the OAuth profile.
 * @member {String} oauthProfileName
 */
OauthProfileResourceServerRequiredClaimModel.prototype.oauthProfileName = undefined;

/**
 * The name of the access token claim to verify.
 * @member {String} resourceServerRequiredClaimName
 */
OauthProfileResourceServerRequiredClaimModel.prototype.resourceServerRequiredClaimName = undefined;

/**
 * The required claim value, which must be a string containing a valid JSON value.
 * @member {String} resourceServerRequiredClaimValue
 */
OauthProfileResourceServerRequiredClaimModel.prototype.resourceServerRequiredClaimValue = undefined;

