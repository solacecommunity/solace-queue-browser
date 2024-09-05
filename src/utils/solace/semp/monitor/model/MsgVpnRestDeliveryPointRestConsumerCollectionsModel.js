import {ApiClient} from '../ApiClient';
import {MsgVpnRestDeliveryPointRestConsumerCollectionsOauthJwtClaimsModel} from './MsgVpnRestDeliveryPointRestConsumerCollectionsOauthJwtClaimsModel';
import {MsgVpnRestDeliveryPointRestConsumerCollectionsTlsTrustedCommonNamesModel} from './MsgVpnRestDeliveryPointRestConsumerCollectionsTlsTrustedCommonNamesModel';

/**
 * The MsgVpnRestDeliveryPointRestConsumerCollectionsModel model module.
 * @module model/MsgVpnRestDeliveryPointRestConsumerCollectionsModel
 * @version 2.36
 */
export class MsgVpnRestDeliveryPointRestConsumerCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnRestDeliveryPointRestConsumerCollectionsModel</code>.
   * @alias module:model/MsgVpnRestDeliveryPointRestConsumerCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnRestDeliveryPointRestConsumerCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRestDeliveryPointRestConsumerCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRestDeliveryPointRestConsumerCollectionsModel} The populated <code>MsgVpnRestDeliveryPointRestConsumerCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRestDeliveryPointRestConsumerCollectionsModel();
      if (data.hasOwnProperty('oauthJwtClaims'))
        obj.oauthJwtClaims = MsgVpnRestDeliveryPointRestConsumerCollectionsOauthJwtClaimsModel.constructFromObject(data['oauthJwtClaims']);
      if (data.hasOwnProperty('tlsTrustedCommonNames'))
        obj.tlsTrustedCommonNames = MsgVpnRestDeliveryPointRestConsumerCollectionsTlsTrustedCommonNamesModel.constructFromObject(data['tlsTrustedCommonNames']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnRestDeliveryPointRestConsumerCollectionsOauthJwtClaimsModel} oauthJwtClaims
 */
MsgVpnRestDeliveryPointRestConsumerCollectionsModel.prototype.oauthJwtClaims = undefined;

/**
 * @member {module:model/MsgVpnRestDeliveryPointRestConsumerCollectionsTlsTrustedCommonNamesModel} tlsTrustedCommonNames
 */
MsgVpnRestDeliveryPointRestConsumerCollectionsModel.prototype.tlsTrustedCommonNames = undefined;

