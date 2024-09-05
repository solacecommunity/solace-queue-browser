import {ApiClient} from '../ApiClient';
import {MsgVpnKafkaReceiverRemoteBrokerCollectionsModel} from './MsgVpnKafkaReceiverRemoteBrokerCollectionsModel';
import {MsgVpnKafkaReceiverRemoteBrokerLinksModel} from './MsgVpnKafkaReceiverRemoteBrokerLinksModel';
import {MsgVpnKafkaReceiverRemoteBrokerModel} from './MsgVpnKafkaReceiverRemoteBrokerModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnKafkaReceiverRemoteBrokersResponseModel model module.
 * @module model/MsgVpnKafkaReceiverRemoteBrokersResponseModel
 * @version 2.36
 */
export class MsgVpnKafkaReceiverRemoteBrokersResponseModel {
  /**
   * Constructs a new <code>MsgVpnKafkaReceiverRemoteBrokersResponseModel</code>.
   * @alias module:model/MsgVpnKafkaReceiverRemoteBrokersResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnKafkaReceiverRemoteBrokersResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnKafkaReceiverRemoteBrokersResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnKafkaReceiverRemoteBrokersResponseModel} The populated <code>MsgVpnKafkaReceiverRemoteBrokersResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnKafkaReceiverRemoteBrokersResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnKafkaReceiverRemoteBrokerCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnKafkaReceiverRemoteBrokerModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnKafkaReceiverRemoteBrokerLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnKafkaReceiverRemoteBrokerCollectionsModel>} collections
 */
MsgVpnKafkaReceiverRemoteBrokersResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnKafkaReceiverRemoteBrokerModel>} data
 */
MsgVpnKafkaReceiverRemoteBrokersResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnKafkaReceiverRemoteBrokerLinksModel>} links
 */
MsgVpnKafkaReceiverRemoteBrokersResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnKafkaReceiverRemoteBrokersResponseModel.prototype.meta = undefined;

