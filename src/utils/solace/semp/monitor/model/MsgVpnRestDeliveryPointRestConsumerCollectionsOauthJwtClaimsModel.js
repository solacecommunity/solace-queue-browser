import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnRestDeliveryPointRestConsumerCollectionsOauthJwtClaimsModel model module.
 * @module model/MsgVpnRestDeliveryPointRestConsumerCollectionsOauthJwtClaimsModel
 * @version 2.36
 */
export class MsgVpnRestDeliveryPointRestConsumerCollectionsOauthJwtClaimsModel {
  /**
   * Constructs a new <code>MsgVpnRestDeliveryPointRestConsumerCollectionsOauthJwtClaimsModel</code>.
   * @alias module:model/MsgVpnRestDeliveryPointRestConsumerCollectionsOauthJwtClaimsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnRestDeliveryPointRestConsumerCollectionsOauthJwtClaimsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRestDeliveryPointRestConsumerCollectionsOauthJwtClaimsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRestDeliveryPointRestConsumerCollectionsOauthJwtClaimsModel} The populated <code>MsgVpnRestDeliveryPointRestConsumerCollectionsOauthJwtClaimsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRestDeliveryPointRestConsumerCollectionsOauthJwtClaimsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the oauthJwtClaims collection. Available since 2.21.
 * @member {Number} count
 */
MsgVpnRestDeliveryPointRestConsumerCollectionsOauthJwtClaimsModel.prototype.count = undefined;

