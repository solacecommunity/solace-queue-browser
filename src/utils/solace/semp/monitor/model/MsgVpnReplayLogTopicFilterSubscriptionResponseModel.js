import {ApiClient} from '../ApiClient';
import {MsgVpnReplayLogTopicFilterSubscriptionCollectionsModel} from './MsgVpnReplayLogTopicFilterSubscriptionCollectionsModel';
import {MsgVpnReplayLogTopicFilterSubscriptionLinksModel} from './MsgVpnReplayLogTopicFilterSubscriptionLinksModel';
import {MsgVpnReplayLogTopicFilterSubscriptionModel} from './MsgVpnReplayLogTopicFilterSubscriptionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnReplayLogTopicFilterSubscriptionResponseModel model module.
 * @module model/MsgVpnReplayLogTopicFilterSubscriptionResponseModel
 * @version 2.36
 */
export class MsgVpnReplayLogTopicFilterSubscriptionResponseModel {
  /**
   * Constructs a new <code>MsgVpnReplayLogTopicFilterSubscriptionResponseModel</code>.
   * @alias module:model/MsgVpnReplayLogTopicFilterSubscriptionResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnReplayLogTopicFilterSubscriptionResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnReplayLogTopicFilterSubscriptionResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnReplayLogTopicFilterSubscriptionResponseModel} The populated <code>MsgVpnReplayLogTopicFilterSubscriptionResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnReplayLogTopicFilterSubscriptionResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnReplayLogTopicFilterSubscriptionCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnReplayLogTopicFilterSubscriptionModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnReplayLogTopicFilterSubscriptionLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnReplayLogTopicFilterSubscriptionCollectionsModel} collections
 */
MsgVpnReplayLogTopicFilterSubscriptionResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnReplayLogTopicFilterSubscriptionModel} data
 */
MsgVpnReplayLogTopicFilterSubscriptionResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnReplayLogTopicFilterSubscriptionLinksModel} links
 */
MsgVpnReplayLogTopicFilterSubscriptionResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnReplayLogTopicFilterSubscriptionResponseModel.prototype.meta = undefined;

