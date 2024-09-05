import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnClientSubscriptionLinksModel model module.
 * @module model/MsgVpnClientSubscriptionLinksModel
 * @version 2.36
 */
export class MsgVpnClientSubscriptionLinksModel {
  /**
   * Constructs a new <code>MsgVpnClientSubscriptionLinksModel</code>.
   * @alias module:model/MsgVpnClientSubscriptionLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnClientSubscriptionLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientSubscriptionLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientSubscriptionLinksModel} The populated <code>MsgVpnClientSubscriptionLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientSubscriptionLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Client Subscription object.
 * @member {String} uri
 */
MsgVpnClientSubscriptionLinksModel.prototype.uri = undefined;

