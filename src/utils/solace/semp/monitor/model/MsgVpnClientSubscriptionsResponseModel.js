import {ApiClient} from '../ApiClient';
import {MsgVpnClientSubscriptionCollectionsModel} from './MsgVpnClientSubscriptionCollectionsModel';
import {MsgVpnClientSubscriptionLinksModel} from './MsgVpnClientSubscriptionLinksModel';
import {MsgVpnClientSubscriptionModel} from './MsgVpnClientSubscriptionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnClientSubscriptionsResponseModel model module.
 * @module model/MsgVpnClientSubscriptionsResponseModel
 * @version 2.36
 */
export class MsgVpnClientSubscriptionsResponseModel {
  /**
   * Constructs a new <code>MsgVpnClientSubscriptionsResponseModel</code>.
   * @alias module:model/MsgVpnClientSubscriptionsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnClientSubscriptionsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientSubscriptionsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientSubscriptionsResponseModel} The populated <code>MsgVpnClientSubscriptionsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientSubscriptionsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnClientSubscriptionCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnClientSubscriptionModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnClientSubscriptionLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnClientSubscriptionCollectionsModel>} collections
 */
MsgVpnClientSubscriptionsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnClientSubscriptionModel>} data
 */
MsgVpnClientSubscriptionsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnClientSubscriptionLinksModel>} links
 */
MsgVpnClientSubscriptionsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnClientSubscriptionsResponseModel.prototype.meta = undefined;

