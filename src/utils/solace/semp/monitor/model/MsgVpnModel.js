import {ApiClient} from '../ApiClient';
import {EventThresholdByValueModel} from './EventThresholdByValueModel';
import {EventThresholdModel} from './EventThresholdModel';
import {MsgVpnCounterModel} from './MsgVpnCounterModel';
import {MsgVpnRateModel} from './MsgVpnRateModel';

/**
 * The MsgVpnModel model module.
 * @module model/MsgVpnModel
 * @version 2.36
 */
export class MsgVpnModel {
  /**
   * Constructs a new <code>MsgVpnModel</code>.
   * @alias module:model/MsgVpnModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnModel} The populated <code>MsgVpnModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnModel();
      if (data.hasOwnProperty('alias'))
        obj.alias = ApiClient.convertToType(data['alias'], 'String');
      if (data.hasOwnProperty('authenticationBasicEnabled'))
        obj.authenticationBasicEnabled = ApiClient.convertToType(data['authenticationBasicEnabled'], 'Boolean');
      if (data.hasOwnProperty('authenticationBasicProfileName'))
        obj.authenticationBasicProfileName = ApiClient.convertToType(data['authenticationBasicProfileName'], 'String');
      if (data.hasOwnProperty('authenticationBasicRadiusDomain'))
        obj.authenticationBasicRadiusDomain = ApiClient.convertToType(data['authenticationBasicRadiusDomain'], 'String');
      if (data.hasOwnProperty('authenticationBasicType'))
        obj.authenticationBasicType = ApiClient.convertToType(data['authenticationBasicType'], 'String');
      if (data.hasOwnProperty('authenticationClientCertAllowApiProvidedUsernameEnabled'))
        obj.authenticationClientCertAllowApiProvidedUsernameEnabled = ApiClient.convertToType(data['authenticationClientCertAllowApiProvidedUsernameEnabled'], 'Boolean');
      if (data.hasOwnProperty('authenticationClientCertCertificateMatchingRulesEnabled'))
        obj.authenticationClientCertCertificateMatchingRulesEnabled = ApiClient.convertToType(data['authenticationClientCertCertificateMatchingRulesEnabled'], 'Boolean');
      if (data.hasOwnProperty('authenticationClientCertEnabled'))
        obj.authenticationClientCertEnabled = ApiClient.convertToType(data['authenticationClientCertEnabled'], 'Boolean');
      if (data.hasOwnProperty('authenticationClientCertMaxChainDepth'))
        obj.authenticationClientCertMaxChainDepth = ApiClient.convertToType(data['authenticationClientCertMaxChainDepth'], 'Number');
      if (data.hasOwnProperty('authenticationClientCertRevocationCheckMode'))
        obj.authenticationClientCertRevocationCheckMode = ApiClient.convertToType(data['authenticationClientCertRevocationCheckMode'], 'String');
      if (data.hasOwnProperty('authenticationClientCertUsernameSource'))
        obj.authenticationClientCertUsernameSource = ApiClient.convertToType(data['authenticationClientCertUsernameSource'], 'String');
      if (data.hasOwnProperty('authenticationClientCertValidateDateEnabled'))
        obj.authenticationClientCertValidateDateEnabled = ApiClient.convertToType(data['authenticationClientCertValidateDateEnabled'], 'Boolean');
      if (data.hasOwnProperty('authenticationKerberosAllowApiProvidedUsernameEnabled'))
        obj.authenticationKerberosAllowApiProvidedUsernameEnabled = ApiClient.convertToType(data['authenticationKerberosAllowApiProvidedUsernameEnabled'], 'Boolean');
      if (data.hasOwnProperty('authenticationKerberosEnabled'))
        obj.authenticationKerberosEnabled = ApiClient.convertToType(data['authenticationKerberosEnabled'], 'Boolean');
      if (data.hasOwnProperty('authenticationOauthDefaultProfileName'))
        obj.authenticationOauthDefaultProfileName = ApiClient.convertToType(data['authenticationOauthDefaultProfileName'], 'String');
      if (data.hasOwnProperty('authenticationOauthDefaultProviderName'))
        obj.authenticationOauthDefaultProviderName = ApiClient.convertToType(data['authenticationOauthDefaultProviderName'], 'String');
      if (data.hasOwnProperty('authenticationOauthEnabled'))
        obj.authenticationOauthEnabled = ApiClient.convertToType(data['authenticationOauthEnabled'], 'Boolean');
      if (data.hasOwnProperty('authorizationLdapGroupMembershipAttributeName'))
        obj.authorizationLdapGroupMembershipAttributeName = ApiClient.convertToType(data['authorizationLdapGroupMembershipAttributeName'], 'String');
      if (data.hasOwnProperty('authorizationLdapTrimClientUsernameDomainEnabled'))
        obj.authorizationLdapTrimClientUsernameDomainEnabled = ApiClient.convertToType(data['authorizationLdapTrimClientUsernameDomainEnabled'], 'Boolean');
      if (data.hasOwnProperty('authorizationProfileName'))
        obj.authorizationProfileName = ApiClient.convertToType(data['authorizationProfileName'], 'String');
      if (data.hasOwnProperty('authorizationType'))
        obj.authorizationType = ApiClient.convertToType(data['authorizationType'], 'String');
      if (data.hasOwnProperty('averageBindRequestRate'))
        obj.averageBindRequestRate = ApiClient.convertToType(data['averageBindRequestRate'], 'Number');
      if (data.hasOwnProperty('averageRxByteRate'))
        obj.averageRxByteRate = ApiClient.convertToType(data['averageRxByteRate'], 'Number');
      if (data.hasOwnProperty('averageRxCompressedByteRate'))
        obj.averageRxCompressedByteRate = ApiClient.convertToType(data['averageRxCompressedByteRate'], 'Number');
      if (data.hasOwnProperty('averageRxMsgRate'))
        obj.averageRxMsgRate = ApiClient.convertToType(data['averageRxMsgRate'], 'Number');
      if (data.hasOwnProperty('averageRxUncompressedByteRate'))
        obj.averageRxUncompressedByteRate = ApiClient.convertToType(data['averageRxUncompressedByteRate'], 'Number');
      if (data.hasOwnProperty('averageTxByteRate'))
        obj.averageTxByteRate = ApiClient.convertToType(data['averageTxByteRate'], 'Number');
      if (data.hasOwnProperty('averageTxCompressedByteRate'))
        obj.averageTxCompressedByteRate = ApiClient.convertToType(data['averageTxCompressedByteRate'], 'Number');
      if (data.hasOwnProperty('averageTxMsgRate'))
        obj.averageTxMsgRate = ApiClient.convertToType(data['averageTxMsgRate'], 'Number');
      if (data.hasOwnProperty('averageTxUncompressedByteRate'))
        obj.averageTxUncompressedByteRate = ApiClient.convertToType(data['averageTxUncompressedByteRate'], 'Number');
      if (data.hasOwnProperty('bindRequestRate'))
        obj.bindRequestRate = ApiClient.convertToType(data['bindRequestRate'], 'Number');
      if (data.hasOwnProperty('bridgingTlsServerCertEnforceTrustedCommonNameEnabled'))
        obj.bridgingTlsServerCertEnforceTrustedCommonNameEnabled = ApiClient.convertToType(data['bridgingTlsServerCertEnforceTrustedCommonNameEnabled'], 'Boolean');
      if (data.hasOwnProperty('bridgingTlsServerCertMaxChainDepth'))
        obj.bridgingTlsServerCertMaxChainDepth = ApiClient.convertToType(data['bridgingTlsServerCertMaxChainDepth'], 'Number');
      if (data.hasOwnProperty('bridgingTlsServerCertValidateDateEnabled'))
        obj.bridgingTlsServerCertValidateDateEnabled = ApiClient.convertToType(data['bridgingTlsServerCertValidateDateEnabled'], 'Boolean');
      if (data.hasOwnProperty('bridgingTlsServerCertValidateNameEnabled'))
        obj.bridgingTlsServerCertValidateNameEnabled = ApiClient.convertToType(data['bridgingTlsServerCertValidateNameEnabled'], 'Boolean');
      if (data.hasOwnProperty('configSyncLocalKey'))
        obj.configSyncLocalKey = ApiClient.convertToType(data['configSyncLocalKey'], 'String');
      if (data.hasOwnProperty('configSyncLocalLastResult'))
        obj.configSyncLocalLastResult = ApiClient.convertToType(data['configSyncLocalLastResult'], 'String');
      if (data.hasOwnProperty('configSyncLocalRole'))
        obj.configSyncLocalRole = ApiClient.convertToType(data['configSyncLocalRole'], 'String');
      if (data.hasOwnProperty('configSyncLocalState'))
        obj.configSyncLocalState = ApiClient.convertToType(data['configSyncLocalState'], 'String');
      if (data.hasOwnProperty('configSyncLocalTimeInState'))
        obj.configSyncLocalTimeInState = ApiClient.convertToType(data['configSyncLocalTimeInState'], 'Number');
      if (data.hasOwnProperty('controlRxByteCount'))
        obj.controlRxByteCount = ApiClient.convertToType(data['controlRxByteCount'], 'Number');
      if (data.hasOwnProperty('controlRxMsgCount'))
        obj.controlRxMsgCount = ApiClient.convertToType(data['controlRxMsgCount'], 'Number');
      if (data.hasOwnProperty('controlTxByteCount'))
        obj.controlTxByteCount = ApiClient.convertToType(data['controlTxByteCount'], 'Number');
      if (data.hasOwnProperty('controlTxMsgCount'))
        obj.controlTxMsgCount = ApiClient.convertToType(data['controlTxMsgCount'], 'Number');
      if (data.hasOwnProperty('counter'))
        obj.counter = MsgVpnCounterModel.constructFromObject(data['counter']);
      if (data.hasOwnProperty('dataRxByteCount'))
        obj.dataRxByteCount = ApiClient.convertToType(data['dataRxByteCount'], 'Number');
      if (data.hasOwnProperty('dataRxMsgCount'))
        obj.dataRxMsgCount = ApiClient.convertToType(data['dataRxMsgCount'], 'Number');
      if (data.hasOwnProperty('dataTxByteCount'))
        obj.dataTxByteCount = ApiClient.convertToType(data['dataTxByteCount'], 'Number');
      if (data.hasOwnProperty('dataTxMsgCount'))
        obj.dataTxMsgCount = ApiClient.convertToType(data['dataTxMsgCount'], 'Number');
      if (data.hasOwnProperty('discardedRxMsgCount'))
        obj.discardedRxMsgCount = ApiClient.convertToType(data['discardedRxMsgCount'], 'Number');
      if (data.hasOwnProperty('discardedTxMsgCount'))
        obj.discardedTxMsgCount = ApiClient.convertToType(data['discardedTxMsgCount'], 'Number');
      if (data.hasOwnProperty('distributedCacheManagementEnabled'))
        obj.distributedCacheManagementEnabled = ApiClient.convertToType(data['distributedCacheManagementEnabled'], 'Boolean');
      if (data.hasOwnProperty('dmrEnabled'))
        obj.dmrEnabled = ApiClient.convertToType(data['dmrEnabled'], 'Boolean');
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('eventConnectionCountThreshold'))
        obj.eventConnectionCountThreshold = EventThresholdModel.constructFromObject(data['eventConnectionCountThreshold']);
      if (data.hasOwnProperty('eventEgressFlowCountThreshold'))
        obj.eventEgressFlowCountThreshold = EventThresholdModel.constructFromObject(data['eventEgressFlowCountThreshold']);
      if (data.hasOwnProperty('eventEgressMsgRateThreshold'))
        obj.eventEgressMsgRateThreshold = EventThresholdByValueModel.constructFromObject(data['eventEgressMsgRateThreshold']);
      if (data.hasOwnProperty('eventEndpointCountThreshold'))
        obj.eventEndpointCountThreshold = EventThresholdModel.constructFromObject(data['eventEndpointCountThreshold']);
      if (data.hasOwnProperty('eventIngressFlowCountThreshold'))
        obj.eventIngressFlowCountThreshold = EventThresholdModel.constructFromObject(data['eventIngressFlowCountThreshold']);
      if (data.hasOwnProperty('eventIngressMsgRateThreshold'))
        obj.eventIngressMsgRateThreshold = EventThresholdByValueModel.constructFromObject(data['eventIngressMsgRateThreshold']);
      if (data.hasOwnProperty('eventLargeMsgThreshold'))
        obj.eventLargeMsgThreshold = ApiClient.convertToType(data['eventLargeMsgThreshold'], 'Number');
      if (data.hasOwnProperty('eventLogTag'))
        obj.eventLogTag = ApiClient.convertToType(data['eventLogTag'], 'String');
      if (data.hasOwnProperty('eventMsgSpoolUsageThreshold'))
        obj.eventMsgSpoolUsageThreshold = EventThresholdModel.constructFromObject(data['eventMsgSpoolUsageThreshold']);
      if (data.hasOwnProperty('eventPublishClientEnabled'))
        obj.eventPublishClientEnabled = ApiClient.convertToType(data['eventPublishClientEnabled'], 'Boolean');
      if (data.hasOwnProperty('eventPublishMsgVpnEnabled'))
        obj.eventPublishMsgVpnEnabled = ApiClient.convertToType(data['eventPublishMsgVpnEnabled'], 'Boolean');
      if (data.hasOwnProperty('eventPublishSubscriptionMode'))
        obj.eventPublishSubscriptionMode = ApiClient.convertToType(data['eventPublishSubscriptionMode'], 'String');
      if (data.hasOwnProperty('eventPublishTopicFormatMqttEnabled'))
        obj.eventPublishTopicFormatMqttEnabled = ApiClient.convertToType(data['eventPublishTopicFormatMqttEnabled'], 'Boolean');
      if (data.hasOwnProperty('eventPublishTopicFormatSmfEnabled'))
        obj.eventPublishTopicFormatSmfEnabled = ApiClient.convertToType(data['eventPublishTopicFormatSmfEnabled'], 'Boolean');
      if (data.hasOwnProperty('eventServiceAmqpConnectionCountThreshold'))
        obj.eventServiceAmqpConnectionCountThreshold = EventThresholdModel.constructFromObject(data['eventServiceAmqpConnectionCountThreshold']);
      if (data.hasOwnProperty('eventServiceMqttConnectionCountThreshold'))
        obj.eventServiceMqttConnectionCountThreshold = EventThresholdModel.constructFromObject(data['eventServiceMqttConnectionCountThreshold']);
      if (data.hasOwnProperty('eventServiceRestIncomingConnectionCountThreshold'))
        obj.eventServiceRestIncomingConnectionCountThreshold = EventThresholdModel.constructFromObject(data['eventServiceRestIncomingConnectionCountThreshold']);
      if (data.hasOwnProperty('eventServiceSmfConnectionCountThreshold'))
        obj.eventServiceSmfConnectionCountThreshold = EventThresholdModel.constructFromObject(data['eventServiceSmfConnectionCountThreshold']);
      if (data.hasOwnProperty('eventServiceWebConnectionCountThreshold'))
        obj.eventServiceWebConnectionCountThreshold = EventThresholdModel.constructFromObject(data['eventServiceWebConnectionCountThreshold']);
      if (data.hasOwnProperty('eventSubscriptionCountThreshold'))
        obj.eventSubscriptionCountThreshold = EventThresholdModel.constructFromObject(data['eventSubscriptionCountThreshold']);
      if (data.hasOwnProperty('eventTransactedSessionCountThreshold'))
        obj.eventTransactedSessionCountThreshold = EventThresholdModel.constructFromObject(data['eventTransactedSessionCountThreshold']);
      if (data.hasOwnProperty('eventTransactionCountThreshold'))
        obj.eventTransactionCountThreshold = EventThresholdModel.constructFromObject(data['eventTransactionCountThreshold']);
      if (data.hasOwnProperty('exportSubscriptionsEnabled'))
        obj.exportSubscriptionsEnabled = ApiClient.convertToType(data['exportSubscriptionsEnabled'], 'Boolean');
      if (data.hasOwnProperty('failureReason'))
        obj.failureReason = ApiClient.convertToType(data['failureReason'], 'String');
      if (data.hasOwnProperty('jndiEnabled'))
        obj.jndiEnabled = ApiClient.convertToType(data['jndiEnabled'], 'Boolean');
      if (data.hasOwnProperty('loginRxMsgCount'))
        obj.loginRxMsgCount = ApiClient.convertToType(data['loginRxMsgCount'], 'Number');
      if (data.hasOwnProperty('loginTxMsgCount'))
        obj.loginTxMsgCount = ApiClient.convertToType(data['loginTxMsgCount'], 'Number');
      if (data.hasOwnProperty('maxConnectionCount'))
        obj.maxConnectionCount = ApiClient.convertToType(data['maxConnectionCount'], 'Number');
      if (data.hasOwnProperty('maxEffectiveEndpointCount'))
        obj.maxEffectiveEndpointCount = ApiClient.convertToType(data['maxEffectiveEndpointCount'], 'Number');
      if (data.hasOwnProperty('maxEffectiveRxFlowCount'))
        obj.maxEffectiveRxFlowCount = ApiClient.convertToType(data['maxEffectiveRxFlowCount'], 'Number');
      if (data.hasOwnProperty('maxEffectiveSubscriptionCount'))
        obj.maxEffectiveSubscriptionCount = ApiClient.convertToType(data['maxEffectiveSubscriptionCount'], 'Number');
      if (data.hasOwnProperty('maxEffectiveTransactedSessionCount'))
        obj.maxEffectiveTransactedSessionCount = ApiClient.convertToType(data['maxEffectiveTransactedSessionCount'], 'Number');
      if (data.hasOwnProperty('maxEffectiveTransactionCount'))
        obj.maxEffectiveTransactionCount = ApiClient.convertToType(data['maxEffectiveTransactionCount'], 'Number');
      if (data.hasOwnProperty('maxEffectiveTxFlowCount'))
        obj.maxEffectiveTxFlowCount = ApiClient.convertToType(data['maxEffectiveTxFlowCount'], 'Number');
      if (data.hasOwnProperty('maxEgressFlowCount'))
        obj.maxEgressFlowCount = ApiClient.convertToType(data['maxEgressFlowCount'], 'Number');
      if (data.hasOwnProperty('maxEndpointCount'))
        obj.maxEndpointCount = ApiClient.convertToType(data['maxEndpointCount'], 'Number');
      if (data.hasOwnProperty('maxIngressFlowCount'))
        obj.maxIngressFlowCount = ApiClient.convertToType(data['maxIngressFlowCount'], 'Number');
      if (data.hasOwnProperty('maxMsgSpoolUsage'))
        obj.maxMsgSpoolUsage = ApiClient.convertToType(data['maxMsgSpoolUsage'], 'Number');
      if (data.hasOwnProperty('maxSubscriptionCount'))
        obj.maxSubscriptionCount = ApiClient.convertToType(data['maxSubscriptionCount'], 'Number');
      if (data.hasOwnProperty('maxTransactedSessionCount'))
        obj.maxTransactedSessionCount = ApiClient.convertToType(data['maxTransactedSessionCount'], 'Number');
      if (data.hasOwnProperty('maxTransactionCount'))
        obj.maxTransactionCount = ApiClient.convertToType(data['maxTransactionCount'], 'Number');
      if (data.hasOwnProperty('mqttRetainMaxMemory'))
        obj.mqttRetainMaxMemory = ApiClient.convertToType(data['mqttRetainMaxMemory'], 'Number');
      if (data.hasOwnProperty('msgReplayActiveCount'))
        obj.msgReplayActiveCount = ApiClient.convertToType(data['msgReplayActiveCount'], 'Number');
      if (data.hasOwnProperty('msgReplayFailedCount'))
        obj.msgReplayFailedCount = ApiClient.convertToType(data['msgReplayFailedCount'], 'Number');
      if (data.hasOwnProperty('msgReplayInitializingCount'))
        obj.msgReplayInitializingCount = ApiClient.convertToType(data['msgReplayInitializingCount'], 'Number');
      if (data.hasOwnProperty('msgReplayPendingCompleteCount'))
        obj.msgReplayPendingCompleteCount = ApiClient.convertToType(data['msgReplayPendingCompleteCount'], 'Number');
      if (data.hasOwnProperty('msgSpoolMsgCount'))
        obj.msgSpoolMsgCount = ApiClient.convertToType(data['msgSpoolMsgCount'], 'Number');
      if (data.hasOwnProperty('msgSpoolRxMsgCount'))
        obj.msgSpoolRxMsgCount = ApiClient.convertToType(data['msgSpoolRxMsgCount'], 'Number');
      if (data.hasOwnProperty('msgSpoolTxMsgCount'))
        obj.msgSpoolTxMsgCount = ApiClient.convertToType(data['msgSpoolTxMsgCount'], 'Number');
      if (data.hasOwnProperty('msgSpoolUsage'))
        obj.msgSpoolUsage = ApiClient.convertToType(data['msgSpoolUsage'], 'Number');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('rate'))
        obj.rate = MsgVpnRateModel.constructFromObject(data['rate']);
      if (data.hasOwnProperty('replicationAckPropagationIntervalMsgCount'))
        obj.replicationAckPropagationIntervalMsgCount = ApiClient.convertToType(data['replicationAckPropagationIntervalMsgCount'], 'Number');
      if (data.hasOwnProperty('replicationActiveAckPropTxMsgCount'))
        obj.replicationActiveAckPropTxMsgCount = ApiClient.convertToType(data['replicationActiveAckPropTxMsgCount'], 'Number');
      if (data.hasOwnProperty('replicationActiveAsyncQueuedMsgCount'))
        obj.replicationActiveAsyncQueuedMsgCount = ApiClient.convertToType(data['replicationActiveAsyncQueuedMsgCount'], 'Number');
      if (data.hasOwnProperty('replicationActiveLocallyConsumedMsgCount'))
        obj.replicationActiveLocallyConsumedMsgCount = ApiClient.convertToType(data['replicationActiveLocallyConsumedMsgCount'], 'Number');
      if (data.hasOwnProperty('replicationActiveMateFlowCongestedPeakTime'))
        obj.replicationActiveMateFlowCongestedPeakTime = ApiClient.convertToType(data['replicationActiveMateFlowCongestedPeakTime'], 'Number');
      if (data.hasOwnProperty('replicationActiveMateFlowNotCongestedPeakTime'))
        obj.replicationActiveMateFlowNotCongestedPeakTime = ApiClient.convertToType(data['replicationActiveMateFlowNotCongestedPeakTime'], 'Number');
      if (data.hasOwnProperty('replicationActivePromotedQueuedMsgCount'))
        obj.replicationActivePromotedQueuedMsgCount = ApiClient.convertToType(data['replicationActivePromotedQueuedMsgCount'], 'Number');
      if (data.hasOwnProperty('replicationActiveReconcileRequestRxMsgCount'))
        obj.replicationActiveReconcileRequestRxMsgCount = ApiClient.convertToType(data['replicationActiveReconcileRequestRxMsgCount'], 'Number');
      if (data.hasOwnProperty('replicationActiveSyncEligiblePeakTime'))
        obj.replicationActiveSyncEligiblePeakTime = ApiClient.convertToType(data['replicationActiveSyncEligiblePeakTime'], 'Number');
      if (data.hasOwnProperty('replicationActiveSyncIneligiblePeakTime'))
        obj.replicationActiveSyncIneligiblePeakTime = ApiClient.convertToType(data['replicationActiveSyncIneligiblePeakTime'], 'Number');
      if (data.hasOwnProperty('replicationActiveSyncQueuedAsAsyncMsgCount'))
        obj.replicationActiveSyncQueuedAsAsyncMsgCount = ApiClient.convertToType(data['replicationActiveSyncQueuedAsAsyncMsgCount'], 'Number');
      if (data.hasOwnProperty('replicationActiveSyncQueuedMsgCount'))
        obj.replicationActiveSyncQueuedMsgCount = ApiClient.convertToType(data['replicationActiveSyncQueuedMsgCount'], 'Number');
      if (data.hasOwnProperty('replicationActiveTransitionToSyncIneligibleCount'))
        obj.replicationActiveTransitionToSyncIneligibleCount = ApiClient.convertToType(data['replicationActiveTransitionToSyncIneligibleCount'], 'Number');
      if (data.hasOwnProperty('replicationBridgeAuthenticationBasicClientUsername'))
        obj.replicationBridgeAuthenticationBasicClientUsername = ApiClient.convertToType(data['replicationBridgeAuthenticationBasicClientUsername'], 'String');
      if (data.hasOwnProperty('replicationBridgeAuthenticationScheme'))
        obj.replicationBridgeAuthenticationScheme = ApiClient.convertToType(data['replicationBridgeAuthenticationScheme'], 'String');
      if (data.hasOwnProperty('replicationBridgeBoundToQueue'))
        obj.replicationBridgeBoundToQueue = ApiClient.convertToType(data['replicationBridgeBoundToQueue'], 'Boolean');
      if (data.hasOwnProperty('replicationBridgeCompressedDataEnabled'))
        obj.replicationBridgeCompressedDataEnabled = ApiClient.convertToType(data['replicationBridgeCompressedDataEnabled'], 'Boolean');
      if (data.hasOwnProperty('replicationBridgeEgressFlowWindowSize'))
        obj.replicationBridgeEgressFlowWindowSize = ApiClient.convertToType(data['replicationBridgeEgressFlowWindowSize'], 'Number');
      if (data.hasOwnProperty('replicationBridgeName'))
        obj.replicationBridgeName = ApiClient.convertToType(data['replicationBridgeName'], 'String');
      if (data.hasOwnProperty('replicationBridgeRetryDelay'))
        obj.replicationBridgeRetryDelay = ApiClient.convertToType(data['replicationBridgeRetryDelay'], 'Number');
      if (data.hasOwnProperty('replicationBridgeTlsEnabled'))
        obj.replicationBridgeTlsEnabled = ApiClient.convertToType(data['replicationBridgeTlsEnabled'], 'Boolean');
      if (data.hasOwnProperty('replicationBridgeUnidirectionalClientProfileName'))
        obj.replicationBridgeUnidirectionalClientProfileName = ApiClient.convertToType(data['replicationBridgeUnidirectionalClientProfileName'], 'String');
      if (data.hasOwnProperty('replicationBridgeUp'))
        obj.replicationBridgeUp = ApiClient.convertToType(data['replicationBridgeUp'], 'Boolean');
      if (data.hasOwnProperty('replicationEnabled'))
        obj.replicationEnabled = ApiClient.convertToType(data['replicationEnabled'], 'Boolean');
      if (data.hasOwnProperty('replicationQueueBound'))
        obj.replicationQueueBound = ApiClient.convertToType(data['replicationQueueBound'], 'Boolean');
      if (data.hasOwnProperty('replicationQueueMaxMsgSpoolUsage'))
        obj.replicationQueueMaxMsgSpoolUsage = ApiClient.convertToType(data['replicationQueueMaxMsgSpoolUsage'], 'Number');
      if (data.hasOwnProperty('replicationQueueRejectMsgToSenderOnDiscardEnabled'))
        obj.replicationQueueRejectMsgToSenderOnDiscardEnabled = ApiClient.convertToType(data['replicationQueueRejectMsgToSenderOnDiscardEnabled'], 'Boolean');
      if (data.hasOwnProperty('replicationRejectMsgWhenSyncIneligibleEnabled'))
        obj.replicationRejectMsgWhenSyncIneligibleEnabled = ApiClient.convertToType(data['replicationRejectMsgWhenSyncIneligibleEnabled'], 'Boolean');
      if (data.hasOwnProperty('replicationRemoteBridgeName'))
        obj.replicationRemoteBridgeName = ApiClient.convertToType(data['replicationRemoteBridgeName'], 'String');
      if (data.hasOwnProperty('replicationRemoteBridgeUp'))
        obj.replicationRemoteBridgeUp = ApiClient.convertToType(data['replicationRemoteBridgeUp'], 'Boolean');
      if (data.hasOwnProperty('replicationRole'))
        obj.replicationRole = ApiClient.convertToType(data['replicationRole'], 'String');
      if (data.hasOwnProperty('replicationStandbyAckPropOutOfSeqRxMsgCount'))
        obj.replicationStandbyAckPropOutOfSeqRxMsgCount = ApiClient.convertToType(data['replicationStandbyAckPropOutOfSeqRxMsgCount'], 'Number');
      if (data.hasOwnProperty('replicationStandbyAckPropRxMsgCount'))
        obj.replicationStandbyAckPropRxMsgCount = ApiClient.convertToType(data['replicationStandbyAckPropRxMsgCount'], 'Number');
      if (data.hasOwnProperty('replicationStandbyReconcileRequestTxMsgCount'))
        obj.replicationStandbyReconcileRequestTxMsgCount = ApiClient.convertToType(data['replicationStandbyReconcileRequestTxMsgCount'], 'Number');
      if (data.hasOwnProperty('replicationStandbyRxMsgCount'))
        obj.replicationStandbyRxMsgCount = ApiClient.convertToType(data['replicationStandbyRxMsgCount'], 'Number');
      if (data.hasOwnProperty('replicationStandbyTransactionRequestCount'))
        obj.replicationStandbyTransactionRequestCount = ApiClient.convertToType(data['replicationStandbyTransactionRequestCount'], 'Number');
      if (data.hasOwnProperty('replicationStandbyTransactionRequestFailureCount'))
        obj.replicationStandbyTransactionRequestFailureCount = ApiClient.convertToType(data['replicationStandbyTransactionRequestFailureCount'], 'Number');
      if (data.hasOwnProperty('replicationStandbyTransactionRequestSuccessCount'))
        obj.replicationStandbyTransactionRequestSuccessCount = ApiClient.convertToType(data['replicationStandbyTransactionRequestSuccessCount'], 'Number');
      if (data.hasOwnProperty('replicationSyncEligible'))
        obj.replicationSyncEligible = ApiClient.convertToType(data['replicationSyncEligible'], 'Boolean');
      if (data.hasOwnProperty('replicationTransactionMode'))
        obj.replicationTransactionMode = ApiClient.convertToType(data['replicationTransactionMode'], 'String');
      if (data.hasOwnProperty('restTlsServerCertEnforceTrustedCommonNameEnabled'))
        obj.restTlsServerCertEnforceTrustedCommonNameEnabled = ApiClient.convertToType(data['restTlsServerCertEnforceTrustedCommonNameEnabled'], 'Boolean');
      if (data.hasOwnProperty('restTlsServerCertMaxChainDepth'))
        obj.restTlsServerCertMaxChainDepth = ApiClient.convertToType(data['restTlsServerCertMaxChainDepth'], 'Number');
      if (data.hasOwnProperty('restTlsServerCertValidateDateEnabled'))
        obj.restTlsServerCertValidateDateEnabled = ApiClient.convertToType(data['restTlsServerCertValidateDateEnabled'], 'Boolean');
      if (data.hasOwnProperty('restTlsServerCertValidateNameEnabled'))
        obj.restTlsServerCertValidateNameEnabled = ApiClient.convertToType(data['restTlsServerCertValidateNameEnabled'], 'Boolean');
      if (data.hasOwnProperty('rxByteCount'))
        obj.rxByteCount = ApiClient.convertToType(data['rxByteCount'], 'Number');
      if (data.hasOwnProperty('rxByteRate'))
        obj.rxByteRate = ApiClient.convertToType(data['rxByteRate'], 'Number');
      if (data.hasOwnProperty('rxCompressedByteCount'))
        obj.rxCompressedByteCount = ApiClient.convertToType(data['rxCompressedByteCount'], 'Number');
      if (data.hasOwnProperty('rxCompressedByteRate'))
        obj.rxCompressedByteRate = ApiClient.convertToType(data['rxCompressedByteRate'], 'Number');
      if (data.hasOwnProperty('rxCompressionRatio'))
        obj.rxCompressionRatio = ApiClient.convertToType(data['rxCompressionRatio'], 'String');
      if (data.hasOwnProperty('rxMsgCount'))
        obj.rxMsgCount = ApiClient.convertToType(data['rxMsgCount'], 'Number');
      if (data.hasOwnProperty('rxMsgRate'))
        obj.rxMsgRate = ApiClient.convertToType(data['rxMsgRate'], 'Number');
      if (data.hasOwnProperty('rxUncompressedByteCount'))
        obj.rxUncompressedByteCount = ApiClient.convertToType(data['rxUncompressedByteCount'], 'Number');
      if (data.hasOwnProperty('rxUncompressedByteRate'))
        obj.rxUncompressedByteRate = ApiClient.convertToType(data['rxUncompressedByteRate'], 'Number');
      if (data.hasOwnProperty('sempOverMsgBusAdminClientEnabled'))
        obj.sempOverMsgBusAdminClientEnabled = ApiClient.convertToType(data['sempOverMsgBusAdminClientEnabled'], 'Boolean');
      if (data.hasOwnProperty('sempOverMsgBusAdminDistributedCacheEnabled'))
        obj.sempOverMsgBusAdminDistributedCacheEnabled = ApiClient.convertToType(data['sempOverMsgBusAdminDistributedCacheEnabled'], 'Boolean');
      if (data.hasOwnProperty('sempOverMsgBusAdminEnabled'))
        obj.sempOverMsgBusAdminEnabled = ApiClient.convertToType(data['sempOverMsgBusAdminEnabled'], 'Boolean');
      if (data.hasOwnProperty('sempOverMsgBusEnabled'))
        obj.sempOverMsgBusEnabled = ApiClient.convertToType(data['sempOverMsgBusEnabled'], 'Boolean');
      if (data.hasOwnProperty('sempOverMsgBusShowEnabled'))
        obj.sempOverMsgBusShowEnabled = ApiClient.convertToType(data['sempOverMsgBusShowEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceAmqpMaxConnectionCount'))
        obj.serviceAmqpMaxConnectionCount = ApiClient.convertToType(data['serviceAmqpMaxConnectionCount'], 'Number');
      if (data.hasOwnProperty('serviceAmqpPlainTextCompressed'))
        obj.serviceAmqpPlainTextCompressed = ApiClient.convertToType(data['serviceAmqpPlainTextCompressed'], 'Boolean');
      if (data.hasOwnProperty('serviceAmqpPlainTextEnabled'))
        obj.serviceAmqpPlainTextEnabled = ApiClient.convertToType(data['serviceAmqpPlainTextEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceAmqpPlainTextFailureReason'))
        obj.serviceAmqpPlainTextFailureReason = ApiClient.convertToType(data['serviceAmqpPlainTextFailureReason'], 'String');
      if (data.hasOwnProperty('serviceAmqpPlainTextListenPort'))
        obj.serviceAmqpPlainTextListenPort = ApiClient.convertToType(data['serviceAmqpPlainTextListenPort'], 'Number');
      if (data.hasOwnProperty('serviceAmqpPlainTextUp'))
        obj.serviceAmqpPlainTextUp = ApiClient.convertToType(data['serviceAmqpPlainTextUp'], 'Boolean');
      if (data.hasOwnProperty('serviceAmqpTlsCompressed'))
        obj.serviceAmqpTlsCompressed = ApiClient.convertToType(data['serviceAmqpTlsCompressed'], 'Boolean');
      if (data.hasOwnProperty('serviceAmqpTlsEnabled'))
        obj.serviceAmqpTlsEnabled = ApiClient.convertToType(data['serviceAmqpTlsEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceAmqpTlsFailureReason'))
        obj.serviceAmqpTlsFailureReason = ApiClient.convertToType(data['serviceAmqpTlsFailureReason'], 'String');
      if (data.hasOwnProperty('serviceAmqpTlsListenPort'))
        obj.serviceAmqpTlsListenPort = ApiClient.convertToType(data['serviceAmqpTlsListenPort'], 'Number');
      if (data.hasOwnProperty('serviceAmqpTlsUp'))
        obj.serviceAmqpTlsUp = ApiClient.convertToType(data['serviceAmqpTlsUp'], 'Boolean');
      if (data.hasOwnProperty('serviceMqttAuthenticationClientCertRequest'))
        obj.serviceMqttAuthenticationClientCertRequest = ApiClient.convertToType(data['serviceMqttAuthenticationClientCertRequest'], 'String');
      if (data.hasOwnProperty('serviceMqttMaxConnectionCount'))
        obj.serviceMqttMaxConnectionCount = ApiClient.convertToType(data['serviceMqttMaxConnectionCount'], 'Number');
      if (data.hasOwnProperty('serviceMqttPlainTextCompressed'))
        obj.serviceMqttPlainTextCompressed = ApiClient.convertToType(data['serviceMqttPlainTextCompressed'], 'Boolean');
      if (data.hasOwnProperty('serviceMqttPlainTextEnabled'))
        obj.serviceMqttPlainTextEnabled = ApiClient.convertToType(data['serviceMqttPlainTextEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceMqttPlainTextFailureReason'))
        obj.serviceMqttPlainTextFailureReason = ApiClient.convertToType(data['serviceMqttPlainTextFailureReason'], 'String');
      if (data.hasOwnProperty('serviceMqttPlainTextListenPort'))
        obj.serviceMqttPlainTextListenPort = ApiClient.convertToType(data['serviceMqttPlainTextListenPort'], 'Number');
      if (data.hasOwnProperty('serviceMqttPlainTextUp'))
        obj.serviceMqttPlainTextUp = ApiClient.convertToType(data['serviceMqttPlainTextUp'], 'Boolean');
      if (data.hasOwnProperty('serviceMqttTlsCompressed'))
        obj.serviceMqttTlsCompressed = ApiClient.convertToType(data['serviceMqttTlsCompressed'], 'Boolean');
      if (data.hasOwnProperty('serviceMqttTlsEnabled'))
        obj.serviceMqttTlsEnabled = ApiClient.convertToType(data['serviceMqttTlsEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceMqttTlsFailureReason'))
        obj.serviceMqttTlsFailureReason = ApiClient.convertToType(data['serviceMqttTlsFailureReason'], 'String');
      if (data.hasOwnProperty('serviceMqttTlsListenPort'))
        obj.serviceMqttTlsListenPort = ApiClient.convertToType(data['serviceMqttTlsListenPort'], 'Number');
      if (data.hasOwnProperty('serviceMqttTlsUp'))
        obj.serviceMqttTlsUp = ApiClient.convertToType(data['serviceMqttTlsUp'], 'Boolean');
      if (data.hasOwnProperty('serviceMqttTlsWebSocketCompressed'))
        obj.serviceMqttTlsWebSocketCompressed = ApiClient.convertToType(data['serviceMqttTlsWebSocketCompressed'], 'Boolean');
      if (data.hasOwnProperty('serviceMqttTlsWebSocketEnabled'))
        obj.serviceMqttTlsWebSocketEnabled = ApiClient.convertToType(data['serviceMqttTlsWebSocketEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceMqttTlsWebSocketFailureReason'))
        obj.serviceMqttTlsWebSocketFailureReason = ApiClient.convertToType(data['serviceMqttTlsWebSocketFailureReason'], 'String');
      if (data.hasOwnProperty('serviceMqttTlsWebSocketListenPort'))
        obj.serviceMqttTlsWebSocketListenPort = ApiClient.convertToType(data['serviceMqttTlsWebSocketListenPort'], 'Number');
      if (data.hasOwnProperty('serviceMqttTlsWebSocketUp'))
        obj.serviceMqttTlsWebSocketUp = ApiClient.convertToType(data['serviceMqttTlsWebSocketUp'], 'Boolean');
      if (data.hasOwnProperty('serviceMqttWebSocketCompressed'))
        obj.serviceMqttWebSocketCompressed = ApiClient.convertToType(data['serviceMqttWebSocketCompressed'], 'Boolean');
      if (data.hasOwnProperty('serviceMqttWebSocketEnabled'))
        obj.serviceMqttWebSocketEnabled = ApiClient.convertToType(data['serviceMqttWebSocketEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceMqttWebSocketFailureReason'))
        obj.serviceMqttWebSocketFailureReason = ApiClient.convertToType(data['serviceMqttWebSocketFailureReason'], 'String');
      if (data.hasOwnProperty('serviceMqttWebSocketListenPort'))
        obj.serviceMqttWebSocketListenPort = ApiClient.convertToType(data['serviceMqttWebSocketListenPort'], 'Number');
      if (data.hasOwnProperty('serviceMqttWebSocketUp'))
        obj.serviceMqttWebSocketUp = ApiClient.convertToType(data['serviceMqttWebSocketUp'], 'Boolean');
      if (data.hasOwnProperty('serviceRestIncomingAuthenticationClientCertRequest'))
        obj.serviceRestIncomingAuthenticationClientCertRequest = ApiClient.convertToType(data['serviceRestIncomingAuthenticationClientCertRequest'], 'String');
      if (data.hasOwnProperty('serviceRestIncomingAuthorizationHeaderHandling'))
        obj.serviceRestIncomingAuthorizationHeaderHandling = ApiClient.convertToType(data['serviceRestIncomingAuthorizationHeaderHandling'], 'String');
      if (data.hasOwnProperty('serviceRestIncomingMaxConnectionCount'))
        obj.serviceRestIncomingMaxConnectionCount = ApiClient.convertToType(data['serviceRestIncomingMaxConnectionCount'], 'Number');
      if (data.hasOwnProperty('serviceRestIncomingPlainTextCompressed'))
        obj.serviceRestIncomingPlainTextCompressed = ApiClient.convertToType(data['serviceRestIncomingPlainTextCompressed'], 'Boolean');
      if (data.hasOwnProperty('serviceRestIncomingPlainTextEnabled'))
        obj.serviceRestIncomingPlainTextEnabled = ApiClient.convertToType(data['serviceRestIncomingPlainTextEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceRestIncomingPlainTextFailureReason'))
        obj.serviceRestIncomingPlainTextFailureReason = ApiClient.convertToType(data['serviceRestIncomingPlainTextFailureReason'], 'String');
      if (data.hasOwnProperty('serviceRestIncomingPlainTextListenPort'))
        obj.serviceRestIncomingPlainTextListenPort = ApiClient.convertToType(data['serviceRestIncomingPlainTextListenPort'], 'Number');
      if (data.hasOwnProperty('serviceRestIncomingPlainTextUp'))
        obj.serviceRestIncomingPlainTextUp = ApiClient.convertToType(data['serviceRestIncomingPlainTextUp'], 'Boolean');
      if (data.hasOwnProperty('serviceRestIncomingTlsCompressed'))
        obj.serviceRestIncomingTlsCompressed = ApiClient.convertToType(data['serviceRestIncomingTlsCompressed'], 'Boolean');
      if (data.hasOwnProperty('serviceRestIncomingTlsEnabled'))
        obj.serviceRestIncomingTlsEnabled = ApiClient.convertToType(data['serviceRestIncomingTlsEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceRestIncomingTlsFailureReason'))
        obj.serviceRestIncomingTlsFailureReason = ApiClient.convertToType(data['serviceRestIncomingTlsFailureReason'], 'String');
      if (data.hasOwnProperty('serviceRestIncomingTlsListenPort'))
        obj.serviceRestIncomingTlsListenPort = ApiClient.convertToType(data['serviceRestIncomingTlsListenPort'], 'Number');
      if (data.hasOwnProperty('serviceRestIncomingTlsUp'))
        obj.serviceRestIncomingTlsUp = ApiClient.convertToType(data['serviceRestIncomingTlsUp'], 'Boolean');
      if (data.hasOwnProperty('serviceRestMode'))
        obj.serviceRestMode = ApiClient.convertToType(data['serviceRestMode'], 'String');
      if (data.hasOwnProperty('serviceRestOutgoingMaxConnectionCount'))
        obj.serviceRestOutgoingMaxConnectionCount = ApiClient.convertToType(data['serviceRestOutgoingMaxConnectionCount'], 'Number');
      if (data.hasOwnProperty('serviceSmfMaxConnectionCount'))
        obj.serviceSmfMaxConnectionCount = ApiClient.convertToType(data['serviceSmfMaxConnectionCount'], 'Number');
      if (data.hasOwnProperty('serviceSmfPlainTextEnabled'))
        obj.serviceSmfPlainTextEnabled = ApiClient.convertToType(data['serviceSmfPlainTextEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceSmfPlainTextFailureReason'))
        obj.serviceSmfPlainTextFailureReason = ApiClient.convertToType(data['serviceSmfPlainTextFailureReason'], 'String');
      if (data.hasOwnProperty('serviceSmfPlainTextUp'))
        obj.serviceSmfPlainTextUp = ApiClient.convertToType(data['serviceSmfPlainTextUp'], 'Boolean');
      if (data.hasOwnProperty('serviceSmfTlsEnabled'))
        obj.serviceSmfTlsEnabled = ApiClient.convertToType(data['serviceSmfTlsEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceSmfTlsFailureReason'))
        obj.serviceSmfTlsFailureReason = ApiClient.convertToType(data['serviceSmfTlsFailureReason'], 'String');
      if (data.hasOwnProperty('serviceSmfTlsUp'))
        obj.serviceSmfTlsUp = ApiClient.convertToType(data['serviceSmfTlsUp'], 'Boolean');
      if (data.hasOwnProperty('serviceWebAuthenticationClientCertRequest'))
        obj.serviceWebAuthenticationClientCertRequest = ApiClient.convertToType(data['serviceWebAuthenticationClientCertRequest'], 'String');
      if (data.hasOwnProperty('serviceWebMaxConnectionCount'))
        obj.serviceWebMaxConnectionCount = ApiClient.convertToType(data['serviceWebMaxConnectionCount'], 'Number');
      if (data.hasOwnProperty('serviceWebPlainTextEnabled'))
        obj.serviceWebPlainTextEnabled = ApiClient.convertToType(data['serviceWebPlainTextEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceWebPlainTextFailureReason'))
        obj.serviceWebPlainTextFailureReason = ApiClient.convertToType(data['serviceWebPlainTextFailureReason'], 'String');
      if (data.hasOwnProperty('serviceWebPlainTextUp'))
        obj.serviceWebPlainTextUp = ApiClient.convertToType(data['serviceWebPlainTextUp'], 'Boolean');
      if (data.hasOwnProperty('serviceWebTlsEnabled'))
        obj.serviceWebTlsEnabled = ApiClient.convertToType(data['serviceWebTlsEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceWebTlsFailureReason'))
        obj.serviceWebTlsFailureReason = ApiClient.convertToType(data['serviceWebTlsFailureReason'], 'String');
      if (data.hasOwnProperty('serviceWebTlsUp'))
        obj.serviceWebTlsUp = ApiClient.convertToType(data['serviceWebTlsUp'], 'Boolean');
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
      if (data.hasOwnProperty('subscriptionExportProgress'))
        obj.subscriptionExportProgress = ApiClient.convertToType(data['subscriptionExportProgress'], 'Number');
      if (data.hasOwnProperty('systemManager'))
        obj.systemManager = ApiClient.convertToType(data['systemManager'], 'Boolean');
      if (data.hasOwnProperty('tlsAllowDowngradeToPlainTextEnabled'))
        obj.tlsAllowDowngradeToPlainTextEnabled = ApiClient.convertToType(data['tlsAllowDowngradeToPlainTextEnabled'], 'Boolean');
      if (data.hasOwnProperty('tlsAverageRxByteRate'))
        obj.tlsAverageRxByteRate = ApiClient.convertToType(data['tlsAverageRxByteRate'], 'Number');
      if (data.hasOwnProperty('tlsAverageTxByteRate'))
        obj.tlsAverageTxByteRate = ApiClient.convertToType(data['tlsAverageTxByteRate'], 'Number');
      if (data.hasOwnProperty('tlsRxByteCount'))
        obj.tlsRxByteCount = ApiClient.convertToType(data['tlsRxByteCount'], 'Number');
      if (data.hasOwnProperty('tlsRxByteRate'))
        obj.tlsRxByteRate = ApiClient.convertToType(data['tlsRxByteRate'], 'Number');
      if (data.hasOwnProperty('tlsTxByteCount'))
        obj.tlsTxByteCount = ApiClient.convertToType(data['tlsTxByteCount'], 'Number');
      if (data.hasOwnProperty('tlsTxByteRate'))
        obj.tlsTxByteRate = ApiClient.convertToType(data['tlsTxByteRate'], 'Number');
      if (data.hasOwnProperty('txByteCount'))
        obj.txByteCount = ApiClient.convertToType(data['txByteCount'], 'Number');
      if (data.hasOwnProperty('txByteRate'))
        obj.txByteRate = ApiClient.convertToType(data['txByteRate'], 'Number');
      if (data.hasOwnProperty('txCompressedByteCount'))
        obj.txCompressedByteCount = ApiClient.convertToType(data['txCompressedByteCount'], 'Number');
      if (data.hasOwnProperty('txCompressedByteRate'))
        obj.txCompressedByteRate = ApiClient.convertToType(data['txCompressedByteRate'], 'Number');
      if (data.hasOwnProperty('txCompressionRatio'))
        obj.txCompressionRatio = ApiClient.convertToType(data['txCompressionRatio'], 'String');
      if (data.hasOwnProperty('txMsgCount'))
        obj.txMsgCount = ApiClient.convertToType(data['txMsgCount'], 'Number');
      if (data.hasOwnProperty('txMsgRate'))
        obj.txMsgRate = ApiClient.convertToType(data['txMsgRate'], 'Number');
      if (data.hasOwnProperty('txUncompressedByteCount'))
        obj.txUncompressedByteCount = ApiClient.convertToType(data['txUncompressedByteCount'], 'Number');
      if (data.hasOwnProperty('txUncompressedByteRate'))
        obj.txUncompressedByteRate = ApiClient.convertToType(data['txUncompressedByteRate'], 'Number');
    }
    return obj;
  }
}

/**
 * The name of another Message VPN which this Message VPN is an alias for. Available since 2.14.
 * @member {String} alias
 */
MsgVpnModel.prototype.alias = undefined;

/**
 * Indicates whether basic authentication is enabled for clients connecting to the Message VPN.
 * @member {Boolean} authenticationBasicEnabled
 */
MsgVpnModel.prototype.authenticationBasicEnabled = undefined;

/**
 * The name of the RADIUS or LDAP Profile to use for basic authentication.
 * @member {String} authenticationBasicProfileName
 */
MsgVpnModel.prototype.authenticationBasicProfileName = undefined;

/**
 * The RADIUS domain to use for basic authentication.
 * @member {String} authenticationBasicRadiusDomain
 */
MsgVpnModel.prototype.authenticationBasicRadiusDomain = undefined;

/**
 * Allowed values for the <code>authenticationBasicType</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnModel.AuthenticationBasicTypeEnum = {
  /**
   * value: "internal"
   * @const
   */
  internal: "internal",

  /**
   * value: "ldap"
   * @const
   */
  ldap: "ldap",

  /**
   * value: "radius"
   * @const
   */
  radius: "radius",

  /**
   * value: "none"
   * @const
   */
  none: "none"
};
/**
 * The type of basic authentication to use for clients connecting to the Message VPN. The allowed values and their meaning are:  <pre> \"internal\" - Internal database. Authentication is against Client Usernames. \"ldap\" - LDAP authentication. An LDAP profile name must be provided. \"radius\" - RADIUS authentication. A RADIUS profile name must be provided. \"none\" - No authentication. Anonymous login allowed. </pre> 
 * @member {module:model/MsgVpnModel.AuthenticationBasicTypeEnum} authenticationBasicType
 */
MsgVpnModel.prototype.authenticationBasicType = undefined;

/**
 * Indicates whether a client is allowed to specify a Client Username via the API connect method. When disabled, the certificate CN (Common Name) is always used.
 * @member {Boolean} authenticationClientCertAllowApiProvidedUsernameEnabled
 */
MsgVpnModel.prototype.authenticationClientCertAllowApiProvidedUsernameEnabled = undefined;

/**
 * Indicates whether client certificate matching rules are enabled in the Message VPN. Available since 2.27.
 * @member {Boolean} authenticationClientCertCertificateMatchingRulesEnabled
 */
MsgVpnModel.prototype.authenticationClientCertCertificateMatchingRulesEnabled = undefined;

/**
 * Indicates whether client certificate authentication is enabled in the Message VPN.
 * @member {Boolean} authenticationClientCertEnabled
 */
MsgVpnModel.prototype.authenticationClientCertEnabled = undefined;

/**
 * The maximum depth for a client certificate chain. The depth of a chain is defined as the number of signing CA certificates that are present in the chain back to a trusted self-signed root CA certificate.
 * @member {Number} authenticationClientCertMaxChainDepth
 */
MsgVpnModel.prototype.authenticationClientCertMaxChainDepth = undefined;

/**
 * Allowed values for the <code>authenticationClientCertRevocationCheckMode</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnModel.AuthenticationClientCertRevocationCheckModeEnum = {
  /**
   * value: "allow-all"
   * @const
   */
  all: "allow-all",

  /**
   * value: "allow-unknown"
   * @const
   */
  unknown: "allow-unknown",

  /**
   * value: "allow-valid"
   * @const
   */
  valid: "allow-valid"
};
/**
 * The desired behavior for client certificate revocation checking. The allowed values and their meaning are:  <pre> \"allow-all\" - Allow the client to authenticate, the result of client certificate revocation check is ignored. \"allow-unknown\" - Allow the client to authenticate even if the revocation status of his certificate cannot be determined. \"allow-valid\" - Allow the client to authenticate only when the revocation check returned an explicit positive response. </pre> 
 * @member {module:model/MsgVpnModel.AuthenticationClientCertRevocationCheckModeEnum} authenticationClientCertRevocationCheckMode
 */
MsgVpnModel.prototype.authenticationClientCertRevocationCheckMode = undefined;

/**
 * Allowed values for the <code>authenticationClientCertUsernameSource</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnModel.AuthenticationClientCertUsernameSourceEnum = {
  /**
   * value: "certificate-thumbprint"
   * @const
   */
  certificateThumbprint: "certificate-thumbprint",

  /**
   * value: "common-name"
   * @const
   */
  commonName: "common-name",

  /**
   * value: "common-name-last"
   * @const
   */
  commonNameLast: "common-name-last",

  /**
   * value: "subject-alternate-name-msupn"
   * @const
   */
  subjectAlternateNameMsupn: "subject-alternate-name-msupn",

  /**
   * value: "uid"
   * @const
   */
  uid: "uid",

  /**
   * value: "uid-last"
   * @const
   */
  uidLast: "uid-last"
};
/**
 * The field from the client certificate to use as the client username. The allowed values and their meaning are:  <pre> \"certificate-thumbprint\" - The username is computed as the SHA-1 hash over the entire DER-encoded contents of the client certificate. \"common-name\" - The username is extracted from the certificate's first instance of the Common Name attribute in the Subject DN. \"common-name-last\" - The username is extracted from the certificate's last instance of the Common Name attribute in the Subject DN. \"subject-alternate-name-msupn\" - The username is extracted from the certificate's Other Name type of the Subject Alternative Name and must have the msUPN signature. \"uid\" - The username is extracted from the certificate's first instance of the User Identifier attribute in the Subject DN. \"uid-last\" - The username is extracted from the certificate's last instance of the User Identifier attribute in the Subject DN. </pre> 
 * @member {module:model/MsgVpnModel.AuthenticationClientCertUsernameSourceEnum} authenticationClientCertUsernameSource
 */
MsgVpnModel.prototype.authenticationClientCertUsernameSource = undefined;

/**
 * Indicates whether the \"Not Before\" and \"Not After\" validity dates in the client certificate are checked.
 * @member {Boolean} authenticationClientCertValidateDateEnabled
 */
MsgVpnModel.prototype.authenticationClientCertValidateDateEnabled = undefined;

/**
 * Indicates whether a client is allowed to specify a Client Username via the API connect method. When disabled, the Kerberos Principal name is always used.
 * @member {Boolean} authenticationKerberosAllowApiProvidedUsernameEnabled
 */
MsgVpnModel.prototype.authenticationKerberosAllowApiProvidedUsernameEnabled = undefined;

/**
 * Indicates whether Kerberos authentication is enabled in the Message VPN.
 * @member {Boolean} authenticationKerberosEnabled
 */
MsgVpnModel.prototype.authenticationKerberosEnabled = undefined;

/**
 * The name of the profile to use when the client does not supply a profile name. Available since 2.25.
 * @member {String} authenticationOauthDefaultProfileName
 */
MsgVpnModel.prototype.authenticationOauthDefaultProfileName = undefined;

/**
 * The name of the provider to use when the client does not supply a provider name. Deprecated since 2.25. authenticationOauthDefaultProviderName and authenticationOauthProviders replaced by authenticationOauthDefaultProfileName and authenticationOauthProfiles.
 * @member {String} authenticationOauthDefaultProviderName
 */
MsgVpnModel.prototype.authenticationOauthDefaultProviderName = undefined;

/**
 * Indicates whether OAuth authentication is enabled. Available since 2.13.
 * @member {Boolean} authenticationOauthEnabled
 */
MsgVpnModel.prototype.authenticationOauthEnabled = undefined;

/**
 * The name of the attribute that is retrieved from the LDAP server as part of the LDAP search when authorizing a client connecting to the Message VPN.
 * @member {String} authorizationLdapGroupMembershipAttributeName
 */
MsgVpnModel.prototype.authorizationLdapGroupMembershipAttributeName = undefined;

/**
 * Indicates whether client-username domain trimming for LDAP lookups of client connections is enabled. Available since 2.13.
 * @member {Boolean} authorizationLdapTrimClientUsernameDomainEnabled
 */
MsgVpnModel.prototype.authorizationLdapTrimClientUsernameDomainEnabled = undefined;

/**
 * The name of the LDAP Profile to use for client authorization.
 * @member {String} authorizationProfileName
 */
MsgVpnModel.prototype.authorizationProfileName = undefined;

/**
 * Allowed values for the <code>authorizationType</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnModel.AuthorizationTypeEnum = {
  /**
   * value: "ldap"
   * @const
   */
  ldap: "ldap",

  /**
   * value: "internal"
   * @const
   */
  internal: "internal"
};
/**
 * The type of authorization to use for clients connecting to the Message VPN. The allowed values and their meaning are:  <pre> \"ldap\" - LDAP authorization. \"internal\" - Internal authorization. </pre> 
 * @member {module:model/MsgVpnModel.AuthorizationTypeEnum} authorizationType
 */
MsgVpnModel.prototype.authorizationType = undefined;

/**
 * The one minute average of the bind request rate received by the MsgVpn, in binds per second (binds/sec). Available since 2.25.
 * @member {Number} averageBindRequestRate
 */
MsgVpnModel.prototype.averageBindRequestRate = undefined;

/**
 * The one minute average of the message rate received by the Message VPN, in bytes per second (B/sec). Available since 2.13.
 * @member {Number} averageRxByteRate
 */
MsgVpnModel.prototype.averageRxByteRate = undefined;

/**
 * The one minute average of the compressed message rate received by the Message VPN, in bytes per second (B/sec). Available since 2.12.
 * @member {Number} averageRxCompressedByteRate
 */
MsgVpnModel.prototype.averageRxCompressedByteRate = undefined;

/**
 * The one minute average of the message rate received by the Message VPN, in messages per second (msg/sec). Available since 2.13.
 * @member {Number} averageRxMsgRate
 */
MsgVpnModel.prototype.averageRxMsgRate = undefined;

/**
 * The one minute average of the uncompressed message rate received by the Message VPN, in bytes per second (B/sec). Available since 2.12.
 * @member {Number} averageRxUncompressedByteRate
 */
MsgVpnModel.prototype.averageRxUncompressedByteRate = undefined;

/**
 * The one minute average of the message rate transmitted by the Message VPN, in bytes per second (B/sec). Available since 2.13.
 * @member {Number} averageTxByteRate
 */
MsgVpnModel.prototype.averageTxByteRate = undefined;

/**
 * The one minute average of the compressed message rate transmitted by the Message VPN, in bytes per second (B/sec). Available since 2.12.
 * @member {Number} averageTxCompressedByteRate
 */
MsgVpnModel.prototype.averageTxCompressedByteRate = undefined;

/**
 * The one minute average of the message rate transmitted by the Message VPN, in messages per second (msg/sec). Available since 2.13.
 * @member {Number} averageTxMsgRate
 */
MsgVpnModel.prototype.averageTxMsgRate = undefined;

/**
 * The one minute average of the uncompressed message rate transmitted by the Message VPN, in bytes per second (B/sec). Available since 2.12.
 * @member {Number} averageTxUncompressedByteRate
 */
MsgVpnModel.prototype.averageTxUncompressedByteRate = undefined;

/**
 * The current bind request rate received by the MsgVpn, in binds per second (binds/sec). Available since 2.25.
 * @member {Number} bindRequestRate
 */
MsgVpnModel.prototype.bindRequestRate = undefined;

/**
 * Indicates whether the Common Name (CN) in the server certificate from the remote broker is validated for the Bridge. Deprecated since 2.18. Common Name validation has been replaced by Server Certificate Name validation.
 * @member {Boolean} bridgingTlsServerCertEnforceTrustedCommonNameEnabled
 */
MsgVpnModel.prototype.bridgingTlsServerCertEnforceTrustedCommonNameEnabled = undefined;

/**
 * The maximum depth for a server certificate chain. The depth of a chain is defined as the number of signing CA certificates that are present in the chain back to a trusted self-signed root CA certificate.
 * @member {Number} bridgingTlsServerCertMaxChainDepth
 */
MsgVpnModel.prototype.bridgingTlsServerCertMaxChainDepth = undefined;

/**
 * Indicates whether the \"Not Before\" and \"Not After\" validity dates in the server certificate are checked.
 * @member {Boolean} bridgingTlsServerCertValidateDateEnabled
 */
MsgVpnModel.prototype.bridgingTlsServerCertValidateDateEnabled = undefined;

/**
 * Enable or disable the standard TLS authentication mechanism of verifying the name used to connect to the bridge. If enabled, the name used to connect to the bridge is checked against the names specified in the certificate returned by the remote broker. Legacy Common Name validation is not performed if Server Certificate Name Validation is enabled, even if Common Name validation is also enabled. Available since 2.18.
 * @member {Boolean} bridgingTlsServerCertValidateNameEnabled
 */
MsgVpnModel.prototype.bridgingTlsServerCertValidateNameEnabled = undefined;

/**
 * The key for the config sync table of the local Message VPN. Deprecated since 2.22. This attribute has been deprecated.
 * @member {String} configSyncLocalKey
 */
MsgVpnModel.prototype.configSyncLocalKey = undefined;

/**
 * The result of the last operation on the config sync table of the local Message VPN. Deprecated since 2.22. This attribute has been replaced by \"lastResult\" in the ConfigSyncLocalDatabaseRow object.
 * @member {String} configSyncLocalLastResult
 */
MsgVpnModel.prototype.configSyncLocalLastResult = undefined;

/**
 * The role of the config sync table of the local Message VPN. The allowed values and their meaning are:  <pre> \"unknown\" - The role is unknown. \"primary\" - Acts as the primary source of config data. \"replica\" - Acts as a replica of the primary config data. </pre>  Deprecated since 2.22. This attribute has been replaced by \"role\" in the ConfigSyncLocalDatabaseRow object.
 * @member {String} configSyncLocalRole
 */
MsgVpnModel.prototype.configSyncLocalRole = undefined;

/**
 * The state of the config sync table of the local Message VPN. The allowed values and their meaning are:  <pre> \"unknown\" - The state is unknown. \"in-sync\" - The config data is synchronized between Message VPNs. \"reconciling\" - The config data is reconciling between Message VPNs. \"blocked\" - The config data is blocked from reconciling due to an error. \"out-of-sync\" - The config data is out of sync between Message VPNs. \"down\" - The state is down due to configuration. </pre>  Deprecated since 2.22. This attribute has been replaced by \"syncStatus\" in the ConfigSyncLocalDatabaseRow object.
 * @member {String} configSyncLocalState
 */
MsgVpnModel.prototype.configSyncLocalState = undefined;

/**
 * The amount of time in seconds the config sync table of the local Message VPN has been in the current state. Deprecated since 2.22. This attribute has been replaced by \"timeInState\" in the ConfigSyncLocalDatabaseRow object.
 * @member {Number} configSyncLocalTimeInState
 */
MsgVpnModel.prototype.configSyncLocalTimeInState = undefined;

/**
 * The amount of client control messages received from clients by the Message VPN, in bytes (B). Available since 2.13.
 * @member {Number} controlRxByteCount
 */
MsgVpnModel.prototype.controlRxByteCount = undefined;

/**
 * The number of client control messages received from clients by the Message VPN. Available since 2.13.
 * @member {Number} controlRxMsgCount
 */
MsgVpnModel.prototype.controlRxMsgCount = undefined;

/**
 * The amount of client control messages transmitted to clients by the Message VPN, in bytes (B). Available since 2.13.
 * @member {Number} controlTxByteCount
 */
MsgVpnModel.prototype.controlTxByteCount = undefined;

/**
 * The number of client control messages transmitted to clients by the Message VPN. Available since 2.13.
 * @member {Number} controlTxMsgCount
 */
MsgVpnModel.prototype.controlTxMsgCount = undefined;

/**
 * @member {module:model/MsgVpnCounterModel} counter
 */
MsgVpnModel.prototype.counter = undefined;

/**
 * The amount of client data messages received from clients by the Message VPN, in bytes (B). Available since 2.13.
 * @member {Number} dataRxByteCount
 */
MsgVpnModel.prototype.dataRxByteCount = undefined;

/**
 * The number of client data messages received from clients by the Message VPN. Available since 2.13.
 * @member {Number} dataRxMsgCount
 */
MsgVpnModel.prototype.dataRxMsgCount = undefined;

/**
 * The amount of client data messages transmitted to clients by the Message VPN, in bytes (B). Available since 2.13.
 * @member {Number} dataTxByteCount
 */
MsgVpnModel.prototype.dataTxByteCount = undefined;

/**
 * The number of client data messages transmitted to clients by the Message VPN. Available since 2.13.
 * @member {Number} dataTxMsgCount
 */
MsgVpnModel.prototype.dataTxMsgCount = undefined;

/**
 * The number of messages discarded during reception by the Message VPN. Available since 2.13.
 * @member {Number} discardedRxMsgCount
 */
MsgVpnModel.prototype.discardedRxMsgCount = undefined;

/**
 * The number of messages discarded during transmission by the Message VPN. Available since 2.13.
 * @member {Number} discardedTxMsgCount
 */
MsgVpnModel.prototype.discardedTxMsgCount = undefined;

/**
 * Indicates whether managing of cache instances over the message bus is enabled in the Message VPN. Deprecated since 2.28. Distributed cache management is now redundancy aware and thus no longer requires administrative intervention for operational state.
 * @member {Boolean} distributedCacheManagementEnabled
 */
MsgVpnModel.prototype.distributedCacheManagementEnabled = undefined;

/**
 * Indicates whether Dynamic Message Routing (DMR) is enabled for the Message VPN.
 * @member {Boolean} dmrEnabled
 */
MsgVpnModel.prototype.dmrEnabled = undefined;

/**
 * Indicates whether the Message VPN is enabled.
 * @member {Boolean} enabled
 */
MsgVpnModel.prototype.enabled = undefined;

/**
 * @member {module:model/EventThresholdModel} eventConnectionCountThreshold
 */
MsgVpnModel.prototype.eventConnectionCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventEgressFlowCountThreshold
 */
MsgVpnModel.prototype.eventEgressFlowCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdByValueModel} eventEgressMsgRateThreshold
 */
MsgVpnModel.prototype.eventEgressMsgRateThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventEndpointCountThreshold
 */
MsgVpnModel.prototype.eventEndpointCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventIngressFlowCountThreshold
 */
MsgVpnModel.prototype.eventIngressFlowCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdByValueModel} eventIngressMsgRateThreshold
 */
MsgVpnModel.prototype.eventIngressMsgRateThreshold = undefined;

/**
 * Exceeding this message size in kilobytes (KB) triggers a corresponding Event in the Message VPN.
 * @member {Number} eventLargeMsgThreshold
 */
MsgVpnModel.prototype.eventLargeMsgThreshold = undefined;

/**
 * The value of the prefix applied to all published Events in the Message VPN.
 * @member {String} eventLogTag
 */
MsgVpnModel.prototype.eventLogTag = undefined;

/**
 * @member {module:model/EventThresholdModel} eventMsgSpoolUsageThreshold
 */
MsgVpnModel.prototype.eventMsgSpoolUsageThreshold = undefined;

/**
 * Indicates whether client Events are published in the Message VPN.
 * @member {Boolean} eventPublishClientEnabled
 */
MsgVpnModel.prototype.eventPublishClientEnabled = undefined;

/**
 * Indicates whether Message VPN Events are published in the Message VPN.
 * @member {Boolean} eventPublishMsgVpnEnabled
 */
MsgVpnModel.prototype.eventPublishMsgVpnEnabled = undefined;

/**
 * Allowed values for the <code>eventPublishSubscriptionMode</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnModel.EventPublishSubscriptionModeEnum = {
  /**
   * value: "off"
   * @const
   */
  off: "off",

  /**
   * value: "on-with-format-v1"
   * @const
   */
  onWithFormatV1: "on-with-format-v1",

  /**
   * value: "on-with-no-unsubscribe-events-on-disconnect-format-v1"
   * @const
   */
  onWithNoUnsubscribeEventsOnDisconnectFormatV1: "on-with-no-unsubscribe-events-on-disconnect-format-v1",

  /**
   * value: "on-with-format-v2"
   * @const
   */
  onWithFormatV2: "on-with-format-v2",

  /**
   * value: "on-with-no-unsubscribe-events-on-disconnect-format-v2"
   * @const
   */
  onWithNoUnsubscribeEventsOnDisconnectFormatV2: "on-with-no-unsubscribe-events-on-disconnect-format-v2"
};
/**
 * The mode of subscription Events published in the Message VPN. The allowed values and their meaning are:  <pre> \"off\" - Disable client level event message publishing. \"on-with-format-v1\" - Enable client level event message publishing with format v1. \"on-with-no-unsubscribe-events-on-disconnect-format-v1\" - As \"on-with-format-v1\", but unsubscribe events are not generated when a client disconnects. Unsubscribe events are still raised when a client explicitly unsubscribes from its subscriptions. \"on-with-format-v2\" - Enable client level event message publishing with format v2. \"on-with-no-unsubscribe-events-on-disconnect-format-v2\" - As \"on-with-format-v2\", but unsubscribe events are not generated when a client disconnects. Unsubscribe events are still raised when a client explicitly unsubscribes from its subscriptions. </pre> 
 * @member {module:model/MsgVpnModel.EventPublishSubscriptionModeEnum} eventPublishSubscriptionMode
 */
MsgVpnModel.prototype.eventPublishSubscriptionMode = undefined;

/**
 * Indicates whether Message VPN Events are published in the MQTT format.
 * @member {Boolean} eventPublishTopicFormatMqttEnabled
 */
MsgVpnModel.prototype.eventPublishTopicFormatMqttEnabled = undefined;

/**
 * Indicates whether Message VPN Events are published in the SMF format.
 * @member {Boolean} eventPublishTopicFormatSmfEnabled
 */
MsgVpnModel.prototype.eventPublishTopicFormatSmfEnabled = undefined;

/**
 * @member {module:model/EventThresholdModel} eventServiceAmqpConnectionCountThreshold
 */
MsgVpnModel.prototype.eventServiceAmqpConnectionCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventServiceMqttConnectionCountThreshold
 */
MsgVpnModel.prototype.eventServiceMqttConnectionCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventServiceRestIncomingConnectionCountThreshold
 */
MsgVpnModel.prototype.eventServiceRestIncomingConnectionCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventServiceSmfConnectionCountThreshold
 */
MsgVpnModel.prototype.eventServiceSmfConnectionCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventServiceWebConnectionCountThreshold
 */
MsgVpnModel.prototype.eventServiceWebConnectionCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventSubscriptionCountThreshold
 */
MsgVpnModel.prototype.eventSubscriptionCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventTransactedSessionCountThreshold
 */
MsgVpnModel.prototype.eventTransactedSessionCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventTransactionCountThreshold
 */
MsgVpnModel.prototype.eventTransactionCountThreshold = undefined;

/**
 * Indicates whether exports of subscriptions to other routers in the network over neighbor links is enabled in the Message VPN.
 * @member {Boolean} exportSubscriptionsEnabled
 */
MsgVpnModel.prototype.exportSubscriptionsEnabled = undefined;

/**
 * The reason for the Message VPN failure.
 * @member {String} failureReason
 */
MsgVpnModel.prototype.failureReason = undefined;

/**
 * Indicates whether the JNDI access for clients is enabled in the Message VPN.
 * @member {Boolean} jndiEnabled
 */
MsgVpnModel.prototype.jndiEnabled = undefined;

/**
 * The number of login request messages received by the Message VPN. Available since 2.13.
 * @member {Number} loginRxMsgCount
 */
MsgVpnModel.prototype.loginRxMsgCount = undefined;

/**
 * The number of login response messages transmitted by the Message VPN. Available since 2.13.
 * @member {Number} loginTxMsgCount
 */
MsgVpnModel.prototype.loginTxMsgCount = undefined;

/**
 * The maximum number of client connections to the Message VPN.
 * @member {Number} maxConnectionCount
 */
MsgVpnModel.prototype.maxConnectionCount = undefined;

/**
 * The effective maximum number of Queues and Topic Endpoints allowed in the Message VPN.
 * @member {Number} maxEffectiveEndpointCount
 */
MsgVpnModel.prototype.maxEffectiveEndpointCount = undefined;

/**
 * The effective maximum number of receive flows allowed in the Message VPN.
 * @member {Number} maxEffectiveRxFlowCount
 */
MsgVpnModel.prototype.maxEffectiveRxFlowCount = undefined;

/**
 * The effective maximum number of subscriptions allowed in the Message VPN.
 * @member {Number} maxEffectiveSubscriptionCount
 */
MsgVpnModel.prototype.maxEffectiveSubscriptionCount = undefined;

/**
 * The effective maximum number of transacted sessions allowed in the Message VPN.
 * @member {Number} maxEffectiveTransactedSessionCount
 */
MsgVpnModel.prototype.maxEffectiveTransactedSessionCount = undefined;

/**
 * The effective maximum number of transactions allowed in the Message VPN.
 * @member {Number} maxEffectiveTransactionCount
 */
MsgVpnModel.prototype.maxEffectiveTransactionCount = undefined;

/**
 * The effective maximum number of transmit flows allowed in the Message VPN.
 * @member {Number} maxEffectiveTxFlowCount
 */
MsgVpnModel.prototype.maxEffectiveTxFlowCount = undefined;

/**
 * The maximum number of transmit flows that can be created in the Message VPN.
 * @member {Number} maxEgressFlowCount
 */
MsgVpnModel.prototype.maxEgressFlowCount = undefined;

/**
 * The maximum number of Queues and Topic Endpoints that can be created in the Message VPN.
 * @member {Number} maxEndpointCount
 */
MsgVpnModel.prototype.maxEndpointCount = undefined;

/**
 * The maximum number of receive flows that can be created in the Message VPN.
 * @member {Number} maxIngressFlowCount
 */
MsgVpnModel.prototype.maxIngressFlowCount = undefined;

/**
 * The maximum message spool usage by the Message VPN, in megabytes.
 * @member {Number} maxMsgSpoolUsage
 */
MsgVpnModel.prototype.maxMsgSpoolUsage = undefined;

/**
 * The maximum number of local client subscriptions that can be added to the Message VPN. This limit is not enforced when a subscription is added using a management interface, such as CLI or SEMP.
 * @member {Number} maxSubscriptionCount
 */
MsgVpnModel.prototype.maxSubscriptionCount = undefined;

/**
 * The maximum number of transacted sessions that can be created in the Message VPN.
 * @member {Number} maxTransactedSessionCount
 */
MsgVpnModel.prototype.maxTransactedSessionCount = undefined;

/**
 * The maximum number of transactions that can be created in the Message VPN.
 * @member {Number} maxTransactionCount
 */
MsgVpnModel.prototype.maxTransactionCount = undefined;

/**
 * The maximum total memory usage of the MQTT Retain feature for this Message VPN, in MB. If the maximum memory is reached, any arriving retain messages that require more memory are discarded. A value of -1 indicates that the memory is bounded only by the global max memory limit. A value of 0 prevents MQTT Retain from becoming operational.
 * @member {Number} mqttRetainMaxMemory
 */
MsgVpnModel.prototype.mqttRetainMaxMemory = undefined;

/**
 * The number of message replays that are currently active in the Message VPN.
 * @member {Number} msgReplayActiveCount
 */
MsgVpnModel.prototype.msgReplayActiveCount = undefined;

/**
 * The number of message replays that are currently failed in the Message VPN.
 * @member {Number} msgReplayFailedCount
 */
MsgVpnModel.prototype.msgReplayFailedCount = undefined;

/**
 * The number of message replays that are currently initializing in the Message VPN.
 * @member {Number} msgReplayInitializingCount
 */
MsgVpnModel.prototype.msgReplayInitializingCount = undefined;

/**
 * The number of message replays that are pending complete in the Message VPN.
 * @member {Number} msgReplayPendingCompleteCount
 */
MsgVpnModel.prototype.msgReplayPendingCompleteCount = undefined;

/**
 * The current number of messages spooled (persisted in the Message Spool) in the Message VPN. Available since 2.14.
 * @member {Number} msgSpoolMsgCount
 */
MsgVpnModel.prototype.msgSpoolMsgCount = undefined;

/**
 * The number of guaranteed messages received by the Message VPN. Available since 2.13.
 * @member {Number} msgSpoolRxMsgCount
 */
MsgVpnModel.prototype.msgSpoolRxMsgCount = undefined;

/**
 * The number of guaranteed messages transmitted by the Message VPN. One message to multiple clients is counted as one message. Available since 2.13.
 * @member {Number} msgSpoolTxMsgCount
 */
MsgVpnModel.prototype.msgSpoolTxMsgCount = undefined;

/**
 * The current message spool usage by the Message VPN, in bytes (B).
 * @member {Number} msgSpoolUsage
 */
MsgVpnModel.prototype.msgSpoolUsage = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnModel.prototype.msgVpnName = undefined;

/**
 * @member {module:model/MsgVpnRateModel} rate
 */
MsgVpnModel.prototype.rate = undefined;

/**
 * The acknowledgment (ACK) propagation interval for the replication Bridge, in number of replicated messages. Available since 2.12.
 * @member {Number} replicationAckPropagationIntervalMsgCount
 */
MsgVpnModel.prototype.replicationAckPropagationIntervalMsgCount = undefined;

/**
 * The number of acknowledgment messages propagated to the replication standby remote Message VPN. Available since 2.12.
 * @member {Number} replicationActiveAckPropTxMsgCount
 */
MsgVpnModel.prototype.replicationActiveAckPropTxMsgCount = undefined;

/**
 * The number of async messages queued to the replication standby remote Message VPN. Available since 2.12.
 * @member {Number} replicationActiveAsyncQueuedMsgCount
 */
MsgVpnModel.prototype.replicationActiveAsyncQueuedMsgCount = undefined;

/**
 * The number of messages consumed in the replication active local Message VPN. Available since 2.12.
 * @member {Number} replicationActiveLocallyConsumedMsgCount
 */
MsgVpnModel.prototype.replicationActiveLocallyConsumedMsgCount = undefined;

/**
 * The peak amount of time in seconds the message flow has been congested to the replication standby remote Message VPN. Available since 2.12.
 * @member {Number} replicationActiveMateFlowCongestedPeakTime
 */
MsgVpnModel.prototype.replicationActiveMateFlowCongestedPeakTime = undefined;

/**
 * The peak amount of time in seconds the message flow has not been congested to the replication standby remote Message VPN. Available since 2.12.
 * @member {Number} replicationActiveMateFlowNotCongestedPeakTime
 */
MsgVpnModel.prototype.replicationActiveMateFlowNotCongestedPeakTime = undefined;

/**
 * The number of promoted messages queued to the replication standby remote Message VPN. Available since 2.12.
 * @member {Number} replicationActivePromotedQueuedMsgCount
 */
MsgVpnModel.prototype.replicationActivePromotedQueuedMsgCount = undefined;

/**
 * The number of reconcile request messages received from the replication standby remote Message VPN. Available since 2.12.
 * @member {Number} replicationActiveReconcileRequestRxMsgCount
 */
MsgVpnModel.prototype.replicationActiveReconcileRequestRxMsgCount = undefined;

/**
 * The peak amount of time in seconds sync replication has been eligible to the replication standby remote Message VPN. Available since 2.12.
 * @member {Number} replicationActiveSyncEligiblePeakTime
 */
MsgVpnModel.prototype.replicationActiveSyncEligiblePeakTime = undefined;

/**
 * The peak amount of time in seconds sync replication has been ineligible to the replication standby remote Message VPN. Available since 2.12.
 * @member {Number} replicationActiveSyncIneligiblePeakTime
 */
MsgVpnModel.prototype.replicationActiveSyncIneligiblePeakTime = undefined;

/**
 * The number of sync messages queued as async to the replication standby remote Message VPN. Available since 2.12.
 * @member {Number} replicationActiveSyncQueuedAsAsyncMsgCount
 */
MsgVpnModel.prototype.replicationActiveSyncQueuedAsAsyncMsgCount = undefined;

/**
 * The number of sync messages queued to the replication standby remote Message VPN. Available since 2.12.
 * @member {Number} replicationActiveSyncQueuedMsgCount
 */
MsgVpnModel.prototype.replicationActiveSyncQueuedMsgCount = undefined;

/**
 * The number of sync replication ineligible transitions to the replication standby remote Message VPN. Available since 2.12.
 * @member {Number} replicationActiveTransitionToSyncIneligibleCount
 */
MsgVpnModel.prototype.replicationActiveTransitionToSyncIneligibleCount = undefined;

/**
 * The Client Username the replication Bridge uses to login to the remote Message VPN. Available since 2.12.
 * @member {String} replicationBridgeAuthenticationBasicClientUsername
 */
MsgVpnModel.prototype.replicationBridgeAuthenticationBasicClientUsername = undefined;

/**
 * Allowed values for the <code>replicationBridgeAuthenticationScheme</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnModel.ReplicationBridgeAuthenticationSchemeEnum = {
  /**
   * value: "basic"
   * @const
   */
  basic: "basic",

  /**
   * value: "client-certificate"
   * @const
   */
  clientCertificate: "client-certificate"
};
/**
 * The authentication scheme for the replication Bridge in the Message VPN. The allowed values and their meaning are:  <pre> \"basic\" - Basic Authentication Scheme (via username and password). \"client-certificate\" - Client Certificate Authentication Scheme (via certificate file or content). </pre>  Available since 2.12.
 * @member {module:model/MsgVpnModel.ReplicationBridgeAuthenticationSchemeEnum} replicationBridgeAuthenticationScheme
 */
MsgVpnModel.prototype.replicationBridgeAuthenticationScheme = undefined;

/**
 * Indicates whether the local replication Bridge is bound to the Queue in the remote Message VPN. Available since 2.12.
 * @member {Boolean} replicationBridgeBoundToQueue
 */
MsgVpnModel.prototype.replicationBridgeBoundToQueue = undefined;

/**
 * Indicates whether compression is used for the replication Bridge. Available since 2.12.
 * @member {Boolean} replicationBridgeCompressedDataEnabled
 */
MsgVpnModel.prototype.replicationBridgeCompressedDataEnabled = undefined;

/**
 * The size of the window used for guaranteed messages published to the replication Bridge, in messages. Available since 2.12.
 * @member {Number} replicationBridgeEgressFlowWindowSize
 */
MsgVpnModel.prototype.replicationBridgeEgressFlowWindowSize = undefined;

/**
 * The name of the local replication Bridge in the Message VPN. Available since 2.12.
 * @member {String} replicationBridgeName
 */
MsgVpnModel.prototype.replicationBridgeName = undefined;

/**
 * The number of seconds that must pass before retrying the replication Bridge connection. Available since 2.12.
 * @member {Number} replicationBridgeRetryDelay
 */
MsgVpnModel.prototype.replicationBridgeRetryDelay = undefined;

/**
 * Indicates whether encryption (TLS) is enabled for the replication Bridge connection. Available since 2.12.
 * @member {Boolean} replicationBridgeTlsEnabled
 */
MsgVpnModel.prototype.replicationBridgeTlsEnabled = undefined;

/**
 * The Client Profile for the unidirectional replication Bridge in the Message VPN. It is used only for the TCP parameters. Available since 2.12.
 * @member {String} replicationBridgeUnidirectionalClientProfileName
 */
MsgVpnModel.prototype.replicationBridgeUnidirectionalClientProfileName = undefined;

/**
 * Indicates whether the local replication Bridge is operationally up in the Message VPN. Available since 2.12.
 * @member {Boolean} replicationBridgeUp
 */
MsgVpnModel.prototype.replicationBridgeUp = undefined;

/**
 * Indicates whether replication is enabled for the Message VPN. Available since 2.12.
 * @member {Boolean} replicationEnabled
 */
MsgVpnModel.prototype.replicationEnabled = undefined;

/**
 * Indicates whether the remote replication Bridge is bound to the Queue in the Message VPN. Available since 2.12.
 * @member {Boolean} replicationQueueBound
 */
MsgVpnModel.prototype.replicationQueueBound = undefined;

/**
 * The maximum message spool usage by the replication Bridge local Queue (quota), in megabytes. Available since 2.12.
 * @member {Number} replicationQueueMaxMsgSpoolUsage
 */
MsgVpnModel.prototype.replicationQueueMaxMsgSpoolUsage = undefined;

/**
 * Indicates whether messages discarded on this replication Bridge Queue are rejected back to the sender. Available since 2.12.
 * @member {Boolean} replicationQueueRejectMsgToSenderOnDiscardEnabled
 */
MsgVpnModel.prototype.replicationQueueRejectMsgToSenderOnDiscardEnabled = undefined;

/**
 * Indicates whether guaranteed messages published to synchronously replicated Topics are rejected back to the sender when synchronous replication becomes ineligible. Available since 2.12.
 * @member {Boolean} replicationRejectMsgWhenSyncIneligibleEnabled
 */
MsgVpnModel.prototype.replicationRejectMsgWhenSyncIneligibleEnabled = undefined;

/**
 * The name of the remote replication Bridge in the Message VPN. Available since 2.12.
 * @member {String} replicationRemoteBridgeName
 */
MsgVpnModel.prototype.replicationRemoteBridgeName = undefined;

/**
 * Indicates whether the remote replication Bridge is operationally up in the Message VPN. Available since 2.12.
 * @member {Boolean} replicationRemoteBridgeUp
 */
MsgVpnModel.prototype.replicationRemoteBridgeUp = undefined;

/**
 * Allowed values for the <code>replicationRole</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnModel.ReplicationRoleEnum = {
  /**
   * value: "active"
   * @const
   */
  active: "active",

  /**
   * value: "standby"
   * @const
   */
  standby: "standby"
};
/**
 * The replication role for the Message VPN. The allowed values and their meaning are:  <pre> \"active\" - Assume the Active role in replication for the Message VPN. \"standby\" - Assume the Standby role in replication for the Message VPN. </pre>  Available since 2.12.
 * @member {module:model/MsgVpnModel.ReplicationRoleEnum} replicationRole
 */
MsgVpnModel.prototype.replicationRole = undefined;

/**
 * The number of acknowledgment messages received out of sequence from the replication active remote Message VPN. Available since 2.12.
 * @member {Number} replicationStandbyAckPropOutOfSeqRxMsgCount
 */
MsgVpnModel.prototype.replicationStandbyAckPropOutOfSeqRxMsgCount = undefined;

/**
 * The number of acknowledgment messages received from the replication active remote Message VPN. Available since 2.12.
 * @member {Number} replicationStandbyAckPropRxMsgCount
 */
MsgVpnModel.prototype.replicationStandbyAckPropRxMsgCount = undefined;

/**
 * The number of reconcile request messages transmitted to the replication active remote Message VPN. Available since 2.12.
 * @member {Number} replicationStandbyReconcileRequestTxMsgCount
 */
MsgVpnModel.prototype.replicationStandbyReconcileRequestTxMsgCount = undefined;

/**
 * The number of messages received from the replication active remote Message VPN. Available since 2.12.
 * @member {Number} replicationStandbyRxMsgCount
 */
MsgVpnModel.prototype.replicationStandbyRxMsgCount = undefined;

/**
 * The number of transaction requests received from the replication active remote Message VPN. Available since 2.12.
 * @member {Number} replicationStandbyTransactionRequestCount
 */
MsgVpnModel.prototype.replicationStandbyTransactionRequestCount = undefined;

/**
 * The number of transaction requests received from the replication active remote Message VPN that failed. Available since 2.12.
 * @member {Number} replicationStandbyTransactionRequestFailureCount
 */
MsgVpnModel.prototype.replicationStandbyTransactionRequestFailureCount = undefined;

/**
 * The number of transaction requests received from the replication active remote Message VPN that succeeded. Available since 2.12.
 * @member {Number} replicationStandbyTransactionRequestSuccessCount
 */
MsgVpnModel.prototype.replicationStandbyTransactionRequestSuccessCount = undefined;

/**
 * Indicates whether sync replication is eligible in the Message VPN. Available since 2.12.
 * @member {Boolean} replicationSyncEligible
 */
MsgVpnModel.prototype.replicationSyncEligible = undefined;

/**
 * Allowed values for the <code>replicationTransactionMode</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnModel.ReplicationTransactionModeEnum = {
  /**
   * value: "sync"
   * @const
   */
  sync: "sync",

  /**
   * value: "async"
   * @const
   */
  async: "async"
};
/**
 * Indicates whether synchronous or asynchronous replication mode is used for all transactions within the Message VPN. The allowed values and their meaning are:  <pre> \"sync\" - Messages are acknowledged when replicated (spooled remotely). \"async\" - Messages are acknowledged when pending replication (spooled locally). </pre>  Available since 2.12.
 * @member {module:model/MsgVpnModel.ReplicationTransactionModeEnum} replicationTransactionMode
 */
MsgVpnModel.prototype.replicationTransactionMode = undefined;

/**
 * Indicates whether the Common Name (CN) in the server certificate from the remote REST Consumer is validated. Deprecated since 2.17. Common Name validation has been replaced by Server Certificate Name validation.
 * @member {Boolean} restTlsServerCertEnforceTrustedCommonNameEnabled
 */
MsgVpnModel.prototype.restTlsServerCertEnforceTrustedCommonNameEnabled = undefined;

/**
 * The maximum depth for a REST Consumer server certificate chain. The depth of a chain is defined as the number of signing CA certificates that are present in the chain back to a trusted self-signed root CA certificate.
 * @member {Number} restTlsServerCertMaxChainDepth
 */
MsgVpnModel.prototype.restTlsServerCertMaxChainDepth = undefined;

/**
 * Indicates whether the \"Not Before\" and \"Not After\" validity dates in the REST Consumer server certificate are checked.
 * @member {Boolean} restTlsServerCertValidateDateEnabled
 */
MsgVpnModel.prototype.restTlsServerCertValidateDateEnabled = undefined;

/**
 * Enable or disable the standard TLS authentication mechanism of verifying the name used to connect to the remote REST Consumer. If enabled, the name used to connect to the remote REST Consumer is checked against the names specified in the certificate returned by the remote broker. Legacy Common Name validation is not performed if Server Certificate Name Validation is enabled, even if Common Name validation is also enabled. Available since 2.17.
 * @member {Boolean} restTlsServerCertValidateNameEnabled
 */
MsgVpnModel.prototype.restTlsServerCertValidateNameEnabled = undefined;

/**
 * The amount of messages received from clients by the Message VPN, in bytes (B). Available since 2.12.
 * @member {Number} rxByteCount
 */
MsgVpnModel.prototype.rxByteCount = undefined;

/**
 * The current message rate received by the Message VPN, in bytes per second (B/sec). Available since 2.13.
 * @member {Number} rxByteRate
 */
MsgVpnModel.prototype.rxByteRate = undefined;

/**
 * The amount of compressed messages received by the Message VPN, in bytes (B). Available since 2.12.
 * @member {Number} rxCompressedByteCount
 */
MsgVpnModel.prototype.rxCompressedByteCount = undefined;

/**
 * The current compressed message rate received by the Message VPN, in bytes per second (B/sec). Available since 2.12.
 * @member {Number} rxCompressedByteRate
 */
MsgVpnModel.prototype.rxCompressedByteRate = undefined;

/**
 * The compression ratio for messages received by the message VPN. Available since 2.12.
 * @member {String} rxCompressionRatio
 */
MsgVpnModel.prototype.rxCompressionRatio = undefined;

/**
 * The number of messages received from clients by the Message VPN. Available since 2.12.
 * @member {Number} rxMsgCount
 */
MsgVpnModel.prototype.rxMsgCount = undefined;

/**
 * The current message rate received by the Message VPN, in messages per second (msg/sec). Available since 2.13.
 * @member {Number} rxMsgRate
 */
MsgVpnModel.prototype.rxMsgRate = undefined;

/**
 * The amount of uncompressed messages received by the Message VPN, in bytes (B). Available since 2.12.
 * @member {Number} rxUncompressedByteCount
 */
MsgVpnModel.prototype.rxUncompressedByteCount = undefined;

/**
 * The current uncompressed message rate received by the Message VPN, in bytes per second (B/sec). Available since 2.12.
 * @member {Number} rxUncompressedByteRate
 */
MsgVpnModel.prototype.rxUncompressedByteRate = undefined;

/**
 * Indicates whether the \"admin\" level \"client\" commands are enabled for SEMP over the message bus in the Message VPN.
 * @member {Boolean} sempOverMsgBusAdminClientEnabled
 */
MsgVpnModel.prototype.sempOverMsgBusAdminClientEnabled = undefined;

/**
 * Indicates whether the \"admin\" level \"Distributed Cache\" commands are enabled for SEMP over the message bus in the Message VPN.
 * @member {Boolean} sempOverMsgBusAdminDistributedCacheEnabled
 */
MsgVpnModel.prototype.sempOverMsgBusAdminDistributedCacheEnabled = undefined;

/**
 * Indicates whether the \"admin\" level commands are enabled for SEMP over the message bus in the Message VPN.
 * @member {Boolean} sempOverMsgBusAdminEnabled
 */
MsgVpnModel.prototype.sempOverMsgBusAdminEnabled = undefined;

/**
 * Indicates whether SEMP over the message bus is enabled in the Message VPN.
 * @member {Boolean} sempOverMsgBusEnabled
 */
MsgVpnModel.prototype.sempOverMsgBusEnabled = undefined;

/**
 * Indicates whether the \"show\" level commands are enabled for SEMP over the message bus in the Message VPN.
 * @member {Boolean} sempOverMsgBusShowEnabled
 */
MsgVpnModel.prototype.sempOverMsgBusShowEnabled = undefined;

/**
 * The maximum number of AMQP client connections that can be simultaneously connected to the Message VPN. This value may be higher than supported by the platform.
 * @member {Number} serviceAmqpMaxConnectionCount
 */
MsgVpnModel.prototype.serviceAmqpMaxConnectionCount = undefined;

/**
 * Indicates whether the AMQP Service is compressed in the Message VPN.
 * @member {Boolean} serviceAmqpPlainTextCompressed
 */
MsgVpnModel.prototype.serviceAmqpPlainTextCompressed = undefined;

/**
 * Indicates whether the AMQP Service is enabled in the Message VPN.
 * @member {Boolean} serviceAmqpPlainTextEnabled
 */
MsgVpnModel.prototype.serviceAmqpPlainTextEnabled = undefined;

/**
 * The reason for the AMQP Service failure in the Message VPN.
 * @member {String} serviceAmqpPlainTextFailureReason
 */
MsgVpnModel.prototype.serviceAmqpPlainTextFailureReason = undefined;

/**
 * The port number for plain-text AMQP clients that connect to the Message VPN. The port must be unique across the message backbone. A value of 0 means that the listen-port is unassigned and cannot be enabled.
 * @member {Number} serviceAmqpPlainTextListenPort
 */
MsgVpnModel.prototype.serviceAmqpPlainTextListenPort = undefined;

/**
 * Indicates whether the AMQP Service is operationally up in the Message VPN.
 * @member {Boolean} serviceAmqpPlainTextUp
 */
MsgVpnModel.prototype.serviceAmqpPlainTextUp = undefined;

/**
 * Indicates whether the TLS related AMQP Service is compressed in the Message VPN.
 * @member {Boolean} serviceAmqpTlsCompressed
 */
MsgVpnModel.prototype.serviceAmqpTlsCompressed = undefined;

/**
 * Indicates whether encryption (TLS) is enabled for AMQP clients in the Message VPN.
 * @member {Boolean} serviceAmqpTlsEnabled
 */
MsgVpnModel.prototype.serviceAmqpTlsEnabled = undefined;

/**
 * The reason for the TLS related AMQP Service failure in the Message VPN.
 * @member {String} serviceAmqpTlsFailureReason
 */
MsgVpnModel.prototype.serviceAmqpTlsFailureReason = undefined;

/**
 * The port number for AMQP clients that connect to the Message VPN over TLS. The port must be unique across the message backbone. A value of 0 means that the listen-port is unassigned and cannot be enabled.
 * @member {Number} serviceAmqpTlsListenPort
 */
MsgVpnModel.prototype.serviceAmqpTlsListenPort = undefined;

/**
 * Indicates whether the TLS related AMQP Service is operationally up in the Message VPN.
 * @member {Boolean} serviceAmqpTlsUp
 */
MsgVpnModel.prototype.serviceAmqpTlsUp = undefined;

/**
 * Allowed values for the <code>serviceMqttAuthenticationClientCertRequest</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnModel.ServiceMqttAuthenticationClientCertRequestEnum = {
  /**
   * value: "always"
   * @const
   */
  always: "always",

  /**
   * value: "never"
   * @const
   */
  never: "never",

  /**
   * value: "when-enabled-in-message-vpn"
   * @const
   */
  whenEnabledInMessageVpn: "when-enabled-in-message-vpn"
};
/**
 * Determines when to request a client certificate from an incoming MQTT client connecting via a TLS port. The allowed values and their meaning are:  <pre> \"always\" - Always ask for a client certificate regardless of the \"message-vpn > authentication > client-certificate > shutdown\" configuration. \"never\" - Never ask for a client certificate regardless of the \"message-vpn > authentication > client-certificate > shutdown\" configuration. \"when-enabled-in-message-vpn\" - Only ask for a client-certificate if client certificate authentication is enabled under \"message-vpn >  authentication > client-certificate > shutdown\". </pre>  Available since 2.21.
 * @member {module:model/MsgVpnModel.ServiceMqttAuthenticationClientCertRequestEnum} serviceMqttAuthenticationClientCertRequest
 */
MsgVpnModel.prototype.serviceMqttAuthenticationClientCertRequest = undefined;

/**
 * The maximum number of MQTT client connections that can be simultaneously connected to the Message VPN.
 * @member {Number} serviceMqttMaxConnectionCount
 */
MsgVpnModel.prototype.serviceMqttMaxConnectionCount = undefined;

/**
 * Indicates whether the MQTT Service is compressed in the Message VPN.
 * @member {Boolean} serviceMqttPlainTextCompressed
 */
MsgVpnModel.prototype.serviceMqttPlainTextCompressed = undefined;

/**
 * Indicates whether the MQTT Service is enabled in the Message VPN.
 * @member {Boolean} serviceMqttPlainTextEnabled
 */
MsgVpnModel.prototype.serviceMqttPlainTextEnabled = undefined;

/**
 * The reason for the MQTT Service failure in the Message VPN.
 * @member {String} serviceMqttPlainTextFailureReason
 */
MsgVpnModel.prototype.serviceMqttPlainTextFailureReason = undefined;

/**
 * The port number for plain-text MQTT clients that connect to the Message VPN. The port must be unique across the message backbone. A value of 0 means that the listen-port is unassigned and cannot be enabled.
 * @member {Number} serviceMqttPlainTextListenPort
 */
MsgVpnModel.prototype.serviceMqttPlainTextListenPort = undefined;

/**
 * Indicates whether the MQTT Service is operationally up in the Message VPN.
 * @member {Boolean} serviceMqttPlainTextUp
 */
MsgVpnModel.prototype.serviceMqttPlainTextUp = undefined;

/**
 * Indicates whether the TLS related MQTT Service is compressed in the Message VPN.
 * @member {Boolean} serviceMqttTlsCompressed
 */
MsgVpnModel.prototype.serviceMqttTlsCompressed = undefined;

/**
 * Indicates whether encryption (TLS) is enabled for MQTT clients in the Message VPN.
 * @member {Boolean} serviceMqttTlsEnabled
 */
MsgVpnModel.prototype.serviceMqttTlsEnabled = undefined;

/**
 * The reason for the TLS related MQTT Service failure in the Message VPN.
 * @member {String} serviceMqttTlsFailureReason
 */
MsgVpnModel.prototype.serviceMqttTlsFailureReason = undefined;

/**
 * The port number for MQTT clients that connect to the Message VPN over TLS. The port must be unique across the message backbone. A value of 0 means that the listen-port is unassigned and cannot be enabled.
 * @member {Number} serviceMqttTlsListenPort
 */
MsgVpnModel.prototype.serviceMqttTlsListenPort = undefined;

/**
 * Indicates whether the TLS related MQTT Service is operationally up in the Message VPN.
 * @member {Boolean} serviceMqttTlsUp
 */
MsgVpnModel.prototype.serviceMqttTlsUp = undefined;

/**
 * Indicates whether the TLS related Web transport MQTT Service is compressed in the Message VPN.
 * @member {Boolean} serviceMqttTlsWebSocketCompressed
 */
MsgVpnModel.prototype.serviceMqttTlsWebSocketCompressed = undefined;

/**
 * Indicates whether encryption (TLS) is enabled for MQTT Web clients in the Message VPN.
 * @member {Boolean} serviceMqttTlsWebSocketEnabled
 */
MsgVpnModel.prototype.serviceMqttTlsWebSocketEnabled = undefined;

/**
 * The reason for the TLS related Web transport MQTT Service failure in the Message VPN.
 * @member {String} serviceMqttTlsWebSocketFailureReason
 */
MsgVpnModel.prototype.serviceMqttTlsWebSocketFailureReason = undefined;

/**
 * The port number for MQTT clients that connect to the Message VPN using WebSocket over TLS. The port must be unique across the message backbone. A value of 0 means that the listen-port is unassigned and cannot be enabled.
 * @member {Number} serviceMqttTlsWebSocketListenPort
 */
MsgVpnModel.prototype.serviceMqttTlsWebSocketListenPort = undefined;

/**
 * Indicates whether the TLS related Web transport MQTT Service is operationally up in the Message VPN.
 * @member {Boolean} serviceMqttTlsWebSocketUp
 */
MsgVpnModel.prototype.serviceMqttTlsWebSocketUp = undefined;

/**
 * Indicates whether the Web transport related MQTT Service is compressed in the Message VPN.
 * @member {Boolean} serviceMqttWebSocketCompressed
 */
MsgVpnModel.prototype.serviceMqttWebSocketCompressed = undefined;

/**
 * Indicates whether the Web transport for the SMF Service is enabled in the Message VPN.
 * @member {Boolean} serviceMqttWebSocketEnabled
 */
MsgVpnModel.prototype.serviceMqttWebSocketEnabled = undefined;

/**
 * The reason for the Web transport related MQTT Service failure in the Message VPN.
 * @member {String} serviceMqttWebSocketFailureReason
 */
MsgVpnModel.prototype.serviceMqttWebSocketFailureReason = undefined;

/**
 * The port number for plain-text MQTT clients that connect to the Message VPN using WebSocket. The port must be unique across the message backbone. A value of 0 means that the listen-port is unassigned and cannot be enabled.
 * @member {Number} serviceMqttWebSocketListenPort
 */
MsgVpnModel.prototype.serviceMqttWebSocketListenPort = undefined;

/**
 * Indicates whether the Web transport related MQTT Service is operationally up in the Message VPN.
 * @member {Boolean} serviceMqttWebSocketUp
 */
MsgVpnModel.prototype.serviceMqttWebSocketUp = undefined;

/**
 * Allowed values for the <code>serviceRestIncomingAuthenticationClientCertRequest</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnModel.ServiceRestIncomingAuthenticationClientCertRequestEnum = {
  /**
   * value: "always"
   * @const
   */
  always: "always",

  /**
   * value: "never"
   * @const
   */
  never: "never",

  /**
   * value: "when-enabled-in-message-vpn"
   * @const
   */
  whenEnabledInMessageVpn: "when-enabled-in-message-vpn"
};
/**
 * Determines when to request a client certificate from an incoming REST Producer connecting via a TLS port. The allowed values and their meaning are:  <pre> \"always\" - Always ask for a client certificate regardless of the \"message-vpn > authentication > client-certificate > shutdown\" configuration. \"never\" - Never ask for a client certificate regardless of the \"message-vpn > authentication > client-certificate > shutdown\" configuration. \"when-enabled-in-message-vpn\" - Only ask for a client-certificate if client certificate authentication is enabled under \"message-vpn >  authentication > client-certificate > shutdown\". </pre>  Available since 2.21.
 * @member {module:model/MsgVpnModel.ServiceRestIncomingAuthenticationClientCertRequestEnum} serviceRestIncomingAuthenticationClientCertRequest
 */
MsgVpnModel.prototype.serviceRestIncomingAuthenticationClientCertRequest = undefined;

/**
 * Allowed values for the <code>serviceRestIncomingAuthorizationHeaderHandling</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnModel.ServiceRestIncomingAuthorizationHeaderHandlingEnum = {
  /**
   * value: "drop"
   * @const
   */
  drop: "drop",

  /**
   * value: "forward"
   * @const
   */
  forward: "forward",

  /**
   * value: "legacy"
   * @const
   */
  legacy: "legacy"
};
/**
 * The handling of Authorization headers for incoming REST connections. The allowed values and their meaning are:  <pre> \"drop\" - Do not attach the Authorization header to the message as a user property. This configuration is most secure. \"forward\" - Forward the Authorization header, attaching it to the message as a user property in the same way as other headers. For best security, use the drop setting. \"legacy\" - If the Authorization header was used for authentication to the broker, do not attach it to the message. If the Authorization header was not used for authentication to the broker, attach it to the message as a user property in the same way as other headers. For best security, use the drop setting. </pre>  Available since 2.19.
 * @member {module:model/MsgVpnModel.ServiceRestIncomingAuthorizationHeaderHandlingEnum} serviceRestIncomingAuthorizationHeaderHandling
 */
MsgVpnModel.prototype.serviceRestIncomingAuthorizationHeaderHandling = undefined;

/**
 * The maximum number of REST incoming client connections that can be simultaneously connected to the Message VPN. This value may be higher than supported by the platform.
 * @member {Number} serviceRestIncomingMaxConnectionCount
 */
MsgVpnModel.prototype.serviceRestIncomingMaxConnectionCount = undefined;

/**
 * Indicates whether the incoming REST Service is compressed in the Message VPN.
 * @member {Boolean} serviceRestIncomingPlainTextCompressed
 */
MsgVpnModel.prototype.serviceRestIncomingPlainTextCompressed = undefined;

/**
 * Indicates whether the REST Service is enabled in the Message VPN for incoming clients.
 * @member {Boolean} serviceRestIncomingPlainTextEnabled
 */
MsgVpnModel.prototype.serviceRestIncomingPlainTextEnabled = undefined;

/**
 * The reason for the incoming REST Service failure in the Message VPN.
 * @member {String} serviceRestIncomingPlainTextFailureReason
 */
MsgVpnModel.prototype.serviceRestIncomingPlainTextFailureReason = undefined;

/**
 * The port number for incoming plain-text REST clients that connect to the Message VPN. The port must be unique across the message backbone. A value of 0 means that the listen-port is unassigned and cannot be enabled.
 * @member {Number} serviceRestIncomingPlainTextListenPort
 */
MsgVpnModel.prototype.serviceRestIncomingPlainTextListenPort = undefined;

/**
 * Indicates whether the incoming REST Service is operationally up in the Message VPN.
 * @member {Boolean} serviceRestIncomingPlainTextUp
 */
MsgVpnModel.prototype.serviceRestIncomingPlainTextUp = undefined;

/**
 * Indicates whether the TLS related incoming REST Service is compressed in the Message VPN.
 * @member {Boolean} serviceRestIncomingTlsCompressed
 */
MsgVpnModel.prototype.serviceRestIncomingTlsCompressed = undefined;

/**
 * Indicates whether encryption (TLS) is enabled for incoming REST clients in the Message VPN.
 * @member {Boolean} serviceRestIncomingTlsEnabled
 */
MsgVpnModel.prototype.serviceRestIncomingTlsEnabled = undefined;

/**
 * The reason for the TLS related incoming REST Service failure in the Message VPN.
 * @member {String} serviceRestIncomingTlsFailureReason
 */
MsgVpnModel.prototype.serviceRestIncomingTlsFailureReason = undefined;

/**
 * The port number for incoming REST clients that connect to the Message VPN over TLS. The port must be unique across the message backbone. A value of 0 means that the listen-port is unassigned and cannot be enabled.
 * @member {Number} serviceRestIncomingTlsListenPort
 */
MsgVpnModel.prototype.serviceRestIncomingTlsListenPort = undefined;

/**
 * Indicates whether the TLS related incoming REST Service is operationally up in the Message VPN.
 * @member {Boolean} serviceRestIncomingTlsUp
 */
MsgVpnModel.prototype.serviceRestIncomingTlsUp = undefined;

/**
 * Allowed values for the <code>serviceRestMode</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnModel.ServiceRestModeEnum = {
  /**
   * value: "gateway"
   * @const
   */
  gateway: "gateway",

  /**
   * value: "messaging"
   * @const
   */
  messaging: "messaging"
};
/**
 * The REST service mode for incoming REST clients that connect to the Message VPN. The allowed values and their meaning are:  <pre> \"gateway\" - Act as a message gateway through which REST messages are propagated. \"messaging\" - Act as a message broker on which REST messages are queued. </pre> 
 * @member {module:model/MsgVpnModel.ServiceRestModeEnum} serviceRestMode
 */
MsgVpnModel.prototype.serviceRestMode = undefined;

/**
 * The maximum number of REST Consumer (outgoing) client connections that can be simultaneously connected to the Message VPN.
 * @member {Number} serviceRestOutgoingMaxConnectionCount
 */
MsgVpnModel.prototype.serviceRestOutgoingMaxConnectionCount = undefined;

/**
 * The maximum number of SMF client connections that can be simultaneously connected to the Message VPN. This value may be higher than supported by the platform.
 * @member {Number} serviceSmfMaxConnectionCount
 */
MsgVpnModel.prototype.serviceSmfMaxConnectionCount = undefined;

/**
 * Indicates whether the SMF Service is enabled in the Message VPN.
 * @member {Boolean} serviceSmfPlainTextEnabled
 */
MsgVpnModel.prototype.serviceSmfPlainTextEnabled = undefined;

/**
 * The reason for the SMF Service failure in the Message VPN.
 * @member {String} serviceSmfPlainTextFailureReason
 */
MsgVpnModel.prototype.serviceSmfPlainTextFailureReason = undefined;

/**
 * Indicates whether the SMF Service is operationally up in the Message VPN.
 * @member {Boolean} serviceSmfPlainTextUp
 */
MsgVpnModel.prototype.serviceSmfPlainTextUp = undefined;

/**
 * Indicates whether encryption (TLS) is enabled for SMF clients in the Message VPN.
 * @member {Boolean} serviceSmfTlsEnabled
 */
MsgVpnModel.prototype.serviceSmfTlsEnabled = undefined;

/**
 * The reason for the TLS related SMF Service failure in the Message VPN.
 * @member {String} serviceSmfTlsFailureReason
 */
MsgVpnModel.prototype.serviceSmfTlsFailureReason = undefined;

/**
 * Indicates whether the TLS related SMF Service is operationally up in the Message VPN.
 * @member {Boolean} serviceSmfTlsUp
 */
MsgVpnModel.prototype.serviceSmfTlsUp = undefined;

/**
 * Allowed values for the <code>serviceWebAuthenticationClientCertRequest</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnModel.ServiceWebAuthenticationClientCertRequestEnum = {
  /**
   * value: "always"
   * @const
   */
  always: "always",

  /**
   * value: "never"
   * @const
   */
  never: "never",

  /**
   * value: "when-enabled-in-message-vpn"
   * @const
   */
  whenEnabledInMessageVpn: "when-enabled-in-message-vpn"
};
/**
 * Determines when to request a client certificate from a Web Transport client connecting via a TLS port. The allowed values and their meaning are:  <pre> \"always\" - Always ask for a client certificate regardless of the \"message-vpn > authentication > client-certificate > shutdown\" configuration. \"never\" - Never ask for a client certificate regardless of the \"message-vpn > authentication > client-certificate > shutdown\" configuration. \"when-enabled-in-message-vpn\" - Only ask for a client-certificate if client certificate authentication is enabled under \"message-vpn >  authentication > client-certificate > shutdown\". </pre>  Available since 2.21.
 * @member {module:model/MsgVpnModel.ServiceWebAuthenticationClientCertRequestEnum} serviceWebAuthenticationClientCertRequest
 */
MsgVpnModel.prototype.serviceWebAuthenticationClientCertRequest = undefined;

/**
 * The maximum number of Web Transport client connections that can be simultaneously connected to the Message VPN. This value may be higher than supported by the platform.
 * @member {Number} serviceWebMaxConnectionCount
 */
MsgVpnModel.prototype.serviceWebMaxConnectionCount = undefined;

/**
 * Indicates whether the Web transport for the SMF Service is enabled in the Message VPN.
 * @member {Boolean} serviceWebPlainTextEnabled
 */
MsgVpnModel.prototype.serviceWebPlainTextEnabled = undefined;

/**
 * The reason for the Web transport related SMF Service failure in the Message VPN.
 * @member {String} serviceWebPlainTextFailureReason
 */
MsgVpnModel.prototype.serviceWebPlainTextFailureReason = undefined;

/**
 * Indicates whether the Web transport for the SMF Service is operationally up in the Message VPN.
 * @member {Boolean} serviceWebPlainTextUp
 */
MsgVpnModel.prototype.serviceWebPlainTextUp = undefined;

/**
 * Indicates whether TLS is enabled for SMF clients in the Message VPN that use the Web transport.
 * @member {Boolean} serviceWebTlsEnabled
 */
MsgVpnModel.prototype.serviceWebTlsEnabled = undefined;

/**
 * The reason for the TLS related Web transport SMF Service failure in the Message VPN.
 * @member {String} serviceWebTlsFailureReason
 */
MsgVpnModel.prototype.serviceWebTlsFailureReason = undefined;

/**
 * Indicates whether the TLS related Web transport SMF Service is operationally up in the Message VPN.
 * @member {Boolean} serviceWebTlsUp
 */
MsgVpnModel.prototype.serviceWebTlsUp = undefined;

/**
 * The operational state of the local Message VPN. The allowed values and their meaning are:  <pre> \"up\" - The Message VPN is operationally up. \"down\" - The Message VPN is operationally down. \"standby\" - The Message VPN is operationally replication standby. </pre> 
 * @member {String} state
 */
MsgVpnModel.prototype.state = undefined;

/**
 * The progress of the subscription export task, in percent complete.
 * @member {Number} subscriptionExportProgress
 */
MsgVpnModel.prototype.subscriptionExportProgress = undefined;

/**
 * Indicates whether the Message VPN is the system manager for handling system level SEMP get requests and system level event publishing.
 * @member {Boolean} systemManager
 */
MsgVpnModel.prototype.systemManager = undefined;

/**
 * Indicates whether SMF clients connected to the Message VPN are allowed to downgrade their connections from TLS to plain text.
 * @member {Boolean} tlsAllowDowngradeToPlainTextEnabled
 */
MsgVpnModel.prototype.tlsAllowDowngradeToPlainTextEnabled = undefined;

/**
 * The one minute average of the TLS message rate received by the Message VPN, in bytes per second (B/sec). Available since 2.13.
 * @member {Number} tlsAverageRxByteRate
 */
MsgVpnModel.prototype.tlsAverageRxByteRate = undefined;

/**
 * The one minute average of the TLS message rate transmitted by the Message VPN, in bytes per second (B/sec). Available since 2.13.
 * @member {Number} tlsAverageTxByteRate
 */
MsgVpnModel.prototype.tlsAverageTxByteRate = undefined;

/**
 * The amount of TLS messages received by the Message VPN, in bytes (B). Available since 2.13.
 * @member {Number} tlsRxByteCount
 */
MsgVpnModel.prototype.tlsRxByteCount = undefined;

/**
 * The current TLS message rate received by the Message VPN, in bytes per second (B/sec). Available since 2.13.
 * @member {Number} tlsRxByteRate
 */
MsgVpnModel.prototype.tlsRxByteRate = undefined;

/**
 * The amount of TLS messages transmitted by the Message VPN, in bytes (B). Available since 2.13.
 * @member {Number} tlsTxByteCount
 */
MsgVpnModel.prototype.tlsTxByteCount = undefined;

/**
 * The current TLS message rate transmitted by the Message VPN, in bytes per second (B/sec). Available since 2.13.
 * @member {Number} tlsTxByteRate
 */
MsgVpnModel.prototype.tlsTxByteRate = undefined;

/**
 * The amount of messages transmitted to clients by the Message VPN, in bytes (B). Available since 2.12.
 * @member {Number} txByteCount
 */
MsgVpnModel.prototype.txByteCount = undefined;

/**
 * The current message rate transmitted by the Message VPN, in bytes per second (B/sec). Available since 2.13.
 * @member {Number} txByteRate
 */
MsgVpnModel.prototype.txByteRate = undefined;

/**
 * The amount of compressed messages transmitted by the Message VPN, in bytes (B). Available since 2.12.
 * @member {Number} txCompressedByteCount
 */
MsgVpnModel.prototype.txCompressedByteCount = undefined;

/**
 * The current compressed message rate transmitted by the Message VPN, in bytes per second (B/sec). Available since 2.12.
 * @member {Number} txCompressedByteRate
 */
MsgVpnModel.prototype.txCompressedByteRate = undefined;

/**
 * The compression ratio for messages transmitted by the message VPN. Available since 2.12.
 * @member {String} txCompressionRatio
 */
MsgVpnModel.prototype.txCompressionRatio = undefined;

/**
 * The number of messages transmitted to clients by the Message VPN. Available since 2.12.
 * @member {Number} txMsgCount
 */
MsgVpnModel.prototype.txMsgCount = undefined;

/**
 * The current message rate transmitted by the Message VPN, in messages per second (msg/sec). Available since 2.13.
 * @member {Number} txMsgRate
 */
MsgVpnModel.prototype.txMsgRate = undefined;

/**
 * The amount of uncompressed messages transmitted by the Message VPN, in bytes (B). Available since 2.12.
 * @member {Number} txUncompressedByteCount
 */
MsgVpnModel.prototype.txUncompressedByteCount = undefined;

/**
 * The current uncompressed message rate transmitted by the Message VPN, in bytes per second (B/sec). Available since 2.12.
 * @member {Number} txUncompressedByteRate
 */
MsgVpnModel.prototype.txUncompressedByteRate = undefined;

