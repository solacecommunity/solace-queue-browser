import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnKafkaReceiverCollectionsRemoteBrokersModel model module.
 * @module model/MsgVpnKafkaReceiverCollectionsRemoteBrokersModel
 * @version 2.36
 */
export class MsgVpnKafkaReceiverCollectionsRemoteBrokersModel {
  /**
   * Constructs a new <code>MsgVpnKafkaReceiverCollectionsRemoteBrokersModel</code>.
   * @alias module:model/MsgVpnKafkaReceiverCollectionsRemoteBrokersModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnKafkaReceiverCollectionsRemoteBrokersModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnKafkaReceiverCollectionsRemoteBrokersModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnKafkaReceiverCollectionsRemoteBrokersModel} The populated <code>MsgVpnKafkaReceiverCollectionsRemoteBrokersModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnKafkaReceiverCollectionsRemoteBrokersModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the remoteBrokers collection.
 * @member {Number} count
 */
MsgVpnKafkaReceiverCollectionsRemoteBrokersModel.prototype.count = undefined;

