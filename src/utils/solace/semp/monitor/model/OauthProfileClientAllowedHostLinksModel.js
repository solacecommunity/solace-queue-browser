import {ApiClient} from '../ApiClient';

/**
 * The OauthProfileClientAllowedHostLinksModel model module.
 * @module model/OauthProfileClientAllowedHostLinksModel
 * @version 2.36
 */
export class OauthProfileClientAllowedHostLinksModel {
  /**
   * Constructs a new <code>OauthProfileClientAllowedHostLinksModel</code>.
   * @alias module:model/OauthProfileClientAllowedHostLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OauthProfileClientAllowedHostLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileClientAllowedHostLinksModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileClientAllowedHostLinksModel} The populated <code>OauthProfileClientAllowedHostLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileClientAllowedHostLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Allowed Host Value object.
 * @member {String} uri
 */
OauthProfileClientAllowedHostLinksModel.prototype.uri = undefined;

