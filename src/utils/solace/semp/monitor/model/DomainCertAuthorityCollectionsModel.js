import {ApiClient} from '../ApiClient';

/**
 * The DomainCertAuthorityCollectionsModel model module.
 * @module model/DomainCertAuthorityCollectionsModel
 * @version 2.36
 */
export class DomainCertAuthorityCollectionsModel {
  /**
   * Constructs a new <code>DomainCertAuthorityCollectionsModel</code>.
   * @alias module:model/DomainCertAuthorityCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DomainCertAuthorityCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DomainCertAuthorityCollectionsModel} obj Optional instance to populate.
   * @return {module:model/DomainCertAuthorityCollectionsModel} The populated <code>DomainCertAuthorityCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DomainCertAuthorityCollectionsModel();
    }
    return obj;
  }
}
