import {ApiClient} from '../ApiClient';

/**
 * The DmrClusterLinkCollectionsChannelsModel model module.
 * @module model/DmrClusterLinkCollectionsChannelsModel
 * @version 2.36
 */
export class DmrClusterLinkCollectionsChannelsModel {
  /**
   * Constructs a new <code>DmrClusterLinkCollectionsChannelsModel</code>.
   * @alias module:model/DmrClusterLinkCollectionsChannelsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DmrClusterLinkCollectionsChannelsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterLinkCollectionsChannelsModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterLinkCollectionsChannelsModel} The populated <code>DmrClusterLinkCollectionsChannelsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterLinkCollectionsChannelsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the channels collection.
 * @member {Number} count
 */
DmrClusterLinkCollectionsChannelsModel.prototype.count = undefined;

