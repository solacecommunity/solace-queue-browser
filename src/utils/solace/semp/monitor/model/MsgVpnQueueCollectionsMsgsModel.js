import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnQueueCollectionsMsgsModel model module.
 * @module model/MsgVpnQueueCollectionsMsgsModel
 * @version 2.36
 */
export class MsgVpnQueueCollectionsMsgsModel {
  /**
   * Constructs a new <code>MsgVpnQueueCollectionsMsgsModel</code>.
   * @alias module:model/MsgVpnQueueCollectionsMsgsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnQueueCollectionsMsgsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnQueueCollectionsMsgsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnQueueCollectionsMsgsModel} The populated <code>MsgVpnQueueCollectionsMsgsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnQueueCollectionsMsgsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the msgs collection.
 * @member {Number} count
 */
MsgVpnQueueCollectionsMsgsModel.prototype.count = undefined;

