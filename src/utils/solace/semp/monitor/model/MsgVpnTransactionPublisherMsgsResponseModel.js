import {ApiClient} from '../ApiClient';
import {MsgVpnTransactionPublisherMsgCollectionsModel} from './MsgVpnTransactionPublisherMsgCollectionsModel';
import {MsgVpnTransactionPublisherMsgLinksModel} from './MsgVpnTransactionPublisherMsgLinksModel';
import {MsgVpnTransactionPublisherMsgModel} from './MsgVpnTransactionPublisherMsgModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnTransactionPublisherMsgsResponseModel model module.
 * @module model/MsgVpnTransactionPublisherMsgsResponseModel
 * @version 2.36
 */
export class MsgVpnTransactionPublisherMsgsResponseModel {
  /**
   * Constructs a new <code>MsgVpnTransactionPublisherMsgsResponseModel</code>.
   * @alias module:model/MsgVpnTransactionPublisherMsgsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnTransactionPublisherMsgsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTransactionPublisherMsgsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTransactionPublisherMsgsResponseModel} The populated <code>MsgVpnTransactionPublisherMsgsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTransactionPublisherMsgsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnTransactionPublisherMsgCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnTransactionPublisherMsgModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnTransactionPublisherMsgLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnTransactionPublisherMsgCollectionsModel>} collections
 */
MsgVpnTransactionPublisherMsgsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnTransactionPublisherMsgModel>} data
 */
MsgVpnTransactionPublisherMsgsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnTransactionPublisherMsgLinksModel>} links
 */
MsgVpnTransactionPublisherMsgsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnTransactionPublisherMsgsResponseModel.prototype.meta = undefined;

