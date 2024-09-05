import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnAuthenticationOauthProviderModel model module.
 * @module model/MsgVpnAuthenticationOauthProviderModel
 * @version 2.36
 */
export class MsgVpnAuthenticationOauthProviderModel {
  /**
   * Constructs a new <code>MsgVpnAuthenticationOauthProviderModel</code>.
   * @alias module:model/MsgVpnAuthenticationOauthProviderModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAuthenticationOauthProviderModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAuthenticationOauthProviderModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAuthenticationOauthProviderModel} The populated <code>MsgVpnAuthenticationOauthProviderModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAuthenticationOauthProviderModel();
      if (data.hasOwnProperty('audienceClaimName'))
        obj.audienceClaimName = ApiClient.convertToType(data['audienceClaimName'], 'String');
      if (data.hasOwnProperty('audienceClaimSource'))
        obj.audienceClaimSource = ApiClient.convertToType(data['audienceClaimSource'], 'String');
      if (data.hasOwnProperty('audienceClaimValue'))
        obj.audienceClaimValue = ApiClient.convertToType(data['audienceClaimValue'], 'String');
      if (data.hasOwnProperty('audienceValidationEnabled'))
        obj.audienceValidationEnabled = ApiClient.convertToType(data['audienceValidationEnabled'], 'Boolean');
      if (data.hasOwnProperty('authenticationSuccessCount'))
        obj.authenticationSuccessCount = ApiClient.convertToType(data['authenticationSuccessCount'], 'Number');
      if (data.hasOwnProperty('authorizationGroupClaimName'))
        obj.authorizationGroupClaimName = ApiClient.convertToType(data['authorizationGroupClaimName'], 'String');
      if (data.hasOwnProperty('authorizationGroupClaimSource'))
        obj.authorizationGroupClaimSource = ApiClient.convertToType(data['authorizationGroupClaimSource'], 'String');
      if (data.hasOwnProperty('authorizationGroupEnabled'))
        obj.authorizationGroupEnabled = ApiClient.convertToType(data['authorizationGroupEnabled'], 'Boolean');
      if (data.hasOwnProperty('disconnectOnTokenExpirationEnabled'))
        obj.disconnectOnTokenExpirationEnabled = ApiClient.convertToType(data['disconnectOnTokenExpirationEnabled'], 'Boolean');
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
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
      if (data.hasOwnProperty('jwksRefreshInterval'))
        obj.jwksRefreshInterval = ApiClient.convertToType(data['jwksRefreshInterval'], 'Number');
      if (data.hasOwnProperty('jwksUri'))
        obj.jwksUri = ApiClient.convertToType(data['jwksUri'], 'String');
      if (data.hasOwnProperty('loginFailureIncorrectAudienceValueCount'))
        obj.loginFailureIncorrectAudienceValueCount = ApiClient.convertToType(data['loginFailureIncorrectAudienceValueCount'], 'Number');
      if (data.hasOwnProperty('loginFailureInvalidAudienceValueCount'))
        obj.loginFailureInvalidAudienceValueCount = ApiClient.convertToType(data['loginFailureInvalidAudienceValueCount'], 'Number');
      if (data.hasOwnProperty('loginFailureInvalidAuthorizationGroupValueCount'))
        obj.loginFailureInvalidAuthorizationGroupValueCount = ApiClient.convertToType(data['loginFailureInvalidAuthorizationGroupValueCount'], 'Number');
      if (data.hasOwnProperty('loginFailureInvalidJwtSignatureCount'))
        obj.loginFailureInvalidJwtSignatureCount = ApiClient.convertToType(data['loginFailureInvalidJwtSignatureCount'], 'Number');
      if (data.hasOwnProperty('loginFailureInvalidUsernameValueCount'))
        obj.loginFailureInvalidUsernameValueCount = ApiClient.convertToType(data['loginFailureInvalidUsernameValueCount'], 'Number');
      if (data.hasOwnProperty('loginFailureMismatchedUsernameCount'))
        obj.loginFailureMismatchedUsernameCount = ApiClient.convertToType(data['loginFailureMismatchedUsernameCount'], 'Number');
      if (data.hasOwnProperty('loginFailureMissingAudienceCount'))
        obj.loginFailureMissingAudienceCount = ApiClient.convertToType(data['loginFailureMissingAudienceCount'], 'Number');
      if (data.hasOwnProperty('loginFailureMissingJwkCount'))
        obj.loginFailureMissingJwkCount = ApiClient.convertToType(data['loginFailureMissingJwkCount'], 'Number');
      if (data.hasOwnProperty('loginFailureMissingOrInvalidTokenCount'))
        obj.loginFailureMissingOrInvalidTokenCount = ApiClient.convertToType(data['loginFailureMissingOrInvalidTokenCount'], 'Number');
      if (data.hasOwnProperty('loginFailureMissingUsernameCount'))
        obj.loginFailureMissingUsernameCount = ApiClient.convertToType(data['loginFailureMissingUsernameCount'], 'Number');
      if (data.hasOwnProperty('loginFailureTokenExpiredCount'))
        obj.loginFailureTokenExpiredCount = ApiClient.convertToType(data['loginFailureTokenExpiredCount'], 'Number');
      if (data.hasOwnProperty('loginFailureTokenIntrospectionErroredCount'))
        obj.loginFailureTokenIntrospectionErroredCount = ApiClient.convertToType(data['loginFailureTokenIntrospectionErroredCount'], 'Number');
      if (data.hasOwnProperty('loginFailureTokenIntrospectionFailureCount'))
        obj.loginFailureTokenIntrospectionFailureCount = ApiClient.convertToType(data['loginFailureTokenIntrospectionFailureCount'], 'Number');
      if (data.hasOwnProperty('loginFailureTokenIntrospectionHttpsErrorCount'))
        obj.loginFailureTokenIntrospectionHttpsErrorCount = ApiClient.convertToType(data['loginFailureTokenIntrospectionHttpsErrorCount'], 'Number');
      if (data.hasOwnProperty('loginFailureTokenIntrospectionInvalidCount'))
        obj.loginFailureTokenIntrospectionInvalidCount = ApiClient.convertToType(data['loginFailureTokenIntrospectionInvalidCount'], 'Number');
      if (data.hasOwnProperty('loginFailureTokenIntrospectionTimeoutCount'))
        obj.loginFailureTokenIntrospectionTimeoutCount = ApiClient.convertToType(data['loginFailureTokenIntrospectionTimeoutCount'], 'Number');
      if (data.hasOwnProperty('loginFailureTokenNotValidYetCount'))
        obj.loginFailureTokenNotValidYetCount = ApiClient.convertToType(data['loginFailureTokenNotValidYetCount'], 'Number');
      if (data.hasOwnProperty('loginFailureUnsupportedAlgCount'))
        obj.loginFailureUnsupportedAlgCount = ApiClient.convertToType(data['loginFailureUnsupportedAlgCount'], 'Number');
      if (data.hasOwnProperty('missingAuthorizationGroupCount'))
        obj.missingAuthorizationGroupCount = ApiClient.convertToType(data['missingAuthorizationGroupCount'], 'Number');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('oauthProviderName'))
        obj.oauthProviderName = ApiClient.convertToType(data['oauthProviderName'], 'String');
      if (data.hasOwnProperty('tokenIgnoreTimeLimitsEnabled'))
        obj.tokenIgnoreTimeLimitsEnabled = ApiClient.convertToType(data['tokenIgnoreTimeLimitsEnabled'], 'Boolean');
      if (data.hasOwnProperty('tokenIntrospectionAverageTime'))
        obj.tokenIntrospectionAverageTime = ApiClient.convertToType(data['tokenIntrospectionAverageTime'], 'Number');
      if (data.hasOwnProperty('tokenIntrospectionLastFailureReason'))
        obj.tokenIntrospectionLastFailureReason = ApiClient.convertToType(data['tokenIntrospectionLastFailureReason'], 'String');
      if (data.hasOwnProperty('tokenIntrospectionLastFailureTime'))
        obj.tokenIntrospectionLastFailureTime = ApiClient.convertToType(data['tokenIntrospectionLastFailureTime'], 'Number');
      if (data.hasOwnProperty('tokenIntrospectionParameterName'))
        obj.tokenIntrospectionParameterName = ApiClient.convertToType(data['tokenIntrospectionParameterName'], 'String');
      if (data.hasOwnProperty('tokenIntrospectionSuccessCount'))
        obj.tokenIntrospectionSuccessCount = ApiClient.convertToType(data['tokenIntrospectionSuccessCount'], 'Number');
      if (data.hasOwnProperty('tokenIntrospectionTimeout'))
        obj.tokenIntrospectionTimeout = ApiClient.convertToType(data['tokenIntrospectionTimeout'], 'Number');
      if (data.hasOwnProperty('tokenIntrospectionUri'))
        obj.tokenIntrospectionUri = ApiClient.convertToType(data['tokenIntrospectionUri'], 'String');
      if (data.hasOwnProperty('tokenIntrospectionUsername'))
        obj.tokenIntrospectionUsername = ApiClient.convertToType(data['tokenIntrospectionUsername'], 'String');
      if (data.hasOwnProperty('usernameClaimName'))
        obj.usernameClaimName = ApiClient.convertToType(data['usernameClaimName'], 'String');
      if (data.hasOwnProperty('usernameClaimSource'))
        obj.usernameClaimSource = ApiClient.convertToType(data['usernameClaimSource'], 'String');
      if (data.hasOwnProperty('usernameValidateEnabled'))
        obj.usernameValidateEnabled = ApiClient.convertToType(data['usernameValidateEnabled'], 'Boolean');
    }
    return obj;
  }
}

/**
 * The audience claim name, indicating which part of the object to use for determining the audience. Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {String} audienceClaimName
 */
MsgVpnAuthenticationOauthProviderModel.prototype.audienceClaimName = undefined;

/**
 * Allowed values for the <code>audienceClaimSource</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnAuthenticationOauthProviderModel.AudienceClaimSourceEnum = {
  /**
   * value: "access-token"
   * @const
   */
  accessToken: "access-token",

  /**
   * value: "id-token"
   * @const
   */
  idToken: "id-token",

  /**
   * value: "introspection"
   * @const
   */
  introspection: "introspection"
};
/**
 * The audience claim source, indicating where to search for the audience value. The allowed values and their meaning are:  <pre> \"access-token\" - The OAuth v2 access_token. \"id-token\" - The OpenID Connect id_token. \"introspection\" - The result of introspecting the OAuth v2 access_token. </pre>  Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {module:model/MsgVpnAuthenticationOauthProviderModel.AudienceClaimSourceEnum} audienceClaimSource
 */
MsgVpnAuthenticationOauthProviderModel.prototype.audienceClaimSource = undefined;

/**
 * The required audience value for a token to be considered valid. Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {String} audienceClaimValue
 */
MsgVpnAuthenticationOauthProviderModel.prototype.audienceClaimValue = undefined;

/**
 * Indicates whether audience validation is enabled. Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {Boolean} audienceValidationEnabled
 */
MsgVpnAuthenticationOauthProviderModel.prototype.audienceValidationEnabled = undefined;

/**
 * The number of OAuth Provider client authentications that succeeded. Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {Number} authenticationSuccessCount
 */
MsgVpnAuthenticationOauthProviderModel.prototype.authenticationSuccessCount = undefined;

/**
 * The authorization group claim name, indicating which part of the object to use for determining the authorization group. Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {String} authorizationGroupClaimName
 */
MsgVpnAuthenticationOauthProviderModel.prototype.authorizationGroupClaimName = undefined;

/**
 * Allowed values for the <code>authorizationGroupClaimSource</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnAuthenticationOauthProviderModel.AuthorizationGroupClaimSourceEnum = {
  /**
   * value: "access-token"
   * @const
   */
  accessToken: "access-token",

  /**
   * value: "id-token"
   * @const
   */
  idToken: "id-token",

  /**
   * value: "introspection"
   * @const
   */
  introspection: "introspection"
};
/**
 * The authorization group claim source, indicating where to search for the authorization group name. The allowed values and their meaning are:  <pre> \"access-token\" - The OAuth v2 access_token. \"id-token\" - The OpenID Connect id_token. \"introspection\" - The result of introspecting the OAuth v2 access_token. </pre>  Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {module:model/MsgVpnAuthenticationOauthProviderModel.AuthorizationGroupClaimSourceEnum} authorizationGroupClaimSource
 */
MsgVpnAuthenticationOauthProviderModel.prototype.authorizationGroupClaimSource = undefined;

/**
 * Indicates whether OAuth based authorization is enabled and the configured authorization type for OAuth clients is overridden. Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {Boolean} authorizationGroupEnabled
 */
MsgVpnAuthenticationOauthProviderModel.prototype.authorizationGroupEnabled = undefined;

/**
 * Indicates whether clients are disconnected when their tokens expire. Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {Boolean} disconnectOnTokenExpirationEnabled
 */
MsgVpnAuthenticationOauthProviderModel.prototype.disconnectOnTokenExpirationEnabled = undefined;

/**
 * Indicates whether OAuth Provider client authentication is enabled. Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {Boolean} enabled
 */
MsgVpnAuthenticationOauthProviderModel.prototype.enabled = undefined;

/**
 * The reason for the last JWKS public key refresh failure. Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {String} jwksLastRefreshFailureReason
 */
MsgVpnAuthenticationOauthProviderModel.prototype.jwksLastRefreshFailureReason = undefined;

/**
 * The timestamp of the last JWKS public key refresh failure. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time). Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {Number} jwksLastRefreshFailureTime
 */
MsgVpnAuthenticationOauthProviderModel.prototype.jwksLastRefreshFailureTime = undefined;

/**
 * The timestamp of the last JWKS public key refresh success. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time). Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {Number} jwksLastRefreshTime
 */
MsgVpnAuthenticationOauthProviderModel.prototype.jwksLastRefreshTime = undefined;

/**
 * The timestamp of the next scheduled JWKS public key refresh. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time). Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {Number} jwksNextScheduledRefreshTime
 */
MsgVpnAuthenticationOauthProviderModel.prototype.jwksNextScheduledRefreshTime = undefined;

/**
 * The number of JWKS public key refresh failures. Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {Number} jwksRefreshFailureCount
 */
MsgVpnAuthenticationOauthProviderModel.prototype.jwksRefreshFailureCount = undefined;

/**
 * The number of seconds between forced JWKS public key refreshing. Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {Number} jwksRefreshInterval
 */
MsgVpnAuthenticationOauthProviderModel.prototype.jwksRefreshInterval = undefined;

/**
 * The URI where the OAuth provider publishes its JWKS public keys. Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {String} jwksUri
 */
MsgVpnAuthenticationOauthProviderModel.prototype.jwksUri = undefined;

/**
 * The number of login failures due to an incorrect audience value. Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {Number} loginFailureIncorrectAudienceValueCount
 */
MsgVpnAuthenticationOauthProviderModel.prototype.loginFailureIncorrectAudienceValueCount = undefined;

/**
 * The number of login failures due to an invalid audience value. Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {Number} loginFailureInvalidAudienceValueCount
 */
MsgVpnAuthenticationOauthProviderModel.prototype.loginFailureInvalidAudienceValueCount = undefined;

/**
 * The number of login failures due to an invalid authorization group value (zero-length or non-string). Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {Number} loginFailureInvalidAuthorizationGroupValueCount
 */
MsgVpnAuthenticationOauthProviderModel.prototype.loginFailureInvalidAuthorizationGroupValueCount = undefined;

/**
 * The number of login failures due to an invalid JWT signature. Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {Number} loginFailureInvalidJwtSignatureCount
 */
MsgVpnAuthenticationOauthProviderModel.prototype.loginFailureInvalidJwtSignatureCount = undefined;

/**
 * The number of login failures due to an invalid username value. Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {Number} loginFailureInvalidUsernameValueCount
 */
MsgVpnAuthenticationOauthProviderModel.prototype.loginFailureInvalidUsernameValueCount = undefined;

/**
 * The number of login failures due to a mismatched username. Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {Number} loginFailureMismatchedUsernameCount
 */
MsgVpnAuthenticationOauthProviderModel.prototype.loginFailureMismatchedUsernameCount = undefined;

/**
 * The number of login failures due to a missing audience claim. Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {Number} loginFailureMissingAudienceCount
 */
MsgVpnAuthenticationOauthProviderModel.prototype.loginFailureMissingAudienceCount = undefined;

/**
 * The number of login failures due to a missing JSON Web Key (JWK). Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {Number} loginFailureMissingJwkCount
 */
MsgVpnAuthenticationOauthProviderModel.prototype.loginFailureMissingJwkCount = undefined;

/**
 * The number of login failures due to a missing or invalid token. Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {Number} loginFailureMissingOrInvalidTokenCount
 */
MsgVpnAuthenticationOauthProviderModel.prototype.loginFailureMissingOrInvalidTokenCount = undefined;

/**
 * The number of login failures due to a missing username. Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {Number} loginFailureMissingUsernameCount
 */
MsgVpnAuthenticationOauthProviderModel.prototype.loginFailureMissingUsernameCount = undefined;

/**
 * The number of login failures due to a token being expired. Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {Number} loginFailureTokenExpiredCount
 */
MsgVpnAuthenticationOauthProviderModel.prototype.loginFailureTokenExpiredCount = undefined;

/**
 * The number of login failures due to a token introspection error response. Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {Number} loginFailureTokenIntrospectionErroredCount
 */
MsgVpnAuthenticationOauthProviderModel.prototype.loginFailureTokenIntrospectionErroredCount = undefined;

/**
 * The number of login failures due to a failure to complete the token introspection. Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {Number} loginFailureTokenIntrospectionFailureCount
 */
MsgVpnAuthenticationOauthProviderModel.prototype.loginFailureTokenIntrospectionFailureCount = undefined;

/**
 * The number of login failures due to a token introspection HTTPS error. Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {Number} loginFailureTokenIntrospectionHttpsErrorCount
 */
MsgVpnAuthenticationOauthProviderModel.prototype.loginFailureTokenIntrospectionHttpsErrorCount = undefined;

/**
 * The number of login failures due to a token introspection response being invalid. Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {Number} loginFailureTokenIntrospectionInvalidCount
 */
MsgVpnAuthenticationOauthProviderModel.prototype.loginFailureTokenIntrospectionInvalidCount = undefined;

/**
 * The number of login failures due to a token introspection timeout. Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {Number} loginFailureTokenIntrospectionTimeoutCount
 */
MsgVpnAuthenticationOauthProviderModel.prototype.loginFailureTokenIntrospectionTimeoutCount = undefined;

/**
 * The number of login failures due to a token not being valid yet. Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {Number} loginFailureTokenNotValidYetCount
 */
MsgVpnAuthenticationOauthProviderModel.prototype.loginFailureTokenNotValidYetCount = undefined;

/**
 * The number of login failures due to an unsupported algorithm. Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {Number} loginFailureUnsupportedAlgCount
 */
MsgVpnAuthenticationOauthProviderModel.prototype.loginFailureUnsupportedAlgCount = undefined;

/**
 * The number of clients that did not provide an authorization group claim value when expected. Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {Number} missingAuthorizationGroupCount
 */
MsgVpnAuthenticationOauthProviderModel.prototype.missingAuthorizationGroupCount = undefined;

/**
 * The name of the Message VPN. Deprecated since 2.25. Replaced by authenticationOauthProfiles.
 * @member {String} msgVpnName
 */
MsgVpnAuthenticationOauthProviderModel.prototype.msgVpnName = undefined;

/**
 * The name of the OAuth Provider. Deprecated since 2.25. Replaced by authenticationOauthProfiles.
 * @member {String} oauthProviderName
 */
MsgVpnAuthenticationOauthProviderModel.prototype.oauthProviderName = undefined;

/**
 * Indicates whether to ignore time limits and accept tokens that are not yet valid or are no longer valid. Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {Boolean} tokenIgnoreTimeLimitsEnabled
 */
MsgVpnAuthenticationOauthProviderModel.prototype.tokenIgnoreTimeLimitsEnabled = undefined;

/**
 * The one minute average of the time required to complete a token introspection, in milliseconds (ms). Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {Number} tokenIntrospectionAverageTime
 */
MsgVpnAuthenticationOauthProviderModel.prototype.tokenIntrospectionAverageTime = undefined;

/**
 * The reason for the last token introspection failure. Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {String} tokenIntrospectionLastFailureReason
 */
MsgVpnAuthenticationOauthProviderModel.prototype.tokenIntrospectionLastFailureReason = undefined;

/**
 * The timestamp of the last token introspection failure. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time). Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {Number} tokenIntrospectionLastFailureTime
 */
MsgVpnAuthenticationOauthProviderModel.prototype.tokenIntrospectionLastFailureTime = undefined;

/**
 * The parameter name used to identify the token during access token introspection. A standards compliant OAuth introspection server expects \"token\". Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {String} tokenIntrospectionParameterName
 */
MsgVpnAuthenticationOauthProviderModel.prototype.tokenIntrospectionParameterName = undefined;

/**
 * The number of token introspection successes. Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {Number} tokenIntrospectionSuccessCount
 */
MsgVpnAuthenticationOauthProviderModel.prototype.tokenIntrospectionSuccessCount = undefined;

/**
 * The maximum time in seconds a token introspection is allowed to take. Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {Number} tokenIntrospectionTimeout
 */
MsgVpnAuthenticationOauthProviderModel.prototype.tokenIntrospectionTimeout = undefined;

/**
 * The token introspection URI of the OAuth authentication server. Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {String} tokenIntrospectionUri
 */
MsgVpnAuthenticationOauthProviderModel.prototype.tokenIntrospectionUri = undefined;

/**
 * The username to use when logging into the token introspection URI. Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {String} tokenIntrospectionUsername
 */
MsgVpnAuthenticationOauthProviderModel.prototype.tokenIntrospectionUsername = undefined;

/**
 * The username claim name, indicating which part of the object to use for determining the username. Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {String} usernameClaimName
 */
MsgVpnAuthenticationOauthProviderModel.prototype.usernameClaimName = undefined;

/**
 * Allowed values for the <code>usernameClaimSource</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnAuthenticationOauthProviderModel.UsernameClaimSourceEnum = {
  /**
   * value: "access-token"
   * @const
   */
  accessToken: "access-token",

  /**
   * value: "id-token"
   * @const
   */
  idToken: "id-token",

  /**
   * value: "introspection"
   * @const
   */
  introspection: "introspection"
};
/**
 * The username claim source, indicating where to search for the username value. The allowed values and their meaning are:  <pre> \"access-token\" - The OAuth v2 access_token. \"id-token\" - The OpenID Connect id_token. \"introspection\" - The result of introspecting the OAuth v2 access_token. </pre>  Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {module:model/MsgVpnAuthenticationOauthProviderModel.UsernameClaimSourceEnum} usernameClaimSource
 */
MsgVpnAuthenticationOauthProviderModel.prototype.usernameClaimSource = undefined;

/**
 * Indicates whether the API provided username will be validated against the username calculated from the token(s). Deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
 * @member {Boolean} usernameValidateEnabled
 */
MsgVpnAuthenticationOauthProviderModel.prototype.usernameValidateEnabled = undefined;

