import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnDmrBridgeModel model module.
 * @module model/MsgVpnDmrBridgeModel
 * @version 2.36
 */
export class MsgVpnDmrBridgeModel {
  /**
   * Constructs a new <code>MsgVpnDmrBridgeModel</code>.
   * @alias module:model/MsgVpnDmrBridgeModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnDmrBridgeModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDmrBridgeModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDmrBridgeModel} The populated <code>MsgVpnDmrBridgeModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDmrBridgeModel();
      if (data.hasOwnProperty('failureReason'))
        obj.failureReason = ApiClient.convertToType(data['failureReason'], 'String');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('remoteMsgVpnName'))
        obj.remoteMsgVpnName = ApiClient.convertToType(data['remoteMsgVpnName'], 'String');
      if (data.hasOwnProperty('remoteNodeName'))
        obj.remoteNodeName = ApiClient.convertToType(data['remoteNodeName'], 'String');
      if (data.hasOwnProperty('up'))
        obj.up = ApiClient.convertToType(data['up'], 'Boolean');
      if (data.hasOwnProperty('uptime'))
        obj.uptime = ApiClient.convertToType(data['uptime'], 'Number');
    }
    return obj;
  }
}

/**
 * The last failure reason for the DMR Bridge.
 * @member {String} failureReason
 */
MsgVpnDmrBridgeModel.prototype.failureReason = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnDmrBridgeModel.prototype.msgVpnName = undefined;

/**
 * The remote Message VPN of the DMR Bridge.
 * @member {String} remoteMsgVpnName
 */
MsgVpnDmrBridgeModel.prototype.remoteMsgVpnName = undefined;

/**
 * The name of the node at the remote end of the DMR Bridge.
 * @member {String} remoteNodeName
 */
MsgVpnDmrBridgeModel.prototype.remoteNodeName = undefined;

/**
 * Indicates whether the operational state of the DMR Bridge is up.
 * @member {Boolean} up
 */
MsgVpnDmrBridgeModel.prototype.up = undefined;

/**
 * The amount of time in seconds since the DMR Bridge was up.
 * @member {Number} uptime
 */
MsgVpnDmrBridgeModel.prototype.uptime = undefined;

