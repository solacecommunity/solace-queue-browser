import {ApiClient} from '../ApiClient';
import {BrokerCollectionsCertAuthoritiesModel} from './BrokerCollectionsCertAuthoritiesModel';
import {BrokerCollectionsClientCertAuthoritiesModel} from './BrokerCollectionsClientCertAuthoritiesModel';
import {BrokerCollectionsConfigSyncLocalDatabaseRowsModel} from './BrokerCollectionsConfigSyncLocalDatabaseRowsModel';
import {BrokerCollectionsDmrClustersModel} from './BrokerCollectionsDmrClustersModel';
import {BrokerCollectionsDomainCertAuthoritiesModel} from './BrokerCollectionsDomainCertAuthoritiesModel';
import {BrokerCollectionsMsgVpnsModel} from './BrokerCollectionsMsgVpnsModel';
import {BrokerCollectionsOauthProfilesModel} from './BrokerCollectionsOauthProfilesModel';
import {BrokerCollectionsSessionsModel} from './BrokerCollectionsSessionsModel';
import {BrokerCollectionsStandardDomainCertAuthoritiesModel} from './BrokerCollectionsStandardDomainCertAuthoritiesModel';
import {BrokerCollectionsVirtualHostnamesModel} from './BrokerCollectionsVirtualHostnamesModel';

/**
 * The BrokerCollectionsModel model module.
 * @module model/BrokerCollectionsModel
 * @version 2.36
 */
export class BrokerCollectionsModel {
  /**
   * Constructs a new <code>BrokerCollectionsModel</code>.
   * @alias module:model/BrokerCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BrokerCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BrokerCollectionsModel} obj Optional instance to populate.
   * @return {module:model/BrokerCollectionsModel} The populated <code>BrokerCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BrokerCollectionsModel();
      if (data.hasOwnProperty('certAuthorities'))
        obj.certAuthorities = BrokerCollectionsCertAuthoritiesModel.constructFromObject(data['certAuthorities']);
      if (data.hasOwnProperty('clientCertAuthorities'))
        obj.clientCertAuthorities = BrokerCollectionsClientCertAuthoritiesModel.constructFromObject(data['clientCertAuthorities']);
      if (data.hasOwnProperty('configSyncLocalDatabaseRows'))
        obj.configSyncLocalDatabaseRows = BrokerCollectionsConfigSyncLocalDatabaseRowsModel.constructFromObject(data['configSyncLocalDatabaseRows']);
      if (data.hasOwnProperty('dmrClusters'))
        obj.dmrClusters = BrokerCollectionsDmrClustersModel.constructFromObject(data['dmrClusters']);
      if (data.hasOwnProperty('domainCertAuthorities'))
        obj.domainCertAuthorities = BrokerCollectionsDomainCertAuthoritiesModel.constructFromObject(data['domainCertAuthorities']);
      if (data.hasOwnProperty('msgVpns'))
        obj.msgVpns = BrokerCollectionsMsgVpnsModel.constructFromObject(data['msgVpns']);
      if (data.hasOwnProperty('oauthProfiles'))
        obj.oauthProfiles = BrokerCollectionsOauthProfilesModel.constructFromObject(data['oauthProfiles']);
      if (data.hasOwnProperty('sessions'))
        obj.sessions = BrokerCollectionsSessionsModel.constructFromObject(data['sessions']);
      if (data.hasOwnProperty('standardDomainCertAuthorities'))
        obj.standardDomainCertAuthorities = BrokerCollectionsStandardDomainCertAuthoritiesModel.constructFromObject(data['standardDomainCertAuthorities']);
      if (data.hasOwnProperty('virtualHostnames'))
        obj.virtualHostnames = BrokerCollectionsVirtualHostnamesModel.constructFromObject(data['virtualHostnames']);
    }
    return obj;
  }
}

/**
 * @member {module:model/BrokerCollectionsCertAuthoritiesModel} certAuthorities
 */
BrokerCollectionsModel.prototype.certAuthorities = undefined;

/**
 * @member {module:model/BrokerCollectionsClientCertAuthoritiesModel} clientCertAuthorities
 */
BrokerCollectionsModel.prototype.clientCertAuthorities = undefined;

/**
 * @member {module:model/BrokerCollectionsConfigSyncLocalDatabaseRowsModel} configSyncLocalDatabaseRows
 */
BrokerCollectionsModel.prototype.configSyncLocalDatabaseRows = undefined;

/**
 * @member {module:model/BrokerCollectionsDmrClustersModel} dmrClusters
 */
BrokerCollectionsModel.prototype.dmrClusters = undefined;

/**
 * @member {module:model/BrokerCollectionsDomainCertAuthoritiesModel} domainCertAuthorities
 */
BrokerCollectionsModel.prototype.domainCertAuthorities = undefined;

/**
 * @member {module:model/BrokerCollectionsMsgVpnsModel} msgVpns
 */
BrokerCollectionsModel.prototype.msgVpns = undefined;

/**
 * @member {module:model/BrokerCollectionsOauthProfilesModel} oauthProfiles
 */
BrokerCollectionsModel.prototype.oauthProfiles = undefined;

/**
 * @member {module:model/BrokerCollectionsSessionsModel} sessions
 */
BrokerCollectionsModel.prototype.sessions = undefined;

/**
 * @member {module:model/BrokerCollectionsStandardDomainCertAuthoritiesModel} standardDomainCertAuthorities
 */
BrokerCollectionsModel.prototype.standardDomainCertAuthorities = undefined;

/**
 * @member {module:model/BrokerCollectionsVirtualHostnamesModel} virtualHostnames
 */
BrokerCollectionsModel.prototype.virtualHostnames = undefined;

