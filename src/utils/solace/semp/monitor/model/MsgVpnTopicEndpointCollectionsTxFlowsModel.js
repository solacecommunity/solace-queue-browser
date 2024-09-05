import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnTopicEndpointCollectionsTxFlowsModel model module.
 * @module model/MsgVpnTopicEndpointCollectionsTxFlowsModel
 * @version 2.36
 */
export class MsgVpnTopicEndpointCollectionsTxFlowsModel {
  /**
   * Constructs a new <code>MsgVpnTopicEndpointCollectionsTxFlowsModel</code>.
   * @alias module:model/MsgVpnTopicEndpointCollectionsTxFlowsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTopicEndpointCollectionsTxFlowsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTopicEndpointCollectionsTxFlowsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTopicEndpointCollectionsTxFlowsModel} The populated <code>MsgVpnTopicEndpointCollectionsTxFlowsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTopicEndpointCollectionsTxFlowsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the txFlows collection.
 * @member {Number} count
 */
MsgVpnTopicEndpointCollectionsTxFlowsModel.prototype.count = undefined;

