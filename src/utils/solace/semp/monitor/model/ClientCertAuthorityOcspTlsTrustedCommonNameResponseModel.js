import {ApiClient} from '../ApiClient';
import {ClientCertAuthorityOcspTlsTrustedCommonNameCollectionsModel} from './ClientCertAuthorityOcspTlsTrustedCommonNameCollectionsModel';
import {ClientCertAuthorityOcspTlsTrustedCommonNameLinksModel} from './ClientCertAuthorityOcspTlsTrustedCommonNameLinksModel';
import {ClientCertAuthorityOcspTlsTrustedCommonNameModel} from './ClientCertAuthorityOcspTlsTrustedCommonNameModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The ClientCertAuthorityOcspTlsTrustedCommonNameResponseModel model module.
 * @module model/ClientCertAuthorityOcspTlsTrustedCommonNameResponseModel
 * @version 2.36
 */
export class ClientCertAuthorityOcspTlsTrustedCommonNameResponseModel {
  /**
   * Constructs a new <code>ClientCertAuthorityOcspTlsTrustedCommonNameResponseModel</code>.
   * @alias module:model/ClientCertAuthorityOcspTlsTrustedCommonNameResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>ClientCertAuthorityOcspTlsTrustedCommonNameResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientCertAuthorityOcspTlsTrustedCommonNameResponseModel} obj Optional instance to populate.
   * @return {module:model/ClientCertAuthorityOcspTlsTrustedCommonNameResponseModel} The populated <code>ClientCertAuthorityOcspTlsTrustedCommonNameResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ClientCertAuthorityOcspTlsTrustedCommonNameResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ClientCertAuthorityOcspTlsTrustedCommonNameCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = ClientCertAuthorityOcspTlsTrustedCommonNameModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = ClientCertAuthorityOcspTlsTrustedCommonNameLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/ClientCertAuthorityOcspTlsTrustedCommonNameCollectionsModel} collections
 */
ClientCertAuthorityOcspTlsTrustedCommonNameResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/ClientCertAuthorityOcspTlsTrustedCommonNameModel} data
 */
ClientCertAuthorityOcspTlsTrustedCommonNameResponseModel.prototype.data = undefined;

/**
 * @member {module:model/ClientCertAuthorityOcspTlsTrustedCommonNameLinksModel} links
 */
ClientCertAuthorityOcspTlsTrustedCommonNameResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
ClientCertAuthorityOcspTlsTrustedCommonNameResponseModel.prototype.meta = undefined;

