import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnReplayLogMsgLinksModel model module.
 * @module model/MsgVpnReplayLogMsgLinksModel
 * @version 2.36
 */
export class MsgVpnReplayLogMsgLinksModel {
  /**
   * Constructs a new <code>MsgVpnReplayLogMsgLinksModel</code>.
   * @alias module:model/MsgVpnReplayLogMsgLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnReplayLogMsgLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnReplayLogMsgLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnReplayLogMsgLinksModel} The populated <code>MsgVpnReplayLogMsgLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnReplayLogMsgLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Message object.
 * @member {String} uri
 */
MsgVpnReplayLogMsgLinksModel.prototype.uri = undefined;

