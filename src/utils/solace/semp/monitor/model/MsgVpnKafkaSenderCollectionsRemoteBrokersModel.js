import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnKafkaSenderCollectionsRemoteBrokersModel model module.
 * @module model/MsgVpnKafkaSenderCollectionsRemoteBrokersModel
 * @version 2.36
 */
export class MsgVpnKafkaSenderCollectionsRemoteBrokersModel {
  /**
   * Constructs a new <code>MsgVpnKafkaSenderCollectionsRemoteBrokersModel</code>.
   * @alias module:model/MsgVpnKafkaSenderCollectionsRemoteBrokersModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnKafkaSenderCollectionsRemoteBrokersModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnKafkaSenderCollectionsRemoteBrokersModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnKafkaSenderCollectionsRemoteBrokersModel} The populated <code>MsgVpnKafkaSenderCollectionsRemoteBrokersModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnKafkaSenderCollectionsRemoteBrokersModel();
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
MsgVpnKafkaSenderCollectionsRemoteBrokersModel.prototype.count = undefined;

