import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnClientConnectionModel model module.
 * @module model/MsgVpnClientConnectionModel
 * @version 2.36
 */
export class MsgVpnClientConnectionModel {
  /**
   * Constructs a new <code>MsgVpnClientConnectionModel</code>.
   * @alias module:model/MsgVpnClientConnectionModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnClientConnectionModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientConnectionModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientConnectionModel} The populated <code>MsgVpnClientConnectionModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientConnectionModel();
      if (data.hasOwnProperty('clientAddress'))
        obj.clientAddress = ApiClient.convertToType(data['clientAddress'], 'String');
      if (data.hasOwnProperty('clientName'))
        obj.clientName = ApiClient.convertToType(data['clientName'], 'String');
      if (data.hasOwnProperty('compression'))
        obj.compression = ApiClient.convertToType(data['compression'], 'Boolean');
      if (data.hasOwnProperty('encryption'))
        obj.encryption = ApiClient.convertToType(data['encryption'], 'Boolean');
      if (data.hasOwnProperty('fastRetransmitCount'))
        obj.fastRetransmitCount = ApiClient.convertToType(data['fastRetransmitCount'], 'Number');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('rxQueueByteCount'))
        obj.rxQueueByteCount = ApiClient.convertToType(data['rxQueueByteCount'], 'Number');
      if (data.hasOwnProperty('segmentReceivedOutOfOrderCount'))
        obj.segmentReceivedOutOfOrderCount = ApiClient.convertToType(data['segmentReceivedOutOfOrderCount'], 'Number');
      if (data.hasOwnProperty('smoothedRoundTripTime'))
        obj.smoothedRoundTripTime = ApiClient.convertToType(data['smoothedRoundTripTime'], 'Number');
      if (data.hasOwnProperty('tcpState'))
        obj.tcpState = ApiClient.convertToType(data['tcpState'], 'String');
      if (data.hasOwnProperty('timedRetransmitCount'))
        obj.timedRetransmitCount = ApiClient.convertToType(data['timedRetransmitCount'], 'Number');
      if (data.hasOwnProperty('txQueueByteCount'))
        obj.txQueueByteCount = ApiClient.convertToType(data['txQueueByteCount'], 'Number');
      if (data.hasOwnProperty('uptime'))
        obj.uptime = ApiClient.convertToType(data['uptime'], 'Number');
    }
    return obj;
  }
}

/**
 * The IP address and TCP port on the Client side of the Client Connection.
 * @member {String} clientAddress
 */
MsgVpnClientConnectionModel.prototype.clientAddress = undefined;

/**
 * The name of the Client.
 * @member {String} clientName
 */
MsgVpnClientConnectionModel.prototype.clientName = undefined;

/**
 * Indicates whether compression is enabled for the Client Connection.
 * @member {Boolean} compression
 */
MsgVpnClientConnectionModel.prototype.compression = undefined;

/**
 * Indicates whether encryption (TLS) is enabled for the Client Connection.
 * @member {Boolean} encryption
 */
MsgVpnClientConnectionModel.prototype.encryption = undefined;

/**
 * The number of TCP fast retransmits due to duplicate acknowledgments (ACKs). See RFC 5681 for further details.
 * @member {Number} fastRetransmitCount
 */
MsgVpnClientConnectionModel.prototype.fastRetransmitCount = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnClientConnectionModel.prototype.msgVpnName = undefined;

/**
 * The number of bytes currently in the receive queue for the Client Connection.
 * @member {Number} rxQueueByteCount
 */
MsgVpnClientConnectionModel.prototype.rxQueueByteCount = undefined;

/**
 * The number of TCP segments received from the Client Connection out of order.
 * @member {Number} segmentReceivedOutOfOrderCount
 */
MsgVpnClientConnectionModel.prototype.segmentReceivedOutOfOrderCount = undefined;

/**
 * The TCP smoothed round-trip time (SRTT) for the Client Connection, in nanoseconds. See RFC 2988 for further details.
 * @member {Number} smoothedRoundTripTime
 */
MsgVpnClientConnectionModel.prototype.smoothedRoundTripTime = undefined;

/**
 * The TCP state of the Client Connection. When fully operational, should be: established. See RFC 793 for further details. The allowed values and their meaning are:  <pre> \"closed\" - No connection state at all. \"listen\" - Waiting for a connection request from any remote TCP and port. \"syn-sent\" - Waiting for a matching connection request after having sent a connection request. \"syn-received\" - Waiting for a confirming connection request acknowledgment after having both received and sent a connection request. \"established\" - An open connection, data received can be delivered to the user. \"close-wait\" - Waiting for a connection termination request from the local user. \"fin-wait-1\" - Waiting for a connection termination request from the remote TCP, or an acknowledgment of the connection termination request previously sent. \"closing\" - Waiting for a connection termination request acknowledgment from the remote TCP. \"last-ack\" - Waiting for an acknowledgment of the connection termination request previously sent to the remote TCP. \"fin-wait-2\" - Waiting for a connection termination request from the remote TCP. \"time-wait\" - Waiting for enough time to pass to be sure the remote TCP received the acknowledgment of its connection termination request. </pre> 
 * @member {String} tcpState
 */
MsgVpnClientConnectionModel.prototype.tcpState = undefined;

/**
 * The number of TCP segments retransmitted due to timeout awaiting an acknowledgment (ACK). See RFC 793 for further details.
 * @member {Number} timedRetransmitCount
 */
MsgVpnClientConnectionModel.prototype.timedRetransmitCount = undefined;

/**
 * The number of bytes currently in the transmit queue for the Client Connection.
 * @member {Number} txQueueByteCount
 */
MsgVpnClientConnectionModel.prototype.txQueueByteCount = undefined;

/**
 * The amount of time in seconds since the Client Connection was established.
 * @member {Number} uptime
 */
MsgVpnClientConnectionModel.prototype.uptime = undefined;

