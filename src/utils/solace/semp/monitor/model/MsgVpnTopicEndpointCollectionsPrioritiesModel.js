import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnTopicEndpointCollectionsPrioritiesModel model module.
 * @module model/MsgVpnTopicEndpointCollectionsPrioritiesModel
 * @version 2.36
 */
export class MsgVpnTopicEndpointCollectionsPrioritiesModel {
  /**
   * Constructs a new <code>MsgVpnTopicEndpointCollectionsPrioritiesModel</code>.
   * @alias module:model/MsgVpnTopicEndpointCollectionsPrioritiesModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTopicEndpointCollectionsPrioritiesModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTopicEndpointCollectionsPrioritiesModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTopicEndpointCollectionsPrioritiesModel} The populated <code>MsgVpnTopicEndpointCollectionsPrioritiesModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTopicEndpointCollectionsPrioritiesModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the priorities collection.
 * @member {Number} count
 */
MsgVpnTopicEndpointCollectionsPrioritiesModel.prototype.count = undefined;

