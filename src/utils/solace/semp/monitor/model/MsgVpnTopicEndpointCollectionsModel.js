import {ApiClient} from '../ApiClient';
import {MsgVpnTopicEndpointCollectionsMsgsModel} from './MsgVpnTopicEndpointCollectionsMsgsModel';
import {MsgVpnTopicEndpointCollectionsPrioritiesModel} from './MsgVpnTopicEndpointCollectionsPrioritiesModel';
import {MsgVpnTopicEndpointCollectionsTxFlowsModel} from './MsgVpnTopicEndpointCollectionsTxFlowsModel';

/**
 * The MsgVpnTopicEndpointCollectionsModel model module.
 * @module model/MsgVpnTopicEndpointCollectionsModel
 * @version 2.36
 */
export class MsgVpnTopicEndpointCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnTopicEndpointCollectionsModel</code>.
   * @alias module:model/MsgVpnTopicEndpointCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTopicEndpointCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTopicEndpointCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTopicEndpointCollectionsModel} The populated <code>MsgVpnTopicEndpointCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTopicEndpointCollectionsModel();
      if (data.hasOwnProperty('msgs'))
        obj.msgs = MsgVpnTopicEndpointCollectionsMsgsModel.constructFromObject(data['msgs']);
      if (data.hasOwnProperty('priorities'))
        obj.priorities = MsgVpnTopicEndpointCollectionsPrioritiesModel.constructFromObject(data['priorities']);
      if (data.hasOwnProperty('txFlows'))
        obj.txFlows = MsgVpnTopicEndpointCollectionsTxFlowsModel.constructFromObject(data['txFlows']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnTopicEndpointCollectionsMsgsModel} msgs
 */
MsgVpnTopicEndpointCollectionsModel.prototype.msgs = undefined;

/**
 * @member {module:model/MsgVpnTopicEndpointCollectionsPrioritiesModel} priorities
 */
MsgVpnTopicEndpointCollectionsModel.prototype.priorities = undefined;

/**
 * @member {module:model/MsgVpnTopicEndpointCollectionsTxFlowsModel} txFlows
 */
MsgVpnTopicEndpointCollectionsModel.prototype.txFlows = undefined;

