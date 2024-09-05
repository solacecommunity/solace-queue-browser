import {ApiClient} from '../ApiClient';

/**
 * The VirtualHostnameModel model module.
 * @module model/VirtualHostnameModel
 * @version 2.36
 */
export class VirtualHostnameModel {
  /**
   * Constructs a new <code>VirtualHostnameModel</code>.
   * @alias module:model/VirtualHostnameModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>VirtualHostnameModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VirtualHostnameModel} obj Optional instance to populate.
   * @return {module:model/VirtualHostnameModel} The populated <code>VirtualHostnameModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new VirtualHostnameModel();
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('virtualHostname'))
        obj.virtualHostname = ApiClient.convertToType(data['virtualHostname'], 'String');
    }
    return obj;
  }
}

/**
 * Enable or disable Virtual Hostname to Message VPN mapping.
 * @member {Boolean} enabled
 */
VirtualHostnameModel.prototype.enabled = undefined;

/**
 * The message VPN to which this virtual hostname is mapped.
 * @member {String} msgVpnName
 */
VirtualHostnameModel.prototype.msgVpnName = undefined;

/**
 * The virtual hostname.
 * @member {String} virtualHostname
 */
VirtualHostnameModel.prototype.virtualHostname = undefined;

