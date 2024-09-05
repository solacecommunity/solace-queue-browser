import {ApiClient} from '../ApiClient';

/**
 * The OauthProfileClientRequiredClaimCollectionsModel model module.
 * @module model/OauthProfileClientRequiredClaimCollectionsModel
 * @version 2.36
 */
export class OauthProfileClientRequiredClaimCollectionsModel {
  /**
   * Constructs a new <code>OauthProfileClientRequiredClaimCollectionsModel</code>.
   * @alias module:model/OauthProfileClientRequiredClaimCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OauthProfileClientRequiredClaimCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileClientRequiredClaimCollectionsModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileClientRequiredClaimCollectionsModel} The populated <code>OauthProfileClientRequiredClaimCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileClientRequiredClaimCollectionsModel();
    }
    return obj;
  }
}
