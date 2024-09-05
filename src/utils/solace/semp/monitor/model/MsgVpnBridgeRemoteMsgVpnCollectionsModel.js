import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnBridgeRemoteMsgVpnCollectionsModel model module.
 * @module model/MsgVpnBridgeRemoteMsgVpnCollectionsModel
 * @version 2.36
 */
export class MsgVpnBridgeRemoteMsgVpnCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnBridgeRemoteMsgVpnCollectionsModel</code>.
   * @alias module:model/MsgVpnBridgeRemoteMsgVpnCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnBridgeRemoteMsgVpnCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnBridgeRemoteMsgVpnCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnBridgeRemoteMsgVpnCollectionsModel} The populated <code>MsgVpnBridgeRemoteMsgVpnCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnBridgeRemoteMsgVpnCollectionsModel();
    }
    return obj;
  }
}
