import {ApiClient} from '../ApiClient';
import {MsgVpnTransactionConsumerMsgCollectionsModel} from './MsgVpnTransactionConsumerMsgCollectionsModel';
import {MsgVpnTransactionConsumerMsgLinksModel} from './MsgVpnTransactionConsumerMsgLinksModel';
import {MsgVpnTransactionConsumerMsgModel} from './MsgVpnTransactionConsumerMsgModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnTransactionConsumerMsgsResponseModel model module.
 * @module model/MsgVpnTransactionConsumerMsgsResponseModel
 * @version 2.36
 */
export class MsgVpnTransactionConsumerMsgsResponseModel {
  /**
   * Constructs a new <code>MsgVpnTransactionConsumerMsgsResponseModel</code>.
   * @alias module:model/MsgVpnTransactionConsumerMsgsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnTransactionConsumerMsgsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTransactionConsumerMsgsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTransactionConsumerMsgsResponseModel} The populated <code>MsgVpnTransactionConsumerMsgsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTransactionConsumerMsgsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnTransactionConsumerMsgCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnTransactionConsumerMsgModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnTransactionConsumerMsgLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnTransactionConsumerMsgCollectionsModel>} collections
 */
MsgVpnTransactionConsumerMsgsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnTransactionConsumerMsgModel>} data
 */
MsgVpnTransactionConsumerMsgsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnTransactionConsumerMsgLinksModel>} links
 */
MsgVpnTransactionConsumerMsgsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnTransactionConsumerMsgsResponseModel.prototype.meta = undefined;

