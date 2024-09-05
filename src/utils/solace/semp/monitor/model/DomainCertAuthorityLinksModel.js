import {ApiClient} from '../ApiClient';

/**
 * The DomainCertAuthorityLinksModel model module.
 * @module model/DomainCertAuthorityLinksModel
 * @version 2.36
 */
export class DomainCertAuthorityLinksModel {
  /**
   * Constructs a new <code>DomainCertAuthorityLinksModel</code>.
   * @alias module:model/DomainCertAuthorityLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DomainCertAuthorityLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DomainCertAuthorityLinksModel} obj Optional instance to populate.
   * @return {module:model/DomainCertAuthorityLinksModel} The populated <code>DomainCertAuthorityLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DomainCertAuthorityLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Domain Certificate Authority object.
 * @member {String} uri
 */
DomainCertAuthorityLinksModel.prototype.uri = undefined;

