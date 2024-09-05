import {ApiClient} from '../ApiClient';
import {OauthProfileClientAuthorizationParameterCollectionsModel} from './OauthProfileClientAuthorizationParameterCollectionsModel';
import {OauthProfileClientAuthorizationParameterLinksModel} from './OauthProfileClientAuthorizationParameterLinksModel';
import {OauthProfileClientAuthorizationParameterModel} from './OauthProfileClientAuthorizationParameterModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The OauthProfileClientAuthorizationParametersResponseModel model module.
 * @module model/OauthProfileClientAuthorizationParametersResponseModel
 * @version 2.36
 */
export class OauthProfileClientAuthorizationParametersResponseModel {
  /**
   * Constructs a new <code>OauthProfileClientAuthorizationParametersResponseModel</code>.
   * @alias module:model/OauthProfileClientAuthorizationParametersResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>OauthProfileClientAuthorizationParametersResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileClientAuthorizationParametersResponseModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileClientAuthorizationParametersResponseModel} The populated <code>OauthProfileClientAuthorizationParametersResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileClientAuthorizationParametersResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [OauthProfileClientAuthorizationParameterCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [OauthProfileClientAuthorizationParameterModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [OauthProfileClientAuthorizationParameterLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/OauthProfileClientAuthorizationParameterCollectionsModel>} collections
 */
OauthProfileClientAuthorizationParametersResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/OauthProfileClientAuthorizationParameterModel>} data
 */
OauthProfileClientAuthorizationParametersResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/OauthProfileClientAuthorizationParameterLinksModel>} links
 */
OauthProfileClientAuthorizationParametersResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
OauthProfileClientAuthorizationParametersResponseModel.prototype.meta = undefined;

