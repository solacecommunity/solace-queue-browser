import {ApiClient} from '../ApiClient';

/**
 * The DmrClusterLinkCollectionsAttributesModel model module.
 * @module model/DmrClusterLinkCollectionsAttributesModel
 * @version 2.36
 */
export class DmrClusterLinkCollectionsAttributesModel {
  /**
   * Constructs a new <code>DmrClusterLinkCollectionsAttributesModel</code>.
   * @alias module:model/DmrClusterLinkCollectionsAttributesModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DmrClusterLinkCollectionsAttributesModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterLinkCollectionsAttributesModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterLinkCollectionsAttributesModel} The populated <code>DmrClusterLinkCollectionsAttributesModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterLinkCollectionsAttributesModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the attributes collection. Available since 2.28.
 * @member {Number} count
 */
DmrClusterLinkCollectionsAttributesModel.prototype.count = undefined;

