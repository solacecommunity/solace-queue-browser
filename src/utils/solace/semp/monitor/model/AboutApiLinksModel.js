import {ApiClient} from '../ApiClient';

/**
 * The AboutApiLinksModel model module.
 * @module model/AboutApiLinksModel
 * @version 2.36
 */
export class AboutApiLinksModel {
  /**
   * Constructs a new <code>AboutApiLinksModel</code>.
   * @alias module:model/AboutApiLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AboutApiLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AboutApiLinksModel} obj Optional instance to populate.
   * @return {module:model/AboutApiLinksModel} The populated <code>AboutApiLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AboutApiLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this API Description object.
 * @member {String} uri
 */
AboutApiLinksModel.prototype.uri = undefined;

