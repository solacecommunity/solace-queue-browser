import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnTransactionPublisherMsgModel model module.
 * @module model/MsgVpnTransactionPublisherMsgModel
 * @version 2.36
 */
export class MsgVpnTransactionPublisherMsgModel {
  /**
   * Constructs a new <code>MsgVpnTransactionPublisherMsgModel</code>.
   * @alias module:model/MsgVpnTransactionPublisherMsgModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTransactionPublisherMsgModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTransactionPublisherMsgModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTransactionPublisherMsgModel} The populated <code>MsgVpnTransactionPublisherMsgModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTransactionPublisherMsgModel();
      if (data.hasOwnProperty('msgId'))
        obj.msgId = ApiClient.convertToType(data['msgId'], 'Number');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('topic'))
        obj.topic = ApiClient.convertToType(data['topic'], 'String');
      if (data.hasOwnProperty('xid'))
        obj.xid = ApiClient.convertToType(data['xid'], 'String');
    }
    return obj;
  }
}

/**
 * The identifier (ID) of the Message.
 * @member {Number} msgId
 */
MsgVpnTransactionPublisherMsgModel.prototype.msgId = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnTransactionPublisherMsgModel.prototype.msgVpnName = undefined;

/**
 * The topic destination of the Message.
 * @member {String} topic
 */
MsgVpnTransactionPublisherMsgModel.prototype.topic = undefined;

/**
 * The identifier (ID) of the Transaction.
 * @member {String} xid
 */
MsgVpnTransactionPublisherMsgModel.prototype.xid = undefined;

