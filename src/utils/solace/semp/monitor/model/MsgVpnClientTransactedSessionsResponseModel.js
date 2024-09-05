import {ApiClient} from '../ApiClient';
import {MsgVpnClientTransactedSessionCollectionsModel} from './MsgVpnClientTransactedSessionCollectionsModel';
import {MsgVpnClientTransactedSessionLinksModel} from './MsgVpnClientTransactedSessionLinksModel';
import {MsgVpnClientTransactedSessionModel} from './MsgVpnClientTransactedSessionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnClientTransactedSessionsResponseModel model module.
 * @module model/MsgVpnClientTransactedSessionsResponseModel
 * @version 2.36
 */
export class MsgVpnClientTransactedSessionsResponseModel {
  /**
   * Constructs a new <code>MsgVpnClientTransactedSessionsResponseModel</code>.
   * @alias module:model/MsgVpnClientTransactedSessionsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnClientTransactedSessionsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientTransactedSessionsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientTransactedSessionsResponseModel} The populated <code>MsgVpnClientTransactedSessionsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientTransactedSessionsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnClientTransactedSessionCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnClientTransactedSessionModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnClientTransactedSessionLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnClientTransactedSessionCollectionsModel>} collections
 */
MsgVpnClientTransactedSessionsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnClientTransactedSessionModel>} data
 */
MsgVpnClientTransactedSessionsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnClientTransactedSessionLinksModel>} links
 */
MsgVpnClientTransactedSessionsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnClientTransactedSessionsResponseModel.prototype.meta = undefined;

