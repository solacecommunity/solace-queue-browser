import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnRestDeliveryPointQueueBindingLinksModel model module.
 * @module model/MsgVpnRestDeliveryPointQueueBindingLinksModel
 * @version 2.36
 */
export class MsgVpnRestDeliveryPointQueueBindingLinksModel {
  /**
   * Constructs a new <code>MsgVpnRestDeliveryPointQueueBindingLinksModel</code>.
   * @alias module:model/MsgVpnRestDeliveryPointQueueBindingLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnRestDeliveryPointQueueBindingLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRestDeliveryPointQueueBindingLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRestDeliveryPointQueueBindingLinksModel} The populated <code>MsgVpnRestDeliveryPointQueueBindingLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRestDeliveryPointQueueBindingLinksModel();
      if (data.hasOwnProperty('protectedRequestHeadersUri'))
        obj.protectedRequestHeadersUri = ApiClient.convertToType(data['protectedRequestHeadersUri'], 'String');
      if (data.hasOwnProperty('requestHeadersUri'))
        obj.requestHeadersUri = ApiClient.convertToType(data['requestHeadersUri'], 'String');
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Queue Binding's collection of Protected Request Header objects. Available since 2.30.
 * @member {String} protectedRequestHeadersUri
 */
MsgVpnRestDeliveryPointQueueBindingLinksModel.prototype.protectedRequestHeadersUri = undefined;

/**
 * The URI of this Queue Binding's collection of Request Header objects. Available since 2.23.
 * @member {String} requestHeadersUri
 */
MsgVpnRestDeliveryPointQueueBindingLinksModel.prototype.requestHeadersUri = undefined;

/**
 * The URI of this Queue Binding object.
 * @member {String} uri
 */
MsgVpnRestDeliveryPointQueueBindingLinksModel.prototype.uri = undefined;

