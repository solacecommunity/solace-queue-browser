import {ApiClient} from '../ApiClient';

/**
 * The OauthProfileCollectionsClientAuthorizationParametersModel model module.
 * @module model/OauthProfileCollectionsClientAuthorizationParametersModel
 * @version 2.36
 */
export class OauthProfileCollectionsClientAuthorizationParametersModel {
  /**
   * Constructs a new <code>OauthProfileCollectionsClientAuthorizationParametersModel</code>.
   * @alias module:model/OauthProfileCollectionsClientAuthorizationParametersModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OauthProfileCollectionsClientAuthorizationParametersModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileCollectionsClientAuthorizationParametersModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileCollectionsClientAuthorizationParametersModel} The populated <code>OauthProfileCollectionsClientAuthorizationParametersModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileCollectionsClientAuthorizationParametersModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the clientAuthorizationParameters collection.
 * @member {Number} count
 */
OauthProfileCollectionsClientAuthorizationParametersModel.prototype.count = undefined;

