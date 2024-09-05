import {ApiClient} from '../ApiClient';
import {MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderCollectionsModel} from './MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderCollectionsModel';
import {MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderLinksModel} from './MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderLinksModel';
import {MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderModel} from './MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderResponseModel model module.
 * @module model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderResponseModel
 * @version 2.36
 */
export class MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderResponseModel {
  /**
   * Constructs a new <code>MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderResponseModel</code>.
   * @alias module:model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderResponseModel} The populated <code>MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderCollectionsModel} collections
 */
MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderModel} data
 */
MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderLinksModel} links
 */
MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderResponseModel.prototype.meta = undefined;

