import {ApiClient} from '../ApiClient';
import {MsgVpnRestDeliveryPointQueueBindingCollectionsProtectedRequestHeadersModel} from './MsgVpnRestDeliveryPointQueueBindingCollectionsProtectedRequestHeadersModel';
import {MsgVpnRestDeliveryPointQueueBindingCollectionsRequestHeadersModel} from './MsgVpnRestDeliveryPointQueueBindingCollectionsRequestHeadersModel';

/**
 * The MsgVpnRestDeliveryPointQueueBindingCollectionsModel model module.
 * @module model/MsgVpnRestDeliveryPointQueueBindingCollectionsModel
 * @version 2.36
 */
export class MsgVpnRestDeliveryPointQueueBindingCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnRestDeliveryPointQueueBindingCollectionsModel</code>.
   * @alias module:model/MsgVpnRestDeliveryPointQueueBindingCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnRestDeliveryPointQueueBindingCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRestDeliveryPointQueueBindingCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRestDeliveryPointQueueBindingCollectionsModel} The populated <code>MsgVpnRestDeliveryPointQueueBindingCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRestDeliveryPointQueueBindingCollectionsModel();
      if (data.hasOwnProperty('protectedRequestHeaders'))
        obj.protectedRequestHeaders = MsgVpnRestDeliveryPointQueueBindingCollectionsProtectedRequestHeadersModel.constructFromObject(data['protectedRequestHeaders']);
      if (data.hasOwnProperty('requestHeaders'))
        obj.requestHeaders = MsgVpnRestDeliveryPointQueueBindingCollectionsRequestHeadersModel.constructFromObject(data['requestHeaders']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnRestDeliveryPointQueueBindingCollectionsProtectedRequestHeadersModel} protectedRequestHeaders
 */
MsgVpnRestDeliveryPointQueueBindingCollectionsModel.prototype.protectedRequestHeaders = undefined;

/**
 * @member {module:model/MsgVpnRestDeliveryPointQueueBindingCollectionsRequestHeadersModel} requestHeaders
 */
MsgVpnRestDeliveryPointQueueBindingCollectionsModel.prototype.requestHeaders = undefined;

