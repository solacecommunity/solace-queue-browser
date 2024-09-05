import {ApiClient} from '../ApiClient';

/**
 * The VirtualHostnameCollectionsModel model module.
 * @module model/VirtualHostnameCollectionsModel
 * @version 2.36
 */
export class VirtualHostnameCollectionsModel {
  /**
   * Constructs a new <code>VirtualHostnameCollectionsModel</code>.
   * @alias module:model/VirtualHostnameCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>VirtualHostnameCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VirtualHostnameCollectionsModel} obj Optional instance to populate.
   * @return {module:model/VirtualHostnameCollectionsModel} The populated <code>VirtualHostnameCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new VirtualHostnameCollectionsModel();
    }
    return obj;
  }
}
