import {ApiClient} from '../ApiClient';

/**
 * The DmrClusterCertMatchingRuleLinksModel model module.
 * @module model/DmrClusterCertMatchingRuleLinksModel
 * @version 2.36
 */
export class DmrClusterCertMatchingRuleLinksModel {
  /**
   * Constructs a new <code>DmrClusterCertMatchingRuleLinksModel</code>.
   * @alias module:model/DmrClusterCertMatchingRuleLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DmrClusterCertMatchingRuleLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterCertMatchingRuleLinksModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterCertMatchingRuleLinksModel} The populated <code>DmrClusterCertMatchingRuleLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterCertMatchingRuleLinksModel();
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
 * The URI of this Certificate Matching Rule's collection of Certificate Matching Rule Attribute Filter objects.
 * @member {String} attributeFiltersUri
 */
DmrClusterCertMatchingRuleLinksModel.prototype.attributeFiltersUri = undefined;

/**
 * The URI of this Certificate Matching Rule's collection of Certificate Matching Rule Condition objects.
 * @member {String} conditionsUri
 */
DmrClusterCertMatchingRuleLinksModel.prototype.conditionsUri = undefined;

/**
 * The URI of this Certificate Matching Rule object.
 * @member {String} uri
 */
DmrClusterCertMatchingRuleLinksModel.prototype.uri = undefined;

