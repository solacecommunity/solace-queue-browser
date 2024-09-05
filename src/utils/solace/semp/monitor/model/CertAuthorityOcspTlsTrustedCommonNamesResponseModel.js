import {ApiClient} from '../ApiClient';
import {CertAuthorityOcspTlsTrustedCommonNameCollectionsModel} from './CertAuthorityOcspTlsTrustedCommonNameCollectionsModel';
import {CertAuthorityOcspTlsTrustedCommonNameLinksModel} from './CertAuthorityOcspTlsTrustedCommonNameLinksModel';
import {CertAuthorityOcspTlsTrustedCommonNameModel} from './CertAuthorityOcspTlsTrustedCommonNameModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The CertAuthorityOcspTlsTrustedCommonNamesResponseModel model module.
 * @module model/CertAuthorityOcspTlsTrustedCommonNamesResponseModel
 * @version 2.36
 */
export class CertAuthorityOcspTlsTrustedCommonNamesResponseModel {
  /**
   * Constructs a new <code>CertAuthorityOcspTlsTrustedCommonNamesResponseModel</code>.
   * @alias module:model/CertAuthorityOcspTlsTrustedCommonNamesResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>CertAuthorityOcspTlsTrustedCommonNamesResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CertAuthorityOcspTlsTrustedCommonNamesResponseModel} obj Optional instance to populate.
   * @return {module:model/CertAuthorityOcspTlsTrustedCommonNamesResponseModel} The populated <code>CertAuthorityOcspTlsTrustedCommonNamesResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CertAuthorityOcspTlsTrustedCommonNamesResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [CertAuthorityOcspTlsTrustedCommonNameCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [CertAuthorityOcspTlsTrustedCommonNameModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [CertAuthorityOcspTlsTrustedCommonNameLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/CertAuthorityOcspTlsTrustedCommonNameCollectionsModel>} collections
 */
CertAuthorityOcspTlsTrustedCommonNamesResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/CertAuthorityOcspTlsTrustedCommonNameModel>} data
 */
CertAuthorityOcspTlsTrustedCommonNamesResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/CertAuthorityOcspTlsTrustedCommonNameLinksModel>} links
 */
CertAuthorityOcspTlsTrustedCommonNamesResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
CertAuthorityOcspTlsTrustedCommonNamesResponseModel.prototype.meta = undefined;

