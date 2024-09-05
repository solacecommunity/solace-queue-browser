import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnConfigSyncRemoteNodeCollectionsModel model module.
 * @module model/MsgVpnConfigSyncRemoteNodeCollectionsModel
 * @version 2.36
 */
export class MsgVpnConfigSyncRemoteNodeCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnConfigSyncRemoteNodeCollectionsModel</code>.
   * @alias module:model/MsgVpnConfigSyncRemoteNodeCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnConfigSyncRemoteNodeCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnConfigSyncRemoteNodeCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnConfigSyncRemoteNodeCollectionsModel} The populated <code>MsgVpnConfigSyncRemoteNodeCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnConfigSyncRemoteNodeCollectionsModel();
    }
    return obj;
  }
}
