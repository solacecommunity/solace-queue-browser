import {ApiClient} from '../ApiClient';
import {ClientCertAuthorityCollectionsModel} from './ClientCertAuthorityCollectionsModel';
import {ClientCertAuthorityLinksModel} from './ClientCertAuthorityLinksModel';
import {ClientCertAuthorityModel} from './ClientCertAuthorityModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The ClientCertAuthorityResponseModel model module.
 * @module model/ClientCertAuthorityResponseModel
 * @version 2.36
 */
export class ClientCertAuthorityResponseModel {
  /**
   * Constructs a new <code>ClientCertAuthorityResponseModel</code>.
   * @alias module:model/ClientCertAuthorityResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>ClientCertAuthorityResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientCertAuthorityResponseModel} obj Optional instance to populate.
   * @return {module:model/ClientCertAuthorityResponseModel} The populated <code>ClientCertAuthorityResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ClientCertAuthorityResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ClientCertAuthorityCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = ClientCertAuthorityModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = ClientCertAuthorityLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/ClientCertAuthorityCollectionsModel} collections
 */
ClientCertAuthorityResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/ClientCertAuthorityModel} data
 */
ClientCertAuthorityResponseModel.prototype.data = undefined;

/**
 * @member {module:model/ClientCertAuthorityLinksModel} links
 */
ClientCertAuthorityResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
ClientCertAuthorityResponseModel.prototype.meta = undefined;

