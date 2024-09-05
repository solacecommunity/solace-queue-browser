import {ApiClient} from '../ApiClient';
import {MsgVpnQueueSubscriptionCollectionsModel} from './MsgVpnQueueSubscriptionCollectionsModel';
import {MsgVpnQueueSubscriptionLinksModel} from './MsgVpnQueueSubscriptionLinksModel';
import {MsgVpnQueueSubscriptionModel} from './MsgVpnQueueSubscriptionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnQueueSubscriptionsResponseModel model module.
 * @module model/MsgVpnQueueSubscriptionsResponseModel
 * @version 2.36
 */
export class MsgVpnQueueSubscriptionsResponseModel {
  /**
   * Constructs a new <code>MsgVpnQueueSubscriptionsResponseModel</code>.
   * @alias module:model/MsgVpnQueueSubscriptionsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnQueueSubscriptionsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnQueueSubscriptionsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnQueueSubscriptionsResponseModel} The populated <code>MsgVpnQueueSubscriptionsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnQueueSubscriptionsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnQueueSubscriptionCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnQueueSubscriptionModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnQueueSubscriptionLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnQueueSubscriptionCollectionsModel>} collections
 */
MsgVpnQueueSubscriptionsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnQueueSubscriptionModel>} data
 */
MsgVpnQueueSubscriptionsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnQueueSubscriptionLinksModel>} links
 */
MsgVpnQueueSubscriptionsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnQueueSubscriptionsResponseModel.prototype.meta = undefined;

