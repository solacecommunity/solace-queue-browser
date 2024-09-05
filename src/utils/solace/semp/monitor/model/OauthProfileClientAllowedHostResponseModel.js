import {ApiClient} from '../ApiClient';
import {OauthProfileClientAllowedHostCollectionsModel} from './OauthProfileClientAllowedHostCollectionsModel';
import {OauthProfileClientAllowedHostLinksModel} from './OauthProfileClientAllowedHostLinksModel';
import {OauthProfileClientAllowedHostModel} from './OauthProfileClientAllowedHostModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The OauthProfileClientAllowedHostResponseModel model module.
 * @module model/OauthProfileClientAllowedHostResponseModel
 * @version 2.36
 */
export class OauthProfileClientAllowedHostResponseModel {
  /**
   * Constructs a new <code>OauthProfileClientAllowedHostResponseModel</code>.
   * @alias module:model/OauthProfileClientAllowedHostResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>OauthProfileClientAllowedHostResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileClientAllowedHostResponseModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileClientAllowedHostResponseModel} The populated <code>OauthProfileClientAllowedHostResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileClientAllowedHostResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = OauthProfileClientAllowedHostCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = OauthProfileClientAllowedHostModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = OauthProfileClientAllowedHostLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/OauthProfileClientAllowedHostCollectionsModel} collections
 */
OauthProfileClientAllowedHostResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/OauthProfileClientAllowedHostModel} data
 */
OauthProfileClientAllowedHostResponseModel.prototype.data = undefined;

/**
 * @member {module:model/OauthProfileClientAllowedHostLinksModel} links
 */
OauthProfileClientAllowedHostResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
OauthProfileClientAllowedHostResponseModel.prototype.meta = undefined;

