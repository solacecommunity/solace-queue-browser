import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnClientCollectionsSubscriptionsModel model module.
 * @module model/MsgVpnClientCollectionsSubscriptionsModel
 * @version 2.36
 */
export class MsgVpnClientCollectionsSubscriptionsModel {
  /**
   * Constructs a new <code>MsgVpnClientCollectionsSubscriptionsModel</code>.
   * @alias module:model/MsgVpnClientCollectionsSubscriptionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnClientCollectionsSubscriptionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientCollectionsSubscriptionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientCollectionsSubscriptionsModel} The populated <code>MsgVpnClientCollectionsSubscriptionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientCollectionsSubscriptionsModel();
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
MsgVpnClientCollectionsSubscriptionsModel.prototype.count = undefined;

