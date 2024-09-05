import {ApiClient} from '../ApiClient';

/**
 * The AboutUserCollectionsMsgVpnsModel model module.
 * @module model/AboutUserCollectionsMsgVpnsModel
 * @version 2.36
 */
export class AboutUserCollectionsMsgVpnsModel {
  /**
   * Constructs a new <code>AboutUserCollectionsMsgVpnsModel</code>.
   * @alias module:model/AboutUserCollectionsMsgVpnsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AboutUserCollectionsMsgVpnsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AboutUserCollectionsMsgVpnsModel} obj Optional instance to populate.
   * @return {module:model/AboutUserCollectionsMsgVpnsModel} The populated <code>AboutUserCollectionsMsgVpnsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AboutUserCollectionsMsgVpnsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the msgVpns collection.
 * @member {Number} count
 */
AboutUserCollectionsMsgVpnsModel.prototype.count = undefined;

