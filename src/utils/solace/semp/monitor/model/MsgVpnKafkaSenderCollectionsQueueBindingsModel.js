import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnKafkaSenderCollectionsQueueBindingsModel model module.
 * @module model/MsgVpnKafkaSenderCollectionsQueueBindingsModel
 * @version 2.36
 */
export class MsgVpnKafkaSenderCollectionsQueueBindingsModel {
  /**
   * Constructs a new <code>MsgVpnKafkaSenderCollectionsQueueBindingsModel</code>.
   * @alias module:model/MsgVpnKafkaSenderCollectionsQueueBindingsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnKafkaSenderCollectionsQueueBindingsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnKafkaSenderCollectionsQueueBindingsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnKafkaSenderCollectionsQueueBindingsModel} The populated <code>MsgVpnKafkaSenderCollectionsQueueBindingsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnKafkaSenderCollectionsQueueBindingsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the queueBindings collection.
 * @member {Number} count
 */
MsgVpnKafkaSenderCollectionsQueueBindingsModel.prototype.count = undefined;

