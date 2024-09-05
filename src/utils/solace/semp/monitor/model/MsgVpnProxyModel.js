import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnProxyModel model module.
 * @module model/MsgVpnProxyModel
 * @version 2.36
 */
export class MsgVpnProxyModel {
  /**
   * Constructs a new <code>MsgVpnProxyModel</code>.
   * @alias module:model/MsgVpnProxyModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnProxyModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnProxyModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnProxyModel} The populated <code>MsgVpnProxyModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnProxyModel();
      if (data.hasOwnProperty('authenticationBasicUsername'))
        obj.authenticationBasicUsername = ApiClient.convertToType(data['authenticationBasicUsername'], 'String');
      if (data.hasOwnProperty('authenticationScheme'))
        obj.authenticationScheme = ApiClient.convertToType(data['authenticationScheme'], 'String');
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('host'))
        obj.host = ApiClient.convertToType(data['host'], 'String');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('port'))
        obj.port = ApiClient.convertToType(data['port'], 'Number');
      if (data.hasOwnProperty('proxyName'))
        obj.proxyName = ApiClient.convertToType(data['proxyName'], 'String');
      if (data.hasOwnProperty('proxyType'))
        obj.proxyType = ApiClient.convertToType(data['proxyType'], 'String');
    }
    return obj;
  }
}

/**
 * The username to use with basic authentication.
 * @member {String} authenticationBasicUsername
 */
MsgVpnProxyModel.prototype.authenticationBasicUsername = undefined;

/**
 * Allowed values for the <code>authenticationScheme</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnProxyModel.AuthenticationSchemeEnum = {
  /**
   * value: "none"
   * @const
   */
  none: "none",

  /**
   * value: "basic"
   * @const
   */
  basic: "basic"
};
/**
 * The authentication scheme used to connect to the proxy. The allowed values and their meaning are:  <pre> \"none\" - No authentication. \"basic\" - Username/password authentication. </pre> 
 * @member {module:model/MsgVpnProxyModel.AuthenticationSchemeEnum} authenticationScheme
 */
MsgVpnProxyModel.prototype.authenticationScheme = undefined;

/**
 * Enable or disable the proxy. When disabled, no connections are initiated to this particular Proxy.
 * @member {Boolean} enabled
 */
MsgVpnProxyModel.prototype.enabled = undefined;

/**
 * The IP address or host name of the proxy.
 * @member {String} host
 */
MsgVpnProxyModel.prototype.host = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnProxyModel.prototype.msgVpnName = undefined;

/**
 * The port to connect to on the proxy host.
 * @member {Number} port
 */
MsgVpnProxyModel.prototype.port = undefined;

/**
 * The name of the proxy.
 * @member {String} proxyName
 */
MsgVpnProxyModel.prototype.proxyName = undefined;

/**
 * Allowed values for the <code>proxyType</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnProxyModel.ProxyTypeEnum = {
  /**
   * value: "direct"
   * @const
   */
  direct: "direct",

  /**
   * value: "http"
   * @const
   */
  http: "http"
};
/**
 * The type of proxy. The allowed values and their meaning are:  <pre> \"direct\" - Direct connection (no proxy). \"http\" - HTTP proxy. </pre> 
 * @member {module:model/MsgVpnProxyModel.ProxyTypeEnum} proxyType
 */
MsgVpnProxyModel.prototype.proxyType = undefined;

