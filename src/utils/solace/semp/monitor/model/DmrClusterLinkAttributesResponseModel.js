import {ApiClient} from '../ApiClient';
import {DmrClusterLinkAttributeCollectionsModel} from './DmrClusterLinkAttributeCollectionsModel';
import {DmrClusterLinkAttributeLinksModel} from './DmrClusterLinkAttributeLinksModel';
import {DmrClusterLinkAttributeModel} from './DmrClusterLinkAttributeModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The DmrClusterLinkAttributesResponseModel model module.
 * @module model/DmrClusterLinkAttributesResponseModel
 * @version 2.36
 */
export class DmrClusterLinkAttributesResponseModel {
  /**
   * Constructs a new <code>DmrClusterLinkAttributesResponseModel</code>.
   * @alias module:model/DmrClusterLinkAttributesResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>DmrClusterLinkAttributesResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterLinkAttributesResponseModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterLinkAttributesResponseModel} The populated <code>DmrClusterLinkAttributesResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterLinkAttributesResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [DmrClusterLinkAttributeCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [DmrClusterLinkAttributeModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [DmrClusterLinkAttributeLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/DmrClusterLinkAttributeCollectionsModel>} collections
 */
DmrClusterLinkAttributesResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/DmrClusterLinkAttributeModel>} data
 */
DmrClusterLinkAttributesResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/DmrClusterLinkAttributeLinksModel>} links
 */
DmrClusterLinkAttributesResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
DmrClusterLinkAttributesResponseModel.prototype.meta = undefined;

