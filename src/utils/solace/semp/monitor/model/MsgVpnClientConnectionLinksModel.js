import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnClientConnectionLinksModel model module.
 * @module model/MsgVpnClientConnectionLinksModel
 * @version 2.36
 */
export class MsgVpnClientConnectionLinksModel {
  /**
   * Constructs a new <code>MsgVpnClientConnectionLinksModel</code>.
   * @alias module:model/MsgVpnClientConnectionLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnClientConnectionLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientConnectionLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientConnectionLinksModel} The populated <code>MsgVpnClientConnectionLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientConnectionLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Client Connection object.
 * @member {String} uri
 */
MsgVpnClientConnectionLinksModel.prototype.uri = undefined;

