import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnClientRxFlowModel model module.
 * @module model/MsgVpnClientRxFlowModel
 * @version 2.36
 */
export class MsgVpnClientRxFlowModel {
  /**
   * Constructs a new <code>MsgVpnClientRxFlowModel</code>.
   * @alias module:model/MsgVpnClientRxFlowModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnClientRxFlowModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientRxFlowModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientRxFlowModel} The populated <code>MsgVpnClientRxFlowModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientRxFlowModel();
      if (data.hasOwnProperty('clientName'))
        obj.clientName = ApiClient.convertToType(data['clientName'], 'String');
      if (data.hasOwnProperty('connectTime'))
        obj.connectTime = ApiClient.convertToType(data['connectTime'], 'Number');
      if (data.hasOwnProperty('destinationGroupErrorDiscardedMsgCount'))
        obj.destinationGroupErrorDiscardedMsgCount = ApiClient.convertToType(data['destinationGroupErrorDiscardedMsgCount'], 'Number');
      if (data.hasOwnProperty('duplicateDiscardedMsgCount'))
        obj.duplicateDiscardedMsgCount = ApiClient.convertToType(data['duplicateDiscardedMsgCount'], 'Number');
      if (data.hasOwnProperty('endpointDisabledDiscardedMsgCount'))
        obj.endpointDisabledDiscardedMsgCount = ApiClient.convertToType(data['endpointDisabledDiscardedMsgCount'], 'Number');
      if (data.hasOwnProperty('endpointUsageExceededDiscardedMsgCount'))
        obj.endpointUsageExceededDiscardedMsgCount = ApiClient.convertToType(data['endpointUsageExceededDiscardedMsgCount'], 'Number');
      if (data.hasOwnProperty('erroredDiscardedMsgCount'))
        obj.erroredDiscardedMsgCount = ApiClient.convertToType(data['erroredDiscardedMsgCount'], 'Number');
      if (data.hasOwnProperty('flowId'))
        obj.flowId = ApiClient.convertToType(data['flowId'], 'Number');
      if (data.hasOwnProperty('flowName'))
        obj.flowName = ApiClient.convertToType(data['flowName'], 'String');
      if (data.hasOwnProperty('guaranteedMsgCount'))
        obj.guaranteedMsgCount = ApiClient.convertToType(data['guaranteedMsgCount'], 'Number');
      if (data.hasOwnProperty('lastRxMsgId'))
        obj.lastRxMsgId = ApiClient.convertToType(data['lastRxMsgId'], 'Number');
      if (data.hasOwnProperty('localMsgCountExceededDiscardedMsgCount'))
        obj.localMsgCountExceededDiscardedMsgCount = ApiClient.convertToType(data['localMsgCountExceededDiscardedMsgCount'], 'Number');
      if (data.hasOwnProperty('lowPriorityMsgCongestionDiscardedMsgCount'))
        obj.lowPriorityMsgCongestionDiscardedMsgCount = ApiClient.convertToType(data['lowPriorityMsgCongestionDiscardedMsgCount'], 'Number');
      if (data.hasOwnProperty('maxMsgSizeExceededDiscardedMsgCount'))
        obj.maxMsgSizeExceededDiscardedMsgCount = ApiClient.convertToType(data['maxMsgSizeExceededDiscardedMsgCount'], 'Number');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('noEligibleDestinationsDiscardedMsgCount'))
        obj.noEligibleDestinationsDiscardedMsgCount = ApiClient.convertToType(data['noEligibleDestinationsDiscardedMsgCount'], 'Number');
      if (data.hasOwnProperty('noLocalDeliveryDiscardedMsgCount'))
        obj.noLocalDeliveryDiscardedMsgCount = ApiClient.convertToType(data['noLocalDeliveryDiscardedMsgCount'], 'Number');
      if (data.hasOwnProperty('notCompatibleWithForwardingModeDiscardedMsgCount'))
        obj.notCompatibleWithForwardingModeDiscardedMsgCount = ApiClient.convertToType(data['notCompatibleWithForwardingModeDiscardedMsgCount'], 'Number');
      if (data.hasOwnProperty('outOfOrderDiscardedMsgCount'))
        obj.outOfOrderDiscardedMsgCount = ApiClient.convertToType(data['outOfOrderDiscardedMsgCount'], 'Number');
      if (data.hasOwnProperty('publishAclDeniedDiscardedMsgCount'))
        obj.publishAclDeniedDiscardedMsgCount = ApiClient.convertToType(data['publishAclDeniedDiscardedMsgCount'], 'Number');
      if (data.hasOwnProperty('publisherId'))
        obj.publisherId = ApiClient.convertToType(data['publisherId'], 'Number');
      if (data.hasOwnProperty('queueNotFoundDiscardedMsgCount'))
        obj.queueNotFoundDiscardedMsgCount = ApiClient.convertToType(data['queueNotFoundDiscardedMsgCount'], 'Number');
      if (data.hasOwnProperty('replicationStandbyDiscardedMsgCount'))
        obj.replicationStandbyDiscardedMsgCount = ApiClient.convertToType(data['replicationStandbyDiscardedMsgCount'], 'Number');
      if (data.hasOwnProperty('sessionName'))
        obj.sessionName = ApiClient.convertToType(data['sessionName'], 'String');
      if (data.hasOwnProperty('smfTtlExceededDiscardedMsgCount'))
        obj.smfTtlExceededDiscardedMsgCount = ApiClient.convertToType(data['smfTtlExceededDiscardedMsgCount'], 'Number');
      if (data.hasOwnProperty('spoolFileLimitExceededDiscardedMsgCount'))
        obj.spoolFileLimitExceededDiscardedMsgCount = ApiClient.convertToType(data['spoolFileLimitExceededDiscardedMsgCount'], 'Number');
      if (data.hasOwnProperty('spoolNotReadyDiscardedMsgCount'))
        obj.spoolNotReadyDiscardedMsgCount = ApiClient.convertToType(data['spoolNotReadyDiscardedMsgCount'], 'Number');
      if (data.hasOwnProperty('spoolToAdbFailDiscardedMsgCount'))
        obj.spoolToAdbFailDiscardedMsgCount = ApiClient.convertToType(data['spoolToAdbFailDiscardedMsgCount'], 'Number');
      if (data.hasOwnProperty('spoolToDiskFailDiscardedMsgCount'))
        obj.spoolToDiskFailDiscardedMsgCount = ApiClient.convertToType(data['spoolToDiskFailDiscardedMsgCount'], 'Number');
      if (data.hasOwnProperty('spoolUsageExceededDiscardedMsgCount'))
        obj.spoolUsageExceededDiscardedMsgCount = ApiClient.convertToType(data['spoolUsageExceededDiscardedMsgCount'], 'Number');
      if (data.hasOwnProperty('syncReplicationIneligibleDiscardedMsgCount'))
        obj.syncReplicationIneligibleDiscardedMsgCount = ApiClient.convertToType(data['syncReplicationIneligibleDiscardedMsgCount'], 'Number');
      if (data.hasOwnProperty('userProfileDeniedGuaranteedDiscardedMsgCount'))
        obj.userProfileDeniedGuaranteedDiscardedMsgCount = ApiClient.convertToType(data['userProfileDeniedGuaranteedDiscardedMsgCount'], 'Number');
      if (data.hasOwnProperty('windowSize'))
        obj.windowSize = ApiClient.convertToType(data['windowSize'], 'Number');
    }
    return obj;
  }
}

/**
 * The name of the Client.
 * @member {String} clientName
 */
MsgVpnClientRxFlowModel.prototype.clientName = undefined;

/**
 * The timestamp of when the Flow from the Client connected.
 * @member {Number} connectTime
 */
MsgVpnClientRxFlowModel.prototype.connectTime = undefined;

/**
 * The number of guaranteed messages from the Flow discarded due to a destination group error.
 * @member {Number} destinationGroupErrorDiscardedMsgCount
 */
MsgVpnClientRxFlowModel.prototype.destinationGroupErrorDiscardedMsgCount = undefined;

/**
 * The number of guaranteed messages from the Flow discarded due to being a duplicate.
 * @member {Number} duplicateDiscardedMsgCount
 */
MsgVpnClientRxFlowModel.prototype.duplicateDiscardedMsgCount = undefined;

/**
 * The number of guaranteed messages from the Flow discarded due to an eligible endpoint destination being disabled.
 * @member {Number} endpointDisabledDiscardedMsgCount
 */
MsgVpnClientRxFlowModel.prototype.endpointDisabledDiscardedMsgCount = undefined;

/**
 * The number of guaranteed messages from the Flow discarded due to an eligible endpoint destination having its maximum message spool usage exceeded.
 * @member {Number} endpointUsageExceededDiscardedMsgCount
 */
MsgVpnClientRxFlowModel.prototype.endpointUsageExceededDiscardedMsgCount = undefined;

/**
 * The number of guaranteed messages from the Flow discarded due to errors being detected.
 * @member {Number} erroredDiscardedMsgCount
 */
MsgVpnClientRxFlowModel.prototype.erroredDiscardedMsgCount = undefined;

/**
 * The identifier (ID) of the flow.
 * @member {Number} flowId
 */
MsgVpnClientRxFlowModel.prototype.flowId = undefined;

/**
 * The name of the Flow.
 * @member {String} flowName
 */
MsgVpnClientRxFlowModel.prototype.flowName = undefined;

/**
 * The number of guaranteed messages from the Flow.
 * @member {Number} guaranteedMsgCount
 */
MsgVpnClientRxFlowModel.prototype.guaranteedMsgCount = undefined;

/**
 * The identifier (ID) of the last message received on the Flow.
 * @member {Number} lastRxMsgId
 */
MsgVpnClientRxFlowModel.prototype.lastRxMsgId = undefined;

/**
 * The number of guaranteed messages from the Flow discarded due to the maximum number of messages allowed on the broker being exceeded.
 * @member {Number} localMsgCountExceededDiscardedMsgCount
 */
MsgVpnClientRxFlowModel.prototype.localMsgCountExceededDiscardedMsgCount = undefined;

/**
 * The number of guaranteed messages from the Flow discarded due to congestion of low priority messages.
 * @member {Number} lowPriorityMsgCongestionDiscardedMsgCount
 */
MsgVpnClientRxFlowModel.prototype.lowPriorityMsgCongestionDiscardedMsgCount = undefined;

/**
 * The number of guaranteed messages from the Flow discarded due to the maximum allowed message size being exceeded.
 * @member {Number} maxMsgSizeExceededDiscardedMsgCount
 */
MsgVpnClientRxFlowModel.prototype.maxMsgSizeExceededDiscardedMsgCount = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnClientRxFlowModel.prototype.msgVpnName = undefined;

/**
 * The number of guaranteed messages from the Flow discarded due to there being no eligible endpoint destination.
 * @member {Number} noEligibleDestinationsDiscardedMsgCount
 */
MsgVpnClientRxFlowModel.prototype.noEligibleDestinationsDiscardedMsgCount = undefined;

/**
 * The number of guaranteed messages from the Flow discarded due to no local delivery being requested.
 * @member {Number} noLocalDeliveryDiscardedMsgCount
 */
MsgVpnClientRxFlowModel.prototype.noLocalDeliveryDiscardedMsgCount = undefined;

/**
 * The number of guaranteed messages from the Flow discarded due to being incompatible with the forwarding mode of an eligible endpoint destination.
 * @member {Number} notCompatibleWithForwardingModeDiscardedMsgCount
 */
MsgVpnClientRxFlowModel.prototype.notCompatibleWithForwardingModeDiscardedMsgCount = undefined;

/**
 * The number of guaranteed messages from the Flow discarded due to being received out of order.
 * @member {Number} outOfOrderDiscardedMsgCount
 */
MsgVpnClientRxFlowModel.prototype.outOfOrderDiscardedMsgCount = undefined;

/**
 * The number of guaranteed messages from the Flow discarded due to being denied by the access control list (ACL) profile for the published topic.
 * @member {Number} publishAclDeniedDiscardedMsgCount
 */
MsgVpnClientRxFlowModel.prototype.publishAclDeniedDiscardedMsgCount = undefined;

/**
 * The identifier (ID) of the publisher for the Flow.
 * @member {Number} publisherId
 */
MsgVpnClientRxFlowModel.prototype.publisherId = undefined;

/**
 * The number of guaranteed messages from the Flow discarded due to the destination queue not being found.
 * @member {Number} queueNotFoundDiscardedMsgCount
 */
MsgVpnClientRxFlowModel.prototype.queueNotFoundDiscardedMsgCount = undefined;

/**
 * The number of guaranteed messages from the Flow discarded due to the Message VPN being in the replication standby state.
 * @member {Number} replicationStandbyDiscardedMsgCount
 */
MsgVpnClientRxFlowModel.prototype.replicationStandbyDiscardedMsgCount = undefined;

/**
 * The name of the transacted session on the Flow.
 * @member {String} sessionName
 */
MsgVpnClientRxFlowModel.prototype.sessionName = undefined;

/**
 * The number of guaranteed messages from the Flow discarded due to the message time-to-live (TTL) count being exceeded. The message TTL count is the maximum number of times the message can cross a bridge between Message VPNs.
 * @member {Number} smfTtlExceededDiscardedMsgCount
 */
MsgVpnClientRxFlowModel.prototype.smfTtlExceededDiscardedMsgCount = undefined;

/**
 * The number of guaranteed messages from the Flow discarded due to all available message spool file resources being used.
 * @member {Number} spoolFileLimitExceededDiscardedMsgCount
 */
MsgVpnClientRxFlowModel.prototype.spoolFileLimitExceededDiscardedMsgCount = undefined;

/**
 * The number of guaranteed messages from the Flow discarded due to the message spool being not ready.
 * @member {Number} spoolNotReadyDiscardedMsgCount
 */
MsgVpnClientRxFlowModel.prototype.spoolNotReadyDiscardedMsgCount = undefined;

/**
 * The number of guaranteed messages from the Flow discarded due to a failure while spooling to the Assured Delivery Blade (ADB).
 * @member {Number} spoolToAdbFailDiscardedMsgCount
 */
MsgVpnClientRxFlowModel.prototype.spoolToAdbFailDiscardedMsgCount = undefined;

/**
 * The number of guaranteed messages from the Flow discarded due to a failure while spooling to the disk.
 * @member {Number} spoolToDiskFailDiscardedMsgCount
 */
MsgVpnClientRxFlowModel.prototype.spoolToDiskFailDiscardedMsgCount = undefined;

/**
 * The number of guaranteed messages from the Flow discarded due to the maximum message spool usage being exceeded.
 * @member {Number} spoolUsageExceededDiscardedMsgCount
 */
MsgVpnClientRxFlowModel.prototype.spoolUsageExceededDiscardedMsgCount = undefined;

/**
 * The number of guaranteed messages from the Flow discarded due to synchronous replication being ineligible.
 * @member {Number} syncReplicationIneligibleDiscardedMsgCount
 */
MsgVpnClientRxFlowModel.prototype.syncReplicationIneligibleDiscardedMsgCount = undefined;

/**
 * The number of guaranteed messages from the Flow discarded due to being denied by the client profile.
 * @member {Number} userProfileDeniedGuaranteedDiscardedMsgCount
 */
MsgVpnClientRxFlowModel.prototype.userProfileDeniedGuaranteedDiscardedMsgCount = undefined;

/**
 * The size of the window used for guaranteed messages sent on the Flow, in messages.
 * @member {Number} windowSize
 */
MsgVpnClientRxFlowModel.prototype.windowSize = undefined;

