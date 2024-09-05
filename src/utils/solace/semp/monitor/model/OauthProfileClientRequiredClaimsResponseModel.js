import {ApiClient} from '../ApiClient';
import {OauthProfileClientRequiredClaimCollectionsModel} from './OauthProfileClientRequiredClaimCollectionsModel';
import {OauthProfileClientRequiredClaimLinksModel} from './OauthProfileClientRequiredClaimLinksModel';
import {OauthProfileClientRequiredClaimModel} from './OauthProfileClientRequiredClaimModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The OauthProfileClientRequiredClaimsResponseModel model module.
 * @module model/OauthProfileClientRequiredClaimsResponseModel
 * @version 2.36
 */
export class OauthProfileClientRequiredClaimsResponseModel {
  /**
   * Constructs a new <code>OauthProfileClientRequiredClaimsResponseModel</code>.
   * @alias module:model/OauthProfileClientRequiredClaimsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>OauthProfileClientRequiredClaimsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileClientRequiredClaimsResponseModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileClientRequiredClaimsResponseModel} The populated <code>OauthProfileClientRequiredClaimsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileClientRequiredClaimsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [OauthProfileClientRequiredClaimCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [OauthProfileClientRequiredClaimModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [OauthProfileClientRequiredClaimLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/OauthProfileClientRequiredClaimCollectionsModel>} collections
 */
OauthProfileClientRequiredClaimsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/OauthProfileClientRequiredClaimModel>} data
 */
OauthProfileClientRequiredClaimsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/OauthProfileClientRequiredClaimLinksModel>} links
 */
OauthProfileClientRequiredClaimsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
OauthProfileClientRequiredClaimsResponseModel.prototype.meta = undefined;

