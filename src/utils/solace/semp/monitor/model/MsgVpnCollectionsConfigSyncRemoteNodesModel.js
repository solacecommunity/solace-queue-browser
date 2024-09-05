import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnCollectionsConfigSyncRemoteNodesModel model module.
 * @module model/MsgVpnCollectionsConfigSyncRemoteNodesModel
 * @version 2.36
 */
export class MsgVpnCollectionsConfigSyncRemoteNodesModel {
  /**
   * Constructs a new <code>MsgVpnCollectionsConfigSyncRemoteNodesModel</code>.
   * @alias module:model/MsgVpnCollectionsConfigSyncRemoteNodesModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnCollectionsConfigSyncRemoteNodesModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCollectionsConfigSyncRemoteNodesModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCollectionsConfigSyncRemoteNodesModel} The populated <code>MsgVpnCollectionsConfigSyncRemoteNodesModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCollectionsConfigSyncRemoteNodesModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the configSyncRemoteNodes collection. Deprecated since 2.22. This attribute has been deprecated.
 * @member {Number} count
 */
MsgVpnCollectionsConfigSyncRemoteNodesModel.prototype.count = undefined;

