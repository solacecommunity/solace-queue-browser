import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnConfigSyncRemoteNodeModel model module.
 * @module model/MsgVpnConfigSyncRemoteNodeModel
 * @version 2.36
 */
export class MsgVpnConfigSyncRemoteNodeModel {
  /**
   * Constructs a new <code>MsgVpnConfigSyncRemoteNodeModel</code>.
   * @alias module:model/MsgVpnConfigSyncRemoteNodeModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnConfigSyncRemoteNodeModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnConfigSyncRemoteNodeModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnConfigSyncRemoteNodeModel} The populated <code>MsgVpnConfigSyncRemoteNodeModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnConfigSyncRemoteNodeModel();
      if (data.hasOwnProperty('lastMsgRxTime'))
        obj.lastMsgRxTime = ApiClient.convertToType(data['lastMsgRxTime'], 'Number');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('remoteNodeName'))
        obj.remoteNodeName = ApiClient.convertToType(data['remoteNodeName'], 'String');
      if (data.hasOwnProperty('role'))
        obj.role = ApiClient.convertToType(data['role'], 'String');
      if (data.hasOwnProperty('stale'))
        obj.stale = ApiClient.convertToType(data['stale'], 'Boolean');
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
      if (data.hasOwnProperty('timeInState'))
        obj.timeInState = ApiClient.convertToType(data['timeInState'], 'Number');
    }
    return obj;
  }
}

/**
 * The amount of time in seconds since the last message was received from the config sync table of the remote Message VPN. Deprecated since 2.22. This attribute has been deprecated.
 * @member {Number} lastMsgRxTime
 */
MsgVpnConfigSyncRemoteNodeModel.prototype.lastMsgRxTime = undefined;

/**
 * The name of the Message VPN. Deprecated since 2.22. This attribute has been deprecated.
 * @member {String} msgVpnName
 */
MsgVpnConfigSyncRemoteNodeModel.prototype.msgVpnName = undefined;

/**
 * The name of the Config Sync Remote Node. Deprecated since 2.22. This attribute has been deprecated.
 * @member {String} remoteNodeName
 */
MsgVpnConfigSyncRemoteNodeModel.prototype.remoteNodeName = undefined;

/**
 * The role of the config sync table of the remote Message VPN. The allowed values and their meaning are:  <pre> \"unknown\" - The role is unknown. \"primary\" - Acts as the primary source of config data. \"replica\" - Acts as a replica of the primary config data. </pre>  Deprecated since 2.22. This attribute has been deprecated.
 * @member {String} role
 */
MsgVpnConfigSyncRemoteNodeModel.prototype.role = undefined;

/**
 * Indicates whether the config sync table of the remote Message VPN is stale. Deprecated since 2.22. This attribute has been deprecated.
 * @member {Boolean} stale
 */
MsgVpnConfigSyncRemoteNodeModel.prototype.stale = undefined;

/**
 * The state of the config sync table of the remote Message VPN. The allowed values and their meaning are:  <pre> \"unknown\" - The state is unknown. \"in-sync\" - The config data is synchronized between Message VPNs. \"reconciling\" - The config data is reconciling between Message VPNs. \"blocked\" - The config data is blocked from reconciling due to an error. \"out-of-sync\" - The config data is out of sync between Message VPNs. \"down\" - The state is down due to configuration. </pre>  Deprecated since 2.22. This attribute has been deprecated.
 * @member {String} state
 */
MsgVpnConfigSyncRemoteNodeModel.prototype.state = undefined;

/**
 * The amount of time in seconds the config sync table of the remote Message VPN has been in the current state. Deprecated since 2.22. This attribute has been deprecated.
 * @member {Number} timeInState
 */
MsgVpnConfigSyncRemoteNodeModel.prototype.timeInState = undefined;

