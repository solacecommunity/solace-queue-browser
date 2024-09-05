import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnCollectionsTopicEndpointTemplatesModel model module.
 * @module model/MsgVpnCollectionsTopicEndpointTemplatesModel
 * @version 2.36
 */
export class MsgVpnCollectionsTopicEndpointTemplatesModel {
  /**
   * Constructs a new <code>MsgVpnCollectionsTopicEndpointTemplatesModel</code>.
   * @alias module:model/MsgVpnCollectionsTopicEndpointTemplatesModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnCollectionsTopicEndpointTemplatesModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCollectionsTopicEndpointTemplatesModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCollectionsTopicEndpointTemplatesModel} The populated <code>MsgVpnCollectionsTopicEndpointTemplatesModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCollectionsTopicEndpointTemplatesModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the topicEndpointTemplates collection. Available since 2.14.
 * @member {Number} count
 */
MsgVpnCollectionsTopicEndpointTemplatesModel.prototype.count = undefined;

