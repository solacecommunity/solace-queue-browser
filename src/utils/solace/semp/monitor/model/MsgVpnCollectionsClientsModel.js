import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnCollectionsClientsModel model module.
 * @module model/MsgVpnCollectionsClientsModel
 * @version 2.36
 */
export class MsgVpnCollectionsClientsModel {
  /**
   * Constructs a new <code>MsgVpnCollectionsClientsModel</code>.
   * @alias module:model/MsgVpnCollectionsClientsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnCollectionsClientsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCollectionsClientsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCollectionsClientsModel} The populated <code>MsgVpnCollectionsClientsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCollectionsClientsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the clients collection. Available since 2.12.
 * @member {Number} count
 */
MsgVpnCollectionsClientsModel.prototype.count = undefined;

