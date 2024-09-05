import {ApiClient} from '../ApiClient';
import {OauthProfileCollectionsModel} from './OauthProfileCollectionsModel';
import {OauthProfileLinksModel} from './OauthProfileLinksModel';
import {OauthProfileModel} from './OauthProfileModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The OauthProfileResponseModel model module.
 * @module model/OauthProfileResponseModel
 * @version 2.36
 */
export class OauthProfileResponseModel {
  /**
   * Constructs a new <code>OauthProfileResponseModel</code>.
   * @alias module:model/OauthProfileResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>OauthProfileResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileResponseModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileResponseModel} The populated <code>OauthProfileResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = OauthProfileCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = OauthProfileModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = OauthProfileLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/OauthProfileCollectionsModel} collections
 */
OauthProfileResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/OauthProfileModel} data
 */
OauthProfileResponseModel.prototype.data = undefined;

/**
 * @member {module:model/OauthProfileLinksModel} links
 */
OauthProfileResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
OauthProfileResponseModel.prototype.meta = undefined;

