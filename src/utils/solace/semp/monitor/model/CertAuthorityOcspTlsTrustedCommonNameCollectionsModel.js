import {ApiClient} from '../ApiClient';

/**
 * The CertAuthorityOcspTlsTrustedCommonNameCollectionsModel model module.
 * @module model/CertAuthorityOcspTlsTrustedCommonNameCollectionsModel
 * @version 2.36
 */
export class CertAuthorityOcspTlsTrustedCommonNameCollectionsModel {
  /**
   * Constructs a new <code>CertAuthorityOcspTlsTrustedCommonNameCollectionsModel</code>.
   * @alias module:model/CertAuthorityOcspTlsTrustedCommonNameCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CertAuthorityOcspTlsTrustedCommonNameCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CertAuthorityOcspTlsTrustedCommonNameCollectionsModel} obj Optional instance to populate.
   * @return {module:model/CertAuthorityOcspTlsTrustedCommonNameCollectionsModel} The populated <code>CertAuthorityOcspTlsTrustedCommonNameCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CertAuthorityOcspTlsTrustedCommonNameCollectionsModel();
    }
    return obj;
  }
}
