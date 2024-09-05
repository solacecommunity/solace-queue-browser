import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnDmrBridgeCollectionsModel model module.
 * @module model/MsgVpnDmrBridgeCollectionsModel
 * @version 2.36
 */
export class MsgVpnDmrBridgeCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnDmrBridgeCollectionsModel</code>.
   * @alias module:model/MsgVpnDmrBridgeCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnDmrBridgeCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDmrBridgeCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDmrBridgeCollectionsModel} The populated <code>MsgVpnDmrBridgeCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDmrBridgeCollectionsModel();
    }
    return obj;
  }
}
