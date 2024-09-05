import {ApiClient} from '../ApiClient';
import {MsgVpnQueueCollectionsModel} from './MsgVpnQueueCollectionsModel';
import {MsgVpnQueueLinksModel} from './MsgVpnQueueLinksModel';
import {MsgVpnQueueModel} from './MsgVpnQueueModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnQueueResponseModel model module.
 * @module model/MsgVpnQueueResponseModel
 * @version 2.36
 */
export class MsgVpnQueueResponseModel {
  /**
   * Constructs a new <code>MsgVpnQueueResponseModel</code>.
   * @alias module:model/MsgVpnQueueResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnQueueResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnQueueResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnQueueResponseModel} The populated <code>MsgVpnQueueResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnQueueResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnQueueCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnQueueModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnQueueLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnQueueCollectionsModel} collections
 */
MsgVpnQueueResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnQueueModel} data
 */
MsgVpnQueueResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnQueueLinksModel} links
 */
MsgVpnQueueResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnQueueResponseModel.prototype.meta = undefined;

