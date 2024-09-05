import {ApiClient} from '../ApiClient';
import {DmrClusterLinkCollectionsModel} from './DmrClusterLinkCollectionsModel';
import {DmrClusterLinkLinksModel} from './DmrClusterLinkLinksModel';
import {DmrClusterLinkModel} from './DmrClusterLinkModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The DmrClusterLinkResponseModel model module.
 * @module model/DmrClusterLinkResponseModel
 * @version 2.36
 */
export class DmrClusterLinkResponseModel {
  /**
   * Constructs a new <code>DmrClusterLinkResponseModel</code>.
   * @alias module:model/DmrClusterLinkResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>DmrClusterLinkResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterLinkResponseModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterLinkResponseModel} The populated <code>DmrClusterLinkResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterLinkResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = DmrClusterLinkCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = DmrClusterLinkModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = DmrClusterLinkLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/DmrClusterLinkCollectionsModel} collections
 */
DmrClusterLinkResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/DmrClusterLinkModel} data
 */
DmrClusterLinkResponseModel.prototype.data = undefined;

/**
 * @member {module:model/DmrClusterLinkLinksModel} links
 */
DmrClusterLinkResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
DmrClusterLinkResponseModel.prototype.meta = undefined;

