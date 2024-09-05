import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnMqttRetainCacheCollectionsModel model module.
 * @module model/MsgVpnMqttRetainCacheCollectionsModel
 * @version 2.36
 */
export class MsgVpnMqttRetainCacheCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnMqttRetainCacheCollectionsModel</code>.
   * @alias module:model/MsgVpnMqttRetainCacheCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnMqttRetainCacheCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnMqttRetainCacheCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnMqttRetainCacheCollectionsModel} The populated <code>MsgVpnMqttRetainCacheCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnMqttRetainCacheCollectionsModel();
    }
    return obj;
  }
}
