import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnTopicEndpointTemplateCollectionsModel model module.
 * @module model/MsgVpnTopicEndpointTemplateCollectionsModel
 * @version 2.36
 */
export class MsgVpnTopicEndpointTemplateCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnTopicEndpointTemplateCollectionsModel</code>.
   * @alias module:model/MsgVpnTopicEndpointTemplateCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTopicEndpointTemplateCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTopicEndpointTemplateCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTopicEndpointTemplateCollectionsModel} The populated <code>MsgVpnTopicEndpointTemplateCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTopicEndpointTemplateCollectionsModel();
    }
    return obj;
  }
}
