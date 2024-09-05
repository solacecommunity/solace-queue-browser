import {ApiClient} from '../ApiClient';

/**
 * The OauthProfileClientAllowedHostModel model module.
 * @module model/OauthProfileClientAllowedHostModel
 * @version 2.36
 */
export class OauthProfileClientAllowedHostModel {
  /**
   * Constructs a new <code>OauthProfileClientAllowedHostModel</code>.
   * @alias module:model/OauthProfileClientAllowedHostModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OauthProfileClientAllowedHostModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileClientAllowedHostModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileClientAllowedHostModel} The populated <code>OauthProfileClientAllowedHostModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileClientAllowedHostModel();
      if (data.hasOwnProperty('allowedHost'))
        obj.allowedHost = ApiClient.convertToType(data['allowedHost'], 'String');
      if (data.hasOwnProperty('oauthProfileName'))
        obj.oauthProfileName = ApiClient.convertToType(data['oauthProfileName'], 'String');
    }
    return obj;
  }
}

/**
 * An allowed value for the Host header.
 * @member {String} allowedHost
 */
OauthProfileClientAllowedHostModel.prototype.allowedHost = undefined;

/**
 * The name of the OAuth profile.
 * @member {String} oauthProfileName
 */
OauthProfileClientAllowedHostModel.prototype.oauthProfileName = undefined;

