import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnQueuePriorityModel model module.
 * @module model/MsgVpnQueuePriorityModel
 * @version 2.36
 */
export class MsgVpnQueuePriorityModel {
  /**
   * Constructs a new <code>MsgVpnQueuePriorityModel</code>.
   * @alias module:model/MsgVpnQueuePriorityModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnQueuePriorityModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnQueuePriorityModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnQueuePriorityModel} The populated <code>MsgVpnQueuePriorityModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnQueuePriorityModel();
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('priority'))
        obj.priority = ApiClient.convertToType(data['priority'], 'Number');
      if (data.hasOwnProperty('queueName'))
        obj.queueName = ApiClient.convertToType(data['queueName'], 'String');
      if (data.hasOwnProperty('spooledByteCount'))
        obj.spooledByteCount = ApiClient.convertToType(data['spooledByteCount'], 'Number');
      if (data.hasOwnProperty('spooledMsgCount'))
        obj.spooledMsgCount = ApiClient.convertToType(data['spooledMsgCount'], 'Number');
    }
    return obj;
  }
}

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnQueuePriorityModel.prototype.msgVpnName = undefined;

/**
 * The level of the Priority, from 9 (highest) to 0 (lowest).
 * @member {Number} priority
 */
MsgVpnQueuePriorityModel.prototype.priority = undefined;

/**
 * The name of the Queue.
 * @member {String} queueName
 */
MsgVpnQueuePriorityModel.prototype.queueName = undefined;

/**
 * The amount of guaranteed messages at this Priority spooled by the Queue, in bytes (B).
 * @member {Number} spooledByteCount
 */
MsgVpnQueuePriorityModel.prototype.spooledByteCount = undefined;

/**
 * The number of guaranteed messages at this Priority spooled by the Queue.
 * @member {Number} spooledMsgCount
 */
MsgVpnQueuePriorityModel.prototype.spooledMsgCount = undefined;

