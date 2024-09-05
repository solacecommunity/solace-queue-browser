import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnTransactionCollectionsPublisherMsgsModel model module.
 * @module model/MsgVpnTransactionCollectionsPublisherMsgsModel
 * @version 2.36
 */
export class MsgVpnTransactionCollectionsPublisherMsgsModel {
  /**
   * Constructs a new <code>MsgVpnTransactionCollectionsPublisherMsgsModel</code>.
   * @alias module:model/MsgVpnTransactionCollectionsPublisherMsgsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTransactionCollectionsPublisherMsgsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTransactionCollectionsPublisherMsgsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTransactionCollectionsPublisherMsgsModel} The populated <code>MsgVpnTransactionCollectionsPublisherMsgsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTransactionCollectionsPublisherMsgsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the publisherMsgs collection.
 * @member {Number} count
 */
MsgVpnTransactionCollectionsPublisherMsgsModel.prototype.count = undefined;

