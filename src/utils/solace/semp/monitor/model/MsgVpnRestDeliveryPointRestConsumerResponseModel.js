import {ApiClient} from '../ApiClient';
import {MsgVpnRestDeliveryPointRestConsumerCollectionsModel} from './MsgVpnRestDeliveryPointRestConsumerCollectionsModel';
import {MsgVpnRestDeliveryPointRestConsumerLinksModel} from './MsgVpnRestDeliveryPointRestConsumerLinksModel';
import {MsgVpnRestDeliveryPointRestConsumerModel} from './MsgVpnRestDeliveryPointRestConsumerModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnRestDeliveryPointRestConsumerResponseModel model module.
 * @module model/MsgVpnRestDeliveryPointRestConsumerResponseModel
 * @version 2.36
 */
export class MsgVpnRestDeliveryPointRestConsumerResponseModel {
  /**
   * Constructs a new <code>MsgVpnRestDeliveryPointRestConsumerResponseModel</code>.
   * @alias module:model/MsgVpnRestDeliveryPointRestConsumerResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnRestDeliveryPointRestConsumerResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRestDeliveryPointRestConsumerResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRestDeliveryPointRestConsumerResponseModel} The populated <code>MsgVpnRestDeliveryPointRestConsumerResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRestDeliveryPointRestConsumerResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnRestDeliveryPointRestConsumerCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnRestDeliveryPointRestConsumerModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnRestDeliveryPointRestConsumerLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnRestDeliveryPointRestConsumerCollectionsModel} collections
 */
MsgVpnRestDeliveryPointRestConsumerResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnRestDeliveryPointRestConsumerModel} data
 */
MsgVpnRestDeliveryPointRestConsumerResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnRestDeliveryPointRestConsumerLinksModel} links
 */
MsgVpnRestDeliveryPointRestConsumerResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnRestDeliveryPointRestConsumerResponseModel.prototype.meta = undefined;

