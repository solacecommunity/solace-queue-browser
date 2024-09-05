import {ApiClient} from '../ApiClient';

/**
 * The OauthProfileClientAllowedHostCollectionsModel model module.
 * @module model/OauthProfileClientAllowedHostCollectionsModel
 * @version 2.36
 */
export class OauthProfileClientAllowedHostCollectionsModel {
  /**
   * Constructs a new <code>OauthProfileClientAllowedHostCollectionsModel</code>.
   * @alias module:model/OauthProfileClientAllowedHostCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OauthProfileClientAllowedHostCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileClientAllowedHostCollectionsModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileClientAllowedHostCollectionsModel} The populated <code>OauthProfileClientAllowedHostCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileClientAllowedHostCollectionsModel();
    }
    return obj;
  }
}
