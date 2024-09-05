import {ApiClient} from '../ApiClient';

/**
 * The DmrClusterModel model module.
 * @module model/DmrClusterModel
 * @version 2.36
 */
export class DmrClusterModel {
  /**
   * Constructs a new <code>DmrClusterModel</code>.
   * @alias module:model/DmrClusterModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DmrClusterModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterModel} The populated <code>DmrClusterModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterModel();
      if (data.hasOwnProperty('authenticationBasicEnabled'))
        obj.authenticationBasicEnabled = ApiClient.convertToType(data['authenticationBasicEnabled'], 'Boolean');
      if (data.hasOwnProperty('authenticationBasicType'))
        obj.authenticationBasicType = ApiClient.convertToType(data['authenticationBasicType'], 'String');
      if (data.hasOwnProperty('authenticationClientCertEnabled'))
        obj.authenticationClientCertEnabled = ApiClient.convertToType(data['authenticationClientCertEnabled'], 'Boolean');
      if (data.hasOwnProperty('directOnlyEnabled'))
        obj.directOnlyEnabled = ApiClient.convertToType(data['directOnlyEnabled'], 'Boolean');
      if (data.hasOwnProperty('dmrClusterName'))
        obj.dmrClusterName = ApiClient.convertToType(data['dmrClusterName'], 'String');
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('failureReason'))
        obj.failureReason = ApiClient.convertToType(data['failureReason'], 'String');
      if (data.hasOwnProperty('nodeName'))
        obj.nodeName = ApiClient.convertToType(data['nodeName'], 'String');
      if (data.hasOwnProperty('subscriptionDbBuildPercentage'))
        obj.subscriptionDbBuildPercentage = ApiClient.convertToType(data['subscriptionDbBuildPercentage'], 'Number');
      if (data.hasOwnProperty('tlsServerCertEnforceTrustedCommonNameEnabled'))
        obj.tlsServerCertEnforceTrustedCommonNameEnabled = ApiClient.convertToType(data['tlsServerCertEnforceTrustedCommonNameEnabled'], 'Boolean');
      if (data.hasOwnProperty('tlsServerCertMaxChainDepth'))
        obj.tlsServerCertMaxChainDepth = ApiClient.convertToType(data['tlsServerCertMaxChainDepth'], 'Number');
      if (data.hasOwnProperty('tlsServerCertValidateDateEnabled'))
        obj.tlsServerCertValidateDateEnabled = ApiClient.convertToType(data['tlsServerCertValidateDateEnabled'], 'Boolean');
      if (data.hasOwnProperty('tlsServerCertValidateNameEnabled'))
        obj.tlsServerCertValidateNameEnabled = ApiClient.convertToType(data['tlsServerCertValidateNameEnabled'], 'Boolean');
      if (data.hasOwnProperty('up'))
        obj.up = ApiClient.convertToType(data['up'], 'Boolean');
      if (data.hasOwnProperty('uptime'))
        obj.uptime = ApiClient.convertToType(data['uptime'], 'Number');
    }
    return obj;
  }
}

/**
 * Indicates whether basic authentication is enabled for Cluster Links.
 * @member {Boolean} authenticationBasicEnabled
 */
DmrClusterModel.prototype.authenticationBasicEnabled = undefined;

/**
 * Allowed values for the <code>authenticationBasicType</code> property.
 * @enum {String}
 * @readonly
 */
DmrClusterModel.AuthenticationBasicTypeEnum = {
  /**
   * value: "internal"
   * @const
   */
  internal: "internal",

  /**
   * value: "none"
   * @const
   */
  none: "none"
};
/**
 * The type of basic authentication to use for Cluster Links. The allowed values and their meaning are:  <pre> \"internal\" - Use locally configured password. \"none\" - No authentication. </pre> 
 * @member {module:model/DmrClusterModel.AuthenticationBasicTypeEnum} authenticationBasicType
 */
DmrClusterModel.prototype.authenticationBasicType = undefined;

/**
 * Indicates whether client certificate authentication is enabled for Cluster Links.
 * @member {Boolean} authenticationClientCertEnabled
 */
DmrClusterModel.prototype.authenticationClientCertEnabled = undefined;

/**
 * Indicates whether this cluster only supports direct messaging. If true, guaranteed messages will not be transmitted through the cluster.
 * @member {Boolean} directOnlyEnabled
 */
DmrClusterModel.prototype.directOnlyEnabled = undefined;

/**
 * The name of the Cluster.
 * @member {String} dmrClusterName
 */
DmrClusterModel.prototype.dmrClusterName = undefined;

/**
 * Indicates whether the Cluster is enabled.
 * @member {Boolean} enabled
 */
DmrClusterModel.prototype.enabled = undefined;

/**
 * The failure reason for the Cluster being down.
 * @member {String} failureReason
 */
DmrClusterModel.prototype.failureReason = undefined;

/**
 * The name of this node in the Cluster. This is the name that this broker (or redundant group of brokers) is know by to other nodes in the Cluster. The name is chosen automatically to be either this broker's Router Name or Mate Router Name, depending on which Active Standby Role (primary or backup) this broker plays in its redundancy group.
 * @member {String} nodeName
 */
DmrClusterModel.prototype.nodeName = undefined;

/**
 * Cluster Subscription Database build completion percentage. Available since 2.20.
 * @member {Number} subscriptionDbBuildPercentage
 */
DmrClusterModel.prototype.subscriptionDbBuildPercentage = undefined;

/**
 * Indicates whether the common name provided by the remote broker is enforced against the list of trusted common names configured for the Link. If enabled, the certificate's common name must match one of the trusted common names for the Link to be accepted. Deprecated since 2.18. Common Name validation has been replaced by Server Certificate Name validation.
 * @member {Boolean} tlsServerCertEnforceTrustedCommonNameEnabled
 */
DmrClusterModel.prototype.tlsServerCertEnforceTrustedCommonNameEnabled = undefined;

/**
 * The maximum allowed depth of a certificate chain. The depth of a chain is defined as the number of signing CA certificates that are present in the chain back to a trusted self-signed root CA certificate.
 * @member {Number} tlsServerCertMaxChainDepth
 */
DmrClusterModel.prototype.tlsServerCertMaxChainDepth = undefined;

/**
 * Indicates whether validation of the \"Not Before\" and \"Not After\" validity dates in the certificate is enabled. When disabled, the certificate is accepted even if the certificate is not valid based on these dates.
 * @member {Boolean} tlsServerCertValidateDateEnabled
 */
DmrClusterModel.prototype.tlsServerCertValidateDateEnabled = undefined;

/**
 * Enable or disable the standard TLS authentication mechanism of verifying the name used to connect to the bridge. If enabled, the name used to connect to the bridge is checked against the names specified in the certificate returned by the remote broker. Legacy Common Name validation is not performed if Server Certificate Name Validation is enabled, even if Common Name validation is also enabled. Available since 2.18.
 * @member {Boolean} tlsServerCertValidateNameEnabled
 */
DmrClusterModel.prototype.tlsServerCertValidateNameEnabled = undefined;

/**
 * Indicates whether the Cluster is operationally up.
 * @member {Boolean} up
 */
DmrClusterModel.prototype.up = undefined;

/**
 * The amount of time in seconds since the Cluster was up.
 * @member {Number} uptime
 */
DmrClusterModel.prototype.uptime = undefined;

