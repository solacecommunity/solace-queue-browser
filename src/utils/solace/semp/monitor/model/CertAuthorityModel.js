import {ApiClient} from '../ApiClient';

/**
 * The CertAuthorityModel model module.
 * @module model/CertAuthorityModel
 * @version 2.36
 */
export class CertAuthorityModel {
  /**
   * Constructs a new <code>CertAuthorityModel</code>.
   * @alias module:model/CertAuthorityModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CertAuthorityModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CertAuthorityModel} obj Optional instance to populate.
   * @return {module:model/CertAuthorityModel} The populated <code>CertAuthorityModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CertAuthorityModel();
      if (data.hasOwnProperty('certAuthorityName'))
        obj.certAuthorityName = ApiClient.convertToType(data['certAuthorityName'], 'String');
      if (data.hasOwnProperty('certContent'))
        obj.certContent = ApiClient.convertToType(data['certContent'], 'String');
      if (data.hasOwnProperty('crlDayList'))
        obj.crlDayList = ApiClient.convertToType(data['crlDayList'], 'String');
      if (data.hasOwnProperty('crlLastDownloadTime'))
        obj.crlLastDownloadTime = ApiClient.convertToType(data['crlLastDownloadTime'], 'Number');
      if (data.hasOwnProperty('crlLastFailureReason'))
        obj.crlLastFailureReason = ApiClient.convertToType(data['crlLastFailureReason'], 'String');
      if (data.hasOwnProperty('crlLastFailureTime'))
        obj.crlLastFailureTime = ApiClient.convertToType(data['crlLastFailureTime'], 'Number');
      if (data.hasOwnProperty('crlNextDownloadTime'))
        obj.crlNextDownloadTime = ApiClient.convertToType(data['crlNextDownloadTime'], 'Number');
      if (data.hasOwnProperty('crlTimeList'))
        obj.crlTimeList = ApiClient.convertToType(data['crlTimeList'], 'String');
      if (data.hasOwnProperty('crlUp'))
        obj.crlUp = ApiClient.convertToType(data['crlUp'], 'Boolean');
      if (data.hasOwnProperty('crlUrl'))
        obj.crlUrl = ApiClient.convertToType(data['crlUrl'], 'String');
      if (data.hasOwnProperty('ocspLastFailureReason'))
        obj.ocspLastFailureReason = ApiClient.convertToType(data['ocspLastFailureReason'], 'String');
      if (data.hasOwnProperty('ocspLastFailureTime'))
        obj.ocspLastFailureTime = ApiClient.convertToType(data['ocspLastFailureTime'], 'Number');
      if (data.hasOwnProperty('ocspLastFailureUrl'))
        obj.ocspLastFailureUrl = ApiClient.convertToType(data['ocspLastFailureUrl'], 'String');
      if (data.hasOwnProperty('ocspNonResponderCertEnabled'))
        obj.ocspNonResponderCertEnabled = ApiClient.convertToType(data['ocspNonResponderCertEnabled'], 'Boolean');
      if (data.hasOwnProperty('ocspOverrideUrl'))
        obj.ocspOverrideUrl = ApiClient.convertToType(data['ocspOverrideUrl'], 'String');
      if (data.hasOwnProperty('ocspTimeout'))
        obj.ocspTimeout = ApiClient.convertToType(data['ocspTimeout'], 'Number');
      if (data.hasOwnProperty('revocationCheckEnabled'))
        obj.revocationCheckEnabled = ApiClient.convertToType(data['revocationCheckEnabled'], 'Boolean');
    }
    return obj;
  }
}

/**
 * The name of the Certificate Authority. Deprecated since 2.19. Replaced by clientCertAuthorities and domainCertAuthorities.
 * @member {String} certAuthorityName
 */
CertAuthorityModel.prototype.certAuthorityName = undefined;

/**
 * The PEM formatted content for the trusted root certificate of a Certificate Authority. Deprecated since 2.19. certAuthorities replaced by clientCertAuthorities and domainCertAuthorities.
 * @member {String} certContent
 */
CertAuthorityModel.prototype.certContent = undefined;

/**
 * The scheduled CRL refresh day(s), specified as \"daily\" or a comma-separated list of days. Days must be specified as \"Sun\", \"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", or \"Sat\", with no spaces, and in sorted order from Sunday to Saturday. Deprecated since 2.19. certAuthorities replaced by clientCertAuthorities and domainCertAuthorities.
 * @member {String} crlDayList
 */
CertAuthorityModel.prototype.crlDayList = undefined;

/**
 * The timestamp of the last successful CRL download. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time). Deprecated since 2.19. certAuthorities replaced by clientCertAuthorities and domainCertAuthorities.
 * @member {Number} crlLastDownloadTime
 */
CertAuthorityModel.prototype.crlLastDownloadTime = undefined;

/**
 * The reason for the last CRL failure. Deprecated since 2.19. certAuthorities replaced by clientCertAuthorities and domainCertAuthorities.
 * @member {String} crlLastFailureReason
 */
CertAuthorityModel.prototype.crlLastFailureReason = undefined;

/**
 * The timestamp of the last CRL failure. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time). Deprecated since 2.19. certAuthorities replaced by clientCertAuthorities and domainCertAuthorities.
 * @member {Number} crlLastFailureTime
 */
CertAuthorityModel.prototype.crlLastFailureTime = undefined;

/**
 * The scheduled time of the next CRL download. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time). Deprecated since 2.19. certAuthorities replaced by clientCertAuthorities and domainCertAuthorities.
 * @member {Number} crlNextDownloadTime
 */
CertAuthorityModel.prototype.crlNextDownloadTime = undefined;

/**
 * The scheduled CRL refresh time(s), specified as \"hourly\" or a comma-separated list of 24-hour times in the form hh:mm, or h:mm. There must be no spaces, and times must be in sorted order from 0:00 to 23:59. Deprecated since 2.19. certAuthorities replaced by clientCertAuthorities and domainCertAuthorities.
 * @member {String} crlTimeList
 */
CertAuthorityModel.prototype.crlTimeList = undefined;

/**
 * Indicates whether CRL revocation checking is operationally up. Deprecated since 2.19. certAuthorities replaced by clientCertAuthorities and domainCertAuthorities.
 * @member {Boolean} crlUp
 */
CertAuthorityModel.prototype.crlUp = undefined;

/**
 * The URL for the CRL source. This is a required attribute for CRL to be operational and the URL must be complete with http:// included. IPv6 addresses must be enclosed in square-brackets. Deprecated since 2.19. certAuthorities replaced by clientCertAuthorities and domainCertAuthorities.
 * @member {String} crlUrl
 */
CertAuthorityModel.prototype.crlUrl = undefined;

/**
 * The reason for the last OCSP failure. Deprecated since 2.19. certAuthorities replaced by clientCertAuthorities and domainCertAuthorities.
 * @member {String} ocspLastFailureReason
 */
CertAuthorityModel.prototype.ocspLastFailureReason = undefined;

/**
 * The timestamp of the last OCSP failure. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time). Deprecated since 2.19. certAuthorities replaced by clientCertAuthorities and domainCertAuthorities.
 * @member {Number} ocspLastFailureTime
 */
CertAuthorityModel.prototype.ocspLastFailureTime = undefined;

/**
 * The URL involved in the last OCSP failure. Deprecated since 2.19. certAuthorities replaced by clientCertAuthorities and domainCertAuthorities.
 * @member {String} ocspLastFailureUrl
 */
CertAuthorityModel.prototype.ocspLastFailureUrl = undefined;

/**
 * Indicates whether a non-responder certificate is allowed to sign an OCSP response. Typically used with an OCSP override URL in cases where a single certificate is used to sign client certificates and OCSP responses. Deprecated since 2.19. certAuthorities replaced by clientCertAuthorities and domainCertAuthorities.
 * @member {Boolean} ocspNonResponderCertEnabled
 */
CertAuthorityModel.prototype.ocspNonResponderCertEnabled = undefined;

/**
 * The OCSP responder URL to use for overriding the one supplied in the client certificate. The URL must be complete with http:// included. Deprecated since 2.19. certAuthorities replaced by clientCertAuthorities and domainCertAuthorities.
 * @member {String} ocspOverrideUrl
 */
CertAuthorityModel.prototype.ocspOverrideUrl = undefined;

/**
 * The timeout in seconds to receive a response from the OCSP responder after sending a request or making the initial connection attempt. Deprecated since 2.19. certAuthorities replaced by clientCertAuthorities and domainCertAuthorities.
 * @member {Number} ocspTimeout
 */
CertAuthorityModel.prototype.ocspTimeout = undefined;

/**
 * Indicates whether Certificate Authority revocation checking is enabled. Deprecated since 2.19. certAuthorities replaced by clientCertAuthorities and domainCertAuthorities.
 * @member {Boolean} revocationCheckEnabled
 */
CertAuthorityModel.prototype.revocationCheckEnabled = undefined;

