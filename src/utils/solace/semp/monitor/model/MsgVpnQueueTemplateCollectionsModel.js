import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnQueueTemplateCollectionsModel model module.
 * @module model/MsgVpnQueueTemplateCollectionsModel
 * @version 2.36
 */
export class MsgVpnQueueTemplateCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnQueueTemplateCollectionsModel</code>.
   * @alias module:model/MsgVpnQueueTemplateCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnQueueTemplateCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnQueueTemplateCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnQueueTemplateCollectionsModel} The populated <code>MsgVpnQueueTemplateCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnQueueTemplateCollectionsModel();
    }
    return obj;
  }
}
