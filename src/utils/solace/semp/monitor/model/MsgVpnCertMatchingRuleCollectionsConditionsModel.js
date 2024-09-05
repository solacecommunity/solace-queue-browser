import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnCertMatchingRuleCollectionsConditionsModel model module.
 * @module model/MsgVpnCertMatchingRuleCollectionsConditionsModel
 * @version 2.36
 */
export class MsgVpnCertMatchingRuleCollectionsConditionsModel {
  /**
   * Constructs a new <code>MsgVpnCertMatchingRuleCollectionsConditionsModel</code>.
   * @alias module:model/MsgVpnCertMatchingRuleCollectionsConditionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnCertMatchingRuleCollectionsConditionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCertMatchingRuleCollectionsConditionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCertMatchingRuleCollectionsConditionsModel} The populated <code>MsgVpnCertMatchingRuleCollectionsConditionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCertMatchingRuleCollectionsConditionsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the conditions collection.
 * @member {Number} count
 */
MsgVpnCertMatchingRuleCollectionsConditionsModel.prototype.count = undefined;

