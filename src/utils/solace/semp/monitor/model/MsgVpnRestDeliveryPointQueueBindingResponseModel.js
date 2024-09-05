import {ApiClient} from '../ApiClient';
import {MsgVpnRestDeliveryPointQueueBindingCollectionsModel} from './MsgVpnRestDeliveryPointQueueBindingCollectionsModel';
import {MsgVpnRestDeliveryPointQueueBindingLinksModel} from './MsgVpnRestDeliveryPointQueueBindingLinksModel';
import {MsgVpnRestDeliveryPointQueueBindingModel} from './MsgVpnRestDeliveryPointQueueBindingModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnRestDeliveryPointQueueBindingResponseModel model module.
 * @module model/MsgVpnRestDeliveryPointQueueBindingResponseModel
 * @version 2.36
 */
export class MsgVpnRestDeliveryPointQueueBindingResponseModel {
  /**
   * Constructs a new <code>MsgVpnRestDeliveryPointQueueBindingResponseModel</code>.
   * @alias module:model/MsgVpnRestDeliveryPointQueueBindingResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnRestDeliveryPointQueueBindingResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRestDeliveryPointQueueBindingResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRestDeliveryPointQueueBindingResponseModel} The populated <code>MsgVpnRestDeliveryPointQueueBindingResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRestDeliveryPointQueueBindingResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnRestDeliveryPointQueueBindingCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnRestDeliveryPointQueueBindingModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnRestDeliveryPointQueueBindingLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnRestDeliveryPointQueueBindingCollectionsModel} collections
 */
MsgVpnRestDeliveryPointQueueBindingResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnRestDeliveryPointQueueBindingModel} data
 */
MsgVpnRestDeliveryPointQueueBindingResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnRestDeliveryPointQueueBindingLinksModel} links
 */
MsgVpnRestDeliveryPointQueueBindingResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnRestDeliveryPointQueueBindingResponseModel.prototype.meta = undefined;

