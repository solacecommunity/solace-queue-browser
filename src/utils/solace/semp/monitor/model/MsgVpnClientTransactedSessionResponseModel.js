import {ApiClient} from '../ApiClient';
import {MsgVpnClientTransactedSessionCollectionsModel} from './MsgVpnClientTransactedSessionCollectionsModel';
import {MsgVpnClientTransactedSessionLinksModel} from './MsgVpnClientTransactedSessionLinksModel';
import {MsgVpnClientTransactedSessionModel} from './MsgVpnClientTransactedSessionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnClientTransactedSessionResponseModel model module.
 * @module model/MsgVpnClientTransactedSessionResponseModel
 * @version 2.36
 */
export class MsgVpnClientTransactedSessionResponseModel {
  /**
   * Constructs a new <code>MsgVpnClientTransactedSessionResponseModel</code>.
   * @alias module:model/MsgVpnClientTransactedSessionResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnClientTransactedSessionResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientTransactedSessionResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientTransactedSessionResponseModel} The populated <code>MsgVpnClientTransactedSessionResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientTransactedSessionResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnClientTransactedSessionCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnClientTransactedSessionModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnClientTransactedSessionLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnClientTransactedSessionCollectionsModel} collections
 */
MsgVpnClientTransactedSessionResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnClientTransactedSessionModel} data
 */
MsgVpnClientTransactedSessionResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnClientTransactedSessionLinksModel} links
 */
MsgVpnClientTransactedSessionResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnClientTransactedSessionResponseModel.prototype.meta = undefined;

