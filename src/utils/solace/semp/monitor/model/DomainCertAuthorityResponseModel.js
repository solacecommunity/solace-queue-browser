import {ApiClient} from '../ApiClient';
import {DomainCertAuthorityCollectionsModel} from './DomainCertAuthorityCollectionsModel';
import {DomainCertAuthorityLinksModel} from './DomainCertAuthorityLinksModel';
import {DomainCertAuthorityModel} from './DomainCertAuthorityModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The DomainCertAuthorityResponseModel model module.
 * @module model/DomainCertAuthorityResponseModel
 * @version 2.36
 */
export class DomainCertAuthorityResponseModel {
  /**
   * Constructs a new <code>DomainCertAuthorityResponseModel</code>.
   * @alias module:model/DomainCertAuthorityResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>DomainCertAuthorityResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DomainCertAuthorityResponseModel} obj Optional instance to populate.
   * @return {module:model/DomainCertAuthorityResponseModel} The populated <code>DomainCertAuthorityResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DomainCertAuthorityResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = DomainCertAuthorityCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = DomainCertAuthorityModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = DomainCertAuthorityLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/DomainCertAuthorityCollectionsModel} collections
 */
DomainCertAuthorityResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/DomainCertAuthorityModel} data
 */
DomainCertAuthorityResponseModel.prototype.data = undefined;

/**
 * @member {module:model/DomainCertAuthorityLinksModel} links
 */
DomainCertAuthorityResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
DomainCertAuthorityResponseModel.prototype.meta = undefined;

