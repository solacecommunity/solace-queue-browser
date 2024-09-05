import {ApiClient} from '../ApiClient';
import {SempMetaModel} from './SempMetaModel';
import {VirtualHostnameCollectionsModel} from './VirtualHostnameCollectionsModel';
import {VirtualHostnameLinksModel} from './VirtualHostnameLinksModel';
import {VirtualHostnameModel} from './VirtualHostnameModel';

/**
 * The VirtualHostnameResponseModel model module.
 * @module model/VirtualHostnameResponseModel
 * @version 2.36
 */
export class VirtualHostnameResponseModel {
  /**
   * Constructs a new <code>VirtualHostnameResponseModel</code>.
   * @alias module:model/VirtualHostnameResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>VirtualHostnameResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VirtualHostnameResponseModel} obj Optional instance to populate.
   * @return {module:model/VirtualHostnameResponseModel} The populated <code>VirtualHostnameResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new VirtualHostnameResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = VirtualHostnameCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = VirtualHostnameModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = VirtualHostnameLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/VirtualHostnameCollectionsModel} collections
 */
VirtualHostnameResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/VirtualHostnameModel} data
 */
VirtualHostnameResponseModel.prototype.data = undefined;

/**
 * @member {module:model/VirtualHostnameLinksModel} links
 */
VirtualHostnameResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
VirtualHostnameResponseModel.prototype.meta = undefined;

