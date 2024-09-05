import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnClientTransactedSessionModel model module.
 * @module model/MsgVpnClientTransactedSessionModel
 * @version 2.36
 */
export class MsgVpnClientTransactedSessionModel {
  /**
   * Constructs a new <code>MsgVpnClientTransactedSessionModel</code>.
   * @alias module:model/MsgVpnClientTransactedSessionModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnClientTransactedSessionModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientTransactedSessionModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientTransactedSessionModel} The populated <code>MsgVpnClientTransactedSessionModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientTransactedSessionModel();
      if (data.hasOwnProperty('clientName'))
        obj.clientName = ApiClient.convertToType(data['clientName'], 'String');
      if (data.hasOwnProperty('commitCount'))
        obj.commitCount = ApiClient.convertToType(data['commitCount'], 'Number');
      if (data.hasOwnProperty('commitFailureCount'))
        obj.commitFailureCount = ApiClient.convertToType(data['commitFailureCount'], 'Number');
      if (data.hasOwnProperty('commitSuccessCount'))
        obj.commitSuccessCount = ApiClient.convertToType(data['commitSuccessCount'], 'Number');
      if (data.hasOwnProperty('consumedMsgCount'))
        obj.consumedMsgCount = ApiClient.convertToType(data['consumedMsgCount'], 'Number');
      if (data.hasOwnProperty('endFailFailureCount'))
        obj.endFailFailureCount = ApiClient.convertToType(data['endFailFailureCount'], 'Number');
      if (data.hasOwnProperty('endFailSuccessCount'))
        obj.endFailSuccessCount = ApiClient.convertToType(data['endFailSuccessCount'], 'Number');
      if (data.hasOwnProperty('endFailureCount'))
        obj.endFailureCount = ApiClient.convertToType(data['endFailureCount'], 'Number');
      if (data.hasOwnProperty('endRollbackFailureCount'))
        obj.endRollbackFailureCount = ApiClient.convertToType(data['endRollbackFailureCount'], 'Number');
      if (data.hasOwnProperty('endRollbackSuccessCount'))
        obj.endRollbackSuccessCount = ApiClient.convertToType(data['endRollbackSuccessCount'], 'Number');
      if (data.hasOwnProperty('endSuccessCount'))
        obj.endSuccessCount = ApiClient.convertToType(data['endSuccessCount'], 'Number');
      if (data.hasOwnProperty('failureCount'))
        obj.failureCount = ApiClient.convertToType(data['failureCount'], 'Number');
      if (data.hasOwnProperty('forgetFailureCount'))
        obj.forgetFailureCount = ApiClient.convertToType(data['forgetFailureCount'], 'Number');
      if (data.hasOwnProperty('forgetSuccessCount'))
        obj.forgetSuccessCount = ApiClient.convertToType(data['forgetSuccessCount'], 'Number');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('onePhaseCommitFailureCount'))
        obj.onePhaseCommitFailureCount = ApiClient.convertToType(data['onePhaseCommitFailureCount'], 'Number');
      if (data.hasOwnProperty('onePhaseCommitSuccessCount'))
        obj.onePhaseCommitSuccessCount = ApiClient.convertToType(data['onePhaseCommitSuccessCount'], 'Number');
      if (data.hasOwnProperty('pendingConsumedMsgCount'))
        obj.pendingConsumedMsgCount = ApiClient.convertToType(data['pendingConsumedMsgCount'], 'Number');
      if (data.hasOwnProperty('pendingPublishedMsgCount'))
        obj.pendingPublishedMsgCount = ApiClient.convertToType(data['pendingPublishedMsgCount'], 'Number');
      if (data.hasOwnProperty('prepareFailureCount'))
        obj.prepareFailureCount = ApiClient.convertToType(data['prepareFailureCount'], 'Number');
      if (data.hasOwnProperty('prepareSuccessCount'))
        obj.prepareSuccessCount = ApiClient.convertToType(data['prepareSuccessCount'], 'Number');
      if (data.hasOwnProperty('previousTransactionState'))
        obj.previousTransactionState = ApiClient.convertToType(data['previousTransactionState'], 'String');
      if (data.hasOwnProperty('publishedMsgCount'))
        obj.publishedMsgCount = ApiClient.convertToType(data['publishedMsgCount'], 'Number');
      if (data.hasOwnProperty('resumeFailureCount'))
        obj.resumeFailureCount = ApiClient.convertToType(data['resumeFailureCount'], 'Number');
      if (data.hasOwnProperty('resumeSuccessCount'))
        obj.resumeSuccessCount = ApiClient.convertToType(data['resumeSuccessCount'], 'Number');
      if (data.hasOwnProperty('retrievedMsgCount'))
        obj.retrievedMsgCount = ApiClient.convertToType(data['retrievedMsgCount'], 'Number');
      if (data.hasOwnProperty('rollbackCount'))
        obj.rollbackCount = ApiClient.convertToType(data['rollbackCount'], 'Number');
      if (data.hasOwnProperty('rollbackFailureCount'))
        obj.rollbackFailureCount = ApiClient.convertToType(data['rollbackFailureCount'], 'Number');
      if (data.hasOwnProperty('rollbackSuccessCount'))
        obj.rollbackSuccessCount = ApiClient.convertToType(data['rollbackSuccessCount'], 'Number');
      if (data.hasOwnProperty('sessionName'))
        obj.sessionName = ApiClient.convertToType(data['sessionName'], 'String');
      if (data.hasOwnProperty('spooledMsgCount'))
        obj.spooledMsgCount = ApiClient.convertToType(data['spooledMsgCount'], 'Number');
      if (data.hasOwnProperty('startFailureCount'))
        obj.startFailureCount = ApiClient.convertToType(data['startFailureCount'], 'Number');
      if (data.hasOwnProperty('startSuccessCount'))
        obj.startSuccessCount = ApiClient.convertToType(data['startSuccessCount'], 'Number');
      if (data.hasOwnProperty('successCount'))
        obj.successCount = ApiClient.convertToType(data['successCount'], 'Number');
      if (data.hasOwnProperty('suspendFailureCount'))
        obj.suspendFailureCount = ApiClient.convertToType(data['suspendFailureCount'], 'Number');
      if (data.hasOwnProperty('suspendSuccessCount'))
        obj.suspendSuccessCount = ApiClient.convertToType(data['suspendSuccessCount'], 'Number');
      if (data.hasOwnProperty('transactionId'))
        obj.transactionId = ApiClient.convertToType(data['transactionId'], 'Number');
      if (data.hasOwnProperty('transactionState'))
        obj.transactionState = ApiClient.convertToType(data['transactionState'], 'String');
      if (data.hasOwnProperty('twoPhaseCommitFailureCount'))
        obj.twoPhaseCommitFailureCount = ApiClient.convertToType(data['twoPhaseCommitFailureCount'], 'Number');
      if (data.hasOwnProperty('twoPhaseCommitSuccessCount'))
        obj.twoPhaseCommitSuccessCount = ApiClient.convertToType(data['twoPhaseCommitSuccessCount'], 'Number');
    }
    return obj;
  }
}

/**
 * The name of the Client.
 * @member {String} clientName
 */
MsgVpnClientTransactedSessionModel.prototype.clientName = undefined;

/**
 * The number of transactions committed within the Transacted Session.
 * @member {Number} commitCount
 */
MsgVpnClientTransactedSessionModel.prototype.commitCount = undefined;

/**
 * The number of transaction commit operations that failed.
 * @member {Number} commitFailureCount
 */
MsgVpnClientTransactedSessionModel.prototype.commitFailureCount = undefined;

/**
 * The number of transaction commit operations that succeeded.
 * @member {Number} commitSuccessCount
 */
MsgVpnClientTransactedSessionModel.prototype.commitSuccessCount = undefined;

/**
 * The number of messages consumed within the Transacted Session.
 * @member {Number} consumedMsgCount
 */
MsgVpnClientTransactedSessionModel.prototype.consumedMsgCount = undefined;

/**
 * The number of transaction end fail operations that failed.
 * @member {Number} endFailFailureCount
 */
MsgVpnClientTransactedSessionModel.prototype.endFailFailureCount = undefined;

/**
 * The number of transaction end fail operations that succeeded.
 * @member {Number} endFailSuccessCount
 */
MsgVpnClientTransactedSessionModel.prototype.endFailSuccessCount = undefined;

/**
 * The number of transaction end operations that failed.
 * @member {Number} endFailureCount
 */
MsgVpnClientTransactedSessionModel.prototype.endFailureCount = undefined;

/**
 * The number of transaction end rollback operations that failed.
 * @member {Number} endRollbackFailureCount
 */
MsgVpnClientTransactedSessionModel.prototype.endRollbackFailureCount = undefined;

/**
 * The number of transaction end rollback operations that succeeded.
 * @member {Number} endRollbackSuccessCount
 */
MsgVpnClientTransactedSessionModel.prototype.endRollbackSuccessCount = undefined;

/**
 * The number of transaction end operations that succeeded.
 * @member {Number} endSuccessCount
 */
MsgVpnClientTransactedSessionModel.prototype.endSuccessCount = undefined;

/**
 * The number of transactions that failed within the Transacted Session.
 * @member {Number} failureCount
 */
MsgVpnClientTransactedSessionModel.prototype.failureCount = undefined;

/**
 * The number of transaction forget operations that failed.
 * @member {Number} forgetFailureCount
 */
MsgVpnClientTransactedSessionModel.prototype.forgetFailureCount = undefined;

/**
 * The number of transaction forget operations that succeeded.
 * @member {Number} forgetSuccessCount
 */
MsgVpnClientTransactedSessionModel.prototype.forgetSuccessCount = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnClientTransactedSessionModel.prototype.msgVpnName = undefined;

/**
 * The number of transaction one-phase commit operations that failed.
 * @member {Number} onePhaseCommitFailureCount
 */
MsgVpnClientTransactedSessionModel.prototype.onePhaseCommitFailureCount = undefined;

/**
 * The number of transaction one-phase commit operations that succeeded.
 * @member {Number} onePhaseCommitSuccessCount
 */
MsgVpnClientTransactedSessionModel.prototype.onePhaseCommitSuccessCount = undefined;

/**
 * The number of messages to be consumed when the transaction is committed.
 * @member {Number} pendingConsumedMsgCount
 */
MsgVpnClientTransactedSessionModel.prototype.pendingConsumedMsgCount = undefined;

/**
 * The number of messages to be published when the transaction is committed.
 * @member {Number} pendingPublishedMsgCount
 */
MsgVpnClientTransactedSessionModel.prototype.pendingPublishedMsgCount = undefined;

/**
 * The number of transaction prepare operations that failed.
 * @member {Number} prepareFailureCount
 */
MsgVpnClientTransactedSessionModel.prototype.prepareFailureCount = undefined;

/**
 * The number of transaction prepare operations that succeeded.
 * @member {Number} prepareSuccessCount
 */
MsgVpnClientTransactedSessionModel.prototype.prepareSuccessCount = undefined;

/**
 * The state of the previous transaction. The allowed values and their meaning are:  <pre> \"none\" - The previous transaction had no state. \"committed\" - The previous transaction was committed. \"rolled-back\" - The previous transaction was rolled back. \"failed\" - The previous transaction failed. </pre> 
 * @member {String} previousTransactionState
 */
MsgVpnClientTransactedSessionModel.prototype.previousTransactionState = undefined;

/**
 * The number of messages published within the Transacted Session.
 * @member {Number} publishedMsgCount
 */
MsgVpnClientTransactedSessionModel.prototype.publishedMsgCount = undefined;

/**
 * The number of transaction resume operations that failed.
 * @member {Number} resumeFailureCount
 */
MsgVpnClientTransactedSessionModel.prototype.resumeFailureCount = undefined;

/**
 * The number of transaction resume operations that succeeded.
 * @member {Number} resumeSuccessCount
 */
MsgVpnClientTransactedSessionModel.prototype.resumeSuccessCount = undefined;

/**
 * The number of messages retrieved within the Transacted Session.
 * @member {Number} retrievedMsgCount
 */
MsgVpnClientTransactedSessionModel.prototype.retrievedMsgCount = undefined;

/**
 * The number of transactions rolled back within the Transacted Session.
 * @member {Number} rollbackCount
 */
MsgVpnClientTransactedSessionModel.prototype.rollbackCount = undefined;

/**
 * The number of transaction rollback operations that failed.
 * @member {Number} rollbackFailureCount
 */
MsgVpnClientTransactedSessionModel.prototype.rollbackFailureCount = undefined;

/**
 * The number of transaction rollback operations that succeeded.
 * @member {Number} rollbackSuccessCount
 */
MsgVpnClientTransactedSessionModel.prototype.rollbackSuccessCount = undefined;

/**
 * The name of the Transacted Session.
 * @member {String} sessionName
 */
MsgVpnClientTransactedSessionModel.prototype.sessionName = undefined;

/**
 * The number of messages spooled within the Transacted Session.
 * @member {Number} spooledMsgCount
 */
MsgVpnClientTransactedSessionModel.prototype.spooledMsgCount = undefined;

/**
 * The number of transaction start operations that failed.
 * @member {Number} startFailureCount
 */
MsgVpnClientTransactedSessionModel.prototype.startFailureCount = undefined;

/**
 * The number of transaction start operations that succeeded.
 * @member {Number} startSuccessCount
 */
MsgVpnClientTransactedSessionModel.prototype.startSuccessCount = undefined;

/**
 * The number of transactions that succeeded within the Transacted Session.
 * @member {Number} successCount
 */
MsgVpnClientTransactedSessionModel.prototype.successCount = undefined;

/**
 * The number of transaction suspend operations that failed.
 * @member {Number} suspendFailureCount
 */
MsgVpnClientTransactedSessionModel.prototype.suspendFailureCount = undefined;

/**
 * The number of transaction suspend operations that succeeded.
 * @member {Number} suspendSuccessCount
 */
MsgVpnClientTransactedSessionModel.prototype.suspendSuccessCount = undefined;

/**
 * The identifier (ID) of the transaction in the Transacted Session.
 * @member {Number} transactionId
 */
MsgVpnClientTransactedSessionModel.prototype.transactionId = undefined;

/**
 * The state of the current transaction. The allowed values and their meaning are:  <pre> \"in-progress\" - The current transaction is in progress. \"committing\" - The current transaction is committing. \"rolling-back\" - The current transaction is rolling back. \"failing\" - The current transaction is failing. </pre> 
 * @member {String} transactionState
 */
MsgVpnClientTransactedSessionModel.prototype.transactionState = undefined;

/**
 * The number of transaction two-phase commit operations that failed.
 * @member {Number} twoPhaseCommitFailureCount
 */
MsgVpnClientTransactedSessionModel.prototype.twoPhaseCommitFailureCount = undefined;

/**
 * The number of transaction two-phase commit operations that succeeded.
 * @member {Number} twoPhaseCommitSuccessCount
 */
MsgVpnClientTransactedSessionModel.prototype.twoPhaseCommitSuccessCount = undefined;

