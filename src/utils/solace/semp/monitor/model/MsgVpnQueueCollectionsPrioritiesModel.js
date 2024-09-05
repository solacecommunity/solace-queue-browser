import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnQueueCollectionsPrioritiesModel model module.
 * @module model/MsgVpnQueueCollectionsPrioritiesModel
 * @version 2.36
 */
export class MsgVpnQueueCollectionsPrioritiesModel {
  /**
   * Constructs a new <code>MsgVpnQueueCollectionsPrioritiesModel</code>.
   * @alias module:model/MsgVpnQueueCollectionsPrioritiesModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnQueueCollectionsPrioritiesModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnQueueCollectionsPrioritiesModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnQueueCollectionsPrioritiesModel} The populated <code>MsgVpnQueueCollectionsPrioritiesModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnQueueCollectionsPrioritiesModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the priorities collection.
 * @member {Number} count
 */
MsgVpnQueueCollectionsPrioritiesModel.prototype.count = undefined;

