import {ApiClient} from '../ApiClient';
import {MsgVpnQueueCollectionsMsgsModel} from './MsgVpnQueueCollectionsMsgsModel';
import {MsgVpnQueueCollectionsPrioritiesModel} from './MsgVpnQueueCollectionsPrioritiesModel';
import {MsgVpnQueueCollectionsSubscriptionsModel} from './MsgVpnQueueCollectionsSubscriptionsModel';
import {MsgVpnQueueCollectionsTxFlowsModel} from './MsgVpnQueueCollectionsTxFlowsModel';

/**
 * The MsgVpnQueueCollectionsModel model module.
 * @module model/MsgVpnQueueCollectionsModel
 * @version 2.36
 */
export class MsgVpnQueueCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnQueueCollectionsModel</code>.
   * @alias module:model/MsgVpnQueueCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnQueueCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnQueueCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnQueueCollectionsModel} The populated <code>MsgVpnQueueCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnQueueCollectionsModel();
      if (data.hasOwnProperty('msgs'))
        obj.msgs = MsgVpnQueueCollectionsMsgsModel.constructFromObject(data['msgs']);
      if (data.hasOwnProperty('priorities'))
        obj.priorities = MsgVpnQueueCollectionsPrioritiesModel.constructFromObject(data['priorities']);
      if (data.hasOwnProperty('subscriptions'))
        obj.subscriptions = MsgVpnQueueCollectionsSubscriptionsModel.constructFromObject(data['subscriptions']);
      if (data.hasOwnProperty('txFlows'))
        obj.txFlows = MsgVpnQueueCollectionsTxFlowsModel.constructFromObject(data['txFlows']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnQueueCollectionsMsgsModel} msgs
 */
MsgVpnQueueCollectionsModel.prototype.msgs = undefined;

/**
 * @member {module:model/MsgVpnQueueCollectionsPrioritiesModel} priorities
 */
MsgVpnQueueCollectionsModel.prototype.priorities = undefined;

/**
 * @member {module:model/MsgVpnQueueCollectionsSubscriptionsModel} subscriptions
 */
MsgVpnQueueCollectionsModel.prototype.subscriptions = undefined;

/**
 * @member {module:model/MsgVpnQueueCollectionsTxFlowsModel} txFlows
 */
MsgVpnQueueCollectionsModel.prototype.txFlows = undefined;

