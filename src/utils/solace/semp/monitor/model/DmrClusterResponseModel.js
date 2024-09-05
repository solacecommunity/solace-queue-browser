import {ApiClient} from '../ApiClient';
import {DmrClusterCollectionsModel} from './DmrClusterCollectionsModel';
import {DmrClusterLinksModel} from './DmrClusterLinksModel';
import {DmrClusterModel} from './DmrClusterModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The DmrClusterResponseModel model module.
 * @module model/DmrClusterResponseModel
 * @version 2.36
 */
export class DmrClusterResponseModel {
  /**
   * Constructs a new <code>DmrClusterResponseModel</code>.
   * @alias module:model/DmrClusterResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>DmrClusterResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterResponseModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterResponseModel} The populated <code>DmrClusterResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = DmrClusterCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = DmrClusterModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = DmrClusterLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/DmrClusterCollectionsModel} collections
 */
DmrClusterResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/DmrClusterModel} data
 */
DmrClusterResponseModel.prototype.data = undefined;

/**
 * @member {module:model/DmrClusterLinksModel} links
 */
DmrClusterResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
DmrClusterResponseModel.prototype.meta = undefined;

