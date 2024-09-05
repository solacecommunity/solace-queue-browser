import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnMqttSessionCounterModel model module.
 * @module model/MsgVpnMqttSessionCounterModel
 * @version 2.36
 */
export class MsgVpnMqttSessionCounterModel {
  /**
   * Constructs a new <code>MsgVpnMqttSessionCounterModel</code>.
   * The counters for the MQTT Session. Deprecated since 2.13. All attributes in this object have been moved to the MsgVpnMqttSession object.
   * @alias module:model/MsgVpnMqttSessionCounterModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnMqttSessionCounterModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnMqttSessionCounterModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnMqttSessionCounterModel} The populated <code>MsgVpnMqttSessionCounterModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnMqttSessionCounterModel();
      if (data.hasOwnProperty('mqttConnackErrorTxCount'))
        obj.mqttConnackErrorTxCount = ApiClient.convertToType(data['mqttConnackErrorTxCount'], 'Number');
      if (data.hasOwnProperty('mqttConnackTxCount'))
        obj.mqttConnackTxCount = ApiClient.convertToType(data['mqttConnackTxCount'], 'Number');
      if (data.hasOwnProperty('mqttConnectRxCount'))
        obj.mqttConnectRxCount = ApiClient.convertToType(data['mqttConnectRxCount'], 'Number');
      if (data.hasOwnProperty('mqttDisconnectRxCount'))
        obj.mqttDisconnectRxCount = ApiClient.convertToType(data['mqttDisconnectRxCount'], 'Number');
      if (data.hasOwnProperty('mqttPubcompTxCount'))
        obj.mqttPubcompTxCount = ApiClient.convertToType(data['mqttPubcompTxCount'], 'Number');
      if (data.hasOwnProperty('mqttPublishQos0RxCount'))
        obj.mqttPublishQos0RxCount = ApiClient.convertToType(data['mqttPublishQos0RxCount'], 'Number');
      if (data.hasOwnProperty('mqttPublishQos0TxCount'))
        obj.mqttPublishQos0TxCount = ApiClient.convertToType(data['mqttPublishQos0TxCount'], 'Number');
      if (data.hasOwnProperty('mqttPublishQos1RxCount'))
        obj.mqttPublishQos1RxCount = ApiClient.convertToType(data['mqttPublishQos1RxCount'], 'Number');
      if (data.hasOwnProperty('mqttPublishQos1TxCount'))
        obj.mqttPublishQos1TxCount = ApiClient.convertToType(data['mqttPublishQos1TxCount'], 'Number');
      if (data.hasOwnProperty('mqttPublishQos2RxCount'))
        obj.mqttPublishQos2RxCount = ApiClient.convertToType(data['mqttPublishQos2RxCount'], 'Number');
      if (data.hasOwnProperty('mqttPubrecTxCount'))
        obj.mqttPubrecTxCount = ApiClient.convertToType(data['mqttPubrecTxCount'], 'Number');
      if (data.hasOwnProperty('mqttPubrelRxCount'))
        obj.mqttPubrelRxCount = ApiClient.convertToType(data['mqttPubrelRxCount'], 'Number');
    }
    return obj;
  }
}

/**
 * The number of MQTT connect acknowledgment (CONNACK) refused response packets transmitted to the Client. Deprecated since 2.13. This attribute has been moved to the MsgVpnMqttSession object.
 * @member {Number} mqttConnackErrorTxCount
 */
MsgVpnMqttSessionCounterModel.prototype.mqttConnackErrorTxCount = undefined;

/**
 * The number of MQTT connect acknowledgment (CONNACK) accepted response packets transmitted to the Client. Deprecated since 2.13. This attribute has been moved to the MsgVpnMqttSession object.
 * @member {Number} mqttConnackTxCount
 */
MsgVpnMqttSessionCounterModel.prototype.mqttConnackTxCount = undefined;

/**
 * The number of MQTT connect (CONNECT) request packets received from the Client. Deprecated since 2.13. This attribute has been moved to the MsgVpnMqttSession object.
 * @member {Number} mqttConnectRxCount
 */
MsgVpnMqttSessionCounterModel.prototype.mqttConnectRxCount = undefined;

/**
 * The number of MQTT disconnect (DISCONNECT) request packets received from the Client. Deprecated since 2.13. This attribute has been moved to the MsgVpnMqttSession object.
 * @member {Number} mqttDisconnectRxCount
 */
MsgVpnMqttSessionCounterModel.prototype.mqttDisconnectRxCount = undefined;

/**
 * The number of MQTT publish complete (PUBCOMP) packets transmitted to the Client in response to a PUBREL packet. These packets are the fourth and final packet of a QoS 2 protocol exchange. Deprecated since 2.13. This attribute has been moved to the MsgVpnMqttSession object.
 * @member {Number} mqttPubcompTxCount
 */
MsgVpnMqttSessionCounterModel.prototype.mqttPubcompTxCount = undefined;

/**
 * The number of MQTT publish message (PUBLISH) request packets received from the Client for QoS 0 message delivery. Deprecated since 2.13. This attribute has been moved to the MsgVpnMqttSession object.
 * @member {Number} mqttPublishQos0RxCount
 */
MsgVpnMqttSessionCounterModel.prototype.mqttPublishQos0RxCount = undefined;

/**
 * The number of MQTT publish message (PUBLISH) request packets transmitted to the Client for QoS 0 message delivery. Deprecated since 2.13. This attribute has been moved to the MsgVpnMqttSession object.
 * @member {Number} mqttPublishQos0TxCount
 */
MsgVpnMqttSessionCounterModel.prototype.mqttPublishQos0TxCount = undefined;

/**
 * The number of MQTT publish message (PUBLISH) request packets received from the Client for QoS 1 message delivery. Deprecated since 2.13. This attribute has been moved to the MsgVpnMqttSession object.
 * @member {Number} mqttPublishQos1RxCount
 */
MsgVpnMqttSessionCounterModel.prototype.mqttPublishQos1RxCount = undefined;

/**
 * The number of MQTT publish message (PUBLISH) request packets transmitted to the Client for QoS 1 message delivery. Deprecated since 2.13. This attribute has been moved to the MsgVpnMqttSession object.
 * @member {Number} mqttPublishQos1TxCount
 */
MsgVpnMqttSessionCounterModel.prototype.mqttPublishQos1TxCount = undefined;

/**
 * The number of MQTT publish message (PUBLISH) request packets received from the Client for QoS 2 message delivery. Deprecated since 2.13. This attribute has been moved to the MsgVpnMqttSession object.
 * @member {Number} mqttPublishQos2RxCount
 */
MsgVpnMqttSessionCounterModel.prototype.mqttPublishQos2RxCount = undefined;

/**
 * The number of MQTT publish received (PUBREC) packets transmitted to the Client in response to a PUBLISH packet with QoS 2. These packets are the second packet of a QoS 2 protocol exchange. Deprecated since 2.13. This attribute has been moved to the MsgVpnMqttSession object.
 * @member {Number} mqttPubrecTxCount
 */
MsgVpnMqttSessionCounterModel.prototype.mqttPubrecTxCount = undefined;

/**
 * The number of MQTT publish release (PUBREL) packets received from the Client in response to a PUBREC packet. These packets are the third packet of a QoS 2 protocol exchange. Deprecated since 2.13. This attribute has been moved to the MsgVpnMqttSession object.
 * @member {Number} mqttPubrelRxCount
 */
MsgVpnMqttSessionCounterModel.prototype.mqttPubrelRxCount = undefined;

