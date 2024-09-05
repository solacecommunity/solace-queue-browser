import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnAclProfilePublishExceptionModel model module.
 * @module model/MsgVpnAclProfilePublishExceptionModel
 * @version 2.36
 */
export class MsgVpnAclProfilePublishExceptionModel {
  /**
   * Constructs a new <code>MsgVpnAclProfilePublishExceptionModel</code>.
   * @alias module:model/MsgVpnAclProfilePublishExceptionModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAclProfilePublishExceptionModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAclProfilePublishExceptionModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAclProfilePublishExceptionModel} The populated <code>MsgVpnAclProfilePublishExceptionModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAclProfilePublishExceptionModel();
      if (data.hasOwnProperty('aclProfileName'))
        obj.aclProfileName = ApiClient.convertToType(data['aclProfileName'], 'String');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('publishExceptionTopic'))
        obj.publishExceptionTopic = ApiClient.convertToType(data['publishExceptionTopic'], 'String');
      if (data.hasOwnProperty('topicSyntax'))
        obj.topicSyntax = ApiClient.convertToType(data['topicSyntax'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the ACL Profile. Deprecated since 2.14. Replaced by publishTopicExceptions.
 * @member {String} aclProfileName
 */
MsgVpnAclProfilePublishExceptionModel.prototype.aclProfileName = undefined;

/**
 * The name of the Message VPN. Deprecated since 2.14. Replaced by publishTopicExceptions.
 * @member {String} msgVpnName
 */
MsgVpnAclProfilePublishExceptionModel.prototype.msgVpnName = undefined;

/**
 * The topic for the exception to the default action taken. May include wildcard characters. Deprecated since 2.14. Replaced by publishTopicExceptions.
 * @member {String} publishExceptionTopic
 */
MsgVpnAclProfilePublishExceptionModel.prototype.publishExceptionTopic = undefined;

/**
 * Allowed values for the <code>topicSyntax</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnAclProfilePublishExceptionModel.TopicSyntaxEnum = {
  /**
   * value: "smf"
   * @const
   */
  smf: "smf",

  /**
   * value: "mqtt"
   * @const
   */
  mqtt: "mqtt"
};
/**
 * The syntax of the topic for the exception to the default action taken. The allowed values and their meaning are:  <pre> \"smf\" - Topic uses SMF syntax. \"mqtt\" - Topic uses MQTT syntax. </pre>  Deprecated since 2.14. Replaced by publishTopicExceptions.
 * @member {module:model/MsgVpnAclProfilePublishExceptionModel.TopicSyntaxEnum} topicSyntax
 */
MsgVpnAclProfilePublishExceptionModel.prototype.topicSyntax = undefined;

