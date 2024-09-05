import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnClientCollectionsTransactedSessionsModel model module.
 * @module model/MsgVpnClientCollectionsTransactedSessionsModel
 * @version 2.36
 */
export class MsgVpnClientCollectionsTransactedSessionsModel {
  /**
   * Constructs a new <code>MsgVpnClientCollectionsTransactedSessionsModel</code>.
   * @alias module:model/MsgVpnClientCollectionsTransactedSessionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnClientCollectionsTransactedSessionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientCollectionsTransactedSessionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientCollectionsTransactedSessionsModel} The populated <code>MsgVpnClientCollectionsTransactedSessionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientCollectionsTransactedSessionsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the transactedSessions collection.
 * @member {Number} count
 */
MsgVpnClientCollectionsTransactedSessionsModel.prototype.count = undefined;

