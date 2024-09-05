import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnCollectionsQueueTemplatesModel model module.
 * @module model/MsgVpnCollectionsQueueTemplatesModel
 * @version 2.36
 */
export class MsgVpnCollectionsQueueTemplatesModel {
  /**
   * Constructs a new <code>MsgVpnCollectionsQueueTemplatesModel</code>.
   * @alias module:model/MsgVpnCollectionsQueueTemplatesModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnCollectionsQueueTemplatesModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCollectionsQueueTemplatesModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCollectionsQueueTemplatesModel} The populated <code>MsgVpnCollectionsQueueTemplatesModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCollectionsQueueTemplatesModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the queueTemplates collection. Available since 2.14.
 * @member {Number} count
 */
MsgVpnCollectionsQueueTemplatesModel.prototype.count = undefined;

