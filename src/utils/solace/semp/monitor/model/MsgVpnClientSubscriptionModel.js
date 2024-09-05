import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnClientSubscriptionModel model module.
 * @module model/MsgVpnClientSubscriptionModel
 * @version 2.36
 */
export class MsgVpnClientSubscriptionModel {
  /**
   * Constructs a new <code>MsgVpnClientSubscriptionModel</code>.
   * @alias module:model/MsgVpnClientSubscriptionModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnClientSubscriptionModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientSubscriptionModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientSubscriptionModel} The populated <code>MsgVpnClientSubscriptionModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientSubscriptionModel();
      if (data.hasOwnProperty('clientName'))
        obj.clientName = ApiClient.convertToType(data['clientName'], 'String');
      if (data.hasOwnProperty('dtoPriority'))
        obj.dtoPriority = ApiClient.convertToType(data['dtoPriority'], 'String');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('subscriptionTopic'))
        obj.subscriptionTopic = ApiClient.convertToType(data['subscriptionTopic'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the Client.
 * @member {String} clientName
 */
MsgVpnClientSubscriptionModel.prototype.clientName = undefined;

/**
 * The priority of the Subscription topic for receiving deliver-to-one (DTO) messages. The allowed values and their meaning are:  <pre> \"p1\" - The 1st or highest priority. \"p2\" - The 2nd highest priority. \"p3\" - The 3rd highest priority. \"p4\" - The 4th highest priority. \"da\" - Ignore priority and deliver always. </pre> 
 * @member {String} dtoPriority
 */
MsgVpnClientSubscriptionModel.prototype.dtoPriority = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnClientSubscriptionModel.prototype.msgVpnName = undefined;

/**
 * The topic of the Subscription.
 * @member {String} subscriptionTopic
 */
MsgVpnClientSubscriptionModel.prototype.subscriptionTopic = undefined;

