import {ApiClient} from '../ApiClient';

/**
 * The OauthProfileClientAuthorizationParameterLinksModel model module.
 * @module model/OauthProfileClientAuthorizationParameterLinksModel
 * @version 2.36
 */
export class OauthProfileClientAuthorizationParameterLinksModel {
  /**
   * Constructs a new <code>OauthProfileClientAuthorizationParameterLinksModel</code>.
   * @alias module:model/OauthProfileClientAuthorizationParameterLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OauthProfileClientAuthorizationParameterLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileClientAuthorizationParameterLinksModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileClientAuthorizationParameterLinksModel} The populated <code>OauthProfileClientAuthorizationParameterLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileClientAuthorizationParameterLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Authorization Parameter object.
 * @member {String} uri
 */
OauthProfileClientAuthorizationParameterLinksModel.prototype.uri = undefined;

