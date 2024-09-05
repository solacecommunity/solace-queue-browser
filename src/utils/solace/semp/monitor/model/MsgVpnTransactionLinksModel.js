import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnTransactionLinksModel model module.
 * @module model/MsgVpnTransactionLinksModel
 * @version 2.36
 */
export class MsgVpnTransactionLinksModel {
  /**
   * Constructs a new <code>MsgVpnTransactionLinksModel</code>.
   * @alias module:model/MsgVpnTransactionLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTransactionLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTransactionLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTransactionLinksModel} The populated <code>MsgVpnTransactionLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTransactionLinksModel();
      if (data.hasOwnProperty('consumerMsgsUri'))
        obj.consumerMsgsUri = ApiClient.convertToType(data['consumerMsgsUri'], 'String');
      if (data.hasOwnProperty('publisherMsgsUri'))
        obj.publisherMsgsUri = ApiClient.convertToType(data['publisherMsgsUri'], 'String');
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Replicated Local Transaction or XA Transaction's collection of Transaction Consumer Message objects.
 * @member {String} consumerMsgsUri
 */
MsgVpnTransactionLinksModel.prototype.consumerMsgsUri = undefined;

/**
 * The URI of this Replicated Local Transaction or XA Transaction's collection of Transaction Publisher Message objects.
 * @member {String} publisherMsgsUri
 */
MsgVpnTransactionLinksModel.prototype.publisherMsgsUri = undefined;

/**
 * The URI of this Replicated Local Transaction or XA Transaction object.
 * @member {String} uri
 */
MsgVpnTransactionLinksModel.prototype.uri = undefined;

