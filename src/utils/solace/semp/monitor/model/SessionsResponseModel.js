import {ApiClient} from '../ApiClient';
import {SempMetaModel} from './SempMetaModel';
import {SessionCollectionsModel} from './SessionCollectionsModel';
import {SessionLinksModel} from './SessionLinksModel';
import {SessionModel} from './SessionModel';

/**
 * The SessionsResponseModel model module.
 * @module model/SessionsResponseModel
 * @version 2.36
 */
export class SessionsResponseModel {
  /**
   * Constructs a new <code>SessionsResponseModel</code>.
   * @alias module:model/SessionsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>SessionsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SessionsResponseModel} obj Optional instance to populate.
   * @return {module:model/SessionsResponseModel} The populated <code>SessionsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SessionsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [SessionCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [SessionModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [SessionLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/SessionCollectionsModel>} collections
 */
SessionsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/SessionModel>} data
 */
SessionsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/SessionLinksModel>} links
 */
SessionsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
SessionsResponseModel.prototype.meta = undefined;

