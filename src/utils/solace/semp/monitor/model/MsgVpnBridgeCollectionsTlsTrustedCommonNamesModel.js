import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnBridgeCollectionsTlsTrustedCommonNamesModel model module.
 * @module model/MsgVpnBridgeCollectionsTlsTrustedCommonNamesModel
 * @version 2.36
 */
export class MsgVpnBridgeCollectionsTlsTrustedCommonNamesModel {
  /**
   * Constructs a new <code>MsgVpnBridgeCollectionsTlsTrustedCommonNamesModel</code>.
   * @alias module:model/MsgVpnBridgeCollectionsTlsTrustedCommonNamesModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnBridgeCollectionsTlsTrustedCommonNamesModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnBridgeCollectionsTlsTrustedCommonNamesModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnBridgeCollectionsTlsTrustedCommonNamesModel} The populated <code>MsgVpnBridgeCollectionsTlsTrustedCommonNamesModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnBridgeCollectionsTlsTrustedCommonNamesModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the tlsTrustedCommonNames collection. Deprecated since 2.18. Common Name validation has been replaced by Server Certificate Name validation.
 * @member {Number} count
 */
MsgVpnBridgeCollectionsTlsTrustedCommonNamesModel.prototype.count = undefined;

