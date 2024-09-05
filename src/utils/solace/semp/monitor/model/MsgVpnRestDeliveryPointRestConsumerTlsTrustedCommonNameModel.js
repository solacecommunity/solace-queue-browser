import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameModel model module.
 * @module model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameModel
 * @version 2.36
 */
export class MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameModel {
  /**
   * Constructs a new <code>MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameModel</code>.
   * @alias module:model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameModel} The populated <code>MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameModel();
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('restConsumerName'))
        obj.restConsumerName = ApiClient.convertToType(data['restConsumerName'], 'String');
      if (data.hasOwnProperty('restDeliveryPointName'))
        obj.restDeliveryPointName = ApiClient.convertToType(data['restDeliveryPointName'], 'String');
      if (data.hasOwnProperty('tlsTrustedCommonName'))
        obj.tlsTrustedCommonName = ApiClient.convertToType(data['tlsTrustedCommonName'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the Message VPN. Deprecated since 2.17. Common Name validation has been replaced by Server Certificate Name validation.
 * @member {String} msgVpnName
 */
MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameModel.prototype.msgVpnName = undefined;

/**
 * The name of the REST Consumer. Deprecated since 2.17. Common Name validation has been replaced by Server Certificate Name validation.
 * @member {String} restConsumerName
 */
MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameModel.prototype.restConsumerName = undefined;

/**
 * The name of the REST Delivery Point. Deprecated since 2.17. Common Name validation has been replaced by Server Certificate Name validation.
 * @member {String} restDeliveryPointName
 */
MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameModel.prototype.restDeliveryPointName = undefined;

/**
 * The expected trusted common name of the remote certificate. Deprecated since 2.17. Common Name validation has been replaced by Server Certificate Name validation.
 * @member {String} tlsTrustedCommonName
 */
MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameModel.prototype.tlsTrustedCommonName = undefined;

