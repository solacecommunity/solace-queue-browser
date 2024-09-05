import {ApiClient} from '../ApiClient';
import {MsgVpnRestDeliveryPointRestConsumerCounterModel} from './MsgVpnRestDeliveryPointRestConsumerCounterModel';

/**
 * The MsgVpnRestDeliveryPointRestConsumerModel model module.
 * @module model/MsgVpnRestDeliveryPointRestConsumerModel
 * @version 2.36
 */
export class MsgVpnRestDeliveryPointRestConsumerModel {
  /**
   * Constructs a new <code>MsgVpnRestDeliveryPointRestConsumerModel</code>.
   * @alias module:model/MsgVpnRestDeliveryPointRestConsumerModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnRestDeliveryPointRestConsumerModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRestDeliveryPointRestConsumerModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRestDeliveryPointRestConsumerModel} The populated <code>MsgVpnRestDeliveryPointRestConsumerModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRestDeliveryPointRestConsumerModel();
      if (data.hasOwnProperty('authenticationAwsAccessKeyId'))
        obj.authenticationAwsAccessKeyId = ApiClient.convertToType(data['authenticationAwsAccessKeyId'], 'String');
      if (data.hasOwnProperty('authenticationAwsRegion'))
        obj.authenticationAwsRegion = ApiClient.convertToType(data['authenticationAwsRegion'], 'String');
      if (data.hasOwnProperty('authenticationAwsService'))
        obj.authenticationAwsService = ApiClient.convertToType(data['authenticationAwsService'], 'String');
      if (data.hasOwnProperty('authenticationClientCertConfigTime'))
        obj.authenticationClientCertConfigTime = ApiClient.convertToType(data['authenticationClientCertConfigTime'], 'Number');
      if (data.hasOwnProperty('authenticationClientCertThumbprint'))
        obj.authenticationClientCertThumbprint = ApiClient.convertToType(data['authenticationClientCertThumbprint'], 'String');
      if (data.hasOwnProperty('authenticationHttpBasicUsername'))
        obj.authenticationHttpBasicUsername = ApiClient.convertToType(data['authenticationHttpBasicUsername'], 'String');
      if (data.hasOwnProperty('authenticationHttpHeaderName'))
        obj.authenticationHttpHeaderName = ApiClient.convertToType(data['authenticationHttpHeaderName'], 'String');
      if (data.hasOwnProperty('authenticationOauthClientId'))
        obj.authenticationOauthClientId = ApiClient.convertToType(data['authenticationOauthClientId'], 'String');
      if (data.hasOwnProperty('authenticationOauthClientLastFailureReason'))
        obj.authenticationOauthClientLastFailureReason = ApiClient.convertToType(data['authenticationOauthClientLastFailureReason'], 'String');
      if (data.hasOwnProperty('authenticationOauthClientLastFailureTime'))
        obj.authenticationOauthClientLastFailureTime = ApiClient.convertToType(data['authenticationOauthClientLastFailureTime'], 'Number');
      if (data.hasOwnProperty('authenticationOauthClientScope'))
        obj.authenticationOauthClientScope = ApiClient.convertToType(data['authenticationOauthClientScope'], 'String');
      if (data.hasOwnProperty('authenticationOauthClientTokenEndpoint'))
        obj.authenticationOauthClientTokenEndpoint = ApiClient.convertToType(data['authenticationOauthClientTokenEndpoint'], 'String');
      if (data.hasOwnProperty('authenticationOauthClientTokenExpiryDefault'))
        obj.authenticationOauthClientTokenExpiryDefault = ApiClient.convertToType(data['authenticationOauthClientTokenExpiryDefault'], 'Number');
      if (data.hasOwnProperty('authenticationOauthClientTokenLifetime'))
        obj.authenticationOauthClientTokenLifetime = ApiClient.convertToType(data['authenticationOauthClientTokenLifetime'], 'Number');
      if (data.hasOwnProperty('authenticationOauthClientTokenRetrievedTime'))
        obj.authenticationOauthClientTokenRetrievedTime = ApiClient.convertToType(data['authenticationOauthClientTokenRetrievedTime'], 'Number');
      if (data.hasOwnProperty('authenticationOauthClientTokenState'))
        obj.authenticationOauthClientTokenState = ApiClient.convertToType(data['authenticationOauthClientTokenState'], 'String');
      if (data.hasOwnProperty('authenticationOauthJwtLastFailureReason'))
        obj.authenticationOauthJwtLastFailureReason = ApiClient.convertToType(data['authenticationOauthJwtLastFailureReason'], 'String');
      if (data.hasOwnProperty('authenticationOauthJwtLastFailureTime'))
        obj.authenticationOauthJwtLastFailureTime = ApiClient.convertToType(data['authenticationOauthJwtLastFailureTime'], 'Number');
      if (data.hasOwnProperty('authenticationOauthJwtTokenEndpoint'))
        obj.authenticationOauthJwtTokenEndpoint = ApiClient.convertToType(data['authenticationOauthJwtTokenEndpoint'], 'String');
      if (data.hasOwnProperty('authenticationOauthJwtTokenExpiryDefault'))
        obj.authenticationOauthJwtTokenExpiryDefault = ApiClient.convertToType(data['authenticationOauthJwtTokenExpiryDefault'], 'Number');
      if (data.hasOwnProperty('authenticationOauthJwtTokenLifetime'))
        obj.authenticationOauthJwtTokenLifetime = ApiClient.convertToType(data['authenticationOauthJwtTokenLifetime'], 'Number');
      if (data.hasOwnProperty('authenticationOauthJwtTokenRetrievedTime'))
        obj.authenticationOauthJwtTokenRetrievedTime = ApiClient.convertToType(data['authenticationOauthJwtTokenRetrievedTime'], 'Number');
      if (data.hasOwnProperty('authenticationOauthJwtTokenState'))
        obj.authenticationOauthJwtTokenState = ApiClient.convertToType(data['authenticationOauthJwtTokenState'], 'String');
      if (data.hasOwnProperty('authenticationScheme'))
        obj.authenticationScheme = ApiClient.convertToType(data['authenticationScheme'], 'String');
      if (data.hasOwnProperty('counter'))
        obj.counter = MsgVpnRestDeliveryPointRestConsumerCounterModel.constructFromObject(data['counter']);
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('httpMethod'))
        obj.httpMethod = ApiClient.convertToType(data['httpMethod'], 'String');
      if (data.hasOwnProperty('httpRequestConnectionCloseTxMsgCount'))
        obj.httpRequestConnectionCloseTxMsgCount = ApiClient.convertToType(data['httpRequestConnectionCloseTxMsgCount'], 'Number');
      if (data.hasOwnProperty('httpRequestOutstandingTxMsgCount'))
        obj.httpRequestOutstandingTxMsgCount = ApiClient.convertToType(data['httpRequestOutstandingTxMsgCount'], 'Number');
      if (data.hasOwnProperty('httpRequestTimedOutTxMsgCount'))
        obj.httpRequestTimedOutTxMsgCount = ApiClient.convertToType(data['httpRequestTimedOutTxMsgCount'], 'Number');
      if (data.hasOwnProperty('httpRequestTxByteCount'))
        obj.httpRequestTxByteCount = ApiClient.convertToType(data['httpRequestTxByteCount'], 'Number');
      if (data.hasOwnProperty('httpRequestTxMsgCount'))
        obj.httpRequestTxMsgCount = ApiClient.convertToType(data['httpRequestTxMsgCount'], 'Number');
      if (data.hasOwnProperty('httpResponseErrorRxMsgCount'))
        obj.httpResponseErrorRxMsgCount = ApiClient.convertToType(data['httpResponseErrorRxMsgCount'], 'Number');
      if (data.hasOwnProperty('httpResponseRxByteCount'))
        obj.httpResponseRxByteCount = ApiClient.convertToType(data['httpResponseRxByteCount'], 'Number');
      if (data.hasOwnProperty('httpResponseRxMsgCount'))
        obj.httpResponseRxMsgCount = ApiClient.convertToType(data['httpResponseRxMsgCount'], 'Number');
      if (data.hasOwnProperty('httpResponseSuccessRxMsgCount'))
        obj.httpResponseSuccessRxMsgCount = ApiClient.convertToType(data['httpResponseSuccessRxMsgCount'], 'Number');
      if (data.hasOwnProperty('lastConnectionFailureLocalEndpoint'))
        obj.lastConnectionFailureLocalEndpoint = ApiClient.convertToType(data['lastConnectionFailureLocalEndpoint'], 'String');
      if (data.hasOwnProperty('lastConnectionFailureReason'))
        obj.lastConnectionFailureReason = ApiClient.convertToType(data['lastConnectionFailureReason'], 'String');
      if (data.hasOwnProperty('lastConnectionFailureRemoteEndpoint'))
        obj.lastConnectionFailureRemoteEndpoint = ApiClient.convertToType(data['lastConnectionFailureRemoteEndpoint'], 'String');
      if (data.hasOwnProperty('lastConnectionFailureTime'))
        obj.lastConnectionFailureTime = ApiClient.convertToType(data['lastConnectionFailureTime'], 'Number');
      if (data.hasOwnProperty('lastFailureReason'))
        obj.lastFailureReason = ApiClient.convertToType(data['lastFailureReason'], 'String');
      if (data.hasOwnProperty('lastFailureTime'))
        obj.lastFailureTime = ApiClient.convertToType(data['lastFailureTime'], 'Number');
      if (data.hasOwnProperty('localInterface'))
        obj.localInterface = ApiClient.convertToType(data['localInterface'], 'String');
      if (data.hasOwnProperty('maxPostWaitTime'))
        obj.maxPostWaitTime = ApiClient.convertToType(data['maxPostWaitTime'], 'Number');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('outgoingConnectionCount'))
        obj.outgoingConnectionCount = ApiClient.convertToType(data['outgoingConnectionCount'], 'Number');
      if (data.hasOwnProperty('proxyName'))
        obj.proxyName = ApiClient.convertToType(data['proxyName'], 'String');
      if (data.hasOwnProperty('remoteHost'))
        obj.remoteHost = ApiClient.convertToType(data['remoteHost'], 'String');
      if (data.hasOwnProperty('remoteOutgoingConnectionUpCount'))
        obj.remoteOutgoingConnectionUpCount = ApiClient.convertToType(data['remoteOutgoingConnectionUpCount'], 'Number');
      if (data.hasOwnProperty('remotePort'))
        obj.remotePort = ApiClient.convertToType(data['remotePort'], 'Number');
      if (data.hasOwnProperty('restConsumerName'))
        obj.restConsumerName = ApiClient.convertToType(data['restConsumerName'], 'String');
      if (data.hasOwnProperty('restDeliveryPointName'))
        obj.restDeliveryPointName = ApiClient.convertToType(data['restDeliveryPointName'], 'String');
      if (data.hasOwnProperty('retryDelay'))
        obj.retryDelay = ApiClient.convertToType(data['retryDelay'], 'Number');
      if (data.hasOwnProperty('tlsCipherSuiteList'))
        obj.tlsCipherSuiteList = ApiClient.convertToType(data['tlsCipherSuiteList'], 'String');
      if (data.hasOwnProperty('tlsEnabled'))
        obj.tlsEnabled = ApiClient.convertToType(data['tlsEnabled'], 'Boolean');
      if (data.hasOwnProperty('up'))
        obj.up = ApiClient.convertToType(data['up'], 'Boolean');
    }
    return obj;
  }
}

/**
 * The AWS access key id. Available since 2.26.
 * @member {String} authenticationAwsAccessKeyId
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.authenticationAwsAccessKeyId = undefined;

/**
 * The AWS region id. Available since 2.26.
 * @member {String} authenticationAwsRegion
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.authenticationAwsRegion = undefined;

/**
 * The AWS service id. Available since 2.26.
 * @member {String} authenticationAwsService
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.authenticationAwsService = undefined;

/**
 * The timestamp of when the client-certificate was configured. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time). Available since 2.28.
 * @member {Number} authenticationClientCertConfigTime
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.authenticationClientCertConfigTime = undefined;

/**
 * The thumbprint of the client-certificate. Available since 2.28.
 * @member {String} authenticationClientCertThumbprint
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.authenticationClientCertThumbprint = undefined;

/**
 * The username that the REST Consumer will use to login to the REST host.
 * @member {String} authenticationHttpBasicUsername
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.authenticationHttpBasicUsername = undefined;

/**
 * The authentication header name. Available since 2.15.
 * @member {String} authenticationHttpHeaderName
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.authenticationHttpHeaderName = undefined;

/**
 * The OAuth client ID. Available since 2.19.
 * @member {String} authenticationOauthClientId
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.authenticationOauthClientId = undefined;

/**
 * The reason for the most recent OAuth token retrieval failure. Available since 2.19.
 * @member {String} authenticationOauthClientLastFailureReason
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.authenticationOauthClientLastFailureReason = undefined;

/**
 * The time of the last OAuth token retrieval failure. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time). Available since 2.19.
 * @member {Number} authenticationOauthClientLastFailureTime
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.authenticationOauthClientLastFailureTime = undefined;

/**
 * The OAuth scope. Available since 2.19.
 * @member {String} authenticationOauthClientScope
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.authenticationOauthClientScope = undefined;

/**
 * The OAuth token endpoint URL that the REST Consumer will use to request a token for login to the REST host. Must begin with \"https\". Available since 2.19.
 * @member {String} authenticationOauthClientTokenEndpoint
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.authenticationOauthClientTokenEndpoint = undefined;

/**
 * The default expiry time for a token, in seconds. Only used when the token endpoint does not return an expiry time. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. Available since 2.30.
 * @member {Number} authenticationOauthClientTokenExpiryDefault
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.authenticationOauthClientTokenExpiryDefault = undefined;

/**
 * The validity duration of the OAuth token. Available since 2.19.
 * @member {Number} authenticationOauthClientTokenLifetime
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.authenticationOauthClientTokenLifetime = undefined;

/**
 * The time at which the broker requested the token from the OAuth token endpoint. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time). Available since 2.19.
 * @member {Number} authenticationOauthClientTokenRetrievedTime
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.authenticationOauthClientTokenRetrievedTime = undefined;

/**
 * The current state of the current OAuth token. The allowed values and their meaning are:  <pre> \"valid\" - The token is valid. \"invalid\" - The token is invalid. </pre>  Available since 2.19.
 * @member {String} authenticationOauthClientTokenState
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.authenticationOauthClientTokenState = undefined;

/**
 * The reason for the most recent OAuth token retrieval failure. Available since 2.21.
 * @member {String} authenticationOauthJwtLastFailureReason
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.authenticationOauthJwtLastFailureReason = undefined;

/**
 * The time of the last OAuth token retrieval failure. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time). Available since 2.21.
 * @member {Number} authenticationOauthJwtLastFailureTime
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.authenticationOauthJwtLastFailureTime = undefined;

/**
 * The OAuth token endpoint URL that the REST Consumer will use to request a token for login to the REST host. Available since 2.21.
 * @member {String} authenticationOauthJwtTokenEndpoint
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.authenticationOauthJwtTokenEndpoint = undefined;

/**
 * The default expiry time for a token, in seconds. Only used when the token endpoint does not return an expiry time. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. Available since 2.30.
 * @member {Number} authenticationOauthJwtTokenExpiryDefault
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.authenticationOauthJwtTokenExpiryDefault = undefined;

/**
 * The validity duration of the OAuth token. Available since 2.21.
 * @member {Number} authenticationOauthJwtTokenLifetime
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.authenticationOauthJwtTokenLifetime = undefined;

/**
 * The time at which the broker requested the token from the OAuth token endpoint. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time). Available since 2.21.
 * @member {Number} authenticationOauthJwtTokenRetrievedTime
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.authenticationOauthJwtTokenRetrievedTime = undefined;

/**
 * The current state of the current OAuth token. The allowed values and their meaning are:  <pre> \"valid\" - The token is valid. \"invalid\" - The token is invalid. </pre>  Available since 2.21.
 * @member {String} authenticationOauthJwtTokenState
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.authenticationOauthJwtTokenState = undefined;

/**
 * Allowed values for the <code>authenticationScheme</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnRestDeliveryPointRestConsumerModel.AuthenticationSchemeEnum = {
  /**
   * value: "none"
   * @const
   */
  none: "none",

  /**
   * value: "http-basic"
   * @const
   */
  httpBasic: "http-basic",

  /**
   * value: "client-certificate"
   * @const
   */
  clientCertificate: "client-certificate",

  /**
   * value: "http-header"
   * @const
   */
  httpHeader: "http-header",

  /**
   * value: "oauth-client"
   * @const
   */
  oauthClient: "oauth-client",

  /**
   * value: "oauth-jwt"
   * @const
   */
  oauthJwt: "oauth-jwt",

  /**
   * value: "transparent"
   * @const
   */
  transparent: "transparent",

  /**
   * value: "aws"
   * @const
   */
  aws: "aws"
};
/**
 * The authentication scheme used by the REST Consumer to login to the REST host. The allowed values and their meaning are:  <pre> \"none\" - Login with no authentication. This may be useful for anonymous connections or when a REST Consumer does not require authentication. \"http-basic\" - Login with a username and optional password according to HTTP Basic authentication as per RFC 2616. \"client-certificate\" - Login with a client TLS certificate as per RFC 5246. Client certificate authentication is only available on TLS connections. \"http-header\" - Login with a specified HTTP header. \"oauth-client\" - Login with OAuth 2.0 client credentials. \"oauth-jwt\" - Login with OAuth (RFC 7523 JWT Profile). \"transparent\" - Login using the Authorization header from the message properties, if present. Transparent authentication passes along existing Authorization header metadata instead of discarding it. Note that if the message is coming from a REST producer, the REST service must be configured to forward the Authorization header. \"aws\" - Login using AWS Signature Version 4 authentication (AWS4-HMAC-SHA256). </pre> 
 * @member {module:model/MsgVpnRestDeliveryPointRestConsumerModel.AuthenticationSchemeEnum} authenticationScheme
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.authenticationScheme = undefined;

/**
 * @member {module:model/MsgVpnRestDeliveryPointRestConsumerCounterModel} counter
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.counter = undefined;

/**
 * Indicates whether the REST Consumer is enabled.
 * @member {Boolean} enabled
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.enabled = undefined;

/**
 * Allowed values for the <code>httpMethod</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnRestDeliveryPointRestConsumerModel.HttpMethodEnum = {
  /**
   * value: "post"
   * @const
   */
  post: "post",

  /**
   * value: "put"
   * @const
   */
  put: "put"
};
/**
 * The HTTP method to use (POST or PUT). This is used only when operating in the REST service \"messaging\" mode and is ignored in \"gateway\" mode. The allowed values and their meaning are:  <pre> \"post\" - Use the POST HTTP method. \"put\" - Use the PUT HTTP method. </pre>  Available since 2.17.
 * @member {module:model/MsgVpnRestDeliveryPointRestConsumerModel.HttpMethodEnum} httpMethod
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.httpMethod = undefined;

/**
 * The number of HTTP request messages transmitted to the REST Consumer to close the connection. Available since 2.13.
 * @member {Number} httpRequestConnectionCloseTxMsgCount
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.httpRequestConnectionCloseTxMsgCount = undefined;

/**
 * The number of HTTP request messages transmitted to the REST Consumer that are waiting for a response. Available since 2.13.
 * @member {Number} httpRequestOutstandingTxMsgCount
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.httpRequestOutstandingTxMsgCount = undefined;

/**
 * The number of HTTP request messages transmitted to the REST Consumer that have timed out. Available since 2.13.
 * @member {Number} httpRequestTimedOutTxMsgCount
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.httpRequestTimedOutTxMsgCount = undefined;

/**
 * The amount of HTTP request messages transmitted to the REST Consumer, in bytes (B). Available since 2.13.
 * @member {Number} httpRequestTxByteCount
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.httpRequestTxByteCount = undefined;

/**
 * The number of HTTP request messages transmitted to the REST Consumer. Available since 2.13.
 * @member {Number} httpRequestTxMsgCount
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.httpRequestTxMsgCount = undefined;

/**
 * The number of HTTP client/server error response messages received from the REST Consumer. Available since 2.13.
 * @member {Number} httpResponseErrorRxMsgCount
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.httpResponseErrorRxMsgCount = undefined;

/**
 * The amount of HTTP response messages received from the REST Consumer, in bytes (B). Available since 2.13.
 * @member {Number} httpResponseRxByteCount
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.httpResponseRxByteCount = undefined;

/**
 * The number of HTTP response messages received from the REST Consumer. Available since 2.13.
 * @member {Number} httpResponseRxMsgCount
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.httpResponseRxMsgCount = undefined;

/**
 * The number of HTTP successful response messages received from the REST Consumer. Available since 2.13.
 * @member {Number} httpResponseSuccessRxMsgCount
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.httpResponseSuccessRxMsgCount = undefined;

/**
 * The local endpoint at the time of the last connection failure.
 * @member {String} lastConnectionFailureLocalEndpoint
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.lastConnectionFailureLocalEndpoint = undefined;

/**
 * The reason for the last connection failure between local and remote endpoints.
 * @member {String} lastConnectionFailureReason
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.lastConnectionFailureReason = undefined;

/**
 * The remote endpoint at the time of the last connection failure.
 * @member {String} lastConnectionFailureRemoteEndpoint
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.lastConnectionFailureRemoteEndpoint = undefined;

/**
 * The timestamp of the last connection failure between local and remote endpoints. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} lastConnectionFailureTime
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.lastConnectionFailureTime = undefined;

/**
 * The reason for the last REST Consumer failure.
 * @member {String} lastFailureReason
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.lastFailureReason = undefined;

/**
 * The timestamp of the last REST Consumer failure. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} lastFailureTime
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.lastFailureTime = undefined;

/**
 * The interface that will be used for all outgoing connections associated with the REST Consumer. When unspecified, an interface is automatically chosen.
 * @member {String} localInterface
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.localInterface = undefined;

/**
 * The maximum amount of time (in seconds) to wait for an HTTP POST response from the REST Consumer. Once this time is exceeded, the TCP connection is reset.
 * @member {Number} maxPostWaitTime
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.maxPostWaitTime = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.msgVpnName = undefined;

/**
 * The number of concurrent TCP connections open to the REST Consumer.
 * @member {Number} outgoingConnectionCount
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.outgoingConnectionCount = undefined;

/**
 * The name of the proxy to use. Leave empty for no proxy. Available since 2.36.
 * @member {String} proxyName
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.proxyName = undefined;

/**
 * The IP address or DNS name for the REST Consumer.
 * @member {String} remoteHost
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.remoteHost = undefined;

/**
 * The number of outgoing connections for the REST Consumer that are up.
 * @member {Number} remoteOutgoingConnectionUpCount
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.remoteOutgoingConnectionUpCount = undefined;

/**
 * The port associated with the host of the REST Consumer.
 * @member {Number} remotePort
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.remotePort = undefined;

/**
 * The name of the REST Consumer.
 * @member {String} restConsumerName
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.restConsumerName = undefined;

/**
 * The name of the REST Delivery Point.
 * @member {String} restDeliveryPointName
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.restDeliveryPointName = undefined;

/**
 * The number of seconds that must pass before retrying the remote REST Consumer connection.
 * @member {Number} retryDelay
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.retryDelay = undefined;

/**
 * The colon-separated list of cipher suites the REST Consumer uses in its encrypted connection. The value `\"default\"` implies all supported suites ordered from most secure to least secure. The list of default cipher suites is available in the `tlsCipherSuiteMsgBackboneDefaultList` attribute of the Broker object in the Monitoring API. The REST Consumer should choose the first suite from this list that it supports.
 * @member {String} tlsCipherSuiteList
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.tlsCipherSuiteList = undefined;

/**
 * Indicates whether encryption (TLS) is enabled for the REST Consumer.
 * @member {Boolean} tlsEnabled
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.tlsEnabled = undefined;

/**
 * Indicates whether the operational state of the REST Consumer is up.
 * @member {Boolean} up
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.up = undefined;

