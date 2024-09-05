import {ApiClient} from '../ApiClient';
import {MsgVpnBridgeLocalSubscriptionCollectionsModel} from './MsgVpnBridgeLocalSubscriptionCollectionsModel';
import {MsgVpnBridgeLocalSubscriptionLinksModel} from './MsgVpnBridgeLocalSubscriptionLinksModel';
import {MsgVpnBridgeLocalSubscriptionModel} from './MsgVpnBridgeLocalSubscriptionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnBridgeLocalSubscriptionResponseModel model module.
 * @module model/MsgVpnBridgeLocalSubscriptionResponseModel
 * @version 2.36
 */
export class MsgVpnBridgeLocalSubscriptionResponseModel {
  /**
   * Constructs a new <code>MsgVpnBridgeLocalSubscriptionResponseModel</code>.
   * @alias module:model/MsgVpnBridgeLocalSubscriptionResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnBridgeLocalSubscriptionResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnBridgeLocalSubscriptionResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnBridgeLocalSubscriptionResponseModel} The populated <code>MsgVpnBridgeLocalSubscriptionResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnBridgeLocalSubscriptionResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnBridgeLocalSubscriptionCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnBridgeLocalSubscriptionModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnBridgeLocalSubscriptionLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnBridgeLocalSubscriptionCollectionsModel} collections
 */
MsgVpnBridgeLocalSubscriptionResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnBridgeLocalSubscriptionModel} data
 */
MsgVpnBridgeLocalSubscriptionResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnBridgeLocalSubscriptionLinksModel} links
 */
MsgVpnBridgeLocalSubscriptionResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnBridgeLocalSubscriptionResponseModel.prototype.meta = undefined;

