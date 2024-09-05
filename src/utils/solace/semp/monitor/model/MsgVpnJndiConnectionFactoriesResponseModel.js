import {ApiClient} from '../ApiClient';
import {MsgVpnJndiConnectionFactoryCollectionsModel} from './MsgVpnJndiConnectionFactoryCollectionsModel';
import {MsgVpnJndiConnectionFactoryLinksModel} from './MsgVpnJndiConnectionFactoryLinksModel';
import {MsgVpnJndiConnectionFactoryModel} from './MsgVpnJndiConnectionFactoryModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnJndiConnectionFactoriesResponseModel model module.
 * @module model/MsgVpnJndiConnectionFactoriesResponseModel
 * @version 2.36
 */
export class MsgVpnJndiConnectionFactoriesResponseModel {
  /**
   * Constructs a new <code>MsgVpnJndiConnectionFactoriesResponseModel</code>.
   * @alias module:model/MsgVpnJndiConnectionFactoriesResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnJndiConnectionFactoriesResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnJndiConnectionFactoriesResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnJndiConnectionFactoriesResponseModel} The populated <code>MsgVpnJndiConnectionFactoriesResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnJndiConnectionFactoriesResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnJndiConnectionFactoryCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnJndiConnectionFactoryModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnJndiConnectionFactoryLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnJndiConnectionFactoryCollectionsModel>} collections
 */
MsgVpnJndiConnectionFactoriesResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnJndiConnectionFactoryModel>} data
 */
MsgVpnJndiConnectionFactoriesResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnJndiConnectionFactoryLinksModel>} links
 */
MsgVpnJndiConnectionFactoriesResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnJndiConnectionFactoriesResponseModel.prototype.meta = undefined;

