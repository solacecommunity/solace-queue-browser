import {ApiClient} from '../ApiClient';

/**
 * The OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionLinksModel model module.
 * @module model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionLinksModel
 * @version 2.36
 */
export class OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionLinksModel {
  /**
   * Constructs a new <code>OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionLinksModel</code>.
   * @alias module:model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionLinksModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionLinksModel} The populated <code>OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Message VPN Access-Level Exception object.
 * @member {String} uri
 */
OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionLinksModel.prototype.uri = undefined;

