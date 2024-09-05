import {ApiClient} from '../ApiClient';
import {DmrClusterCertMatchingRuleCollectionsAttributeFiltersModel} from './DmrClusterCertMatchingRuleCollectionsAttributeFiltersModel';
import {DmrClusterCertMatchingRuleCollectionsConditionsModel} from './DmrClusterCertMatchingRuleCollectionsConditionsModel';

/**
 * The DmrClusterCertMatchingRuleCollectionsModel model module.
 * @module model/DmrClusterCertMatchingRuleCollectionsModel
 * @version 2.36
 */
export class DmrClusterCertMatchingRuleCollectionsModel {
  /**
   * Constructs a new <code>DmrClusterCertMatchingRuleCollectionsModel</code>.
   * @alias module:model/DmrClusterCertMatchingRuleCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DmrClusterCertMatchingRuleCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterCertMatchingRuleCollectionsModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterCertMatchingRuleCollectionsModel} The populated <code>DmrClusterCertMatchingRuleCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterCertMatchingRuleCollectionsModel();
      if (data.hasOwnProperty('attributeFilters'))
        obj.attributeFilters = DmrClusterCertMatchingRuleCollectionsAttributeFiltersModel.constructFromObject(data['attributeFilters']);
      if (data.hasOwnProperty('conditions'))
        obj.conditions = DmrClusterCertMatchingRuleCollectionsConditionsModel.constructFromObject(data['conditions']);
    }
    return obj;
  }
}

/**
 * @member {module:model/DmrClusterCertMatchingRuleCollectionsAttributeFiltersModel} attributeFilters
 */
DmrClusterCertMatchingRuleCollectionsModel.prototype.attributeFilters = undefined;

/**
 * @member {module:model/DmrClusterCertMatchingRuleCollectionsConditionsModel} conditions
 */
DmrClusterCertMatchingRuleCollectionsModel.prototype.conditions = undefined;

