import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnJndiTopicCollectionsModel model module.
 * @module model/MsgVpnJndiTopicCollectionsModel
 * @version 2.36
 */
export class MsgVpnJndiTopicCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnJndiTopicCollectionsModel</code>.
   * @alias module:model/MsgVpnJndiTopicCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnJndiTopicCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnJndiTopicCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnJndiTopicCollectionsModel} The populated <code>MsgVpnJndiTopicCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnJndiTopicCollectionsModel();
    }
    return obj;
  }
}
