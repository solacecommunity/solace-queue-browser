import {ApiClient} from '../ApiClient';
import {MsgVpnKafkaSenderCollectionsQueueBindingsModel} from './MsgVpnKafkaSenderCollectionsQueueBindingsModel';
import {MsgVpnKafkaSenderCollectionsRemoteBrokersModel} from './MsgVpnKafkaSenderCollectionsRemoteBrokersModel';

/**
 * The MsgVpnKafkaSenderCollectionsModel model module.
 * @module model/MsgVpnKafkaSenderCollectionsModel
 * @version 2.36
 */
export class MsgVpnKafkaSenderCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnKafkaSenderCollectionsModel</code>.
   * @alias module:model/MsgVpnKafkaSenderCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnKafkaSenderCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnKafkaSenderCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnKafkaSenderCollectionsModel} The populated <code>MsgVpnKafkaSenderCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnKafkaSenderCollectionsModel();
      if (data.hasOwnProperty('queueBindings'))
        obj.queueBindings = MsgVpnKafkaSenderCollectionsQueueBindingsModel.constructFromObject(data['queueBindings']);
      if (data.hasOwnProperty('remoteBrokers'))
        obj.remoteBrokers = MsgVpnKafkaSenderCollectionsRemoteBrokersModel.constructFromObject(data['remoteBrokers']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnKafkaSenderCollectionsQueueBindingsModel} queueBindings
 */
MsgVpnKafkaSenderCollectionsModel.prototype.queueBindings = undefined;

/**
 * @member {module:model/MsgVpnKafkaSenderCollectionsRemoteBrokersModel} remoteBrokers
 */
MsgVpnKafkaSenderCollectionsModel.prototype.remoteBrokers = undefined;

