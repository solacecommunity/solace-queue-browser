import {ApiClient} from '../ApiClient';
import {DomainCertAuthorityCollectionsModel} from './DomainCertAuthorityCollectionsModel';
import {DomainCertAuthorityLinksModel} from './DomainCertAuthorityLinksModel';
import {DomainCertAuthorityModel} from './DomainCertAuthorityModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The DomainCertAuthoritiesResponseModel model module.
 * @module model/DomainCertAuthoritiesResponseModel
 * @version 2.36
 */
export class DomainCertAuthoritiesResponseModel {
  /**
   * Constructs a new <code>DomainCertAuthoritiesResponseModel</code>.
   * @alias module:model/DomainCertAuthoritiesResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>DomainCertAuthoritiesResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DomainCertAuthoritiesResponseModel} obj Optional instance to populate.
   * @return {module:model/DomainCertAuthoritiesResponseModel} The populated <code>DomainCertAuthoritiesResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DomainCertAuthoritiesResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [DomainCertAuthorityCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [DomainCertAuthorityModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [DomainCertAuthorityLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/DomainCertAuthorityCollectionsModel>} collections
 */
DomainCertAuthoritiesResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/DomainCertAuthorityModel>} data
 */
DomainCertAuthoritiesResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/DomainCertAuthorityLinksModel>} links
 */
DomainCertAuthoritiesResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
DomainCertAuthoritiesResponseModel.prototype.meta = undefined;

