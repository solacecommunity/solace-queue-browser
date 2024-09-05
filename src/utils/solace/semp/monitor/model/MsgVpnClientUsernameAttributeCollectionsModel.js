import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnClientUsernameAttributeCollectionsModel model module.
 * @module model/MsgVpnClientUsernameAttributeCollectionsModel
 * @version 2.36
 */
export class MsgVpnClientUsernameAttributeCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnClientUsernameAttributeCollectionsModel</code>.
   * @alias module:model/MsgVpnClientUsernameAttributeCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnClientUsernameAttributeCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientUsernameAttributeCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientUsernameAttributeCollectionsModel} The populated <code>MsgVpnClientUsernameAttributeCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientUsernameAttributeCollectionsModel();
    }
    return obj;
  }
}
