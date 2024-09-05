import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnCertMatchingRuleCollectionsAttributeFiltersModel model module.
 * @module model/MsgVpnCertMatchingRuleCollectionsAttributeFiltersModel
 * @version 2.36
 */
export class MsgVpnCertMatchingRuleCollectionsAttributeFiltersModel {
  /**
   * Constructs a new <code>MsgVpnCertMatchingRuleCollectionsAttributeFiltersModel</code>.
   * @alias module:model/MsgVpnCertMatchingRuleCollectionsAttributeFiltersModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnCertMatchingRuleCollectionsAttributeFiltersModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCertMatchingRuleCollectionsAttributeFiltersModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCertMatchingRuleCollectionsAttributeFiltersModel} The populated <code>MsgVpnCertMatchingRuleCollectionsAttributeFiltersModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCertMatchingRuleCollectionsAttributeFiltersModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the attributeFilters collection. Available since 2.28.
 * @member {Number} count
 */
MsgVpnCertMatchingRuleCollectionsAttributeFiltersModel.prototype.count = undefined;

