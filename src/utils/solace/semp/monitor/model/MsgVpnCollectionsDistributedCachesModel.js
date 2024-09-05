import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnCollectionsDistributedCachesModel model module.
 * @module model/MsgVpnCollectionsDistributedCachesModel
 * @version 2.36
 */
export class MsgVpnCollectionsDistributedCachesModel {
  /**
   * Constructs a new <code>MsgVpnCollectionsDistributedCachesModel</code>.
   * @alias module:model/MsgVpnCollectionsDistributedCachesModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnCollectionsDistributedCachesModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCollectionsDistributedCachesModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCollectionsDistributedCachesModel} The populated <code>MsgVpnCollectionsDistributedCachesModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCollectionsDistributedCachesModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the distributedCaches collection.
 * @member {Number} count
 */
MsgVpnCollectionsDistributedCachesModel.prototype.count = undefined;

