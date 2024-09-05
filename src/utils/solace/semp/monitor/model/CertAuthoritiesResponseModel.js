import {ApiClient} from '../ApiClient';
import {CertAuthorityCollectionsModel} from './CertAuthorityCollectionsModel';
import {CertAuthorityLinksModel} from './CertAuthorityLinksModel';
import {CertAuthorityModel} from './CertAuthorityModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The CertAuthoritiesResponseModel model module.
 * @module model/CertAuthoritiesResponseModel
 * @version 2.36
 */
export class CertAuthoritiesResponseModel {
  /**
   * Constructs a new <code>CertAuthoritiesResponseModel</code>.
   * @alias module:model/CertAuthoritiesResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>CertAuthoritiesResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CertAuthoritiesResponseModel} obj Optional instance to populate.
   * @return {module:model/CertAuthoritiesResponseModel} The populated <code>CertAuthoritiesResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CertAuthoritiesResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [CertAuthorityCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [CertAuthorityModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [CertAuthorityLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/CertAuthorityCollectionsModel>} collections
 */
CertAuthoritiesResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/CertAuthorityModel>} data
 */
CertAuthoritiesResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/CertAuthorityLinksModel>} links
 */
CertAuthoritiesResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
CertAuthoritiesResponseModel.prototype.meta = undefined;

