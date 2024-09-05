import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnTransactionConsumerMsgLinksModel model module.
 * @module model/MsgVpnTransactionConsumerMsgLinksModel
 * @version 2.36
 */
export class MsgVpnTransactionConsumerMsgLinksModel {
  /**
   * Constructs a new <code>MsgVpnTransactionConsumerMsgLinksModel</code>.
   * @alias module:model/MsgVpnTransactionConsumerMsgLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTransactionConsumerMsgLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTransactionConsumerMsgLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTransactionConsumerMsgLinksModel} The populated <code>MsgVpnTransactionConsumerMsgLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTransactionConsumerMsgLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Transaction Consumer Message object.
 * @member {String} uri
 */
MsgVpnTransactionConsumerMsgLinksModel.prototype.uri = undefined;

