import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnProxyCollectionsModel model module.
 * @module model/MsgVpnProxyCollectionsModel
 * @version 2.36
 */
export class MsgVpnProxyCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnProxyCollectionsModel</code>.
   * @alias module:model/MsgVpnProxyCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnProxyCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnProxyCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnProxyCollectionsModel} The populated <code>MsgVpnProxyCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnProxyCollectionsModel();
    }
    return obj;
  }
}
