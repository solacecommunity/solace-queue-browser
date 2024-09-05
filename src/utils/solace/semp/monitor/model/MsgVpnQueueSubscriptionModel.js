import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnQueueSubscriptionModel model module.
 * @module model/MsgVpnQueueSubscriptionModel
 * @version 2.36
 */
export class MsgVpnQueueSubscriptionModel {
  /**
   * Constructs a new <code>MsgVpnQueueSubscriptionModel</code>.
   * @alias module:model/MsgVpnQueueSubscriptionModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnQueueSubscriptionModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnQueueSubscriptionModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnQueueSubscriptionModel} The populated <code>MsgVpnQueueSubscriptionModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnQueueSubscriptionModel();
      if (data.hasOwnProperty('createdByManagement'))
        obj.createdByManagement = ApiClient.convertToType(data['createdByManagement'], 'Boolean');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('queueName'))
        obj.queueName = ApiClient.convertToType(data['queueName'], 'String');
      if (data.hasOwnProperty('subscriptionTopic'))
        obj.subscriptionTopic = ApiClient.convertToType(data['subscriptionTopic'], 'String');
    }
    return obj;
  }
}

/**
 * Indicates whether the Subscription topic was created by a management API (CLI or SEMP).
 * @member {Boolean} createdByManagement
 */
MsgVpnQueueSubscriptionModel.prototype.createdByManagement = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnQueueSubscriptionModel.prototype.msgVpnName = undefined;

/**
 * The name of the Queue.
 * @member {String} queueName
 */
MsgVpnQueueSubscriptionModel.prototype.queueName = undefined;

/**
 * The topic of the Subscription.
 * @member {String} subscriptionTopic
 */
MsgVpnQueueSubscriptionModel.prototype.subscriptionTopic = undefined;

