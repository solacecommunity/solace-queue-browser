import {ApiClient} from '../ApiClient';

/**
 * The DmrClusterCertMatchingRuleAttributeFilterCollectionsModel model module.
 * @module model/DmrClusterCertMatchingRuleAttributeFilterCollectionsModel
 * @version 2.36
 */
export class DmrClusterCertMatchingRuleAttributeFilterCollectionsModel {
  /**
   * Constructs a new <code>DmrClusterCertMatchingRuleAttributeFilterCollectionsModel</code>.
   * @alias module:model/DmrClusterCertMatchingRuleAttributeFilterCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DmrClusterCertMatchingRuleAttributeFilterCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterCertMatchingRuleAttributeFilterCollectionsModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterCertMatchingRuleAttributeFilterCollectionsModel} The populated <code>DmrClusterCertMatchingRuleAttributeFilterCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterCertMatchingRuleAttributeFilterCollectionsModel();
    }
    return obj;
  }
}
