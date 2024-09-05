import {ApiClient} from '../ApiClient';
import {OauthProfileClientRequiredClaimCollectionsModel} from './OauthProfileClientRequiredClaimCollectionsModel';
import {OauthProfileClientRequiredClaimLinksModel} from './OauthProfileClientRequiredClaimLinksModel';
import {OauthProfileClientRequiredClaimModel} from './OauthProfileClientRequiredClaimModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The OauthProfileClientRequiredClaimResponseModel model module.
 * @module model/OauthProfileClientRequiredClaimResponseModel
 * @version 2.36
 */
export class OauthProfileClientRequiredClaimResponseModel {
  /**
   * Constructs a new <code>OauthProfileClientRequiredClaimResponseModel</code>.
   * @alias module:model/OauthProfileClientRequiredClaimResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>OauthProfileClientRequiredClaimResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileClientRequiredClaimResponseModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileClientRequiredClaimResponseModel} The populated <code>OauthProfileClientRequiredClaimResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileClientRequiredClaimResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = OauthProfileClientRequiredClaimCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = OauthProfileClientRequiredClaimModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = OauthProfileClientRequiredClaimLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/OauthProfileClientRequiredClaimCollectionsModel} collections
 */
OauthProfileClientRequiredClaimResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/OauthProfileClientRequiredClaimModel} data
 */
OauthProfileClientRequiredClaimResponseModel.prototype.data = undefined;

/**
 * @member {module:model/OauthProfileClientRequiredClaimLinksModel} links
 */
OauthProfileClientRequiredClaimResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
OauthProfileClientRequiredClaimResponseModel.prototype.meta = undefined;

