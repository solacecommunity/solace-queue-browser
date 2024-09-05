import {ApiClient} from '../ApiClient';
import {MsgVpnJndiQueueCollectionsModel} from './MsgVpnJndiQueueCollectionsModel';
import {MsgVpnJndiQueueLinksModel} from './MsgVpnJndiQueueLinksModel';
import {MsgVpnJndiQueueModel} from './MsgVpnJndiQueueModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnJndiQueuesResponseModel model module.
 * @module model/MsgVpnJndiQueuesResponseModel
 * @version 2.36
 */
export class MsgVpnJndiQueuesResponseModel {
  /**
   * Constructs a new <code>MsgVpnJndiQueuesResponseModel</code>.
   * @alias module:model/MsgVpnJndiQueuesResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnJndiQueuesResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnJndiQueuesResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnJndiQueuesResponseModel} The populated <code>MsgVpnJndiQueuesResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnJndiQueuesResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnJndiQueueCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnJndiQueueModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnJndiQueueLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnJndiQueueCollectionsModel>} collections
 */
MsgVpnJndiQueuesResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnJndiQueueModel>} data
 */
MsgVpnJndiQueuesResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnJndiQueueLinksModel>} links
 */
MsgVpnJndiQueuesResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnJndiQueuesResponseModel.prototype.meta = undefined;

