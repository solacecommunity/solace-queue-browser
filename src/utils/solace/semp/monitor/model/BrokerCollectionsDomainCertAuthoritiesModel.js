import {ApiClient} from '../ApiClient';

/**
 * The BrokerCollectionsDomainCertAuthoritiesModel model module.
 * @module model/BrokerCollectionsDomainCertAuthoritiesModel
 * @version 2.36
 */
export class BrokerCollectionsDomainCertAuthoritiesModel {
  /**
   * Constructs a new <code>BrokerCollectionsDomainCertAuthoritiesModel</code>.
   * @alias module:model/BrokerCollectionsDomainCertAuthoritiesModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BrokerCollectionsDomainCertAuthoritiesModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BrokerCollectionsDomainCertAuthoritiesModel} obj Optional instance to populate.
   * @return {module:model/BrokerCollectionsDomainCertAuthoritiesModel} The populated <code>BrokerCollectionsDomainCertAuthoritiesModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BrokerCollectionsDomainCertAuthoritiesModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the domainCertAuthorities collection. Available since 2.19.
 * @member {Number} count
 */
BrokerCollectionsDomainCertAuthoritiesModel.prototype.count = undefined;

