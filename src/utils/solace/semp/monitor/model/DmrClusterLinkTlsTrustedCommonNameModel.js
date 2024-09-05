import {ApiClient} from '../ApiClient';

/**
 * The DmrClusterLinkTlsTrustedCommonNameModel model module.
 * @module model/DmrClusterLinkTlsTrustedCommonNameModel
 * @version 2.36
 */
export class DmrClusterLinkTlsTrustedCommonNameModel {
  /**
   * Constructs a new <code>DmrClusterLinkTlsTrustedCommonNameModel</code>.
   * @alias module:model/DmrClusterLinkTlsTrustedCommonNameModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DmrClusterLinkTlsTrustedCommonNameModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterLinkTlsTrustedCommonNameModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterLinkTlsTrustedCommonNameModel} The populated <code>DmrClusterLinkTlsTrustedCommonNameModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterLinkTlsTrustedCommonNameModel();
      if (data.hasOwnProperty('dmrClusterName'))
        obj.dmrClusterName = ApiClient.convertToType(data['dmrClusterName'], 'String');
      if (data.hasOwnProperty('remoteNodeName'))
        obj.remoteNodeName = ApiClient.convertToType(data['remoteNodeName'], 'String');
      if (data.hasOwnProperty('tlsTrustedCommonName'))
        obj.tlsTrustedCommonName = ApiClient.convertToType(data['tlsTrustedCommonName'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the Cluster. Deprecated since 2.18. Common Name validation has been replaced by Server Certificate Name validation.
 * @member {String} dmrClusterName
 */
DmrClusterLinkTlsTrustedCommonNameModel.prototype.dmrClusterName = undefined;

/**
 * The name of the node at the remote end of the Link. Deprecated since 2.18. Common Name validation has been replaced by Server Certificate Name validation.
 * @member {String} remoteNodeName
 */
DmrClusterLinkTlsTrustedCommonNameModel.prototype.remoteNodeName = undefined;

/**
 * The expected trusted common name of the remote certificate. Deprecated since 2.18. Common Name validation has been replaced by Server Certificate Name validation.
 * @member {String} tlsTrustedCommonName
 */
DmrClusterLinkTlsTrustedCommonNameModel.prototype.tlsTrustedCommonName = undefined;

