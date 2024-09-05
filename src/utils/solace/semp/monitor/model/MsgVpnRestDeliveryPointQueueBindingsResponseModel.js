import {ApiClient} from '../ApiClient';
import {MsgVpnRestDeliveryPointQueueBindingCollectionsModel} from './MsgVpnRestDeliveryPointQueueBindingCollectionsModel';
import {MsgVpnRestDeliveryPointQueueBindingLinksModel} from './MsgVpnRestDeliveryPointQueueBindingLinksModel';
import {MsgVpnRestDeliveryPointQueueBindingModel} from './MsgVpnRestDeliveryPointQueueBindingModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnRestDeliveryPointQueueBindingsResponseModel model module.
 * @module model/MsgVpnRestDeliveryPointQueueBindingsResponseModel
 * @version 2.36
 */
export class MsgVpnRestDeliveryPointQueueBindingsResponseModel {
  /**
   * Constructs a new <code>MsgVpnRestDeliveryPointQueueBindingsResponseModel</code>.
   * @alias module:model/MsgVpnRestDeliveryPointQueueBindingsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnRestDeliveryPointQueueBindingsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRestDeliveryPointQueueBindingsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRestDeliveryPointQueueBindingsResponseModel} The populated <code>MsgVpnRestDeliveryPointQueueBindingsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRestDeliveryPointQueueBindingsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnRestDeliveryPointQueueBindingCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnRestDeliveryPointQueueBindingModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnRestDeliveryPointQueueBindingLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnRestDeliveryPointQueueBindingCollectionsModel>} collections
 */
MsgVpnRestDeliveryPointQueueBindingsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnRestDeliveryPointQueueBindingModel>} data
 */
MsgVpnRestDeliveryPointQueueBindingsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnRestDeliveryPointQueueBindingLinksModel>} links
 */
MsgVpnRestDeliveryPointQueueBindingsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnRestDeliveryPointQueueBindingsResponseModel.prototype.meta = undefined;

