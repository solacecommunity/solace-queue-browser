import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnTransactionPublisherMsgLinksModel model module.
 * @module model/MsgVpnTransactionPublisherMsgLinksModel
 * @version 2.36
 */
export class MsgVpnTransactionPublisherMsgLinksModel {
  /**
   * Constructs a new <code>MsgVpnTransactionPublisherMsgLinksModel</code>.
   * @alias module:model/MsgVpnTransactionPublisherMsgLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTransactionPublisherMsgLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTransactionPublisherMsgLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTransactionPublisherMsgLinksModel} The populated <code>MsgVpnTransactionPublisherMsgLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTransactionPublisherMsgLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Transaction Publisher Message object.
 * @member {String} uri
 */
MsgVpnTransactionPublisherMsgLinksModel.prototype.uri = undefined;

