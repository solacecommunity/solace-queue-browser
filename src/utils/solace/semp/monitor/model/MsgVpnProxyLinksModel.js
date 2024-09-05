import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnProxyLinksModel model module.
 * @module model/MsgVpnProxyLinksModel
 * @version 2.36
 */
export class MsgVpnProxyLinksModel {
  /**
   * Constructs a new <code>MsgVpnProxyLinksModel</code>.
   * @alias module:model/MsgVpnProxyLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnProxyLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnProxyLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnProxyLinksModel} The populated <code>MsgVpnProxyLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnProxyLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Proxy object.
 * @member {String} uri
 */
MsgVpnProxyLinksModel.prototype.uri = undefined;

