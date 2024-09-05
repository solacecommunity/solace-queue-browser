import {ApiClient} from '../ApiClient';

/**
 * The DmrClusterCertMatchingRuleConditionCollectionsModel model module.
 * @module model/DmrClusterCertMatchingRuleConditionCollectionsModel
 * @version 2.36
 */
export class DmrClusterCertMatchingRuleConditionCollectionsModel {
  /**
   * Constructs a new <code>DmrClusterCertMatchingRuleConditionCollectionsModel</code>.
   * @alias module:model/DmrClusterCertMatchingRuleConditionCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DmrClusterCertMatchingRuleConditionCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterCertMatchingRuleConditionCollectionsModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterCertMatchingRuleConditionCollectionsModel} The populated <code>DmrClusterCertMatchingRuleConditionCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterCertMatchingRuleConditionCollectionsModel();
    }
    return obj;
  }
}
