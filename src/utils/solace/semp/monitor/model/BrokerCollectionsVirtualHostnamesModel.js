import {ApiClient} from '../ApiClient';

/**
 * The BrokerCollectionsVirtualHostnamesModel model module.
 * @module model/BrokerCollectionsVirtualHostnamesModel
 * @version 2.36
 */
export class BrokerCollectionsVirtualHostnamesModel {
  /**
   * Constructs a new <code>BrokerCollectionsVirtualHostnamesModel</code>.
   * @alias module:model/BrokerCollectionsVirtualHostnamesModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BrokerCollectionsVirtualHostnamesModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BrokerCollectionsVirtualHostnamesModel} obj Optional instance to populate.
   * @return {module:model/BrokerCollectionsVirtualHostnamesModel} The populated <code>BrokerCollectionsVirtualHostnamesModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BrokerCollectionsVirtualHostnamesModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the virtualHostnames collection. Available since 2.17.
 * @member {Number} count
 */
BrokerCollectionsVirtualHostnamesModel.prototype.count = undefined;

