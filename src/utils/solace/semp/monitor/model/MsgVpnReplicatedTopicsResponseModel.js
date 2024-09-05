import {ApiClient} from '../ApiClient';
import {MsgVpnReplicatedTopicCollectionsModel} from './MsgVpnReplicatedTopicCollectionsModel';
import {MsgVpnReplicatedTopicLinksModel} from './MsgVpnReplicatedTopicLinksModel';
import {MsgVpnReplicatedTopicModel} from './MsgVpnReplicatedTopicModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnReplicatedTopicsResponseModel model module.
 * @module model/MsgVpnReplicatedTopicsResponseModel
 * @version 2.36
 */
export class MsgVpnReplicatedTopicsResponseModel {
  /**
   * Constructs a new <code>MsgVpnReplicatedTopicsResponseModel</code>.
   * @alias module:model/MsgVpnReplicatedTopicsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnReplicatedTopicsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnReplicatedTopicsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnReplicatedTopicsResponseModel} The populated <code>MsgVpnReplicatedTopicsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnReplicatedTopicsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnReplicatedTopicCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnReplicatedTopicModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnReplicatedTopicLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnReplicatedTopicCollectionsModel>} collections
 */
MsgVpnReplicatedTopicsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnReplicatedTopicModel>} data
 */
MsgVpnReplicatedTopicsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnReplicatedTopicLinksModel>} links
 */
MsgVpnReplicatedTopicsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnReplicatedTopicsResponseModel.prototype.meta = undefined;

