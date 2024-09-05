import {ApiClient} from '../ApiClient';
import {MsgVpnJndiTopicCollectionsModel} from './MsgVpnJndiTopicCollectionsModel';
import {MsgVpnJndiTopicLinksModel} from './MsgVpnJndiTopicLinksModel';
import {MsgVpnJndiTopicModel} from './MsgVpnJndiTopicModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnJndiTopicResponseModel model module.
 * @module model/MsgVpnJndiTopicResponseModel
 * @version 2.36
 */
export class MsgVpnJndiTopicResponseModel {
  /**
   * Constructs a new <code>MsgVpnJndiTopicResponseModel</code>.
   * @alias module:model/MsgVpnJndiTopicResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnJndiTopicResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnJndiTopicResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnJndiTopicResponseModel} The populated <code>MsgVpnJndiTopicResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnJndiTopicResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnJndiTopicCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnJndiTopicModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnJndiTopicLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnJndiTopicCollectionsModel} collections
 */
MsgVpnJndiTopicResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnJndiTopicModel} data
 */
MsgVpnJndiTopicResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnJndiTopicLinksModel} links
 */
MsgVpnJndiTopicResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnJndiTopicResponseModel.prototype.meta = undefined;

