import {ApiClient} from '../ApiClient';
import {DmrClusterLinkRemoteAddressCollectionsModel} from './DmrClusterLinkRemoteAddressCollectionsModel';
import {DmrClusterLinkRemoteAddressLinksModel} from './DmrClusterLinkRemoteAddressLinksModel';
import {DmrClusterLinkRemoteAddressModel} from './DmrClusterLinkRemoteAddressModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The DmrClusterLinkRemoteAddressResponseModel model module.
 * @module model/DmrClusterLinkRemoteAddressResponseModel
 * @version 2.36
 */
export class DmrClusterLinkRemoteAddressResponseModel {
  /**
   * Constructs a new <code>DmrClusterLinkRemoteAddressResponseModel</code>.
   * @alias module:model/DmrClusterLinkRemoteAddressResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>DmrClusterLinkRemoteAddressResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterLinkRemoteAddressResponseModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterLinkRemoteAddressResponseModel} The populated <code>DmrClusterLinkRemoteAddressResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterLinkRemoteAddressResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = DmrClusterLinkRemoteAddressCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = DmrClusterLinkRemoteAddressModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = DmrClusterLinkRemoteAddressLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/DmrClusterLinkRemoteAddressCollectionsModel} collections
 */
DmrClusterLinkRemoteAddressResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/DmrClusterLinkRemoteAddressModel} data
 */
DmrClusterLinkRemoteAddressResponseModel.prototype.data = undefined;

/**
 * @member {module:model/DmrClusterLinkRemoteAddressLinksModel} links
 */
DmrClusterLinkRemoteAddressResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
DmrClusterLinkRemoteAddressResponseModel.prototype.meta = undefined;

