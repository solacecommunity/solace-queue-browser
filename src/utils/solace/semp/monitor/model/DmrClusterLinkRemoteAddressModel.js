import {ApiClient} from '../ApiClient';

/**
 * The DmrClusterLinkRemoteAddressModel model module.
 * @module model/DmrClusterLinkRemoteAddressModel
 * @version 2.36
 */
export class DmrClusterLinkRemoteAddressModel {
  /**
   * Constructs a new <code>DmrClusterLinkRemoteAddressModel</code>.
   * @alias module:model/DmrClusterLinkRemoteAddressModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DmrClusterLinkRemoteAddressModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterLinkRemoteAddressModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterLinkRemoteAddressModel} The populated <code>DmrClusterLinkRemoteAddressModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterLinkRemoteAddressModel();
      if (data.hasOwnProperty('dmrClusterName'))
        obj.dmrClusterName = ApiClient.convertToType(data['dmrClusterName'], 'String');
      if (data.hasOwnProperty('remoteAddress'))
        obj.remoteAddress = ApiClient.convertToType(data['remoteAddress'], 'String');
      if (data.hasOwnProperty('remoteNodeName'))
        obj.remoteNodeName = ApiClient.convertToType(data['remoteNodeName'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the Cluster.
 * @member {String} dmrClusterName
 */
DmrClusterLinkRemoteAddressModel.prototype.dmrClusterName = undefined;

/**
 * The FQDN or IP address (and optional port) of the remote node. If a port is not provided, it will vary based on the transport encoding: 55555 (plain-text), 55443 (encrypted), or 55003 (compressed).
 * @member {String} remoteAddress
 */
DmrClusterLinkRemoteAddressModel.prototype.remoteAddress = undefined;

/**
 * The name of the node at the remote end of the Link.
 * @member {String} remoteNodeName
 */
DmrClusterLinkRemoteAddressModel.prototype.remoteNodeName = undefined;

