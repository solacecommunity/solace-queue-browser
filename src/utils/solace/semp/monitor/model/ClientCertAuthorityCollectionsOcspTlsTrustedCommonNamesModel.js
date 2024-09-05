import {ApiClient} from '../ApiClient';

/**
 * The ClientCertAuthorityCollectionsOcspTlsTrustedCommonNamesModel model module.
 * @module model/ClientCertAuthorityCollectionsOcspTlsTrustedCommonNamesModel
 * @version 2.36
 */
export class ClientCertAuthorityCollectionsOcspTlsTrustedCommonNamesModel {
  /**
   * Constructs a new <code>ClientCertAuthorityCollectionsOcspTlsTrustedCommonNamesModel</code>.
   * @alias module:model/ClientCertAuthorityCollectionsOcspTlsTrustedCommonNamesModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ClientCertAuthorityCollectionsOcspTlsTrustedCommonNamesModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientCertAuthorityCollectionsOcspTlsTrustedCommonNamesModel} obj Optional instance to populate.
   * @return {module:model/ClientCertAuthorityCollectionsOcspTlsTrustedCommonNamesModel} The populated <code>ClientCertAuthorityCollectionsOcspTlsTrustedCommonNamesModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ClientCertAuthorityCollectionsOcspTlsTrustedCommonNamesModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the ocspTlsTrustedCommonNames collection.
 * @member {Number} count
 */
ClientCertAuthorityCollectionsOcspTlsTrustedCommonNamesModel.prototype.count = undefined;

