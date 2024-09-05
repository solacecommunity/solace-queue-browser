import {ApiClient} from '../ApiClient';
import {MsgVpnRestDeliveryPointQueueBindingRequestHeaderCollectionsModel} from './MsgVpnRestDeliveryPointQueueBindingRequestHeaderCollectionsModel';
import {MsgVpnRestDeliveryPointQueueBindingRequestHeaderLinksModel} from './MsgVpnRestDeliveryPointQueueBindingRequestHeaderLinksModel';
import {MsgVpnRestDeliveryPointQueueBindingRequestHeaderModel} from './MsgVpnRestDeliveryPointQueueBindingRequestHeaderModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnRestDeliveryPointQueueBindingRequestHeadersResponseModel model module.
 * @module model/MsgVpnRestDeliveryPointQueueBindingRequestHeadersResponseModel
 * @version 2.36
 */
export class MsgVpnRestDeliveryPointQueueBindingRequestHeadersResponseModel {
  /**
   * Constructs a new <code>MsgVpnRestDeliveryPointQueueBindingRequestHeadersResponseModel</code>.
   * @alias module:model/MsgVpnRestDeliveryPointQueueBindingRequestHeadersResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnRestDeliveryPointQueueBindingRequestHeadersResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRestDeliveryPointQueueBindingRequestHeadersResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRestDeliveryPointQueueBindingRequestHeadersResponseModel} The populated <code>MsgVpnRestDeliveryPointQueueBindingRequestHeadersResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRestDeliveryPointQueueBindingRequestHeadersResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnRestDeliveryPointQueueBindingRequestHeaderCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnRestDeliveryPointQueueBindingRequestHeaderModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnRestDeliveryPointQueueBindingRequestHeaderLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderCollectionsModel>} collections
 */
MsgVpnRestDeliveryPointQueueBindingRequestHeadersResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderModel>} data
 */
MsgVpnRestDeliveryPointQueueBindingRequestHeadersResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderLinksModel>} links
 */
MsgVpnRestDeliveryPointQueueBindingRequestHeadersResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnRestDeliveryPointQueueBindingRequestHeadersResponseModel.prototype.meta = undefined;

