import {ApiClient} from '../ApiClient';
import {ConfigSyncLocalDatabaseRowCollectionsModel} from './ConfigSyncLocalDatabaseRowCollectionsModel';
import {ConfigSyncLocalDatabaseRowLinksModel} from './ConfigSyncLocalDatabaseRowLinksModel';
import {ConfigSyncLocalDatabaseRowModel} from './ConfigSyncLocalDatabaseRowModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The ConfigSyncLocalDatabaseRowsResponseModel model module.
 * @module model/ConfigSyncLocalDatabaseRowsResponseModel
 * @version 2.36
 */
export class ConfigSyncLocalDatabaseRowsResponseModel {
  /**
   * Constructs a new <code>ConfigSyncLocalDatabaseRowsResponseModel</code>.
   * @alias module:model/ConfigSyncLocalDatabaseRowsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>ConfigSyncLocalDatabaseRowsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConfigSyncLocalDatabaseRowsResponseModel} obj Optional instance to populate.
   * @return {module:model/ConfigSyncLocalDatabaseRowsResponseModel} The populated <code>ConfigSyncLocalDatabaseRowsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ConfigSyncLocalDatabaseRowsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [ConfigSyncLocalDatabaseRowCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [ConfigSyncLocalDatabaseRowModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [ConfigSyncLocalDatabaseRowLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/ConfigSyncLocalDatabaseRowCollectionsModel>} collections
 */
ConfigSyncLocalDatabaseRowsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/ConfigSyncLocalDatabaseRowModel>} data
 */
ConfigSyncLocalDatabaseRowsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/ConfigSyncLocalDatabaseRowLinksModel>} links
 */
ConfigSyncLocalDatabaseRowsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
ConfigSyncLocalDatabaseRowsResponseModel.prototype.meta = undefined;

