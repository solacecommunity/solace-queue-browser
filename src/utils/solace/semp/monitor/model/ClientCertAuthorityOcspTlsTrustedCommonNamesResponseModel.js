import {ApiClient} from '../ApiClient';
import {ClientCertAuthorityOcspTlsTrustedCommonNameCollectionsModel} from './ClientCertAuthorityOcspTlsTrustedCommonNameCollectionsModel';
import {ClientCertAuthorityOcspTlsTrustedCommonNameLinksModel} from './ClientCertAuthorityOcspTlsTrustedCommonNameLinksModel';
import {ClientCertAuthorityOcspTlsTrustedCommonNameModel} from './ClientCertAuthorityOcspTlsTrustedCommonNameModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The ClientCertAuthorityOcspTlsTrustedCommonNamesResponseModel model module.
 * @module model/ClientCertAuthorityOcspTlsTrustedCommonNamesResponseModel
 * @version 2.36
 */
export class ClientCertAuthorityOcspTlsTrustedCommonNamesResponseModel {
  /**
   * Constructs a new <code>ClientCertAuthorityOcspTlsTrustedCommonNamesResponseModel</code>.
   * @alias module:model/ClientCertAuthorityOcspTlsTrustedCommonNamesResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>ClientCertAuthorityOcspTlsTrustedCommonNamesResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientCertAuthorityOcspTlsTrustedCommonNamesResponseModel} obj Optional instance to populate.
   * @return {module:model/ClientCertAuthorityOcspTlsTrustedCommonNamesResponseModel} The populated <code>ClientCertAuthorityOcspTlsTrustedCommonNamesResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ClientCertAuthorityOcspTlsTrustedCommonNamesResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [ClientCertAuthorityOcspTlsTrustedCommonNameCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [ClientCertAuthorityOcspTlsTrustedCommonNameModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [ClientCertAuthorityOcspTlsTrustedCommonNameLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/ClientCertAuthorityOcspTlsTrustedCommonNameCollectionsModel>} collections
 */
ClientCertAuthorityOcspTlsTrustedCommonNamesResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/ClientCertAuthorityOcspTlsTrustedCommonNameModel>} data
 */
ClientCertAuthorityOcspTlsTrustedCommonNamesResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/ClientCertAuthorityOcspTlsTrustedCommonNameLinksModel>} links
 */
ClientCertAuthorityOcspTlsTrustedCommonNamesResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
ClientCertAuthorityOcspTlsTrustedCommonNamesResponseModel.prototype.meta = undefined;

