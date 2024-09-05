import {ApiClient} from '../ApiClient';
import {MsgVpnClientCollectionsConnectionsModel} from './MsgVpnClientCollectionsConnectionsModel';
import {MsgVpnClientCollectionsRxFlowsModel} from './MsgVpnClientCollectionsRxFlowsModel';
import {MsgVpnClientCollectionsSubscriptionsModel} from './MsgVpnClientCollectionsSubscriptionsModel';
import {MsgVpnClientCollectionsTransactedSessionsModel} from './MsgVpnClientCollectionsTransactedSessionsModel';
import {MsgVpnClientCollectionsTxFlowsModel} from './MsgVpnClientCollectionsTxFlowsModel';

/**
 * The MsgVpnClientCollectionsModel model module.
 * @module model/MsgVpnClientCollectionsModel
 * @version 2.36
 */
export class MsgVpnClientCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnClientCollectionsModel</code>.
   * @alias module:model/MsgVpnClientCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnClientCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientCollectionsModel} The populated <code>MsgVpnClientCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientCollectionsModel();
      if (data.hasOwnProperty('connections'))
        obj.connections = MsgVpnClientCollectionsConnectionsModel.constructFromObject(data['connections']);
      if (data.hasOwnProperty('rxFlows'))
        obj.rxFlows = MsgVpnClientCollectionsRxFlowsModel.constructFromObject(data['rxFlows']);
      if (data.hasOwnProperty('subscriptions'))
        obj.subscriptions = MsgVpnClientCollectionsSubscriptionsModel.constructFromObject(data['subscriptions']);
      if (data.hasOwnProperty('transactedSessions'))
        obj.transactedSessions = MsgVpnClientCollectionsTransactedSessionsModel.constructFromObject(data['transactedSessions']);
      if (data.hasOwnProperty('txFlows'))
        obj.txFlows = MsgVpnClientCollectionsTxFlowsModel.constructFromObject(data['txFlows']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnClientCollectionsConnectionsModel} connections
 */
MsgVpnClientCollectionsModel.prototype.connections = undefined;

/**
 * @member {module:model/MsgVpnClientCollectionsRxFlowsModel} rxFlows
 */
MsgVpnClientCollectionsModel.prototype.rxFlows = undefined;

/**
 * @member {module:model/MsgVpnClientCollectionsSubscriptionsModel} subscriptions
 */
MsgVpnClientCollectionsModel.prototype.subscriptions = undefined;

/**
 * @member {module:model/MsgVpnClientCollectionsTransactedSessionsModel} transactedSessions
 */
MsgVpnClientCollectionsModel.prototype.transactedSessions = undefined;

/**
 * @member {module:model/MsgVpnClientCollectionsTxFlowsModel} txFlows
 */
MsgVpnClientCollectionsModel.prototype.txFlows = undefined;

