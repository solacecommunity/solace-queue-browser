import {ApiClient} from '../ApiClient';

/**
 * The DmrClusterLinkRemoteAddressCollectionsModel model module.
 * @module model/DmrClusterLinkRemoteAddressCollectionsModel
 * @version 2.36
 */
export class DmrClusterLinkRemoteAddressCollectionsModel {
  /**
   * Constructs a new <code>DmrClusterLinkRemoteAddressCollectionsModel</code>.
   * @alias module:model/DmrClusterLinkRemoteAddressCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DmrClusterLinkRemoteAddressCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterLinkRemoteAddressCollectionsModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterLinkRemoteAddressCollectionsModel} The populated <code>DmrClusterLinkRemoteAddressCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterLinkRemoteAddressCollectionsModel();
    }
    return obj;
  }
}
