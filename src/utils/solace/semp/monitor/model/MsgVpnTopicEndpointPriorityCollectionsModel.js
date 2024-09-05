import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnTopicEndpointPriorityCollectionsModel model module.
 * @module model/MsgVpnTopicEndpointPriorityCollectionsModel
 * @version 2.36
 */
export class MsgVpnTopicEndpointPriorityCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnTopicEndpointPriorityCollectionsModel</code>.
   * @alias module:model/MsgVpnTopicEndpointPriorityCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTopicEndpointPriorityCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTopicEndpointPriorityCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTopicEndpointPriorityCollectionsModel} The populated <code>MsgVpnTopicEndpointPriorityCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTopicEndpointPriorityCollectionsModel();
    }
    return obj;
  }
}
