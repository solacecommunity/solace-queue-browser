import {ApiClient} from '../ApiClient';

/**
 * The BrokerCollectionsStandardDomainCertAuthoritiesModel model module.
 * @module model/BrokerCollectionsStandardDomainCertAuthoritiesModel
 * @version 2.36
 */
export class BrokerCollectionsStandardDomainCertAuthoritiesModel {
  /**
   * Constructs a new <code>BrokerCollectionsStandardDomainCertAuthoritiesModel</code>.
   * @alias module:model/BrokerCollectionsStandardDomainCertAuthoritiesModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BrokerCollectionsStandardDomainCertAuthoritiesModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BrokerCollectionsStandardDomainCertAuthoritiesModel} obj Optional instance to populate.
   * @return {module:model/BrokerCollectionsStandardDomainCertAuthoritiesModel} The populated <code>BrokerCollectionsStandardDomainCertAuthoritiesModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BrokerCollectionsStandardDomainCertAuthoritiesModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the standardDomainCertAuthorities collection. Available since 2.19.
 * @member {Number} count
 */
BrokerCollectionsStandardDomainCertAuthoritiesModel.prototype.count = undefined;

