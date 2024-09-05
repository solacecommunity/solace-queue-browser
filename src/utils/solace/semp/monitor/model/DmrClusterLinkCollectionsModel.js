import {ApiClient} from '../ApiClient';
import {DmrClusterLinkCollectionsAttributesModel} from './DmrClusterLinkCollectionsAttributesModel';
import {DmrClusterLinkCollectionsChannelsModel} from './DmrClusterLinkCollectionsChannelsModel';
import {DmrClusterLinkCollectionsRemoteAddressesModel} from './DmrClusterLinkCollectionsRemoteAddressesModel';
import {DmrClusterLinkCollectionsTlsTrustedCommonNamesModel} from './DmrClusterLinkCollectionsTlsTrustedCommonNamesModel';

/**
 * The DmrClusterLinkCollectionsModel model module.
 * @module model/DmrClusterLinkCollectionsModel
 * @version 2.36
 */
export class DmrClusterLinkCollectionsModel {
  /**
   * Constructs a new <code>DmrClusterLinkCollectionsModel</code>.
   * @alias module:model/DmrClusterLinkCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DmrClusterLinkCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterLinkCollectionsModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterLinkCollectionsModel} The populated <code>DmrClusterLinkCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterLinkCollectionsModel();
      if (data.hasOwnProperty('attributes'))
        obj.attributes = DmrClusterLinkCollectionsAttributesModel.constructFromObject(data['attributes']);
      if (data.hasOwnProperty('channels'))
        obj.channels = DmrClusterLinkCollectionsChannelsModel.constructFromObject(data['channels']);
      if (data.hasOwnProperty('remoteAddresses'))
        obj.remoteAddresses = DmrClusterLinkCollectionsRemoteAddressesModel.constructFromObject(data['remoteAddresses']);
      if (data.hasOwnProperty('tlsTrustedCommonNames'))
        obj.tlsTrustedCommonNames = DmrClusterLinkCollectionsTlsTrustedCommonNamesModel.constructFromObject(data['tlsTrustedCommonNames']);
    }
    return obj;
  }
}

/**
 * @member {module:model/DmrClusterLinkCollectionsAttributesModel} attributes
 */
DmrClusterLinkCollectionsModel.prototype.attributes = undefined;

/**
 * @member {module:model/DmrClusterLinkCollectionsChannelsModel} channels
 */
DmrClusterLinkCollectionsModel.prototype.channels = undefined;

/**
 * @member {module:model/DmrClusterLinkCollectionsRemoteAddressesModel} remoteAddresses
 */
DmrClusterLinkCollectionsModel.prototype.remoteAddresses = undefined;

/**
 * @member {module:model/DmrClusterLinkCollectionsTlsTrustedCommonNamesModel} tlsTrustedCommonNames
 */
DmrClusterLinkCollectionsModel.prototype.tlsTrustedCommonNames = undefined;

