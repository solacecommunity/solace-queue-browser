import {ApiClient} from '../ApiClient';
import {OauthProfileResourceServerRequiredClaimCollectionsModel} from './OauthProfileResourceServerRequiredClaimCollectionsModel';
import {OauthProfileResourceServerRequiredClaimLinksModel} from './OauthProfileResourceServerRequiredClaimLinksModel';
import {OauthProfileResourceServerRequiredClaimModel} from './OauthProfileResourceServerRequiredClaimModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The OauthProfileResourceServerRequiredClaimsResponseModel model module.
 * @module model/OauthProfileResourceServerRequiredClaimsResponseModel
 * @version 2.36
 */
export class OauthProfileResourceServerRequiredClaimsResponseModel {
  /**
   * Constructs a new <code>OauthProfileResourceServerRequiredClaimsResponseModel</code>.
   * @alias module:model/OauthProfileResourceServerRequiredClaimsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>OauthProfileResourceServerRequiredClaimsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileResourceServerRequiredClaimsResponseModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileResourceServerRequiredClaimsResponseModel} The populated <code>OauthProfileResourceServerRequiredClaimsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileResourceServerRequiredClaimsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [OauthProfileResourceServerRequiredClaimCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [OauthProfileResourceServerRequiredClaimModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [OauthProfileResourceServerRequiredClaimLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/OauthProfileResourceServerRequiredClaimCollectionsModel>} collections
 */
OauthProfileResourceServerRequiredClaimsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/OauthProfileResourceServerRequiredClaimModel>} data
 */
OauthProfileResourceServerRequiredClaimsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/OauthProfileResourceServerRequiredClaimLinksModel>} links
 */
OauthProfileResourceServerRequiredClaimsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
OauthProfileResourceServerRequiredClaimsResponseModel.prototype.meta = undefined;

