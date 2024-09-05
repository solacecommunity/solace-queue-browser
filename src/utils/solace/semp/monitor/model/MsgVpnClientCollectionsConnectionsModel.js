import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnClientCollectionsConnectionsModel model module.
 * @module model/MsgVpnClientCollectionsConnectionsModel
 * @version 2.36
 */
export class MsgVpnClientCollectionsConnectionsModel {
  /**
   * Constructs a new <code>MsgVpnClientCollectionsConnectionsModel</code>.
   * @alias module:model/MsgVpnClientCollectionsConnectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnClientCollectionsConnectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientCollectionsConnectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientCollectionsConnectionsModel} The populated <code>MsgVpnClientCollectionsConnectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientCollectionsConnectionsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the connections collection.
 * @member {Number} count
 */
MsgVpnClientCollectionsConnectionsModel.prototype.count = undefined;

