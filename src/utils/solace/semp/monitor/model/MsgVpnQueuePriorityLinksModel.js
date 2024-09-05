import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnQueuePriorityLinksModel model module.
 * @module model/MsgVpnQueuePriorityLinksModel
 * @version 2.36
 */
export class MsgVpnQueuePriorityLinksModel {
  /**
   * Constructs a new <code>MsgVpnQueuePriorityLinksModel</code>.
   * @alias module:model/MsgVpnQueuePriorityLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnQueuePriorityLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnQueuePriorityLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnQueuePriorityLinksModel} The populated <code>MsgVpnQueuePriorityLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnQueuePriorityLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Queue Priority object.
 * @member {String} uri
 */
MsgVpnQueuePriorityLinksModel.prototype.uri = undefined;

