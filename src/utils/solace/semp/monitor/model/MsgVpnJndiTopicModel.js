import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnJndiTopicModel model module.
 * @module model/MsgVpnJndiTopicModel
 * @version 2.36
 */
export class MsgVpnJndiTopicModel {
  /**
   * Constructs a new <code>MsgVpnJndiTopicModel</code>.
   * @alias module:model/MsgVpnJndiTopicModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnJndiTopicModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnJndiTopicModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnJndiTopicModel} The populated <code>MsgVpnJndiTopicModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnJndiTopicModel();
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('physicalName'))
        obj.physicalName = ApiClient.convertToType(data['physicalName'], 'String');
      if (data.hasOwnProperty('topicName'))
        obj.topicName = ApiClient.convertToType(data['topicName'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnJndiTopicModel.prototype.msgVpnName = undefined;

/**
 * The physical name of the JMS Topic.
 * @member {String} physicalName
 */
MsgVpnJndiTopicModel.prototype.physicalName = undefined;

/**
 * The JNDI name of the JMS Topic.
 * @member {String} topicName
 */
MsgVpnJndiTopicModel.prototype.topicName = undefined;

