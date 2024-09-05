import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnReplayLogMsgModel model module.
 * @module model/MsgVpnReplayLogMsgModel
 * @version 2.36
 */
export class MsgVpnReplayLogMsgModel {
  /**
   * Constructs a new <code>MsgVpnReplayLogMsgModel</code>.
   * @alias module:model/MsgVpnReplayLogMsgModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnReplayLogMsgModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnReplayLogMsgModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnReplayLogMsgModel} The populated <code>MsgVpnReplayLogMsgModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnReplayLogMsgModel();
      if (data.hasOwnProperty('attachmentSize'))
        obj.attachmentSize = ApiClient.convertToType(data['attachmentSize'], 'Number');
      if (data.hasOwnProperty('contentSize'))
        obj.contentSize = ApiClient.convertToType(data['contentSize'], 'Number');
      if (data.hasOwnProperty('dmqEligible'))
        obj.dmqEligible = ApiClient.convertToType(data['dmqEligible'], 'Boolean');
      if (data.hasOwnProperty('msgId'))
        obj.msgId = ApiClient.convertToType(data['msgId'], 'Number');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('priority'))
        obj.priority = ApiClient.convertToType(data['priority'], 'Number');
      if (data.hasOwnProperty('publisherId'))
        obj.publisherId = ApiClient.convertToType(data['publisherId'], 'Number');
      if (data.hasOwnProperty('replayLogName'))
        obj.replayLogName = ApiClient.convertToType(data['replayLogName'], 'String');
      if (data.hasOwnProperty('replicationGroupMsgId'))
        obj.replicationGroupMsgId = ApiClient.convertToType(data['replicationGroupMsgId'], 'String');
      if (data.hasOwnProperty('sequenceNumber'))
        obj.sequenceNumber = ApiClient.convertToType(data['sequenceNumber'], 'Number');
      if (data.hasOwnProperty('spooledTime'))
        obj.spooledTime = ApiClient.convertToType(data['spooledTime'], 'Number');
    }
    return obj;
  }
}

/**
 * The size of the message attachment, in bytes (B).
 * @member {Number} attachmentSize
 */
MsgVpnReplayLogMsgModel.prototype.attachmentSize = undefined;

/**
 * The size of the message content, in bytes (B).
 * @member {Number} contentSize
 */
MsgVpnReplayLogMsgModel.prototype.contentSize = undefined;

/**
 * Indicates whether the message is eligible for the Dead Message Queue (DMQ).
 * @member {Boolean} dmqEligible
 */
MsgVpnReplayLogMsgModel.prototype.dmqEligible = undefined;

/**
 * The identifier (ID) of the message.
 * @member {Number} msgId
 */
MsgVpnReplayLogMsgModel.prototype.msgId = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnReplayLogMsgModel.prototype.msgVpnName = undefined;

/**
 * The priority level of the message.
 * @member {Number} priority
 */
MsgVpnReplayLogMsgModel.prototype.priority = undefined;

/**
 * The identifier (ID) of the message publisher.
 * @member {Number} publisherId
 */
MsgVpnReplayLogMsgModel.prototype.publisherId = undefined;

/**
 * The name of the Replay Log.
 * @member {String} replayLogName
 */
MsgVpnReplayLogMsgModel.prototype.replayLogName = undefined;

/**
 * An ID that uniquely identifies this Message within this replication group. Available since 2.21.
 * @member {String} replicationGroupMsgId
 */
MsgVpnReplayLogMsgModel.prototype.replicationGroupMsgId = undefined;

/**
 * The sequence number assigned to the message. Applicable only to messages received on sequenced topics.
 * @member {Number} sequenceNumber
 */
MsgVpnReplayLogMsgModel.prototype.sequenceNumber = undefined;

/**
 * The timestamp of when the message was spooled in the Replay Log. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} spooledTime
 */
MsgVpnReplayLogMsgModel.prototype.spooledTime = undefined;

