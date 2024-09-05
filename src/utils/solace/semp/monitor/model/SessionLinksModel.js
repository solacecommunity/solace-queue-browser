import {ApiClient} from '../ApiClient';

/**
 * The SessionLinksModel model module.
 * @module model/SessionLinksModel
 * @version 2.36
 */
export class SessionLinksModel {
  /**
   * Constructs a new <code>SessionLinksModel</code>.
   * @alias module:model/SessionLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SessionLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SessionLinksModel} obj Optional instance to populate.
   * @return {module:model/SessionLinksModel} The populated <code>SessionLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SessionLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this SEMP Session object.
 * @member {String} uri
 */
SessionLinksModel.prototype.uri = undefined;

