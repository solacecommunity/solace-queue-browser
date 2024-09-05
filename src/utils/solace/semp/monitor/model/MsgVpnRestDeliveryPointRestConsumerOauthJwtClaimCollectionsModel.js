import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimCollectionsModel model module.
 * @module model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimCollectionsModel
 * @version 2.36
 */
export class MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimCollectionsModel</code>.
   * @alias module:model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimCollectionsModel} The populated <code>MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimCollectionsModel();
    }
    return obj;
  }
}
