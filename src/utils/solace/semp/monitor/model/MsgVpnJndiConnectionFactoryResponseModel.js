import {ApiClient} from '../ApiClient';
import {MsgVpnJndiConnectionFactoryCollectionsModel} from './MsgVpnJndiConnectionFactoryCollectionsModel';
import {MsgVpnJndiConnectionFactoryLinksModel} from './MsgVpnJndiConnectionFactoryLinksModel';
import {MsgVpnJndiConnectionFactoryModel} from './MsgVpnJndiConnectionFactoryModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnJndiConnectionFactoryResponseModel model module.
 * @module model/MsgVpnJndiConnectionFactoryResponseModel
 * @version 2.36
 */
export class MsgVpnJndiConnectionFactoryResponseModel {
  /**
   * Constructs a new <code>MsgVpnJndiConnectionFactoryResponseModel</code>.
   * @alias module:model/MsgVpnJndiConnectionFactoryResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnJndiConnectionFactoryResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnJndiConnectionFactoryResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnJndiConnectionFactoryResponseModel} The populated <code>MsgVpnJndiConnectionFactoryResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnJndiConnectionFactoryResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnJndiConnectionFactoryCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnJndiConnectionFactoryModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnJndiConnectionFactoryLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnJndiConnectionFactoryCollectionsModel} collections
 */
MsgVpnJndiConnectionFactoryResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnJndiConnectionFactoryModel} data
 */
MsgVpnJndiConnectionFactoryResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnJndiConnectionFactoryLinksModel} links
 */
MsgVpnJndiConnectionFactoryResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnJndiConnectionFactoryResponseModel.prototype.meta = undefined;

