import {ApiClient} from '../ApiClient';

/**
 * The OauthProfileDefaultMsgVpnAccessLevelExceptionCollectionsModel model module.
 * @module model/OauthProfileDefaultMsgVpnAccessLevelExceptionCollectionsModel
 * @version 2.36
 */
export class OauthProfileDefaultMsgVpnAccessLevelExceptionCollectionsModel {
  /**
   * Constructs a new <code>OauthProfileDefaultMsgVpnAccessLevelExceptionCollectionsModel</code>.
   * @alias module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OauthProfileDefaultMsgVpnAccessLevelExceptionCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionCollectionsModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionCollectionsModel} The populated <code>OauthProfileDefaultMsgVpnAccessLevelExceptionCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileDefaultMsgVpnAccessLevelExceptionCollectionsModel();
    }
    return obj;
  }
}
