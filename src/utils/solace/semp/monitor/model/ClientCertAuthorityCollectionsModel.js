import {ApiClient} from '../ApiClient';
import {ClientCertAuthorityCollectionsOcspTlsTrustedCommonNamesModel} from './ClientCertAuthorityCollectionsOcspTlsTrustedCommonNamesModel';

/**
 * The ClientCertAuthorityCollectionsModel model module.
 * @module model/ClientCertAuthorityCollectionsModel
 * @version 2.36
 */
export class ClientCertAuthorityCollectionsModel {
  /**
   * Constructs a new <code>ClientCertAuthorityCollectionsModel</code>.
   * @alias module:model/ClientCertAuthorityCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ClientCertAuthorityCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientCertAuthorityCollectionsModel} obj Optional instance to populate.
   * @return {module:model/ClientCertAuthorityCollectionsModel} The populated <code>ClientCertAuthorityCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ClientCertAuthorityCollectionsModel();
      if (data.hasOwnProperty('ocspTlsTrustedCommonNames'))
        obj.ocspTlsTrustedCommonNames = ClientCertAuthorityCollectionsOcspTlsTrustedCommonNamesModel.constructFromObject(data['ocspTlsTrustedCommonNames']);
    }
    return obj;
  }
}

/**
 * @member {module:model/ClientCertAuthorityCollectionsOcspTlsTrustedCommonNamesModel} ocspTlsTrustedCommonNames
 */
ClientCertAuthorityCollectionsModel.prototype.ocspTlsTrustedCommonNames = undefined;

