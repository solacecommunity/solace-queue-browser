import {ApiClient} from '../ApiClient';

/**
 * The DmrClusterLinkChannelModel model module.
 * @module model/DmrClusterLinkChannelModel
 * @version 2.36
 */
export class DmrClusterLinkChannelModel {
  /**
   * Constructs a new <code>DmrClusterLinkChannelModel</code>.
   * @alias module:model/DmrClusterLinkChannelModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DmrClusterLinkChannelModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterLinkChannelModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterLinkChannelModel} The populated <code>DmrClusterLinkChannelModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterLinkChannelModel();
      if (data.hasOwnProperty('bridgeName'))
        obj.bridgeName = ApiClient.convertToType(data['bridgeName'], 'String');
      if (data.hasOwnProperty('clientName'))
        obj.clientName = ApiClient.convertToType(data['clientName'], 'String');
      if (data.hasOwnProperty('dmrClusterName'))
        obj.dmrClusterName = ApiClient.convertToType(data['dmrClusterName'], 'String');
      if (data.hasOwnProperty('establisher'))
        obj.establisher = ApiClient.convertToType(data['establisher'], 'Boolean');
      if (data.hasOwnProperty('failureReason'))
        obj.failureReason = ApiClient.convertToType(data['failureReason'], 'String');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('queueName'))
        obj.queueName = ApiClient.convertToType(data['queueName'], 'String');
      if (data.hasOwnProperty('remoteAddress'))
        obj.remoteAddress = ApiClient.convertToType(data['remoteAddress'], 'String');
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
 * The name of the Bridge used by the Channel.
 * @member {String} bridgeName
 */
DmrClusterLinkChannelModel.prototype.bridgeName = undefined;

/**
 * The name of the Client used by the Channel.
 * @member {String} clientName
 */
DmrClusterLinkChannelModel.prototype.clientName = undefined;

/**
 * The name of the Cluster.
 * @member {String} dmrClusterName
 */
DmrClusterLinkChannelModel.prototype.dmrClusterName = undefined;

/**
 * Indicates whether the local node established the Channel.
 * @member {Boolean} establisher
 */
DmrClusterLinkChannelModel.prototype.establisher = undefined;

/**
 * The failure reason for the Channel being down.
 * @member {String} failureReason
 */
DmrClusterLinkChannelModel.prototype.failureReason = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
DmrClusterLinkChannelModel.prototype.msgVpnName = undefined;

/**
 * The name of the Queue used by the Channel.
 * @member {String} queueName
 */
DmrClusterLinkChannelModel.prototype.queueName = undefined;

/**
 * The FQDN or IP address (and optional port) of the remote node.
 * @member {String} remoteAddress
 */
DmrClusterLinkChannelModel.prototype.remoteAddress = undefined;

/**
 * The name of the node at the remote end of the Link.
 * @member {String} remoteNodeName
 */
DmrClusterLinkChannelModel.prototype.remoteNodeName = undefined;

/**
 * Indicates whether the Channel is operationally up.
 * @member {Boolean} up
 */
DmrClusterLinkChannelModel.prototype.up = undefined;

/**
 * The amount of time in seconds since the Channel was up.
 * @member {Number} uptime
 */
DmrClusterLinkChannelModel.prototype.uptime = undefined;

