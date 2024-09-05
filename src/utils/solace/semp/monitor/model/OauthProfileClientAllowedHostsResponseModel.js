import {ApiClient} from '../ApiClient';
import {OauthProfileClientAllowedHostCollectionsModel} from './OauthProfileClientAllowedHostCollectionsModel';
import {OauthProfileClientAllowedHostLinksModel} from './OauthProfileClientAllowedHostLinksModel';
import {OauthProfileClientAllowedHostModel} from './OauthProfileClientAllowedHostModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The OauthProfileClientAllowedHostsResponseModel model module.
 * @module model/OauthProfileClientAllowedHostsResponseModel
 * @version 2.36
 */
export class OauthProfileClientAllowedHostsResponseModel {
  /**
   * Constructs a new <code>OauthProfileClientAllowedHostsResponseModel</code>.
   * @alias module:model/OauthProfileClientAllowedHostsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>OauthProfileClientAllowedHostsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileClientAllowedHostsResponseModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileClientAllowedHostsResponseModel} The populated <code>OauthProfileClientAllowedHostsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileClientAllowedHostsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [OauthProfileClientAllowedHostCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [OauthProfileClientAllowedHostModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [OauthProfileClientAllowedHostLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/OauthProfileClientAllowedHostCollectionsModel>} collections
 */
OauthProfileClientAllowedHostsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/OauthProfileClientAllowedHostModel>} data
 */
OauthProfileClientAllowedHostsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/OauthProfileClientAllowedHostLinksModel>} links
 */
OauthProfileClientAllowedHostsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
OauthProfileClientAllowedHostsResponseModel.prototype.meta = undefined;

