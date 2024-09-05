import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnConfigSyncRemoteNodeLinksModel model module.
 * @module model/MsgVpnConfigSyncRemoteNodeLinksModel
 * @version 2.36
 */
export class MsgVpnConfigSyncRemoteNodeLinksModel {
  /**
   * Constructs a new <code>MsgVpnConfigSyncRemoteNodeLinksModel</code>.
   * @alias module:model/MsgVpnConfigSyncRemoteNodeLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnConfigSyncRemoteNodeLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnConfigSyncRemoteNodeLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnConfigSyncRemoteNodeLinksModel} The populated <code>MsgVpnConfigSyncRemoteNodeLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnConfigSyncRemoteNodeLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Config Sync Remote Node object.
 * @member {String} uri
 */
MsgVpnConfigSyncRemoteNodeLinksModel.prototype.uri = undefined;

