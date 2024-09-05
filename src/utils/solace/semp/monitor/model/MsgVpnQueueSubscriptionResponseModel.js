import {ApiClient} from '../ApiClient';
import {MsgVpnQueueSubscriptionCollectionsModel} from './MsgVpnQueueSubscriptionCollectionsModel';
import {MsgVpnQueueSubscriptionLinksModel} from './MsgVpnQueueSubscriptionLinksModel';
import {MsgVpnQueueSubscriptionModel} from './MsgVpnQueueSubscriptionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnQueueSubscriptionResponseModel model module.
 * @module model/MsgVpnQueueSubscriptionResponseModel
 * @version 2.36
 */
export class MsgVpnQueueSubscriptionResponseModel {
  /**
   * Constructs a new <code>MsgVpnQueueSubscriptionResponseModel</code>.
   * @alias module:model/MsgVpnQueueSubscriptionResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnQueueSubscriptionResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnQueueSubscriptionResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnQueueSubscriptionResponseModel} The populated <code>MsgVpnQueueSubscriptionResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnQueueSubscriptionResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnQueueSubscriptionCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnQueueSubscriptionModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnQueueSubscriptionLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnQueueSubscriptionCollectionsModel} collections
 */
MsgVpnQueueSubscriptionResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnQueueSubscriptionModel} data
 */
MsgVpnQueueSubscriptionResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnQueueSubscriptionLinksModel} links
 */
MsgVpnQueueSubscriptionResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnQueueSubscriptionResponseModel.prototype.meta = undefined;

