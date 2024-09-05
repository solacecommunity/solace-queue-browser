import {ApiClient} from '../ApiClient';

/**
 * The DmrClusterLinkAttributeCollectionsModel model module.
 * @module model/DmrClusterLinkAttributeCollectionsModel
 * @version 2.36
 */
export class DmrClusterLinkAttributeCollectionsModel {
  /**
   * Constructs a new <code>DmrClusterLinkAttributeCollectionsModel</code>.
   * @alias module:model/DmrClusterLinkAttributeCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DmrClusterLinkAttributeCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterLinkAttributeCollectionsModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterLinkAttributeCollectionsModel} The populated <code>DmrClusterLinkAttributeCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterLinkAttributeCollectionsModel();
    }
    return obj;
  }
}
