import {ApiClient} from '../ApiClient';
import {MsgVpnJndiQueueCollectionsModel} from './MsgVpnJndiQueueCollectionsModel';
import {MsgVpnJndiQueueLinksModel} from './MsgVpnJndiQueueLinksModel';
import {MsgVpnJndiQueueModel} from './MsgVpnJndiQueueModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnJndiQueueResponseModel model module.
 * @module model/MsgVpnJndiQueueResponseModel
 * @version 2.36
 */
export class MsgVpnJndiQueueResponseModel {
  /**
   * Constructs a new <code>MsgVpnJndiQueueResponseModel</code>.
   * @alias module:model/MsgVpnJndiQueueResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnJndiQueueResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnJndiQueueResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnJndiQueueResponseModel} The populated <code>MsgVpnJndiQueueResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnJndiQueueResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnJndiQueueCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnJndiQueueModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnJndiQueueLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnJndiQueueCollectionsModel} collections
 */
MsgVpnJndiQueueResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnJndiQueueModel} data
 */
MsgVpnJndiQueueResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnJndiQueueLinksModel} links
 */
MsgVpnJndiQueueResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnJndiQueueResponseModel.prototype.meta = undefined;

