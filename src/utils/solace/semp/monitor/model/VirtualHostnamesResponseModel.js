import {ApiClient} from '../ApiClient';
import {SempMetaModel} from './SempMetaModel';
import {VirtualHostnameCollectionsModel} from './VirtualHostnameCollectionsModel';
import {VirtualHostnameLinksModel} from './VirtualHostnameLinksModel';
import {VirtualHostnameModel} from './VirtualHostnameModel';

/**
 * The VirtualHostnamesResponseModel model module.
 * @module model/VirtualHostnamesResponseModel
 * @version 2.36
 */
export class VirtualHostnamesResponseModel {
  /**
   * Constructs a new <code>VirtualHostnamesResponseModel</code>.
   * @alias module:model/VirtualHostnamesResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>VirtualHostnamesResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VirtualHostnamesResponseModel} obj Optional instance to populate.
   * @return {module:model/VirtualHostnamesResponseModel} The populated <code>VirtualHostnamesResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new VirtualHostnamesResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [VirtualHostnameCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [VirtualHostnameModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [VirtualHostnameLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/VirtualHostnameCollectionsModel>} collections
 */
VirtualHostnamesResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/VirtualHostnameModel>} data
 */
VirtualHostnamesResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/VirtualHostnameLinksModel>} links
 */
VirtualHostnamesResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
VirtualHostnamesResponseModel.prototype.meta = undefined;

