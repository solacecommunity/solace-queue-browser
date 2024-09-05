import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnCertMatchingRuleConditionLinksModel model module.
 * @module model/MsgVpnCertMatchingRuleConditionLinksModel
 * @version 2.36
 */
export class MsgVpnCertMatchingRuleConditionLinksModel {
  /**
   * Constructs a new <code>MsgVpnCertMatchingRuleConditionLinksModel</code>.
   * @alias module:model/MsgVpnCertMatchingRuleConditionLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnCertMatchingRuleConditionLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCertMatchingRuleConditionLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCertMatchingRuleConditionLinksModel} The populated <code>MsgVpnCertMatchingRuleConditionLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCertMatchingRuleConditionLinksModel();
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
MsgVpnCertMatchingRuleConditionLinksModel.prototype.uri = undefined;

