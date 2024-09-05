import {ApiClient} from '../ApiClient';
import {MsgVpnClientUsernameCollectionsAttributesModel} from './MsgVpnClientUsernameCollectionsAttributesModel';

/**
 * The MsgVpnClientUsernameCollectionsModel model module.
 * @module model/MsgVpnClientUsernameCollectionsModel
 * @version 2.36
 */
export class MsgVpnClientUsernameCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnClientUsernameCollectionsModel</code>.
   * @alias module:model/MsgVpnClientUsernameCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnClientUsernameCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientUsernameCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientUsernameCollectionsModel} The populated <code>MsgVpnClientUsernameCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientUsernameCollectionsModel();
      if (data.hasOwnProperty('attributes'))
        obj.attributes = MsgVpnClientUsernameCollectionsAttributesModel.constructFromObject(data['attributes']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnClientUsernameCollectionsAttributesModel} attributes
 */
MsgVpnClientUsernameCollectionsModel.prototype.attributes = undefined;

