import {ApiClient} from '../ApiClient';
import {MsgVpnCertMatchingRuleCollectionsAttributeFiltersModel} from './MsgVpnCertMatchingRuleCollectionsAttributeFiltersModel';
import {MsgVpnCertMatchingRuleCollectionsConditionsModel} from './MsgVpnCertMatchingRuleCollectionsConditionsModel';

/**
 * The MsgVpnCertMatchingRuleCollectionsModel model module.
 * @module model/MsgVpnCertMatchingRuleCollectionsModel
 * @version 2.36
 */
export class MsgVpnCertMatchingRuleCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnCertMatchingRuleCollectionsModel</code>.
   * @alias module:model/MsgVpnCertMatchingRuleCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnCertMatchingRuleCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCertMatchingRuleCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCertMatchingRuleCollectionsModel} The populated <code>MsgVpnCertMatchingRuleCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCertMatchingRuleCollectionsModel();
      if (data.hasOwnProperty('attributeFilters'))
        obj.attributeFilters = MsgVpnCertMatchingRuleCollectionsAttributeFiltersModel.constructFromObject(data['attributeFilters']);
      if (data.hasOwnProperty('conditions'))
        obj.conditions = MsgVpnCertMatchingRuleCollectionsConditionsModel.constructFromObject(data['conditions']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnCertMatchingRuleCollectionsAttributeFiltersModel} attributeFilters
 */
MsgVpnCertMatchingRuleCollectionsModel.prototype.attributeFilters = undefined;

/**
 * @member {module:model/MsgVpnCertMatchingRuleCollectionsConditionsModel} conditions
 */
MsgVpnCertMatchingRuleCollectionsModel.prototype.conditions = undefined;

