import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnJndiQueueCollectionsModel model module.
 * @module model/MsgVpnJndiQueueCollectionsModel
 * @version 2.36
 */
export class MsgVpnJndiQueueCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnJndiQueueCollectionsModel</code>.
   * @alias module:model/MsgVpnJndiQueueCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnJndiQueueCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnJndiQueueCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnJndiQueueCollectionsModel} The populated <code>MsgVpnJndiQueueCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnJndiQueueCollectionsModel();
    }
    return obj;
  }
}
