import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnMqttSessionCollectionsSubscriptionsModel model module.
 * @module model/MsgVpnMqttSessionCollectionsSubscriptionsModel
 * @version 2.36
 */
export class MsgVpnMqttSessionCollectionsSubscriptionsModel {
  /**
   * Constructs a new <code>MsgVpnMqttSessionCollectionsSubscriptionsModel</code>.
   * @alias module:model/MsgVpnMqttSessionCollectionsSubscriptionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnMqttSessionCollectionsSubscriptionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnMqttSessionCollectionsSubscriptionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnMqttSessionCollectionsSubscriptionsModel} The populated <code>MsgVpnMqttSessionCollectionsSubscriptionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnMqttSessionCollectionsSubscriptionsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the subscriptions collection.
 * @member {Number} count
 */
MsgVpnMqttSessionCollectionsSubscriptionsModel.prototype.count = undefined;

