import {ApiClient} from '../ApiClient';

/**
 * The ClientCertAuthorityOcspTlsTrustedCommonNameModel model module.
 * @module model/ClientCertAuthorityOcspTlsTrustedCommonNameModel
 * @version 2.36
 */
export class ClientCertAuthorityOcspTlsTrustedCommonNameModel {
  /**
   * Constructs a new <code>ClientCertAuthorityOcspTlsTrustedCommonNameModel</code>.
   * @alias module:model/ClientCertAuthorityOcspTlsTrustedCommonNameModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ClientCertAuthorityOcspTlsTrustedCommonNameModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientCertAuthorityOcspTlsTrustedCommonNameModel} obj Optional instance to populate.
   * @return {module:model/ClientCertAuthorityOcspTlsTrustedCommonNameModel} The populated <code>ClientCertAuthorityOcspTlsTrustedCommonNameModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ClientCertAuthorityOcspTlsTrustedCommonNameModel();
      if (data.hasOwnProperty('certAuthorityName'))
        obj.certAuthorityName = ApiClient.convertToType(data['certAuthorityName'], 'String');
      if (data.hasOwnProperty('ocspTlsTrustedCommonName'))
        obj.ocspTlsTrustedCommonName = ApiClient.convertToType(data['ocspTlsTrustedCommonName'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the Certificate Authority.
 * @member {String} certAuthorityName
 */
ClientCertAuthorityOcspTlsTrustedCommonNameModel.prototype.certAuthorityName = undefined;

/**
 * The expected Trusted Common Name of the OCSP responder remote certificate.
 * @member {String} ocspTlsTrustedCommonName
 */
ClientCertAuthorityOcspTlsTrustedCommonNameModel.prototype.ocspTlsTrustedCommonName = undefined;

