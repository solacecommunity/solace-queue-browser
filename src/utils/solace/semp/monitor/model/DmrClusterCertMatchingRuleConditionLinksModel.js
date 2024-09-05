import {ApiClient} from '../ApiClient';

/**
 * The DmrClusterCertMatchingRuleConditionLinksModel model module.
 * @module model/DmrClusterCertMatchingRuleConditionLinksModel
 * @version 2.36
 */
export class DmrClusterCertMatchingRuleConditionLinksModel {
  /**
   * Constructs a new <code>DmrClusterCertMatchingRuleConditionLinksModel</code>.
   * @alias module:model/DmrClusterCertMatchingRuleConditionLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DmrClusterCertMatchingRuleConditionLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterCertMatchingRuleConditionLinksModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterCertMatchingRuleConditionLinksModel} The populated <code>DmrClusterCertMatchingRuleConditionLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterCertMatchingRuleConditionLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Certificate Matching Rule Condition object.
 * @member {String} uri
 */
DmrClusterCertMatchingRuleConditionLinksModel.prototype.uri = undefined;

