import {ApiClient} from '../ApiClient';

/**
 * The StandardDomainCertAuthorityLinksModel model module.
 * @module model/StandardDomainCertAuthorityLinksModel
 * @version 2.36
 */
export class StandardDomainCertAuthorityLinksModel {
  /**
   * Constructs a new <code>StandardDomainCertAuthorityLinksModel</code>.
   * @alias module:model/StandardDomainCertAuthorityLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>StandardDomainCertAuthorityLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StandardDomainCertAuthorityLinksModel} obj Optional instance to populate.
   * @return {module:model/StandardDomainCertAuthorityLinksModel} The populated <code>StandardDomainCertAuthorityLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new StandardDomainCertAuthorityLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Standard Domain Certificate Authority object.
 * @member {String} uri
 */
StandardDomainCertAuthorityLinksModel.prototype.uri = undefined;

