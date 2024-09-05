import {ApiClient} from '../ApiClient';

/**
 * The ClientCertAuthorityOcspTlsTrustedCommonNameCollectionsModel model module.
 * @module model/ClientCertAuthorityOcspTlsTrustedCommonNameCollectionsModel
 * @version 2.36
 */
export class ClientCertAuthorityOcspTlsTrustedCommonNameCollectionsModel {
  /**
   * Constructs a new <code>ClientCertAuthorityOcspTlsTrustedCommonNameCollectionsModel</code>.
   * @alias module:model/ClientCertAuthorityOcspTlsTrustedCommonNameCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ClientCertAuthorityOcspTlsTrustedCommonNameCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientCertAuthorityOcspTlsTrustedCommonNameCollectionsModel} obj Optional instance to populate.
   * @return {module:model/ClientCertAuthorityOcspTlsTrustedCommonNameCollectionsModel} The populated <code>ClientCertAuthorityOcspTlsTrustedCommonNameCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ClientCertAuthorityOcspTlsTrustedCommonNameCollectionsModel();
    }
    return obj;
  }
}
