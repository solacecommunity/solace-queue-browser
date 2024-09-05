import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnTopicEndpointMsgLinksModel model module.
 * @module model/MsgVpnTopicEndpointMsgLinksModel
 * @version 2.36
 */
export class MsgVpnTopicEndpointMsgLinksModel {
  /**
   * Constructs a new <code>MsgVpnTopicEndpointMsgLinksModel</code>.
   * @alias module:model/MsgVpnTopicEndpointMsgLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTopicEndpointMsgLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTopicEndpointMsgLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTopicEndpointMsgLinksModel} The populated <code>MsgVpnTopicEndpointMsgLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTopicEndpointMsgLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Topic Endpoint Message object.
 * @member {String} uri
 */
MsgVpnTopicEndpointMsgLinksModel.prototype.uri = undefined;

