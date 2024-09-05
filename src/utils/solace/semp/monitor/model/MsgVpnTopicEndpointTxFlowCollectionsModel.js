import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnTopicEndpointTxFlowCollectionsModel model module.
 * @module model/MsgVpnTopicEndpointTxFlowCollectionsModel
 * @version 2.36
 */
export class MsgVpnTopicEndpointTxFlowCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnTopicEndpointTxFlowCollectionsModel</code>.
   * @alias module:model/MsgVpnTopicEndpointTxFlowCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTopicEndpointTxFlowCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTopicEndpointTxFlowCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTopicEndpointTxFlowCollectionsModel} The populated <code>MsgVpnTopicEndpointTxFlowCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTopicEndpointTxFlowCollectionsModel();
    }
    return obj;
  }
}
