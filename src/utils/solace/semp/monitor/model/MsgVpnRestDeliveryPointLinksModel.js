import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnRestDeliveryPointLinksModel model module.
 * @module model/MsgVpnRestDeliveryPointLinksModel
 * @version 2.36
 */
export class MsgVpnRestDeliveryPointLinksModel {
  /**
   * Constructs a new <code>MsgVpnRestDeliveryPointLinksModel</code>.
   * @alias module:model/MsgVpnRestDeliveryPointLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnRestDeliveryPointLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRestDeliveryPointLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRestDeliveryPointLinksModel} The populated <code>MsgVpnRestDeliveryPointLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRestDeliveryPointLinksModel();
      if (data.hasOwnProperty('queueBindingsUri'))
        obj.queueBindingsUri = ApiClient.convertToType(data['queueBindingsUri'], 'String');
      if (data.hasOwnProperty('restConsumersUri'))
        obj.restConsumersUri = ApiClient.convertToType(data['restConsumersUri'], 'String');
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this REST Delivery Point's collection of Queue Binding objects.
 * @member {String} queueBindingsUri
 */
MsgVpnRestDeliveryPointLinksModel.prototype.queueBindingsUri = undefined;

/**
 * The URI of this REST Delivery Point's collection of REST Consumer objects.
 * @member {String} restConsumersUri
 */
MsgVpnRestDeliveryPointLinksModel.prototype.restConsumersUri = undefined;

/**
 * The URI of this REST Delivery Point object.
 * @member {String} uri
 */
MsgVpnRestDeliveryPointLinksModel.prototype.uri = undefined;

