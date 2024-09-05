import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnDmrBridgeLinksModel model module.
 * @module model/MsgVpnDmrBridgeLinksModel
 * @version 2.36
 */
export class MsgVpnDmrBridgeLinksModel {
  /**
   * Constructs a new <code>MsgVpnDmrBridgeLinksModel</code>.
   * @alias module:model/MsgVpnDmrBridgeLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnDmrBridgeLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDmrBridgeLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDmrBridgeLinksModel} The populated <code>MsgVpnDmrBridgeLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDmrBridgeLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this DMR Bridge object.
 * @member {String} uri
 */
MsgVpnDmrBridgeLinksModel.prototype.uri = undefined;

