import {ApiClient} from '../ApiClient';

/**
 * The OauthProfileAccessLevelGroupLinksModel model module.
 * @module model/OauthProfileAccessLevelGroupLinksModel
 * @version 2.36
 */
export class OauthProfileAccessLevelGroupLinksModel {
  /**
   * Constructs a new <code>OauthProfileAccessLevelGroupLinksModel</code>.
   * @alias module:model/OauthProfileAccessLevelGroupLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OauthProfileAccessLevelGroupLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileAccessLevelGroupLinksModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileAccessLevelGroupLinksModel} The populated <code>OauthProfileAccessLevelGroupLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileAccessLevelGroupLinksModel();
      if (data.hasOwnProperty('msgVpnAccessLevelExceptionsUri'))
        obj.msgVpnAccessLevelExceptionsUri = ApiClient.convertToType(data['msgVpnAccessLevelExceptionsUri'], 'String');
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Group Access Level's collection of Message VPN Access-Level Exception objects.
 * @member {String} msgVpnAccessLevelExceptionsUri
 */
OauthProfileAccessLevelGroupLinksModel.prototype.msgVpnAccessLevelExceptionsUri = undefined;

/**
 * The URI of this Group Access Level object.
 * @member {String} uri
 */
OauthProfileAccessLevelGroupLinksModel.prototype.uri = undefined;

