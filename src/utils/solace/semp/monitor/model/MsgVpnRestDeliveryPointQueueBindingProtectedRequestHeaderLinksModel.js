import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderLinksModel model module.
 * @module model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderLinksModel
 * @version 2.36
 */
export class MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderLinksModel {
  /**
   * Constructs a new <code>MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderLinksModel</code>.
   * @alias module:model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderLinksModel} The populated <code>MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Protected Request Header object.
 * @member {String} uri
 */
MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderLinksModel.prototype.uri = undefined;

