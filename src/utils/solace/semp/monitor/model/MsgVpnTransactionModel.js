import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnTransactionModel model module.
 * @module model/MsgVpnTransactionModel
 * @version 2.36
 */
export class MsgVpnTransactionModel {
  /**
   * Constructs a new <code>MsgVpnTransactionModel</code>.
   * @alias module:model/MsgVpnTransactionModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTransactionModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTransactionModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTransactionModel} The populated <code>MsgVpnTransactionModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTransactionModel();
      if (data.hasOwnProperty('clientId'))
        obj.clientId = ApiClient.convertToType(data['clientId'], 'Number');
      if (data.hasOwnProperty('clientName'))
        obj.clientName = ApiClient.convertToType(data['clientName'], 'String');
      if (data.hasOwnProperty('clientUsername'))
        obj.clientUsername = ApiClient.convertToType(data['clientUsername'], 'String');
      if (data.hasOwnProperty('idleTimeout'))
        obj.idleTimeout = ApiClient.convertToType(data['idleTimeout'], 'Number');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('replicated'))
        obj.replicated = ApiClient.convertToType(data['replicated'], 'Boolean');
      if (data.hasOwnProperty('sessionName'))
        obj.sessionName = ApiClient.convertToType(data['sessionName'], 'String');
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
      if (data.hasOwnProperty('timeInState'))
        obj.timeInState = ApiClient.convertToType(data['timeInState'], 'Number');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('xid'))
        obj.xid = ApiClient.convertToType(data['xid'], 'String');
    }
    return obj;
  }
}

/**
 * The identifier (ID) of the Client.
 * @member {Number} clientId
 */
MsgVpnTransactionModel.prototype.clientId = undefined;

/**
 * The name of the Client.
 * @member {String} clientName
 */
MsgVpnTransactionModel.prototype.clientName = undefined;

/**
 * The username of the Client.
 * @member {String} clientUsername
 */
MsgVpnTransactionModel.prototype.clientUsername = undefined;

/**
 * The number of seconds before an idle Transaction may be automatically rolled back and freed.
 * @member {Number} idleTimeout
 */
MsgVpnTransactionModel.prototype.idleTimeout = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnTransactionModel.prototype.msgVpnName = undefined;

/**
 * Indicates whether the Transaction is replicated.
 * @member {Boolean} replicated
 */
MsgVpnTransactionModel.prototype.replicated = undefined;

/**
 * The name of the Transacted Session for the Transaction.
 * @member {String} sessionName
 */
MsgVpnTransactionModel.prototype.sessionName = undefined;

/**
 * The state of the Transaction. The allowed values and their meaning are:  <pre> \"active\" - The Transaction was started. \"suspended\" - The Transaction was suspended. \"idle\" - The Transaction was ended. \"prepared\" - The Transaction was prepared. \"complete\" - The Transaction was committed or rolled back. </pre> 
 * @member {String} state
 */
MsgVpnTransactionModel.prototype.state = undefined;

/**
 * The number of seconds the Transaction has remained in the current state.
 * @member {Number} timeInState
 */
MsgVpnTransactionModel.prototype.timeInState = undefined;

/**
 * The type of Transaction. The allowed values and their meaning are:  <pre> \"xa\" - The Transaction is an XA Transaction. \"local\" - The Transaction is a local Transaction. </pre> 
 * @member {String} type
 */
MsgVpnTransactionModel.prototype.type = undefined;

/**
 * The identifier (ID) of the Transaction.
 * @member {String} xid
 */
MsgVpnTransactionModel.prototype.xid = undefined;

