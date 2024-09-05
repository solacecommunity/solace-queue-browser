import {ApiClient} from '../ApiClient';

/**
 * The SessionCollectionsModel model module.
 * @module model/SessionCollectionsModel
 * @version 2.36
 */
export class SessionCollectionsModel {
  /**
   * Constructs a new <code>SessionCollectionsModel</code>.
   * @alias module:model/SessionCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SessionCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SessionCollectionsModel} obj Optional instance to populate.
   * @return {module:model/SessionCollectionsModel} The populated <code>SessionCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SessionCollectionsModel();
    }
    return obj;
  }
}
