import {ApiClient} from '../ApiClient';

/**
 * The CertAuthorityOcspTlsTrustedCommonNameModel model module.
 * @module model/CertAuthorityOcspTlsTrustedCommonNameModel
 * @version 2.36
 */
export class CertAuthorityOcspTlsTrustedCommonNameModel {
  /**
   * Constructs a new <code>CertAuthorityOcspTlsTrustedCommonNameModel</code>.
   * @alias module:model/CertAuthorityOcspTlsTrustedCommonNameModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CertAuthorityOcspTlsTrustedCommonNameModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CertAuthorityOcspTlsTrustedCommonNameModel} obj Optional instance to populate.
   * @return {module:model/CertAuthorityOcspTlsTrustedCommonNameModel} The populated <code>CertAuthorityOcspTlsTrustedCommonNameModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CertAuthorityOcspTlsTrustedCommonNameModel();
      if (data.hasOwnProperty('certAuthorityName'))
        obj.certAuthorityName = ApiClient.convertToType(data['certAuthorityName'], 'String');
      if (data.hasOwnProperty('ocspTlsTrustedCommonName'))
        obj.ocspTlsTrustedCommonName = ApiClient.convertToType(data['ocspTlsTrustedCommonName'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the Certificate Authority. Deprecated since 2.19. Replaced by clientCertAuthorities.
 * @member {String} certAuthorityName
 */
CertAuthorityOcspTlsTrustedCommonNameModel.prototype.certAuthorityName = undefined;

/**
 * The expected Trusted Common Name of the OCSP responder remote certificate. Deprecated since 2.19. Replaced by clientCertAuthorities.
 * @member {String} ocspTlsTrustedCommonName
 */
CertAuthorityOcspTlsTrustedCommonNameModel.prototype.ocspTlsTrustedCommonName = undefined;

