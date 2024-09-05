import {ApiClient} from '../ApiClient';
import {MsgVpnMqttSessionSubscriptionCollectionsModel} from './MsgVpnMqttSessionSubscriptionCollectionsModel';
import {MsgVpnMqttSessionSubscriptionLinksModel} from './MsgVpnMqttSessionSubscriptionLinksModel';
import {MsgVpnMqttSessionSubscriptionModel} from './MsgVpnMqttSessionSubscriptionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnMqttSessionSubscriptionResponseModel model module.
 * @module model/MsgVpnMqttSessionSubscriptionResponseModel
 * @version 2.36
 */
export class MsgVpnMqttSessionSubscriptionResponseModel {
  /**
   * Constructs a new <code>MsgVpnMqttSessionSubscriptionResponseModel</code>.
   * @alias module:model/MsgVpnMqttSessionSubscriptionResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnMqttSessionSubscriptionResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnMqttSessionSubscriptionResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnMqttSessionSubscriptionResponseModel} The populated <code>MsgVpnMqttSessionSubscriptionResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnMqttSessionSubscriptionResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnMqttSessionSubscriptionCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnMqttSessionSubscriptionModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnMqttSessionSubscriptionLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnMqttSessionSubscriptionCollectionsModel} collections
 */
MsgVpnMqttSessionSubscriptionResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnMqttSessionSubscriptionModel} data
 */
MsgVpnMqttSessionSubscriptionResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnMqttSessionSubscriptionLinksModel} links
 */
MsgVpnMqttSessionSubscriptionResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnMqttSessionSubscriptionResponseModel.prototype.meta = undefined;

