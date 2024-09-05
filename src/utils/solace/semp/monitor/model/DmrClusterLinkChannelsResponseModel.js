import {ApiClient} from '../ApiClient';
import {DmrClusterLinkChannelCollectionsModel} from './DmrClusterLinkChannelCollectionsModel';
import {DmrClusterLinkChannelLinksModel} from './DmrClusterLinkChannelLinksModel';
import {DmrClusterLinkChannelModel} from './DmrClusterLinkChannelModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The DmrClusterLinkChannelsResponseModel model module.
 * @module model/DmrClusterLinkChannelsResponseModel
 * @version 2.36
 */
export class DmrClusterLinkChannelsResponseModel {
  /**
   * Constructs a new <code>DmrClusterLinkChannelsResponseModel</code>.
   * @alias module:model/DmrClusterLinkChannelsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>DmrClusterLinkChannelsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterLinkChannelsResponseModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterLinkChannelsResponseModel} The populated <code>DmrClusterLinkChannelsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterLinkChannelsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [DmrClusterLinkChannelCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [DmrClusterLinkChannelModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [DmrClusterLinkChannelLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/DmrClusterLinkChannelCollectionsModel>} collections
 */
DmrClusterLinkChannelsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/DmrClusterLinkChannelModel>} data
 */
DmrClusterLinkChannelsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/DmrClusterLinkChannelLinksModel>} links
 */
DmrClusterLinkChannelsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
DmrClusterLinkChannelsResponseModel.prototype.meta = undefined;

