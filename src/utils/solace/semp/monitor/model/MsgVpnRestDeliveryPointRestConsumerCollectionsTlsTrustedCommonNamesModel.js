import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnRestDeliveryPointRestConsumerCollectionsTlsTrustedCommonNamesModel model module.
 * @module model/MsgVpnRestDeliveryPointRestConsumerCollectionsTlsTrustedCommonNamesModel
 * @version 2.36
 */
export class MsgVpnRestDeliveryPointRestConsumerCollectionsTlsTrustedCommonNamesModel {
  /**
   * Constructs a new <code>MsgVpnRestDeliveryPointRestConsumerCollectionsTlsTrustedCommonNamesModel</code>.
   * @alias module:model/MsgVpnRestDeliveryPointRestConsumerCollectionsTlsTrustedCommonNamesModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnRestDeliveryPointRestConsumerCollectionsTlsTrustedCommonNamesModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRestDeliveryPointRestConsumerCollectionsTlsTrustedCommonNamesModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRestDeliveryPointRestConsumerCollectionsTlsTrustedCommonNamesModel} The populated <code>MsgVpnRestDeliveryPointRestConsumerCollectionsTlsTrustedCommonNamesModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRestDeliveryPointRestConsumerCollectionsTlsTrustedCommonNamesModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the tlsTrustedCommonNames collection. Deprecated since 2.17. Common Name validation has been replaced by Server Certificate Name validation.
 * @member {Number} count
 */
MsgVpnRestDeliveryPointRestConsumerCollectionsTlsTrustedCommonNamesModel.prototype.count = undefined;

