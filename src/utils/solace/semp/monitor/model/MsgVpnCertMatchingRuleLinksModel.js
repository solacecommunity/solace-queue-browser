import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnCertMatchingRuleLinksModel model module.
 * @module model/MsgVpnCertMatchingRuleLinksModel
 * @version 2.36
 */
export class MsgVpnCertMatchingRuleLinksModel {
  /**
   * Constructs a new <code>MsgVpnCertMatchingRuleLinksModel</code>.
   * @alias module:model/MsgVpnCertMatchingRuleLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnCertMatchingRuleLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCertMatchingRuleLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCertMatchingRuleLinksModel} The populated <code>MsgVpnCertMatchingRuleLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCertMatchingRuleLinksModel();
      if (data.hasOwnProperty('attributeFiltersUri'))
        obj.attributeFiltersUri = ApiClient.convertToType(data['attributeFiltersUri'], 'String');
      if (data.hasOwnProperty('conditionsUri'))
        obj.conditionsUri = ApiClient.convertToType(data['conditionsUri'], 'String');
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Certificate Matching Rule's collection of Certificate Matching Rule Attribute Filter objects. Available since 2.28.
 * @member {String} attributeFiltersUri
 */
MsgVpnCertMatchingRuleLinksModel.prototype.attributeFiltersUri = undefined;

/**
 * The URI of this Certificate Matching Rule's collection of Certificate Matching Rule Condition objects.
 * @member {String} conditionsUri
 */
MsgVpnCertMatchingRuleLinksModel.prototype.conditionsUri = undefined;

/**
 * The URI of this Certificate Matching Rule object.
 * @member {String} uri
 */
MsgVpnCertMatchingRuleLinksModel.prototype.uri = undefined;

