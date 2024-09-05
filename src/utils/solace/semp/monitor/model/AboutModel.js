import {ApiClient} from '../ApiClient';

/**
 * The AboutModel model module.
 * @module model/AboutModel
 * @version 2.36
 */
export class AboutModel {
  /**
   * Constructs a new <code>AboutModel</code>.
   * @alias module:model/AboutModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AboutModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AboutModel} obj Optional instance to populate.
   * @return {module:model/AboutModel} The populated <code>AboutModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AboutModel();
    }
    return obj;
  }
}
