import {ApiClient} from '../ApiClient';
import {MsgVpnTransactionPublisherMsgCollectionsModel} from './MsgVpnTransactionPublisherMsgCollectionsModel';
import {MsgVpnTransactionPublisherMsgLinksModel} from './MsgVpnTransactionPublisherMsgLinksModel';
import {MsgVpnTransactionPublisherMsgModel} from './MsgVpnTransactionPublisherMsgModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnTransactionPublisherMsgResponseModel model module.
 * @module model/MsgVpnTransactionPublisherMsgResponseModel
 * @version 2.36
 */
export class MsgVpnTransactionPublisherMsgResponseModel {
  /**
   * Constructs a new <code>MsgVpnTransactionPublisherMsgResponseModel</code>.
   * @alias module:model/MsgVpnTransactionPublisherMsgResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnTransactionPublisherMsgResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTransactionPublisherMsgResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTransactionPublisherMsgResponseModel} The populated <code>MsgVpnTransactionPublisherMsgResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTransactionPublisherMsgResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnTransactionPublisherMsgCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnTransactionPublisherMsgModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnTransactionPublisherMsgLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnTransactionPublisherMsgCollectionsModel} collections
 */
MsgVpnTransactionPublisherMsgResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnTransactionPublisherMsgModel} data
 */
MsgVpnTransactionPublisherMsgResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnTransactionPublisherMsgLinksModel} links
 */
MsgVpnTransactionPublisherMsgResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnTransactionPublisherMsgResponseModel.prototype.meta = undefined;

