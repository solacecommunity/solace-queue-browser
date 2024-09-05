import {ApiClient} from '../ApiClient';

/**
 * The AboutCollectionsModel model module.
 * @module model/AboutCollectionsModel
 * @version 2.36
 */
export class AboutCollectionsModel {
  /**
   * Constructs a new <code>AboutCollectionsModel</code>.
   * @alias module:model/AboutCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AboutCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AboutCollectionsModel} obj Optional instance to populate.
   * @return {module:model/AboutCollectionsModel} The populated <code>AboutCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AboutCollectionsModel();
    }
    return obj;
  }
}
