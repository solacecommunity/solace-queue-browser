import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnKafkaSenderRemoteBrokerCollectionsModel model module.
 * @module model/MsgVpnKafkaSenderRemoteBrokerCollectionsModel
 * @version 2.36
 */
export class MsgVpnKafkaSenderRemoteBrokerCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnKafkaSenderRemoteBrokerCollectionsModel</code>.
   * @alias module:model/MsgVpnKafkaSenderRemoteBrokerCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnKafkaSenderRemoteBrokerCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnKafkaSenderRemoteBrokerCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnKafkaSenderRemoteBrokerCollectionsModel} The populated <code>MsgVpnKafkaSenderRemoteBrokerCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnKafkaSenderRemoteBrokerCollectionsModel();
    }
    return obj;
  }
}
