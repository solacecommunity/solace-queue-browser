import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnQueueCollectionsTxFlowsModel model module.
 * @module model/MsgVpnQueueCollectionsTxFlowsModel
 * @version 2.36
 */
export class MsgVpnQueueCollectionsTxFlowsModel {
  /**
   * Constructs a new <code>MsgVpnQueueCollectionsTxFlowsModel</code>.
   * @alias module:model/MsgVpnQueueCollectionsTxFlowsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnQueueCollectionsTxFlowsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnQueueCollectionsTxFlowsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnQueueCollectionsTxFlowsModel} The populated <code>MsgVpnQueueCollectionsTxFlowsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnQueueCollectionsTxFlowsModel();
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
MsgVpnQueueCollectionsTxFlowsModel.prototype.count = undefined;

