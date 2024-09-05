import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnCollectionsTransactionsModel model module.
 * @module model/MsgVpnCollectionsTransactionsModel
 * @version 2.36
 */
export class MsgVpnCollectionsTransactionsModel {
  /**
   * Constructs a new <code>MsgVpnCollectionsTransactionsModel</code>.
   * @alias module:model/MsgVpnCollectionsTransactionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnCollectionsTransactionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCollectionsTransactionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCollectionsTransactionsModel} The populated <code>MsgVpnCollectionsTransactionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCollectionsTransactionsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the transactions collection. Available since 2.12.
 * @member {Number} count
 */
MsgVpnCollectionsTransactionsModel.prototype.count = undefined;

