import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnAclProfilePublishTopicExceptionModel model module.
 * @module model/MsgVpnAclProfilePublishTopicExceptionModel
 * @version 2.36
 */
export class MsgVpnAclProfilePublishTopicExceptionModel {
  /**
   * Constructs a new <code>MsgVpnAclProfilePublishTopicExceptionModel</code>.
   * @alias module:model/MsgVpnAclProfilePublishTopicExceptionModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAclProfilePublishTopicExceptionModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAclProfilePublishTopicExceptionModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAclProfilePublishTopicExceptionModel} The populated <code>MsgVpnAclProfilePublishTopicExceptionModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAclProfilePublishTopicExceptionModel();
      if (data.hasOwnProperty('aclProfileName'))
        obj.aclProfileName = ApiClient.convertToType(data['aclProfileName'], 'String');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('publishTopicException'))
        obj.publishTopicException = ApiClient.convertToType(data['publishTopicException'], 'String');
      if (data.hasOwnProperty('publishTopicExceptionSyntax'))
        obj.publishTopicExceptionSyntax = ApiClient.convertToType(data['publishTopicExceptionSyntax'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the ACL Profile.
 * @member {String} aclProfileName
 */
MsgVpnAclProfilePublishTopicExceptionModel.prototype.aclProfileName = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnAclProfilePublishTopicExceptionModel.prototype.msgVpnName = undefined;

/**
 * The topic for the exception to the default action taken. May include wildcard characters.
 * @member {String} publishTopicException
 */
MsgVpnAclProfilePublishTopicExceptionModel.prototype.publishTopicException = undefined;

/**
 * Allowed values for the <code>publishTopicExceptionSyntax</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnAclProfilePublishTopicExceptionModel.PublishTopicExceptionSyntaxEnum = {
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
 * @member {module:model/MsgVpnAclProfilePublishTopicExceptionModel.PublishTopicExceptionSyntaxEnum} publishTopicExceptionSyntax
 */
MsgVpnAclProfilePublishTopicExceptionModel.prototype.publishTopicExceptionSyntax = undefined;

