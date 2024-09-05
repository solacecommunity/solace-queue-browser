import {ApiClient} from '../ApiClient';
import {DmrClusterLinkTlsTrustedCommonNameCollectionsModel} from './DmrClusterLinkTlsTrustedCommonNameCollectionsModel';
import {DmrClusterLinkTlsTrustedCommonNameLinksModel} from './DmrClusterLinkTlsTrustedCommonNameLinksModel';
import {DmrClusterLinkTlsTrustedCommonNameModel} from './DmrClusterLinkTlsTrustedCommonNameModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The DmrClusterLinkTlsTrustedCommonNamesResponseModel model module.
 * @module model/DmrClusterLinkTlsTrustedCommonNamesResponseModel
 * @version 2.36
 */
export class DmrClusterLinkTlsTrustedCommonNamesResponseModel {
  /**
   * Constructs a new <code>DmrClusterLinkTlsTrustedCommonNamesResponseModel</code>.
   * @alias module:model/DmrClusterLinkTlsTrustedCommonNamesResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>DmrClusterLinkTlsTrustedCommonNamesResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterLinkTlsTrustedCommonNamesResponseModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterLinkTlsTrustedCommonNamesResponseModel} The populated <code>DmrClusterLinkTlsTrustedCommonNamesResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterLinkTlsTrustedCommonNamesResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [DmrClusterLinkTlsTrustedCommonNameCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [DmrClusterLinkTlsTrustedCommonNameModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [DmrClusterLinkTlsTrustedCommonNameLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/DmrClusterLinkTlsTrustedCommonNameCollectionsModel>} collections
 */
DmrClusterLinkTlsTrustedCommonNamesResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/DmrClusterLinkTlsTrustedCommonNameModel>} data
 */
DmrClusterLinkTlsTrustedCommonNamesResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/DmrClusterLinkTlsTrustedCommonNameLinksModel>} links
 */
DmrClusterLinkTlsTrustedCommonNamesResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
DmrClusterLinkTlsTrustedCommonNamesResponseModel.prototype.meta = undefined;

