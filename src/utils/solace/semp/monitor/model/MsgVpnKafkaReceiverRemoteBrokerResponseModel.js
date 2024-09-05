import {ApiClient} from '../ApiClient';
import {MsgVpnKafkaReceiverRemoteBrokerCollectionsModel} from './MsgVpnKafkaReceiverRemoteBrokerCollectionsModel';
import {MsgVpnKafkaReceiverRemoteBrokerLinksModel} from './MsgVpnKafkaReceiverRemoteBrokerLinksModel';
import {MsgVpnKafkaReceiverRemoteBrokerModel} from './MsgVpnKafkaReceiverRemoteBrokerModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnKafkaReceiverRemoteBrokerResponseModel model module.
 * @module model/MsgVpnKafkaReceiverRemoteBrokerResponseModel
 * @version 2.36
 */
export class MsgVpnKafkaReceiverRemoteBrokerResponseModel {
  /**
   * Constructs a new <code>MsgVpnKafkaReceiverRemoteBrokerResponseModel</code>.
   * @alias module:model/MsgVpnKafkaReceiverRemoteBrokerResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnKafkaReceiverRemoteBrokerResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnKafkaReceiverRemoteBrokerResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnKafkaReceiverRemoteBrokerResponseModel} The populated <code>MsgVpnKafkaReceiverRemoteBrokerResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnKafkaReceiverRemoteBrokerResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnKafkaReceiverRemoteBrokerCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnKafkaReceiverRemoteBrokerModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnKafkaReceiverRemoteBrokerLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnKafkaReceiverRemoteBrokerCollectionsModel} collections
 */
MsgVpnKafkaReceiverRemoteBrokerResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnKafkaReceiverRemoteBrokerModel} data
 */
MsgVpnKafkaReceiverRemoteBrokerResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnKafkaReceiverRemoteBrokerLinksModel} links
 */
MsgVpnKafkaReceiverRemoteBrokerResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnKafkaReceiverRemoteBrokerResponseModel.prototype.meta = undefined;

