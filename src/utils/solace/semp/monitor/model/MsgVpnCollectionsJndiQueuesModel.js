import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnCollectionsJndiQueuesModel model module.
 * @module model/MsgVpnCollectionsJndiQueuesModel
 * @version 2.36
 */
export class MsgVpnCollectionsJndiQueuesModel {
  /**
   * Constructs a new <code>MsgVpnCollectionsJndiQueuesModel</code>.
   * @alias module:model/MsgVpnCollectionsJndiQueuesModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnCollectionsJndiQueuesModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCollectionsJndiQueuesModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCollectionsJndiQueuesModel} The populated <code>MsgVpnCollectionsJndiQueuesModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCollectionsJndiQueuesModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the jndiQueues collection.
 * @member {Number} count
 */
MsgVpnCollectionsJndiQueuesModel.prototype.count = undefined;

