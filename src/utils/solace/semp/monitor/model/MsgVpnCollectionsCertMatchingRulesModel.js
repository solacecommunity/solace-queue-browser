import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnCollectionsCertMatchingRulesModel model module.
 * @module model/MsgVpnCollectionsCertMatchingRulesModel
 * @version 2.36
 */
export class MsgVpnCollectionsCertMatchingRulesModel {
  /**
   * Constructs a new <code>MsgVpnCollectionsCertMatchingRulesModel</code>.
   * @alias module:model/MsgVpnCollectionsCertMatchingRulesModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnCollectionsCertMatchingRulesModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCollectionsCertMatchingRulesModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCollectionsCertMatchingRulesModel} The populated <code>MsgVpnCollectionsCertMatchingRulesModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCollectionsCertMatchingRulesModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the certMatchingRules collection. Available since 2.27.
 * @member {Number} count
 */
MsgVpnCollectionsCertMatchingRulesModel.prototype.count = undefined;

