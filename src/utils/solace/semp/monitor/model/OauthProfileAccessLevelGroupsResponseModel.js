import {ApiClient} from '../ApiClient';
import {OauthProfileAccessLevelGroupCollectionsModel} from './OauthProfileAccessLevelGroupCollectionsModel';
import {OauthProfileAccessLevelGroupLinksModel} from './OauthProfileAccessLevelGroupLinksModel';
import {OauthProfileAccessLevelGroupModel} from './OauthProfileAccessLevelGroupModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The OauthProfileAccessLevelGroupsResponseModel model module.
 * @module model/OauthProfileAccessLevelGroupsResponseModel
 * @version 2.36
 */
export class OauthProfileAccessLevelGroupsResponseModel {
  /**
   * Constructs a new <code>OauthProfileAccessLevelGroupsResponseModel</code>.
   * @alias module:model/OauthProfileAccessLevelGroupsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>OauthProfileAccessLevelGroupsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileAccessLevelGroupsResponseModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileAccessLevelGroupsResponseModel} The populated <code>OauthProfileAccessLevelGroupsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileAccessLevelGroupsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [OauthProfileAccessLevelGroupCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [OauthProfileAccessLevelGroupModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [OauthProfileAccessLevelGroupLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/OauthProfileAccessLevelGroupCollectionsModel>} collections
 */
OauthProfileAccessLevelGroupsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/OauthProfileAccessLevelGroupModel>} data
 */
OauthProfileAccessLevelGroupsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/OauthProfileAccessLevelGroupLinksModel>} links
 */
OauthProfileAccessLevelGroupsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
OauthProfileAccessLevelGroupsResponseModel.prototype.meta = undefined;

