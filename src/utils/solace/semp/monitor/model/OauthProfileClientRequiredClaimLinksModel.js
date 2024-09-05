import {ApiClient} from '../ApiClient';

/**
 * The OauthProfileClientRequiredClaimLinksModel model module.
 * @module model/OauthProfileClientRequiredClaimLinksModel
 * @version 2.36
 */
export class OauthProfileClientRequiredClaimLinksModel {
  /**
   * Constructs a new <code>OauthProfileClientRequiredClaimLinksModel</code>.
   * @alias module:model/OauthProfileClientRequiredClaimLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OauthProfileClientRequiredClaimLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileClientRequiredClaimLinksModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileClientRequiredClaimLinksModel} The populated <code>OauthProfileClientRequiredClaimLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileClientRequiredClaimLinksModel();
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
OauthProfileClientRequiredClaimLinksModel.prototype.uri = undefined;

