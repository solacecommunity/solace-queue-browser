import {ApiClient} from '../ApiClient';
import {MsgVpnClientSubscriptionCollectionsModel} from './MsgVpnClientSubscriptionCollectionsModel';
import {MsgVpnClientSubscriptionLinksModel} from './MsgVpnClientSubscriptionLinksModel';
import {MsgVpnClientSubscriptionModel} from './MsgVpnClientSubscriptionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnClientSubscriptionResponseModel model module.
 * @module model/MsgVpnClientSubscriptionResponseModel
 * @version 2.36
 */
export class MsgVpnClientSubscriptionResponseModel {
  /**
   * Constructs a new <code>MsgVpnClientSubscriptionResponseModel</code>.
   * @alias module:model/MsgVpnClientSubscriptionResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnClientSubscriptionResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientSubscriptionResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientSubscriptionResponseModel} The populated <code>MsgVpnClientSubscriptionResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientSubscriptionResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnClientSubscriptionCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnClientSubscriptionModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnClientSubscriptionLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnClientSubscriptionCollectionsModel} collections
 */
MsgVpnClientSubscriptionResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnClientSubscriptionModel} data
 */
MsgVpnClientSubscriptionResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnClientSubscriptionLinksModel} links
 */
MsgVpnClientSubscriptionResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnClientSubscriptionResponseModel.prototype.meta = undefined;

