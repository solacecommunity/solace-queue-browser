import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnCollectionsMqttRetainCachesModel model module.
 * @module model/MsgVpnCollectionsMqttRetainCachesModel
 * @version 2.36
 */
export class MsgVpnCollectionsMqttRetainCachesModel {
  /**
   * Constructs a new <code>MsgVpnCollectionsMqttRetainCachesModel</code>.
   * @alias module:model/MsgVpnCollectionsMqttRetainCachesModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnCollectionsMqttRetainCachesModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCollectionsMqttRetainCachesModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCollectionsMqttRetainCachesModel} The populated <code>MsgVpnCollectionsMqttRetainCachesModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCollectionsMqttRetainCachesModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the mqttRetainCaches collection.
 * @member {Number} count
 */
MsgVpnCollectionsMqttRetainCachesModel.prototype.count = undefined;

