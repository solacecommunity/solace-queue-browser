import {ApiClient} from '../ApiClient';
import {CertAuthorityOcspTlsTrustedCommonNameCollectionsModel} from './CertAuthorityOcspTlsTrustedCommonNameCollectionsModel';
import {CertAuthorityOcspTlsTrustedCommonNameLinksModel} from './CertAuthorityOcspTlsTrustedCommonNameLinksModel';
import {CertAuthorityOcspTlsTrustedCommonNameModel} from './CertAuthorityOcspTlsTrustedCommonNameModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The CertAuthorityOcspTlsTrustedCommonNameResponseModel model module.
 * @module model/CertAuthorityOcspTlsTrustedCommonNameResponseModel
 * @version 2.36
 */
export class CertAuthorityOcspTlsTrustedCommonNameResponseModel {
  /**
   * Constructs a new <code>CertAuthorityOcspTlsTrustedCommonNameResponseModel</code>.
   * @alias module:model/CertAuthorityOcspTlsTrustedCommonNameResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>CertAuthorityOcspTlsTrustedCommonNameResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CertAuthorityOcspTlsTrustedCommonNameResponseModel} obj Optional instance to populate.
   * @return {module:model/CertAuthorityOcspTlsTrustedCommonNameResponseModel} The populated <code>CertAuthorityOcspTlsTrustedCommonNameResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CertAuthorityOcspTlsTrustedCommonNameResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = CertAuthorityOcspTlsTrustedCommonNameCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = CertAuthorityOcspTlsTrustedCommonNameModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = CertAuthorityOcspTlsTrustedCommonNameLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/CertAuthorityOcspTlsTrustedCommonNameCollectionsModel} collections
 */
CertAuthorityOcspTlsTrustedCommonNameResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/CertAuthorityOcspTlsTrustedCommonNameModel} data
 */
CertAuthorityOcspTlsTrustedCommonNameResponseModel.prototype.data = undefined;

/**
 * @member {module:model/CertAuthorityOcspTlsTrustedCommonNameLinksModel} links
 */
CertAuthorityOcspTlsTrustedCommonNameResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
CertAuthorityOcspTlsTrustedCommonNameResponseModel.prototype.meta = undefined;

