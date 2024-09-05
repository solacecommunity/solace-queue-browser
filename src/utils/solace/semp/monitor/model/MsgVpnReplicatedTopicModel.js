import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnReplicatedTopicModel model module.
 * @module model/MsgVpnReplicatedTopicModel
 * @version 2.36
 */
export class MsgVpnReplicatedTopicModel {
  /**
   * Constructs a new <code>MsgVpnReplicatedTopicModel</code>.
   * @alias module:model/MsgVpnReplicatedTopicModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnReplicatedTopicModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnReplicatedTopicModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnReplicatedTopicModel} The populated <code>MsgVpnReplicatedTopicModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnReplicatedTopicModel();
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('replicatedTopic'))
        obj.replicatedTopic = ApiClient.convertToType(data['replicatedTopic'], 'String');
      if (data.hasOwnProperty('replicationMode'))
        obj.replicationMode = ApiClient.convertToType(data['replicationMode'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnReplicatedTopicModel.prototype.msgVpnName = undefined;

/**
 * The topic for applying replication. Published messages matching this topic will be replicated to the standby site.
 * @member {String} replicatedTopic
 */
MsgVpnReplicatedTopicModel.prototype.replicatedTopic = undefined;

/**
 * Allowed values for the <code>replicationMode</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnReplicatedTopicModel.ReplicationModeEnum = {
  /**
   * value: "sync"
   * @const
   */
  sync: "sync",

  /**
   * value: "async"
   * @const
   */
  async: "async"
};
/**
 * The replication mode for the Replicated Topic. The allowed values and their meaning are:  <pre> \"sync\" - Messages are acknowledged when replicated (spooled remotely). \"async\" - Messages are acknowledged when pending replication (spooled locally). </pre> 
 * @member {module:model/MsgVpnReplicatedTopicModel.ReplicationModeEnum} replicationMode
 */
MsgVpnReplicatedTopicModel.prototype.replicationMode = undefined;

