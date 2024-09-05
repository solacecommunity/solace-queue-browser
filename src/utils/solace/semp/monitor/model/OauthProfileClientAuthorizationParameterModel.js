import {ApiClient} from '../ApiClient';

/**
 * The OauthProfileClientAuthorizationParameterModel model module.
 * @module model/OauthProfileClientAuthorizationParameterModel
 * @version 2.36
 */
export class OauthProfileClientAuthorizationParameterModel {
  /**
   * Constructs a new <code>OauthProfileClientAuthorizationParameterModel</code>.
   * @alias module:model/OauthProfileClientAuthorizationParameterModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OauthProfileClientAuthorizationParameterModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileClientAuthorizationParameterModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileClientAuthorizationParameterModel} The populated <code>OauthProfileClientAuthorizationParameterModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileClientAuthorizationParameterModel();
      if (data.hasOwnProperty('authorizationParameterName'))
        obj.authorizationParameterName = ApiClient.convertToType(data['authorizationParameterName'], 'String');
      if (data.hasOwnProperty('authorizationParameterValue'))
        obj.authorizationParameterValue = ApiClient.convertToType(data['authorizationParameterValue'], 'String');
      if (data.hasOwnProperty('oauthProfileName'))
        obj.oauthProfileName = ApiClient.convertToType(data['oauthProfileName'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the authorization parameter.
 * @member {String} authorizationParameterName
 */
OauthProfileClientAuthorizationParameterModel.prototype.authorizationParameterName = undefined;

/**
 * The authorization parameter value.
 * @member {String} authorizationParameterValue
 */
OauthProfileClientAuthorizationParameterModel.prototype.authorizationParameterValue = undefined;

/**
 * The name of the OAuth profile.
 * @member {String} oauthProfileName
 */
OauthProfileClientAuthorizationParameterModel.prototype.oauthProfileName = undefined;

