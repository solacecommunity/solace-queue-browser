import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnMqttSessionSubscriptionModel model module.
 * @module model/MsgVpnMqttSessionSubscriptionModel
 * @version 2.36
 */
export class MsgVpnMqttSessionSubscriptionModel {
  /**
   * Constructs a new <code>MsgVpnMqttSessionSubscriptionModel</code>.
   * @alias module:model/MsgVpnMqttSessionSubscriptionModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnMqttSessionSubscriptionModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnMqttSessionSubscriptionModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnMqttSessionSubscriptionModel} The populated <code>MsgVpnMqttSessionSubscriptionModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnMqttSessionSubscriptionModel();
      if (data.hasOwnProperty('mqttSessionClientId'))
        obj.mqttSessionClientId = ApiClient.convertToType(data['mqttSessionClientId'], 'String');
      if (data.hasOwnProperty('mqttSessionVirtualRouter'))
        obj.mqttSessionVirtualRouter = ApiClient.convertToType(data['mqttSessionVirtualRouter'], 'String');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('subscriptionQos'))
        obj.subscriptionQos = ApiClient.convertToType(data['subscriptionQos'], 'Number');
      if (data.hasOwnProperty('subscriptionTopic'))
        obj.subscriptionTopic = ApiClient.convertToType(data['subscriptionTopic'], 'String');
    }
    return obj;
  }
}

/**
 * The Client ID of the MQTT Session, which corresponds to the ClientId provided in the MQTT CONNECT packet.
 * @member {String} mqttSessionClientId
 */
MsgVpnMqttSessionSubscriptionModel.prototype.mqttSessionClientId = undefined;

/**
 * Allowed values for the <code>mqttSessionVirtualRouter</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnMqttSessionSubscriptionModel.MqttSessionVirtualRouterEnum = {
  /**
   * value: "primary"
   * @const
   */
  primary: "primary",

  /**
   * value: "backup"
   * @const
   */
  backup: "backup",

  /**
   * value: "auto"
   * @const
   */
  auto: "auto"
};
/**
 * The virtual router of the MQTT Session. The allowed values and their meaning are:  <pre> \"primary\" - The MQTT Session belongs to the primary virtual router. \"backup\" - The MQTT Session belongs to the backup virtual router. \"auto\" - The MQTT Session is automatically assigned a virtual router at creation, depending on the broker's active-standby role. </pre> 
 * @member {module:model/MsgVpnMqttSessionSubscriptionModel.MqttSessionVirtualRouterEnum} mqttSessionVirtualRouter
 */
MsgVpnMqttSessionSubscriptionModel.prototype.mqttSessionVirtualRouter = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnMqttSessionSubscriptionModel.prototype.msgVpnName = undefined;

/**
 * The quality of service (QoS) for the MQTT Session subscription.
 * @member {Number} subscriptionQos
 */
MsgVpnMqttSessionSubscriptionModel.prototype.subscriptionQos = undefined;

/**
 * The MQTT subscription topic.
 * @member {String} subscriptionTopic
 */
MsgVpnMqttSessionSubscriptionModel.prototype.subscriptionTopic = undefined;

