import {ApiClient} from '../ApiClient';

/**
 * The AboutLinksModel model module.
 * @module model/AboutLinksModel
 * @version 2.36
 */
export class AboutLinksModel {
  /**
   * Constructs a new <code>AboutLinksModel</code>.
   * @alias module:model/AboutLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AboutLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AboutLinksModel} obj Optional instance to populate.
   * @return {module:model/AboutLinksModel} The populated <code>AboutLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AboutLinksModel();
      if (data.hasOwnProperty('apiUri'))
        obj.apiUri = ApiClient.convertToType(data['apiUri'], 'String');
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
      if (data.hasOwnProperty('userUri'))
        obj.userUri = ApiClient.convertToType(data['userUri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this About's API Description object. Available since 2.11.
 * @member {String} apiUri
 */
AboutLinksModel.prototype.apiUri = undefined;

/**
 * The URI of this About object.
 * @member {String} uri
 */
AboutLinksModel.prototype.uri = undefined;

/**
 * The URI of this About's User object. Available since 2.11.
 * @member {String} userUri
 */
AboutLinksModel.prototype.userUri = undefined;

