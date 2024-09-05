import {ApiClient} from '../ApiClient';
import {AboutUserCollectionsModel} from './AboutUserCollectionsModel';
import {AboutUserLinksModel} from './AboutUserLinksModel';
import {AboutUserModel} from './AboutUserModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The AboutUserResponseModel model module.
 * @module model/AboutUserResponseModel
 * @version 2.36
 */
export class AboutUserResponseModel {
  /**
   * Constructs a new <code>AboutUserResponseModel</code>.
   * @alias module:model/AboutUserResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>AboutUserResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AboutUserResponseModel} obj Optional instance to populate.
   * @return {module:model/AboutUserResponseModel} The populated <code>AboutUserResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AboutUserResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = AboutUserCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = AboutUserModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = AboutUserLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/AboutUserCollectionsModel} collections
 */
AboutUserResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/AboutUserModel} data
 */
AboutUserResponseModel.prototype.data = undefined;

/**
 * @member {module:model/AboutUserLinksModel} links
 */
AboutUserResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
AboutUserResponseModel.prototype.meta = undefined;

