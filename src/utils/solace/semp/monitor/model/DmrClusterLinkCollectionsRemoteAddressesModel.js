import {ApiClient} from '../ApiClient';

/**
 * The DmrClusterLinkCollectionsRemoteAddressesModel model module.
 * @module model/DmrClusterLinkCollectionsRemoteAddressesModel
 * @version 2.36
 */
export class DmrClusterLinkCollectionsRemoteAddressesModel {
  /**
   * Constructs a new <code>DmrClusterLinkCollectionsRemoteAddressesModel</code>.
   * @alias module:model/DmrClusterLinkCollectionsRemoteAddressesModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DmrClusterLinkCollectionsRemoteAddressesModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterLinkCollectionsRemoteAddressesModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterLinkCollectionsRemoteAddressesModel} The populated <code>DmrClusterLinkCollectionsRemoteAddressesModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterLinkCollectionsRemoteAddressesModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the remoteAddresses collection.
 * @member {Number} count
 */
DmrClusterLinkCollectionsRemoteAddressesModel.prototype.count = undefined;

