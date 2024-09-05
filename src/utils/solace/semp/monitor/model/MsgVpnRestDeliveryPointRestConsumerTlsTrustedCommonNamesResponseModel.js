import {ApiClient} from '../ApiClient';
import {MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameCollectionsModel} from './MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameCollectionsModel';
import {MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameLinksModel} from './MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameLinksModel';
import {MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameModel} from './MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNamesResponseModel model module.
 * @module model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNamesResponseModel
 * @version 2.36
 */
export class MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNamesResponseModel {
  /**
   * Constructs a new <code>MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNamesResponseModel</code>.
   * @alias module:model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNamesResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNamesResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNamesResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNamesResponseModel} The populated <code>MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNamesResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNamesResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameCollectionsModel>} collections
 */
MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNamesResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameModel>} data
 */
MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNamesResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameLinksModel>} links
 */
MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNamesResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNamesResponseModel.prototype.meta = undefined;

