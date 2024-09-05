import {ApiClient} from '../ApiClient';
import {MsgVpnTransactionCollectionsModel} from './MsgVpnTransactionCollectionsModel';
import {MsgVpnTransactionLinksModel} from './MsgVpnTransactionLinksModel';
import {MsgVpnTransactionModel} from './MsgVpnTransactionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnTransactionResponseModel model module.
 * @module model/MsgVpnTransactionResponseModel
 * @version 2.36
 */
export class MsgVpnTransactionResponseModel {
  /**
   * Constructs a new <code>MsgVpnTransactionResponseModel</code>.
   * @alias module:model/MsgVpnTransactionResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnTransactionResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTransactionResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTransactionResponseModel} The populated <code>MsgVpnTransactionResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTransactionResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnTransactionCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnTransactionModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnTransactionLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnTransactionCollectionsModel} collections
 */
MsgVpnTransactionResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnTransactionModel} data
 */
MsgVpnTransactionResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnTransactionLinksModel} links
 */
MsgVpnTransactionResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnTransactionResponseModel.prototype.meta = undefined;

