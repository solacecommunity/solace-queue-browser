import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnClientTxFlowModel model module.
 * @module model/MsgVpnClientTxFlowModel
 * @version 2.36
 */
export class MsgVpnClientTxFlowModel {
  /**
   * Constructs a new <code>MsgVpnClientTxFlowModel</code>.
   * @alias module:model/MsgVpnClientTxFlowModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnClientTxFlowModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientTxFlowModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientTxFlowModel} The populated <code>MsgVpnClientTxFlowModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientTxFlowModel();
      if (data.hasOwnProperty('clientName'))
        obj.clientName = ApiClient.convertToType(data['clientName'], 'String');
      if (data.hasOwnProperty('endpointName'))
        obj.endpointName = ApiClient.convertToType(data['endpointName'], 'String');
      if (data.hasOwnProperty('endpointType'))
        obj.endpointType = ApiClient.convertToType(data['endpointType'], 'String');
      if (data.hasOwnProperty('flowId'))
        obj.flowId = ApiClient.convertToType(data['flowId'], 'Number');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the Client.
 * @member {String} clientName
 */
MsgVpnClientTxFlowModel.prototype.clientName = undefined;

/**
 * The name of the Queue or Topic Endpoint bound.
 * @member {String} endpointName
 */
MsgVpnClientTxFlowModel.prototype.endpointName = undefined;

/**
 * The type of endpoint bound. The allowed values and their meaning are:  <pre> \"queue\" - The Client is bound to a Queue. \"topic-endpoint\" - The Client is bound to a Topic Endpoint. </pre> 
 * @member {String} endpointType
 */
MsgVpnClientTxFlowModel.prototype.endpointType = undefined;

/**
 * The identifier (ID) of the flow.
 * @member {Number} flowId
 */
MsgVpnClientTxFlowModel.prototype.flowId = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnClientTxFlowModel.prototype.msgVpnName = undefined;

