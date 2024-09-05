import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnClientTransactedSessionLinksModel model module.
 * @module model/MsgVpnClientTransactedSessionLinksModel
 * @version 2.36
 */
export class MsgVpnClientTransactedSessionLinksModel {
  /**
   * Constructs a new <code>MsgVpnClientTransactedSessionLinksModel</code>.
   * @alias module:model/MsgVpnClientTransactedSessionLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnClientTransactedSessionLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientTransactedSessionLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientTransactedSessionLinksModel} The populated <code>MsgVpnClientTransactedSessionLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientTransactedSessionLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Client Transacted Session object.
 * @member {String} uri
 */
MsgVpnClientTransactedSessionLinksModel.prototype.uri = undefined;

