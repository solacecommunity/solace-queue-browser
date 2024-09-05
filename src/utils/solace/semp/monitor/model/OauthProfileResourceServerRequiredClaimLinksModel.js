import {ApiClient} from '../ApiClient';

/**
 * The OauthProfileResourceServerRequiredClaimLinksModel model module.
 * @module model/OauthProfileResourceServerRequiredClaimLinksModel
 * @version 2.36
 */
export class OauthProfileResourceServerRequiredClaimLinksModel {
  /**
   * Constructs a new <code>OauthProfileResourceServerRequiredClaimLinksModel</code>.
   * @alias module:model/OauthProfileResourceServerRequiredClaimLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OauthProfileResourceServerRequiredClaimLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileResourceServerRequiredClaimLinksModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileResourceServerRequiredClaimLinksModel} The populated <code>OauthProfileResourceServerRequiredClaimLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileResourceServerRequiredClaimLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Required Claim object.
 * @member {String} uri
 */
OauthProfileResourceServerRequiredClaimLinksModel.prototype.uri = undefined;

