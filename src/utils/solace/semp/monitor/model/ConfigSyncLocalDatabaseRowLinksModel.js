import {ApiClient} from '../ApiClient';

/**
 * The ConfigSyncLocalDatabaseRowLinksModel model module.
 * @module model/ConfigSyncLocalDatabaseRowLinksModel
 * @version 2.36
 */
export class ConfigSyncLocalDatabaseRowLinksModel {
  /**
   * Constructs a new <code>ConfigSyncLocalDatabaseRowLinksModel</code>.
   * @alias module:model/ConfigSyncLocalDatabaseRowLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ConfigSyncLocalDatabaseRowLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConfigSyncLocalDatabaseRowLinksModel} obj Optional instance to populate.
   * @return {module:model/ConfigSyncLocalDatabaseRowLinksModel} The populated <code>ConfigSyncLocalDatabaseRowLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ConfigSyncLocalDatabaseRowLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Config Sync Local Database object.
 * @member {String} uri
 */
ConfigSyncLocalDatabaseRowLinksModel.prototype.uri = undefined;

