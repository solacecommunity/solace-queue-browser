import {ApiClient} from '../ApiClient';
import {MsgVpnClientConnectionCollectionsModel} from './MsgVpnClientConnectionCollectionsModel';
import {MsgVpnClientConnectionLinksModel} from './MsgVpnClientConnectionLinksModel';
import {MsgVpnClientConnectionModel} from './MsgVpnClientConnectionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnClientConnectionsResponseModel model module.
 * @module model/MsgVpnClientConnectionsResponseModel
 * @version 2.36
 */
export class MsgVpnClientConnectionsResponseModel {
  /**
   * Constructs a new <code>MsgVpnClientConnectionsResponseModel</code>.
   * @alias module:model/MsgVpnClientConnectionsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnClientConnectionsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientConnectionsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientConnectionsResponseModel} The populated <code>MsgVpnClientConnectionsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientConnectionsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnClientConnectionCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnClientConnectionModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnClientConnectionLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnClientConnectionCollectionsModel>} collections
 */
MsgVpnClientConnectionsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnClientConnectionModel>} data
 */
MsgVpnClientConnectionsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnClientConnectionLinksModel>} links
 */
MsgVpnClientConnectionsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnClientConnectionsResponseModel.prototype.meta = undefined;

