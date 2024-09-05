import {ApiClient} from '../ApiClient';

/**
 * The SempPagingModel model module.
 * @module model/SempPagingModel
 * @version 2.36
 */
export class SempPagingModel {
  /**
   * Constructs a new <code>SempPagingModel</code>.
   * @alias module:model/SempPagingModel
   * @class
   * @param cursorQuery {String} The cursor, or position, for the next page of objects. Use this as the `cursor` query parameter of the next request.
   * @param nextPageUri {String} The URI of the next page of objects. `cursorQuery` is already embedded within this URI.
   */
  constructor(cursorQuery, nextPageUri) {
    this.cursorQuery = cursorQuery;
    this.nextPageUri = nextPageUri;
  }

  /**
   * Constructs a <code>SempPagingModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SempPagingModel} obj Optional instance to populate.
   * @return {module:model/SempPagingModel} The populated <code>SempPagingModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SempPagingModel();
      if (data.hasOwnProperty('cursorQuery'))
        obj.cursorQuery = ApiClient.convertToType(data['cursorQuery'], 'String');
      if (data.hasOwnProperty('nextPageUri'))
        obj.nextPageUri = ApiClient.convertToType(data['nextPageUri'], 'String');
    }
    return obj;
  }
}

/**
 * The cursor, or position, for the next page of objects. Use this as the `cursor` query parameter of the next request.
 * @member {String} cursorQuery
 */
SempPagingModel.prototype.cursorQuery = undefined;

/**
 * The URI of the next page of objects. `cursorQuery` is already embedded within this URI.
 * @member {String} nextPageUri
 */
SempPagingModel.prototype.nextPageUri = undefined;

