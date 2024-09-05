import {ApiClient} from '../ApiClient';
import {MsgVpnKafkaReceiverCollectionsModel} from './MsgVpnKafkaReceiverCollectionsModel';
import {MsgVpnKafkaReceiverLinksModel} from './MsgVpnKafkaReceiverLinksModel';
import {MsgVpnKafkaReceiverModel} from './MsgVpnKafkaReceiverModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnKafkaReceiversResponseModel model module.
 * @module model/MsgVpnKafkaReceiversResponseModel
 * @version 2.36
 */
export class MsgVpnKafkaReceiversResponseModel {
  /**
   * Constructs a new <code>MsgVpnKafkaReceiversResponseModel</code>.
   * @alias module:model/MsgVpnKafkaReceiversResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnKafkaReceiversResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnKafkaReceiversResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnKafkaReceiversResponseModel} The populated <code>MsgVpnKafkaReceiversResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnKafkaReceiversResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnKafkaReceiverCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnKafkaReceiverModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnKafkaReceiverLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnKafkaReceiverCollectionsModel>} collections
 */
MsgVpnKafkaReceiversResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnKafkaReceiverModel>} data
 */
MsgVpnKafkaReceiversResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnKafkaReceiverLinksModel>} links
 */
MsgVpnKafkaReceiversResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnKafkaReceiversResponseModel.prototype.meta = undefined;

