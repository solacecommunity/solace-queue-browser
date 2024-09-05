import {ApiClient} from '../ApiClient';
import {MsgVpnReplayLogTopicFilterSubscriptionCollectionsModel} from './MsgVpnReplayLogTopicFilterSubscriptionCollectionsModel';
import {MsgVpnReplayLogTopicFilterSubscriptionLinksModel} from './MsgVpnReplayLogTopicFilterSubscriptionLinksModel';
import {MsgVpnReplayLogTopicFilterSubscriptionModel} from './MsgVpnReplayLogTopicFilterSubscriptionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnReplayLogTopicFilterSubscriptionsResponseModel model module.
 * @module model/MsgVpnReplayLogTopicFilterSubscriptionsResponseModel
 * @version 2.36
 */
export class MsgVpnReplayLogTopicFilterSubscriptionsResponseModel {
  /**
   * Constructs a new <code>MsgVpnReplayLogTopicFilterSubscriptionsResponseModel</code>.
   * @alias module:model/MsgVpnReplayLogTopicFilterSubscriptionsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnReplayLogTopicFilterSubscriptionsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnReplayLogTopicFilterSubscriptionsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnReplayLogTopicFilterSubscriptionsResponseModel} The populated <code>MsgVpnReplayLogTopicFilterSubscriptionsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnReplayLogTopicFilterSubscriptionsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnReplayLogTopicFilterSubscriptionCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnReplayLogTopicFilterSubscriptionModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnReplayLogTopicFilterSubscriptionLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnReplayLogTopicFilterSubscriptionCollectionsModel>} collections
 */
MsgVpnReplayLogTopicFilterSubscriptionsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnReplayLogTopicFilterSubscriptionModel>} data
 */
MsgVpnReplayLogTopicFilterSubscriptionsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnReplayLogTopicFilterSubscriptionLinksModel>} links
 */
MsgVpnReplayLogTopicFilterSubscriptionsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnReplayLogTopicFilterSubscriptionsResponseModel.prototype.meta = undefined;

