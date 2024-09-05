import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnAclProfileCollectionsSubscribeShareNameExceptionsModel model module.
 * @module model/MsgVpnAclProfileCollectionsSubscribeShareNameExceptionsModel
 * @version 2.36
 */
export class MsgVpnAclProfileCollectionsSubscribeShareNameExceptionsModel {
  /**
   * Constructs a new <code>MsgVpnAclProfileCollectionsSubscribeShareNameExceptionsModel</code>.
   * @alias module:model/MsgVpnAclProfileCollectionsSubscribeShareNameExceptionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAclProfileCollectionsSubscribeShareNameExceptionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAclProfileCollectionsSubscribeShareNameExceptionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAclProfileCollectionsSubscribeShareNameExceptionsModel} The populated <code>MsgVpnAclProfileCollectionsSubscribeShareNameExceptionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAclProfileCollectionsSubscribeShareNameExceptionsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the subscribeShareNameExceptions collection. Available since 2.14.
 * @member {Number} count
 */
MsgVpnAclProfileCollectionsSubscribeShareNameExceptionsModel.prototype.count = undefined;

