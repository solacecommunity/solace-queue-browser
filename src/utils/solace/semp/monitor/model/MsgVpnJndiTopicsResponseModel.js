import {ApiClient} from '../ApiClient';
import {MsgVpnJndiTopicCollectionsModel} from './MsgVpnJndiTopicCollectionsModel';
import {MsgVpnJndiTopicLinksModel} from './MsgVpnJndiTopicLinksModel';
import {MsgVpnJndiTopicModel} from './MsgVpnJndiTopicModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnJndiTopicsResponseModel model module.
 * @module model/MsgVpnJndiTopicsResponseModel
 * @version 2.36
 */
export class MsgVpnJndiTopicsResponseModel {
  /**
   * Constructs a new <code>MsgVpnJndiTopicsResponseModel</code>.
   * @alias module:model/MsgVpnJndiTopicsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnJndiTopicsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnJndiTopicsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnJndiTopicsResponseModel} The populated <code>MsgVpnJndiTopicsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnJndiTopicsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnJndiTopicCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnJndiTopicModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnJndiTopicLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnJndiTopicCollectionsModel>} collections
 */
MsgVpnJndiTopicsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnJndiTopicModel>} data
 */
MsgVpnJndiTopicsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnJndiTopicLinksModel>} links
 */
MsgVpnJndiTopicsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnJndiTopicsResponseModel.prototype.meta = undefined;

