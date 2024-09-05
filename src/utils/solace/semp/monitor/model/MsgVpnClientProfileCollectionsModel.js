import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnClientProfileCollectionsModel model module.
 * @module model/MsgVpnClientProfileCollectionsModel
 * @version 2.36
 */
export class MsgVpnClientProfileCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnClientProfileCollectionsModel</code>.
   * @alias module:model/MsgVpnClientProfileCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnClientProfileCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientProfileCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientProfileCollectionsModel} The populated <code>MsgVpnClientProfileCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientProfileCollectionsModel();
    }
    return obj;
  }
}
