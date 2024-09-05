import {ApiClient} from '../ApiClient';
import {MsgVpnProxyCollectionsModel} from './MsgVpnProxyCollectionsModel';
import {MsgVpnProxyLinksModel} from './MsgVpnProxyLinksModel';
import {MsgVpnProxyModel} from './MsgVpnProxyModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnProxyResponseModel model module.
 * @module model/MsgVpnProxyResponseModel
 * @version 2.36
 */
export class MsgVpnProxyResponseModel {
  /**
   * Constructs a new <code>MsgVpnProxyResponseModel</code>.
   * @alias module:model/MsgVpnProxyResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnProxyResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnProxyResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnProxyResponseModel} The populated <code>MsgVpnProxyResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnProxyResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnProxyCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnProxyModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnProxyLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnProxyCollectionsModel} collections
 */
MsgVpnProxyResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnProxyModel} data
 */
MsgVpnProxyResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnProxyLinksModel} links
 */
MsgVpnProxyResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnProxyResponseModel.prototype.meta = undefined;

