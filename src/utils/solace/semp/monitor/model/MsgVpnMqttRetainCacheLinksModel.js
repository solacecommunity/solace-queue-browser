import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnMqttRetainCacheLinksModel model module.
 * @module model/MsgVpnMqttRetainCacheLinksModel
 * @version 2.36
 */
export class MsgVpnMqttRetainCacheLinksModel {
  /**
   * Constructs a new <code>MsgVpnMqttRetainCacheLinksModel</code>.
   * @alias module:model/MsgVpnMqttRetainCacheLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnMqttRetainCacheLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnMqttRetainCacheLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnMqttRetainCacheLinksModel} The populated <code>MsgVpnMqttRetainCacheLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnMqttRetainCacheLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this MQTT Retain Cache object.
 * @member {String} uri
 */
MsgVpnMqttRetainCacheLinksModel.prototype.uri = undefined;

