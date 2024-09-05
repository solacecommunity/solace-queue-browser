import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnLinksModel model module.
 * @module model/MsgVpnLinksModel
 * @version 2.36
 */
export class MsgVpnLinksModel {
  /**
   * Constructs a new <code>MsgVpnLinksModel</code>.
   * @alias module:model/MsgVpnLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnLinksModel} The populated <code>MsgVpnLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnLinksModel();
      if (data.hasOwnProperty('aclProfilesUri'))
        obj.aclProfilesUri = ApiClient.convertToType(data['aclProfilesUri'], 'String');
      if (data.hasOwnProperty('authenticationOauthProfilesUri'))
        obj.authenticationOauthProfilesUri = ApiClient.convertToType(data['authenticationOauthProfilesUri'], 'String');
      if (data.hasOwnProperty('authenticationOauthProvidersUri'))
        obj.authenticationOauthProvidersUri = ApiClient.convertToType(data['authenticationOauthProvidersUri'], 'String');
      if (data.hasOwnProperty('authorizationGroupsUri'))
        obj.authorizationGroupsUri = ApiClient.convertToType(data['authorizationGroupsUri'], 'String');
      if (data.hasOwnProperty('bridgesUri'))
        obj.bridgesUri = ApiClient.convertToType(data['bridgesUri'], 'String');
      if (data.hasOwnProperty('certMatchingRulesUri'))
        obj.certMatchingRulesUri = ApiClient.convertToType(data['certMatchingRulesUri'], 'String');
      if (data.hasOwnProperty('clientProfilesUri'))
        obj.clientProfilesUri = ApiClient.convertToType(data['clientProfilesUri'], 'String');
      if (data.hasOwnProperty('clientUsernamesUri'))
        obj.clientUsernamesUri = ApiClient.convertToType(data['clientUsernamesUri'], 'String');
      if (data.hasOwnProperty('clientsUri'))
        obj.clientsUri = ApiClient.convertToType(data['clientsUri'], 'String');
      if (data.hasOwnProperty('configSyncRemoteNodesUri'))
        obj.configSyncRemoteNodesUri = ApiClient.convertToType(data['configSyncRemoteNodesUri'], 'String');
      if (data.hasOwnProperty('distributedCachesUri'))
        obj.distributedCachesUri = ApiClient.convertToType(data['distributedCachesUri'], 'String');
      if (data.hasOwnProperty('dmrBridgesUri'))
        obj.dmrBridgesUri = ApiClient.convertToType(data['dmrBridgesUri'], 'String');
      if (data.hasOwnProperty('jndiConnectionFactoriesUri'))
        obj.jndiConnectionFactoriesUri = ApiClient.convertToType(data['jndiConnectionFactoriesUri'], 'String');
      if (data.hasOwnProperty('jndiQueuesUri'))
        obj.jndiQueuesUri = ApiClient.convertToType(data['jndiQueuesUri'], 'String');
      if (data.hasOwnProperty('jndiTopicsUri'))
        obj.jndiTopicsUri = ApiClient.convertToType(data['jndiTopicsUri'], 'String');
      if (data.hasOwnProperty('kafkaReceiversUri'))
        obj.kafkaReceiversUri = ApiClient.convertToType(data['kafkaReceiversUri'], 'String');
      if (data.hasOwnProperty('kafkaSendersUri'))
        obj.kafkaSendersUri = ApiClient.convertToType(data['kafkaSendersUri'], 'String');
      if (data.hasOwnProperty('mqttRetainCachesUri'))
        obj.mqttRetainCachesUri = ApiClient.convertToType(data['mqttRetainCachesUri'], 'String');
      if (data.hasOwnProperty('mqttSessionsUri'))
        obj.mqttSessionsUri = ApiClient.convertToType(data['mqttSessionsUri'], 'String');
      if (data.hasOwnProperty('proxiesUri'))
        obj.proxiesUri = ApiClient.convertToType(data['proxiesUri'], 'String');
      if (data.hasOwnProperty('queueTemplatesUri'))
        obj.queueTemplatesUri = ApiClient.convertToType(data['queueTemplatesUri'], 'String');
      if (data.hasOwnProperty('queuesUri'))
        obj.queuesUri = ApiClient.convertToType(data['queuesUri'], 'String');
      if (data.hasOwnProperty('replayLogsUri'))
        obj.replayLogsUri = ApiClient.convertToType(data['replayLogsUri'], 'String');
      if (data.hasOwnProperty('replicatedTopicsUri'))
        obj.replicatedTopicsUri = ApiClient.convertToType(data['replicatedTopicsUri'], 'String');
      if (data.hasOwnProperty('restDeliveryPointsUri'))
        obj.restDeliveryPointsUri = ApiClient.convertToType(data['restDeliveryPointsUri'], 'String');
      if (data.hasOwnProperty('telemetryProfilesUri'))
        obj.telemetryProfilesUri = ApiClient.convertToType(data['telemetryProfilesUri'], 'String');
      if (data.hasOwnProperty('topicEndpointTemplatesUri'))
        obj.topicEndpointTemplatesUri = ApiClient.convertToType(data['topicEndpointTemplatesUri'], 'String');
      if (data.hasOwnProperty('topicEndpointsUri'))
        obj.topicEndpointsUri = ApiClient.convertToType(data['topicEndpointsUri'], 'String');
      if (data.hasOwnProperty('transactionsUri'))
        obj.transactionsUri = ApiClient.convertToType(data['transactionsUri'], 'String');
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Message VPN's collection of ACL Profile objects.
 * @member {String} aclProfilesUri
 */
MsgVpnLinksModel.prototype.aclProfilesUri = undefined;

/**
 * The URI of this Message VPN's collection of OAuth Profile objects. Available since 2.25.
 * @member {String} authenticationOauthProfilesUri
 */
MsgVpnLinksModel.prototype.authenticationOauthProfilesUri = undefined;

/**
 * The URI of this Message VPN's collection of OAuth Provider objects. Deprecated since 2.25. Replaced by authenticationOauthProfiles.
 * @member {String} authenticationOauthProvidersUri
 */
MsgVpnLinksModel.prototype.authenticationOauthProvidersUri = undefined;

/**
 * The URI of this Message VPN's collection of Authorization Group objects.
 * @member {String} authorizationGroupsUri
 */
MsgVpnLinksModel.prototype.authorizationGroupsUri = undefined;

/**
 * The URI of this Message VPN's collection of Bridge objects.
 * @member {String} bridgesUri
 */
MsgVpnLinksModel.prototype.bridgesUri = undefined;

/**
 * The URI of this Message VPN's collection of Certificate Matching Rule objects. Available since 2.27.
 * @member {String} certMatchingRulesUri
 */
MsgVpnLinksModel.prototype.certMatchingRulesUri = undefined;

/**
 * The URI of this Message VPN's collection of Client Profile objects.
 * @member {String} clientProfilesUri
 */
MsgVpnLinksModel.prototype.clientProfilesUri = undefined;

/**
 * The URI of this Message VPN's collection of Client Username objects.
 * @member {String} clientUsernamesUri
 */
MsgVpnLinksModel.prototype.clientUsernamesUri = undefined;

/**
 * The URI of this Message VPN's collection of Client objects. Available since 2.12.
 * @member {String} clientsUri
 */
MsgVpnLinksModel.prototype.clientsUri = undefined;

/**
 * The URI of this Message VPN's collection of Config Sync Remote Node objects. Deprecated since 2.22. This attribute has been deprecated.
 * @member {String} configSyncRemoteNodesUri
 */
MsgVpnLinksModel.prototype.configSyncRemoteNodesUri = undefined;

/**
 * The URI of this Message VPN's collection of Distributed Cache objects.
 * @member {String} distributedCachesUri
 */
MsgVpnLinksModel.prototype.distributedCachesUri = undefined;

/**
 * The URI of this Message VPN's collection of DMR Bridge objects.
 * @member {String} dmrBridgesUri
 */
MsgVpnLinksModel.prototype.dmrBridgesUri = undefined;

/**
 * The URI of this Message VPN's collection of JNDI Connection Factory objects.
 * @member {String} jndiConnectionFactoriesUri
 */
MsgVpnLinksModel.prototype.jndiConnectionFactoriesUri = undefined;

/**
 * The URI of this Message VPN's collection of JNDI Queue objects.
 * @member {String} jndiQueuesUri
 */
MsgVpnLinksModel.prototype.jndiQueuesUri = undefined;

/**
 * The URI of this Message VPN's collection of JNDI Topic objects.
 * @member {String} jndiTopicsUri
 */
MsgVpnLinksModel.prototype.jndiTopicsUri = undefined;

/**
 * The URI of this Message VPN's collection of Kafka Receiver objects. Available since 2.36.
 * @member {String} kafkaReceiversUri
 */
MsgVpnLinksModel.prototype.kafkaReceiversUri = undefined;

/**
 * The URI of this Message VPN's collection of Kafka Sender objects. Available since 2.36.
 * @member {String} kafkaSendersUri
 */
MsgVpnLinksModel.prototype.kafkaSendersUri = undefined;

/**
 * The URI of this Message VPN's collection of MQTT Retain Cache objects.
 * @member {String} mqttRetainCachesUri
 */
MsgVpnLinksModel.prototype.mqttRetainCachesUri = undefined;

/**
 * The URI of this Message VPN's collection of MQTT Session objects.
 * @member {String} mqttSessionsUri
 */
MsgVpnLinksModel.prototype.mqttSessionsUri = undefined;

/**
 * The URI of this Message VPN's collection of Proxy objects. Available since 2.36.
 * @member {String} proxiesUri
 */
MsgVpnLinksModel.prototype.proxiesUri = undefined;

/**
 * The URI of this Message VPN's collection of Queue Template objects. Available since 2.14.
 * @member {String} queueTemplatesUri
 */
MsgVpnLinksModel.prototype.queueTemplatesUri = undefined;

/**
 * The URI of this Message VPN's collection of Queue objects. Available since 2.12.
 * @member {String} queuesUri
 */
MsgVpnLinksModel.prototype.queuesUri = undefined;

/**
 * The URI of this Message VPN's collection of Replay Log objects.
 * @member {String} replayLogsUri
 */
MsgVpnLinksModel.prototype.replayLogsUri = undefined;

/**
 * The URI of this Message VPN's collection of Replicated Topic objects. Available since 2.12.
 * @member {String} replicatedTopicsUri
 */
MsgVpnLinksModel.prototype.replicatedTopicsUri = undefined;

/**
 * The URI of this Message VPN's collection of REST Delivery Point objects.
 * @member {String} restDeliveryPointsUri
 */
MsgVpnLinksModel.prototype.restDeliveryPointsUri = undefined;

/**
 * The URI of this Message VPN's collection of Telemetry Profile objects. Available since 2.31.
 * @member {String} telemetryProfilesUri
 */
MsgVpnLinksModel.prototype.telemetryProfilesUri = undefined;

/**
 * The URI of this Message VPN's collection of Topic Endpoint Template objects. Available since 2.14.
 * @member {String} topicEndpointTemplatesUri
 */
MsgVpnLinksModel.prototype.topicEndpointTemplatesUri = undefined;

/**
 * The URI of this Message VPN's collection of Topic Endpoint objects. Available since 2.12.
 * @member {String} topicEndpointsUri
 */
MsgVpnLinksModel.prototype.topicEndpointsUri = undefined;

/**
 * The URI of this Message VPN's collection of Replicated Local Transaction or XA Transaction objects. Available since 2.12.
 * @member {String} transactionsUri
 */
MsgVpnLinksModel.prototype.transactionsUri = undefined;

/**
 * The URI of this Message VPN object.
 * @member {String} uri
 */
MsgVpnLinksModel.prototype.uri = undefined;

