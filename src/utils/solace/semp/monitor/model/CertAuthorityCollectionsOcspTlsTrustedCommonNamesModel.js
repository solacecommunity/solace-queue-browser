import {ApiClient} from '../ApiClient';

/**
 * The CertAuthorityCollectionsOcspTlsTrustedCommonNamesModel model module.
 * @module model/CertAuthorityCollectionsOcspTlsTrustedCommonNamesModel
 * @version 2.36
 */
export class CertAuthorityCollectionsOcspTlsTrustedCommonNamesModel {
  /**
   * Constructs a new <code>CertAuthorityCollectionsOcspTlsTrustedCommonNamesModel</code>.
   * @alias module:model/CertAuthorityCollectionsOcspTlsTrustedCommonNamesModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CertAuthorityCollectionsOcspTlsTrustedCommonNamesModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CertAuthorityCollectionsOcspTlsTrustedCommonNamesModel} obj Optional instance to populate.
   * @return {module:model/CertAuthorityCollectionsOcspTlsTrustedCommonNamesModel} The populated <code>CertAuthorityCollectionsOcspTlsTrustedCommonNamesModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CertAuthorityCollectionsOcspTlsTrustedCommonNamesModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the ocspTlsTrustedCommonNames collection. Deprecated since 2.19. Replaced by clientCertAuthorities.
 * @member {Number} count
 */
CertAuthorityCollectionsOcspTlsTrustedCommonNamesModel.prototype.count = undefined;

