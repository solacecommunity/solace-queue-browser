import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnAclProfileCollectionsClientConnectExceptionsModel model module.
 * @module model/MsgVpnAclProfileCollectionsClientConnectExceptionsModel
 * @version 2.36
 */
export class MsgVpnAclProfileCollectionsClientConnectExceptionsModel {
  /**
   * Constructs a new <code>MsgVpnAclProfileCollectionsClientConnectExceptionsModel</code>.
   * @alias module:model/MsgVpnAclProfileCollectionsClientConnectExceptionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAclProfileCollectionsClientConnectExceptionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAclProfileCollectionsClientConnectExceptionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAclProfileCollectionsClientConnectExceptionsModel} The populated <code>MsgVpnAclProfileCollectionsClientConnectExceptionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAclProfileCollectionsClientConnectExceptionsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the clientConnectExceptions collection.
 * @member {Number} count
 */
MsgVpnAclProfileCollectionsClientConnectExceptionsModel.prototype.count = undefined;

