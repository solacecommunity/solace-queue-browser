import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnBridgeCollectionsRemoteMsgVpnsModel model module.
 * @module model/MsgVpnBridgeCollectionsRemoteMsgVpnsModel
 * @version 2.36
 */
export class MsgVpnBridgeCollectionsRemoteMsgVpnsModel {
  /**
   * Constructs a new <code>MsgVpnBridgeCollectionsRemoteMsgVpnsModel</code>.
   * @alias module:model/MsgVpnBridgeCollectionsRemoteMsgVpnsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnBridgeCollectionsRemoteMsgVpnsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnBridgeCollectionsRemoteMsgVpnsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnBridgeCollectionsRemoteMsgVpnsModel} The populated <code>MsgVpnBridgeCollectionsRemoteMsgVpnsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnBridgeCollectionsRemoteMsgVpnsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the remoteMsgVpns collection.
 * @member {Number} count
 */
MsgVpnBridgeCollectionsRemoteMsgVpnsModel.prototype.count = undefined;

