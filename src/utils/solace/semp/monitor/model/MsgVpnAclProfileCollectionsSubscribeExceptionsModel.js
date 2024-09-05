import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnAclProfileCollectionsSubscribeExceptionsModel model module.
 * @module model/MsgVpnAclProfileCollectionsSubscribeExceptionsModel
 * @version 2.36
 */
export class MsgVpnAclProfileCollectionsSubscribeExceptionsModel {
  /**
   * Constructs a new <code>MsgVpnAclProfileCollectionsSubscribeExceptionsModel</code>.
   * @alias module:model/MsgVpnAclProfileCollectionsSubscribeExceptionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAclProfileCollectionsSubscribeExceptionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAclProfileCollectionsSubscribeExceptionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAclProfileCollectionsSubscribeExceptionsModel} The populated <code>MsgVpnAclProfileCollectionsSubscribeExceptionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAclProfileCollectionsSubscribeExceptionsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the subscribeExceptions collection. Deprecated since 2.14. Replaced by subscribeTopicExceptions.
 * @member {Number} count
 */
MsgVpnAclProfileCollectionsSubscribeExceptionsModel.prototype.count = undefined;

