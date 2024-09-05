import {ApiClient} from '../ApiClient';

/**
 * The DmrClusterLinkRemoteAddressLinksModel model module.
 * @module model/DmrClusterLinkRemoteAddressLinksModel
 * @version 2.36
 */
export class DmrClusterLinkRemoteAddressLinksModel {
  /**
   * Constructs a new <code>DmrClusterLinkRemoteAddressLinksModel</code>.
   * @alias module:model/DmrClusterLinkRemoteAddressLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DmrClusterLinkRemoteAddressLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterLinkRemoteAddressLinksModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterLinkRemoteAddressLinksModel} The populated <code>DmrClusterLinkRemoteAddressLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterLinkRemoteAddressLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Remote Address object.
 * @member {String} uri
 */
DmrClusterLinkRemoteAddressLinksModel.prototype.uri = undefined;

