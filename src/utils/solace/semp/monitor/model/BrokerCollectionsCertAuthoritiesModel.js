import {ApiClient} from '../ApiClient';

/**
 * The BrokerCollectionsCertAuthoritiesModel model module.
 * @module model/BrokerCollectionsCertAuthoritiesModel
 * @version 2.36
 */
export class BrokerCollectionsCertAuthoritiesModel {
  /**
   * Constructs a new <code>BrokerCollectionsCertAuthoritiesModel</code>.
   * @alias module:model/BrokerCollectionsCertAuthoritiesModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BrokerCollectionsCertAuthoritiesModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BrokerCollectionsCertAuthoritiesModel} obj Optional instance to populate.
   * @return {module:model/BrokerCollectionsCertAuthoritiesModel} The populated <code>BrokerCollectionsCertAuthoritiesModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BrokerCollectionsCertAuthoritiesModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the certAuthorities collection. Deprecated since 2.19. Replaced by clientCertAuthorities and domainCertAuthorities.
 * @member {Number} count
 */
BrokerCollectionsCertAuthoritiesModel.prototype.count = undefined;

