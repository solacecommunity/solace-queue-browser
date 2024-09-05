import {ApiClient} from '../ApiClient';

/**
 * The OauthProfileCollectionsClientAllowedHostsModel model module.
 * @module model/OauthProfileCollectionsClientAllowedHostsModel
 * @version 2.36
 */
export class OauthProfileCollectionsClientAllowedHostsModel {
  /**
   * Constructs a new <code>OauthProfileCollectionsClientAllowedHostsModel</code>.
   * @alias module:model/OauthProfileCollectionsClientAllowedHostsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OauthProfileCollectionsClientAllowedHostsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileCollectionsClientAllowedHostsModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileCollectionsClientAllowedHostsModel} The populated <code>OauthProfileCollectionsClientAllowedHostsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileCollectionsClientAllowedHostsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the clientAllowedHosts collection.
 * @member {Number} count
 */
OauthProfileCollectionsClientAllowedHostsModel.prototype.count = undefined;

