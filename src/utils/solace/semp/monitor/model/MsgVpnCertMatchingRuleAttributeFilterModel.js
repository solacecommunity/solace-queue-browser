import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnCertMatchingRuleAttributeFilterModel model module.
 * @module model/MsgVpnCertMatchingRuleAttributeFilterModel
 * @version 2.36
 */
export class MsgVpnCertMatchingRuleAttributeFilterModel {
  /**
   * Constructs a new <code>MsgVpnCertMatchingRuleAttributeFilterModel</code>.
   * @alias module:model/MsgVpnCertMatchingRuleAttributeFilterModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnCertMatchingRuleAttributeFilterModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCertMatchingRuleAttributeFilterModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCertMatchingRuleAttributeFilterModel} The populated <code>MsgVpnCertMatchingRuleAttributeFilterModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCertMatchingRuleAttributeFilterModel();
      if (data.hasOwnProperty('attributeName'))
        obj.attributeName = ApiClient.convertToType(data['attributeName'], 'String');
      if (data.hasOwnProperty('attributeValue'))
        obj.attributeValue = ApiClient.convertToType(data['attributeValue'], 'String');
      if (data.hasOwnProperty('filterName'))
        obj.filterName = ApiClient.convertToType(data['filterName'], 'String');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('ruleName'))
        obj.ruleName = ApiClient.convertToType(data['ruleName'], 'String');
    }
    return obj;
  }
}

/**
 * Client Username Attribute to be tested.
 * @member {String} attributeName
 */
MsgVpnCertMatchingRuleAttributeFilterModel.prototype.attributeName = undefined;

/**
 * Expected attribute value.
 * @member {String} attributeValue
 */
MsgVpnCertMatchingRuleAttributeFilterModel.prototype.attributeValue = undefined;

/**
 * The name of the filter.
 * @member {String} filterName
 */
MsgVpnCertMatchingRuleAttributeFilterModel.prototype.filterName = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnCertMatchingRuleAttributeFilterModel.prototype.msgVpnName = undefined;

/**
 * The name of the rule.
 * @member {String} ruleName
 */
MsgVpnCertMatchingRuleAttributeFilterModel.prototype.ruleName = undefined;

