import {ApiClient} from '../ApiClient';

/**
 * The BrokerLinksModel model module.
 * @module model/BrokerLinksModel
 * @version 2.36
 */
export class BrokerLinksModel {
  /**
   * Constructs a new <code>BrokerLinksModel</code>.
   * @alias module:model/BrokerLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BrokerLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BrokerLinksModel} obj Optional instance to populate.
   * @return {module:model/BrokerLinksModel} The populated <code>BrokerLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BrokerLinksModel();
      if (data.hasOwnProperty('aboutUri'))
        obj.aboutUri = ApiClient.convertToType(data['aboutUri'], 'String');
      if (data.hasOwnProperty('certAuthoritiesUri'))
        obj.certAuthoritiesUri = ApiClient.convertToType(data['certAuthoritiesUri'], 'String');
      if (data.hasOwnProperty('clientCertAuthoritiesUri'))
        obj.clientCertAuthoritiesUri = ApiClient.convertToType(data['clientCertAuthoritiesUri'], 'String');
      if (data.hasOwnProperty('configSyncLocalDatabaseRowsUri'))
        obj.configSyncLocalDatabaseRowsUri = ApiClient.convertToType(data['configSyncLocalDatabaseRowsUri'], 'String');
      if (data.hasOwnProperty('dmrClustersUri'))
        obj.dmrClustersUri = ApiClient.convertToType(data['dmrClustersUri'], 'String');
      if (data.hasOwnProperty('domainCertAuthoritiesUri'))
        obj.domainCertAuthoritiesUri = ApiClient.convertToType(data['domainCertAuthoritiesUri'], 'String');
      if (data.hasOwnProperty('msgVpnsUri'))
        obj.msgVpnsUri = ApiClient.convertToType(data['msgVpnsUri'], 'String');
      if (data.hasOwnProperty('oauthProfilesUri'))
        obj.oauthProfilesUri = ApiClient.convertToType(data['oauthProfilesUri'], 'String');
      if (data.hasOwnProperty('sessionsUri'))
        obj.sessionsUri = ApiClient.convertToType(data['sessionsUri'], 'String');
      if (data.hasOwnProperty('standardDomainCertAuthoritiesUri'))
        obj.standardDomainCertAuthoritiesUri = ApiClient.convertToType(data['standardDomainCertAuthoritiesUri'], 'String');
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
      if (data.hasOwnProperty('virtualHostnamesUri'))
        obj.virtualHostnamesUri = ApiClient.convertToType(data['virtualHostnamesUri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Broker's About object.
 * @member {String} aboutUri
 */
BrokerLinksModel.prototype.aboutUri = undefined;

/**
 * The URI of this Broker's collection of Certificate Authority objects. Deprecated since 2.19. Replaced by clientCertAuthorities and domainCertAuthorities.
 * @member {String} certAuthoritiesUri
 */
BrokerLinksModel.prototype.certAuthoritiesUri = undefined;

/**
 * The URI of this Broker's collection of Client Certificate Authority objects. Available since 2.19.
 * @member {String} clientCertAuthoritiesUri
 */
BrokerLinksModel.prototype.clientCertAuthoritiesUri = undefined;

/**
 * The URI of this Broker's collection of Config Sync Local Database objects. Available since 2.22.
 * @member {String} configSyncLocalDatabaseRowsUri
 */
BrokerLinksModel.prototype.configSyncLocalDatabaseRowsUri = undefined;

/**
 * The URI of this Broker's collection of Cluster objects. Available since 2.11.
 * @member {String} dmrClustersUri
 */
BrokerLinksModel.prototype.dmrClustersUri = undefined;

/**
 * The URI of this Broker's collection of Domain Certificate Authority objects. Available since 2.19.
 * @member {String} domainCertAuthoritiesUri
 */
BrokerLinksModel.prototype.domainCertAuthoritiesUri = undefined;

/**
 * The URI of this Broker's collection of Message VPN objects. Available since 2.11.
 * @member {String} msgVpnsUri
 */
BrokerLinksModel.prototype.msgVpnsUri = undefined;

/**
 * The URI of this Broker's collection of OAuth Profile objects. Available since 2.24.
 * @member {String} oauthProfilesUri
 */
BrokerLinksModel.prototype.oauthProfilesUri = undefined;

/**
 * The URI of this Broker's collection of SEMP Session objects. Available since 2.21.
 * @member {String} sessionsUri
 */
BrokerLinksModel.prototype.sessionsUri = undefined;

/**
 * The URI of this Broker's collection of Standard Domain Certificate Authority objects. Available since 2.19.
 * @member {String} standardDomainCertAuthoritiesUri
 */
BrokerLinksModel.prototype.standardDomainCertAuthoritiesUri = undefined;

/**
 * The URI of this Broker object.
 * @member {String} uri
 */
BrokerLinksModel.prototype.uri = undefined;

/**
 * The URI of this Broker's collection of Virtual Hostname objects. Available since 2.17.
 * @member {String} virtualHostnamesUri
 */
BrokerLinksModel.prototype.virtualHostnamesUri = undefined;

