import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnCollectionsMqttSessionsModel model module.
 * @module model/MsgVpnCollectionsMqttSessionsModel
 * @version 2.36
 */
export class MsgVpnCollectionsMqttSessionsModel {
  /**
   * Constructs a new <code>MsgVpnCollectionsMqttSessionsModel</code>.
   * @alias module:model/MsgVpnCollectionsMqttSessionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnCollectionsMqttSessionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCollectionsMqttSessionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCollectionsMqttSessionsModel} The populated <code>MsgVpnCollectionsMqttSessionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCollectionsMqttSessionsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the mqttSessions collection.
 * @member {Number} count
 */
MsgVpnCollectionsMqttSessionsModel.prototype.count = undefined;

