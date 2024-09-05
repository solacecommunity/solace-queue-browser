import {ApiClient} from '../ApiClient';

/**
 * The DmrClusterCertMatchingRuleAttributeFilterLinksModel model module.
 * @module model/DmrClusterCertMatchingRuleAttributeFilterLinksModel
 * @version 2.36
 */
export class DmrClusterCertMatchingRuleAttributeFilterLinksModel {
  /**
   * Constructs a new <code>DmrClusterCertMatchingRuleAttributeFilterLinksModel</code>.
   * @alias module:model/DmrClusterCertMatchingRuleAttributeFilterLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DmrClusterCertMatchingRuleAttributeFilterLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterCertMatchingRuleAttributeFilterLinksModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterCertMatchingRuleAttributeFilterLinksModel} The populated <code>DmrClusterCertMatchingRuleAttributeFilterLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterCertMatchingRuleAttributeFilterLinksModel();
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
DmrClusterCertMatchingRuleAttributeFilterLinksModel.prototype.uri = undefined;

