import {ApiClient} from '../ApiClient';
import {MsgVpnKafkaReceiverCollectionsRemoteBrokersModel} from './MsgVpnKafkaReceiverCollectionsRemoteBrokersModel';
import {MsgVpnKafkaReceiverCollectionsTopicBindingsModel} from './MsgVpnKafkaReceiverCollectionsTopicBindingsModel';

/**
 * The MsgVpnKafkaReceiverCollectionsModel model module.
 * @module model/MsgVpnKafkaReceiverCollectionsModel
 * @version 2.36
 */
export class MsgVpnKafkaReceiverCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnKafkaReceiverCollectionsModel</code>.
   * @alias module:model/MsgVpnKafkaReceiverCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnKafkaReceiverCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnKafkaReceiverCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnKafkaReceiverCollectionsModel} The populated <code>MsgVpnKafkaReceiverCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnKafkaReceiverCollectionsModel();
      if (data.hasOwnProperty('remoteBrokers'))
        obj.remoteBrokers = MsgVpnKafkaReceiverCollectionsRemoteBrokersModel.constructFromObject(data['remoteBrokers']);
      if (data.hasOwnProperty('topicBindings'))
        obj.topicBindings = MsgVpnKafkaReceiverCollectionsTopicBindingsModel.constructFromObject(data['topicBindings']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnKafkaReceiverCollectionsRemoteBrokersModel} remoteBrokers
 */
MsgVpnKafkaReceiverCollectionsModel.prototype.remoteBrokers = undefined;

/**
 * @member {module:model/MsgVpnKafkaReceiverCollectionsTopicBindingsModel} topicBindings
 */
MsgVpnKafkaReceiverCollectionsModel.prototype.topicBindings = undefined;

