import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnCollectionsAuthorizationGroupsModel model module.
 * @module model/MsgVpnCollectionsAuthorizationGroupsModel
 * @version 2.36
 */
export class MsgVpnCollectionsAuthorizationGroupsModel {
  /**
   * Constructs a new <code>MsgVpnCollectionsAuthorizationGroupsModel</code>.
   * @alias module:model/MsgVpnCollectionsAuthorizationGroupsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnCollectionsAuthorizationGroupsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCollectionsAuthorizationGroupsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCollectionsAuthorizationGroupsModel} The populated <code>MsgVpnCollectionsAuthorizationGroupsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCollectionsAuthorizationGroupsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the authorizationGroups collection.
 * @member {Number} count
 */
MsgVpnCollectionsAuthorizationGroupsModel.prototype.count = undefined;

