import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnRestDeliveryPointQueueBindingCollectionsProtectedRequestHeadersModel model module.
 * @module model/MsgVpnRestDeliveryPointQueueBindingCollectionsProtectedRequestHeadersModel
 * @version 2.36
 */
export class MsgVpnRestDeliveryPointQueueBindingCollectionsProtectedRequestHeadersModel {
  /**
   * Constructs a new <code>MsgVpnRestDeliveryPointQueueBindingCollectionsProtectedRequestHeadersModel</code>.
   * @alias module:model/MsgVpnRestDeliveryPointQueueBindingCollectionsProtectedRequestHeadersModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnRestDeliveryPointQueueBindingCollectionsProtectedRequestHeadersModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRestDeliveryPointQueueBindingCollectionsProtectedRequestHeadersModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRestDeliveryPointQueueBindingCollectionsProtectedRequestHeadersModel} The populated <code>MsgVpnRestDeliveryPointQueueBindingCollectionsProtectedRequestHeadersModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRestDeliveryPointQueueBindingCollectionsProtectedRequestHeadersModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the protectedRequestHeaders collection. Available since 2.30.
 * @member {Number} count
 */
MsgVpnRestDeliveryPointQueueBindingCollectionsProtectedRequestHeadersModel.prototype.count = undefined;

