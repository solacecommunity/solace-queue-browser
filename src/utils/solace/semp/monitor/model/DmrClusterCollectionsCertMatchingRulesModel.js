import {ApiClient} from '../ApiClient';

/**
 * The DmrClusterCollectionsCertMatchingRulesModel model module.
 * @module model/DmrClusterCollectionsCertMatchingRulesModel
 * @version 2.36
 */
export class DmrClusterCollectionsCertMatchingRulesModel {
  /**
   * Constructs a new <code>DmrClusterCollectionsCertMatchingRulesModel</code>.
   * @alias module:model/DmrClusterCollectionsCertMatchingRulesModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DmrClusterCollectionsCertMatchingRulesModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterCollectionsCertMatchingRulesModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterCollectionsCertMatchingRulesModel} The populated <code>DmrClusterCollectionsCertMatchingRulesModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterCollectionsCertMatchingRulesModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the certMatchingRules collection. Available since 2.28.
 * @member {Number} count
 */
DmrClusterCollectionsCertMatchingRulesModel.prototype.count = undefined;

