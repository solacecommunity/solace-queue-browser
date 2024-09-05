import {ApiClient} from '../ApiClient';

/**
 * The BrokerCollectionsConfigSyncLocalDatabaseRowsModel model module.
 * @module model/BrokerCollectionsConfigSyncLocalDatabaseRowsModel
 * @version 2.36
 */
export class BrokerCollectionsConfigSyncLocalDatabaseRowsModel {
  /**
   * Constructs a new <code>BrokerCollectionsConfigSyncLocalDatabaseRowsModel</code>.
   * @alias module:model/BrokerCollectionsConfigSyncLocalDatabaseRowsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BrokerCollectionsConfigSyncLocalDatabaseRowsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BrokerCollectionsConfigSyncLocalDatabaseRowsModel} obj Optional instance to populate.
   * @return {module:model/BrokerCollectionsConfigSyncLocalDatabaseRowsModel} The populated <code>BrokerCollectionsConfigSyncLocalDatabaseRowsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BrokerCollectionsConfigSyncLocalDatabaseRowsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the configSyncLocalDatabaseRows collection. Available since 2.22.
 * @member {Number} count
 */
BrokerCollectionsConfigSyncLocalDatabaseRowsModel.prototype.count = undefined;

