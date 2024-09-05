import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnRestDeliveryPointRestConsumerLinksModel model module.
 * @module model/MsgVpnRestDeliveryPointRestConsumerLinksModel
 * @version 2.36
 */
export class MsgVpnRestDeliveryPointRestConsumerLinksModel {
  /**
   * Constructs a new <code>MsgVpnRestDeliveryPointRestConsumerLinksModel</code>.
   * @alias module:model/MsgVpnRestDeliveryPointRestConsumerLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnRestDeliveryPointRestConsumerLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRestDeliveryPointRestConsumerLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRestDeliveryPointRestConsumerLinksModel} The populated <code>MsgVpnRestDeliveryPointRestConsumerLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRestDeliveryPointRestConsumerLinksModel();
      if (data.hasOwnProperty('oauthJwtClaimsUri'))
        obj.oauthJwtClaimsUri = ApiClient.convertToType(data['oauthJwtClaimsUri'], 'String');
      if (data.hasOwnProperty('tlsTrustedCommonNamesUri'))
        obj.tlsTrustedCommonNamesUri = ApiClient.convertToType(data['tlsTrustedCommonNamesUri'], 'String');
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this REST Consumer's collection of Claim objects. Available since 2.21.
 * @member {String} oauthJwtClaimsUri
 */
MsgVpnRestDeliveryPointRestConsumerLinksModel.prototype.oauthJwtClaimsUri = undefined;

/**
 * The URI of this REST Consumer's collection of Trusted Common Name objects. Deprecated since 2.17. Common Name validation has been replaced by Server Certificate Name validation.
 * @member {String} tlsTrustedCommonNamesUri
 */
MsgVpnRestDeliveryPointRestConsumerLinksModel.prototype.tlsTrustedCommonNamesUri = undefined;

/**
 * The URI of this REST Consumer object.
 * @member {String} uri
 */
MsgVpnRestDeliveryPointRestConsumerLinksModel.prototype.uri = undefined;

