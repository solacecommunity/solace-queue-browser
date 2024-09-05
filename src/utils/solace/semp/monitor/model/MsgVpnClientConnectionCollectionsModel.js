import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnClientConnectionCollectionsModel model module.
 * @module model/MsgVpnClientConnectionCollectionsModel
 * @version 2.36
 */
export class MsgVpnClientConnectionCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnClientConnectionCollectionsModel</code>.
   * @alias module:model/MsgVpnClientConnectionCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnClientConnectionCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientConnectionCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientConnectionCollectionsModel} The populated <code>MsgVpnClientConnectionCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientConnectionCollectionsModel();
    }
    return obj;
  }
}
