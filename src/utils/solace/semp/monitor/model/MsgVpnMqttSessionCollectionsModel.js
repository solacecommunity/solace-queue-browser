import {ApiClient} from '../ApiClient';
import {MsgVpnMqttSessionCollectionsSubscriptionsModel} from './MsgVpnMqttSessionCollectionsSubscriptionsModel';

/**
 * The MsgVpnMqttSessionCollectionsModel model module.
 * @module model/MsgVpnMqttSessionCollectionsModel
 * @version 2.36
 */
export class MsgVpnMqttSessionCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnMqttSessionCollectionsModel</code>.
   * @alias module:model/MsgVpnMqttSessionCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnMqttSessionCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnMqttSessionCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnMqttSessionCollectionsModel} The populated <code>MsgVpnMqttSessionCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnMqttSessionCollectionsModel();
      if (data.hasOwnProperty('subscriptions'))
        obj.subscriptions = MsgVpnMqttSessionCollectionsSubscriptionsModel.constructFromObject(data['subscriptions']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnMqttSessionCollectionsSubscriptionsModel} subscriptions
 */
MsgVpnMqttSessionCollectionsModel.prototype.subscriptions = undefined;

