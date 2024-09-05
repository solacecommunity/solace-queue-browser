import {ApiClient} from '../ApiClient';
import {MsgVpnKafkaReceiverCollectionsModel} from './MsgVpnKafkaReceiverCollectionsModel';
import {MsgVpnKafkaReceiverLinksModel} from './MsgVpnKafkaReceiverLinksModel';
import {MsgVpnKafkaReceiverModel} from './MsgVpnKafkaReceiverModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnKafkaReceiverResponseModel model module.
 * @module model/MsgVpnKafkaReceiverResponseModel
 * @version 2.36
 */
export class MsgVpnKafkaReceiverResponseModel {
  /**
   * Constructs a new <code>MsgVpnKafkaReceiverResponseModel</code>.
   * @alias module:model/MsgVpnKafkaReceiverResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnKafkaReceiverResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnKafkaReceiverResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnKafkaReceiverResponseModel} The populated <code>MsgVpnKafkaReceiverResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnKafkaReceiverResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnKafkaReceiverCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnKafkaReceiverModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnKafkaReceiverLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnKafkaReceiverCollectionsModel} collections
 */
MsgVpnKafkaReceiverResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnKafkaReceiverModel} data
 */
MsgVpnKafkaReceiverResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnKafkaReceiverLinksModel} links
 */
MsgVpnKafkaReceiverResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnKafkaReceiverResponseModel.prototype.meta = undefined;

