import {ApiClient} from '../ApiClient';

/**
 * The DmrClusterLinkChannelLinksModel model module.
 * @module model/DmrClusterLinkChannelLinksModel
 * @version 2.36
 */
export class DmrClusterLinkChannelLinksModel {
  /**
   * Constructs a new <code>DmrClusterLinkChannelLinksModel</code>.
   * @alias module:model/DmrClusterLinkChannelLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DmrClusterLinkChannelLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterLinkChannelLinksModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterLinkChannelLinksModel} The populated <code>DmrClusterLinkChannelLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterLinkChannelLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Cluster Link Channels object.
 * @member {String} uri
 */
DmrClusterLinkChannelLinksModel.prototype.uri = undefined;

