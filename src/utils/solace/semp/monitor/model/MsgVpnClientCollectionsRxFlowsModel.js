import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnClientCollectionsRxFlowsModel model module.
 * @module model/MsgVpnClientCollectionsRxFlowsModel
 * @version 2.36
 */
export class MsgVpnClientCollectionsRxFlowsModel {
  /**
   * Constructs a new <code>MsgVpnClientCollectionsRxFlowsModel</code>.
   * @alias module:model/MsgVpnClientCollectionsRxFlowsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnClientCollectionsRxFlowsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientCollectionsRxFlowsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientCollectionsRxFlowsModel} The populated <code>MsgVpnClientCollectionsRxFlowsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientCollectionsRxFlowsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the rxFlows collection.
 * @member {Number} count
 */
MsgVpnClientCollectionsRxFlowsModel.prototype.count = undefined;

