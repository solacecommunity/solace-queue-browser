import {ApiClient} from '../ApiClient';
import {MsgVpnTransactionCollectionsModel} from './MsgVpnTransactionCollectionsModel';
import {MsgVpnTransactionLinksModel} from './MsgVpnTransactionLinksModel';
import {MsgVpnTransactionModel} from './MsgVpnTransactionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnTransactionsResponseModel model module.
 * @module model/MsgVpnTransactionsResponseModel
 * @version 2.36
 */
export class MsgVpnTransactionsResponseModel {
  /**
   * Constructs a new <code>MsgVpnTransactionsResponseModel</code>.
   * @alias module:model/MsgVpnTransactionsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnTransactionsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTransactionsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTransactionsResponseModel} The populated <code>MsgVpnTransactionsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTransactionsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnTransactionCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnTransactionModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnTransactionLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnTransactionCollectionsModel>} collections
 */
MsgVpnTransactionsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnTransactionModel>} data
 */
MsgVpnTransactionsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnTransactionLinksModel>} links
 */
MsgVpnTransactionsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnTransactionsResponseModel.prototype.meta = undefined;

