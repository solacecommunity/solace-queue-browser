import {ApiClient} from '../ApiClient';
import {SempMetaModel} from './SempMetaModel';

/**
 * The SempMetaOnlyResponseModel model module.
 * @module model/SempMetaOnlyResponseModel
 * @version 2.36
 */
export class SempMetaOnlyResponseModel {
  /**
   * Constructs a new <code>SempMetaOnlyResponseModel</code>.
   * @alias module:model/SempMetaOnlyResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>SempMetaOnlyResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SempMetaOnlyResponseModel} obj Optional instance to populate.
   * @return {module:model/SempMetaOnlyResponseModel} The populated <code>SempMetaOnlyResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SempMetaOnlyResponseModel();
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/SempMetaModel} meta
 */
SempMetaOnlyResponseModel.prototype.meta = undefined;

