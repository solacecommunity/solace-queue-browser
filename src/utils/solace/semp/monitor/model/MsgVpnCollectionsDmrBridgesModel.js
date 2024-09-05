import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnCollectionsDmrBridgesModel model module.
 * @module model/MsgVpnCollectionsDmrBridgesModel
 * @version 2.36
 */
export class MsgVpnCollectionsDmrBridgesModel {
  /**
   * Constructs a new <code>MsgVpnCollectionsDmrBridgesModel</code>.
   * @alias module:model/MsgVpnCollectionsDmrBridgesModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnCollectionsDmrBridgesModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCollectionsDmrBridgesModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCollectionsDmrBridgesModel} The populated <code>MsgVpnCollectionsDmrBridgesModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCollectionsDmrBridgesModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the dmrBridges collection.
 * @member {Number} count
 */
MsgVpnCollectionsDmrBridgesModel.prototype.count = undefined;

