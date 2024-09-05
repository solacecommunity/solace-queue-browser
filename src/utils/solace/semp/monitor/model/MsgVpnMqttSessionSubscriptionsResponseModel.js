import {ApiClient} from '../ApiClient';
import {MsgVpnMqttSessionSubscriptionCollectionsModel} from './MsgVpnMqttSessionSubscriptionCollectionsModel';
import {MsgVpnMqttSessionSubscriptionLinksModel} from './MsgVpnMqttSessionSubscriptionLinksModel';
import {MsgVpnMqttSessionSubscriptionModel} from './MsgVpnMqttSessionSubscriptionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnMqttSessionSubscriptionsResponseModel model module.
 * @module model/MsgVpnMqttSessionSubscriptionsResponseModel
 * @version 2.36
 */
export class MsgVpnMqttSessionSubscriptionsResponseModel {
  /**
   * Constructs a new <code>MsgVpnMqttSessionSubscriptionsResponseModel</code>.
   * @alias module:model/MsgVpnMqttSessionSubscriptionsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnMqttSessionSubscriptionsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnMqttSessionSubscriptionsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnMqttSessionSubscriptionsResponseModel} The populated <code>MsgVpnMqttSessionSubscriptionsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnMqttSessionSubscriptionsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnMqttSessionSubscriptionCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnMqttSessionSubscriptionModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnMqttSessionSubscriptionLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnMqttSessionSubscriptionCollectionsModel>} collections
 */
MsgVpnMqttSessionSubscriptionsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnMqttSessionSubscriptionModel>} data
 */
MsgVpnMqttSessionSubscriptionsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnMqttSessionSubscriptionLinksModel>} links
 */
MsgVpnMqttSessionSubscriptionsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnMqttSessionSubscriptionsResponseModel.prototype.meta = undefined;

