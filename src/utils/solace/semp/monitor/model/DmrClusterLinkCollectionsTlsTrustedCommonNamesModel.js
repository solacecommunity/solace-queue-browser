import {ApiClient} from '../ApiClient';

/**
 * The DmrClusterLinkCollectionsTlsTrustedCommonNamesModel model module.
 * @module model/DmrClusterLinkCollectionsTlsTrustedCommonNamesModel
 * @version 2.36
 */
export class DmrClusterLinkCollectionsTlsTrustedCommonNamesModel {
  /**
   * Constructs a new <code>DmrClusterLinkCollectionsTlsTrustedCommonNamesModel</code>.
   * @alias module:model/DmrClusterLinkCollectionsTlsTrustedCommonNamesModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DmrClusterLinkCollectionsTlsTrustedCommonNamesModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterLinkCollectionsTlsTrustedCommonNamesModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterLinkCollectionsTlsTrustedCommonNamesModel} The populated <code>DmrClusterLinkCollectionsTlsTrustedCommonNamesModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterLinkCollectionsTlsTrustedCommonNamesModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the tlsTrustedCommonNames collection. Deprecated since 2.18. Common Name validation has been replaced by Server Certificate Name validation.
 * @member {Number} count
 */
DmrClusterLinkCollectionsTlsTrustedCommonNamesModel.prototype.count = undefined;

