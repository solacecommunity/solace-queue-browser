import {ApiClient} from '../ApiClient';
import {ConfigSyncLocalDatabaseRowCollectionsModel} from './ConfigSyncLocalDatabaseRowCollectionsModel';
import {ConfigSyncLocalDatabaseRowLinksModel} from './ConfigSyncLocalDatabaseRowLinksModel';
import {ConfigSyncLocalDatabaseRowModel} from './ConfigSyncLocalDatabaseRowModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The ConfigSyncLocalDatabaseRowResponseModel model module.
 * @module model/ConfigSyncLocalDatabaseRowResponseModel
 * @version 2.36
 */
export class ConfigSyncLocalDatabaseRowResponseModel {
  /**
   * Constructs a new <code>ConfigSyncLocalDatabaseRowResponseModel</code>.
   * @alias module:model/ConfigSyncLocalDatabaseRowResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>ConfigSyncLocalDatabaseRowResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConfigSyncLocalDatabaseRowResponseModel} obj Optional instance to populate.
   * @return {module:model/ConfigSyncLocalDatabaseRowResponseModel} The populated <code>ConfigSyncLocalDatabaseRowResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ConfigSyncLocalDatabaseRowResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ConfigSyncLocalDatabaseRowCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = ConfigSyncLocalDatabaseRowModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = ConfigSyncLocalDatabaseRowLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/ConfigSyncLocalDatabaseRowCollectionsModel} collections
 */
ConfigSyncLocalDatabaseRowResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/ConfigSyncLocalDatabaseRowModel} data
 */
ConfigSyncLocalDatabaseRowResponseModel.prototype.data = undefined;

/**
 * @member {module:model/ConfigSyncLocalDatabaseRowLinksModel} links
 */
ConfigSyncLocalDatabaseRowResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
ConfigSyncLocalDatabaseRowResponseModel.prototype.meta = undefined;

