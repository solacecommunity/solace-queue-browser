import {ApiClient} from '../ApiClient';
import {MsgVpnBridgeRemoteSubscriptionCollectionsModel} from './MsgVpnBridgeRemoteSubscriptionCollectionsModel';
import {MsgVpnBridgeRemoteSubscriptionLinksModel} from './MsgVpnBridgeRemoteSubscriptionLinksModel';
import {MsgVpnBridgeRemoteSubscriptionModel} from './MsgVpnBridgeRemoteSubscriptionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnBridgeRemoteSubscriptionResponseModel model module.
 * @module model/MsgVpnBridgeRemoteSubscriptionResponseModel
 * @version 2.36
 */
export class MsgVpnBridgeRemoteSubscriptionResponseModel {
  /**
   * Constructs a new <code>MsgVpnBridgeRemoteSubscriptionResponseModel</code>.
   * @alias module:model/MsgVpnBridgeRemoteSubscriptionResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnBridgeRemoteSubscriptionResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnBridgeRemoteSubscriptionResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnBridgeRemoteSubscriptionResponseModel} The populated <code>MsgVpnBridgeRemoteSubscriptionResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnBridgeRemoteSubscriptionResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnBridgeRemoteSubscriptionCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnBridgeRemoteSubscriptionModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnBridgeRemoteSubscriptionLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnBridgeRemoteSubscriptionCollectionsModel} collections
 */
MsgVpnBridgeRemoteSubscriptionResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnBridgeRemoteSubscriptionModel} data
 */
MsgVpnBridgeRemoteSubscriptionResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnBridgeRemoteSubscriptionLinksModel} links
 */
MsgVpnBridgeRemoteSubscriptionResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnBridgeRemoteSubscriptionResponseModel.prototype.meta = undefined;

