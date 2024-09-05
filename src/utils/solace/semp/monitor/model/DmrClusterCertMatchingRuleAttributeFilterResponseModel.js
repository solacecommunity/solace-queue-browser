import {ApiClient} from '../ApiClient';
import {DmrClusterCertMatchingRuleAttributeFilterCollectionsModel} from './DmrClusterCertMatchingRuleAttributeFilterCollectionsModel';
import {DmrClusterCertMatchingRuleAttributeFilterLinksModel} from './DmrClusterCertMatchingRuleAttributeFilterLinksModel';
import {DmrClusterCertMatchingRuleAttributeFilterModel} from './DmrClusterCertMatchingRuleAttributeFilterModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The DmrClusterCertMatchingRuleAttributeFilterResponseModel model module.
 * @module model/DmrClusterCertMatchingRuleAttributeFilterResponseModel
 * @version 2.36
 */
export class DmrClusterCertMatchingRuleAttributeFilterResponseModel {
  /**
   * Constructs a new <code>DmrClusterCertMatchingRuleAttributeFilterResponseModel</code>.
   * @alias module:model/DmrClusterCertMatchingRuleAttributeFilterResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>DmrClusterCertMatchingRuleAttributeFilterResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterCertMatchingRuleAttributeFilterResponseModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterCertMatchingRuleAttributeFilterResponseModel} The populated <code>DmrClusterCertMatchingRuleAttributeFilterResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterCertMatchingRuleAttributeFilterResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = DmrClusterCertMatchingRuleAttributeFilterCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = DmrClusterCertMatchingRuleAttributeFilterModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = DmrClusterCertMatchingRuleAttributeFilterLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/DmrClusterCertMatchingRuleAttributeFilterCollectionsModel} collections
 */
DmrClusterCertMatchingRuleAttributeFilterResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/DmrClusterCertMatchingRuleAttributeFilterModel} data
 */
DmrClusterCertMatchingRuleAttributeFilterResponseModel.prototype.data = undefined;

/**
 * @member {module:model/DmrClusterCertMatchingRuleAttributeFilterLinksModel} links
 */
DmrClusterCertMatchingRuleAttributeFilterResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
DmrClusterCertMatchingRuleAttributeFilterResponseModel.prototype.meta = undefined;

