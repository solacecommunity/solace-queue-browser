import {ApiClient} from '../ApiClient';
import {DmrClusterLinkCollectionsModel} from './DmrClusterLinkCollectionsModel';
import {DmrClusterLinkLinksModel} from './DmrClusterLinkLinksModel';
import {DmrClusterLinkModel} from './DmrClusterLinkModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The DmrClusterLinksResponseModel model module.
 * @module model/DmrClusterLinksResponseModel
 * @version 2.36
 */
export class DmrClusterLinksResponseModel {
  /**
   * Constructs a new <code>DmrClusterLinksResponseModel</code>.
   * @alias module:model/DmrClusterLinksResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>DmrClusterLinksResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterLinksResponseModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterLinksResponseModel} The populated <code>DmrClusterLinksResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterLinksResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [DmrClusterLinkCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [DmrClusterLinkModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [DmrClusterLinkLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/DmrClusterLinkCollectionsModel>} collections
 */
DmrClusterLinksResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/DmrClusterLinkModel>} data
 */
DmrClusterLinksResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/DmrClusterLinkLinksModel>} links
 */
DmrClusterLinksResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
DmrClusterLinksResponseModel.prototype.meta = undefined;

