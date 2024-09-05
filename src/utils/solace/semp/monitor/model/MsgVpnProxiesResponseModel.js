import {ApiClient} from '../ApiClient';
import {MsgVpnProxyCollectionsModel} from './MsgVpnProxyCollectionsModel';
import {MsgVpnProxyLinksModel} from './MsgVpnProxyLinksModel';
import {MsgVpnProxyModel} from './MsgVpnProxyModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnProxiesResponseModel model module.
 * @module model/MsgVpnProxiesResponseModel
 * @version 2.36
 */
export class MsgVpnProxiesResponseModel {
  /**
   * Constructs a new <code>MsgVpnProxiesResponseModel</code>.
   * @alias module:model/MsgVpnProxiesResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnProxiesResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnProxiesResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnProxiesResponseModel} The populated <code>MsgVpnProxiesResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnProxiesResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnProxyCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnProxyModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnProxyLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnProxyCollectionsModel>} collections
 */
MsgVpnProxiesResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnProxyModel>} data
 */
MsgVpnProxiesResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnProxyLinksModel>} links
 */
MsgVpnProxiesResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnProxiesResponseModel.prototype.meta = undefined;

