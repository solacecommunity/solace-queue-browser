import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnJndiQueueModel model module.
 * @module model/MsgVpnJndiQueueModel
 * @version 2.36
 */
export class MsgVpnJndiQueueModel {
  /**
   * Constructs a new <code>MsgVpnJndiQueueModel</code>.
   * @alias module:model/MsgVpnJndiQueueModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnJndiQueueModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnJndiQueueModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnJndiQueueModel} The populated <code>MsgVpnJndiQueueModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnJndiQueueModel();
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('physicalName'))
        obj.physicalName = ApiClient.convertToType(data['physicalName'], 'String');
      if (data.hasOwnProperty('queueName'))
        obj.queueName = ApiClient.convertToType(data['queueName'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnJndiQueueModel.prototype.msgVpnName = undefined;

/**
 * The physical name of the JMS Queue.
 * @member {String} physicalName
 */
MsgVpnJndiQueueModel.prototype.physicalName = undefined;

/**
 * The JNDI name of the JMS Queue.
 * @member {String} queueName
 */
MsgVpnJndiQueueModel.prototype.queueName = undefined;

