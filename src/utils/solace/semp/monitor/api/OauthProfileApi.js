import {ApiClient} from "../ApiClient";
import {OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionResponseModel} from '../model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionResponseModel';
import {OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionsResponseModel} from '../model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionsResponseModel';
import {OauthProfileAccessLevelGroupResponseModel} from '../model/OauthProfileAccessLevelGroupResponseModel';
import {OauthProfileAccessLevelGroupsResponseModel} from '../model/OauthProfileAccessLevelGroupsResponseModel';
import {OauthProfileClientAllowedHostResponseModel} from '../model/OauthProfileClientAllowedHostResponseModel';
import {OauthProfileClientAllowedHostsResponseModel} from '../model/OauthProfileClientAllowedHostsResponseModel';
import {OauthProfileClientAuthorizationParameterResponseModel} from '../model/OauthProfileClientAuthorizationParameterResponseModel';
import {OauthProfileClientAuthorizationParametersResponseModel} from '../model/OauthProfileClientAuthorizationParametersResponseModel';
import {OauthProfileClientRequiredClaimResponseModel} from '../model/OauthProfileClientRequiredClaimResponseModel';
import {OauthProfileClientRequiredClaimsResponseModel} from '../model/OauthProfileClientRequiredClaimsResponseModel';
import {OauthProfileDefaultMsgVpnAccessLevelExceptionResponseModel} from '../model/OauthProfileDefaultMsgVpnAccessLevelExceptionResponseModel';
import {OauthProfileDefaultMsgVpnAccessLevelExceptionsResponseModel} from '../model/OauthProfileDefaultMsgVpnAccessLevelExceptionsResponseModel';
import {OauthProfileResourceServerRequiredClaimResponseModel} from '../model/OauthProfileResourceServerRequiredClaimResponseModel';
import {OauthProfileResourceServerRequiredClaimsResponseModel} from '../model/OauthProfileResourceServerRequiredClaimsResponseModel';
import {OauthProfileResponseModel} from '../model/OauthProfileResponseModel';
import {OauthProfilesResponseModel} from '../model/OauthProfilesResponseModel';
import {SempMetaOnlyResponseModel} from '../model/SempMetaOnlyResponseModel';

/**
* OauthProfile service.
* @module api/OauthProfileApi
* @version 2.36
*/
export class OauthProfileApi {

    /**
    * Constructs a new OauthProfileApi. 
    * @alias module:api/OauthProfileApi
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
     * Get an OAuth Profile object.  OAuth profiles specify how to securely authenticate to an OAuth provider.   Attribute|Identifying|Deprecated :---|:---:|:---: oauthProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileResponseModel} and HTTP response
     */
    getOauthProfileWithHttpInfo(oauthProfileName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling getOauthProfile");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName
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
      let returnType = OauthProfileResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get an OAuth Profile object.
     * Get an OAuth Profile object.  OAuth profiles specify how to securely authenticate to an OAuth provider.   Attribute|Identifying|Deprecated :---|:---:|:---: oauthProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileResponseModel}
     */
    getOauthProfile(oauthProfileName, opts) {
      return this.getOauthProfileWithHttpInfo(oauthProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Group Access Level object.
     * Get a Group Access Level object.  The name of a group as it exists on the OAuth server being used to authenticate SEMP users.   Attribute|Identifying|Deprecated :---|:---:|:---: groupName|x| oauthProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {String} groupName The name of the group.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileAccessLevelGroupResponseModel} and HTTP response
     */
    getOauthProfileAccessLevelGroupWithHttpInfo(oauthProfileName, groupName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling getOauthProfileAccessLevelGroup");
      }
      // verify the required parameter 'groupName' is set
      if (groupName === undefined || groupName === null) {
        throw new Error("Missing the required parameter 'groupName' when calling getOauthProfileAccessLevelGroup");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName,'groupName': groupName
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
      let returnType = OauthProfileAccessLevelGroupResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/accessLevelGroups/{groupName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Group Access Level object.
     * Get a Group Access Level object.  The name of a group as it exists on the OAuth server being used to authenticate SEMP users.   Attribute|Identifying|Deprecated :---|:---:|:---: groupName|x| oauthProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} groupName The name of the group.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileAccessLevelGroupResponseModel}
     */
    getOauthProfileAccessLevelGroup(oauthProfileName, groupName, opts) {
      return this.getOauthProfileAccessLevelGroupWithHttpInfo(oauthProfileName, groupName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Message VPN Access-Level Exception object.
     * Get a Message VPN Access-Level Exception object.  Message VPN access-level exceptions for members of this group.   Attribute|Identifying|Deprecated :---|:---:|:---: groupName|x| msgVpnName|x| oauthProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {String} groupName The name of the group.
     * @param {String} msgVpnName The name of the message VPN.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionResponseModel} and HTTP response
     */
    getOauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionWithHttpInfo(oauthProfileName, groupName, msgVpnName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling getOauthProfileAccessLevelGroupMsgVpnAccessLevelException");
      }
      // verify the required parameter 'groupName' is set
      if (groupName === undefined || groupName === null) {
        throw new Error("Missing the required parameter 'groupName' when calling getOauthProfileAccessLevelGroupMsgVpnAccessLevelException");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getOauthProfileAccessLevelGroupMsgVpnAccessLevelException");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName,'groupName': groupName,'msgVpnName': msgVpnName
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
      let returnType = OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/accessLevelGroups/{groupName}/msgVpnAccessLevelExceptions/{msgVpnName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Message VPN Access-Level Exception object.
     * Get a Message VPN Access-Level Exception object.  Message VPN access-level exceptions for members of this group.   Attribute|Identifying|Deprecated :---|:---:|:---: groupName|x| msgVpnName|x| oauthProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} groupName The name of the group.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the message VPN.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionResponseModel}
     */
    getOauthProfileAccessLevelGroupMsgVpnAccessLevelException(oauthProfileName, groupName, msgVpnName, opts) {
      return this.getOauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionWithHttpInfo(oauthProfileName, groupName, msgVpnName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Message VPN Access-Level Exception objects.
     * Get a list of Message VPN Access-Level Exception objects.  Message VPN access-level exceptions for members of this group.   Attribute|Identifying|Deprecated :---|:---:|:---: groupName|x| msgVpnName|x| oauthProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.24.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {String} groupName The name of the group.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionsResponseModel} and HTTP response
     */
    getOauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionsWithHttpInfo(oauthProfileName, groupName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling getOauthProfileAccessLevelGroupMsgVpnAccessLevelExceptions");
      }
      // verify the required parameter 'groupName' is set
      if (groupName === undefined || groupName === null) {
        throw new Error("Missing the required parameter 'groupName' when calling getOauthProfileAccessLevelGroupMsgVpnAccessLevelExceptions");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName,'groupName': groupName
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
      let returnType = OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionsResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/accessLevelGroups/{groupName}/msgVpnAccessLevelExceptions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Message VPN Access-Level Exception objects.
     * Get a list of Message VPN Access-Level Exception objects.  Message VPN access-level exceptions for members of this group.   Attribute|Identifying|Deprecated :---|:---:|:---: groupName|x| msgVpnName|x| oauthProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} groupName The name of the group.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionsResponseModel}
     */
    getOauthProfileAccessLevelGroupMsgVpnAccessLevelExceptions(oauthProfileName, groupName, opts) {
      return this.getOauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionsWithHttpInfo(oauthProfileName, groupName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Group Access Level objects.
     * Get a list of Group Access Level objects.  The name of a group as it exists on the OAuth server being used to authenticate SEMP users.   Attribute|Identifying|Deprecated :---|:---:|:---: groupName|x| oauthProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.24.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileAccessLevelGroupsResponseModel} and HTTP response
     */
    getOauthProfileAccessLevelGroupsWithHttpInfo(oauthProfileName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling getOauthProfileAccessLevelGroups");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName
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
      let returnType = OauthProfileAccessLevelGroupsResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/accessLevelGroups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Group Access Level objects.
     * Get a list of Group Access Level objects.  The name of a group as it exists on the OAuth server being used to authenticate SEMP users.   Attribute|Identifying|Deprecated :---|:---:|:---: groupName|x| oauthProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileAccessLevelGroupsResponseModel}
     */
    getOauthProfileAccessLevelGroups(oauthProfileName, opts) {
      return this.getOauthProfileAccessLevelGroupsWithHttpInfo(oauthProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get an Allowed Host Value object.
     * Get an Allowed Host Value object.  A valid hostname for this broker in OAuth redirects.   Attribute|Identifying|Deprecated :---|:---:|:---: allowedHost|x| oauthProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {String} allowedHost An allowed value for the Host header.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileClientAllowedHostResponseModel} and HTTP response
     */
    getOauthProfileClientAllowedHostWithHttpInfo(oauthProfileName, allowedHost, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling getOauthProfileClientAllowedHost");
      }
      // verify the required parameter 'allowedHost' is set
      if (allowedHost === undefined || allowedHost === null) {
        throw new Error("Missing the required parameter 'allowedHost' when calling getOauthProfileClientAllowedHost");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName,'allowedHost': allowedHost
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
      let returnType = OauthProfileClientAllowedHostResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/clientAllowedHosts/{allowedHost}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get an Allowed Host Value object.
     * Get an Allowed Host Value object.  A valid hostname for this broker in OAuth redirects.   Attribute|Identifying|Deprecated :---|:---:|:---: allowedHost|x| oauthProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} allowedHost An allowed value for the Host header.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileClientAllowedHostResponseModel}
     */
    getOauthProfileClientAllowedHost(oauthProfileName, allowedHost, opts) {
      return this.getOauthProfileClientAllowedHostWithHttpInfo(oauthProfileName, allowedHost, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Allowed Host Value objects.
     * Get a list of Allowed Host Value objects.  A valid hostname for this broker in OAuth redirects.   Attribute|Identifying|Deprecated :---|:---:|:---: allowedHost|x| oauthProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.24.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileClientAllowedHostsResponseModel} and HTTP response
     */
    getOauthProfileClientAllowedHostsWithHttpInfo(oauthProfileName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling getOauthProfileClientAllowedHosts");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName
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
      let returnType = OauthProfileClientAllowedHostsResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/clientAllowedHosts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Allowed Host Value objects.
     * Get a list of Allowed Host Value objects.  A valid hostname for this broker in OAuth redirects.   Attribute|Identifying|Deprecated :---|:---:|:---: allowedHost|x| oauthProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileClientAllowedHostsResponseModel}
     */
    getOauthProfileClientAllowedHosts(oauthProfileName, opts) {
      return this.getOauthProfileClientAllowedHostsWithHttpInfo(oauthProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get an Authorization Parameter object.
     * Get an Authorization Parameter object.  Additional parameters to be passed to the OAuth authorization endpoint.   Attribute|Identifying|Deprecated :---|:---:|:---: authorizationParameterName|x| oauthProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {String} authorizationParameterName The name of the authorization parameter.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileClientAuthorizationParameterResponseModel} and HTTP response
     */
    getOauthProfileClientAuthorizationParameterWithHttpInfo(oauthProfileName, authorizationParameterName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling getOauthProfileClientAuthorizationParameter");
      }
      // verify the required parameter 'authorizationParameterName' is set
      if (authorizationParameterName === undefined || authorizationParameterName === null) {
        throw new Error("Missing the required parameter 'authorizationParameterName' when calling getOauthProfileClientAuthorizationParameter");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName,'authorizationParameterName': authorizationParameterName
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
      let returnType = OauthProfileClientAuthorizationParameterResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/clientAuthorizationParameters/{authorizationParameterName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get an Authorization Parameter object.
     * Get an Authorization Parameter object.  Additional parameters to be passed to the OAuth authorization endpoint.   Attribute|Identifying|Deprecated :---|:---:|:---: authorizationParameterName|x| oauthProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} authorizationParameterName The name of the authorization parameter.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileClientAuthorizationParameterResponseModel}
     */
    getOauthProfileClientAuthorizationParameter(oauthProfileName, authorizationParameterName, opts) {
      return this.getOauthProfileClientAuthorizationParameterWithHttpInfo(oauthProfileName, authorizationParameterName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Authorization Parameter objects.
     * Get a list of Authorization Parameter objects.  Additional parameters to be passed to the OAuth authorization endpoint.   Attribute|Identifying|Deprecated :---|:---:|:---: authorizationParameterName|x| oauthProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.24.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileClientAuthorizationParametersResponseModel} and HTTP response
     */
    getOauthProfileClientAuthorizationParametersWithHttpInfo(oauthProfileName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling getOauthProfileClientAuthorizationParameters");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName
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
      let returnType = OauthProfileClientAuthorizationParametersResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/clientAuthorizationParameters', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Authorization Parameter objects.
     * Get a list of Authorization Parameter objects.  Additional parameters to be passed to the OAuth authorization endpoint.   Attribute|Identifying|Deprecated :---|:---:|:---: authorizationParameterName|x| oauthProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileClientAuthorizationParametersResponseModel}
     */
    getOauthProfileClientAuthorizationParameters(oauthProfileName, opts) {
      return this.getOauthProfileClientAuthorizationParametersWithHttpInfo(oauthProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Required Claim object.
     * Get a Required Claim object.  Additional claims to be verified in the ID token.   Attribute|Identifying|Deprecated :---|:---:|:---: clientRequiredClaimName|x| oauthProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {String} clientRequiredClaimName The name of the ID token claim to verify.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileClientRequiredClaimResponseModel} and HTTP response
     */
    getOauthProfileClientRequiredClaimWithHttpInfo(oauthProfileName, clientRequiredClaimName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling getOauthProfileClientRequiredClaim");
      }
      // verify the required parameter 'clientRequiredClaimName' is set
      if (clientRequiredClaimName === undefined || clientRequiredClaimName === null) {
        throw new Error("Missing the required parameter 'clientRequiredClaimName' when calling getOauthProfileClientRequiredClaim");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName,'clientRequiredClaimName': clientRequiredClaimName
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
      let returnType = OauthProfileClientRequiredClaimResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/clientRequiredClaims/{clientRequiredClaimName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Required Claim object.
     * Get a Required Claim object.  Additional claims to be verified in the ID token.   Attribute|Identifying|Deprecated :---|:---:|:---: clientRequiredClaimName|x| oauthProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} clientRequiredClaimName The name of the ID token claim to verify.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileClientRequiredClaimResponseModel}
     */
    getOauthProfileClientRequiredClaim(oauthProfileName, clientRequiredClaimName, opts) {
      return this.getOauthProfileClientRequiredClaimWithHttpInfo(oauthProfileName, clientRequiredClaimName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Required Claim objects.
     * Get a list of Required Claim objects.  Additional claims to be verified in the ID token.   Attribute|Identifying|Deprecated :---|:---:|:---: clientRequiredClaimName|x| oauthProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.24.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileClientRequiredClaimsResponseModel} and HTTP response
     */
    getOauthProfileClientRequiredClaimsWithHttpInfo(oauthProfileName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling getOauthProfileClientRequiredClaims");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName
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
      let returnType = OauthProfileClientRequiredClaimsResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/clientRequiredClaims', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Required Claim objects.
     * Get a list of Required Claim objects.  Additional claims to be verified in the ID token.   Attribute|Identifying|Deprecated :---|:---:|:---: clientRequiredClaimName|x| oauthProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileClientRequiredClaimsResponseModel}
     */
    getOauthProfileClientRequiredClaims(oauthProfileName, opts) {
      return this.getOauthProfileClientRequiredClaimsWithHttpInfo(oauthProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Message VPN Access-Level Exception object.
     * Get a Message VPN Access-Level Exception object.  Default message VPN access-level exceptions.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| oauthProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {String} msgVpnName The name of the message VPN.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionResponseModel} and HTTP response
     */
    getOauthProfileDefaultMsgVpnAccessLevelExceptionWithHttpInfo(oauthProfileName, msgVpnName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling getOauthProfileDefaultMsgVpnAccessLevelException");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getOauthProfileDefaultMsgVpnAccessLevelException");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName,'msgVpnName': msgVpnName
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
      let returnType = OauthProfileDefaultMsgVpnAccessLevelExceptionResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/defaultMsgVpnAccessLevelExceptions/{msgVpnName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Message VPN Access-Level Exception object.
     * Get a Message VPN Access-Level Exception object.  Default message VPN access-level exceptions.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| oauthProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the message VPN.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionResponseModel}
     */
    getOauthProfileDefaultMsgVpnAccessLevelException(oauthProfileName, msgVpnName, opts) {
      return this.getOauthProfileDefaultMsgVpnAccessLevelExceptionWithHttpInfo(oauthProfileName, msgVpnName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Message VPN Access-Level Exception objects.
     * Get a list of Message VPN Access-Level Exception objects.  Default message VPN access-level exceptions.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| oauthProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.24.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionsResponseModel} and HTTP response
     */
    getOauthProfileDefaultMsgVpnAccessLevelExceptionsWithHttpInfo(oauthProfileName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling getOauthProfileDefaultMsgVpnAccessLevelExceptions");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName
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
      let returnType = OauthProfileDefaultMsgVpnAccessLevelExceptionsResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/defaultMsgVpnAccessLevelExceptions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Message VPN Access-Level Exception objects.
     * Get a list of Message VPN Access-Level Exception objects.  Default message VPN access-level exceptions.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| oauthProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionsResponseModel}
     */
    getOauthProfileDefaultMsgVpnAccessLevelExceptions(oauthProfileName, opts) {
      return this.getOauthProfileDefaultMsgVpnAccessLevelExceptionsWithHttpInfo(oauthProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Required Claim object.
     * Get a Required Claim object.  Additional claims to be verified in the access token.   Attribute|Identifying|Deprecated :---|:---:|:---: oauthProfileName|x| resourceServerRequiredClaimName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {String} resourceServerRequiredClaimName The name of the access token claim to verify.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileResourceServerRequiredClaimResponseModel} and HTTP response
     */
    getOauthProfileResourceServerRequiredClaimWithHttpInfo(oauthProfileName, resourceServerRequiredClaimName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling getOauthProfileResourceServerRequiredClaim");
      }
      // verify the required parameter 'resourceServerRequiredClaimName' is set
      if (resourceServerRequiredClaimName === undefined || resourceServerRequiredClaimName === null) {
        throw new Error("Missing the required parameter 'resourceServerRequiredClaimName' when calling getOauthProfileResourceServerRequiredClaim");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName,'resourceServerRequiredClaimName': resourceServerRequiredClaimName
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
      let returnType = OauthProfileResourceServerRequiredClaimResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/resourceServerRequiredClaims/{resourceServerRequiredClaimName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Required Claim object.
     * Get a Required Claim object.  Additional claims to be verified in the access token.   Attribute|Identifying|Deprecated :---|:---:|:---: oauthProfileName|x| resourceServerRequiredClaimName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} resourceServerRequiredClaimName The name of the access token claim to verify.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileResourceServerRequiredClaimResponseModel}
     */
    getOauthProfileResourceServerRequiredClaim(oauthProfileName, resourceServerRequiredClaimName, opts) {
      return this.getOauthProfileResourceServerRequiredClaimWithHttpInfo(oauthProfileName, resourceServerRequiredClaimName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Required Claim objects.
     * Get a list of Required Claim objects.  Additional claims to be verified in the access token.   Attribute|Identifying|Deprecated :---|:---:|:---: oauthProfileName|x| resourceServerRequiredClaimName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.24.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileResourceServerRequiredClaimsResponseModel} and HTTP response
     */
    getOauthProfileResourceServerRequiredClaimsWithHttpInfo(oauthProfileName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling getOauthProfileResourceServerRequiredClaims");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName
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
      let returnType = OauthProfileResourceServerRequiredClaimsResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/resourceServerRequiredClaims', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Required Claim objects.
     * Get a list of Required Claim objects.  Additional claims to be verified in the access token.   Attribute|Identifying|Deprecated :---|:---:|:---: oauthProfileName|x| resourceServerRequiredClaimName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileResourceServerRequiredClaimsResponseModel}
     */
    getOauthProfileResourceServerRequiredClaims(oauthProfileName, opts) {
      return this.getOauthProfileResourceServerRequiredClaimsWithHttpInfo(oauthProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of OAuth Profile objects.
     * Get a list of OAuth Profile objects.  OAuth profiles specify how to securely authenticate to an OAuth provider.   Attribute|Identifying|Deprecated :---|:---:|:---: oauthProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.24.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfilesResponseModel} and HTTP response
     */
    getOauthProfilesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
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
      let returnType = OauthProfilesResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of OAuth Profile objects.
     * Get a list of OAuth Profile objects.  OAuth profiles specify how to securely authenticate to an OAuth provider.   Attribute|Identifying|Deprecated :---|:---:|:---: oauthProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.24.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfilesResponseModel}
     */
    getOauthProfiles(opts) {
      return this.getOauthProfilesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}