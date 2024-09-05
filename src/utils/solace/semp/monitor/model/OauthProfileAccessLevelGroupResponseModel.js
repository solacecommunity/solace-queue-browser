import {ApiClient} from '../ApiClient';
import {OauthProfileAccessLevelGroupCollectionsModel} from './OauthProfileAccessLevelGroupCollectionsModel';
import {OauthProfileAccessLevelGroupLinksModel} from './OauthProfileAccessLevelGroupLinksModel';
import {OauthProfileAccessLevelGroupModel} from './OauthProfileAccessLevelGroupModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The OauthProfileAccessLevelGroupResponseModel model module.
 * @module model/OauthProfileAccessLevelGroupResponseModel
 * @version 2.36
 */
export class OauthProfileAccessLevelGroupResponseModel {
  /**
   * Constructs a new <code>OauthProfileAccessLevelGroupResponseModel</code>.
   * @alias module:model/OauthProfileAccessLevelGroupResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>OauthProfileAccessLevelGroupResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileAccessLevelGroupResponseModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileAccessLevelGroupResponseModel} The populated <code>OauthProfileAccessLevelGroupResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileAccessLevelGroupResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = OauthProfileAccessLevelGroupCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = OauthProfileAccessLevelGroupModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = OauthProfileAccessLevelGroupLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/OauthProfileAccessLevelGroupCollectionsModel} collections
 */
OauthProfileAccessLevelGroupResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/OauthProfileAccessLevelGroupModel} data
 */
OauthProfileAccessLevelGroupResponseModel.prototype.data = undefined;

/**
 * @member {module:model/OauthProfileAccessLevelGroupLinksModel} links
 */
OauthProfileAccessLevelGroupResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
OauthProfileAccessLevelGroupResponseModel.prototype.meta = undefined;

