import {ApiClient} from '../ApiClient';
import {MsgVpnTransactionConsumerMsgCollectionsModel} from './MsgVpnTransactionConsumerMsgCollectionsModel';
import {MsgVpnTransactionConsumerMsgLinksModel} from './MsgVpnTransactionConsumerMsgLinksModel';
import {MsgVpnTransactionConsumerMsgModel} from './MsgVpnTransactionConsumerMsgModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnTransactionConsumerMsgResponseModel model module.
 * @module model/MsgVpnTransactionConsumerMsgResponseModel
 * @version 2.36
 */
export class MsgVpnTransactionConsumerMsgResponseModel {
  /**
   * Constructs a new <code>MsgVpnTransactionConsumerMsgResponseModel</code>.
   * @alias module:model/MsgVpnTransactionConsumerMsgResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnTransactionConsumerMsgResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTransactionConsumerMsgResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTransactionConsumerMsgResponseModel} The populated <code>MsgVpnTransactionConsumerMsgResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTransactionConsumerMsgResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnTransactionConsumerMsgCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnTransactionConsumerMsgModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnTransactionConsumerMsgLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnTransactionConsumerMsgCollectionsModel} collections
 */
MsgVpnTransactionConsumerMsgResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnTransactionConsumerMsgModel} data
 */
MsgVpnTransactionConsumerMsgResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnTransactionConsumerMsgLinksModel} links
 */
MsgVpnTransactionConsumerMsgResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnTransactionConsumerMsgResponseModel.prototype.meta = undefined;

