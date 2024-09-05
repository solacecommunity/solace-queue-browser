import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimLinksModel model module.
 * @module model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimLinksModel
 * @version 2.36
 */
export class MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimLinksModel {
  /**
   * Constructs a new <code>MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimLinksModel</code>.
   * @alias module:model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimLinksModel} The populated <code>MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Claim object.
 * @member {String} uri
 */
MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimLinksModel.prototype.uri = undefined;

