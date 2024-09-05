import {ApiClient} from '../ApiClient';
import {EventThresholdByPercentModel} from './EventThresholdByPercentModel';
import {EventThresholdModel} from './EventThresholdModel';

/**
 * The BrokerModel model module.
 * @module model/BrokerModel
 * @version 2.36
 */
export class BrokerModel {
  /**
   * Constructs a new <code>BrokerModel</code>.
   * @alias module:model/BrokerModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BrokerModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BrokerModel} obj Optional instance to populate.
   * @return {module:model/BrokerModel} The populated <code>BrokerModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BrokerModel();
      if (data.hasOwnProperty('authClientCertRevocationCheckMode'))
        obj.authClientCertRevocationCheckMode = ApiClient.convertToType(data['authClientCertRevocationCheckMode'], 'String');
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
      if (data.hasOwnProperty('configSyncAuthenticationClientCertMaxChainDepth'))
        obj.configSyncAuthenticationClientCertMaxChainDepth = ApiClient.convertToType(data['configSyncAuthenticationClientCertMaxChainDepth'], 'Number');
      if (data.hasOwnProperty('configSyncAuthenticationClientCertValidateDateEnabled'))
        obj.configSyncAuthenticationClientCertValidateDateEnabled = ApiClient.convertToType(data['configSyncAuthenticationClientCertValidateDateEnabled'], 'Boolean');
      if (data.hasOwnProperty('configSyncClientProfileTcpInitialCongestionWindow'))
        obj.configSyncClientProfileTcpInitialCongestionWindow = ApiClient.convertToType(data['configSyncClientProfileTcpInitialCongestionWindow'], 'Number');
      if (data.hasOwnProperty('configSyncClientProfileTcpKeepaliveCount'))
        obj.configSyncClientProfileTcpKeepaliveCount = ApiClient.convertToType(data['configSyncClientProfileTcpKeepaliveCount'], 'Number');
      if (data.hasOwnProperty('configSyncClientProfileTcpKeepaliveIdle'))
        obj.configSyncClientProfileTcpKeepaliveIdle = ApiClient.convertToType(data['configSyncClientProfileTcpKeepaliveIdle'], 'Number');
      if (data.hasOwnProperty('configSyncClientProfileTcpKeepaliveInterval'))
        obj.configSyncClientProfileTcpKeepaliveInterval = ApiClient.convertToType(data['configSyncClientProfileTcpKeepaliveInterval'], 'Number');
      if (data.hasOwnProperty('configSyncClientProfileTcpMaxWindow'))
        obj.configSyncClientProfileTcpMaxWindow = ApiClient.convertToType(data['configSyncClientProfileTcpMaxWindow'], 'Number');
      if (data.hasOwnProperty('configSyncClientProfileTcpMss'))
        obj.configSyncClientProfileTcpMss = ApiClient.convertToType(data['configSyncClientProfileTcpMss'], 'Number');
      if (data.hasOwnProperty('configSyncEnabled'))
        obj.configSyncEnabled = ApiClient.convertToType(data['configSyncEnabled'], 'Boolean');
      if (data.hasOwnProperty('configSyncLastFailureReason'))
        obj.configSyncLastFailureReason = ApiClient.convertToType(data['configSyncLastFailureReason'], 'String');
      if (data.hasOwnProperty('configSyncSynchronizeUsernameEnabled'))
        obj.configSyncSynchronizeUsernameEnabled = ApiClient.convertToType(data['configSyncSynchronizeUsernameEnabled'], 'Boolean');
      if (data.hasOwnProperty('configSyncTlsEnabled'))
        obj.configSyncTlsEnabled = ApiClient.convertToType(data['configSyncTlsEnabled'], 'Boolean');
      if (data.hasOwnProperty('configSyncUp'))
        obj.configSyncUp = ApiClient.convertToType(data['configSyncUp'], 'Boolean');
      if (data.hasOwnProperty('cspfVersion'))
        obj.cspfVersion = ApiClient.convertToType(data['cspfVersion'], 'Number');
      if (data.hasOwnProperty('guaranteedMsgingDefragmentationEstimatedFragmentation'))
        obj.guaranteedMsgingDefragmentationEstimatedFragmentation = ApiClient.convertToType(data['guaranteedMsgingDefragmentationEstimatedFragmentation'], 'Number');
      if (data.hasOwnProperty('guaranteedMsgingDefragmentationEstimatedRecoverableSpace'))
        obj.guaranteedMsgingDefragmentationEstimatedRecoverableSpace = ApiClient.convertToType(data['guaranteedMsgingDefragmentationEstimatedRecoverableSpace'], 'Number');
      if (data.hasOwnProperty('guaranteedMsgingDefragmentationLastCompletedOn'))
        obj.guaranteedMsgingDefragmentationLastCompletedOn = ApiClient.convertToType(data['guaranteedMsgingDefragmentationLastCompletedOn'], 'Number');
      if (data.hasOwnProperty('guaranteedMsgingDefragmentationLastCompletionPercentage'))
        obj.guaranteedMsgingDefragmentationLastCompletionPercentage = ApiClient.convertToType(data['guaranteedMsgingDefragmentationLastCompletionPercentage'], 'Number');
      if (data.hasOwnProperty('guaranteedMsgingDefragmentationLastExitCondition'))
        obj.guaranteedMsgingDefragmentationLastExitCondition = ApiClient.convertToType(data['guaranteedMsgingDefragmentationLastExitCondition'], 'String');
      if (data.hasOwnProperty('guaranteedMsgingDefragmentationLastExitConditionInformation'))
        obj.guaranteedMsgingDefragmentationLastExitConditionInformation = ApiClient.convertToType(data['guaranteedMsgingDefragmentationLastExitConditionInformation'], 'String');
      if (data.hasOwnProperty('guaranteedMsgingDefragmentationScheduleDayList'))
        obj.guaranteedMsgingDefragmentationScheduleDayList = ApiClient.convertToType(data['guaranteedMsgingDefragmentationScheduleDayList'], 'String');
      if (data.hasOwnProperty('guaranteedMsgingDefragmentationScheduleEnabled'))
        obj.guaranteedMsgingDefragmentationScheduleEnabled = ApiClient.convertToType(data['guaranteedMsgingDefragmentationScheduleEnabled'], 'Boolean');
      if (data.hasOwnProperty('guaranteedMsgingDefragmentationScheduleTimeList'))
        obj.guaranteedMsgingDefragmentationScheduleTimeList = ApiClient.convertToType(data['guaranteedMsgingDefragmentationScheduleTimeList'], 'String');
      if (data.hasOwnProperty('guaranteedMsgingDefragmentationStatus'))
        obj.guaranteedMsgingDefragmentationStatus = ApiClient.convertToType(data['guaranteedMsgingDefragmentationStatus'], 'String');
      if (data.hasOwnProperty('guaranteedMsgingDefragmentationStatusActiveCompletionPercentage'))
        obj.guaranteedMsgingDefragmentationStatusActiveCompletionPercentage = ApiClient.convertToType(data['guaranteedMsgingDefragmentationStatusActiveCompletionPercentage'], 'Number');
      if (data.hasOwnProperty('guaranteedMsgingDefragmentationThresholdEnabled'))
        obj.guaranteedMsgingDefragmentationThresholdEnabled = ApiClient.convertToType(data['guaranteedMsgingDefragmentationThresholdEnabled'], 'Boolean');
      if (data.hasOwnProperty('guaranteedMsgingDefragmentationThresholdFragmentationPercentage'))
        obj.guaranteedMsgingDefragmentationThresholdFragmentationPercentage = ApiClient.convertToType(data['guaranteedMsgingDefragmentationThresholdFragmentationPercentage'], 'Number');
      if (data.hasOwnProperty('guaranteedMsgingDefragmentationThresholdMinInterval'))
        obj.guaranteedMsgingDefragmentationThresholdMinInterval = ApiClient.convertToType(data['guaranteedMsgingDefragmentationThresholdMinInterval'], 'Number');
      if (data.hasOwnProperty('guaranteedMsgingDefragmentationThresholdUsagePercentage'))
        obj.guaranteedMsgingDefragmentationThresholdUsagePercentage = ApiClient.convertToType(data['guaranteedMsgingDefragmentationThresholdUsagePercentage'], 'Number');
      if (data.hasOwnProperty('guaranteedMsgingEnabled'))
        obj.guaranteedMsgingEnabled = ApiClient.convertToType(data['guaranteedMsgingEnabled'], 'Boolean');
      if (data.hasOwnProperty('guaranteedMsgingEventCacheUsageThreshold'))
        obj.guaranteedMsgingEventCacheUsageThreshold = EventThresholdModel.constructFromObject(data['guaranteedMsgingEventCacheUsageThreshold']);
      if (data.hasOwnProperty('guaranteedMsgingEventDeliveredUnackedThreshold'))
        obj.guaranteedMsgingEventDeliveredUnackedThreshold = EventThresholdByPercentModel.constructFromObject(data['guaranteedMsgingEventDeliveredUnackedThreshold']);
      if (data.hasOwnProperty('guaranteedMsgingEventDiskUsageThreshold'))
        obj.guaranteedMsgingEventDiskUsageThreshold = EventThresholdByPercentModel.constructFromObject(data['guaranteedMsgingEventDiskUsageThreshold']);
      if (data.hasOwnProperty('guaranteedMsgingEventEgressFlowCountThreshold'))
        obj.guaranteedMsgingEventEgressFlowCountThreshold = EventThresholdModel.constructFromObject(data['guaranteedMsgingEventEgressFlowCountThreshold']);
      if (data.hasOwnProperty('guaranteedMsgingEventEndpointCountThreshold'))
        obj.guaranteedMsgingEventEndpointCountThreshold = EventThresholdModel.constructFromObject(data['guaranteedMsgingEventEndpointCountThreshold']);
      if (data.hasOwnProperty('guaranteedMsgingEventIngressFlowCountThreshold'))
        obj.guaranteedMsgingEventIngressFlowCountThreshold = EventThresholdModel.constructFromObject(data['guaranteedMsgingEventIngressFlowCountThreshold']);
      if (data.hasOwnProperty('guaranteedMsgingEventMsgCountThreshold'))
        obj.guaranteedMsgingEventMsgCountThreshold = EventThresholdByPercentModel.constructFromObject(data['guaranteedMsgingEventMsgCountThreshold']);
      if (data.hasOwnProperty('guaranteedMsgingEventMsgSpoolFileCountThreshold'))
        obj.guaranteedMsgingEventMsgSpoolFileCountThreshold = EventThresholdByPercentModel.constructFromObject(data['guaranteedMsgingEventMsgSpoolFileCountThreshold']);
      if (data.hasOwnProperty('guaranteedMsgingEventMsgSpoolUsageThreshold'))
        obj.guaranteedMsgingEventMsgSpoolUsageThreshold = EventThresholdModel.constructFromObject(data['guaranteedMsgingEventMsgSpoolUsageThreshold']);
      if (data.hasOwnProperty('guaranteedMsgingEventTransactedSessionCountThreshold'))
        obj.guaranteedMsgingEventTransactedSessionCountThreshold = EventThresholdModel.constructFromObject(data['guaranteedMsgingEventTransactedSessionCountThreshold']);
      if (data.hasOwnProperty('guaranteedMsgingEventTransactedSessionResourceCountThreshold'))
        obj.guaranteedMsgingEventTransactedSessionResourceCountThreshold = EventThresholdByPercentModel.constructFromObject(data['guaranteedMsgingEventTransactedSessionResourceCountThreshold']);
      if (data.hasOwnProperty('guaranteedMsgingEventTransactionCountThreshold'))
        obj.guaranteedMsgingEventTransactionCountThreshold = EventThresholdModel.constructFromObject(data['guaranteedMsgingEventTransactionCountThreshold']);
      if (data.hasOwnProperty('guaranteedMsgingMaxCacheUsage'))
        obj.guaranteedMsgingMaxCacheUsage = ApiClient.convertToType(data['guaranteedMsgingMaxCacheUsage'], 'Number');
      if (data.hasOwnProperty('guaranteedMsgingMaxMsgSpoolUsage'))
        obj.guaranteedMsgingMaxMsgSpoolUsage = ApiClient.convertToType(data['guaranteedMsgingMaxMsgSpoolUsage'], 'Number');
      if (data.hasOwnProperty('guaranteedMsgingMsgSpoolSyncMirroredMsgAckTimeout'))
        obj.guaranteedMsgingMsgSpoolSyncMirroredMsgAckTimeout = ApiClient.convertToType(data['guaranteedMsgingMsgSpoolSyncMirroredMsgAckTimeout'], 'Number');
      if (data.hasOwnProperty('guaranteedMsgingMsgSpoolSyncMirroredSpoolFileAckTimeout'))
        obj.guaranteedMsgingMsgSpoolSyncMirroredSpoolFileAckTimeout = ApiClient.convertToType(data['guaranteedMsgingMsgSpoolSyncMirroredSpoolFileAckTimeout'], 'Number');
      if (data.hasOwnProperty('guaranteedMsgingOperationalStatus'))
        obj.guaranteedMsgingOperationalStatus = ApiClient.convertToType(data['guaranteedMsgingOperationalStatus'], 'String');
      if (data.hasOwnProperty('guaranteedMsgingTransactionReplicationCompatibilityMode'))
        obj.guaranteedMsgingTransactionReplicationCompatibilityMode = ApiClient.convertToType(data['guaranteedMsgingTransactionReplicationCompatibilityMode'], 'String');
      if (data.hasOwnProperty('oauthProfileDefault'))
        obj.oauthProfileDefault = ApiClient.convertToType(data['oauthProfileDefault'], 'String');
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
      if (data.hasOwnProperty('serviceAmqpEnabled'))
        obj.serviceAmqpEnabled = ApiClient.convertToType(data['serviceAmqpEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceAmqpTlsListenPort'))
        obj.serviceAmqpTlsListenPort = ApiClient.convertToType(data['serviceAmqpTlsListenPort'], 'Number');
      if (data.hasOwnProperty('serviceEventConnectionCountThreshold'))
        obj.serviceEventConnectionCountThreshold = EventThresholdModel.constructFromObject(data['serviceEventConnectionCountThreshold']);
      if (data.hasOwnProperty('serviceHealthCheckEnabled'))
        obj.serviceHealthCheckEnabled = ApiClient.convertToType(data['serviceHealthCheckEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceHealthCheckListenPort'))
        obj.serviceHealthCheckListenPort = ApiClient.convertToType(data['serviceHealthCheckListenPort'], 'Number');
      if (data.hasOwnProperty('serviceHealthCheckTlsEnabled'))
        obj.serviceHealthCheckTlsEnabled = ApiClient.convertToType(data['serviceHealthCheckTlsEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceHealthCheckTlsListenPort'))
        obj.serviceHealthCheckTlsListenPort = ApiClient.convertToType(data['serviceHealthCheckTlsListenPort'], 'Number');
      if (data.hasOwnProperty('serviceMateLinkEnabled'))
        obj.serviceMateLinkEnabled = ApiClient.convertToType(data['serviceMateLinkEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceMateLinkListenPort'))
        obj.serviceMateLinkListenPort = ApiClient.convertToType(data['serviceMateLinkListenPort'], 'Number');
      if (data.hasOwnProperty('serviceMqttEnabled'))
        obj.serviceMqttEnabled = ApiClient.convertToType(data['serviceMqttEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceMsgBackboneEnabled'))
        obj.serviceMsgBackboneEnabled = ApiClient.convertToType(data['serviceMsgBackboneEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceRedundancyEnabled'))
        obj.serviceRedundancyEnabled = ApiClient.convertToType(data['serviceRedundancyEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceRedundancyFirstListenPort'))
        obj.serviceRedundancyFirstListenPort = ApiClient.convertToType(data['serviceRedundancyFirstListenPort'], 'Number');
      if (data.hasOwnProperty('serviceRestEventOutgoingConnectionCountThreshold'))
        obj.serviceRestEventOutgoingConnectionCountThreshold = EventThresholdModel.constructFromObject(data['serviceRestEventOutgoingConnectionCountThreshold']);
      if (data.hasOwnProperty('serviceRestIncomingEnabled'))
        obj.serviceRestIncomingEnabled = ApiClient.convertToType(data['serviceRestIncomingEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceRestOutgoingEnabled'))
        obj.serviceRestOutgoingEnabled = ApiClient.convertToType(data['serviceRestOutgoingEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceSempCorsAllowAnyHostEnabled'))
        obj.serviceSempCorsAllowAnyHostEnabled = ApiClient.convertToType(data['serviceSempCorsAllowAnyHostEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceSempLegacyTimeoutEnabled'))
        obj.serviceSempLegacyTimeoutEnabled = ApiClient.convertToType(data['serviceSempLegacyTimeoutEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceSempPlainTextEnabled'))
        obj.serviceSempPlainTextEnabled = ApiClient.convertToType(data['serviceSempPlainTextEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceSempPlainTextListenPort'))
        obj.serviceSempPlainTextListenPort = ApiClient.convertToType(data['serviceSempPlainTextListenPort'], 'Number');
      if (data.hasOwnProperty('serviceSempSessionIdleTimeout'))
        obj.serviceSempSessionIdleTimeout = ApiClient.convertToType(data['serviceSempSessionIdleTimeout'], 'Number');
      if (data.hasOwnProperty('serviceSempSessionMaxLifetime'))
        obj.serviceSempSessionMaxLifetime = ApiClient.convertToType(data['serviceSempSessionMaxLifetime'], 'Number');
      if (data.hasOwnProperty('serviceSempTlsEnabled'))
        obj.serviceSempTlsEnabled = ApiClient.convertToType(data['serviceSempTlsEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceSempTlsListenPort'))
        obj.serviceSempTlsListenPort = ApiClient.convertToType(data['serviceSempTlsListenPort'], 'Number');
      if (data.hasOwnProperty('serviceSmfCompressionListenPort'))
        obj.serviceSmfCompressionListenPort = ApiClient.convertToType(data['serviceSmfCompressionListenPort'], 'Number');
      if (data.hasOwnProperty('serviceSmfEnabled'))
        obj.serviceSmfEnabled = ApiClient.convertToType(data['serviceSmfEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceSmfEventConnectionCountThreshold'))
        obj.serviceSmfEventConnectionCountThreshold = EventThresholdModel.constructFromObject(data['serviceSmfEventConnectionCountThreshold']);
      if (data.hasOwnProperty('serviceSmfPlainTextListenPort'))
        obj.serviceSmfPlainTextListenPort = ApiClient.convertToType(data['serviceSmfPlainTextListenPort'], 'Number');
      if (data.hasOwnProperty('serviceSmfRoutingControlListenPort'))
        obj.serviceSmfRoutingControlListenPort = ApiClient.convertToType(data['serviceSmfRoutingControlListenPort'], 'Number');
      if (data.hasOwnProperty('serviceSmfTlsListenPort'))
        obj.serviceSmfTlsListenPort = ApiClient.convertToType(data['serviceSmfTlsListenPort'], 'Number');
      if (data.hasOwnProperty('serviceTlsEventConnectionCountThreshold'))
        obj.serviceTlsEventConnectionCountThreshold = EventThresholdModel.constructFromObject(data['serviceTlsEventConnectionCountThreshold']);
      if (data.hasOwnProperty('serviceWebTransportEnabled'))
        obj.serviceWebTransportEnabled = ApiClient.convertToType(data['serviceWebTransportEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceWebTransportPlainTextListenPort'))
        obj.serviceWebTransportPlainTextListenPort = ApiClient.convertToType(data['serviceWebTransportPlainTextListenPort'], 'Number');
      if (data.hasOwnProperty('serviceWebTransportTlsListenPort'))
        obj.serviceWebTransportTlsListenPort = ApiClient.convertToType(data['serviceWebTransportTlsListenPort'], 'Number');
      if (data.hasOwnProperty('serviceWebTransportWebUrlSuffix'))
        obj.serviceWebTransportWebUrlSuffix = ApiClient.convertToType(data['serviceWebTransportWebUrlSuffix'], 'String');
      if (data.hasOwnProperty('telemetryTraceDemoExpiryTime'))
        obj.telemetryTraceDemoExpiryTime = ApiClient.convertToType(data['telemetryTraceDemoExpiryTime'], 'Number');
      if (data.hasOwnProperty('telemetryTraceDemoState'))
        obj.telemetryTraceDemoState = ApiClient.convertToType(data['telemetryTraceDemoState'], 'String');
      if (data.hasOwnProperty('telemetryTraceMode'))
        obj.telemetryTraceMode = ApiClient.convertToType(data['telemetryTraceMode'], 'String');
      if (data.hasOwnProperty('tlsBlockVersion11Enabled'))
        obj.tlsBlockVersion11Enabled = ApiClient.convertToType(data['tlsBlockVersion11Enabled'], 'Boolean');
      if (data.hasOwnProperty('tlsCipherSuiteManagementDefaultList'))
        obj.tlsCipherSuiteManagementDefaultList = ApiClient.convertToType(data['tlsCipherSuiteManagementDefaultList'], 'String');
      if (data.hasOwnProperty('tlsCipherSuiteManagementList'))
        obj.tlsCipherSuiteManagementList = ApiClient.convertToType(data['tlsCipherSuiteManagementList'], 'String');
      if (data.hasOwnProperty('tlsCipherSuiteManagementSupportedList'))
        obj.tlsCipherSuiteManagementSupportedList = ApiClient.convertToType(data['tlsCipherSuiteManagementSupportedList'], 'String');
      if (data.hasOwnProperty('tlsCipherSuiteMsgBackboneDefaultList'))
        obj.tlsCipherSuiteMsgBackboneDefaultList = ApiClient.convertToType(data['tlsCipherSuiteMsgBackboneDefaultList'], 'String');
      if (data.hasOwnProperty('tlsCipherSuiteMsgBackboneList'))
        obj.tlsCipherSuiteMsgBackboneList = ApiClient.convertToType(data['tlsCipherSuiteMsgBackboneList'], 'String');
      if (data.hasOwnProperty('tlsCipherSuiteMsgBackboneSupportedList'))
        obj.tlsCipherSuiteMsgBackboneSupportedList = ApiClient.convertToType(data['tlsCipherSuiteMsgBackboneSupportedList'], 'String');
      if (data.hasOwnProperty('tlsCipherSuiteSecureShellDefaultList'))
        obj.tlsCipherSuiteSecureShellDefaultList = ApiClient.convertToType(data['tlsCipherSuiteSecureShellDefaultList'], 'String');
      if (data.hasOwnProperty('tlsCipherSuiteSecureShellList'))
        obj.tlsCipherSuiteSecureShellList = ApiClient.convertToType(data['tlsCipherSuiteSecureShellList'], 'String');
      if (data.hasOwnProperty('tlsCipherSuiteSecureShellSupportedList'))
        obj.tlsCipherSuiteSecureShellSupportedList = ApiClient.convertToType(data['tlsCipherSuiteSecureShellSupportedList'], 'String');
      if (data.hasOwnProperty('tlsCrimeExploitProtectionEnabled'))
        obj.tlsCrimeExploitProtectionEnabled = ApiClient.convertToType(data['tlsCrimeExploitProtectionEnabled'], 'Boolean');
      if (data.hasOwnProperty('tlsStandardDomainCertificateAuthoritiesEnabled'))
        obj.tlsStandardDomainCertificateAuthoritiesEnabled = ApiClient.convertToType(data['tlsStandardDomainCertificateAuthoritiesEnabled'], 'Boolean');
      if (data.hasOwnProperty('tlsTicketLifetime'))
        obj.tlsTicketLifetime = ApiClient.convertToType(data['tlsTicketLifetime'], 'Number');
      if (data.hasOwnProperty('tlsVersionSupportedList'))
        obj.tlsVersionSupportedList = ApiClient.convertToType(data['tlsVersionSupportedList'], 'String');
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
      if (data.hasOwnProperty('version'))
        obj.version = ApiClient.convertToType(data['version'], 'String');
      if (data.hasOwnProperty('webManagerAllowUnencryptedWizardsEnabled'))
        obj.webManagerAllowUnencryptedWizardsEnabled = ApiClient.convertToType(data['webManagerAllowUnencryptedWizardsEnabled'], 'Boolean');
      if (data.hasOwnProperty('webManagerCustomization'))
        obj.webManagerCustomization = ApiClient.convertToType(data['webManagerCustomization'], 'String');
      if (data.hasOwnProperty('webManagerRedirectHttpEnabled'))
        obj.webManagerRedirectHttpEnabled = ApiClient.convertToType(data['webManagerRedirectHttpEnabled'], 'Boolean');
      if (data.hasOwnProperty('webManagerRedirectHttpLastFailureReason'))
        obj.webManagerRedirectHttpLastFailureReason = ApiClient.convertToType(data['webManagerRedirectHttpLastFailureReason'], 'String');
      if (data.hasOwnProperty('webManagerRedirectHttpOverrideTlsPort'))
        obj.webManagerRedirectHttpOverrideTlsPort = ApiClient.convertToType(data['webManagerRedirectHttpOverrideTlsPort'], 'Number');
      if (data.hasOwnProperty('webManagerRedirectHttpUp'))
        obj.webManagerRedirectHttpUp = ApiClient.convertToType(data['webManagerRedirectHttpUp'], 'Boolean');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>authClientCertRevocationCheckMode</code> property.
 * @enum {String}
 * @readonly
 */
BrokerModel.AuthClientCertRevocationCheckModeEnum = {
  /**
   * value: "none"
   * @const
   */
  none: "none",

  /**
   * value: "ocsp"
   * @const
   */
  ocsp: "ocsp",

  /**
   * value: "crl"
   * @const
   */
  crl: "crl",

  /**
   * value: "ocsp-crl"
   * @const
   */
  ocspCrl: "ocsp-crl"
};
/**
 * The client certificate revocation checking mode used when a client authenticates with a client certificate. The allowed values and their meaning are:  <pre> \"none\" - Do not perform any certificate revocation checking. \"ocsp\" - Use the Open Certificate Status Protcol (OCSP) for certificate revocation checking. \"crl\" - Use Certificate Revocation Lists (CRL) for certificate revocation checking. \"ocsp-crl\" - Use OCSP first, but if OCSP fails to return an unambiguous result, then check via CRL. </pre> 
 * @member {module:model/BrokerModel.AuthClientCertRevocationCheckModeEnum} authClientCertRevocationCheckMode
 */
BrokerModel.prototype.authClientCertRevocationCheckMode = undefined;

/**
 * The one minute average of the bind request rate received by the Broker, in binds per second (binds/sec). Available since 2.25.
 * @member {Number} averageBindRequestRate
 */
BrokerModel.prototype.averageBindRequestRate = undefined;

/**
 * The one minute average of the message rate received by the Broker, in bytes per second (B/sec). Available since 2.14.
 * @member {Number} averageRxByteRate
 */
BrokerModel.prototype.averageRxByteRate = undefined;

/**
 * The one minute average of the compressed message rate received by the Broker, in bytes per second (B/sec). Available since 2.14.
 * @member {Number} averageRxCompressedByteRate
 */
BrokerModel.prototype.averageRxCompressedByteRate = undefined;

/**
 * The one minute average of the message rate received by the Broker, in messages per second (msg/sec). Available since 2.14.
 * @member {Number} averageRxMsgRate
 */
BrokerModel.prototype.averageRxMsgRate = undefined;

/**
 * The one minute average of the uncompressed message rate received by the Broker, in bytes per second (B/sec). Available since 2.14.
 * @member {Number} averageRxUncompressedByteRate
 */
BrokerModel.prototype.averageRxUncompressedByteRate = undefined;

/**
 * The one minute average of the message rate transmitted by the Broker, in bytes per second (B/sec). Available since 2.14.
 * @member {Number} averageTxByteRate
 */
BrokerModel.prototype.averageTxByteRate = undefined;

/**
 * The one minute average of the compressed message rate transmitted by the Broker, in bytes per second (B/sec). Available since 2.14.
 * @member {Number} averageTxCompressedByteRate
 */
BrokerModel.prototype.averageTxCompressedByteRate = undefined;

/**
 * The one minute average of the message rate transmitted by the Broker, in messages per second (msg/sec). Available since 2.14.
 * @member {Number} averageTxMsgRate
 */
BrokerModel.prototype.averageTxMsgRate = undefined;

/**
 * The one minute average of the uncompressed message rate transmitted by the Broker, in bytes per second (B/sec). Available since 2.14.
 * @member {Number} averageTxUncompressedByteRate
 */
BrokerModel.prototype.averageTxUncompressedByteRate = undefined;

/**
 * The current bind request rate received by the Broker, in binds per second (binds/sec). Available since 2.25.
 * @member {Number} bindRequestRate
 */
BrokerModel.prototype.bindRequestRate = undefined;

/**
 * The maximum depth for a client certificate chain. The depth of a chain is defined as the number of signing CA certificates that are present in the chain back to a trusted self-signed root CA certificate. Available since 2.22.
 * @member {Number} configSyncAuthenticationClientCertMaxChainDepth
 */
BrokerModel.prototype.configSyncAuthenticationClientCertMaxChainDepth = undefined;

/**
 * Enable or disable validation of the \"Not Before\" and \"Not After\" validity dates in the authentication certificate(s). Available since 2.22.
 * @member {Boolean} configSyncAuthenticationClientCertValidateDateEnabled
 */
BrokerModel.prototype.configSyncAuthenticationClientCertValidateDateEnabled = undefined;

/**
 * The TCP initial congestion window size for Config Sync clients, in multiples of the TCP Maximum Segment Size (MSS). Changing the value from its default of 2 results in non-compliance with RFC 2581. Contact support before changing this value. Available since 2.22.
 * @member {Number} configSyncClientProfileTcpInitialCongestionWindow
 */
BrokerModel.prototype.configSyncClientProfileTcpInitialCongestionWindow = undefined;

/**
 * The number of TCP keepalive retransmissions to a client using the Client Profile before declaring that it is not available. Available since 2.22.
 * @member {Number} configSyncClientProfileTcpKeepaliveCount
 */
BrokerModel.prototype.configSyncClientProfileTcpKeepaliveCount = undefined;

/**
 * The amount of time a client connection using the Client Profile must remain idle before TCP begins sending keepalive probes, in seconds. Available since 2.22.
 * @member {Number} configSyncClientProfileTcpKeepaliveIdle
 */
BrokerModel.prototype.configSyncClientProfileTcpKeepaliveIdle = undefined;

/**
 * The amount of time between TCP keepalive retransmissions to a client using the Client Profile when no acknowledgment is received, in seconds. Available since 2.22.
 * @member {Number} configSyncClientProfileTcpKeepaliveInterval
 */
BrokerModel.prototype.configSyncClientProfileTcpKeepaliveInterval = undefined;

/**
 * The TCP maximum window size for clients using the Client Profile, in kilobytes. Changes are applied to all existing connections. This setting is ignored on the software broker. Available since 2.22.
 * @member {Number} configSyncClientProfileTcpMaxWindow
 */
BrokerModel.prototype.configSyncClientProfileTcpMaxWindow = undefined;

/**
 * The TCP maximum segment size for clients using the Client Profile, in bytes. Changes are applied to all existing connections. Available since 2.22.
 * @member {Number} configSyncClientProfileTcpMss
 */
BrokerModel.prototype.configSyncClientProfileTcpMss = undefined;

/**
 * Enable or disable configuration synchronization for High Availability or Disaster Recovery. Available since 2.22.
 * @member {Boolean} configSyncEnabled
 */
BrokerModel.prototype.configSyncEnabled = undefined;

/**
 * The reason for the last transition to a \"Down\" operational status. On transitions to the \"Up\" operational status this value is cleared. Available since 2.22.
 * @member {String} configSyncLastFailureReason
 */
BrokerModel.prototype.configSyncLastFailureReason = undefined;

/**
 * Enable or disable the synchronizing of usernames within High Availability groups. The transition from not synchronizing to synchronizing will cause the High Availability mate to fall out of sync. Recommendation: leave this as enabled. Available since 2.22.
 * @member {Boolean} configSyncSynchronizeUsernameEnabled
 */
BrokerModel.prototype.configSyncSynchronizeUsernameEnabled = undefined;

/**
 * Enable or disable the use of TLS encryption of the configuration synchronization communications between brokers in High Availability groups and/or Disaster Recovery sites. Available since 2.22.
 * @member {Boolean} configSyncTlsEnabled
 */
BrokerModel.prototype.configSyncTlsEnabled = undefined;

/**
 * Indicates whether the configuration synchronization facility is operational. \"True\" indicates the facility is Up, otherwise it is Down. When \"False\" the configSyncLastFailureReason will provide further detail. Available since 2.22.
 * @member {Boolean} configSyncUp
 */
BrokerModel.prototype.configSyncUp = undefined;

/**
 * The current CSPF version. Available since 2.17.
 * @member {Number} cspfVersion
 */
BrokerModel.prototype.cspfVersion = undefined;

/**
 * An approximation of the amount of disk space consumed, but not used, by the persisted data. Calculated as a percentage of total space. Available since 2.18.
 * @member {Number} guaranteedMsgingDefragmentationEstimatedFragmentation
 */
BrokerModel.prototype.guaranteedMsgingDefragmentationEstimatedFragmentation = undefined;

/**
 * An approximation of the amount of disk space recovered upon a successfully completed execution of a defragmentation operation. Expressed in MB. Available since 2.18.
 * @member {Number} guaranteedMsgingDefragmentationEstimatedRecoverableSpace
 */
BrokerModel.prototype.guaranteedMsgingDefragmentationEstimatedRecoverableSpace = undefined;

/**
 * A timestamp reflecting when the last defragmentation completed. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time). Available since 2.18.
 * @member {Number} guaranteedMsgingDefragmentationLastCompletedOn
 */
BrokerModel.prototype.guaranteedMsgingDefragmentationLastCompletedOn = undefined;

/**
 * How much of the message spool was visited during the last defragmentation operation. This number reflects the percentage of the message spool visited in terms of disk space (as opposed to, for example, spool files). Available since 2.18.
 * @member {Number} guaranteedMsgingDefragmentationLastCompletionPercentage
 */
BrokerModel.prototype.guaranteedMsgingDefragmentationLastCompletionPercentage = undefined;

/**
 * Reflects how the last defragmentation operation completed. The allowed values and their meaning are:  <pre> \"success\" - Defragmentation completed successfully. \"unmovable-local-transaction\" - Defragmentation stopped after encountering an unmovable local transaction. \"unmovable-xa-transaction\" - Defragmentation stopped after encountering an unmovable XA transaction. \"incomplete\" - Defragmentation stopped prematurely. \"stopped-by-administrator\" - Defragmentation stopped by administrator. </pre>  Available since 2.18.
 * @member {String} guaranteedMsgingDefragmentationLastExitCondition
 */
BrokerModel.prototype.guaranteedMsgingDefragmentationLastExitCondition = undefined;

/**
 * Optional additional information regarding the exit condition of the last defragmentation operation. Available since 2.18.
 * @member {String} guaranteedMsgingDefragmentationLastExitConditionInformation
 */
BrokerModel.prototype.guaranteedMsgingDefragmentationLastExitConditionInformation = undefined;

/**
 * The days of the week to schedule defragmentation runs, specified as \"daily\" or as a comma-separated list of days. Days must be specified as \"Sun\", \"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri, or \"Sat\", with no spaces, and in sorted order from Sunday to Saturday. Please note \"Sun,Mon,Tue,Wed,Thu,Fri,Sat\" is not allowed, use \"daily\" instead. Available since 2.25.
 * @member {String} guaranteedMsgingDefragmentationScheduleDayList
 */
BrokerModel.prototype.guaranteedMsgingDefragmentationScheduleDayList = undefined;

/**
 * Enable or disable schedule-based defragmentation of Guaranteed Messaging spool files. Available since 2.25.
 * @member {Boolean} guaranteedMsgingDefragmentationScheduleEnabled
 */
BrokerModel.prototype.guaranteedMsgingDefragmentationScheduleEnabled = undefined;

/**
 * The times of the day to schedule defragmentation runs, specified as \"hourly\" or as a comma-separated list of 24-hour times in the form hh:mm, or h:mm. There must be no spaces, and times (up to 4) must be in sorted order from 0:00 to 23:59. Available since 2.25.
 * @member {String} guaranteedMsgingDefragmentationScheduleTimeList
 */
BrokerModel.prototype.guaranteedMsgingDefragmentationScheduleTimeList = undefined;

/**
 * Defragmentation status of guaranteed messaging. The allowed values and their meaning are:  <pre> \"idle\" - Defragmentation is not currently running. \"pending\" - Defragmentation is preparing to run. \"active\" - Defragmentation is in progress. </pre>  Available since 2.18.
 * @member {String} guaranteedMsgingDefragmentationStatus
 */
BrokerModel.prototype.guaranteedMsgingDefragmentationStatus = undefined;

/**
 * The estimated completion percentage of a defragmentation operation currently in progress. Only valid if the defragmentation status is \"Active\". Available since 2.18.
 * @member {Number} guaranteedMsgingDefragmentationStatusActiveCompletionPercentage
 */
BrokerModel.prototype.guaranteedMsgingDefragmentationStatusActiveCompletionPercentage = undefined;

/**
 * Enable or disable threshold-based defragmentation of Guaranteed Messaging spool files. Available since 2.25.
 * @member {Boolean} guaranteedMsgingDefragmentationThresholdEnabled
 */
BrokerModel.prototype.guaranteedMsgingDefragmentationThresholdEnabled = undefined;

/**
 * Percentage of spool fragmentation needed to trigger defragmentation run. The minimum value allowed is 30%. Available since 2.25.
 * @member {Number} guaranteedMsgingDefragmentationThresholdFragmentationPercentage
 */
BrokerModel.prototype.guaranteedMsgingDefragmentationThresholdFragmentationPercentage = undefined;

/**
 * Minimum interval of time (in minutes) between defragmentation runs triggered by thresholds. Available since 2.25.
 * @member {Number} guaranteedMsgingDefragmentationThresholdMinInterval
 */
BrokerModel.prototype.guaranteedMsgingDefragmentationThresholdMinInterval = undefined;

/**
 * Percentage of spool usage needed to trigger defragmentation run. The minimum value allowed is 30%. Available since 2.25.
 * @member {Number} guaranteedMsgingDefragmentationThresholdUsagePercentage
 */
BrokerModel.prototype.guaranteedMsgingDefragmentationThresholdUsagePercentage = undefined;

/**
 * Enable or disable Guaranteed Messaging. Available since 2.18.
 * @member {Boolean} guaranteedMsgingEnabled
 */
BrokerModel.prototype.guaranteedMsgingEnabled = undefined;

/**
 * @member {module:model/EventThresholdModel} guaranteedMsgingEventCacheUsageThreshold
 */
BrokerModel.prototype.guaranteedMsgingEventCacheUsageThreshold = undefined;

/**
 * @member {module:model/EventThresholdByPercentModel} guaranteedMsgingEventDeliveredUnackedThreshold
 */
BrokerModel.prototype.guaranteedMsgingEventDeliveredUnackedThreshold = undefined;

/**
 * @member {module:model/EventThresholdByPercentModel} guaranteedMsgingEventDiskUsageThreshold
 */
BrokerModel.prototype.guaranteedMsgingEventDiskUsageThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} guaranteedMsgingEventEgressFlowCountThreshold
 */
BrokerModel.prototype.guaranteedMsgingEventEgressFlowCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} guaranteedMsgingEventEndpointCountThreshold
 */
BrokerModel.prototype.guaranteedMsgingEventEndpointCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} guaranteedMsgingEventIngressFlowCountThreshold
 */
BrokerModel.prototype.guaranteedMsgingEventIngressFlowCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdByPercentModel} guaranteedMsgingEventMsgCountThreshold
 */
BrokerModel.prototype.guaranteedMsgingEventMsgCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdByPercentModel} guaranteedMsgingEventMsgSpoolFileCountThreshold
 */
BrokerModel.prototype.guaranteedMsgingEventMsgSpoolFileCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} guaranteedMsgingEventMsgSpoolUsageThreshold
 */
BrokerModel.prototype.guaranteedMsgingEventMsgSpoolUsageThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} guaranteedMsgingEventTransactedSessionCountThreshold
 */
BrokerModel.prototype.guaranteedMsgingEventTransactedSessionCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdByPercentModel} guaranteedMsgingEventTransactedSessionResourceCountThreshold
 */
BrokerModel.prototype.guaranteedMsgingEventTransactedSessionResourceCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} guaranteedMsgingEventTransactionCountThreshold
 */
BrokerModel.prototype.guaranteedMsgingEventTransactionCountThreshold = undefined;

/**
 * Guaranteed messaging cache usage limit. Expressed as a maximum percentage of the NAB's egress queueing. resources that the guaranteed message cache is allowed to use. Available since 2.18.
 * @member {Number} guaranteedMsgingMaxCacheUsage
 */
BrokerModel.prototype.guaranteedMsgingMaxCacheUsage = undefined;

/**
 * The maximum total message spool usage allowed across all VPNs on this broker, in megabytes. Recommendation: the maximum value should be less than 90% of the disk space allocated for the guaranteed message spool. Available since 2.18.
 * @member {Number} guaranteedMsgingMaxMsgSpoolUsage
 */
BrokerModel.prototype.guaranteedMsgingMaxMsgSpoolUsage = undefined;

/**
 * The maximum time, in milliseconds, that can be tolerated for remote acknowledgment of synchronization messages before which the remote system will be considered out of sync. Available since 2.18.
 * @member {Number} guaranteedMsgingMsgSpoolSyncMirroredMsgAckTimeout
 */
BrokerModel.prototype.guaranteedMsgingMsgSpoolSyncMirroredMsgAckTimeout = undefined;

/**
 * The maximum time, in milliseconds, that can be tolerated for remote disk writes before which the remote system will be considered out of sync. Available since 2.18.
 * @member {Number} guaranteedMsgingMsgSpoolSyncMirroredSpoolFileAckTimeout
 */
BrokerModel.prototype.guaranteedMsgingMsgSpoolSyncMirroredSpoolFileAckTimeout = undefined;

/**
 * Operational status of guaranteed messaging. The allowed values and their meaning are:  <pre> \"disabled\" - The operational status of guaranteed messaging is Disabled. \"not-ready\" - The operational status of guaranteed messaging is Not Ready. \"standby\" - The operational status of guaranteed messaging is Standby. \"activating\" - The operational status of guaranteed messaging is Activating. \"active\" - The operational status of guaranteed messaging is Active. </pre>  Available since 2.18.
 * @member {String} guaranteedMsgingOperationalStatus
 */
BrokerModel.prototype.guaranteedMsgingOperationalStatus = undefined;

/**
 * Allowed values for the <code>guaranteedMsgingTransactionReplicationCompatibilityMode</code> property.
 * @enum {String}
 * @readonly
 */
BrokerModel.GuaranteedMsgingTransactionReplicationCompatibilityModeEnum = {
  /**
   * value: "legacy"
   * @const
   */
  legacy: "legacy",

  /**
   * value: "transacted"
   * @const
   */
  transacted: "transacted"
};
/**
 * The replication compatibility mode for the broker. The default value is `\"legacy\"`. The allowed values and their meaning are:\"legacy\" - All transactions originated by clients are replicated to the standby site without using transactions.\"transacted\" - All transactions originated by clients are replicated to the standby site using transactions. The allowed values and their meaning are:  <pre> \"legacy\" - All transactions originated by clients are replicated to the standby site without using transactions. \"transacted\" - All transactions originated by clients are replicated to the standby site using transactions. </pre>  Available since 2.18.
 * @member {module:model/BrokerModel.GuaranteedMsgingTransactionReplicationCompatibilityModeEnum} guaranteedMsgingTransactionReplicationCompatibilityMode
 */
BrokerModel.prototype.guaranteedMsgingTransactionReplicationCompatibilityMode = undefined;

/**
 * The default OAuth profile for OAuth authenticated SEMP requests. Available since 2.24.
 * @member {String} oauthProfileDefault
 */
BrokerModel.prototype.oauthProfileDefault = undefined;

/**
 * The amount of messages received from clients by the Broker, in bytes (B). Available since 2.14.
 * @member {Number} rxByteCount
 */
BrokerModel.prototype.rxByteCount = undefined;

/**
 * The current message rate received by the Broker, in bytes per second (B/sec). Available since 2.14.
 * @member {Number} rxByteRate
 */
BrokerModel.prototype.rxByteRate = undefined;

/**
 * The amount of compressed messages received by the Broker, in bytes (B). Available since 2.14.
 * @member {Number} rxCompressedByteCount
 */
BrokerModel.prototype.rxCompressedByteCount = undefined;

/**
 * The current compressed message rate received by the Broker, in bytes per second (B/sec). Available since 2.14.
 * @member {Number} rxCompressedByteRate
 */
BrokerModel.prototype.rxCompressedByteRate = undefined;

/**
 * The compression ratio for messages received by the Broker. Available since 2.14.
 * @member {String} rxCompressionRatio
 */
BrokerModel.prototype.rxCompressionRatio = undefined;

/**
 * The number of messages received from clients by the Broker. Available since 2.14.
 * @member {Number} rxMsgCount
 */
BrokerModel.prototype.rxMsgCount = undefined;

/**
 * The current message rate received by the Broker, in messages per second (msg/sec). Available since 2.14.
 * @member {Number} rxMsgRate
 */
BrokerModel.prototype.rxMsgRate = undefined;

/**
 * The amount of uncompressed messages received by the Broker, in bytes (B). Available since 2.14.
 * @member {Number} rxUncompressedByteCount
 */
BrokerModel.prototype.rxUncompressedByteCount = undefined;

/**
 * The current uncompressed message rate received by the Broker, in bytes per second (B/sec). Available since 2.14.
 * @member {Number} rxUncompressedByteRate
 */
BrokerModel.prototype.rxUncompressedByteRate = undefined;

/**
 * Enable or disable the AMQP service. When disabled new AMQP Clients may not connect through the global or per-VPN AMQP listen-ports, and all currently connected AMQP Clients are immediately disconnected. Available since 2.17.
 * @member {Boolean} serviceAmqpEnabled
 */
BrokerModel.prototype.serviceAmqpEnabled = undefined;

/**
 * TCP port number that AMQP clients can use to connect to the broker using raw TCP over TLS. Available since 2.17.
 * @member {Number} serviceAmqpTlsListenPort
 */
BrokerModel.prototype.serviceAmqpTlsListenPort = undefined;

/**
 * @member {module:model/EventThresholdModel} serviceEventConnectionCountThreshold
 */
BrokerModel.prototype.serviceEventConnectionCountThreshold = undefined;

/**
 * Enable or disable the plain-text health-check service. Available since 2.17.
 * @member {Boolean} serviceHealthCheckEnabled
 */
BrokerModel.prototype.serviceHealthCheckEnabled = undefined;

/**
 * The port number for the plain-text health-check service. The port must be unique across the message backbone. The health-check service must be disabled to change the port. Available since 2.17.
 * @member {Number} serviceHealthCheckListenPort
 */
BrokerModel.prototype.serviceHealthCheckListenPort = undefined;

/**
 * Enable or disable the TLS health-check service. Available since 2.34.
 * @member {Boolean} serviceHealthCheckTlsEnabled
 */
BrokerModel.prototype.serviceHealthCheckTlsEnabled = undefined;

/**
 * The port number for the TLS health-check service. The port must be unique across the message backbone. The health-check service must be disabled to change the port. Available since 2.34.
 * @member {Number} serviceHealthCheckTlsListenPort
 */
BrokerModel.prototype.serviceHealthCheckTlsListenPort = undefined;

/**
 * Enable or disable the mate-link service. Available since 2.17.
 * @member {Boolean} serviceMateLinkEnabled
 */
BrokerModel.prototype.serviceMateLinkEnabled = undefined;

/**
 * The port number for the mate-link service. The port must be unique across the message backbone. The mate-link service must be disabled to change the port. Available since 2.17.
 * @member {Number} serviceMateLinkListenPort
 */
BrokerModel.prototype.serviceMateLinkListenPort = undefined;

/**
 * Enable or disable the MQTT service. When disabled new MQTT Clients may not connect through the per-VPN MQTT listen-ports, and all currently connected MQTT Clients are immediately disconnected. Available since 2.17.
 * @member {Boolean} serviceMqttEnabled
 */
BrokerModel.prototype.serviceMqttEnabled = undefined;

/**
 * Enable or disable the msg-backbone service. When disabled new Clients may not connect through global or per-VPN listen-ports, and all currently connected Clients are immediately disconnected. Available since 2.17.
 * @member {Boolean} serviceMsgBackboneEnabled
 */
BrokerModel.prototype.serviceMsgBackboneEnabled = undefined;

/**
 * Enable or disable the redundancy service. Available since 2.17.
 * @member {Boolean} serviceRedundancyEnabled
 */
BrokerModel.prototype.serviceRedundancyEnabled = undefined;

/**
 * The first listen-port used for the redundancy service. Redundancy uses this port and the subsequent 2 ports. These port must be unique across the message backbone. The redundancy service must be disabled to change this port. Available since 2.17.
 * @member {Number} serviceRedundancyFirstListenPort
 */
BrokerModel.prototype.serviceRedundancyFirstListenPort = undefined;

/**
 * @member {module:model/EventThresholdModel} serviceRestEventOutgoingConnectionCountThreshold
 */
BrokerModel.prototype.serviceRestEventOutgoingConnectionCountThreshold = undefined;

/**
 * Enable or disable the REST service incoming connections on the broker. Available since 2.17.
 * @member {Boolean} serviceRestIncomingEnabled
 */
BrokerModel.prototype.serviceRestIncomingEnabled = undefined;

/**
 * Enable or disable the REST service outgoing connections on the broker. Available since 2.17.
 * @member {Boolean} serviceRestOutgoingEnabled
 */
BrokerModel.prototype.serviceRestOutgoingEnabled = undefined;

/**
 * Enable or disable cross origin resource requests for the SEMP service. Available since 2.24.
 * @member {Boolean} serviceSempCorsAllowAnyHostEnabled
 */
BrokerModel.prototype.serviceSempCorsAllowAnyHostEnabled = undefined;

/**
 * Enable or disable extended SEMP timeouts for paged responses. When a request times out, it returns the current page of content, even if the page is not full.  When enabled, the timeout is 60 seconds. When disabled, the timeout is 5 seconds.  The recommended setting is disabled (no legacy-timeout).  This parameter is intended as a temporary workaround to be used until SEMP clients can handle short pages.  This setting will be removed in a future release. Available since 2.18.
 * @member {Boolean} serviceSempLegacyTimeoutEnabled
 */
BrokerModel.prototype.serviceSempLegacyTimeoutEnabled = undefined;

/**
 * Enable or disable plain-text SEMP service. Available since 2.17.
 * @member {Boolean} serviceSempPlainTextEnabled
 */
BrokerModel.prototype.serviceSempPlainTextEnabled = undefined;

/**
 * The TCP port for plain-text SEMP client connections. Available since 2.17.
 * @member {Number} serviceSempPlainTextListenPort
 */
BrokerModel.prototype.serviceSempPlainTextListenPort = undefined;

/**
 * The session idle timeout, in minutes. Sessions will be invalidated if there is no activity in this period of time. Available since 2.21.
 * @member {Number} serviceSempSessionIdleTimeout
 */
BrokerModel.prototype.serviceSempSessionIdleTimeout = undefined;

/**
 * The maximum lifetime of a session, in minutes. Sessions will be invalidated after this period of time, regardless of activity. Available since 2.21.
 * @member {Number} serviceSempSessionMaxLifetime
 */
BrokerModel.prototype.serviceSempSessionMaxLifetime = undefined;

/**
 * Enable or disable TLS SEMP service. Available since 2.17.
 * @member {Boolean} serviceSempTlsEnabled
 */
BrokerModel.prototype.serviceSempTlsEnabled = undefined;

/**
 * The TCP port for TLS SEMP client connections. Available since 2.17.
 * @member {Number} serviceSempTlsListenPort
 */
BrokerModel.prototype.serviceSempTlsListenPort = undefined;

/**
 * TCP port number that SMF clients can use to connect to the broker using raw compression TCP. Available since 2.17.
 * @member {Number} serviceSmfCompressionListenPort
 */
BrokerModel.prototype.serviceSmfCompressionListenPort = undefined;

/**
 * Enable or disable the SMF service. When disabled new SMF Clients may not connect through the global listen-ports, and all currently connected SMF Clients are immediately disconnected. Available since 2.17.
 * @member {Boolean} serviceSmfEnabled
 */
BrokerModel.prototype.serviceSmfEnabled = undefined;

/**
 * @member {module:model/EventThresholdModel} serviceSmfEventConnectionCountThreshold
 */
BrokerModel.prototype.serviceSmfEventConnectionCountThreshold = undefined;

/**
 * TCP port number that SMF clients can use to connect to the broker using raw TCP. Available since 2.17.
 * @member {Number} serviceSmfPlainTextListenPort
 */
BrokerModel.prototype.serviceSmfPlainTextListenPort = undefined;

/**
 * TCP port number that SMF clients can use to connect to the broker using raw routing control TCP. Available since 2.17.
 * @member {Number} serviceSmfRoutingControlListenPort
 */
BrokerModel.prototype.serviceSmfRoutingControlListenPort = undefined;

/**
 * TCP port number that SMF clients can use to connect to the broker using raw TCP over TLS. Available since 2.17.
 * @member {Number} serviceSmfTlsListenPort
 */
BrokerModel.prototype.serviceSmfTlsListenPort = undefined;

/**
 * @member {module:model/EventThresholdModel} serviceTlsEventConnectionCountThreshold
 */
BrokerModel.prototype.serviceTlsEventConnectionCountThreshold = undefined;

/**
 * Enable or disable the web-transport service. When disabled new web-transport Clients may not connect through the global listen-ports, and all currently connected web-transport Clients are immediately disconnected. Available since 2.17.
 * @member {Boolean} serviceWebTransportEnabled
 */
BrokerModel.prototype.serviceWebTransportEnabled = undefined;

/**
 * The TCP port for plain-text WEB client connections. Available since 2.17.
 * @member {Number} serviceWebTransportPlainTextListenPort
 */
BrokerModel.prototype.serviceWebTransportPlainTextListenPort = undefined;

/**
 * The TCP port for TLS WEB client connections. Available since 2.17.
 * @member {Number} serviceWebTransportTlsListenPort
 */
BrokerModel.prototype.serviceWebTransportTlsListenPort = undefined;

/**
 * Used to specify the Web URL suffix that will be used by Web clients when communicating with the broker. Available since 2.17.
 * @member {String} serviceWebTransportWebUrlSuffix
 */
BrokerModel.prototype.serviceWebTransportWebUrlSuffix = undefined;

/**
 * Indicates when the tracing demo will expire or has expired. When the tracing demo expires, tracing becomes inactive. For more details related to terms, demo mode extension, and purchase, please see: https://solace.com/dt-demo-mode. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time). Available since 2.31.
 * @member {Number} telemetryTraceDemoExpiryTime
 */
BrokerModel.prototype.telemetryTraceDemoExpiryTime = undefined;

/**
 * Indicates whether the tracing demo is ready to be activated, active, or inactive. For more details related to the tracing demo, please see: https://solace.com/dt-demo-mode. The allowed values and their meaning are:  <pre> \"active\" - The tracing demo is active. The demo expiry time indicates when tracing will become inactive if tracing is not licensed or the broker is not restarted before then. For more details related to terms, demo mode extension, and purchase, please see: https://solace.com/dt-demo-mode. \"inactive\" - The tracing demo is not active either because tracing is licensed, thereby enabling continuous tracing operation; or the tracing demo mode is not available on this broker. \"inactive-restart-required\" - The tracing demo mode was active, but the expiry time was reached without the installation of a tracing product key or a broker restart. Obtain a license and install the provided product key to enable continuous operation of tracing. Alternatively, restart the broker to reactivate tracing in demo mode. For more details related to terms, demo mode extension, and purchase, please see: https://solace.com/dt-demo-mode. \"ready\" - The broker is capable of providing tracing functionality in demo mode. To activate the demo, simply enable tracing. For more details related to terms, demo mode extension, and purchase, please see: https://solace.com/dt-demo-mode. </pre>  Available since 2.31.
 * @member {String} telemetryTraceDemoState
 */
BrokerModel.prototype.telemetryTraceDemoState = undefined;

/**
 * Indicates whether tracing is licensed, requires a license, or is in demo mode. Installing a tracing product key results in licensed mode. The allowed values and their meaning are:  <pre> \"demo\" - The free tracing demo mode allows for evaluation of tracing before purchasing a license. Please see https://solace.com/dt-demo-mode for more details. \"inactive-license-required\" - A tracing license is required for tracing to become operational. \"licensed\" - A tracing product key has been installed, enabling continuous operation of tracing. </pre>  Available since 2.31.
 * @member {String} telemetryTraceMode
 */
BrokerModel.prototype.telemetryTraceMode = undefined;

/**
 * Indicates whether TLS version 1.1 connections are blocked. When blocked, all existing incoming and outgoing TLS 1.1 connections with Clients, SEMP users, and LDAP servers remain connected while new connections are blocked. Note that support for TLS 1.1 will eventually be discontinued, at which time TLS 1.1 connections will be blocked regardless of this setting.
 * @member {Boolean} tlsBlockVersion11Enabled
 */
BrokerModel.prototype.tlsBlockVersion11Enabled = undefined;

/**
 * The colon-separated list of default cipher suites for TLS management connections.
 * @member {String} tlsCipherSuiteManagementDefaultList
 */
BrokerModel.prototype.tlsCipherSuiteManagementDefaultList = undefined;

/**
 * The colon-separated list of cipher suites used for TLS management connections (e.g. SEMP, LDAP). The value \"default\" implies all supported suites ordered from most secure to least secure.
 * @member {String} tlsCipherSuiteManagementList
 */
BrokerModel.prototype.tlsCipherSuiteManagementList = undefined;

/**
 * The colon-separated list of supported cipher suites for TLS management connections.
 * @member {String} tlsCipherSuiteManagementSupportedList
 */
BrokerModel.prototype.tlsCipherSuiteManagementSupportedList = undefined;

/**
 * The colon-separated list of default cipher suites for TLS data connections.
 * @member {String} tlsCipherSuiteMsgBackboneDefaultList
 */
BrokerModel.prototype.tlsCipherSuiteMsgBackboneDefaultList = undefined;

/**
 * The colon-separated list of cipher suites used for TLS data connections (e.g. client pub/sub). The value \"default\" implies all supported suites ordered from most secure to least secure.
 * @member {String} tlsCipherSuiteMsgBackboneList
 */
BrokerModel.prototype.tlsCipherSuiteMsgBackboneList = undefined;

/**
 * The colon-separated list of supported cipher suites for TLS data connections.
 * @member {String} tlsCipherSuiteMsgBackboneSupportedList
 */
BrokerModel.prototype.tlsCipherSuiteMsgBackboneSupportedList = undefined;

/**
 * The colon-separated list of default cipher suites for TLS secure shell connections.
 * @member {String} tlsCipherSuiteSecureShellDefaultList
 */
BrokerModel.prototype.tlsCipherSuiteSecureShellDefaultList = undefined;

/**
 * The colon-separated list of cipher suites used for TLS secure shell connections (e.g. SSH, SFTP, SCP). The value \"default\" implies all supported suites ordered from most secure to least secure.
 * @member {String} tlsCipherSuiteSecureShellList
 */
BrokerModel.prototype.tlsCipherSuiteSecureShellList = undefined;

/**
 * The colon-separated list of supported cipher suites for TLS secure shell connections.
 * @member {String} tlsCipherSuiteSecureShellSupportedList
 */
BrokerModel.prototype.tlsCipherSuiteSecureShellSupportedList = undefined;

/**
 * Indicates whether protection against the CRIME exploit is enabled. When enabled, TLS+compressed messaging performance is degraded. This protection should only be disabled if sufficient ACL and authentication features are being employed such that a potential attacker does not have sufficient access to trigger the exploit.
 * @member {Boolean} tlsCrimeExploitProtectionEnabled
 */
BrokerModel.prototype.tlsCrimeExploitProtectionEnabled = undefined;

/**
 * Enable or disable the standard domain certificate authority list. Available since 2.19.
 * @member {Boolean} tlsStandardDomainCertificateAuthoritiesEnabled
 */
BrokerModel.prototype.tlsStandardDomainCertificateAuthoritiesEnabled = undefined;

/**
 * The TLS ticket lifetime in seconds. When a client connects with TLS, a session with a session ticket is created using the TLS ticket lifetime which determines how long the client has to resume the session.
 * @member {Number} tlsTicketLifetime
 */
BrokerModel.prototype.tlsTicketLifetime = undefined;

/**
 * The comma-separated list of supported TLS versions.
 * @member {String} tlsVersionSupportedList
 */
BrokerModel.prototype.tlsVersionSupportedList = undefined;

/**
 * The amount of messages transmitted to clients by the Broker, in bytes (B). Available since 2.14.
 * @member {Number} txByteCount
 */
BrokerModel.prototype.txByteCount = undefined;

/**
 * The current message rate transmitted by the Broker, in bytes per second (B/sec). Available since 2.14.
 * @member {Number} txByteRate
 */
BrokerModel.prototype.txByteRate = undefined;

/**
 * The amount of compressed messages transmitted by the Broker, in bytes (B). Available since 2.14.
 * @member {Number} txCompressedByteCount
 */
BrokerModel.prototype.txCompressedByteCount = undefined;

/**
 * The current compressed message rate transmitted by the Broker, in bytes per second (B/sec). Available since 2.14.
 * @member {Number} txCompressedByteRate
 */
BrokerModel.prototype.txCompressedByteRate = undefined;

/**
 * The compression ratio for messages transmitted by the Broker. Available since 2.14.
 * @member {String} txCompressionRatio
 */
BrokerModel.prototype.txCompressionRatio = undefined;

/**
 * The number of messages transmitted to clients by the Broker. Available since 2.14.
 * @member {Number} txMsgCount
 */
BrokerModel.prototype.txMsgCount = undefined;

/**
 * The current message rate transmitted by the Broker, in messages per second (msg/sec). Available since 2.14.
 * @member {Number} txMsgRate
 */
BrokerModel.prototype.txMsgRate = undefined;

/**
 * The amount of uncompressed messages transmitted by the Broker, in bytes (B). Available since 2.14.
 * @member {Number} txUncompressedByteCount
 */
BrokerModel.prototype.txUncompressedByteCount = undefined;

/**
 * The current uncompressed message rate transmitted by the Broker, in bytes per second (B/sec). Available since 2.14.
 * @member {Number} txUncompressedByteRate
 */
BrokerModel.prototype.txUncompressedByteRate = undefined;

/**
 * The version of the broker. Available since 2.29.
 * @member {String} version
 */
BrokerModel.prototype.version = undefined;

/**
 * Enable or disable the use of unencrypted wizards in the Web-based Manager UI. This setting should be left at its default on all production systems or other systems that need to be secure.  Enabling this option will permit the broker to forward plain-text data to other brokers, making important information or credentials available for snooping. Available since 2.28.
 * @member {Boolean} webManagerAllowUnencryptedWizardsEnabled
 */
BrokerModel.prototype.webManagerAllowUnencryptedWizardsEnabled = undefined;

/**
 * Reserved for internal use by Solace. Available since 2.25.
 * @member {String} webManagerCustomization
 */
BrokerModel.prototype.webManagerCustomization = undefined;

/**
 * Enable or disable redirection of HTTP requests for the broker manager to HTTPS. Available since 2.24.
 * @member {Boolean} webManagerRedirectHttpEnabled
 */
BrokerModel.prototype.webManagerRedirectHttpEnabled = undefined;

/**
 * The reason for the last transition to a \"Down\" operational status. On transitions to the \"Up\" operational status this value is cleared. Available since 2.24.
 * @member {String} webManagerRedirectHttpLastFailureReason
 */
BrokerModel.prototype.webManagerRedirectHttpLastFailureReason = undefined;

/**
 * The HTTPS port that HTTP requests will be redirected towards in a HTTP 301 redirect response. Zero is a special value that means use the value specified for the SEMP TLS port value. Available since 2.24.
 * @member {Number} webManagerRedirectHttpOverrideTlsPort
 */
BrokerModel.prototype.webManagerRedirectHttpOverrideTlsPort = undefined;

/**
 * Indicates whether the HTTP redirects will operationally occur. \"True\" indicates the facility is Up and redirects will occur, otherwise it is Down. When \"False\" the webManagerRedirectHttpLastFailureReason will provide further detail. Available since 2.24.
 * @member {Boolean} webManagerRedirectHttpUp
 */
BrokerModel.prototype.webManagerRedirectHttpUp = undefined;

