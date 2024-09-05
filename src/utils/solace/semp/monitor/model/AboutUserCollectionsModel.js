import {ApiClient} from '../ApiClient';
import {AboutUserCollectionsMsgVpnsModel} from './AboutUserCollectionsMsgVpnsModel';

/**
 * The AboutUserCollectionsModel model module.
 * @module model/AboutUserCollectionsModel
 * @version 2.36
 */
export class AboutUserCollectionsModel {
  /**
   * Constructs a new <code>AboutUserCollectionsModel</code>.
   * @alias module:model/AboutUserCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AboutUserCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AboutUserCollectionsModel} obj Optional instance to populate.
   * @return {module:model/AboutUserCollectionsModel} The populated <code>AboutUserCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AboutUserCollectionsModel();
      if (data.hasOwnProperty('msgVpns'))
        obj.msgVpns = AboutUserCollectionsMsgVpnsModel.constructFromObject(data['msgVpns']);
    }
    return obj;
  }
}

/**
 * @member {module:model/AboutUserCollectionsMsgVpnsModel} msgVpns
 */
AboutUserCollectionsModel.prototype.msgVpns = undefined;

