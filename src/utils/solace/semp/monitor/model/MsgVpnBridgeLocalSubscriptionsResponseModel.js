import {ApiClient} from '../ApiClient';
import {MsgVpnBridgeLocalSubscriptionCollectionsModel} from './MsgVpnBridgeLocalSubscriptionCollectionsModel';
import {MsgVpnBridgeLocalSubscriptionLinksModel} from './MsgVpnBridgeLocalSubscriptionLinksModel';
import {MsgVpnBridgeLocalSubscriptionModel} from './MsgVpnBridgeLocalSubscriptionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnBridgeLocalSubscriptionsResponseModel model module.
 * @module model/MsgVpnBridgeLocalSubscriptionsResponseModel
 * @version 2.36
 */
export class MsgVpnBridgeLocalSubscriptionsResponseModel {
  /**
   * Constructs a new <code>MsgVpnBridgeLocalSubscriptionsResponseModel</code>.
   * @alias module:model/MsgVpnBridgeLocalSubscriptionsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnBridgeLocalSubscriptionsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnBridgeLocalSubscriptionsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnBridgeLocalSubscriptionsResponseModel} The populated <code>MsgVpnBridgeLocalSubscriptionsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnBridgeLocalSubscriptionsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnBridgeLocalSubscriptionCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnBridgeLocalSubscriptionModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnBridgeLocalSubscriptionLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnBridgeLocalSubscriptionCollectionsModel>} collections
 */
MsgVpnBridgeLocalSubscriptionsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnBridgeLocalSubscriptionModel>} data
 */
MsgVpnBridgeLocalSubscriptionsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnBridgeLocalSubscriptionLinksModel>} links
 */
MsgVpnBridgeLocalSubscriptionsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnBridgeLocalSubscriptionsResponseModel.prototype.meta = undefined;

