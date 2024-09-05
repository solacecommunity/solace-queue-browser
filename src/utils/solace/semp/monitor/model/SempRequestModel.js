import {ApiClient} from '../ApiClient';

/**
 * The SempRequestModel model module.
 * @module model/SempRequestModel
 * @version 2.36
 */
export class SempRequestModel {
  /**
   * Constructs a new <code>SempRequestModel</code>.
   * @alias module:model/SempRequestModel
   * @class
   * @param method {String} The HTTP method of the request which resulted in this response.
   */
  constructor(method) {
    this.method = method;
  }

  /**
   * Constructs a <code>SempRequestModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SempRequestModel} obj Optional instance to populate.
   * @return {module:model/SempRequestModel} The populated <code>SempRequestModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SempRequestModel();
      if (data.hasOwnProperty('method'))
        obj.method = ApiClient.convertToType(data['method'], 'String');
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The HTTP method of the request which resulted in this response.
 * @member {String} method
 */
SempRequestModel.prototype.method = undefined;

/**
 * The URI of the request which resulted in this response. The URI may be normalized.
 * @member {String} uri
 */
SempRequestModel.prototype.uri = undefined;

