import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnRestDeliveryPointQueueBindingRequestHeaderLinksModel model module.
 * @module model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderLinksModel
 * @version 2.36
 */
export class MsgVpnRestDeliveryPointQueueBindingRequestHeaderLinksModel {
  /**
   * Constructs a new <code>MsgVpnRestDeliveryPointQueueBindingRequestHeaderLinksModel</code>.
   * @alias module:model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnRestDeliveryPointQueueBindingRequestHeaderLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderLinksModel} The populated <code>MsgVpnRestDeliveryPointQueueBindingRequestHeaderLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRestDeliveryPointQueueBindingRequestHeaderLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Request Header object.
 * @member {String} uri
 */
MsgVpnRestDeliveryPointQueueBindingRequestHeaderLinksModel.prototype.uri = undefined;

