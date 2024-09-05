import {ApiClient} from '../ApiClient';
import {AboutApiCollectionsModel} from './AboutApiCollectionsModel';
import {AboutApiLinksModel} from './AboutApiLinksModel';
import {AboutApiModel} from './AboutApiModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The AboutApiResponseModel model module.
 * @module model/AboutApiResponseModel
 * @version 2.36
 */
export class AboutApiResponseModel {
  /**
   * Constructs a new <code>AboutApiResponseModel</code>.
   * @alias module:model/AboutApiResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>AboutApiResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AboutApiResponseModel} obj Optional instance to populate.
   * @return {module:model/AboutApiResponseModel} The populated <code>AboutApiResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AboutApiResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = AboutApiCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = AboutApiModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = AboutApiLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/AboutApiCollectionsModel} collections
 */
AboutApiResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/AboutApiModel} data
 */
AboutApiResponseModel.prototype.data = undefined;

/**
 * @member {module:model/AboutApiLinksModel} links
 */
AboutApiResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
AboutApiResponseModel.prototype.meta = undefined;

