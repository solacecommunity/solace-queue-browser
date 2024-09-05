import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnBridgeCollectionsRemoteSubscriptionsModel model module.
 * @module model/MsgVpnBridgeCollectionsRemoteSubscriptionsModel
 * @version 2.36
 */
export class MsgVpnBridgeCollectionsRemoteSubscriptionsModel {
  /**
   * Constructs a new <code>MsgVpnBridgeCollectionsRemoteSubscriptionsModel</code>.
   * @alias module:model/MsgVpnBridgeCollectionsRemoteSubscriptionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnBridgeCollectionsRemoteSubscriptionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnBridgeCollectionsRemoteSubscriptionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnBridgeCollectionsRemoteSubscriptionsModel} The populated <code>MsgVpnBridgeCollectionsRemoteSubscriptionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnBridgeCollectionsRemoteSubscriptionsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the remoteSubscriptions collection.
 * @member {Number} count
 */
MsgVpnBridgeCollectionsRemoteSubscriptionsModel.prototype.count = undefined;

