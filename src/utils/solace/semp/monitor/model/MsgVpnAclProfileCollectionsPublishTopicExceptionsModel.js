import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnAclProfileCollectionsPublishTopicExceptionsModel model module.
 * @module model/MsgVpnAclProfileCollectionsPublishTopicExceptionsModel
 * @version 2.36
 */
export class MsgVpnAclProfileCollectionsPublishTopicExceptionsModel {
  /**
   * Constructs a new <code>MsgVpnAclProfileCollectionsPublishTopicExceptionsModel</code>.
   * @alias module:model/MsgVpnAclProfileCollectionsPublishTopicExceptionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAclProfileCollectionsPublishTopicExceptionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAclProfileCollectionsPublishTopicExceptionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAclProfileCollectionsPublishTopicExceptionsModel} The populated <code>MsgVpnAclProfileCollectionsPublishTopicExceptionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAclProfileCollectionsPublishTopicExceptionsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the publishTopicExceptions collection. Available since 2.14.
 * @member {Number} count
 */
MsgVpnAclProfileCollectionsPublishTopicExceptionsModel.prototype.count = undefined;

