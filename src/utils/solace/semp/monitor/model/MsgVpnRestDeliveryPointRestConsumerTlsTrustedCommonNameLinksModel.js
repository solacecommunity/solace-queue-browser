import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameLinksModel model module.
 * @module model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameLinksModel
 * @version 2.36
 */
export class MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameLinksModel {
  /**
   * Constructs a new <code>MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameLinksModel</code>.
   * @alias module:model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameLinksModel} The populated <code>MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Trusted Common Name object.
 * @member {String} uri
 */
MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameLinksModel.prototype.uri = undefined;

