import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnQueueMsgModel model module.
 * @module model/MsgVpnQueueMsgModel
 * @version 2.36
 */
export class MsgVpnQueueMsgModel {
  /**
   * Constructs a new <code>MsgVpnQueueMsgModel</code>.
   * @alias module:model/MsgVpnQueueMsgModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnQueueMsgModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnQueueMsgModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnQueueMsgModel} The populated <code>MsgVpnQueueMsgModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnQueueMsgModel();
      if (data.hasOwnProperty('attachmentSize'))
        obj.attachmentSize = ApiClient.convertToType(data['attachmentSize'], 'Number');
      if (data.hasOwnProperty('contentSize'))
        obj.contentSize = ApiClient.convertToType(data['contentSize'], 'Number');
      if (data.hasOwnProperty('deliveryEligibleTime'))
        obj.deliveryEligibleTime = ApiClient.convertToType(data['deliveryEligibleTime'], 'Number');
      if (data.hasOwnProperty('dmqEligible'))
        obj.dmqEligible = ApiClient.convertToType(data['dmqEligible'], 'Boolean');
      if (data.hasOwnProperty('expiryTime'))
        obj.expiryTime = ApiClient.convertToType(data['expiryTime'], 'Number');
      if (data.hasOwnProperty('msgId'))
        obj.msgId = ApiClient.convertToType(data['msgId'], 'Number');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('partitionKey'))
        obj.partitionKey = ApiClient.convertToType(data['partitionKey'], 'String');
      if (data.hasOwnProperty('partitionKeyHash'))
        obj.partitionKeyHash = ApiClient.convertToType(data['partitionKeyHash'], 'Number');
      if (data.hasOwnProperty('priority'))
        obj.priority = ApiClient.convertToType(data['priority'], 'Number');
      if (data.hasOwnProperty('publisherId'))
        obj.publisherId = ApiClient.convertToType(data['publisherId'], 'Number');
      if (data.hasOwnProperty('queueName'))
        obj.queueName = ApiClient.convertToType(data['queueName'], 'String');
      if (data.hasOwnProperty('redeliveryCount'))
        obj.redeliveryCount = ApiClient.convertToType(data['redeliveryCount'], 'Number');
      if (data.hasOwnProperty('replicatedMateMsgId'))
        obj.replicatedMateMsgId = ApiClient.convertToType(data['replicatedMateMsgId'], 'Number');
      if (data.hasOwnProperty('replicationGroupMsgId'))
        obj.replicationGroupMsgId = ApiClient.convertToType(data['replicationGroupMsgId'], 'String');
      if (data.hasOwnProperty('replicationState'))
        obj.replicationState = ApiClient.convertToType(data['replicationState'], 'String');
      if (data.hasOwnProperty('spooledTime'))
        obj.spooledTime = ApiClient.convertToType(data['spooledTime'], 'Number');
      if (data.hasOwnProperty('undelivered'))
        obj.undelivered = ApiClient.convertToType(data['undelivered'], 'Boolean');
    }
    return obj;
  }
}

/**
 * The size of the Message attachment, in bytes (B).
 * @member {Number} attachmentSize
 */
MsgVpnQueueMsgModel.prototype.attachmentSize = undefined;

/**
 * The size of the Message content, in bytes (B).
 * @member {Number} contentSize
 */
MsgVpnQueueMsgModel.prototype.contentSize = undefined;

/**
 * The timestamp of when the Message is eligible for delivery. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time). Available since 2.22.
 * @member {Number} deliveryEligibleTime
 */
MsgVpnQueueMsgModel.prototype.deliveryEligibleTime = undefined;

/**
 * Indicates whether the Message is eligible for the Dead Message Queue (DMQ).
 * @member {Boolean} dmqEligible
 */
MsgVpnQueueMsgModel.prototype.dmqEligible = undefined;

/**
 * The timestamp of when the Message expires. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} expiryTime
 */
MsgVpnQueueMsgModel.prototype.expiryTime = undefined;

/**
 * The identifier (ID) of the Message.
 * @member {Number} msgId
 */
MsgVpnQueueMsgModel.prototype.msgId = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnQueueMsgModel.prototype.msgVpnName = undefined;

/**
 * The partition key of the Message. Available since 2.35.
 * @member {String} partitionKey
 */
MsgVpnQueueMsgModel.prototype.partitionKey = undefined;

/**
 * The partition key hash of the Message. Available since 2.35.
 * @member {Number} partitionKeyHash
 */
MsgVpnQueueMsgModel.prototype.partitionKeyHash = undefined;

/**
 * The priority level of the Message, from 9 (highest) to 0 (lowest).
 * @member {Number} priority
 */
MsgVpnQueueMsgModel.prototype.priority = undefined;

/**
 * The identifier (ID) of the Message publisher.
 * @member {Number} publisherId
 */
MsgVpnQueueMsgModel.prototype.publisherId = undefined;

/**
 * The name of the Queue.
 * @member {String} queueName
 */
MsgVpnQueueMsgModel.prototype.queueName = undefined;

/**
 * The number of times the Message has been redelivered.
 * @member {Number} redeliveryCount
 */
MsgVpnQueueMsgModel.prototype.redeliveryCount = undefined;

/**
 * The Message identifier (ID) on the replication mate. Applicable only to replicated messages.
 * @member {Number} replicatedMateMsgId
 */
MsgVpnQueueMsgModel.prototype.replicatedMateMsgId = undefined;

/**
 * An ID that uniquely identifies this Message within this replication group. Available since 2.21.
 * @member {String} replicationGroupMsgId
 */
MsgVpnQueueMsgModel.prototype.replicationGroupMsgId = undefined;

/**
 * The replication state of the Message. The allowed values and their meaning are:  <pre> \"replicated\" - The Message is replicated to the remote Message VPN. \"not-replicated\" - The Message is not being replicated to the remote Message VPN. \"pending-replication\" - The Message is queued for replication to the remote Message VPN. </pre> 
 * @member {String} replicationState
 */
MsgVpnQueueMsgModel.prototype.replicationState = undefined;

/**
 * The timestamp of when the Message was spooled in the Queue. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} spooledTime
 */
MsgVpnQueueMsgModel.prototype.spooledTime = undefined;

/**
 * Indicates whether delivery of the Message has never been attempted.
 * @member {Boolean} undelivered
 */
MsgVpnQueueMsgModel.prototype.undelivered = undefined;

