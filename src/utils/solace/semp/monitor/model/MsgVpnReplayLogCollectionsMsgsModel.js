import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnReplayLogCollectionsMsgsModel model module.
 * @module model/MsgVpnReplayLogCollectionsMsgsModel
 * @version 2.36
 */
export class MsgVpnReplayLogCollectionsMsgsModel {
  /**
   * Constructs a new <code>MsgVpnReplayLogCollectionsMsgsModel</code>.
   * @alias module:model/MsgVpnReplayLogCollectionsMsgsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnReplayLogCollectionsMsgsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnReplayLogCollectionsMsgsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnReplayLogCollectionsMsgsModel} The populated <code>MsgVpnReplayLogCollectionsMsgsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnReplayLogCollectionsMsgsModel();
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
MsgVpnReplayLogCollectionsMsgsModel.prototype.count = undefined;

