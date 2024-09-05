import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnAclProfileSubscribeExceptionModel model module.
 * @module model/MsgVpnAclProfileSubscribeExceptionModel
 * @version 2.36
 */
export class MsgVpnAclProfileSubscribeExceptionModel {
  /**
   * Constructs a new <code>MsgVpnAclProfileSubscribeExceptionModel</code>.
   * @alias module:model/MsgVpnAclProfileSubscribeExceptionModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAclProfileSubscribeExceptionModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAclProfileSubscribeExceptionModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAclProfileSubscribeExceptionModel} The populated <code>MsgVpnAclProfileSubscribeExceptionModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAclProfileSubscribeExceptionModel();
      if (data.hasOwnProperty('aclProfileName'))
        obj.aclProfileName = ApiClient.convertToType(data['aclProfileName'], 'String');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('subscribeExceptionTopic'))
        obj.subscribeExceptionTopic = ApiClient.convertToType(data['subscribeExceptionTopic'], 'String');
      if (data.hasOwnProperty('topicSyntax'))
        obj.topicSyntax = ApiClient.convertToType(data['topicSyntax'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the ACL Profile. Deprecated since 2.14. Replaced by subscribeTopicExceptions.
 * @member {String} aclProfileName
 */
MsgVpnAclProfileSubscribeExceptionModel.prototype.aclProfileName = undefined;

/**
 * The name of the Message VPN. Deprecated since 2.14. Replaced by subscribeTopicExceptions.
 * @member {String} msgVpnName
 */
MsgVpnAclProfileSubscribeExceptionModel.prototype.msgVpnName = undefined;

/**
 * The topic for the exception to the default action taken. May include wildcard characters. Deprecated since 2.14. Replaced by subscribeTopicExceptions.
 * @member {String} subscribeExceptionTopic
 */
MsgVpnAclProfileSubscribeExceptionModel.prototype.subscribeExceptionTopic = undefined;

/**
 * Allowed values for the <code>topicSyntax</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnAclProfileSubscribeExceptionModel.TopicSyntaxEnum = {
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
 * The syntax of the topic for the exception to the default action taken. The allowed values and their meaning are:  <pre> \"smf\" - Topic uses SMF syntax. \"mqtt\" - Topic uses MQTT syntax. </pre>  Deprecated since 2.14. Replaced by subscribeTopicExceptions.
 * @member {module:model/MsgVpnAclProfileSubscribeExceptionModel.TopicSyntaxEnum} topicSyntax
 */
MsgVpnAclProfileSubscribeExceptionModel.prototype.topicSyntax = undefined;

