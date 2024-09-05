import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnTopicEndpointMsgCollectionsModel model module.
 * @module model/MsgVpnTopicEndpointMsgCollectionsModel
 * @version 2.36
 */
export class MsgVpnTopicEndpointMsgCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnTopicEndpointMsgCollectionsModel</code>.
   * @alias module:model/MsgVpnTopicEndpointMsgCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTopicEndpointMsgCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTopicEndpointMsgCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTopicEndpointMsgCollectionsModel} The populated <code>MsgVpnTopicEndpointMsgCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTopicEndpointMsgCollectionsModel();
    }
    return obj;
  }
}
