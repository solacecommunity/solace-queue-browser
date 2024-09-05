import {ApiClient} from '../ApiClient';
import {MsgVpnConfigSyncRemoteNodeCollectionsModel} from './MsgVpnConfigSyncRemoteNodeCollectionsModel';
import {MsgVpnConfigSyncRemoteNodeLinksModel} from './MsgVpnConfigSyncRemoteNodeLinksModel';
import {MsgVpnConfigSyncRemoteNodeModel} from './MsgVpnConfigSyncRemoteNodeModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnConfigSyncRemoteNodeResponseModel model module.
 * @module model/MsgVpnConfigSyncRemoteNodeResponseModel
 * @version 2.36
 */
export class MsgVpnConfigSyncRemoteNodeResponseModel {
  /**
   * Constructs a new <code>MsgVpnConfigSyncRemoteNodeResponseModel</code>.
   * @alias module:model/MsgVpnConfigSyncRemoteNodeResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnConfigSyncRemoteNodeResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnConfigSyncRemoteNodeResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnConfigSyncRemoteNodeResponseModel} The populated <code>MsgVpnConfigSyncRemoteNodeResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnConfigSyncRemoteNodeResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnConfigSyncRemoteNodeCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnConfigSyncRemoteNodeModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnConfigSyncRemoteNodeLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnConfigSyncRemoteNodeCollectionsModel} collections
 */
MsgVpnConfigSyncRemoteNodeResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnConfigSyncRemoteNodeModel} data
 */
MsgVpnConfigSyncRemoteNodeResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnConfigSyncRemoteNodeLinksModel} links
 */
MsgVpnConfigSyncRemoteNodeResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnConfigSyncRemoteNodeResponseModel.prototype.meta = undefined;

