import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnCertMatchingRuleModel model module.
 * @module model/MsgVpnCertMatchingRuleModel
 * @version 2.36
 */
export class MsgVpnCertMatchingRuleModel {
  /**
   * Constructs a new <code>MsgVpnCertMatchingRuleModel</code>.
   * @alias module:model/MsgVpnCertMatchingRuleModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnCertMatchingRuleModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCertMatchingRuleModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCertMatchingRuleModel} The populated <code>MsgVpnCertMatchingRuleModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCertMatchingRuleModel();
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('ruleName'))
        obj.ruleName = ApiClient.convertToType(data['ruleName'], 'String');
    }
    return obj;
  }
}

/**
 * Indicates whether a certificate matching rule is enabled.
 * @member {Boolean} enabled
 */
MsgVpnCertMatchingRuleModel.prototype.enabled = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnCertMatchingRuleModel.prototype.msgVpnName = undefined;

/**
 * The name of the rule.
 * @member {String} ruleName
 */
MsgVpnCertMatchingRuleModel.prototype.ruleName = undefined;

