import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnAclProfileSubscribeShareNameExceptionModel model module.
 * @module model/MsgVpnAclProfileSubscribeShareNameExceptionModel
 * @version 2.36
 */
export class MsgVpnAclProfileSubscribeShareNameExceptionModel {
  /**
   * Constructs a new <code>MsgVpnAclProfileSubscribeShareNameExceptionModel</code>.
   * @alias module:model/MsgVpnAclProfileSubscribeShareNameExceptionModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAclProfileSubscribeShareNameExceptionModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAclProfileSubscribeShareNameExceptionModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAclProfileSubscribeShareNameExceptionModel} The populated <code>MsgVpnAclProfileSubscribeShareNameExceptionModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAclProfileSubscribeShareNameExceptionModel();
      if (data.hasOwnProperty('aclProfileName'))
        obj.aclProfileName = ApiClient.convertToType(data['aclProfileName'], 'String');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('subscribeShareNameException'))
        obj.subscribeShareNameException = ApiClient.convertToType(data['subscribeShareNameException'], 'String');
      if (data.hasOwnProperty('subscribeShareNameExceptionSyntax'))
        obj.subscribeShareNameExceptionSyntax = ApiClient.convertToType(data['subscribeShareNameExceptionSyntax'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the ACL Profile.
 * @member {String} aclProfileName
 */
MsgVpnAclProfileSubscribeShareNameExceptionModel.prototype.aclProfileName = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnAclProfileSubscribeShareNameExceptionModel.prototype.msgVpnName = undefined;

/**
 * The subscribe share name exception to the default action taken. May include wildcard characters.
 * @member {String} subscribeShareNameException
 */
MsgVpnAclProfileSubscribeShareNameExceptionModel.prototype.subscribeShareNameException = undefined;

/**
 * Allowed values for the <code>subscribeShareNameExceptionSyntax</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnAclProfileSubscribeShareNameExceptionModel.SubscribeShareNameExceptionSyntaxEnum = {
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
 * The syntax of the subscribe share name for the exception to the default action taken. The allowed values and their meaning are:  <pre> \"smf\" - Topic uses SMF syntax. \"mqtt\" - Topic uses MQTT syntax. </pre> 
 * @member {module:model/MsgVpnAclProfileSubscribeShareNameExceptionModel.SubscribeShareNameExceptionSyntaxEnum} subscribeShareNameExceptionSyntax
 */
MsgVpnAclProfileSubscribeShareNameExceptionModel.prototype.subscribeShareNameExceptionSyntax = undefined;

