import {ApiClient} from '../ApiClient';

/**
 * The ClientCertAuthorityModel model module.
 * @module model/ClientCertAuthorityModel
 * @version 2.36
 */
export class ClientCertAuthorityModel {
  /**
   * Constructs a new <code>ClientCertAuthorityModel</code>.
   * @alias module:model/ClientCertAuthorityModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ClientCertAuthorityModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientCertAuthorityModel} obj Optional instance to populate.
   * @return {module:model/ClientCertAuthorityModel} The populated <code>ClientCertAuthorityModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ClientCertAuthorityModel();
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
 * The name of the Certificate Authority.
 * @member {String} certAuthorityName
 */
ClientCertAuthorityModel.prototype.certAuthorityName = undefined;

/**
 * The PEM formatted content for the trusted root certificate of a client Certificate Authority.
 * @member {String} certContent
 */
ClientCertAuthorityModel.prototype.certContent = undefined;

/**
 * The scheduled CRL refresh day(s), specified as \"daily\" or a comma-separated list of days. Days must be specified as \"Sun\", \"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", or \"Sat\", with no spaces, and in sorted order from Sunday to Saturday. The empty-string (\"\") can also be specified, indicating no schedule is configured (\"crlTimeList\" must also be configured to the empty-string).
 * @member {String} crlDayList
 */
ClientCertAuthorityModel.prototype.crlDayList = undefined;

/**
 * The timestamp of the last successful CRL download. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} crlLastDownloadTime
 */
ClientCertAuthorityModel.prototype.crlLastDownloadTime = undefined;

/**
 * The reason for the last CRL failure.
 * @member {String} crlLastFailureReason
 */
ClientCertAuthorityModel.prototype.crlLastFailureReason = undefined;

/**
 * The timestamp of the last CRL failure. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} crlLastFailureTime
 */
ClientCertAuthorityModel.prototype.crlLastFailureTime = undefined;

/**
 * The scheduled time of the next CRL download. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} crlNextDownloadTime
 */
ClientCertAuthorityModel.prototype.crlNextDownloadTime = undefined;

/**
 * The scheduled CRL refresh time(s), specified as \"hourly\" or a comma-separated list of 24-hour times in the form hh:mm, or h:mm. There must be no spaces, and times (up to 4) must be in sorted order from 0:00 to 23:59. The empty-string (\"\") can also be specified, indicating no schedule is configured (\"crlDayList\" must also be configured to the empty-string).
 * @member {String} crlTimeList
 */
ClientCertAuthorityModel.prototype.crlTimeList = undefined;

/**
 * Indicates whether CRL revocation checking is operationally up.
 * @member {Boolean} crlUp
 */
ClientCertAuthorityModel.prototype.crlUp = undefined;

/**
 * The URL for the CRL source. This is a required attribute for CRL to be operational and the URL must be complete with http:// included. IPv6 addresses must be enclosed in square-brackets.
 * @member {String} crlUrl
 */
ClientCertAuthorityModel.prototype.crlUrl = undefined;

/**
 * The reason for the last OCSP failure.
 * @member {String} ocspLastFailureReason
 */
ClientCertAuthorityModel.prototype.ocspLastFailureReason = undefined;

/**
 * The timestamp of the last OCSP failure. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} ocspLastFailureTime
 */
ClientCertAuthorityModel.prototype.ocspLastFailureTime = undefined;

/**
 * The URL involved in the last OCSP failure.
 * @member {String} ocspLastFailureUrl
 */
ClientCertAuthorityModel.prototype.ocspLastFailureUrl = undefined;

/**
 * Indicates whether a non-responder certificate is allowed to sign an OCSP response. Typically used with an OCSP override URL in cases where a single certificate is used to sign client certificates and OCSP responses.
 * @member {Boolean} ocspNonResponderCertEnabled
 */
ClientCertAuthorityModel.prototype.ocspNonResponderCertEnabled = undefined;

/**
 * The OCSP responder URL to use for overriding the one supplied in the client certificate. The URL must be complete with http:// included.
 * @member {String} ocspOverrideUrl
 */
ClientCertAuthorityModel.prototype.ocspOverrideUrl = undefined;

/**
 * The timeout in seconds to receive a response from the OCSP responder after sending a request or making the initial connection attempt.
 * @member {Number} ocspTimeout
 */
ClientCertAuthorityModel.prototype.ocspTimeout = undefined;

/**
 * Indicates whether Certificate Authority revocation checking is enabled.
 * @member {Boolean} revocationCheckEnabled
 */
ClientCertAuthorityModel.prototype.revocationCheckEnabled = undefined;

