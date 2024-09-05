import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnDistributedCacheLinksModel model module.
 * @module model/MsgVpnDistributedCacheLinksModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheLinksModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheLinksModel</code>.
   * @alias module:model/MsgVpnDistributedCacheLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheLinksModel} The populated <code>MsgVpnDistributedCacheLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheLinksModel();
      if (data.hasOwnProperty('clustersUri'))
        obj.clustersUri = ApiClient.convertToType(data['clustersUri'], 'String');
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Distributed Cache's collection of Cache Cluster objects.
 * @member {String} clustersUri
 */
MsgVpnDistributedCacheLinksModel.prototype.clustersUri = undefined;

/**
 * The URI of this Distributed Cache object.
 * @member {String} uri
 */
MsgVpnDistributedCacheLinksModel.prototype.uri = undefined;

