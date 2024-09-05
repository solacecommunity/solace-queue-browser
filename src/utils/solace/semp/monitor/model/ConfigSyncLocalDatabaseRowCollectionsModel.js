import {ApiClient} from '../ApiClient';

/**
 * The ConfigSyncLocalDatabaseRowCollectionsModel model module.
 * @module model/ConfigSyncLocalDatabaseRowCollectionsModel
 * @version 2.36
 */
export class ConfigSyncLocalDatabaseRowCollectionsModel {
  /**
   * Constructs a new <code>ConfigSyncLocalDatabaseRowCollectionsModel</code>.
   * @alias module:model/ConfigSyncLocalDatabaseRowCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ConfigSyncLocalDatabaseRowCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConfigSyncLocalDatabaseRowCollectionsModel} obj Optional instance to populate.
   * @return {module:model/ConfigSyncLocalDatabaseRowCollectionsModel} The populated <code>ConfigSyncLocalDatabaseRowCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ConfigSyncLocalDatabaseRowCollectionsModel();
    }
    return obj;
  }
}
