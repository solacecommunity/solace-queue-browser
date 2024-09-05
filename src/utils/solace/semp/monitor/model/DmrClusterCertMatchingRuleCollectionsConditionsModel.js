import {ApiClient} from '../ApiClient';

/**
 * The DmrClusterCertMatchingRuleCollectionsConditionsModel model module.
 * @module model/DmrClusterCertMatchingRuleCollectionsConditionsModel
 * @version 2.36
 */
export class DmrClusterCertMatchingRuleCollectionsConditionsModel {
  /**
   * Constructs a new <code>DmrClusterCertMatchingRuleCollectionsConditionsModel</code>.
   * @alias module:model/DmrClusterCertMatchingRuleCollectionsConditionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DmrClusterCertMatchingRuleCollectionsConditionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterCertMatchingRuleCollectionsConditionsModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterCertMatchingRuleCollectionsConditionsModel} The populated <code>DmrClusterCertMatchingRuleCollectionsConditionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterCertMatchingRuleCollectionsConditionsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the conditions collection.
 * @member {Number} count
 */
DmrClusterCertMatchingRuleCollectionsConditionsModel.prototype.count = undefined;

