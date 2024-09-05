import {ApiClient} from '../ApiClient';

/**
 * The DmrClusterLinkChannelCollectionsModel model module.
 * @module model/DmrClusterLinkChannelCollectionsModel
 * @version 2.36
 */
export class DmrClusterLinkChannelCollectionsModel {
  /**
   * Constructs a new <code>DmrClusterLinkChannelCollectionsModel</code>.
   * @alias module:model/DmrClusterLinkChannelCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DmrClusterLinkChannelCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterLinkChannelCollectionsModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterLinkChannelCollectionsModel} The populated <code>DmrClusterLinkChannelCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterLinkChannelCollectionsModel();
    }
    return obj;
  }
}
