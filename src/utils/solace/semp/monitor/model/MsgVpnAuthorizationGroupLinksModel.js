import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnAuthorizationGroupLinksModel model module.
 * @module model/MsgVpnAuthorizationGroupLinksModel
 * @version 2.36
 */
export class MsgVpnAuthorizationGroupLinksModel {
  /**
   * Constructs a new <code>MsgVpnAuthorizationGroupLinksModel</code>.
   * @alias module:model/MsgVpnAuthorizationGroupLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAuthorizationGroupLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAuthorizationGroupLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAuthorizationGroupLinksModel} The populated <code>MsgVpnAuthorizationGroupLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAuthorizationGroupLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Authorization Group object.
 * @member {String} uri
 */
MsgVpnAuthorizationGroupLinksModel.prototype.uri = undefined;

