import {ApiClient} from '../ApiClient';
import {OauthProfileClientAuthorizationParameterCollectionsModel} from './OauthProfileClientAuthorizationParameterCollectionsModel';
import {OauthProfileClientAuthorizationParameterLinksModel} from './OauthProfileClientAuthorizationParameterLinksModel';
import {OauthProfileClientAuthorizationParameterModel} from './OauthProfileClientAuthorizationParameterModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The OauthProfileClientAuthorizationParameterResponseModel model module.
 * @module model/OauthProfileClientAuthorizationParameterResponseModel
 * @version 2.36
 */
export class OauthProfileClientAuthorizationParameterResponseModel {
  /**
   * Constructs a new <code>OauthProfileClientAuthorizationParameterResponseModel</code>.
   * @alias module:model/OauthProfileClientAuthorizationParameterResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>OauthProfileClientAuthorizationParameterResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileClientAuthorizationParameterResponseModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileClientAuthorizationParameterResponseModel} The populated <code>OauthProfileClientAuthorizationParameterResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileClientAuthorizationParameterResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = OauthProfileClientAuthorizationParameterCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = OauthProfileClientAuthorizationParameterModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = OauthProfileClientAuthorizationParameterLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/OauthProfileClientAuthorizationParameterCollectionsModel} collections
 */
OauthProfileClientAuthorizationParameterResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/OauthProfileClientAuthorizationParameterModel} data
 */
OauthProfileClientAuthorizationParameterResponseModel.prototype.data = undefined;

/**
 * @member {module:model/OauthProfileClientAuthorizationParameterLinksModel} links
 */
OauthProfileClientAuthorizationParameterResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
OauthProfileClientAuthorizationParameterResponseModel.prototype.meta = undefined;

