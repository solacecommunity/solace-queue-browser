import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnClientProfileLinksModel model module.
 * @module model/MsgVpnClientProfileLinksModel
 * @version 2.36
 */
export class MsgVpnClientProfileLinksModel {
  /**
   * Constructs a new <code>MsgVpnClientProfileLinksModel</code>.
   * @alias module:model/MsgVpnClientProfileLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnClientProfileLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientProfileLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientProfileLinksModel} The populated <code>MsgVpnClientProfileLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientProfileLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Client Profile object.
 * @member {String} uri
 */
MsgVpnClientProfileLinksModel.prototype.uri = undefined;

