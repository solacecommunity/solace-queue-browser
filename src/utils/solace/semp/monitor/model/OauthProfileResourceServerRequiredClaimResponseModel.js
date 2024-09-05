import {ApiClient} from '../ApiClient';
import {OauthProfileResourceServerRequiredClaimCollectionsModel} from './OauthProfileResourceServerRequiredClaimCollectionsModel';
import {OauthProfileResourceServerRequiredClaimLinksModel} from './OauthProfileResourceServerRequiredClaimLinksModel';
import {OauthProfileResourceServerRequiredClaimModel} from './OauthProfileResourceServerRequiredClaimModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The OauthProfileResourceServerRequiredClaimResponseModel model module.
 * @module model/OauthProfileResourceServerRequiredClaimResponseModel
 * @version 2.36
 */
export class OauthProfileResourceServerRequiredClaimResponseModel {
  /**
   * Constructs a new <code>OauthProfileResourceServerRequiredClaimResponseModel</code>.
   * @alias module:model/OauthProfileResourceServerRequiredClaimResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>OauthProfileResourceServerRequiredClaimResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileResourceServerRequiredClaimResponseModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileResourceServerRequiredClaimResponseModel} The populated <code>OauthProfileResourceServerRequiredClaimResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileResourceServerRequiredClaimResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = OauthProfileResourceServerRequiredClaimCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = OauthProfileResourceServerRequiredClaimModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = OauthProfileResourceServerRequiredClaimLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/OauthProfileResourceServerRequiredClaimCollectionsModel} collections
 */
OauthProfileResourceServerRequiredClaimResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/OauthProfileResourceServerRequiredClaimModel} data
 */
OauthProfileResourceServerRequiredClaimResponseModel.prototype.data = undefined;

/**
 * @member {module:model/OauthProfileResourceServerRequiredClaimLinksModel} links
 */
OauthProfileResourceServerRequiredClaimResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
OauthProfileResourceServerRequiredClaimResponseModel.prototype.meta = undefined;

