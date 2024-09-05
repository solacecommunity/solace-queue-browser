import {ApiClient} from '../ApiClient';

/**
 * The ClientCertAuthorityOcspTlsTrustedCommonNameLinksModel model module.
 * @module model/ClientCertAuthorityOcspTlsTrustedCommonNameLinksModel
 * @version 2.36
 */
export class ClientCertAuthorityOcspTlsTrustedCommonNameLinksModel {
  /**
   * Constructs a new <code>ClientCertAuthorityOcspTlsTrustedCommonNameLinksModel</code>.
   * @alias module:model/ClientCertAuthorityOcspTlsTrustedCommonNameLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ClientCertAuthorityOcspTlsTrustedCommonNameLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientCertAuthorityOcspTlsTrustedCommonNameLinksModel} obj Optional instance to populate.
   * @return {module:model/ClientCertAuthorityOcspTlsTrustedCommonNameLinksModel} The populated <code>ClientCertAuthorityOcspTlsTrustedCommonNameLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ClientCertAuthorityOcspTlsTrustedCommonNameLinksModel();
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
ClientCertAuthorityOcspTlsTrustedCommonNameLinksModel.prototype.uri = undefined;

