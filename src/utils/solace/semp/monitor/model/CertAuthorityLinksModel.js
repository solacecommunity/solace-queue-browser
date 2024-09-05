import {ApiClient} from '../ApiClient';

/**
 * The CertAuthorityLinksModel model module.
 * @module model/CertAuthorityLinksModel
 * @version 2.36
 */
export class CertAuthorityLinksModel {
  /**
   * Constructs a new <code>CertAuthorityLinksModel</code>.
   * @alias module:model/CertAuthorityLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CertAuthorityLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CertAuthorityLinksModel} obj Optional instance to populate.
   * @return {module:model/CertAuthorityLinksModel} The populated <code>CertAuthorityLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CertAuthorityLinksModel();
      if (data.hasOwnProperty('ocspTlsTrustedCommonNamesUri'))
        obj.ocspTlsTrustedCommonNamesUri = ApiClient.convertToType(data['ocspTlsTrustedCommonNamesUri'], 'String');
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Certificate Authority's collection of OCSP Responder Trusted Common Name objects. Deprecated since 2.19. Replaced by clientCertAuthorities.
 * @member {String} ocspTlsTrustedCommonNamesUri
 */
CertAuthorityLinksModel.prototype.ocspTlsTrustedCommonNamesUri = undefined;

/**
 * The URI of this Certificate Authority object.
 * @member {String} uri
 */
CertAuthorityLinksModel.prototype.uri = undefined;

