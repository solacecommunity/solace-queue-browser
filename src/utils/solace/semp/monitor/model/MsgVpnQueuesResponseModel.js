import {ApiClient} from '../ApiClient';
import {MsgVpnQueueCollectionsModel} from './MsgVpnQueueCollectionsModel';
import {MsgVpnQueueLinksModel} from './MsgVpnQueueLinksModel';
import {MsgVpnQueueModel} from './MsgVpnQueueModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnQueuesResponseModel model module.
 * @module model/MsgVpnQueuesResponseModel
 * @version 2.36
 */
export class MsgVpnQueuesResponseModel {
  /**
   * Constructs a new <code>MsgVpnQueuesResponseModel</code>.
   * @alias module:model/MsgVpnQueuesResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnQueuesResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnQueuesResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnQueuesResponseModel} The populated <code>MsgVpnQueuesResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnQueuesResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnQueueCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnQueueModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnQueueLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnQueueCollectionsModel>} collections
 */
MsgVpnQueuesResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnQueueModel>} data
 */
MsgVpnQueuesResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnQueueLinksModel>} links
 */
MsgVpnQueuesResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnQueuesResponseModel.prototype.meta = undefined;

