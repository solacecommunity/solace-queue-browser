import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnAclProfileCollectionsSubscribeTopicExceptionsModel model module.
 * @module model/MsgVpnAclProfileCollectionsSubscribeTopicExceptionsModel
 * @version 2.36
 */
export class MsgVpnAclProfileCollectionsSubscribeTopicExceptionsModel {
  /**
   * Constructs a new <code>MsgVpnAclProfileCollectionsSubscribeTopicExceptionsModel</code>.
   * @alias module:model/MsgVpnAclProfileCollectionsSubscribeTopicExceptionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAclProfileCollectionsSubscribeTopicExceptionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAclProfileCollectionsSubscribeTopicExceptionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAclProfileCollectionsSubscribeTopicExceptionsModel} The populated <code>MsgVpnAclProfileCollectionsSubscribeTopicExceptionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAclProfileCollectionsSubscribeTopicExceptionsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the subscribeTopicExceptions collection. Available since 2.14.
 * @member {Number} count
 */
MsgVpnAclProfileCollectionsSubscribeTopicExceptionsModel.prototype.count = undefined;

