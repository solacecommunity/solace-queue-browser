import {ApiClient} from '../ApiClient';

/**
 * The BrokerCollectionsDmrClustersModel model module.
 * @module model/BrokerCollectionsDmrClustersModel
 * @version 2.36
 */
export class BrokerCollectionsDmrClustersModel {
  /**
   * Constructs a new <code>BrokerCollectionsDmrClustersModel</code>.
   * @alias module:model/BrokerCollectionsDmrClustersModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BrokerCollectionsDmrClustersModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BrokerCollectionsDmrClustersModel} obj Optional instance to populate.
   * @return {module:model/BrokerCollectionsDmrClustersModel} The populated <code>BrokerCollectionsDmrClustersModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BrokerCollectionsDmrClustersModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the dmrClusters collection. Available since 2.11.
 * @member {Number} count
 */
BrokerCollectionsDmrClustersModel.prototype.count = undefined;

