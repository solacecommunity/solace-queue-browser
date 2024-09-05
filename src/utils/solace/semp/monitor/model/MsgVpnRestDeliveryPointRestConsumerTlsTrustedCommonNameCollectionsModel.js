import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameCollectionsModel model module.
 * @module model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameCollectionsModel
 * @version 2.36
 */
export class MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameCollectionsModel</code>.
   * @alias module:model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameCollectionsModel} The populated <code>MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameCollectionsModel();
    }
    return obj;
  }
}
