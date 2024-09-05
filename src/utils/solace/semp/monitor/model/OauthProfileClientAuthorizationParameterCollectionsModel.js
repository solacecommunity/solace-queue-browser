import {ApiClient} from '../ApiClient';

/**
 * The OauthProfileClientAuthorizationParameterCollectionsModel model module.
 * @module model/OauthProfileClientAuthorizationParameterCollectionsModel
 * @version 2.36
 */
export class OauthProfileClientAuthorizationParameterCollectionsModel {
  /**
   * Constructs a new <code>OauthProfileClientAuthorizationParameterCollectionsModel</code>.
   * @alias module:model/OauthProfileClientAuthorizationParameterCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OauthProfileClientAuthorizationParameterCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileClientAuthorizationParameterCollectionsModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileClientAuthorizationParameterCollectionsModel} The populated <code>OauthProfileClientAuthorizationParameterCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileClientAuthorizationParameterCollectionsModel();
    }
    return obj;
  }
}
