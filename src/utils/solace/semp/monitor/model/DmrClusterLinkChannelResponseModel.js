import {ApiClient} from '../ApiClient';
import {DmrClusterLinkChannelCollectionsModel} from './DmrClusterLinkChannelCollectionsModel';
import {DmrClusterLinkChannelLinksModel} from './DmrClusterLinkChannelLinksModel';
import {DmrClusterLinkChannelModel} from './DmrClusterLinkChannelModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The DmrClusterLinkChannelResponseModel model module.
 * @module model/DmrClusterLinkChannelResponseModel
 * @version 2.36
 */
export class DmrClusterLinkChannelResponseModel {
  /**
   * Constructs a new <code>DmrClusterLinkChannelResponseModel</code>.
   * @alias module:model/DmrClusterLinkChannelResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>DmrClusterLinkChannelResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterLinkChannelResponseModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterLinkChannelResponseModel} The populated <code>DmrClusterLinkChannelResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterLinkChannelResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = DmrClusterLinkChannelCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = DmrClusterLinkChannelModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = DmrClusterLinkChannelLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/DmrClusterLinkChannelCollectionsModel} collections
 */
DmrClusterLinkChannelResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/DmrClusterLinkChannelModel} data
 */
DmrClusterLinkChannelResponseModel.prototype.data = undefined;

/**
 * @member {module:model/DmrClusterLinkChannelLinksModel} links
 */
DmrClusterLinkChannelResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
DmrClusterLinkChannelResponseModel.prototype.meta = undefined;

