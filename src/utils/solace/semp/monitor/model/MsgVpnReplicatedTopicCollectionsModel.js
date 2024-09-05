import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnReplicatedTopicCollectionsModel model module.
 * @module model/MsgVpnReplicatedTopicCollectionsModel
 * @version 2.36
 */
export class MsgVpnReplicatedTopicCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnReplicatedTopicCollectionsModel</code>.
   * @alias module:model/MsgVpnReplicatedTopicCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnReplicatedTopicCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnReplicatedTopicCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnReplicatedTopicCollectionsModel} The populated <code>MsgVpnReplicatedTopicCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnReplicatedTopicCollectionsModel();
    }
    return obj;
  }
}
