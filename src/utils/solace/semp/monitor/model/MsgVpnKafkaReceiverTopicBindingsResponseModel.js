import {ApiClient} from '../ApiClient';
import {MsgVpnKafkaReceiverTopicBindingCollectionsModel} from './MsgVpnKafkaReceiverTopicBindingCollectionsModel';
import {MsgVpnKafkaReceiverTopicBindingLinksModel} from './MsgVpnKafkaReceiverTopicBindingLinksModel';
import {MsgVpnKafkaReceiverTopicBindingModel} from './MsgVpnKafkaReceiverTopicBindingModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnKafkaReceiverTopicBindingsResponseModel model module.
 * @module model/MsgVpnKafkaReceiverTopicBindingsResponseModel
 * @version 2.36
 */
export class MsgVpnKafkaReceiverTopicBindingsResponseModel {
  /**
   * Constructs a new <code>MsgVpnKafkaReceiverTopicBindingsResponseModel</code>.
   * @alias module:model/MsgVpnKafkaReceiverTopicBindingsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnKafkaReceiverTopicBindingsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnKafkaReceiverTopicBindingsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnKafkaReceiverTopicBindingsResponseModel} The populated <code>MsgVpnKafkaReceiverTopicBindingsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnKafkaReceiverTopicBindingsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnKafkaReceiverTopicBindingCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnKafkaReceiverTopicBindingModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnKafkaReceiverTopicBindingLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnKafkaReceiverTopicBindingCollectionsModel>} collections
 */
MsgVpnKafkaReceiverTopicBindingsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnKafkaReceiverTopicBindingModel>} data
 */
MsgVpnKafkaReceiverTopicBindingsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnKafkaReceiverTopicBindingLinksModel>} links
 */
MsgVpnKafkaReceiverTopicBindingsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnKafkaReceiverTopicBindingsResponseModel.prototype.meta = undefined;

