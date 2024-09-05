import {ApiClient} from '../ApiClient';
import {MsgVpnClientConnectionCollectionsModel} from './MsgVpnClientConnectionCollectionsModel';
import {MsgVpnClientConnectionLinksModel} from './MsgVpnClientConnectionLinksModel';
import {MsgVpnClientConnectionModel} from './MsgVpnClientConnectionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnClientConnectionResponseModel model module.
 * @module model/MsgVpnClientConnectionResponseModel
 * @version 2.36
 */
export class MsgVpnClientConnectionResponseModel {
  /**
   * Constructs a new <code>MsgVpnClientConnectionResponseModel</code>.
   * @alias module:model/MsgVpnClientConnectionResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnClientConnectionResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientConnectionResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientConnectionResponseModel} The populated <code>MsgVpnClientConnectionResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientConnectionResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnClientConnectionCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnClientConnectionModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnClientConnectionLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnClientConnectionCollectionsModel} collections
 */
MsgVpnClientConnectionResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnClientConnectionModel} data
 */
MsgVpnClientConnectionResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnClientConnectionLinksModel} links
 */
MsgVpnClientConnectionResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnClientConnectionResponseModel.prototype.meta = undefined;

