import {ApiClient} from '../ApiClient';

/**
 * The OauthProfileResourceServerRequiredClaimCollectionsModel model module.
 * @module model/OauthProfileResourceServerRequiredClaimCollectionsModel
 * @version 2.36
 */
export class OauthProfileResourceServerRequiredClaimCollectionsModel {
  /**
   * Constructs a new <code>OauthProfileResourceServerRequiredClaimCollectionsModel</code>.
   * @alias module:model/OauthProfileResourceServerRequiredClaimCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OauthProfileResourceServerRequiredClaimCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileResourceServerRequiredClaimCollectionsModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileResourceServerRequiredClaimCollectionsModel} The populated <code>OauthProfileResourceServerRequiredClaimCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileResourceServerRequiredClaimCollectionsModel();
    }
    return obj;
  }
}
