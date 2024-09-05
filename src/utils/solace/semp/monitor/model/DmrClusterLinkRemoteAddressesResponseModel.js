import {ApiClient} from '../ApiClient';
import {DmrClusterLinkRemoteAddressCollectionsModel} from './DmrClusterLinkRemoteAddressCollectionsModel';
import {DmrClusterLinkRemoteAddressLinksModel} from './DmrClusterLinkRemoteAddressLinksModel';
import {DmrClusterLinkRemoteAddressModel} from './DmrClusterLinkRemoteAddressModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The DmrClusterLinkRemoteAddressesResponseModel model module.
 * @module model/DmrClusterLinkRemoteAddressesResponseModel
 * @version 2.36
 */
export class DmrClusterLinkRemoteAddressesResponseModel {
  /**
   * Constructs a new <code>DmrClusterLinkRemoteAddressesResponseModel</code>.
   * @alias module:model/DmrClusterLinkRemoteAddressesResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>DmrClusterLinkRemoteAddressesResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterLinkRemoteAddressesResponseModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterLinkRemoteAddressesResponseModel} The populated <code>DmrClusterLinkRemoteAddressesResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterLinkRemoteAddressesResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [DmrClusterLinkRemoteAddressCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [DmrClusterLinkRemoteAddressModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [DmrClusterLinkRemoteAddressLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/DmrClusterLinkRemoteAddressCollectionsModel>} collections
 */
DmrClusterLinkRemoteAddressesResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/DmrClusterLinkRemoteAddressModel>} data
 */
DmrClusterLinkRemoteAddressesResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/DmrClusterLinkRemoteAddressLinksModel>} links
 */
DmrClusterLinkRemoteAddressesResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
DmrClusterLinkRemoteAddressesResponseModel.prototype.meta = undefined;

