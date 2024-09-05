import {ApiClient} from '../ApiClient';

/**
 * The DmrClusterCertMatchingRuleCollectionsAttributeFiltersModel model module.
 * @module model/DmrClusterCertMatchingRuleCollectionsAttributeFiltersModel
 * @version 2.36
 */
export class DmrClusterCertMatchingRuleCollectionsAttributeFiltersModel {
  /**
   * Constructs a new <code>DmrClusterCertMatchingRuleCollectionsAttributeFiltersModel</code>.
   * @alias module:model/DmrClusterCertMatchingRuleCollectionsAttributeFiltersModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DmrClusterCertMatchingRuleCollectionsAttributeFiltersModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterCertMatchingRuleCollectionsAttributeFiltersModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterCertMatchingRuleCollectionsAttributeFiltersModel} The populated <code>DmrClusterCertMatchingRuleCollectionsAttributeFiltersModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterCertMatchingRuleCollectionsAttributeFiltersModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the attributeFilters collection.
 * @member {Number} count
 */
DmrClusterCertMatchingRuleCollectionsAttributeFiltersModel.prototype.count = undefined;

