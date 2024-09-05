import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnAuthenticationOauthProfileModel model module.
 * @module model/MsgVpnAuthenticationOauthProfileModel
 * @version 2.36
 */
export class MsgVpnAuthenticationOauthProfileModel {
  /**
   * Constructs a new <code>MsgVpnAuthenticationOauthProfileModel</code>.
   * @alias module:model/MsgVpnAuthenticationOauthProfileModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAuthenticationOauthProfileModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAuthenticationOauthProfileModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAuthenticationOauthProfileModel} The populated <code>MsgVpnAuthenticationOauthProfileModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAuthenticationOauthProfileModel();
      if (data.hasOwnProperty('active'))
        obj.active = ApiClient.convertToType(data['active'], 'Boolean');
      if (data.hasOwnProperty('authorizationGroupsClaimName'))
        obj.authorizationGroupsClaimName = ApiClient.convertToType(data['authorizationGroupsClaimName'], 'String');
      if (data.hasOwnProperty('authorizationGroupsClaimStringFormat'))
        obj.authorizationGroupsClaimStringFormat = ApiClient.convertToType(data['authorizationGroupsClaimStringFormat'], 'String');
      if (data.hasOwnProperty('clientId'))
        obj.clientId = ApiClient.convertToType(data['clientId'], 'String');
      if (data.hasOwnProperty('clientRequiredType'))
        obj.clientRequiredType = ApiClient.convertToType(data['clientRequiredType'], 'String');
      if (data.hasOwnProperty('clientValidateTypeEnabled'))
        obj.clientValidateTypeEnabled = ApiClient.convertToType(data['clientValidateTypeEnabled'], 'Boolean');
      if (data.hasOwnProperty('disconnectOnTokenExpirationEnabled'))
        obj.disconnectOnTokenExpirationEnabled = ApiClient.convertToType(data['disconnectOnTokenExpirationEnabled'], 'Boolean');
      if (data.hasOwnProperty('discoveryLastRefreshFailureReason'))
        obj.discoveryLastRefreshFailureReason = ApiClient.convertToType(data['discoveryLastRefreshFailureReason'], 'String');
      if (data.hasOwnProperty('discoveryLastRefreshFailureTime'))
        obj.discoveryLastRefreshFailureTime = ApiClient.convertToType(data['discoveryLastRefreshFailureTime'], 'Number');
      if (data.hasOwnProperty('discoveryLastRefreshTime'))
        obj.discoveryLastRefreshTime = ApiClient.convertToType(data['discoveryLastRefreshTime'], 'Number');
      if (data.hasOwnProperty('discoveryNextScheduledRefreshTime'))
        obj.discoveryNextScheduledRefreshTime = ApiClient.convertToType(data['discoveryNextScheduledRefreshTime'], 'Number');
      if (data.hasOwnProperty('discoveryRefreshFailureCount'))
        obj.discoveryRefreshFailureCount = ApiClient.convertToType(data['discoveryRefreshFailureCount'], 'Number');
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('endpointDiscovery'))
        obj.endpointDiscovery = ApiClient.convertToType(data['endpointDiscovery'], 'String');
      if (data.hasOwnProperty('endpointDiscoveryRefreshInterval'))
        obj.endpointDiscoveryRefreshInterval = ApiClient.convertToType(data['endpointDiscoveryRefreshInterval'], 'Number');
      if (data.hasOwnProperty('endpointIntrospection'))
        obj.endpointIntrospection = ApiClient.convertToType(data['endpointIntrospection'], 'String');
      if (data.hasOwnProperty('endpointIntrospectionOperational'))
        obj.endpointIntrospectionOperational = ApiClient.convertToType(data['endpointIntrospectionOperational'], 'String');
      if (data.hasOwnProperty('endpointIntrospectionTimeout'))
        obj.endpointIntrospectionTimeout = ApiClient.convertToType(data['endpointIntrospectionTimeout'], 'Number');
      if (data.hasOwnProperty('endpointJwks'))
        obj.endpointJwks = ApiClient.convertToType(data['endpointJwks'], 'String');
      if (data.hasOwnProperty('endpointJwksOperational'))
        obj.endpointJwksOperational = ApiClient.convertToType(data['endpointJwksOperational'], 'String');
      if (data.hasOwnProperty('endpointJwksRefreshInterval'))
        obj.endpointJwksRefreshInterval = ApiClient.convertToType(data['endpointJwksRefreshInterval'], 'Number');
      if (data.hasOwnProperty('endpointUserinfo'))
        obj.endpointUserinfo = ApiClient.convertToType(data['endpointUserinfo'], 'String');
      if (data.hasOwnProperty('endpointUserinfoOperational'))
        obj.endpointUserinfoOperational = ApiClient.convertToType(data['endpointUserinfoOperational'], 'String');
      if (data.hasOwnProperty('endpointUserinfoTimeout'))
        obj.endpointUserinfoTimeout = ApiClient.convertToType(data['endpointUserinfoTimeout'], 'Number');
      if (data.hasOwnProperty('expiredTokenCount'))
        obj.expiredTokenCount = ApiClient.convertToType(data['expiredTokenCount'], 'Number');
      if (data.hasOwnProperty('groupsFoundInTokenCount'))
        obj.groupsFoundInTokenCount = ApiClient.convertToType(data['groupsFoundInTokenCount'], 'Number');
      if (data.hasOwnProperty('inactiveReason'))
        obj.inactiveReason = ApiClient.convertToType(data['inactiveReason'], 'String');
      if (data.hasOwnProperty('introspectionAverageTime'))
        obj.introspectionAverageTime = ApiClient.convertToType(data['introspectionAverageTime'], 'Number');
      if (data.hasOwnProperty('introspectionLastFailureReason'))
        obj.introspectionLastFailureReason = ApiClient.convertToType(data['introspectionLastFailureReason'], 'String');
      if (data.hasOwnProperty('introspectionLastFailureTime'))
        obj.introspectionLastFailureTime = ApiClient.convertToType(data['introspectionLastFailureTime'], 'Number');
      if (data.hasOwnProperty('introspectionMissingCount'))
        obj.introspectionMissingCount = ApiClient.convertToType(data['introspectionMissingCount'], 'Number');
      if (data.hasOwnProperty('introspectionMissingGroupsCount'))
        obj.introspectionMissingGroupsCount = ApiClient.convertToType(data['introspectionMissingGroupsCount'], 'Number');
      if (data.hasOwnProperty('introspectionMissingUsernameCount'))
        obj.introspectionMissingUsernameCount = ApiClient.convertToType(data['introspectionMissingUsernameCount'], 'Number');
      if (data.hasOwnProperty('introspectionRequestCount'))
        obj.introspectionRequestCount = ApiClient.convertToType(data['introspectionRequestCount'], 'Number');
      if (data.hasOwnProperty('introspectionResponseInvalidCount'))
        obj.introspectionResponseInvalidCount = ApiClient.convertToType(data['introspectionResponseInvalidCount'], 'Number');
      if (data.hasOwnProperty('introspectionStatusOkCount'))
        obj.introspectionStatusOkCount = ApiClient.convertToType(data['introspectionStatusOkCount'], 'Number');
      if (data.hasOwnProperty('introspectionStatusOtherCount'))
        obj.introspectionStatusOtherCount = ApiClient.convertToType(data['introspectionStatusOtherCount'], 'Number');
      if (data.hasOwnProperty('introspectionTokenNotActiveCount'))
        obj.introspectionTokenNotActiveCount = ApiClient.convertToType(data['introspectionTokenNotActiveCount'], 'Number');
      if (data.hasOwnProperty('invalidTokenCount'))
        obj.invalidTokenCount = ApiClient.convertToType(data['invalidTokenCount'], 'Number');
      if (data.hasOwnProperty('issuer'))
        obj.issuer = ApiClient.convertToType(data['issuer'], 'String');
      if (data.hasOwnProperty('issuerOperational'))
        obj.issuerOperational = ApiClient.convertToType(data['issuerOperational'], 'String');
      if (data.hasOwnProperty('jwksLastRefreshFailureReason'))
        obj.jwksLastRefreshFailureReason = ApiClient.convertToType(data['jwksLastRefreshFailureReason'], 'String');
      if (data.hasOwnProperty('jwksLastRefreshFailureTime'))
        obj.jwksLastRefreshFailureTime = ApiClient.convertToType(data['jwksLastRefreshFailureTime'], 'Number');
      if (data.hasOwnProperty('jwksLastRefreshTime'))
        obj.jwksLastRefreshTime = ApiClient.convertToType(data['jwksLastRefreshTime'], 'Number');
      if (data.hasOwnProperty('jwksNextScheduledRefreshTime'))
        obj.jwksNextScheduledRefreshTime = ApiClient.convertToType(data['jwksNextScheduledRefreshTime'], 'Number');
      if (data.hasOwnProperty('jwksRefreshFailureCount'))
        obj.jwksRefreshFailureCount = ApiClient.convertToType(data['jwksRefreshFailureCount'], 'Number');
      if (data.hasOwnProperty('mqttUsernameValidateEnabled'))
        obj.mqttUsernameValidateEnabled = ApiClient.convertToType(data['mqttUsernameValidateEnabled'], 'Boolean');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('oauthProfileName'))
        obj.oauthProfileName = ApiClient.convertToType(data['oauthProfileName'], 'String');
      if (data.hasOwnProperty('oauthRole'))
        obj.oauthRole = ApiClient.convertToType(data['oauthRole'], 'String');
      if (data.hasOwnProperty('requestCount'))
        obj.requestCount = ApiClient.convertToType(data['requestCount'], 'Number');
      if (data.hasOwnProperty('resourceServerParseAccessTokenEnabled'))
        obj.resourceServerParseAccessTokenEnabled = ApiClient.convertToType(data['resourceServerParseAccessTokenEnabled'], 'Boolean');
      if (data.hasOwnProperty('resourceServerRequiredAudience'))
        obj.resourceServerRequiredAudience = ApiClient.convertToType(data['resourceServerRequiredAudience'], 'String');
      if (data.hasOwnProperty('resourceServerRequiredIssuer'))
        obj.resourceServerRequiredIssuer = ApiClient.convertToType(data['resourceServerRequiredIssuer'], 'String');
      if (data.hasOwnProperty('resourceServerRequiredScope'))
        obj.resourceServerRequiredScope = ApiClient.convertToType(data['resourceServerRequiredScope'], 'String');
      if (data.hasOwnProperty('resourceServerRequiredType'))
        obj.resourceServerRequiredType = ApiClient.convertToType(data['resourceServerRequiredType'], 'String');
      if (data.hasOwnProperty('resourceServerValidateAudienceEnabled'))
        obj.resourceServerValidateAudienceEnabled = ApiClient.convertToType(data['resourceServerValidateAudienceEnabled'], 'Boolean');
      if (data.hasOwnProperty('resourceServerValidateIssuerEnabled'))
        obj.resourceServerValidateIssuerEnabled = ApiClient.convertToType(data['resourceServerValidateIssuerEnabled'], 'Boolean');
      if (data.hasOwnProperty('resourceServerValidateScopeEnabled'))
        obj.resourceServerValidateScopeEnabled = ApiClient.convertToType(data['resourceServerValidateScopeEnabled'], 'Boolean');
      if (data.hasOwnProperty('resourceServerValidateTypeEnabled'))
        obj.resourceServerValidateTypeEnabled = ApiClient.convertToType(data['resourceServerValidateTypeEnabled'], 'Boolean');
      if (data.hasOwnProperty('successCount'))
        obj.successCount = ApiClient.convertToType(data['successCount'], 'Number');
      if (data.hasOwnProperty('userinfoAverageTime'))
        obj.userinfoAverageTime = ApiClient.convertToType(data['userinfoAverageTime'], 'Number');
      if (data.hasOwnProperty('userinfoLastFailureReason'))
        obj.userinfoLastFailureReason = ApiClient.convertToType(data['userinfoLastFailureReason'], 'String');
      if (data.hasOwnProperty('userinfoLastFailureTime'))
        obj.userinfoLastFailureTime = ApiClient.convertToType(data['userinfoLastFailureTime'], 'Number');
      if (data.hasOwnProperty('userinfoMissingCount'))
        obj.userinfoMissingCount = ApiClient.convertToType(data['userinfoMissingCount'], 'Number');
      if (data.hasOwnProperty('userinfoMissingGroupsCount'))
        obj.userinfoMissingGroupsCount = ApiClient.convertToType(data['userinfoMissingGroupsCount'], 'Number');
      if (data.hasOwnProperty('userinfoMissingUsernameCount'))
        obj.userinfoMissingUsernameCount = ApiClient.convertToType(data['userinfoMissingUsernameCount'], 'Number');
      if (data.hasOwnProperty('userinfoRequestCount'))
        obj.userinfoRequestCount = ApiClient.convertToType(data['userinfoRequestCount'], 'Number');
      if (data.hasOwnProperty('userinfoResponseInvalidCount'))
        obj.userinfoResponseInvalidCount = ApiClient.convertToType(data['userinfoResponseInvalidCount'], 'Number');
      if (data.hasOwnProperty('userinfoStatusOkCount'))
        obj.userinfoStatusOkCount = ApiClient.convertToType(data['userinfoStatusOkCount'], 'Number');
      if (data.hasOwnProperty('userinfoStatusOtherCount'))
        obj.userinfoStatusOtherCount = ApiClient.convertToType(data['userinfoStatusOtherCount'], 'Number');
      if (data.hasOwnProperty('userinfoSubjectMismatchCount'))
        obj.userinfoSubjectMismatchCount = ApiClient.convertToType(data['userinfoSubjectMismatchCount'], 'Number');
      if (data.hasOwnProperty('usernameClaimName'))
        obj.usernameClaimName = ApiClient.convertToType(data['usernameClaimName'], 'String');
      if (data.hasOwnProperty('usernameFoundInTokenCount'))
        obj.usernameFoundInTokenCount = ApiClient.convertToType(data['usernameFoundInTokenCount'], 'Number');
    }
    return obj;
  }
}

/**
 * Indicates whether the profile is active. An enabled profile may not be active if discovery is not complete, if there is no issuer specified, or if there is another profile with the same issuer. Available since 2.26.
 * @member {Boolean} active
 */
MsgVpnAuthenticationOauthProfileModel.prototype.active = undefined;

/**
 * The name of the groups claim. If non-empty, the specified claim will be used to determine groups for authorization. If empty, the authorizationType attribute of the Message VPN will be used to determine authorization.
 * @member {String} authorizationGroupsClaimName
 */
MsgVpnAuthenticationOauthProfileModel.prototype.authorizationGroupsClaimName = undefined;

/**
 * Allowed values for the <code>authorizationGroupsClaimStringFormat</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnAuthenticationOauthProfileModel.AuthorizationGroupsClaimStringFormatEnum = {
  /**
   * value: "single"
   * @const
   */
  single: "single",

  /**
   * value: "space-delimited"
   * @const
   */
  spaceDelimited: "space-delimited"
};
/**
 * The format of the authorization groups claim value when it is a string. The allowed values and their meaning are:  <pre> \"single\" - When the claim is a string, it is interpreted as as single group. \"space-delimited\" - When the claim is a string, it is interpreted as a space-delimited list of groups, similar to the \"scope\" claim. </pre>  Available since 2.32.
 * @member {module:model/MsgVpnAuthenticationOauthProfileModel.AuthorizationGroupsClaimStringFormatEnum} authorizationGroupsClaimStringFormat
 */
MsgVpnAuthenticationOauthProfileModel.prototype.authorizationGroupsClaimStringFormat = undefined;

/**
 * The OAuth client id.
 * @member {String} clientId
 */
MsgVpnAuthenticationOauthProfileModel.prototype.clientId = undefined;

/**
 * The required value for the TYP field in the ID token header.
 * @member {String} clientRequiredType
 */
MsgVpnAuthenticationOauthProfileModel.prototype.clientRequiredType = undefined;

/**
 * Enable or disable verification of the TYP field in the ID token header.
 * @member {Boolean} clientValidateTypeEnabled
 */
MsgVpnAuthenticationOauthProfileModel.prototype.clientValidateTypeEnabled = undefined;

/**
 * Enable or disable the disconnection of clients when their tokens expire. Changing this value does not affect existing clients, only new client connections.
 * @member {Boolean} disconnectOnTokenExpirationEnabled
 */
MsgVpnAuthenticationOauthProfileModel.prototype.disconnectOnTokenExpirationEnabled = undefined;

/**
 * The reason for the last discovery endpoint refresh failure.
 * @member {String} discoveryLastRefreshFailureReason
 */
MsgVpnAuthenticationOauthProfileModel.prototype.discoveryLastRefreshFailureReason = undefined;

/**
 * The timestamp of the last discovery endpoint refresh failure. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} discoveryLastRefreshFailureTime
 */
MsgVpnAuthenticationOauthProfileModel.prototype.discoveryLastRefreshFailureTime = undefined;

/**
 * The timestamp of the last discovery endpoint refresh success. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} discoveryLastRefreshTime
 */
MsgVpnAuthenticationOauthProfileModel.prototype.discoveryLastRefreshTime = undefined;

/**
 * The timestamp of the next scheduled discovery endpoint refresh. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} discoveryNextScheduledRefreshTime
 */
MsgVpnAuthenticationOauthProfileModel.prototype.discoveryNextScheduledRefreshTime = undefined;

/**
 * The number of discovery endpoint refresh failures.
 * @member {Number} discoveryRefreshFailureCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.discoveryRefreshFailureCount = undefined;

/**
 * Enable or disable the OAuth profile.
 * @member {Boolean} enabled
 */
MsgVpnAuthenticationOauthProfileModel.prototype.enabled = undefined;

/**
 * The OpenID Connect discovery endpoint or OAuth Authorization Server Metadata endpoint.
 * @member {String} endpointDiscovery
 */
MsgVpnAuthenticationOauthProfileModel.prototype.endpointDiscovery = undefined;

/**
 * The number of seconds between discovery endpoint requests.
 * @member {Number} endpointDiscoveryRefreshInterval
 */
MsgVpnAuthenticationOauthProfileModel.prototype.endpointDiscoveryRefreshInterval = undefined;

/**
 * The OAuth introspection endpoint.
 * @member {String} endpointIntrospection
 */
MsgVpnAuthenticationOauthProfileModel.prototype.endpointIntrospection = undefined;

/**
 * The operational OAuth introspection endpoint.
 * @member {String} endpointIntrospectionOperational
 */
MsgVpnAuthenticationOauthProfileModel.prototype.endpointIntrospectionOperational = undefined;

/**
 * The maximum time in seconds a token introspection request is allowed to take.
 * @member {Number} endpointIntrospectionTimeout
 */
MsgVpnAuthenticationOauthProfileModel.prototype.endpointIntrospectionTimeout = undefined;

/**
 * The OAuth JWKS endpoint.
 * @member {String} endpointJwks
 */
MsgVpnAuthenticationOauthProfileModel.prototype.endpointJwks = undefined;

/**
 * The operational OAuth JWKS endpoint.
 * @member {String} endpointJwksOperational
 */
MsgVpnAuthenticationOauthProfileModel.prototype.endpointJwksOperational = undefined;

/**
 * The number of seconds between JWKS endpoint requests.
 * @member {Number} endpointJwksRefreshInterval
 */
MsgVpnAuthenticationOauthProfileModel.prototype.endpointJwksRefreshInterval = undefined;

/**
 * The OpenID Connect Userinfo endpoint.
 * @member {String} endpointUserinfo
 */
MsgVpnAuthenticationOauthProfileModel.prototype.endpointUserinfo = undefined;

/**
 * The operational OpenID Connect Userinfo endpoint.
 * @member {String} endpointUserinfoOperational
 */
MsgVpnAuthenticationOauthProfileModel.prototype.endpointUserinfoOperational = undefined;

/**
 * The maximum time in seconds a userinfo request is allowed to take.
 * @member {Number} endpointUserinfoTimeout
 */
MsgVpnAuthenticationOauthProfileModel.prototype.endpointUserinfoTimeout = undefined;

/**
 * The number of requests with an expired OAuth token.
 * @member {Number} expiredTokenCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.expiredTokenCount = undefined;

/**
 * The number of times the groups were successfully found in the ID token or access token for request authentication.
 * @member {Number} groupsFoundInTokenCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.groupsFoundInTokenCount = undefined;

/**
 * The reason the profile is not active. The allowed values and their meaning are:  <pre> \"msg-vpn-disabled\" - The Message VPN is disabled. \"oauth-disabled\" - OAuth is disabled for the Message VPN. \"profile-disabled\" - The OAuth profile is disabled. \"missing-issuer\" - The issuer has not been discovered or configured. \"duplicate-issuer\" - Another OAuth profile in the Message VPN already has the same issuer. \"none\" - The OAuth profile is active. </pre>  Available since 2.26.
 * @member {String} inactiveReason
 */
MsgVpnAuthenticationOauthProfileModel.prototype.inactiveReason = undefined;

/**
 * The one minute average of the time required to complete a token introspection, in milliseconds (ms).
 * @member {Number} introspectionAverageTime
 */
MsgVpnAuthenticationOauthProfileModel.prototype.introspectionAverageTime = undefined;

/**
 * The reason for the introspection endpoint request failure.
 * @member {String} introspectionLastFailureReason
 */
MsgVpnAuthenticationOauthProfileModel.prototype.introspectionLastFailureReason = undefined;

/**
 * The timestamp of the last introspection endpoint request failure. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} introspectionLastFailureTime
 */
MsgVpnAuthenticationOauthProfileModel.prototype.introspectionLastFailureTime = undefined;

/**
 * The number of failures during request authentication due to missing introspection configuration (a introspection request was required but no introspection endpoint was configured).
 * @member {Number} introspectionMissingCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.introspectionMissingCount = undefined;

/**
 * The number of introspection request made from the broker during request authentication for this OAuth profile where the configured groups claim wasn't found in the access token or the introspection response.
 * @member {Number} introspectionMissingGroupsCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.introspectionMissingGroupsCount = undefined;

/**
 * The number of introspection requests made from the broker during request authentication for this OAuth profile where the configured username claim wasn't found in the access token or introspection response.
 * @member {Number} introspectionMissingUsernameCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.introspectionMissingUsernameCount = undefined;

/**
 * The number of requests made to the introspection endpoint during request authentication.
 * @member {Number} introspectionRequestCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.introspectionRequestCount = undefined;

/**
 * The number of introspection responses during request authentication that couldn't be parsed.
 * @member {Number} introspectionResponseInvalidCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.introspectionResponseInvalidCount = undefined;

/**
 * The number of introspection requests made from the broker during request authentication for this OAuth profile with 200 status responses.
 * @member {Number} introspectionStatusOkCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.introspectionStatusOkCount = undefined;

/**
 * The number of introspection requests made from the broker during request authentication for this OAuth profile with status responses other than 200.
 * @member {Number} introspectionStatusOtherCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.introspectionStatusOtherCount = undefined;

/**
 * The number of introspection responses indicating that the provided token was not active.
 * @member {Number} introspectionTokenNotActiveCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.introspectionTokenNotActiveCount = undefined;

/**
 * The number of requests with an invalid OAuth token.
 * @member {Number} invalidTokenCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.invalidTokenCount = undefined;

/**
 * The Issuer Identifier for the OAuth provider.
 * @member {String} issuer
 */
MsgVpnAuthenticationOauthProfileModel.prototype.issuer = undefined;

/**
 * The operational Issuer Identifier for the OAuth provider.
 * @member {String} issuerOperational
 */
MsgVpnAuthenticationOauthProfileModel.prototype.issuerOperational = undefined;

/**
 * The reason for the last JWKS public key refresh failure.
 * @member {String} jwksLastRefreshFailureReason
 */
MsgVpnAuthenticationOauthProfileModel.prototype.jwksLastRefreshFailureReason = undefined;

/**
 * The timestamp of the last JWKS public key refresh failure. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} jwksLastRefreshFailureTime
 */
MsgVpnAuthenticationOauthProfileModel.prototype.jwksLastRefreshFailureTime = undefined;

/**
 * The timestamp of the last JWKS public key refresh success. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} jwksLastRefreshTime
 */
MsgVpnAuthenticationOauthProfileModel.prototype.jwksLastRefreshTime = undefined;

/**
 * The timestamp of the next scheduled JWKS public key refresh. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} jwksNextScheduledRefreshTime
 */
MsgVpnAuthenticationOauthProfileModel.prototype.jwksNextScheduledRefreshTime = undefined;

/**
 * The number of JWKS public key refresh failures.
 * @member {Number} jwksRefreshFailureCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.jwksRefreshFailureCount = undefined;

/**
 * Enable or disable whether the API provided MQTT client username will be validated against the username calculated from the token(s). When enabled, connection attempts by MQTT clients are rejected if they differ. Note that this value only applies to MQTT clients; SMF client usernames will not be validated.
 * @member {Boolean} mqttUsernameValidateEnabled
 */
MsgVpnAuthenticationOauthProfileModel.prototype.mqttUsernameValidateEnabled = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnAuthenticationOauthProfileModel.prototype.msgVpnName = undefined;

/**
 * The name of the OAuth profile.
 * @member {String} oauthProfileName
 */
MsgVpnAuthenticationOauthProfileModel.prototype.oauthProfileName = undefined;

/**
 * Allowed values for the <code>oauthRole</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnAuthenticationOauthProfileModel.OauthRoleEnum = {
  /**
   * value: "client"
   * @const
   */
  client: "client",

  /**
   * value: "resource-server"
   * @const
   */
  resourceServer: "resource-server"
};
/**
 * The OAuth role of the broker. The allowed values and their meaning are:  <pre> \"client\" - The broker is in the OAuth client role. \"resource-server\" - The broker is in the OAuth resource server role. </pre> 
 * @member {module:model/MsgVpnAuthenticationOauthProfileModel.OauthRoleEnum} oauthRole
 */
MsgVpnAuthenticationOauthProfileModel.prototype.oauthRole = undefined;

/**
 * The number of requests (successful and unsuccessful) using this OAuth profile.
 * @member {Number} requestCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.requestCount = undefined;

/**
 * Enable or disable parsing of the access token as a JWT.
 * @member {Boolean} resourceServerParseAccessTokenEnabled
 */
MsgVpnAuthenticationOauthProfileModel.prototype.resourceServerParseAccessTokenEnabled = undefined;

/**
 * The required audience value.
 * @member {String} resourceServerRequiredAudience
 */
MsgVpnAuthenticationOauthProfileModel.prototype.resourceServerRequiredAudience = undefined;

/**
 * The required issuer value.
 * @member {String} resourceServerRequiredIssuer
 */
MsgVpnAuthenticationOauthProfileModel.prototype.resourceServerRequiredIssuer = undefined;

/**
 * A space-separated list of scopes that must be present in the scope claim.
 * @member {String} resourceServerRequiredScope
 */
MsgVpnAuthenticationOauthProfileModel.prototype.resourceServerRequiredScope = undefined;

/**
 * The required TYP value.
 * @member {String} resourceServerRequiredType
 */
MsgVpnAuthenticationOauthProfileModel.prototype.resourceServerRequiredType = undefined;

/**
 * Enable or disable verification of the audience claim in the access token or introspection response.
 * @member {Boolean} resourceServerValidateAudienceEnabled
 */
MsgVpnAuthenticationOauthProfileModel.prototype.resourceServerValidateAudienceEnabled = undefined;

/**
 * Enable or disable verification of the issuer claim in the access token or introspection response.
 * @member {Boolean} resourceServerValidateIssuerEnabled
 */
MsgVpnAuthenticationOauthProfileModel.prototype.resourceServerValidateIssuerEnabled = undefined;

/**
 * Enable or disable verification of the scope claim in the access token or introspection response.
 * @member {Boolean} resourceServerValidateScopeEnabled
 */
MsgVpnAuthenticationOauthProfileModel.prototype.resourceServerValidateScopeEnabled = undefined;

/**
 * Enable or disable verification of the TYP field in the access token header.
 * @member {Boolean} resourceServerValidateTypeEnabled
 */
MsgVpnAuthenticationOauthProfileModel.prototype.resourceServerValidateTypeEnabled = undefined;

/**
 * The number of successful authentications using this OAuth profile.
 * @member {Number} successCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.successCount = undefined;

/**
 * The one minute average of the time required to complete a token userinfo request, in milliseconds (ms).
 * @member {Number} userinfoAverageTime
 */
MsgVpnAuthenticationOauthProfileModel.prototype.userinfoAverageTime = undefined;

/**
 * The reason for the userinfo endpoint request failure.
 * @member {String} userinfoLastFailureReason
 */
MsgVpnAuthenticationOauthProfileModel.prototype.userinfoLastFailureReason = undefined;

/**
 * The timestamp of the last userinfo endpoint request failure. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} userinfoLastFailureTime
 */
MsgVpnAuthenticationOauthProfileModel.prototype.userinfoLastFailureTime = undefined;

/**
 * The number of failures due to missing Userinfo configuration (a Userinfo request was required but no Userinfo endpoint was configured) during request authentication.
 * @member {Number} userinfoMissingCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.userinfoMissingCount = undefined;

/**
 * The number of Userinfo request made from the broker during request authentication for this OAuth profile where the configured groups claim wasn't found in the ID token or the Userinfo response.
 * @member {Number} userinfoMissingGroupsCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.userinfoMissingGroupsCount = undefined;

/**
 * The number of Userinfo requests made from the broker during request authentication for this OAuth profile where the configured username claim wasn't found in the ID token or Userinfo response.
 * @member {Number} userinfoMissingUsernameCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.userinfoMissingUsernameCount = undefined;

/**
 * The number of requests made to the Userinfo endpoint during request authentication.
 * @member {Number} userinfoRequestCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.userinfoRequestCount = undefined;

/**
 * The number of Userinfo requests made from the broker during request authentication for this OAuth profile with responses that couldn't be parsed.
 * @member {Number} userinfoResponseInvalidCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.userinfoResponseInvalidCount = undefined;

/**
 * The number of Userinfo requests made from the broker during request authentication for this OAuth profile with 200 status responses.
 * @member {Number} userinfoStatusOkCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.userinfoStatusOkCount = undefined;

/**
 * The number of Userinfo requests made from the broker during request authentication for this OAuth profile with status responses other than 200.
 * @member {Number} userinfoStatusOtherCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.userinfoStatusOtherCount = undefined;

/**
 * The number of Userinfo requests made from the broker during request authentication for this OAuth profile with subject claims that did not match the subject from the ID token.
 * @member {Number} userinfoSubjectMismatchCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.userinfoSubjectMismatchCount = undefined;

/**
 * The name of the username claim.
 * @member {String} usernameClaimName
 */
MsgVpnAuthenticationOauthProfileModel.prototype.usernameClaimName = undefined;

/**
 * The number of time the username was successfully found in the ID token or access token for request authentication.
 * @member {Number} usernameFoundInTokenCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.usernameFoundInTokenCount = undefined;

