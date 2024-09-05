import {ApiClient} from '../ApiClient';
import {MsgVpnRestDeliveryPointQueueBindingRequestHeaderCollectionsModel} from './MsgVpnRestDeliveryPointQueueBindingRequestHeaderCollectionsModel';
import {MsgVpnRestDeliveryPointQueueBindingRequestHeaderLinksModel} from './MsgVpnRestDeliveryPointQueueBindingRequestHeaderLinksModel';
import {MsgVpnRestDeliveryPointQueueBindingRequestHeaderModel} from './MsgVpnRestDeliveryPointQueueBindingRequestHeaderModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnRestDeliveryPointQueueBindingRequestHeaderResponseModel model module.
 * @module model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderResponseModel
 * @version 2.36
 */
export class MsgVpnRestDeliveryPointQueueBindingRequestHeaderResponseModel {
  /**
   * Constructs a new <code>MsgVpnRestDeliveryPointQueueBindingRequestHeaderResponseModel</code>.
   * @alias module:model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnRestDeliveryPointQueueBindingRequestHeaderResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderResponseModel} The populated <code>MsgVpnRestDeliveryPointQueueBindingRequestHeaderResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRestDeliveryPointQueueBindingRequestHeaderResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnRestDeliveryPointQueueBindingRequestHeaderCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnRestDeliveryPointQueueBindingRequestHeaderModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnRestDeliveryPointQueueBindingRequestHeaderLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderCollectionsModel} collections
 */
MsgVpnRestDeliveryPointQueueBindingRequestHeaderResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderModel} data
 */
MsgVpnRestDeliveryPointQueueBindingRequestHeaderResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderLinksModel} links
 */
MsgVpnRestDeliveryPointQueueBindingRequestHeaderResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnRestDeliveryPointQueueBindingRequestHeaderResponseModel.prototype.meta = undefined;

