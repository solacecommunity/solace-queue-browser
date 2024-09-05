import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnQueueMsgLinksModel model module.
 * @module model/MsgVpnQueueMsgLinksModel
 * @version 2.36
 */
export class MsgVpnQueueMsgLinksModel {
  /**
   * Constructs a new <code>MsgVpnQueueMsgLinksModel</code>.
   * @alias module:model/MsgVpnQueueMsgLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnQueueMsgLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnQueueMsgLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnQueueMsgLinksModel} The populated <code>MsgVpnQueueMsgLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnQueueMsgLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Queue Message object.
 * @member {String} uri
 */
MsgVpnQueueMsgLinksModel.prototype.uri = undefined;

