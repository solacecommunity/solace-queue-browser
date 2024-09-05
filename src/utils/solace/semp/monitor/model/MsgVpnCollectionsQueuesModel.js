import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnCollectionsQueuesModel model module.
 * @module model/MsgVpnCollectionsQueuesModel
 * @version 2.36
 */
export class MsgVpnCollectionsQueuesModel {
  /**
   * Constructs a new <code>MsgVpnCollectionsQueuesModel</code>.
   * @alias module:model/MsgVpnCollectionsQueuesModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnCollectionsQueuesModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCollectionsQueuesModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCollectionsQueuesModel} The populated <code>MsgVpnCollectionsQueuesModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCollectionsQueuesModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the queues collection. Available since 2.12.
 * @member {Number} count
 */
MsgVpnCollectionsQueuesModel.prototype.count = undefined;

