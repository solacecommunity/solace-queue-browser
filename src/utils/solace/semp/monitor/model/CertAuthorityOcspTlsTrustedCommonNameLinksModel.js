import {ApiClient} from '../ApiClient';

/**
 * The CertAuthorityOcspTlsTrustedCommonNameLinksModel model module.
 * @module model/CertAuthorityOcspTlsTrustedCommonNameLinksModel
 * @version 2.36
 */
export class CertAuthorityOcspTlsTrustedCommonNameLinksModel {
  /**
   * Constructs a new <code>CertAuthorityOcspTlsTrustedCommonNameLinksModel</code>.
   * @alias module:model/CertAuthorityOcspTlsTrustedCommonNameLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CertAuthorityOcspTlsTrustedCommonNameLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CertAuthorityOcspTlsTrustedCommonNameLinksModel} obj Optional instance to populate.
   * @return {module:model/CertAuthorityOcspTlsTrustedCommonNameLinksModel} The populated <code>CertAuthorityOcspTlsTrustedCommonNameLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CertAuthorityOcspTlsTrustedCommonNameLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this OCSP Responder Trusted Common Name object.
 * @member {String} uri
 */
CertAuthorityOcspTlsTrustedCommonNameLinksModel.prototype.uri = undefined;

