import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnCollectionsClientUsernamesModel model module.
 * @module model/MsgVpnCollectionsClientUsernamesModel
 * @version 2.36
 */
export class MsgVpnCollectionsClientUsernamesModel {
  /**
   * Constructs a new <code>MsgVpnCollectionsClientUsernamesModel</code>.
   * @alias module:model/MsgVpnCollectionsClientUsernamesModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnCollectionsClientUsernamesModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCollectionsClientUsernamesModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCollectionsClientUsernamesModel} The populated <code>MsgVpnCollectionsClientUsernamesModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCollectionsClientUsernamesModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the clientUsernames collection.
 * @member {Number} count
 */
MsgVpnCollectionsClientUsernamesModel.prototype.count = undefined;

