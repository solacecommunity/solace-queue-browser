import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnBridgeTlsTrustedCommonNameLinksModel model module.
 * @module model/MsgVpnBridgeTlsTrustedCommonNameLinksModel
 * @version 2.36
 */
export class MsgVpnBridgeTlsTrustedCommonNameLinksModel {
  /**
   * Constructs a new <code>MsgVpnBridgeTlsTrustedCommonNameLinksModel</code>.
   * @alias module:model/MsgVpnBridgeTlsTrustedCommonNameLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnBridgeTlsTrustedCommonNameLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnBridgeTlsTrustedCommonNameLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnBridgeTlsTrustedCommonNameLinksModel} The populated <code>MsgVpnBridgeTlsTrustedCommonNameLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnBridgeTlsTrustedCommonNameLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Trusted Common Name object.
 * @member {String} uri
 */
MsgVpnBridgeTlsTrustedCommonNameLinksModel.prototype.uri = undefined;

