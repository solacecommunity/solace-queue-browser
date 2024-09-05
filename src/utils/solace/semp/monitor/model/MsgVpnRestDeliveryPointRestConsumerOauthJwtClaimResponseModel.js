import {ApiClient} from '../ApiClient';
import {MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimCollectionsModel} from './MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimCollectionsModel';
import {MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimLinksModel} from './MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimLinksModel';
import {MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimModel} from './MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimResponseModel model module.
 * @module model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimResponseModel
 * @version 2.36
 */
export class MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimResponseModel {
  /**
   * Constructs a new <code>MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimResponseModel</code>.
   * @alias module:model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimResponseModel} The populated <code>MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimCollectionsModel} collections
 */
MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimModel} data
 */
MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimLinksModel} links
 */
MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimResponseModel.prototype.meta = undefined;

