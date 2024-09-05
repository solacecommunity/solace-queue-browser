import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnTopicEndpointLinksModel model module.
 * @module model/MsgVpnTopicEndpointLinksModel
 * @version 2.36
 */
export class MsgVpnTopicEndpointLinksModel {
  /**
   * Constructs a new <code>MsgVpnTopicEndpointLinksModel</code>.
   * @alias module:model/MsgVpnTopicEndpointLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTopicEndpointLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTopicEndpointLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTopicEndpointLinksModel} The populated <code>MsgVpnTopicEndpointLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTopicEndpointLinksModel();
      if (data.hasOwnProperty('msgsUri'))
        obj.msgsUri = ApiClient.convertToType(data['msgsUri'], 'String');
      if (data.hasOwnProperty('prioritiesUri'))
        obj.prioritiesUri = ApiClient.convertToType(data['prioritiesUri'], 'String');
      if (data.hasOwnProperty('txFlowsUri'))
        obj.txFlowsUri = ApiClient.convertToType(data['txFlowsUri'], 'String');
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Topic Endpoint's collection of Topic Endpoint Message objects.
 * @member {String} msgsUri
 */
MsgVpnTopicEndpointLinksModel.prototype.msgsUri = undefined;

/**
 * The URI of this Topic Endpoint's collection of Topic Endpoint Priority objects.
 * @member {String} prioritiesUri
 */
MsgVpnTopicEndpointLinksModel.prototype.prioritiesUri = undefined;

/**
 * The URI of this Topic Endpoint's collection of Topic Endpoint Transmit Flow objects.
 * @member {String} txFlowsUri
 */
MsgVpnTopicEndpointLinksModel.prototype.txFlowsUri = undefined;

/**
 * The URI of this Topic Endpoint object.
 * @member {String} uri
 */
MsgVpnTopicEndpointLinksModel.prototype.uri = undefined;

