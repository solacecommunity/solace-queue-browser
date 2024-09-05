import {ApiClient} from '../ApiClient';
import {AboutCollectionsModel} from './AboutCollectionsModel';
import {AboutLinksModel} from './AboutLinksModel';
import {AboutModel} from './AboutModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The AboutResponseModel model module.
 * @module model/AboutResponseModel
 * @version 2.36
 */
export class AboutResponseModel {
  /**
   * Constructs a new <code>AboutResponseModel</code>.
   * @alias module:model/AboutResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>AboutResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AboutResponseModel} obj Optional instance to populate.
   * @return {module:model/AboutResponseModel} The populated <code>AboutResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AboutResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = AboutCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = AboutModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = AboutLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/AboutCollectionsModel} collections
 */
AboutResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/AboutModel} data
 */
AboutResponseModel.prototype.data = undefined;

/**
 * @member {module:model/AboutLinksModel} links
 */
AboutResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
AboutResponseModel.prototype.meta = undefined;

