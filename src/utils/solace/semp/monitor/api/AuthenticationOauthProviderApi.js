import {ApiClient} from "../ApiClient";
import {MsgVpnAuthenticationOauthProviderResponseModel} from '../model/MsgVpnAuthenticationOauthProviderResponseModel';
import {MsgVpnAuthenticationOauthProvidersResponseModel} from '../model/MsgVpnAuthenticationOauthProvidersResponseModel';
import {SempMetaOnlyResponseModel} from '../model/SempMetaOnlyResponseModel';

/**
* AuthenticationOauthProvider service.
* @module api/AuthenticationOauthProviderApi
* @version 2.36
*/
export class AuthenticationOauthProviderApi {

    /**
    * Constructs a new AuthenticationOauthProviderApi. 
    * @alias module:api/AuthenticationOauthProviderApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get an OAuth Provider object.
     * Get an OAuth Provider object.  OAuth Providers contain information about the issuer of an OAuth token that is needed to validate the token and derive a client username from it.   Attribute|Identifying|Deprecated :---|:---:|:---: audienceClaimName||x audienceClaimSource||x audienceClaimValue||x audienceValidationEnabled||x authenticationSuccessCount||x authorizationGroupClaimName||x authorizationGroupClaimSource||x authorizationGroupEnabled||x disconnectOnTokenExpirationEnabled||x enabled||x jwksLastRefreshFailureReason||x jwksLastRefreshFailureTime||x jwksLastRefreshTime||x jwksNextScheduledRefreshTime||x jwksRefreshFailureCount||x jwksRefreshInterval||x jwksUri||x loginFailureIncorrectAudienceValueCount||x loginFailureInvalidAudienceValueCount||x loginFailureInvalidAuthorizationGroupValueCount||x loginFailureInvalidJwtSignatureCount||x loginFailureInvalidUsernameValueCount||x loginFailureMismatchedUsernameCount||x loginFailureMissingAudienceCount||x loginFailureMissingJwkCount||x loginFailureMissingOrInvalidTokenCount||x loginFailureMissingUsernameCount||x loginFailureTokenExpiredCount||x loginFailureTokenIntrospectionErroredCount||x loginFailureTokenIntrospectionFailureCount||x loginFailureTokenIntrospectionHttpsErrorCount||x loginFailureTokenIntrospectionInvalidCount||x loginFailureTokenIntrospectionTimeoutCount||x loginFailureTokenNotValidYetCount||x loginFailureUnsupportedAlgCount||x missingAuthorizationGroupCount||x msgVpnName|x|x oauthProviderName|x|x tokenIgnoreTimeLimitsEnabled||x tokenIntrospectionAverageTime||x tokenIntrospectionLastFailureReason||x tokenIntrospectionLastFailureTime||x tokenIntrospectionParameterName||x tokenIntrospectionSuccessCount||x tokenIntrospectionTimeout||x tokenIntrospectionUri||x tokenIntrospectionUsername||x usernameClaimName||x usernameClaimSource||x usernameValidateEnabled||x    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been deprecated since 2.25. Replaced by authenticationOauthProfiles.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} oauthProviderName The name of the OAuth Provider.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnAuthenticationOauthProviderResponseModel} and HTTP response
     */
    getMsgVpnAuthenticationOauthProviderWithHttpInfo(msgVpnName, oauthProviderName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnAuthenticationOauthProvider");
      }
      // verify the required parameter 'oauthProviderName' is set
      if (oauthProviderName === undefined || oauthProviderName === null) {
        throw new Error("Missing the required parameter 'oauthProviderName' when calling getMsgVpnAuthenticationOauthProvider");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'oauthProviderName': oauthProviderName
      };
      let queryParams = {
        'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MsgVpnAuthenticationOauthProviderResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/authenticationOauthProviders/{oauthProviderName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get an OAuth Provider object.
     * Get an OAuth Provider object.  OAuth Providers contain information about the issuer of an OAuth token that is needed to validate the token and derive a client username from it.   Attribute|Identifying|Deprecated :---|:---:|:---: audienceClaimName||x audienceClaimSource||x audienceClaimValue||x audienceValidationEnabled||x authenticationSuccessCount||x authorizationGroupClaimName||x authorizationGroupClaimSource||x authorizationGroupEnabled||x disconnectOnTokenExpirationEnabled||x enabled||x jwksLastRefreshFailureReason||x jwksLastRefreshFailureTime||x jwksLastRefreshTime||x jwksNextScheduledRefreshTime||x jwksRefreshFailureCount||x jwksRefreshInterval||x jwksUri||x loginFailureIncorrectAudienceValueCount||x loginFailureInvalidAudienceValueCount||x loginFailureInvalidAuthorizationGroupValueCount||x loginFailureInvalidJwtSignatureCount||x loginFailureInvalidUsernameValueCount||x loginFailureMismatchedUsernameCount||x loginFailureMissingAudienceCount||x loginFailureMissingJwkCount||x loginFailureMissingOrInvalidTokenCount||x loginFailureMissingUsernameCount||x loginFailureTokenExpiredCount||x loginFailureTokenIntrospectionErroredCount||x loginFailureTokenIntrospectionFailureCount||x loginFailureTokenIntrospectionHttpsErrorCount||x loginFailureTokenIntrospectionInvalidCount||x loginFailureTokenIntrospectionTimeoutCount||x loginFailureTokenNotValidYetCount||x loginFailureUnsupportedAlgCount||x missingAuthorizationGroupCount||x msgVpnName|x|x oauthProviderName|x|x tokenIgnoreTimeLimitsEnabled||x tokenIntrospectionAverageTime||x tokenIntrospectionLastFailureReason||x tokenIntrospectionLastFailureTime||x tokenIntrospectionParameterName||x tokenIntrospectionSuccessCount||x tokenIntrospectionTimeout||x tokenIntrospectionUri||x tokenIntrospectionUsername||x usernameClaimName||x usernameClaimSource||x usernameValidateEnabled||x    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been deprecated since 2.25. Replaced by authenticationOauthProfiles.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProviderName The name of the OAuth Provider.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnAuthenticationOauthProviderResponseModel}
     */
    getMsgVpnAuthenticationOauthProvider(msgVpnName, oauthProviderName, opts) {
      return this.getMsgVpnAuthenticationOauthProviderWithHttpInfo(msgVpnName, oauthProviderName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of OAuth Provider objects.
     * Get a list of OAuth Provider objects.  OAuth Providers contain information about the issuer of an OAuth token that is needed to validate the token and derive a client username from it.   Attribute|Identifying|Deprecated :---|:---:|:---: audienceClaimName||x audienceClaimSource||x audienceClaimValue||x audienceValidationEnabled||x authenticationSuccessCount||x authorizationGroupClaimName||x authorizationGroupClaimSource||x authorizationGroupEnabled||x disconnectOnTokenExpirationEnabled||x enabled||x jwksLastRefreshFailureReason||x jwksLastRefreshFailureTime||x jwksLastRefreshTime||x jwksNextScheduledRefreshTime||x jwksRefreshFailureCount||x jwksRefreshInterval||x jwksUri||x loginFailureIncorrectAudienceValueCount||x loginFailureInvalidAudienceValueCount||x loginFailureInvalidAuthorizationGroupValueCount||x loginFailureInvalidJwtSignatureCount||x loginFailureInvalidUsernameValueCount||x loginFailureMismatchedUsernameCount||x loginFailureMissingAudienceCount||x loginFailureMissingJwkCount||x loginFailureMissingOrInvalidTokenCount||x loginFailureMissingUsernameCount||x loginFailureTokenExpiredCount||x loginFailureTokenIntrospectionErroredCount||x loginFailureTokenIntrospectionFailureCount||x loginFailureTokenIntrospectionHttpsErrorCount||x loginFailureTokenIntrospectionInvalidCount||x loginFailureTokenIntrospectionTimeoutCount||x loginFailureTokenNotValidYetCount||x loginFailureUnsupportedAlgCount||x missingAuthorizationGroupCount||x msgVpnName|x|x oauthProviderName|x|x tokenIgnoreTimeLimitsEnabled||x tokenIntrospectionAverageTime||x tokenIntrospectionLastFailureReason||x tokenIntrospectionLastFailureTime||x tokenIntrospectionParameterName||x tokenIntrospectionSuccessCount||x tokenIntrospectionTimeout||x tokenIntrospectionUri||x tokenIntrospectionUsername||x usernameClaimName||x usernameClaimSource||x usernameValidateEnabled||x    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been deprecated since 2.25. Replaced by authenticationOauthProfiles.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnAuthenticationOauthProvidersResponseModel} and HTTP response
     */
    getMsgVpnAuthenticationOauthProvidersWithHttpInfo(msgVpnName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnAuthenticationOauthProviders");
      }

      let pathParams = {
        'msgVpnName': msgVpnName
      };
      let queryParams = {
        'count': opts['count'],'cursor': opts['cursor'],'where': this.apiClient.buildCollectionParam(opts['where'], 'csv'),'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MsgVpnAuthenticationOauthProvidersResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/authenticationOauthProviders', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of OAuth Provider objects.
     * Get a list of OAuth Provider objects.  OAuth Providers contain information about the issuer of an OAuth token that is needed to validate the token and derive a client username from it.   Attribute|Identifying|Deprecated :---|:---:|:---: audienceClaimName||x audienceClaimSource||x audienceClaimValue||x audienceValidationEnabled||x authenticationSuccessCount||x authorizationGroupClaimName||x authorizationGroupClaimSource||x authorizationGroupEnabled||x disconnectOnTokenExpirationEnabled||x enabled||x jwksLastRefreshFailureReason||x jwksLastRefreshFailureTime||x jwksLastRefreshTime||x jwksNextScheduledRefreshTime||x jwksRefreshFailureCount||x jwksRefreshInterval||x jwksUri||x loginFailureIncorrectAudienceValueCount||x loginFailureInvalidAudienceValueCount||x loginFailureInvalidAuthorizationGroupValueCount||x loginFailureInvalidJwtSignatureCount||x loginFailureInvalidUsernameValueCount||x loginFailureMismatchedUsernameCount||x loginFailureMissingAudienceCount||x loginFailureMissingJwkCount||x loginFailureMissingOrInvalidTokenCount||x loginFailureMissingUsernameCount||x loginFailureTokenExpiredCount||x loginFailureTokenIntrospectionErroredCount||x loginFailureTokenIntrospectionFailureCount||x loginFailureTokenIntrospectionHttpsErrorCount||x loginFailureTokenIntrospectionInvalidCount||x loginFailureTokenIntrospectionTimeoutCount||x loginFailureTokenNotValidYetCount||x loginFailureUnsupportedAlgCount||x missingAuthorizationGroupCount||x msgVpnName|x|x oauthProviderName|x|x tokenIgnoreTimeLimitsEnabled||x tokenIntrospectionAverageTime||x tokenIntrospectionLastFailureReason||x tokenIntrospectionLastFailureTime||x tokenIntrospectionParameterName||x tokenIntrospectionSuccessCount||x tokenIntrospectionTimeout||x tokenIntrospectionUri||x tokenIntrospectionUsername||x usernameClaimName||x usernameClaimSource||x usernameValidateEnabled||x    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been deprecated since 2.25. Replaced by authenticationOauthProfiles.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnAuthenticationOauthProvidersResponseModel}
     */
    getMsgVpnAuthenticationOauthProviders(msgVpnName, opts) {
      return this.getMsgVpnAuthenticationOauthProvidersWithHttpInfo(msgVpnName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}