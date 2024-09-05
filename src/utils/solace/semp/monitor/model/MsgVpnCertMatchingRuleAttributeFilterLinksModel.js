import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnCertMatchingRuleAttributeFilterLinksModel model module.
 * @module model/MsgVpnCertMatchingRuleAttributeFilterLinksModel
 * @version 2.36
 */
export class MsgVpnCertMatchingRuleAttributeFilterLinksModel {
  /**
   * Constructs a new <code>MsgVpnCertMatchingRuleAttributeFilterLinksModel</code>.
   * @alias module:model/MsgVpnCertMatchingRuleAttributeFilterLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnCertMatchingRuleAttributeFilterLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCertMatchingRuleAttributeFilterLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCertMatchingRuleAttributeFilterLinksModel} The populated <code>MsgVpnCertMatchingRuleAttributeFilterLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCertMatchingRuleAttributeFilterLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Certificate Matching Rule Attribute Filter object.
 * @member {String} uri
 */
MsgVpnCertMatchingRuleAttributeFilterLinksModel.prototype.uri = undefined;

