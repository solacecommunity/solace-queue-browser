import {ApiClient} from '../ApiClient';

/**
 * The AboutUserMsgVpnCollectionsModel model module.
 * @module model/AboutUserMsgVpnCollectionsModel
 * @version 2.36
 */
export class AboutUserMsgVpnCollectionsModel {
  /**
   * Constructs a new <code>AboutUserMsgVpnCollectionsModel</code>.
   * @alias module:model/AboutUserMsgVpnCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AboutUserMsgVpnCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AboutUserMsgVpnCollectionsModel} obj Optional instance to populate.
   * @return {module:model/AboutUserMsgVpnCollectionsModel} The populated <code>AboutUserMsgVpnCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AboutUserMsgVpnCollectionsModel();
    }
    return obj;
  }
}
