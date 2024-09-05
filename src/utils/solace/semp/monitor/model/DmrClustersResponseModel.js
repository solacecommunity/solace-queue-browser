import {ApiClient} from '../ApiClient';
import {DmrClusterCollectionsModel} from './DmrClusterCollectionsModel';
import {DmrClusterLinksModel} from './DmrClusterLinksModel';
import {DmrClusterModel} from './DmrClusterModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The DmrClustersResponseModel model module.
 * @module model/DmrClustersResponseModel
 * @version 2.36
 */
export class DmrClustersResponseModel {
  /**
   * Constructs a new <code>DmrClustersResponseModel</code>.
   * @alias module:model/DmrClustersResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>DmrClustersResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClustersResponseModel} obj Optional instance to populate.
   * @return {module:model/DmrClustersResponseModel} The populated <code>DmrClustersResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClustersResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [DmrClusterCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [DmrClusterModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [DmrClusterLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/DmrClusterCollectionsModel>} collections
 */
DmrClustersResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/DmrClusterModel>} data
 */
DmrClustersResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/DmrClusterLinksModel>} links
 */
DmrClustersResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
DmrClustersResponseModel.prototype.meta = undefined;

