import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnRestDeliveryPointQueueBindingCollectionsRequestHeadersModel model module.
 * @module model/MsgVpnRestDeliveryPointQueueBindingCollectionsRequestHeadersModel
 * @version 2.36
 */
export class MsgVpnRestDeliveryPointQueueBindingCollectionsRequestHeadersModel {
  /**
   * Constructs a new <code>MsgVpnRestDeliveryPointQueueBindingCollectionsRequestHeadersModel</code>.
   * @alias module:model/MsgVpnRestDeliveryPointQueueBindingCollectionsRequestHeadersModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnRestDeliveryPointQueueBindingCollectionsRequestHeadersModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRestDeliveryPointQueueBindingCollectionsRequestHeadersModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRestDeliveryPointQueueBindingCollectionsRequestHeadersModel} The populated <code>MsgVpnRestDeliveryPointQueueBindingCollectionsRequestHeadersModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRestDeliveryPointQueueBindingCollectionsRequestHeadersModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the requestHeaders collection. Available since 2.23.
 * @member {Number} count
 */
MsgVpnRestDeliveryPointQueueBindingCollectionsRequestHeadersModel.prototype.count = undefined;

