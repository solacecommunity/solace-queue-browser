import {ApiClient} from '../ApiClient';

/**
 * The DmrClusterLinkLinksModel model module.
 * @module model/DmrClusterLinkLinksModel
 * @version 2.36
 */
export class DmrClusterLinkLinksModel {
  /**
   * Constructs a new <code>DmrClusterLinkLinksModel</code>.
   * @alias module:model/DmrClusterLinkLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DmrClusterLinkLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterLinkLinksModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterLinkLinksModel} The populated <code>DmrClusterLinkLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterLinkLinksModel();
      if (data.hasOwnProperty('attributesUri'))
        obj.attributesUri = ApiClient.convertToType(data['attributesUri'], 'String');
      if (data.hasOwnProperty('channelsUri'))
        obj.channelsUri = ApiClient.convertToType(data['channelsUri'], 'String');
      if (data.hasOwnProperty('remoteAddressesUri'))
        obj.remoteAddressesUri = ApiClient.convertToType(data['remoteAddressesUri'], 'String');
      if (data.hasOwnProperty('tlsTrustedCommonNamesUri'))
        obj.tlsTrustedCommonNamesUri = ApiClient.convertToType(data['tlsTrustedCommonNamesUri'], 'String');
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Link's collection of Link Attribute objects. Available since 2.28.
 * @member {String} attributesUri
 */
DmrClusterLinkLinksModel.prototype.attributesUri = undefined;

/**
 * The URI of this Link's collection of Cluster Link Channels objects.
 * @member {String} channelsUri
 */
DmrClusterLinkLinksModel.prototype.channelsUri = undefined;

/**
 * The URI of this Link's collection of Remote Address objects.
 * @member {String} remoteAddressesUri
 */
DmrClusterLinkLinksModel.prototype.remoteAddressesUri = undefined;

/**
 * The URI of this Link's collection of Trusted Common Name objects. Deprecated since 2.18. Common Name validation has been replaced by Server Certificate Name validation.
 * @member {String} tlsTrustedCommonNamesUri
 */
DmrClusterLinkLinksModel.prototype.tlsTrustedCommonNamesUri = undefined;

/**
 * The URI of this Link object.
 * @member {String} uri
 */
DmrClusterLinkLinksModel.prototype.uri = undefined;

