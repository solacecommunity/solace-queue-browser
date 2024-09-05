import {ApiClient} from '../ApiClient';
import {CertAuthorityCollectionsModel} from './CertAuthorityCollectionsModel';
import {CertAuthorityLinksModel} from './CertAuthorityLinksModel';
import {CertAuthorityModel} from './CertAuthorityModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The CertAuthorityResponseModel model module.
 * @module model/CertAuthorityResponseModel
 * @version 2.36
 */
export class CertAuthorityResponseModel {
  /**
   * Constructs a new <code>CertAuthorityResponseModel</code>.
   * @alias module:model/CertAuthorityResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>CertAuthorityResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CertAuthorityResponseModel} obj Optional instance to populate.
   * @return {module:model/CertAuthorityResponseModel} The populated <code>CertAuthorityResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CertAuthorityResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = CertAuthorityCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = CertAuthorityModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = CertAuthorityLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/CertAuthorityCollectionsModel} collections
 */
CertAuthorityResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/CertAuthorityModel} data
 */
CertAuthorityResponseModel.prototype.data = undefined;

/**
 * @member {module:model/CertAuthorityLinksModel} links
 */
CertAuthorityResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
CertAuthorityResponseModel.prototype.meta = undefined;

