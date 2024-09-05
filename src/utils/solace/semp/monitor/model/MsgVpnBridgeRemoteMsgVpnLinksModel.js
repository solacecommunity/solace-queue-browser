import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnBridgeRemoteMsgVpnLinksModel model module.
 * @module model/MsgVpnBridgeRemoteMsgVpnLinksModel
 * @version 2.36
 */
export class MsgVpnBridgeRemoteMsgVpnLinksModel {
  /**
   * Constructs a new <code>MsgVpnBridgeRemoteMsgVpnLinksModel</code>.
   * @alias module:model/MsgVpnBridgeRemoteMsgVpnLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnBridgeRemoteMsgVpnLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnBridgeRemoteMsgVpnLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnBridgeRemoteMsgVpnLinksModel} The populated <code>MsgVpnBridgeRemoteMsgVpnLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnBridgeRemoteMsgVpnLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Remote Message VPN object.
 * @member {String} uri
 */
MsgVpnBridgeRemoteMsgVpnLinksModel.prototype.uri = undefined;

