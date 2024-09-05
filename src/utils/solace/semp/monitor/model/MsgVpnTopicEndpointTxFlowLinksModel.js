import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnTopicEndpointTxFlowLinksModel model module.
 * @module model/MsgVpnTopicEndpointTxFlowLinksModel
 * @version 2.36
 */
export class MsgVpnTopicEndpointTxFlowLinksModel {
  /**
   * Constructs a new <code>MsgVpnTopicEndpointTxFlowLinksModel</code>.
   * @alias module:model/MsgVpnTopicEndpointTxFlowLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTopicEndpointTxFlowLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTopicEndpointTxFlowLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTopicEndpointTxFlowLinksModel} The populated <code>MsgVpnTopicEndpointTxFlowLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTopicEndpointTxFlowLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Topic Endpoint Transmit Flow object.
 * @member {String} uri
 */
MsgVpnTopicEndpointTxFlowLinksModel.prototype.uri = undefined;

