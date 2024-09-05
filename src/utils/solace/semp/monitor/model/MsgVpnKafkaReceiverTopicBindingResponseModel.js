import {ApiClient} from '../ApiClient';
import {MsgVpnKafkaReceiverTopicBindingCollectionsModel} from './MsgVpnKafkaReceiverTopicBindingCollectionsModel';
import {MsgVpnKafkaReceiverTopicBindingLinksModel} from './MsgVpnKafkaReceiverTopicBindingLinksModel';
import {MsgVpnKafkaReceiverTopicBindingModel} from './MsgVpnKafkaReceiverTopicBindingModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnKafkaReceiverTopicBindingResponseModel model module.
 * @module model/MsgVpnKafkaReceiverTopicBindingResponseModel
 * @version 2.36
 */
export class MsgVpnKafkaReceiverTopicBindingResponseModel {
  /**
   * Constructs a new <code>MsgVpnKafkaReceiverTopicBindingResponseModel</code>.
   * @alias module:model/MsgVpnKafkaReceiverTopicBindingResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnKafkaReceiverTopicBindingResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnKafkaReceiverTopicBindingResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnKafkaReceiverTopicBindingResponseModel} The populated <code>MsgVpnKafkaReceiverTopicBindingResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnKafkaReceiverTopicBindingResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnKafkaReceiverTopicBindingCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnKafkaReceiverTopicBindingModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnKafkaReceiverTopicBindingLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnKafkaReceiverTopicBindingCollectionsModel} collections
 */
MsgVpnKafkaReceiverTopicBindingResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnKafkaReceiverTopicBindingModel} data
 */
MsgVpnKafkaReceiverTopicBindingResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnKafkaReceiverTopicBindingLinksModel} links
 */
MsgVpnKafkaReceiverTopicBindingResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnKafkaReceiverTopicBindingResponseModel.prototype.meta = undefined;

