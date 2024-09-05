import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnCollectionsTopicEndpointsModel model module.
 * @module model/MsgVpnCollectionsTopicEndpointsModel
 * @version 2.36
 */
export class MsgVpnCollectionsTopicEndpointsModel {
  /**
   * Constructs a new <code>MsgVpnCollectionsTopicEndpointsModel</code>.
   * @alias module:model/MsgVpnCollectionsTopicEndpointsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnCollectionsTopicEndpointsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCollectionsTopicEndpointsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCollectionsTopicEndpointsModel} The populated <code>MsgVpnCollectionsTopicEndpointsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCollectionsTopicEndpointsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the topicEndpoints collection. Available since 2.12.
 * @member {Number} count
 */
MsgVpnCollectionsTopicEndpointsModel.prototype.count = undefined;

