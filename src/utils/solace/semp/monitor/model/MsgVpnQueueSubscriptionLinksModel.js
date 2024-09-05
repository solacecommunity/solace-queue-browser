import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnQueueSubscriptionLinksModel model module.
 * @module model/MsgVpnQueueSubscriptionLinksModel
 * @version 2.36
 */
export class MsgVpnQueueSubscriptionLinksModel {
  /**
   * Constructs a new <code>MsgVpnQueueSubscriptionLinksModel</code>.
   * @alias module:model/MsgVpnQueueSubscriptionLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnQueueSubscriptionLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnQueueSubscriptionLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnQueueSubscriptionLinksModel} The populated <code>MsgVpnQueueSubscriptionLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnQueueSubscriptionLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Queue Subscription object.
 * @member {String} uri
 */
MsgVpnQueueSubscriptionLinksModel.prototype.uri = undefined;

