import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnTopicEndpointCollectionsMsgsModel model module.
 * @module model/MsgVpnTopicEndpointCollectionsMsgsModel
 * @version 2.36
 */
export class MsgVpnTopicEndpointCollectionsMsgsModel {
  /**
   * Constructs a new <code>MsgVpnTopicEndpointCollectionsMsgsModel</code>.
   * @alias module:model/MsgVpnTopicEndpointCollectionsMsgsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTopicEndpointCollectionsMsgsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTopicEndpointCollectionsMsgsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTopicEndpointCollectionsMsgsModel} The populated <code>MsgVpnTopicEndpointCollectionsMsgsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTopicEndpointCollectionsMsgsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the msgs collection.
 * @member {Number} count
 */
MsgVpnTopicEndpointCollectionsMsgsModel.prototype.count = undefined;

