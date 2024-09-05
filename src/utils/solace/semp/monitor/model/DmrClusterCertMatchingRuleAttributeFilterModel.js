import {ApiClient} from '../ApiClient';

/**
 * The DmrClusterCertMatchingRuleAttributeFilterModel model module.
 * @module model/DmrClusterCertMatchingRuleAttributeFilterModel
 * @version 2.36
 */
export class DmrClusterCertMatchingRuleAttributeFilterModel {
  /**
   * Constructs a new <code>DmrClusterCertMatchingRuleAttributeFilterModel</code>.
   * @alias module:model/DmrClusterCertMatchingRuleAttributeFilterModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DmrClusterCertMatchingRuleAttributeFilterModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterCertMatchingRuleAttributeFilterModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterCertMatchingRuleAttributeFilterModel} The populated <code>DmrClusterCertMatchingRuleAttributeFilterModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterCertMatchingRuleAttributeFilterModel();
      if (data.hasOwnProperty('attributeName'))
        obj.attributeName = ApiClient.convertToType(data['attributeName'], 'String');
      if (data.hasOwnProperty('attributeValue'))
        obj.attributeValue = ApiClient.convertToType(data['attributeValue'], 'String');
      if (data.hasOwnProperty('dmrClusterName'))
        obj.dmrClusterName = ApiClient.convertToType(data['dmrClusterName'], 'String');
      if (data.hasOwnProperty('filterName'))
        obj.filterName = ApiClient.convertToType(data['filterName'], 'String');
      if (data.hasOwnProperty('ruleName'))
        obj.ruleName = ApiClient.convertToType(data['ruleName'], 'String');
    }
    return obj;
  }
}

/**
 * Link Attribute to be tested.
 * @member {String} attributeName
 */
DmrClusterCertMatchingRuleAttributeFilterModel.prototype.attributeName = undefined;

/**
 * Expected attribute value.
 * @member {String} attributeValue
 */
DmrClusterCertMatchingRuleAttributeFilterModel.prototype.attributeValue = undefined;

/**
 * The name of the Cluster.
 * @member {String} dmrClusterName
 */
DmrClusterCertMatchingRuleAttributeFilterModel.prototype.dmrClusterName = undefined;

/**
 * The name of the filter.
 * @member {String} filterName
 */
DmrClusterCertMatchingRuleAttributeFilterModel.prototype.filterName = undefined;

/**
 * The name of the rule.
 * @member {String} ruleName
 */
DmrClusterCertMatchingRuleAttributeFilterModel.prototype.ruleName = undefined;

