import {ApiClient} from '../ApiClient';

/**
 * The StandardDomainCertAuthorityModel model module.
 * @module model/StandardDomainCertAuthorityModel
 * @version 2.36
 */
export class StandardDomainCertAuthorityModel {
  /**
   * Constructs a new <code>StandardDomainCertAuthorityModel</code>.
   * @alias module:model/StandardDomainCertAuthorityModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>StandardDomainCertAuthorityModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StandardDomainCertAuthorityModel} obj Optional instance to populate.
   * @return {module:model/StandardDomainCertAuthorityModel} The populated <code>StandardDomainCertAuthorityModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new StandardDomainCertAuthorityModel();
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
StandardDomainCertAuthorityModel.prototype.certAuthorityName = undefined;

/**
 * The PEM formatted content for the trusted root certificate of a standard domain Certificate Authority.
 * @member {String} certContent
 */
StandardDomainCertAuthorityModel.prototype.certContent = undefined;

