import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnKafkaSenderQueueBindingCollectionsModel model module.
 * @module model/MsgVpnKafkaSenderQueueBindingCollectionsModel
 * @version 2.36
 */
export class MsgVpnKafkaSenderQueueBindingCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnKafkaSenderQueueBindingCollectionsModel</code>.
   * @alias module:model/MsgVpnKafkaSenderQueueBindingCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnKafkaSenderQueueBindingCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnKafkaSenderQueueBindingCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnKafkaSenderQueueBindingCollectionsModel} The populated <code>MsgVpnKafkaSenderQueueBindingCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnKafkaSenderQueueBindingCollectionsModel();
    }
    return obj;
  }
}
