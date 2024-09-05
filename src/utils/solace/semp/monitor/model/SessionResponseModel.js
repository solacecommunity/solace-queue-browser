import {ApiClient} from '../ApiClient';
import {SempMetaModel} from './SempMetaModel';
import {SessionCollectionsModel} from './SessionCollectionsModel';
import {SessionLinksModel} from './SessionLinksModel';
import {SessionModel} from './SessionModel';

/**
 * The SessionResponseModel model module.
 * @module model/SessionResponseModel
 * @version 2.36
 */
export class SessionResponseModel {
  /**
   * Constructs a new <code>SessionResponseModel</code>.
   * @alias module:model/SessionResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>SessionResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SessionResponseModel} obj Optional instance to populate.
   * @return {module:model/SessionResponseModel} The populated <code>SessionResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SessionResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = SessionCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = SessionModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = SessionLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/SessionCollectionsModel} collections
 */
SessionResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/SessionModel} data
 */
SessionResponseModel.prototype.data = undefined;

/**
 * @member {module:model/SessionLinksModel} links
 */
SessionResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
SessionResponseModel.prototype.meta = undefined;

