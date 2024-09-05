import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnAclProfileSubscribeTopicExceptionModel model module.
 * @module model/MsgVpnAclProfileSubscribeTopicExceptionModel
 * @version 2.36
 */
export class MsgVpnAclProfileSubscribeTopicExceptionModel {
  /**
   * Constructs a new <code>MsgVpnAclProfileSubscribeTopicExceptionModel</code>.
   * @alias module:model/MsgVpnAclProfileSubscribeTopicExceptionModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAclProfileSubscribeTopicExceptionModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAclProfileSubscribeTopicExceptionModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAclProfileSubscribeTopicExceptionModel} The populated <code>MsgVpnAclProfileSubscribeTopicExceptionModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAclProfileSubscribeTopicExceptionModel();
      if (data.hasOwnProperty('aclProfileName'))
        obj.aclProfileName = ApiClient.convertToType(data['aclProfileName'], 'String');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('subscribeTopicException'))
        obj.subscribeTopicException = ApiClient.convertToType(data['subscribeTopicException'], 'String');
      if (data.hasOwnProperty('subscribeTopicExceptionSyntax'))
        obj.subscribeTopicExceptionSyntax = ApiClient.convertToType(data['subscribeTopicExceptionSyntax'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the ACL Profile.
 * @member {String} aclProfileName
 */
MsgVpnAclProfileSubscribeTopicExceptionModel.prototype.aclProfileName = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnAclProfileSubscribeTopicExceptionModel.prototype.msgVpnName = undefined;

/**
 * The topic for the exception to the default action taken. May include wildcard characters.
 * @member {String} subscribeTopicException
 */
MsgVpnAclProfileSubscribeTopicExceptionModel.prototype.subscribeTopicException = undefined;

/**
 * Allowed values for the <code>subscribeTopicExceptionSyntax</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnAclProfileSubscribeTopicExceptionModel.SubscribeTopicExceptionSyntaxEnum = {
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
 * The syntax of the topic for the exception to the default action taken. The allowed values and their meaning are:  <pre> \"smf\" - Topic uses SMF syntax. \"mqtt\" - Topic uses MQTT syntax. </pre> 
 * @member {module:model/MsgVpnAclProfileSubscribeTopicExceptionModel.SubscribeTopicExceptionSyntaxEnum} subscribeTopicExceptionSyntax
 */
MsgVpnAclProfileSubscribeTopicExceptionModel.prototype.subscribeTopicExceptionSyntax = undefined;

