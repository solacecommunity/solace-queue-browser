import {ApiClient} from '../ApiClient';
import {MsgVpnReplicatedTopicCollectionsModel} from './MsgVpnReplicatedTopicCollectionsModel';
import {MsgVpnReplicatedTopicLinksModel} from './MsgVpnReplicatedTopicLinksModel';
import {MsgVpnReplicatedTopicModel} from './MsgVpnReplicatedTopicModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnReplicatedTopicResponseModel model module.
 * @module model/MsgVpnReplicatedTopicResponseModel
 * @version 2.36
 */
export class MsgVpnReplicatedTopicResponseModel {
  /**
   * Constructs a new <code>MsgVpnReplicatedTopicResponseModel</code>.
   * @alias module:model/MsgVpnReplicatedTopicResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnReplicatedTopicResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnReplicatedTopicResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnReplicatedTopicResponseModel} The populated <code>MsgVpnReplicatedTopicResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnReplicatedTopicResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnReplicatedTopicCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnReplicatedTopicModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnReplicatedTopicLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnReplicatedTopicCollectionsModel} collections
 */
MsgVpnReplicatedTopicResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnReplicatedTopicModel} data
 */
MsgVpnReplicatedTopicResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnReplicatedTopicLinksModel} links
 */
MsgVpnReplicatedTopicResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnReplicatedTopicResponseModel.prototype.meta = undefined;

