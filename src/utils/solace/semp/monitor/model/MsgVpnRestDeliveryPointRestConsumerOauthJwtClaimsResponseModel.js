import {ApiClient} from '../ApiClient';
import {MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimCollectionsModel} from './MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimCollectionsModel';
import {MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimLinksModel} from './MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimLinksModel';
import {MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimModel} from './MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimsResponseModel model module.
 * @module model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimsResponseModel
 * @version 2.36
 */
export class MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimsResponseModel {
  /**
   * Constructs a new <code>MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimsResponseModel</code>.
   * @alias module:model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimsResponseModel} The populated <code>MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimCollectionsModel>} collections
 */
MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimModel>} data
 */
MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimLinksModel>} links
 */
MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimsResponseModel.prototype.meta = undefined;

