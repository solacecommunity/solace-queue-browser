import {ApiClient} from '../ApiClient';

/**
 * The BrokerCollectionsOauthProfilesModel model module.
 * @module model/BrokerCollectionsOauthProfilesModel
 * @version 2.36
 */
export class BrokerCollectionsOauthProfilesModel {
  /**
   * Constructs a new <code>BrokerCollectionsOauthProfilesModel</code>.
   * @alias module:model/BrokerCollectionsOauthProfilesModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BrokerCollectionsOauthProfilesModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BrokerCollectionsOauthProfilesModel} obj Optional instance to populate.
   * @return {module:model/BrokerCollectionsOauthProfilesModel} The populated <code>BrokerCollectionsOauthProfilesModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BrokerCollectionsOauthProfilesModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the oauthProfiles collection. Available since 2.24.
 * @member {Number} count
 */
BrokerCollectionsOauthProfilesModel.prototype.count = undefined;

