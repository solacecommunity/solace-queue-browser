import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnTopicEndpointMsgModel model module.
 * @module model/MsgVpnTopicEndpointMsgModel
 * @version 2.36
 */
export class MsgVpnTopicEndpointMsgModel {
  /**
   * Constructs a new <code>MsgVpnTopicEndpointMsgModel</code>.
   * @alias module:model/MsgVpnTopicEndpointMsgModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTopicEndpointMsgModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTopicEndpointMsgModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTopicEndpointMsgModel} The populated <code>MsgVpnTopicEndpointMsgModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTopicEndpointMsgModel();
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
      if (data.hasOwnProperty('priority'))
        obj.priority = ApiClient.convertToType(data['priority'], 'Number');
      if (data.hasOwnProperty('publisherId'))
        obj.publisherId = ApiClient.convertToType(data['publisherId'], 'Number');
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
      if (data.hasOwnProperty('topicEndpointName'))
        obj.topicEndpointName = ApiClient.convertToType(data['topicEndpointName'], 'String');
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
MsgVpnTopicEndpointMsgModel.prototype.attachmentSize = undefined;

/**
 * The size of the Message content, in bytes (B).
 * @member {Number} contentSize
 */
MsgVpnTopicEndpointMsgModel.prototype.contentSize = undefined;

/**
 * The timestamp of when the Message is eligible for delivery. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time). Available since 2.22.
 * @member {Number} deliveryEligibleTime
 */
MsgVpnTopicEndpointMsgModel.prototype.deliveryEligibleTime = undefined;

/**
 * Indicates whether the Message is eligible for the Dead Message Queue (DMQ).
 * @member {Boolean} dmqEligible
 */
MsgVpnTopicEndpointMsgModel.prototype.dmqEligible = undefined;

/**
 * The timestamp of when the Message expires. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} expiryTime
 */
MsgVpnTopicEndpointMsgModel.prototype.expiryTime = undefined;

/**
 * The identifier (ID) of the Message.
 * @member {Number} msgId
 */
MsgVpnTopicEndpointMsgModel.prototype.msgId = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnTopicEndpointMsgModel.prototype.msgVpnName = undefined;

/**
 * The priority level of the Message, from 9 (highest) to 0 (lowest).
 * @member {Number} priority
 */
MsgVpnTopicEndpointMsgModel.prototype.priority = undefined;

/**
 * The identifier (ID) of the Message publisher.
 * @member {Number} publisherId
 */
MsgVpnTopicEndpointMsgModel.prototype.publisherId = undefined;

/**
 * The number of times the Message has been redelivered.
 * @member {Number} redeliveryCount
 */
MsgVpnTopicEndpointMsgModel.prototype.redeliveryCount = undefined;

/**
 * The Message identifier (ID) on the replication mate. Applicable only to replicated messages.
 * @member {Number} replicatedMateMsgId
 */
MsgVpnTopicEndpointMsgModel.prototype.replicatedMateMsgId = undefined;

/**
 * An ID that uniquely identifies this Message within this replication group. Available since 2.21.
 * @member {String} replicationGroupMsgId
 */
MsgVpnTopicEndpointMsgModel.prototype.replicationGroupMsgId = undefined;

/**
 * The replication state of the Message. The allowed values and their meaning are:  <pre> \"replicated\" - The Message is replicated to the remote Message VPN. \"not-replicated\" - The Message is not being replicated to the remote Message VPN. \"pending-replication\" - The Message is queued for replication to the remote Message VPN. </pre> 
 * @member {String} replicationState
 */
MsgVpnTopicEndpointMsgModel.prototype.replicationState = undefined;

/**
 * The timestamp of when the Message was spooled in the Topic Endpoint. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} spooledTime
 */
MsgVpnTopicEndpointMsgModel.prototype.spooledTime = undefined;

/**
 * The name of the Topic Endpoint.
 * @member {String} topicEndpointName
 */
MsgVpnTopicEndpointMsgModel.prototype.topicEndpointName = undefined;

/**
 * Indicates whether delivery of the Message has never been attempted.
 * @member {Boolean} undelivered
 */
MsgVpnTopicEndpointMsgModel.prototype.undelivered = undefined;

