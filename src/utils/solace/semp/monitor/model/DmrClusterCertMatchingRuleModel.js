import {ApiClient} from '../ApiClient';

/**
 * The DmrClusterCertMatchingRuleModel model module.
 * @module model/DmrClusterCertMatchingRuleModel
 * @version 2.36
 */
export class DmrClusterCertMatchingRuleModel {
  /**
   * Constructs a new <code>DmrClusterCertMatchingRuleModel</code>.
   * @alias module:model/DmrClusterCertMatchingRuleModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DmrClusterCertMatchingRuleModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterCertMatchingRuleModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterCertMatchingRuleModel} The populated <code>DmrClusterCertMatchingRuleModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterCertMatchingRuleModel();
      if (data.hasOwnProperty('dmrClusterName'))
        obj.dmrClusterName = ApiClient.convertToType(data['dmrClusterName'], 'String');
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('ruleName'))
        obj.ruleName = ApiClient.convertToType(data['ruleName'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the Cluster.
 * @member {String} dmrClusterName
 */
DmrClusterCertMatchingRuleModel.prototype.dmrClusterName = undefined;

/**
 * Indicates whether a certificate matching rule is enabled.
 * @member {Boolean} enabled
 */
DmrClusterCertMatchingRuleModel.prototype.enabled = undefined;

/**
 * The name of the rule.
 * @member {String} ruleName
 */
DmrClusterCertMatchingRuleModel.prototype.ruleName = undefined;

