import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnBridgeLinksModel model module.
 * @module model/MsgVpnBridgeLinksModel
 * @version 2.36
 */
export class MsgVpnBridgeLinksModel {
  /**
   * Constructs a new <code>MsgVpnBridgeLinksModel</code>.
   * @alias module:model/MsgVpnBridgeLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnBridgeLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnBridgeLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnBridgeLinksModel} The populated <code>MsgVpnBridgeLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnBridgeLinksModel();
      if (data.hasOwnProperty('localSubscriptionsUri'))
        obj.localSubscriptionsUri = ApiClient.convertToType(data['localSubscriptionsUri'], 'String');
      if (data.hasOwnProperty('remoteMsgVpnsUri'))
        obj.remoteMsgVpnsUri = ApiClient.convertToType(data['remoteMsgVpnsUri'], 'String');
      if (data.hasOwnProperty('remoteSubscriptionsUri'))
        obj.remoteSubscriptionsUri = ApiClient.convertToType(data['remoteSubscriptionsUri'], 'String');
      if (data.hasOwnProperty('tlsTrustedCommonNamesUri'))
        obj.tlsTrustedCommonNamesUri = ApiClient.convertToType(data['tlsTrustedCommonNamesUri'], 'String');
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Bridge's collection of Bridge Local Subscriptions objects.
 * @member {String} localSubscriptionsUri
 */
MsgVpnBridgeLinksModel.prototype.localSubscriptionsUri = undefined;

/**
 * The URI of this Bridge's collection of Remote Message VPN objects.
 * @member {String} remoteMsgVpnsUri
 */
MsgVpnBridgeLinksModel.prototype.remoteMsgVpnsUri = undefined;

/**
 * The URI of this Bridge's collection of Remote Subscription objects.
 * @member {String} remoteSubscriptionsUri
 */
MsgVpnBridgeLinksModel.prototype.remoteSubscriptionsUri = undefined;

/**
 * The URI of this Bridge's collection of Trusted Common Name objects. Deprecated since 2.18. Common Name validation has been replaced by Server Certificate Name validation.
 * @member {String} tlsTrustedCommonNamesUri
 */
MsgVpnBridgeLinksModel.prototype.tlsTrustedCommonNamesUri = undefined;

/**
 * The URI of this Bridge object.
 * @member {String} uri
 */
MsgVpnBridgeLinksModel.prototype.uri = undefined;

