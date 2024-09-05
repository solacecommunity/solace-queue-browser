import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnClientCollectionsTxFlowsModel model module.
 * @module model/MsgVpnClientCollectionsTxFlowsModel
 * @version 2.36
 */
export class MsgVpnClientCollectionsTxFlowsModel {
  /**
   * Constructs a new <code>MsgVpnClientCollectionsTxFlowsModel</code>.
   * @alias module:model/MsgVpnClientCollectionsTxFlowsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnClientCollectionsTxFlowsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientCollectionsTxFlowsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientCollectionsTxFlowsModel} The populated <code>MsgVpnClientCollectionsTxFlowsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientCollectionsTxFlowsModel();
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
MsgVpnClientCollectionsTxFlowsModel.prototype.count = undefined;

