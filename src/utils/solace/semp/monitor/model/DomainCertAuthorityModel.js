import {ApiClient} from '../ApiClient';

/**
 * The DomainCertAuthorityModel model module.
 * @module model/DomainCertAuthorityModel
 * @version 2.36
 */
export class DomainCertAuthorityModel {
  /**
   * Constructs a new <code>DomainCertAuthorityModel</code>.
   * @alias module:model/DomainCertAuthorityModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DomainCertAuthorityModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DomainCertAuthorityModel} obj Optional instance to populate.
   * @return {module:model/DomainCertAuthorityModel} The populated <code>DomainCertAuthorityModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DomainCertAuthorityModel();
      if (data.hasOwnProperty('certAuthorityName'))
        obj.certAuthorityName = ApiClient.convertToType(data['certAuthorityName'], 'String');
      if (data.hasOwnProperty('certContent'))
        obj.certContent = ApiClient.convertToType(data['certContent'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the Certificate Authority.
 * @member {String} certAuthorityName
 */
DomainCertAuthorityModel.prototype.certAuthorityName = undefined;

/**
 * The PEM formatted content for the trusted root certificate of a domain Certificate Authority.
 * @member {String} certContent
 */
DomainCertAuthorityModel.prototype.certContent = undefined;

