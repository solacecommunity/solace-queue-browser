import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnCertMatchingRuleConditionCollectionsModel model module.
 * @module model/MsgVpnCertMatchingRuleConditionCollectionsModel
 * @version 2.36
 */
export class MsgVpnCertMatchingRuleConditionCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnCertMatchingRuleConditionCollectionsModel</code>.
   * @alias module:model/MsgVpnCertMatchingRuleConditionCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnCertMatchingRuleConditionCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCertMatchingRuleConditionCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCertMatchingRuleConditionCollectionsModel} The populated <code>MsgVpnCertMatchingRuleConditionCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCertMatchingRuleConditionCollectionsModel();
    }
    return obj;
  }
}
