import {ApiClient} from '../ApiClient';

/**
 * The OauthProfileCollectionsResourceServerRequiredClaimsModel model module.
 * @module model/OauthProfileCollectionsResourceServerRequiredClaimsModel
 * @version 2.36
 */
export class OauthProfileCollectionsResourceServerRequiredClaimsModel {
  /**
   * Constructs a new <code>OauthProfileCollectionsResourceServerRequiredClaimsModel</code>.
   * @alias module:model/OauthProfileCollectionsResourceServerRequiredClaimsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OauthProfileCollectionsResourceServerRequiredClaimsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileCollectionsResourceServerRequiredClaimsModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileCollectionsResourceServerRequiredClaimsModel} The populated <code>OauthProfileCollectionsResourceServerRequiredClaimsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileCollectionsResourceServerRequiredClaimsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the resourceServerRequiredClaims collection.
 * @member {Number} count
 */
OauthProfileCollectionsResourceServerRequiredClaimsModel.prototype.count = undefined;

