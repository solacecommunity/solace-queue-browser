import {ApiClient} from '../ApiClient';
import {DmrClusterLinkTlsTrustedCommonNameCollectionsModel} from './DmrClusterLinkTlsTrustedCommonNameCollectionsModel';
import {DmrClusterLinkTlsTrustedCommonNameLinksModel} from './DmrClusterLinkTlsTrustedCommonNameLinksModel';
import {DmrClusterLinkTlsTrustedCommonNameModel} from './DmrClusterLinkTlsTrustedCommonNameModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The DmrClusterLinkTlsTrustedCommonNameResponseModel model module.
 * @module model/DmrClusterLinkTlsTrustedCommonNameResponseModel
 * @version 2.36
 */
export class DmrClusterLinkTlsTrustedCommonNameResponseModel {
  /**
   * Constructs a new <code>DmrClusterLinkTlsTrustedCommonNameResponseModel</code>.
   * @alias module:model/DmrClusterLinkTlsTrustedCommonNameResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>DmrClusterLinkTlsTrustedCommonNameResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterLinkTlsTrustedCommonNameResponseModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterLinkTlsTrustedCommonNameResponseModel} The populated <code>DmrClusterLinkTlsTrustedCommonNameResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterLinkTlsTrustedCommonNameResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = DmrClusterLinkTlsTrustedCommonNameCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = DmrClusterLinkTlsTrustedCommonNameModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = DmrClusterLinkTlsTrustedCommonNameLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/DmrClusterLinkTlsTrustedCommonNameCollectionsModel} collections
 */
DmrClusterLinkTlsTrustedCommonNameResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/DmrClusterLinkTlsTrustedCommonNameModel} data
 */
DmrClusterLinkTlsTrustedCommonNameResponseModel.prototype.data = undefined;

/**
 * @member {module:model/DmrClusterLinkTlsTrustedCommonNameLinksModel} links
 */
DmrClusterLinkTlsTrustedCommonNameResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
DmrClusterLinkTlsTrustedCommonNameResponseModel.prototype.meta = undefined;

