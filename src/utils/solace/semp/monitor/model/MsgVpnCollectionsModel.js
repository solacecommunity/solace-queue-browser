import {ApiClient} from '../ApiClient';
import {MsgVpnCollectionsAclProfilesModel} from './MsgVpnCollectionsAclProfilesModel';
import {MsgVpnCollectionsAuthenticationOauthProfilesModel} from './MsgVpnCollectionsAuthenticationOauthProfilesModel';
import {MsgVpnCollectionsAuthenticationOauthProvidersModel} from './MsgVpnCollectionsAuthenticationOauthProvidersModel';
import {MsgVpnCollectionsAuthorizationGroupsModel} from './MsgVpnCollectionsAuthorizationGroupsModel';
import {MsgVpnCollectionsBridgesModel} from './MsgVpnCollectionsBridgesModel';
import {MsgVpnCollectionsCertMatchingRulesModel} from './MsgVpnCollectionsCertMatchingRulesModel';
import {MsgVpnCollectionsClientProfilesModel} from './MsgVpnCollectionsClientProfilesModel';
import {MsgVpnCollectionsClientUsernamesModel} from './MsgVpnCollectionsClientUsernamesModel';
import {MsgVpnCollectionsClientsModel} from './MsgVpnCollectionsClientsModel';
import {MsgVpnCollectionsConfigSyncRemoteNodesModel} from './MsgVpnCollectionsConfigSyncRemoteNodesModel';
import {MsgVpnCollectionsDistributedCachesModel} from './MsgVpnCollectionsDistributedCachesModel';
import {MsgVpnCollectionsDmrBridgesModel} from './MsgVpnCollectionsDmrBridgesModel';
import {MsgVpnCollectionsJndiConnectionFactoriesModel} from './MsgVpnCollectionsJndiConnectionFactoriesModel';
import {MsgVpnCollectionsJndiQueuesModel} from './MsgVpnCollectionsJndiQueuesModel';
import {MsgVpnCollectionsJndiTopicsModel} from './MsgVpnCollectionsJndiTopicsModel';
import {MsgVpnCollectionsKafkaReceiversModel} from './MsgVpnCollectionsKafkaReceiversModel';
import {MsgVpnCollectionsKafkaSendersModel} from './MsgVpnCollectionsKafkaSendersModel';
import {MsgVpnCollectionsMqttRetainCachesModel} from './MsgVpnCollectionsMqttRetainCachesModel';
import {MsgVpnCollectionsMqttSessionsModel} from './MsgVpnCollectionsMqttSessionsModel';
import {MsgVpnCollectionsProxiesModel} from './MsgVpnCollectionsProxiesModel';
import {MsgVpnCollectionsQueueTemplatesModel} from './MsgVpnCollectionsQueueTemplatesModel';
import {MsgVpnCollectionsQueuesModel} from './MsgVpnCollectionsQueuesModel';
import {MsgVpnCollectionsReplayLogsModel} from './MsgVpnCollectionsReplayLogsModel';
import {MsgVpnCollectionsReplicatedTopicsModel} from './MsgVpnCollectionsReplicatedTopicsModel';
import {MsgVpnCollectionsRestDeliveryPointsModel} from './MsgVpnCollectionsRestDeliveryPointsModel';
import {MsgVpnCollectionsTelemetryProfilesModel} from './MsgVpnCollectionsTelemetryProfilesModel';
import {MsgVpnCollectionsTopicEndpointTemplatesModel} from './MsgVpnCollectionsTopicEndpointTemplatesModel';
import {MsgVpnCollectionsTopicEndpointsModel} from './MsgVpnCollectionsTopicEndpointsModel';
import {MsgVpnCollectionsTransactionsModel} from './MsgVpnCollectionsTransactionsModel';

/**
 * The MsgVpnCollectionsModel model module.
 * @module model/MsgVpnCollectionsModel
 * @version 2.36
 */
export class MsgVpnCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnCollectionsModel</code>.
   * @alias module:model/MsgVpnCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCollectionsModel} The populated <code>MsgVpnCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCollectionsModel();
      if (data.hasOwnProperty('aclProfiles'))
        obj.aclProfiles = MsgVpnCollectionsAclProfilesModel.constructFromObject(data['aclProfiles']);
      if (data.hasOwnProperty('authenticationOauthProfiles'))
        obj.authenticationOauthProfiles = MsgVpnCollectionsAuthenticationOauthProfilesModel.constructFromObject(data['authenticationOauthProfiles']);
      if (data.hasOwnProperty('authenticationOauthProviders'))
        obj.authenticationOauthProviders = MsgVpnCollectionsAuthenticationOauthProvidersModel.constructFromObject(data['authenticationOauthProviders']);
      if (data.hasOwnProperty('authorizationGroups'))
        obj.authorizationGroups = MsgVpnCollectionsAuthorizationGroupsModel.constructFromObject(data['authorizationGroups']);
      if (data.hasOwnProperty('bridges'))
        obj.bridges = MsgVpnCollectionsBridgesModel.constructFromObject(data['bridges']);
      if (data.hasOwnProperty('certMatchingRules'))
        obj.certMatchingRules = MsgVpnCollectionsCertMatchingRulesModel.constructFromObject(data['certMatchingRules']);
      if (data.hasOwnProperty('clientProfiles'))
        obj.clientProfiles = MsgVpnCollectionsClientProfilesModel.constructFromObject(data['clientProfiles']);
      if (data.hasOwnProperty('clientUsernames'))
        obj.clientUsernames = MsgVpnCollectionsClientUsernamesModel.constructFromObject(data['clientUsernames']);
      if (data.hasOwnProperty('clients'))
        obj.clients = MsgVpnCollectionsClientsModel.constructFromObject(data['clients']);
      if (data.hasOwnProperty('configSyncRemoteNodes'))
        obj.configSyncRemoteNodes = MsgVpnCollectionsConfigSyncRemoteNodesModel.constructFromObject(data['configSyncRemoteNodes']);
      if (data.hasOwnProperty('distributedCaches'))
        obj.distributedCaches = MsgVpnCollectionsDistributedCachesModel.constructFromObject(data['distributedCaches']);
      if (data.hasOwnProperty('dmrBridges'))
        obj.dmrBridges = MsgVpnCollectionsDmrBridgesModel.constructFromObject(data['dmrBridges']);
      if (data.hasOwnProperty('jndiConnectionFactories'))
        obj.jndiConnectionFactories = MsgVpnCollectionsJndiConnectionFactoriesModel.constructFromObject(data['jndiConnectionFactories']);
      if (data.hasOwnProperty('jndiQueues'))
        obj.jndiQueues = MsgVpnCollectionsJndiQueuesModel.constructFromObject(data['jndiQueues']);
      if (data.hasOwnProperty('jndiTopics'))
        obj.jndiTopics = MsgVpnCollectionsJndiTopicsModel.constructFromObject(data['jndiTopics']);
      if (data.hasOwnProperty('kafkaReceivers'))
        obj.kafkaReceivers = MsgVpnCollectionsKafkaReceiversModel.constructFromObject(data['kafkaReceivers']);
      if (data.hasOwnProperty('kafkaSenders'))
        obj.kafkaSenders = MsgVpnCollectionsKafkaSendersModel.constructFromObject(data['kafkaSenders']);
      if (data.hasOwnProperty('mqttRetainCaches'))
        obj.mqttRetainCaches = MsgVpnCollectionsMqttRetainCachesModel.constructFromObject(data['mqttRetainCaches']);
      if (data.hasOwnProperty('mqttSessions'))
        obj.mqttSessions = MsgVpnCollectionsMqttSessionsModel.constructFromObject(data['mqttSessions']);
      if (data.hasOwnProperty('proxies'))
        obj.proxies = MsgVpnCollectionsProxiesModel.constructFromObject(data['proxies']);
      if (data.hasOwnProperty('queueTemplates'))
        obj.queueTemplates = MsgVpnCollectionsQueueTemplatesModel.constructFromObject(data['queueTemplates']);
      if (data.hasOwnProperty('queues'))
        obj.queues = MsgVpnCollectionsQueuesModel.constructFromObject(data['queues']);
      if (data.hasOwnProperty('replayLogs'))
        obj.replayLogs = MsgVpnCollectionsReplayLogsModel.constructFromObject(data['replayLogs']);
      if (data.hasOwnProperty('replicatedTopics'))
        obj.replicatedTopics = MsgVpnCollectionsReplicatedTopicsModel.constructFromObject(data['replicatedTopics']);
      if (data.hasOwnProperty('restDeliveryPoints'))
        obj.restDeliveryPoints = MsgVpnCollectionsRestDeliveryPointsModel.constructFromObject(data['restDeliveryPoints']);
      if (data.hasOwnProperty('telemetryProfiles'))
        obj.telemetryProfiles = MsgVpnCollectionsTelemetryProfilesModel.constructFromObject(data['telemetryProfiles']);
      if (data.hasOwnProperty('topicEndpointTemplates'))
        obj.topicEndpointTemplates = MsgVpnCollectionsTopicEndpointTemplatesModel.constructFromObject(data['topicEndpointTemplates']);
      if (data.hasOwnProperty('topicEndpoints'))
        obj.topicEndpoints = MsgVpnCollectionsTopicEndpointsModel.constructFromObject(data['topicEndpoints']);
      if (data.hasOwnProperty('transactions'))
        obj.transactions = MsgVpnCollectionsTransactionsModel.constructFromObject(data['transactions']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnCollectionsAclProfilesModel} aclProfiles
 */
MsgVpnCollectionsModel.prototype.aclProfiles = undefined;

/**
 * @member {module:model/MsgVpnCollectionsAuthenticationOauthProfilesModel} authenticationOauthProfiles
 */
MsgVpnCollectionsModel.prototype.authenticationOauthProfiles = undefined;

/**
 * @member {module:model/MsgVpnCollectionsAuthenticationOauthProvidersModel} authenticationOauthProviders
 */
MsgVpnCollectionsModel.prototype.authenticationOauthProviders = undefined;

/**
 * @member {module:model/MsgVpnCollectionsAuthorizationGroupsModel} authorizationGroups
 */
MsgVpnCollectionsModel.prototype.authorizationGroups = undefined;

/**
 * @member {module:model/MsgVpnCollectionsBridgesModel} bridges
 */
MsgVpnCollectionsModel.prototype.bridges = undefined;

/**
 * @member {module:model/MsgVpnCollectionsCertMatchingRulesModel} certMatchingRules
 */
MsgVpnCollectionsModel.prototype.certMatchingRules = undefined;

/**
 * @member {module:model/MsgVpnCollectionsClientProfilesModel} clientProfiles
 */
MsgVpnCollectionsModel.prototype.clientProfiles = undefined;

/**
 * @member {module:model/MsgVpnCollectionsClientUsernamesModel} clientUsernames
 */
MsgVpnCollectionsModel.prototype.clientUsernames = undefined;

/**
 * @member {module:model/MsgVpnCollectionsClientsModel} clients
 */
MsgVpnCollectionsModel.prototype.clients = undefined;

/**
 * @member {module:model/MsgVpnCollectionsConfigSyncRemoteNodesModel} configSyncRemoteNodes
 */
MsgVpnCollectionsModel.prototype.configSyncRemoteNodes = undefined;

/**
 * @member {module:model/MsgVpnCollectionsDistributedCachesModel} distributedCaches
 */
MsgVpnCollectionsModel.prototype.distributedCaches = undefined;

/**
 * @member {module:model/MsgVpnCollectionsDmrBridgesModel} dmrBridges
 */
MsgVpnCollectionsModel.prototype.dmrBridges = undefined;

/**
 * @member {module:model/MsgVpnCollectionsJndiConnectionFactoriesModel} jndiConnectionFactories
 */
MsgVpnCollectionsModel.prototype.jndiConnectionFactories = undefined;

/**
 * @member {module:model/MsgVpnCollectionsJndiQueuesModel} jndiQueues
 */
MsgVpnCollectionsModel.prototype.jndiQueues = undefined;

/**
 * @member {module:model/MsgVpnCollectionsJndiTopicsModel} jndiTopics
 */
MsgVpnCollectionsModel.prototype.jndiTopics = undefined;

/**
 * @member {module:model/MsgVpnCollectionsKafkaReceiversModel} kafkaReceivers
 */
MsgVpnCollectionsModel.prototype.kafkaReceivers = undefined;

/**
 * @member {module:model/MsgVpnCollectionsKafkaSendersModel} kafkaSenders
 */
MsgVpnCollectionsModel.prototype.kafkaSenders = undefined;

/**
 * @member {module:model/MsgVpnCollectionsMqttRetainCachesModel} mqttRetainCaches
 */
MsgVpnCollectionsModel.prototype.mqttRetainCaches = undefined;

/**
 * @member {module:model/MsgVpnCollectionsMqttSessionsModel} mqttSessions
 */
MsgVpnCollectionsModel.prototype.mqttSessions = undefined;

/**
 * @member {module:model/MsgVpnCollectionsProxiesModel} proxies
 */
MsgVpnCollectionsModel.prototype.proxies = undefined;

/**
 * @member {module:model/MsgVpnCollectionsQueueTemplatesModel} queueTemplates
 */
MsgVpnCollectionsModel.prototype.queueTemplates = undefined;

/**
 * @member {module:model/MsgVpnCollectionsQueuesModel} queues
 */
MsgVpnCollectionsModel.prototype.queues = undefined;

/**
 * @member {module:model/MsgVpnCollectionsReplayLogsModel} replayLogs
 */
MsgVpnCollectionsModel.prototype.replayLogs = undefined;

/**
 * @member {module:model/MsgVpnCollectionsReplicatedTopicsModel} replicatedTopics
 */
MsgVpnCollectionsModel.prototype.replicatedTopics = undefined;

/**
 * @member {module:model/MsgVpnCollectionsRestDeliveryPointsModel} restDeliveryPoints
 */
MsgVpnCollectionsModel.prototype.restDeliveryPoints = undefined;

/**
 * @member {module:model/MsgVpnCollectionsTelemetryProfilesModel} telemetryProfiles
 */
MsgVpnCollectionsModel.prototype.telemetryProfiles = undefined;

/**
 * @member {module:model/MsgVpnCollectionsTopicEndpointTemplatesModel} topicEndpointTemplates
 */
MsgVpnCollectionsModel.prototype.topicEndpointTemplates = undefined;

/**
 * @member {module:model/MsgVpnCollectionsTopicEndpointsModel} topicEndpoints
 */
MsgVpnCollectionsModel.prototype.topicEndpoints = undefined;

/**
 * @member {module:model/MsgVpnCollectionsTransactionsModel} transactions
 */
MsgVpnCollectionsModel.prototype.transactions = undefined;

