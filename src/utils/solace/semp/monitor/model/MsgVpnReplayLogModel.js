import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnReplayLogModel model module.
 * @module model/MsgVpnReplayLogModel
 * @version 2.36
 */
export class MsgVpnReplayLogModel {
  /**
   * Constructs a new <code>MsgVpnReplayLogModel</code>.
   * @alias module:model/MsgVpnReplayLogModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnReplayLogModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnReplayLogModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnReplayLogModel} The populated <code>MsgVpnReplayLogModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnReplayLogModel();
      if (data.hasOwnProperty('egressEnabled'))
        obj.egressEnabled = ApiClient.convertToType(data['egressEnabled'], 'Boolean');
      if (data.hasOwnProperty('ingressEnabled'))
        obj.ingressEnabled = ApiClient.convertToType(data['ingressEnabled'], 'Boolean');
      if (data.hasOwnProperty('maxSpoolUsage'))
        obj.maxSpoolUsage = ApiClient.convertToType(data['maxSpoolUsage'], 'Number');
      if (data.hasOwnProperty('msgSpoolUsage'))
        obj.msgSpoolUsage = ApiClient.convertToType(data['msgSpoolUsage'], 'Number');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('replayLogName'))
        obj.replayLogName = ApiClient.convertToType(data['replayLogName'], 'String');
      if (data.hasOwnProperty('topicFilterEnabled'))
        obj.topicFilterEnabled = ApiClient.convertToType(data['topicFilterEnabled'], 'Boolean');
    }
    return obj;
  }
}

/**
 * Indicates whether the transmission of messages from the Replay Log is enabled.
 * @member {Boolean} egressEnabled
 */
MsgVpnReplayLogModel.prototype.egressEnabled = undefined;

/**
 * Indicates whether the reception of messages to the Replay Log is enabled.
 * @member {Boolean} ingressEnabled
 */
MsgVpnReplayLogModel.prototype.ingressEnabled = undefined;

/**
 * The maximum spool usage allowed by the Replay Log, in megabytes (MB). If this limit is exceeded, old messages will be trimmed.
 * @member {Number} maxSpoolUsage
 */
MsgVpnReplayLogModel.prototype.maxSpoolUsage = undefined;

/**
 * The spool usage of the Replay Log, in bytes (B).
 * @member {Number} msgSpoolUsage
 */
MsgVpnReplayLogModel.prototype.msgSpoolUsage = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnReplayLogModel.prototype.msgVpnName = undefined;

/**
 * The name of the Replay Log.
 * @member {String} replayLogName
 */
MsgVpnReplayLogModel.prototype.replayLogName = undefined;

/**
 * Enable or disable topic filtering for the Replay Log. Available since 2.27.
 * @member {Boolean} topicFilterEnabled
 */
MsgVpnReplayLogModel.prototype.topicFilterEnabled = undefined;

