import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnQueuePriorityCollectionsModel model module.
 * @module model/MsgVpnQueuePriorityCollectionsModel
 * @version 2.36
 */
export class MsgVpnQueuePriorityCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnQueuePriorityCollectionsModel</code>.
   * @alias module:model/MsgVpnQueuePriorityCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnQueuePriorityCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnQueuePriorityCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnQueuePriorityCollectionsModel} The populated <code>MsgVpnQueuePriorityCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnQueuePriorityCollectionsModel();
    }
    return obj;
  }
}
