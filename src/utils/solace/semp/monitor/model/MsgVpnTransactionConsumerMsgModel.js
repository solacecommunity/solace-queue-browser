import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnTransactionConsumerMsgModel model module.
 * @module model/MsgVpnTransactionConsumerMsgModel
 * @version 2.36
 */
export class MsgVpnTransactionConsumerMsgModel {
  /**
   * Constructs a new <code>MsgVpnTransactionConsumerMsgModel</code>.
   * @alias module:model/MsgVpnTransactionConsumerMsgModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTransactionConsumerMsgModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTransactionConsumerMsgModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTransactionConsumerMsgModel} The populated <code>MsgVpnTransactionConsumerMsgModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTransactionConsumerMsgModel();
      if (data.hasOwnProperty('endpointName'))
        obj.endpointName = ApiClient.convertToType(data['endpointName'], 'String');
      if (data.hasOwnProperty('endpointType'))
        obj.endpointType = ApiClient.convertToType(data['endpointType'], 'String');
      if (data.hasOwnProperty('msgId'))
        obj.msgId = ApiClient.convertToType(data['msgId'], 'Number');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('replicationGroupMsgId'))
        obj.replicationGroupMsgId = ApiClient.convertToType(data['replicationGroupMsgId'], 'String');
      if (data.hasOwnProperty('xid'))
        obj.xid = ApiClient.convertToType(data['xid'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the Queue or Topic Endpoint source.
 * @member {String} endpointName
 */
MsgVpnTransactionConsumerMsgModel.prototype.endpointName = undefined;

/**
 * The type of endpoint source. The allowed values and their meaning are:  <pre> \"queue\" - The Message is from a Queue. \"topic-endpoint\" - The Message is from a Topic Endpoint. </pre> 
 * @member {String} endpointType
 */
MsgVpnTransactionConsumerMsgModel.prototype.endpointType = undefined;

/**
 * The identifier (ID) of the Message.
 * @member {Number} msgId
 */
MsgVpnTransactionConsumerMsgModel.prototype.msgId = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnTransactionConsumerMsgModel.prototype.msgVpnName = undefined;

/**
 * An ID that uniquely identifies this message within this replication group. Available since 2.21.
 * @member {String} replicationGroupMsgId
 */
MsgVpnTransactionConsumerMsgModel.prototype.replicationGroupMsgId = undefined;

/**
 * The identifier (ID) of the Transaction.
 * @member {String} xid
 */
MsgVpnTransactionConsumerMsgModel.prototype.xid = undefined;

