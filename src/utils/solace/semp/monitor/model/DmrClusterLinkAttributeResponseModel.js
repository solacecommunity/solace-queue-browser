import {ApiClient} from '../ApiClient';
import {DmrClusterLinkAttributeCollectionsModel} from './DmrClusterLinkAttributeCollectionsModel';
import {DmrClusterLinkAttributeLinksModel} from './DmrClusterLinkAttributeLinksModel';
import {DmrClusterLinkAttributeModel} from './DmrClusterLinkAttributeModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The DmrClusterLinkAttributeResponseModel model module.
 * @module model/DmrClusterLinkAttributeResponseModel
 * @version 2.36
 */
export class DmrClusterLinkAttributeResponseModel {
  /**
   * Constructs a new <code>DmrClusterLinkAttributeResponseModel</code>.
   * @alias module:model/DmrClusterLinkAttributeResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>DmrClusterLinkAttributeResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterLinkAttributeResponseModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterLinkAttributeResponseModel} The populated <code>DmrClusterLinkAttributeResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterLinkAttributeResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = DmrClusterLinkAttributeCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = DmrClusterLinkAttributeModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = DmrClusterLinkAttributeLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/DmrClusterLinkAttributeCollectionsModel} collections
 */
DmrClusterLinkAttributeResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/DmrClusterLinkAttributeModel} data
 */
DmrClusterLinkAttributeResponseModel.prototype.data = undefined;

/**
 * @member {module:model/DmrClusterLinkAttributeLinksModel} links
 */
DmrClusterLinkAttributeResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
DmrClusterLinkAttributeResponseModel.prototype.meta = undefined;

