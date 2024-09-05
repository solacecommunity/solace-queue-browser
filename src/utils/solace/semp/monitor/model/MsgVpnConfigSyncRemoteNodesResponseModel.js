import {ApiClient} from '../ApiClient';
import {MsgVpnConfigSyncRemoteNodeCollectionsModel} from './MsgVpnConfigSyncRemoteNodeCollectionsModel';
import {MsgVpnConfigSyncRemoteNodeLinksModel} from './MsgVpnConfigSyncRemoteNodeLinksModel';
import {MsgVpnConfigSyncRemoteNodeModel} from './MsgVpnConfigSyncRemoteNodeModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnConfigSyncRemoteNodesResponseModel model module.
 * @module model/MsgVpnConfigSyncRemoteNodesResponseModel
 * @version 2.36
 */
export class MsgVpnConfigSyncRemoteNodesResponseModel {
  /**
   * Constructs a new <code>MsgVpnConfigSyncRemoteNodesResponseModel</code>.
   * @alias module:model/MsgVpnConfigSyncRemoteNodesResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnConfigSyncRemoteNodesResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnConfigSyncRemoteNodesResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnConfigSyncRemoteNodesResponseModel} The populated <code>MsgVpnConfigSyncRemoteNodesResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnConfigSyncRemoteNodesResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnConfigSyncRemoteNodeCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnConfigSyncRemoteNodeModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnConfigSyncRemoteNodeLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnConfigSyncRemoteNodeCollectionsModel>} collections
 */
MsgVpnConfigSyncRemoteNodesResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnConfigSyncRemoteNodeModel>} data
 */
MsgVpnConfigSyncRemoteNodesResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnConfigSyncRemoteNodeLinksModel>} links
 */
MsgVpnConfigSyncRemoteNodesResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnConfigSyncRemoteNodesResponseModel.prototype.meta = undefined;

