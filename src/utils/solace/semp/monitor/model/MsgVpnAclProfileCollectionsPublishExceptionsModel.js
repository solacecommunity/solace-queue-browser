import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnAclProfileCollectionsPublishExceptionsModel model module.
 * @module model/MsgVpnAclProfileCollectionsPublishExceptionsModel
 * @version 2.36
 */
export class MsgVpnAclProfileCollectionsPublishExceptionsModel {
  /**
   * Constructs a new <code>MsgVpnAclProfileCollectionsPublishExceptionsModel</code>.
   * @alias module:model/MsgVpnAclProfileCollectionsPublishExceptionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAclProfileCollectionsPublishExceptionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAclProfileCollectionsPublishExceptionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAclProfileCollectionsPublishExceptionsModel} The populated <code>MsgVpnAclProfileCollectionsPublishExceptionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAclProfileCollectionsPublishExceptionsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the publishExceptions collection. Deprecated since 2.14. Replaced by publishTopicExceptions.
 * @member {Number} count
 */
MsgVpnAclProfileCollectionsPublishExceptionsModel.prototype.count = undefined;

