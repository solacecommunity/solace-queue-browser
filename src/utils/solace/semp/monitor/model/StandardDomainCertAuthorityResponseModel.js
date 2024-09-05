import {ApiClient} from '../ApiClient';
import {SempMetaModel} from './SempMetaModel';
import {StandardDomainCertAuthorityCollectionsModel} from './StandardDomainCertAuthorityCollectionsModel';
import {StandardDomainCertAuthorityLinksModel} from './StandardDomainCertAuthorityLinksModel';
import {StandardDomainCertAuthorityModel} from './StandardDomainCertAuthorityModel';

/**
 * The StandardDomainCertAuthorityResponseModel model module.
 * @module model/StandardDomainCertAuthorityResponseModel
 * @version 2.36
 */
export class StandardDomainCertAuthorityResponseModel {
  /**
   * Constructs a new <code>StandardDomainCertAuthorityResponseModel</code>.
   * @alias module:model/StandardDomainCertAuthorityResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>StandardDomainCertAuthorityResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StandardDomainCertAuthorityResponseModel} obj Optional instance to populate.
   * @return {module:model/StandardDomainCertAuthorityResponseModel} The populated <code>StandardDomainCertAuthorityResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new StandardDomainCertAuthorityResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = StandardDomainCertAuthorityCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = StandardDomainCertAuthorityModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = StandardDomainCertAuthorityLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/StandardDomainCertAuthorityCollectionsModel} collections
 */
StandardDomainCertAuthorityResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/StandardDomainCertAuthorityModel} data
 */
StandardDomainCertAuthorityResponseModel.prototype.data = undefined;

/**
 * @member {module:model/StandardDomainCertAuthorityLinksModel} links
 */
StandardDomainCertAuthorityResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
StandardDomainCertAuthorityResponseModel.prototype.meta = undefined;

