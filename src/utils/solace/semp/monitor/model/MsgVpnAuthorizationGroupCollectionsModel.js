import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnAuthorizationGroupCollectionsModel model module.
 * @module model/MsgVpnAuthorizationGroupCollectionsModel
 * @version 2.36
 */
export class MsgVpnAuthorizationGroupCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnAuthorizationGroupCollectionsModel</code>.
   * @alias module:model/MsgVpnAuthorizationGroupCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAuthorizationGroupCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAuthorizationGroupCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAuthorizationGroupCollectionsModel} The populated <code>MsgVpnAuthorizationGroupCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAuthorizationGroupCollectionsModel();
    }
    return obj;
  }
}
