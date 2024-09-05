import {ApiClient} from '../ApiClient';

/**
 * The OauthProfileCollectionsClientRequiredClaimsModel model module.
 * @module model/OauthProfileCollectionsClientRequiredClaimsModel
 * @version 2.36
 */
export class OauthProfileCollectionsClientRequiredClaimsModel {
  /**
   * Constructs a new <code>OauthProfileCollectionsClientRequiredClaimsModel</code>.
   * @alias module:model/OauthProfileCollectionsClientRequiredClaimsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OauthProfileCollectionsClientRequiredClaimsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileCollectionsClientRequiredClaimsModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileCollectionsClientRequiredClaimsModel} The populated <code>OauthProfileCollectionsClientRequiredClaimsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileCollectionsClientRequiredClaimsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the clientRequiredClaims collection.
 * @member {Number} count
 */
OauthProfileCollectionsClientRequiredClaimsModel.prototype.count = undefined;

