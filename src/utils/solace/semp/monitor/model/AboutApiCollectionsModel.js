import {ApiClient} from '../ApiClient';

/**
 * The AboutApiCollectionsModel model module.
 * @module model/AboutApiCollectionsModel
 * @version 2.36
 */
export class AboutApiCollectionsModel {
  /**
   * Constructs a new <code>AboutApiCollectionsModel</code>.
   * @alias module:model/AboutApiCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AboutApiCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AboutApiCollectionsModel} obj Optional instance to populate.
   * @return {module:model/AboutApiCollectionsModel} The populated <code>AboutApiCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AboutApiCollectionsModel();
    }
    return obj;
  }
}
