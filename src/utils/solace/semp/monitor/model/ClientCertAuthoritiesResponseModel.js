import {ApiClient} from '../ApiClient';
import {ClientCertAuthorityCollectionsModel} from './ClientCertAuthorityCollectionsModel';
import {ClientCertAuthorityLinksModel} from './ClientCertAuthorityLinksModel';
import {ClientCertAuthorityModel} from './ClientCertAuthorityModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The ClientCertAuthoritiesResponseModel model module.
 * @module model/ClientCertAuthoritiesResponseModel
 * @version 2.36
 */
export class ClientCertAuthoritiesResponseModel {
  /**
   * Constructs a new <code>ClientCertAuthoritiesResponseModel</code>.
   * @alias module:model/ClientCertAuthoritiesResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>ClientCertAuthoritiesResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientCertAuthoritiesResponseModel} obj Optional instance to populate.
   * @return {module:model/ClientCertAuthoritiesResponseModel} The populated <code>ClientCertAuthoritiesResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ClientCertAuthoritiesResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [ClientCertAuthorityCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [ClientCertAuthorityModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [ClientCertAuthorityLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/ClientCertAuthorityCollectionsModel>} collections
 */
ClientCertAuthoritiesResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/ClientCertAuthorityModel>} data
 */
ClientCertAuthoritiesResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/ClientCertAuthorityLinksModel>} links
 */
ClientCertAuthoritiesResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
ClientCertAuthoritiesResponseModel.prototype.meta = undefined;

