import {ApiClient} from '../ApiClient';

/**
 * The OauthProfileCollectionsAccessLevelGroupsModel model module.
 * @module model/OauthProfileCollectionsAccessLevelGroupsModel
 * @version 2.36
 */
export class OauthProfileCollectionsAccessLevelGroupsModel {
  /**
   * Constructs a new <code>OauthProfileCollectionsAccessLevelGroupsModel</code>.
   * @alias module:model/OauthProfileCollectionsAccessLevelGroupsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OauthProfileCollectionsAccessLevelGroupsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileCollectionsAccessLevelGroupsModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileCollectionsAccessLevelGroupsModel} The populated <code>OauthProfileCollectionsAccessLevelGroupsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileCollectionsAccessLevelGroupsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the accessLevelGroups collection.
 * @member {Number} count
 */
OauthProfileCollectionsAccessLevelGroupsModel.prototype.count = undefined;

