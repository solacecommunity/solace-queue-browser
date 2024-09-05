import {ApiClient} from '../ApiClient';
import {MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameCollectionsModel} from './MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameCollectionsModel';
import {MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameLinksModel} from './MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameLinksModel';
import {MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameModel} from './MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameResponseModel model module.
 * @module model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameResponseModel
 * @version 2.36
 */
export class MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameResponseModel {
  /**
   * Constructs a new <code>MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameResponseModel</code>.
   * @alias module:model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameResponseModel} The populated <code>MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameCollectionsModel} collections
 */
MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameModel} data
 */
MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameLinksModel} links
 */
MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameResponseModel.prototype.meta = undefined;

