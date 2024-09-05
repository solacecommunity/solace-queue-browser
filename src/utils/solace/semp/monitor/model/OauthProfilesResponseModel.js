import {ApiClient} from '../ApiClient';
import {OauthProfileCollectionsModel} from './OauthProfileCollectionsModel';
import {OauthProfileLinksModel} from './OauthProfileLinksModel';
import {OauthProfileModel} from './OauthProfileModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The OauthProfilesResponseModel model module.
 * @module model/OauthProfilesResponseModel
 * @version 2.36
 */
export class OauthProfilesResponseModel {
  /**
   * Constructs a new <code>OauthProfilesResponseModel</code>.
   * @alias module:model/OauthProfilesResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>OauthProfilesResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfilesResponseModel} obj Optional instance to populate.
   * @return {module:model/OauthProfilesResponseModel} The populated <code>OauthProfilesResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfilesResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [OauthProfileCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [OauthProfileModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [OauthProfileLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/OauthProfileCollectionsModel>} collections
 */
OauthProfilesResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/OauthProfileModel>} data
 */
OauthProfilesResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/OauthProfileLinksModel>} links
 */
OauthProfilesResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
OauthProfilesResponseModel.prototype.meta = undefined;

