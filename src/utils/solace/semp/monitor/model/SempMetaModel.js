import {ApiClient} from '../ApiClient';
import {SempErrorModel} from './SempErrorModel';
import {SempPagingModel} from './SempPagingModel';
import {SempRequestModel} from './SempRequestModel';

/**
 * The SempMetaModel model module.
 * @module model/SempMetaModel
 * @version 2.36
 */
export class SempMetaModel {
  /**
   * Constructs a new <code>SempMetaModel</code>.
   * @alias module:model/SempMetaModel
   * @class
   * @param request {module:model/SempRequestModel} 
   * @param responseCode {Number} The HTTP response code, one of 200 (success), 4xx (client error), or 5xx (server error).
   */
  constructor(request, responseCode) {
    this.request = request;
    this.responseCode = responseCode;
  }

  /**
   * Constructs a <code>SempMetaModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SempMetaModel} obj Optional instance to populate.
   * @return {module:model/SempMetaModel} The populated <code>SempMetaModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SempMetaModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
      if (data.hasOwnProperty('error'))
        obj.error = SempErrorModel.constructFromObject(data['error']);
      if (data.hasOwnProperty('paging'))
        obj.paging = SempPagingModel.constructFromObject(data['paging']);
      if (data.hasOwnProperty('request'))
        obj.request = SempRequestModel.constructFromObject(data['request']);
      if (data.hasOwnProperty('responseCode'))
        obj.responseCode = ApiClient.convertToType(data['responseCode'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects requested, irrespective of page size. This may be a count of all objects in a collection or a filtered subset. It represents a snapshot in time and may change when paging through results.
 * @member {Number} count
 */
SempMetaModel.prototype.count = undefined;

/**
 * @member {module:model/SempErrorModel} error
 */
SempMetaModel.prototype.error = undefined;

/**
 * @member {module:model/SempPagingModel} paging
 */
SempMetaModel.prototype.paging = undefined;

/**
 * @member {module:model/SempRequestModel} request
 */
SempMetaModel.prototype.request = undefined;

/**
 * The HTTP response code, one of 200 (success), 4xx (client error), or 5xx (server error).
 * @member {Number} responseCode
 */
SempMetaModel.prototype.responseCode = undefined;

