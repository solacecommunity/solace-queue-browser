import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnCertMatchingRuleAttributeFilterCollectionsModel model module.
 * @module model/MsgVpnCertMatchingRuleAttributeFilterCollectionsModel
 * @version 2.36
 */
export class MsgVpnCertMatchingRuleAttributeFilterCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnCertMatchingRuleAttributeFilterCollectionsModel</code>.
   * @alias module:model/MsgVpnCertMatchingRuleAttributeFilterCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnCertMatchingRuleAttributeFilterCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCertMatchingRuleAttributeFilterCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCertMatchingRuleAttributeFilterCollectionsModel} The populated <code>MsgVpnCertMatchingRuleAttributeFilterCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCertMatchingRuleAttributeFilterCollectionsModel();
    }
    return obj;
  }
}
