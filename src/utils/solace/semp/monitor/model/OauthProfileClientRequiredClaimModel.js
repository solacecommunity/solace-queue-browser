import {ApiClient} from '../ApiClient';

/**
 * The OauthProfileClientRequiredClaimModel model module.
 * @module model/OauthProfileClientRequiredClaimModel
 * @version 2.36
 */
export class OauthProfileClientRequiredClaimModel {
  /**
   * Constructs a new <code>OauthProfileClientRequiredClaimModel</code>.
   * @alias module:model/OauthProfileClientRequiredClaimModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OauthProfileClientRequiredClaimModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileClientRequiredClaimModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileClientRequiredClaimModel} The populated <code>OauthProfileClientRequiredClaimModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileClientRequiredClaimModel();
      if (data.hasOwnProperty('clientRequiredClaimName'))
        obj.clientRequiredClaimName = ApiClient.convertToType(data['clientRequiredClaimName'], 'String');
      if (data.hasOwnProperty('clientRequiredClaimValue'))
        obj.clientRequiredClaimValue = ApiClient.convertToType(data['clientRequiredClaimValue'], 'String');
      if (data.hasOwnProperty('oauthProfileName'))
        obj.oauthProfileName = ApiClient.convertToType(data['oauthProfileName'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the ID token claim to verify.
 * @member {String} clientRequiredClaimName
 */
OauthProfileClientRequiredClaimModel.prototype.clientRequiredClaimName = undefined;

/**
 * The required claim value, which must be a string containing a valid JSON value.
 * @member {String} clientRequiredClaimValue
 */
OauthProfileClientRequiredClaimModel.prototype.clientRequiredClaimValue = undefined;

/**
 * The name of the OAuth profile.
 * @member {String} oauthProfileName
 */
OauthProfileClientRequiredClaimModel.prototype.oauthProfileName = undefined;

