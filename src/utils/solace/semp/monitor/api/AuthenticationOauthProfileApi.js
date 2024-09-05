import {ApiClient} from "../ApiClient";
import {MsgVpnAuthenticationOauthProfileClientRequiredClaimResponseModel} from '../model/MsgVpnAuthenticationOauthProfileClientRequiredClaimResponseModel';
import {MsgVpnAuthenticationOauthProfileClientRequiredClaimsResponseModel} from '../model/MsgVpnAuthenticationOauthProfileClientRequiredClaimsResponseModel';
import {MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimResponseModel} from '../model/MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimResponseModel';
import {MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimsResponseModel} from '../model/MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimsResponseModel';
import {MsgVpnAuthenticationOauthProfileResponseModel} from '../model/MsgVpnAuthenticationOauthProfileResponseModel';
import {MsgVpnAuthenticationOauthProfilesResponseModel} from '../model/MsgVpnAuthenticationOauthProfilesResponseModel';
import {SempMetaOnlyResponseModel} from '../model/SempMetaOnlyResponseModel';

/**
* AuthenticationOauthProfile service.
* @module api/AuthenticationOauthProfileApi
* @version 2.36
*/
export class AuthenticationOauthProfileApi {

    /**
    * Constructs a new AuthenticationOauthProfileApi. 
    * @alias module:api/AuthenticationOauthProfileApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get an OAuth Profile object.
     * Get an OAuth Profile object.  OAuth profiles specify how to securely authenticate to an OAuth provider.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| oauthProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.25.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnAuthenticationOauthProfileResponseModel} and HTTP response
     */
    getMsgVpnAuthenticationOauthProfileWithHttpInfo(msgVpnName, oauthProfileName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnAuthenticationOauthProfile");
      }
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling getMsgVpnAuthenticationOauthProfile");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'oauthProfileName': oauthProfileName
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
      let returnType = MsgVpnAuthenticationOauthProfileResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/authenticationOauthProfiles/{oauthProfileName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get an OAuth Profile object.
     * Get an OAuth Profile object.  OAuth profiles specify how to securely authenticate to an OAuth provider.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| oauthProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.25.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnAuthenticationOauthProfileResponseModel}
     */
    getMsgVpnAuthenticationOauthProfile(msgVpnName, oauthProfileName, opts) {
      return this.getMsgVpnAuthenticationOauthProfileWithHttpInfo(msgVpnName, oauthProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Required Claim object.
     * Get a Required Claim object.  Additional claims to be verified in the ID token.   Attribute|Identifying|Deprecated :---|:---:|:---: clientRequiredClaimName|x| msgVpnName|x| oauthProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.25.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {String} clientRequiredClaimName The name of the ID token claim to verify.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnAuthenticationOauthProfileClientRequiredClaimResponseModel} and HTTP response
     */
    getMsgVpnAuthenticationOauthProfileClientRequiredClaimWithHttpInfo(msgVpnName, oauthProfileName, clientRequiredClaimName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnAuthenticationOauthProfileClientRequiredClaim");
      }
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling getMsgVpnAuthenticationOauthProfileClientRequiredClaim");
      }
      // verify the required parameter 'clientRequiredClaimName' is set
      if (clientRequiredClaimName === undefined || clientRequiredClaimName === null) {
        throw new Error("Missing the required parameter 'clientRequiredClaimName' when calling getMsgVpnAuthenticationOauthProfileClientRequiredClaim");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'oauthProfileName': oauthProfileName,'clientRequiredClaimName': clientRequiredClaimName
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
      let returnType = MsgVpnAuthenticationOauthProfileClientRequiredClaimResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/authenticationOauthProfiles/{oauthProfileName}/clientRequiredClaims/{clientRequiredClaimName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Required Claim object.
     * Get a Required Claim object.  Additional claims to be verified in the ID token.   Attribute|Identifying|Deprecated :---|:---:|:---: clientRequiredClaimName|x| msgVpnName|x| oauthProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.25.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} clientRequiredClaimName The name of the ID token claim to verify.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnAuthenticationOauthProfileClientRequiredClaimResponseModel}
     */
    getMsgVpnAuthenticationOauthProfileClientRequiredClaim(msgVpnName, oauthProfileName, clientRequiredClaimName, opts) {
      return this.getMsgVpnAuthenticationOauthProfileClientRequiredClaimWithHttpInfo(msgVpnName, oauthProfileName, clientRequiredClaimName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Required Claim objects.
     * Get a list of Required Claim objects.  Additional claims to be verified in the ID token.   Attribute|Identifying|Deprecated :---|:---:|:---: clientRequiredClaimName|x| msgVpnName|x| oauthProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.25.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnAuthenticationOauthProfileClientRequiredClaimsResponseModel} and HTTP response
     */
    getMsgVpnAuthenticationOauthProfileClientRequiredClaimsWithHttpInfo(msgVpnName, oauthProfileName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnAuthenticationOauthProfileClientRequiredClaims");
      }
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling getMsgVpnAuthenticationOauthProfileClientRequiredClaims");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'oauthProfileName': oauthProfileName
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
      let returnType = MsgVpnAuthenticationOauthProfileClientRequiredClaimsResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/authenticationOauthProfiles/{oauthProfileName}/clientRequiredClaims', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Required Claim objects.
     * Get a list of Required Claim objects.  Additional claims to be verified in the ID token.   Attribute|Identifying|Deprecated :---|:---:|:---: clientRequiredClaimName|x| msgVpnName|x| oauthProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.25.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnAuthenticationOauthProfileClientRequiredClaimsResponseModel}
     */
    getMsgVpnAuthenticationOauthProfileClientRequiredClaims(msgVpnName, oauthProfileName, opts) {
      return this.getMsgVpnAuthenticationOauthProfileClientRequiredClaimsWithHttpInfo(msgVpnName, oauthProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Required Claim object.
     * Get a Required Claim object.  Additional claims to be verified in the access token.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| oauthProfileName|x| resourceServerRequiredClaimName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.25.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {String} resourceServerRequiredClaimName The name of the access token claim to verify.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimResponseModel} and HTTP response
     */
    getMsgVpnAuthenticationOauthProfileResourceServerRequiredClaimWithHttpInfo(msgVpnName, oauthProfileName, resourceServerRequiredClaimName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnAuthenticationOauthProfileResourceServerRequiredClaim");
      }
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling getMsgVpnAuthenticationOauthProfileResourceServerRequiredClaim");
      }
      // verify the required parameter 'resourceServerRequiredClaimName' is set
      if (resourceServerRequiredClaimName === undefined || resourceServerRequiredClaimName === null) {
        throw new Error("Missing the required parameter 'resourceServerRequiredClaimName' when calling getMsgVpnAuthenticationOauthProfileResourceServerRequiredClaim");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'oauthProfileName': oauthProfileName,'resourceServerRequiredClaimName': resourceServerRequiredClaimName
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
      let returnType = MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/authenticationOauthProfiles/{oauthProfileName}/resourceServerRequiredClaims/{resourceServerRequiredClaimName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Required Claim object.
     * Get a Required Claim object.  Additional claims to be verified in the access token.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| oauthProfileName|x| resourceServerRequiredClaimName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.25.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} resourceServerRequiredClaimName The name of the access token claim to verify.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimResponseModel}
     */
    getMsgVpnAuthenticationOauthProfileResourceServerRequiredClaim(msgVpnName, oauthProfileName, resourceServerRequiredClaimName, opts) {
      return this.getMsgVpnAuthenticationOauthProfileResourceServerRequiredClaimWithHttpInfo(msgVpnName, oauthProfileName, resourceServerRequiredClaimName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Required Claim objects.
     * Get a list of Required Claim objects.  Additional claims to be verified in the access token.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| oauthProfileName|x| resourceServerRequiredClaimName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.25.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimsResponseModel} and HTTP response
     */
    getMsgVpnAuthenticationOauthProfileResourceServerRequiredClaimsWithHttpInfo(msgVpnName, oauthProfileName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnAuthenticationOauthProfileResourceServerRequiredClaims");
      }
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling getMsgVpnAuthenticationOauthProfileResourceServerRequiredClaims");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'oauthProfileName': oauthProfileName
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
      let returnType = MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimsResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/authenticationOauthProfiles/{oauthProfileName}/resourceServerRequiredClaims', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Required Claim objects.
     * Get a list of Required Claim objects.  Additional claims to be verified in the access token.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| oauthProfileName|x| resourceServerRequiredClaimName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.25.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimsResponseModel}
     */
    getMsgVpnAuthenticationOauthProfileResourceServerRequiredClaims(msgVpnName, oauthProfileName, opts) {
      return this.getMsgVpnAuthenticationOauthProfileResourceServerRequiredClaimsWithHttpInfo(msgVpnName, oauthProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of OAuth Profile objects.
     * Get a list of OAuth Profile objects.  OAuth profiles specify how to securely authenticate to an OAuth provider.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| oauthProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.25.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnAuthenticationOauthProfilesResponseModel} and HTTP response
     */
    getMsgVpnAuthenticationOauthProfilesWithHttpInfo(msgVpnName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnAuthenticationOauthProfiles");
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
      let returnType = MsgVpnAuthenticationOauthProfilesResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/authenticationOauthProfiles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of OAuth Profile objects.
     * Get a list of OAuth Profile objects.  OAuth profiles specify how to securely authenticate to an OAuth provider.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| oauthProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.25.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnAuthenticationOauthProfilesResponseModel}
     */
    getMsgVpnAuthenticationOauthProfiles(msgVpnName, opts) {
      return this.getMsgVpnAuthenticationOauthProfilesWithHttpInfo(msgVpnName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}