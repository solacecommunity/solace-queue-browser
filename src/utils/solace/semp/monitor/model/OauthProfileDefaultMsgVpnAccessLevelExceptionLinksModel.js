import {ApiClient} from '../ApiClient';

/**
 * The OauthProfileDefaultMsgVpnAccessLevelExceptionLinksModel model module.
 * @module model/OauthProfileDefaultMsgVpnAccessLevelExceptionLinksModel
 * @version 2.36
 */
export class OauthProfileDefaultMsgVpnAccessLevelExceptionLinksModel {
  /**
   * Constructs a new <code>OauthProfileDefaultMsgVpnAccessLevelExceptionLinksModel</code>.
   * @alias module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OauthProfileDefaultMsgVpnAccessLevelExceptionLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionLinksModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionLinksModel} The populated <code>OauthProfileDefaultMsgVpnAccessLevelExceptionLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileDefaultMsgVpnAccessLevelExceptionLinksModel();
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
OauthProfileDefaultMsgVpnAccessLevelExceptionLinksModel.prototype.uri = undefined;

