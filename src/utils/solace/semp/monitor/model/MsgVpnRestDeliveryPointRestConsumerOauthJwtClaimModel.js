import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimModel model module.
 * @module model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimModel
 * @version 2.36
 */
export class MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimModel {
  /**
   * Constructs a new <code>MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimModel</code>.
   * @alias module:model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimModel} The populated <code>MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimModel();
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('oauthJwtClaimName'))
        obj.oauthJwtClaimName = ApiClient.convertToType(data['oauthJwtClaimName'], 'String');
      if (data.hasOwnProperty('oauthJwtClaimValue'))
        obj.oauthJwtClaimValue = ApiClient.convertToType(data['oauthJwtClaimValue'], 'String');
      if (data.hasOwnProperty('restConsumerName'))
        obj.restConsumerName = ApiClient.convertToType(data['restConsumerName'], 'String');
      if (data.hasOwnProperty('restDeliveryPointName'))
        obj.restDeliveryPointName = ApiClient.convertToType(data['restDeliveryPointName'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimModel.prototype.msgVpnName = undefined;

/**
 * The name of the additional claim. Cannot be \"exp\", \"iat\", or \"jti\".
 * @member {String} oauthJwtClaimName
 */
MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimModel.prototype.oauthJwtClaimName = undefined;

/**
 * The value of the additional claim, which must be a string containing a valid JSON value.
 * @member {String} oauthJwtClaimValue
 */
MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimModel.prototype.oauthJwtClaimValue = undefined;

/**
 * The name of the REST Consumer.
 * @member {String} restConsumerName
 */
MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimModel.prototype.restConsumerName = undefined;

/**
 * The name of the REST Delivery Point.
 * @member {String} restDeliveryPointName
 */
MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimModel.prototype.restDeliveryPointName = undefined;

