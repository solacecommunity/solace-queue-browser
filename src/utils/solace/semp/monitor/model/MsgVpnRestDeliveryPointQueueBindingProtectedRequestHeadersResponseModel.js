import {ApiClient} from '../ApiClient';
import {MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderCollectionsModel} from './MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderCollectionsModel';
import {MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderLinksModel} from './MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderLinksModel';
import {MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderModel} from './MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeadersResponseModel model module.
 * @module model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeadersResponseModel
 * @version 2.36
 */
export class MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeadersResponseModel {
  /**
   * Constructs a new <code>MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeadersResponseModel</code>.
   * @alias module:model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeadersResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeadersResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeadersResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeadersResponseModel} The populated <code>MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeadersResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeadersResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderCollectionsModel>} collections
 */
MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeadersResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderModel>} data
 */
MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeadersResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderLinksModel>} links
 */
MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeadersResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeadersResponseModel.prototype.meta = undefined;

