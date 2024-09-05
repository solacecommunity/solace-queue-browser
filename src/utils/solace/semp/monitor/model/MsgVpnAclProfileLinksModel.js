import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnAclProfileLinksModel model module.
 * @module model/MsgVpnAclProfileLinksModel
 * @version 2.36
 */
export class MsgVpnAclProfileLinksModel {
  /**
   * Constructs a new <code>MsgVpnAclProfileLinksModel</code>.
   * @alias module:model/MsgVpnAclProfileLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAclProfileLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAclProfileLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAclProfileLinksModel} The populated <code>MsgVpnAclProfileLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAclProfileLinksModel();
      if (data.hasOwnProperty('clientConnectExceptionsUri'))
        obj.clientConnectExceptionsUri = ApiClient.convertToType(data['clientConnectExceptionsUri'], 'String');
      if (data.hasOwnProperty('publishExceptionsUri'))
        obj.publishExceptionsUri = ApiClient.convertToType(data['publishExceptionsUri'], 'String');
      if (data.hasOwnProperty('publishTopicExceptionsUri'))
        obj.publishTopicExceptionsUri = ApiClient.convertToType(data['publishTopicExceptionsUri'], 'String');
      if (data.hasOwnProperty('subscribeExceptionsUri'))
        obj.subscribeExceptionsUri = ApiClient.convertToType(data['subscribeExceptionsUri'], 'String');
      if (data.hasOwnProperty('subscribeShareNameExceptionsUri'))
        obj.subscribeShareNameExceptionsUri = ApiClient.convertToType(data['subscribeShareNameExceptionsUri'], 'String');
      if (data.hasOwnProperty('subscribeTopicExceptionsUri'))
        obj.subscribeTopicExceptionsUri = ApiClient.convertToType(data['subscribeTopicExceptionsUri'], 'String');
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this ACL Profile's collection of Client Connect Exception objects.
 * @member {String} clientConnectExceptionsUri
 */
MsgVpnAclProfileLinksModel.prototype.clientConnectExceptionsUri = undefined;

/**
 * The URI of this ACL Profile's collection of Publish Topic Exception objects. Deprecated since 2.14. Replaced by publishTopicExceptions.
 * @member {String} publishExceptionsUri
 */
MsgVpnAclProfileLinksModel.prototype.publishExceptionsUri = undefined;

/**
 * The URI of this ACL Profile's collection of Publish Topic Exception objects. Available since 2.14.
 * @member {String} publishTopicExceptionsUri
 */
MsgVpnAclProfileLinksModel.prototype.publishTopicExceptionsUri = undefined;

/**
 * The URI of this ACL Profile's collection of Subscribe Topic Exception objects. Deprecated since 2.14. Replaced by subscribeTopicExceptions.
 * @member {String} subscribeExceptionsUri
 */
MsgVpnAclProfileLinksModel.prototype.subscribeExceptionsUri = undefined;

/**
 * The URI of this ACL Profile's collection of Subscribe Share Name Exception objects. Available since 2.14.
 * @member {String} subscribeShareNameExceptionsUri
 */
MsgVpnAclProfileLinksModel.prototype.subscribeShareNameExceptionsUri = undefined;

/**
 * The URI of this ACL Profile's collection of Subscribe Topic Exception objects. Available since 2.14.
 * @member {String} subscribeTopicExceptionsUri
 */
MsgVpnAclProfileLinksModel.prototype.subscribeTopicExceptionsUri = undefined;

/**
 * The URI of this ACL Profile object.
 * @member {String} uri
 */
MsgVpnAclProfileLinksModel.prototype.uri = undefined;

