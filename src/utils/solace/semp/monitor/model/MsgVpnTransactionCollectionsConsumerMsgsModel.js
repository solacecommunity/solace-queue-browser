import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnTransactionCollectionsConsumerMsgsModel model module.
 * @module model/MsgVpnTransactionCollectionsConsumerMsgsModel
 * @version 2.36
 */
export class MsgVpnTransactionCollectionsConsumerMsgsModel {
  /**
   * Constructs a new <code>MsgVpnTransactionCollectionsConsumerMsgsModel</code>.
   * @alias module:model/MsgVpnTransactionCollectionsConsumerMsgsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTransactionCollectionsConsumerMsgsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTransactionCollectionsConsumerMsgsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTransactionCollectionsConsumerMsgsModel} The populated <code>MsgVpnTransactionCollectionsConsumerMsgsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTransactionCollectionsConsumerMsgsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the consumerMsgs collection.
 * @member {Number} count
 */
MsgVpnTransactionCollectionsConsumerMsgsModel.prototype.count = undefined;

