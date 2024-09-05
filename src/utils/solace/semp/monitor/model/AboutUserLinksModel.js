import {ApiClient} from '../ApiClient';

/**
 * The AboutUserLinksModel model module.
 * @module model/AboutUserLinksModel
 * @version 2.36
 */
export class AboutUserLinksModel {
  /**
   * Constructs a new <code>AboutUserLinksModel</code>.
   * @alias module:model/AboutUserLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AboutUserLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AboutUserLinksModel} obj Optional instance to populate.
   * @return {module:model/AboutUserLinksModel} The populated <code>AboutUserLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AboutUserLinksModel();
      if (data.hasOwnProperty('msgVpnsUri'))
        obj.msgVpnsUri = ApiClient.convertToType(data['msgVpnsUri'], 'String');
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this User's collection of User Message VPN objects.
 * @member {String} msgVpnsUri
 */
AboutUserLinksModel.prototype.msgVpnsUri = undefined;

/**
 * The URI of this User object.
 * @member {String} uri
 */
AboutUserLinksModel.prototype.uri = undefined;

