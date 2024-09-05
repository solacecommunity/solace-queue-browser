import {ApiClient} from '../ApiClient';
import {DmrClusterCertMatchingRuleAttributeFilterCollectionsModel} from './DmrClusterCertMatchingRuleAttributeFilterCollectionsModel';
import {DmrClusterCertMatchingRuleAttributeFilterLinksModel} from './DmrClusterCertMatchingRuleAttributeFilterLinksModel';
import {DmrClusterCertMatchingRuleAttributeFilterModel} from './DmrClusterCertMatchingRuleAttributeFilterModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The DmrClusterCertMatchingRuleAttributeFiltersResponseModel model module.
 * @module model/DmrClusterCertMatchingRuleAttributeFiltersResponseModel
 * @version 2.36
 */
export class DmrClusterCertMatchingRuleAttributeFiltersResponseModel {
  /**
   * Constructs a new <code>DmrClusterCertMatchingRuleAttributeFiltersResponseModel</code>.
   * @alias module:model/DmrClusterCertMatchingRuleAttributeFiltersResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>DmrClusterCertMatchingRuleAttributeFiltersResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterCertMatchingRuleAttributeFiltersResponseModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterCertMatchingRuleAttributeFiltersResponseModel} The populated <code>DmrClusterCertMatchingRuleAttributeFiltersResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterCertMatchingRuleAttributeFiltersResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [DmrClusterCertMatchingRuleAttributeFilterCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [DmrClusterCertMatchingRuleAttributeFilterModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [DmrClusterCertMatchingRuleAttributeFilterLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/DmrClusterCertMatchingRuleAttributeFilterCollectionsModel>} collections
 */
DmrClusterCertMatchingRuleAttributeFiltersResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/DmrClusterCertMatchingRuleAttributeFilterModel>} data
 */
DmrClusterCertMatchingRuleAttributeFiltersResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/DmrClusterCertMatchingRuleAttributeFilterLinksModel>} links
 */
DmrClusterCertMatchingRuleAttributeFiltersResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
DmrClusterCertMatchingRuleAttributeFiltersResponseModel.prototype.meta = undefined;

