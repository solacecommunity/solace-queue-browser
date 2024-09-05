import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnAclProfileModel model module.
 * @module model/MsgVpnAclProfileModel
 * @version 2.36
 */
export class MsgVpnAclProfileModel {
  /**
   * Constructs a new <code>MsgVpnAclProfileModel</code>.
   * @alias module:model/MsgVpnAclProfileModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAclProfileModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAclProfileModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAclProfileModel} The populated <code>MsgVpnAclProfileModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAclProfileModel();
      if (data.hasOwnProperty('aclProfileName'))
        obj.aclProfileName = ApiClient.convertToType(data['aclProfileName'], 'String');
      if (data.hasOwnProperty('clientConnectDefaultAction'))
        obj.clientConnectDefaultAction = ApiClient.convertToType(data['clientConnectDefaultAction'], 'String');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('publishTopicDefaultAction'))
        obj.publishTopicDefaultAction = ApiClient.convertToType(data['publishTopicDefaultAction'], 'String');
      if (data.hasOwnProperty('subscribeShareNameDefaultAction'))
        obj.subscribeShareNameDefaultAction = ApiClient.convertToType(data['subscribeShareNameDefaultAction'], 'String');
      if (data.hasOwnProperty('subscribeTopicDefaultAction'))
        obj.subscribeTopicDefaultAction = ApiClient.convertToType(data['subscribeTopicDefaultAction'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the ACL Profile.
 * @member {String} aclProfileName
 */
MsgVpnAclProfileModel.prototype.aclProfileName = undefined;

/**
 * Allowed values for the <code>clientConnectDefaultAction</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnAclProfileModel.ClientConnectDefaultActionEnum = {
  /**
   * value: "allow"
   * @const
   */
  allow: "allow",

  /**
   * value: "disallow"
   * @const
   */
  disallow: "disallow"
};
/**
 * The default action to take when a client using the ACL Profile connects to the Message VPN. The allowed values and their meaning are:  <pre> \"allow\" - Allow client connection unless an exception is found for it. \"disallow\" - Disallow client connection unless an exception is found for it. </pre> 
 * @member {module:model/MsgVpnAclProfileModel.ClientConnectDefaultActionEnum} clientConnectDefaultAction
 */
MsgVpnAclProfileModel.prototype.clientConnectDefaultAction = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnAclProfileModel.prototype.msgVpnName = undefined;

/**
 * Allowed values for the <code>publishTopicDefaultAction</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnAclProfileModel.PublishTopicDefaultActionEnum = {
  /**
   * value: "allow"
   * @const
   */
  allow: "allow",

  /**
   * value: "disallow"
   * @const
   */
  disallow: "disallow"
};
/**
 * The default action to take when a client using the ACL Profile publishes to a topic in the Message VPN. The allowed values and their meaning are:  <pre> \"allow\" - Allow topic unless an exception is found for it. \"disallow\" - Disallow topic unless an exception is found for it. </pre> 
 * @member {module:model/MsgVpnAclProfileModel.PublishTopicDefaultActionEnum} publishTopicDefaultAction
 */
MsgVpnAclProfileModel.prototype.publishTopicDefaultAction = undefined;

/**
 * Allowed values for the <code>subscribeShareNameDefaultAction</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnAclProfileModel.SubscribeShareNameDefaultActionEnum = {
  /**
   * value: "allow"
   * @const
   */
  allow: "allow",

  /**
   * value: "disallow"
   * @const
   */
  disallow: "disallow"
};
/**
 * The default action to take when a client using the ACL Profile subscribes to a share-name subscription in the Message VPN. The allowed values and their meaning are:  <pre> \"allow\" - Allow topic unless an exception is found for it. \"disallow\" - Disallow topic unless an exception is found for it. </pre>  Available since 2.14.
 * @member {module:model/MsgVpnAclProfileModel.SubscribeShareNameDefaultActionEnum} subscribeShareNameDefaultAction
 */
MsgVpnAclProfileModel.prototype.subscribeShareNameDefaultAction = undefined;

/**
 * Allowed values for the <code>subscribeTopicDefaultAction</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnAclProfileModel.SubscribeTopicDefaultActionEnum = {
  /**
   * value: "allow"
   * @const
   */
  allow: "allow",

  /**
   * value: "disallow"
   * @const
   */
  disallow: "disallow"
};
/**
 * The default action to take when a client using the ACL Profile subscribes to a topic in the Message VPN. The allowed values and their meaning are:  <pre> \"allow\" - Allow topic unless an exception is found for it. \"disallow\" - Disallow topic unless an exception is found for it. </pre> 
 * @member {module:model/MsgVpnAclProfileModel.SubscribeTopicDefaultActionEnum} subscribeTopicDefaultAction
 */
MsgVpnAclProfileModel.prototype.subscribeTopicDefaultAction = undefined;

