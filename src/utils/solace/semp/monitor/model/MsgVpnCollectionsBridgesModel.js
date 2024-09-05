import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnCollectionsBridgesModel model module.
 * @module model/MsgVpnCollectionsBridgesModel
 * @version 2.36
 */
export class MsgVpnCollectionsBridgesModel {
  /**
   * Constructs a new <code>MsgVpnCollectionsBridgesModel</code>.
   * @alias module:model/MsgVpnCollectionsBridgesModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnCollectionsBridgesModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCollectionsBridgesModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCollectionsBridgesModel} The populated <code>MsgVpnCollectionsBridgesModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCollectionsBridgesModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the bridges collection.
 * @member {Number} count
 */
MsgVpnCollectionsBridgesModel.prototype.count = undefined;

