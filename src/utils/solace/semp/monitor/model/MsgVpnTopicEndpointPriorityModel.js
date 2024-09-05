import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnTopicEndpointPriorityModel model module.
 * @module model/MsgVpnTopicEndpointPriorityModel
 * @version 2.36
 */
export class MsgVpnTopicEndpointPriorityModel {
  /**
   * Constructs a new <code>MsgVpnTopicEndpointPriorityModel</code>.
   * @alias module:model/MsgVpnTopicEndpointPriorityModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTopicEndpointPriorityModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTopicEndpointPriorityModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTopicEndpointPriorityModel} The populated <code>MsgVpnTopicEndpointPriorityModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTopicEndpointPriorityModel();
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('priority'))
        obj.priority = ApiClient.convertToType(data['priority'], 'Number');
      if (data.hasOwnProperty('spooledByteCount'))
        obj.spooledByteCount = ApiClient.convertToType(data['spooledByteCount'], 'Number');
      if (data.hasOwnProperty('spooledMsgCount'))
        obj.spooledMsgCount = ApiClient.convertToType(data['spooledMsgCount'], 'Number');
      if (data.hasOwnProperty('topicEndpointName'))
        obj.topicEndpointName = ApiClient.convertToType(data['topicEndpointName'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnTopicEndpointPriorityModel.prototype.msgVpnName = undefined;

/**
 * The level of the Priority, from 9 (highest) to 0 (lowest).
 * @member {Number} priority
 */
MsgVpnTopicEndpointPriorityModel.prototype.priority = undefined;

/**
 * The amount of guaranteed messages at this Priority spooled by the Topic Endpoint, in bytes (B).
 * @member {Number} spooledByteCount
 */
MsgVpnTopicEndpointPriorityModel.prototype.spooledByteCount = undefined;

/**
 * The number of guaranteed messages at this Priority spooled by the Topic Endpoint.
 * @member {Number} spooledMsgCount
 */
MsgVpnTopicEndpointPriorityModel.prototype.spooledMsgCount = undefined;

/**
 * The name of the Topic Endpoint.
 * @member {String} topicEndpointName
 */
MsgVpnTopicEndpointPriorityModel.prototype.topicEndpointName = undefined;

