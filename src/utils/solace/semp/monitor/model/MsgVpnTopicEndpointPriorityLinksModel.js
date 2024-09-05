import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnTopicEndpointPriorityLinksModel model module.
 * @module model/MsgVpnTopicEndpointPriorityLinksModel
 * @version 2.36
 */
export class MsgVpnTopicEndpointPriorityLinksModel {
  /**
   * Constructs a new <code>MsgVpnTopicEndpointPriorityLinksModel</code>.
   * @alias module:model/MsgVpnTopicEndpointPriorityLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTopicEndpointPriorityLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTopicEndpointPriorityLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTopicEndpointPriorityLinksModel} The populated <code>MsgVpnTopicEndpointPriorityLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTopicEndpointPriorityLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Topic Endpoint Priority object.
 * @member {String} uri
 */
MsgVpnTopicEndpointPriorityLinksModel.prototype.uri = undefined;

