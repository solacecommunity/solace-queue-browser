import {ApiClient} from '../ApiClient';
import {CertAuthorityCollectionsOcspTlsTrustedCommonNamesModel} from './CertAuthorityCollectionsOcspTlsTrustedCommonNamesModel';

/**
 * The CertAuthorityCollectionsModel model module.
 * @module model/CertAuthorityCollectionsModel
 * @version 2.36
 */
export class CertAuthorityCollectionsModel {
  /**
   * Constructs a new <code>CertAuthorityCollectionsModel</code>.
   * @alias module:model/CertAuthorityCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CertAuthorityCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CertAuthorityCollectionsModel} obj Optional instance to populate.
   * @return {module:model/CertAuthorityCollectionsModel} The populated <code>CertAuthorityCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CertAuthorityCollectionsModel();
      if (data.hasOwnProperty('ocspTlsTrustedCommonNames'))
        obj.ocspTlsTrustedCommonNames = CertAuthorityCollectionsOcspTlsTrustedCommonNamesModel.constructFromObject(data['ocspTlsTrustedCommonNames']);
    }
    return obj;
  }
}

/**
 * @member {module:model/CertAuthorityCollectionsOcspTlsTrustedCommonNamesModel} ocspTlsTrustedCommonNames
 */
CertAuthorityCollectionsModel.prototype.ocspTlsTrustedCommonNames = undefined;

