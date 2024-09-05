import {ApiClient} from '../ApiClient';

/**
 * The BrokerCollectionsMsgVpnsModel model module.
 * @module model/BrokerCollectionsMsgVpnsModel
 * @version 2.36
 */
export class BrokerCollectionsMsgVpnsModel {
  /**
   * Constructs a new <code>BrokerCollectionsMsgVpnsModel</code>.
   * @alias module:model/BrokerCollectionsMsgVpnsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BrokerCollectionsMsgVpnsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BrokerCollectionsMsgVpnsModel} obj Optional instance to populate.
   * @return {module:model/BrokerCollectionsMsgVpnsModel} The populated <code>BrokerCollectionsMsgVpnsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BrokerCollectionsMsgVpnsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the msgVpns collection. Available since 2.11.
 * @member {Number} count
 */
BrokerCollectionsMsgVpnsModel.prototype.count = undefined;

