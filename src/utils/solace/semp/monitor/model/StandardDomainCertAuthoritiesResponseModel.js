import {ApiClient} from '../ApiClient';
import {SempMetaModel} from './SempMetaModel';
import {StandardDomainCertAuthorityCollectionsModel} from './StandardDomainCertAuthorityCollectionsModel';
import {StandardDomainCertAuthorityLinksModel} from './StandardDomainCertAuthorityLinksModel';
import {StandardDomainCertAuthorityModel} from './StandardDomainCertAuthorityModel';

/**
 * The StandardDomainCertAuthoritiesResponseModel model module.
 * @module model/StandardDomainCertAuthoritiesResponseModel
 * @version 2.36
 */
export class StandardDomainCertAuthoritiesResponseModel {
  /**
   * Constructs a new <code>StandardDomainCertAuthoritiesResponseModel</code>.
   * @alias module:model/StandardDomainCertAuthoritiesResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>StandardDomainCertAuthoritiesResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StandardDomainCertAuthoritiesResponseModel} obj Optional instance to populate.
   * @return {module:model/StandardDomainCertAuthoritiesResponseModel} The populated <code>StandardDomainCertAuthoritiesResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new StandardDomainCertAuthoritiesResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [StandardDomainCertAuthorityCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [StandardDomainCertAuthorityModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [StandardDomainCertAuthorityLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/StandardDomainCertAuthorityCollectionsModel>} collections
 */
StandardDomainCertAuthoritiesResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/StandardDomainCertAuthorityModel>} data
 */
StandardDomainCertAuthoritiesResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/StandardDomainCertAuthorityLinksModel>} links
 */
StandardDomainCertAuthoritiesResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
StandardDomainCertAuthoritiesResponseModel.prototype.meta = undefined;

