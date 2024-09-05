import {ApiClient} from '../ApiClient';

/**
 * The AboutApiModel model module.
 * @module model/AboutApiModel
 * @version 2.36
 */
export class AboutApiModel {
  /**
   * Constructs a new <code>AboutApiModel</code>.
   * @alias module:model/AboutApiModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AboutApiModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AboutApiModel} obj Optional instance to populate.
   * @return {module:model/AboutApiModel} The populated <code>AboutApiModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AboutApiModel();
      if (data.hasOwnProperty('platform'))
        obj.platform = ApiClient.convertToType(data['platform'], 'String');
      if (data.hasOwnProperty('sempVersion'))
        obj.sempVersion = ApiClient.convertToType(data['sempVersion'], 'String');
    }
    return obj;
  }
}

/**
 * The platform running the SEMP API.
 * @member {String} platform
 */
AboutApiModel.prototype.platform = undefined;

/**
 * The version of the SEMP API.
 * @member {String} sempVersion
 */
AboutApiModel.prototype.sempVersion = undefined;

