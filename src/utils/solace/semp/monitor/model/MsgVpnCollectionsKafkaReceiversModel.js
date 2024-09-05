import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnCollectionsKafkaReceiversModel model module.
 * @module model/MsgVpnCollectionsKafkaReceiversModel
 * @version 2.36
 */
export class MsgVpnCollectionsKafkaReceiversModel {
  /**
   * Constructs a new <code>MsgVpnCollectionsKafkaReceiversModel</code>.
   * @alias module:model/MsgVpnCollectionsKafkaReceiversModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnCollectionsKafkaReceiversModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCollectionsKafkaReceiversModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCollectionsKafkaReceiversModel} The populated <code>MsgVpnCollectionsKafkaReceiversModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCollectionsKafkaReceiversModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the kafkaReceivers collection. Available since 2.36.
 * @member {Number} count
 */
MsgVpnCollectionsKafkaReceiversModel.prototype.count = undefined;

