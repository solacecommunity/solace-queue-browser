import {ApiClient} from '../ApiClient';
import {MsgVpnBridgeRemoteSubscriptionCollectionsModel} from './MsgVpnBridgeRemoteSubscriptionCollectionsModel';
import {MsgVpnBridgeRemoteSubscriptionLinksModel} from './MsgVpnBridgeRemoteSubscriptionLinksModel';
import {MsgVpnBridgeRemoteSubscriptionModel} from './MsgVpnBridgeRemoteSubscriptionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnBridgeRemoteSubscriptionsResponseModel model module.
 * @module model/MsgVpnBridgeRemoteSubscriptionsResponseModel
 * @version 2.36
 */
export class MsgVpnBridgeRemoteSubscriptionsResponseModel {
  /**
   * Constructs a new <code>MsgVpnBridgeRemoteSubscriptionsResponseModel</code>.
   * @alias module:model/MsgVpnBridgeRemoteSubscriptionsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnBridgeRemoteSubscriptionsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnBridgeRemoteSubscriptionsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnBridgeRemoteSubscriptionsResponseModel} The populated <code>MsgVpnBridgeRemoteSubscriptionsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnBridgeRemoteSubscriptionsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnBridgeRemoteSubscriptionCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnBridgeRemoteSubscriptionModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnBridgeRemoteSubscriptionLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnBridgeRemoteSubscriptionCollectionsModel>} collections
 */
MsgVpnBridgeRemoteSubscriptionsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnBridgeRemoteSubscriptionModel>} data
 */
MsgVpnBridgeRemoteSubscriptionsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnBridgeRemoteSubscriptionLinksModel>} links
 */
MsgVpnBridgeRemoteSubscriptionsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnBridgeRemoteSubscriptionsResponseModel.prototype.meta = undefined;

