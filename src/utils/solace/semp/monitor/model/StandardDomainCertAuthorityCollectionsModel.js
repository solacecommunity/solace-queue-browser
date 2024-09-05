import {ApiClient} from '../ApiClient';

/**
 * The StandardDomainCertAuthorityCollectionsModel model module.
 * @module model/StandardDomainCertAuthorityCollectionsModel
 * @version 2.36
 */
export class StandardDomainCertAuthorityCollectionsModel {
  /**
   * Constructs a new <code>StandardDomainCertAuthorityCollectionsModel</code>.
   * @alias module:model/StandardDomainCertAuthorityCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>StandardDomainCertAuthorityCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StandardDomainCertAuthorityCollectionsModel} obj Optional instance to populate.
   * @return {module:model/StandardDomainCertAuthorityCollectionsModel} The populated <code>StandardDomainCertAuthorityCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new StandardDomainCertAuthorityCollectionsModel();
    }
    return obj;
  }
}
