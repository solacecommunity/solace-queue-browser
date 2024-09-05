import {ApiClient} from '../ApiClient';

/**
 * The DmrClusterCollectionsLinksModel model module.
 * @module model/DmrClusterCollectionsLinksModel
 * @version 2.36
 */
export class DmrClusterCollectionsLinksModel {
  /**
   * Constructs a new <code>DmrClusterCollectionsLinksModel</code>.
   * @alias module:model/DmrClusterCollectionsLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DmrClusterCollectionsLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterCollectionsLinksModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterCollectionsLinksModel} The populated <code>DmrClusterCollectionsLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterCollectionsLinksModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the links collection.
 * @member {Number} count
 */
DmrClusterCollectionsLinksModel.prototype.count = undefined;

