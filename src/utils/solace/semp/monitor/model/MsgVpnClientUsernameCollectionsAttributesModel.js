import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnClientUsernameCollectionsAttributesModel model module.
 * @module model/MsgVpnClientUsernameCollectionsAttributesModel
 * @version 2.36
 */
export class MsgVpnClientUsernameCollectionsAttributesModel {
  /**
   * Constructs a new <code>MsgVpnClientUsernameCollectionsAttributesModel</code>.
   * @alias module:model/MsgVpnClientUsernameCollectionsAttributesModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnClientUsernameCollectionsAttributesModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientUsernameCollectionsAttributesModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientUsernameCollectionsAttributesModel} The populated <code>MsgVpnClientUsernameCollectionsAttributesModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientUsernameCollectionsAttributesModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the attributes collection. Available since 2.27.
 * @member {Number} count
 */
MsgVpnClientUsernameCollectionsAttributesModel.prototype.count = undefined;

