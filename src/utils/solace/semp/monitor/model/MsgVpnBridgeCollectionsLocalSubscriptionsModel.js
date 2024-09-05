import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnBridgeCollectionsLocalSubscriptionsModel model module.
 * @module model/MsgVpnBridgeCollectionsLocalSubscriptionsModel
 * @version 2.36
 */
export class MsgVpnBridgeCollectionsLocalSubscriptionsModel {
  /**
   * Constructs a new <code>MsgVpnBridgeCollectionsLocalSubscriptionsModel</code>.
   * @alias module:model/MsgVpnBridgeCollectionsLocalSubscriptionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnBridgeCollectionsLocalSubscriptionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnBridgeCollectionsLocalSubscriptionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnBridgeCollectionsLocalSubscriptionsModel} The populated <code>MsgVpnBridgeCollectionsLocalSubscriptionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnBridgeCollectionsLocalSubscriptionsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the localSubscriptions collection.
 * @member {Number} count
 */
MsgVpnBridgeCollectionsLocalSubscriptionsModel.prototype.count = undefined;

