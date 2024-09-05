import {ApiClient} from '../ApiClient';

/**
 * The BrokerCollectionsClientCertAuthoritiesModel model module.
 * @module model/BrokerCollectionsClientCertAuthoritiesModel
 * @version 2.36
 */
export class BrokerCollectionsClientCertAuthoritiesModel {
  /**
   * Constructs a new <code>BrokerCollectionsClientCertAuthoritiesModel</code>.
   * @alias module:model/BrokerCollectionsClientCertAuthoritiesModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BrokerCollectionsClientCertAuthoritiesModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BrokerCollectionsClientCertAuthoritiesModel} obj Optional instance to populate.
   * @return {module:model/BrokerCollectionsClientCertAuthoritiesModel} The populated <code>BrokerCollectionsClientCertAuthoritiesModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BrokerCollectionsClientCertAuthoritiesModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the clientCertAuthorities collection. Available since 2.19.
 * @member {Number} count
 */
BrokerCollectionsClientCertAuthoritiesModel.prototype.count = undefined;

