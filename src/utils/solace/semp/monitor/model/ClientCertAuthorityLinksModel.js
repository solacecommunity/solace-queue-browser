import {ApiClient} from '../ApiClient';

/**
 * The ClientCertAuthorityLinksModel model module.
 * @module model/ClientCertAuthorityLinksModel
 * @version 2.36
 */
export class ClientCertAuthorityLinksModel {
  /**
   * Constructs a new <code>ClientCertAuthorityLinksModel</code>.
   * @alias module:model/ClientCertAuthorityLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ClientCertAuthorityLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientCertAuthorityLinksModel} obj Optional instance to populate.
   * @return {module:model/ClientCertAuthorityLinksModel} The populated <code>ClientCertAuthorityLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ClientCertAuthorityLinksModel();
      if (data.hasOwnProperty('ocspTlsTrustedCommonNamesUri'))
        obj.ocspTlsTrustedCommonNamesUri = ApiClient.convertToType(data['ocspTlsTrustedCommonNamesUri'], 'String');
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Client Certificate Authority's collection of OCSP Responder Trusted Common Name objects.
 * @member {String} ocspTlsTrustedCommonNamesUri
 */
ClientCertAuthorityLinksModel.prototype.ocspTlsTrustedCommonNamesUri = undefined;

/**
 * The URI of this Client Certificate Authority object.
 * @member {String} uri
 */
ClientCertAuthorityLinksModel.prototype.uri = undefined;

