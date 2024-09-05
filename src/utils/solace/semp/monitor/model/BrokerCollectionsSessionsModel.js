import {ApiClient} from '../ApiClient';

/**
 * The BrokerCollectionsSessionsModel model module.
 * @module model/BrokerCollectionsSessionsModel
 * @version 2.36
 */
export class BrokerCollectionsSessionsModel {
  /**
   * Constructs a new <code>BrokerCollectionsSessionsModel</code>.
   * @alias module:model/BrokerCollectionsSessionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BrokerCollectionsSessionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BrokerCollectionsSessionsModel} obj Optional instance to populate.
   * @return {module:model/BrokerCollectionsSessionsModel} The populated <code>BrokerCollectionsSessionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BrokerCollectionsSessionsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the sessions collection. Available since 2.21.
 * @member {Number} count
 */
BrokerCollectionsSessionsModel.prototype.count = undefined;

