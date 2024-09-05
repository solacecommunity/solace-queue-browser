import {ApiClient} from "../ApiClient";
import {MsgVpnAclProfileClientConnectExceptionResponseModel} from '../model/MsgVpnAclProfileClientConnectExceptionResponseModel';
import {MsgVpnAclProfileClientConnectExceptionsResponseModel} from '../model/MsgVpnAclProfileClientConnectExceptionsResponseModel';
import {MsgVpnAclProfilePublishExceptionResponseModel} from '../model/MsgVpnAclProfilePublishExceptionResponseModel';
import {MsgVpnAclProfilePublishExceptionsResponseModel} from '../model/MsgVpnAclProfilePublishExceptionsResponseModel';
import {MsgVpnAclProfilePublishTopicExceptionResponseModel} from '../model/MsgVpnAclProfilePublishTopicExceptionResponseModel';
import {MsgVpnAclProfilePublishTopicExceptionsResponseModel} from '../model/MsgVpnAclProfilePublishTopicExceptionsResponseModel';
import {MsgVpnAclProfileResponseModel} from '../model/MsgVpnAclProfileResponseModel';
import {MsgVpnAclProfileSubscribeExceptionResponseModel} from '../model/MsgVpnAclProfileSubscribeExceptionResponseModel';
import {MsgVpnAclProfileSubscribeExceptionsResponseModel} from '../model/MsgVpnAclProfileSubscribeExceptionsResponseModel';
import {MsgVpnAclProfileSubscribeShareNameExceptionResponseModel} from '../model/MsgVpnAclProfileSubscribeShareNameExceptionResponseModel';
import {MsgVpnAclProfileSubscribeShareNameExceptionsResponseModel} from '../model/MsgVpnAclProfileSubscribeShareNameExceptionsResponseModel';
import {MsgVpnAclProfileSubscribeTopicExceptionResponseModel} from '../model/MsgVpnAclProfileSubscribeTopicExceptionResponseModel';
import {MsgVpnAclProfileSubscribeTopicExceptionsResponseModel} from '../model/MsgVpnAclProfileSubscribeTopicExceptionsResponseModel';
import {MsgVpnAclProfilesResponseModel} from '../model/MsgVpnAclProfilesResponseModel';
import {SempMetaOnlyResponseModel} from '../model/SempMetaOnlyResponseModel';

/**
* AclProfile service.
* @module api/AclProfileApi
* @version 2.36
*/
export class AclProfileApi {

    /**
    * Constructs a new AclProfileApi. 
    * @alias module:api/AclProfileApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get an ACL Profile object.
     * Get an ACL Profile object.  An ACL Profile controls whether an authenticated client is permitted to establish a connection with the message broker or permitted to publish and subscribe to specific topics.   Attribute|Identifying|Deprecated :---|:---:|:---: aclProfileName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} aclProfileName The name of the ACL Profile.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnAclProfileResponseModel} and HTTP response
     */
    getMsgVpnAclProfileWithHttpInfo(msgVpnName, aclProfileName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnAclProfile");
      }
      // verify the required parameter 'aclProfileName' is set
      if (aclProfileName === undefined || aclProfileName === null) {
        throw new Error("Missing the required parameter 'aclProfileName' when calling getMsgVpnAclProfile");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'aclProfileName': aclProfileName
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
      let returnType = MsgVpnAclProfileResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/aclProfiles/{aclProfileName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get an ACL Profile object.
     * Get an ACL Profile object.  An ACL Profile controls whether an authenticated client is permitted to establish a connection with the message broker or permitted to publish and subscribe to specific topics.   Attribute|Identifying|Deprecated :---|:---:|:---: aclProfileName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} aclProfileName The name of the ACL Profile.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnAclProfileResponseModel}
     */
    getMsgVpnAclProfile(msgVpnName, aclProfileName, opts) {
      return this.getMsgVpnAclProfileWithHttpInfo(msgVpnName, aclProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Client Connect Exception object.
     * Get a Client Connect Exception object.  A Client Connect Exception is an exception to the default action to take when a client using the ACL Profile connects to the Message VPN. Exceptions must be expressed as an IP address/netmask in CIDR form.   Attribute|Identifying|Deprecated :---|:---:|:---: aclProfileName|x| clientConnectExceptionAddress|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} aclProfileName The name of the ACL Profile.
     * @param {String} clientConnectExceptionAddress The IP address/netmask of the client connect exception in canonical CIDR form.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnAclProfileClientConnectExceptionResponseModel} and HTTP response
     */
    getMsgVpnAclProfileClientConnectExceptionWithHttpInfo(msgVpnName, aclProfileName, clientConnectExceptionAddress, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnAclProfileClientConnectException");
      }
      // verify the required parameter 'aclProfileName' is set
      if (aclProfileName === undefined || aclProfileName === null) {
        throw new Error("Missing the required parameter 'aclProfileName' when calling getMsgVpnAclProfileClientConnectException");
      }
      // verify the required parameter 'clientConnectExceptionAddress' is set
      if (clientConnectExceptionAddress === undefined || clientConnectExceptionAddress === null) {
        throw new Error("Missing the required parameter 'clientConnectExceptionAddress' when calling getMsgVpnAclProfileClientConnectException");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'aclProfileName': aclProfileName,'clientConnectExceptionAddress': clientConnectExceptionAddress
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
      let returnType = MsgVpnAclProfileClientConnectExceptionResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/aclProfiles/{aclProfileName}/clientConnectExceptions/{clientConnectExceptionAddress}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Client Connect Exception object.
     * Get a Client Connect Exception object.  A Client Connect Exception is an exception to the default action to take when a client using the ACL Profile connects to the Message VPN. Exceptions must be expressed as an IP address/netmask in CIDR form.   Attribute|Identifying|Deprecated :---|:---:|:---: aclProfileName|x| clientConnectExceptionAddress|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} aclProfileName The name of the ACL Profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} clientConnectExceptionAddress The IP address/netmask of the client connect exception in canonical CIDR form.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnAclProfileClientConnectExceptionResponseModel}
     */
    getMsgVpnAclProfileClientConnectException(msgVpnName, aclProfileName, clientConnectExceptionAddress, opts) {
      return this.getMsgVpnAclProfileClientConnectExceptionWithHttpInfo(msgVpnName, aclProfileName, clientConnectExceptionAddress, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Client Connect Exception objects.
     * Get a list of Client Connect Exception objects.  A Client Connect Exception is an exception to the default action to take when a client using the ACL Profile connects to the Message VPN. Exceptions must be expressed as an IP address/netmask in CIDR form.   Attribute|Identifying|Deprecated :---|:---:|:---: aclProfileName|x| clientConnectExceptionAddress|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} aclProfileName The name of the ACL Profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnAclProfileClientConnectExceptionsResponseModel} and HTTP response
     */
    getMsgVpnAclProfileClientConnectExceptionsWithHttpInfo(msgVpnName, aclProfileName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnAclProfileClientConnectExceptions");
      }
      // verify the required parameter 'aclProfileName' is set
      if (aclProfileName === undefined || aclProfileName === null) {
        throw new Error("Missing the required parameter 'aclProfileName' when calling getMsgVpnAclProfileClientConnectExceptions");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'aclProfileName': aclProfileName
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
      let returnType = MsgVpnAclProfileClientConnectExceptionsResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/aclProfiles/{aclProfileName}/clientConnectExceptions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Client Connect Exception objects.
     * Get a list of Client Connect Exception objects.  A Client Connect Exception is an exception to the default action to take when a client using the ACL Profile connects to the Message VPN. Exceptions must be expressed as an IP address/netmask in CIDR form.   Attribute|Identifying|Deprecated :---|:---:|:---: aclProfileName|x| clientConnectExceptionAddress|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} aclProfileName The name of the ACL Profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnAclProfileClientConnectExceptionsResponseModel}
     */
    getMsgVpnAclProfileClientConnectExceptions(msgVpnName, aclProfileName, opts) {
      return this.getMsgVpnAclProfileClientConnectExceptionsWithHttpInfo(msgVpnName, aclProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Publish Topic Exception object.
     * Get a Publish Topic Exception object.  A Publish Topic Exception is an exception to the default action to take when a client using the ACL Profile publishes to a topic in the Message VPN. Exceptions must be expressed as a topic.   Attribute|Identifying|Deprecated :---|:---:|:---: aclProfileName|x|x msgVpnName|x|x publishExceptionTopic|x|x topicSyntax|x|x    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been deprecated since 2.14. Replaced by publishTopicExceptions.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} aclProfileName The name of the ACL Profile.
     * @param {String} topicSyntax The syntax of the topic for the exception to the default action taken.
     * @param {String} publishExceptionTopic The topic for the exception to the default action taken. May include wildcard characters.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnAclProfilePublishExceptionResponseModel} and HTTP response
     */
    getMsgVpnAclProfilePublishExceptionWithHttpInfo(msgVpnName, aclProfileName, topicSyntax, publishExceptionTopic, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnAclProfilePublishException");
      }
      // verify the required parameter 'aclProfileName' is set
      if (aclProfileName === undefined || aclProfileName === null) {
        throw new Error("Missing the required parameter 'aclProfileName' when calling getMsgVpnAclProfilePublishException");
      }
      // verify the required parameter 'topicSyntax' is set
      if (topicSyntax === undefined || topicSyntax === null) {
        throw new Error("Missing the required parameter 'topicSyntax' when calling getMsgVpnAclProfilePublishException");
      }
      // verify the required parameter 'publishExceptionTopic' is set
      if (publishExceptionTopic === undefined || publishExceptionTopic === null) {
        throw new Error("Missing the required parameter 'publishExceptionTopic' when calling getMsgVpnAclProfilePublishException");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'aclProfileName': aclProfileName,'topicSyntax': topicSyntax,'publishExceptionTopic': publishExceptionTopic
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
      let returnType = MsgVpnAclProfilePublishExceptionResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/aclProfiles/{aclProfileName}/publishExceptions/{topicSyntax},{publishExceptionTopic}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Publish Topic Exception object.
     * Get a Publish Topic Exception object.  A Publish Topic Exception is an exception to the default action to take when a client using the ACL Profile publishes to a topic in the Message VPN. Exceptions must be expressed as a topic.   Attribute|Identifying|Deprecated :---|:---:|:---: aclProfileName|x|x msgVpnName|x|x publishExceptionTopic|x|x topicSyntax|x|x    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been deprecated since 2.14. Replaced by publishTopicExceptions.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} aclProfileName The name of the ACL Profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} topicSyntax The syntax of the topic for the exception to the default action taken.
     * @param {<&vendorExtensions.x-jsdoc-type>} publishExceptionTopic The topic for the exception to the default action taken. May include wildcard characters.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnAclProfilePublishExceptionResponseModel}
     */
    getMsgVpnAclProfilePublishException(msgVpnName, aclProfileName, topicSyntax, publishExceptionTopic, opts) {
      return this.getMsgVpnAclProfilePublishExceptionWithHttpInfo(msgVpnName, aclProfileName, topicSyntax, publishExceptionTopic, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Publish Topic Exception objects.
     * Get a list of Publish Topic Exception objects.  A Publish Topic Exception is an exception to the default action to take when a client using the ACL Profile publishes to a topic in the Message VPN. Exceptions must be expressed as a topic.   Attribute|Identifying|Deprecated :---|:---:|:---: aclProfileName|x|x msgVpnName|x|x publishExceptionTopic|x|x topicSyntax|x|x    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been deprecated since 2.14. Replaced by publishTopicExceptions.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} aclProfileName The name of the ACL Profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnAclProfilePublishExceptionsResponseModel} and HTTP response
     */
    getMsgVpnAclProfilePublishExceptionsWithHttpInfo(msgVpnName, aclProfileName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnAclProfilePublishExceptions");
      }
      // verify the required parameter 'aclProfileName' is set
      if (aclProfileName === undefined || aclProfileName === null) {
        throw new Error("Missing the required parameter 'aclProfileName' when calling getMsgVpnAclProfilePublishExceptions");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'aclProfileName': aclProfileName
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
      let returnType = MsgVpnAclProfilePublishExceptionsResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/aclProfiles/{aclProfileName}/publishExceptions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Publish Topic Exception objects.
     * Get a list of Publish Topic Exception objects.  A Publish Topic Exception is an exception to the default action to take when a client using the ACL Profile publishes to a topic in the Message VPN. Exceptions must be expressed as a topic.   Attribute|Identifying|Deprecated :---|:---:|:---: aclProfileName|x|x msgVpnName|x|x publishExceptionTopic|x|x topicSyntax|x|x    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been deprecated since 2.14. Replaced by publishTopicExceptions.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} aclProfileName The name of the ACL Profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnAclProfilePublishExceptionsResponseModel}
     */
    getMsgVpnAclProfilePublishExceptions(msgVpnName, aclProfileName, opts) {
      return this.getMsgVpnAclProfilePublishExceptionsWithHttpInfo(msgVpnName, aclProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Publish Topic Exception object.
     * Get a Publish Topic Exception object.  A Publish Topic Exception is an exception to the default action to take when a client using the ACL Profile publishes to a topic in the Message VPN. Exceptions must be expressed as a topic.   Attribute|Identifying|Deprecated :---|:---:|:---: aclProfileName|x| msgVpnName|x| publishTopicException|x| publishTopicExceptionSyntax|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.14.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} aclProfileName The name of the ACL Profile.
     * @param {String} publishTopicExceptionSyntax The syntax of the topic for the exception to the default action taken.
     * @param {String} publishTopicException The topic for the exception to the default action taken. May include wildcard characters.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnAclProfilePublishTopicExceptionResponseModel} and HTTP response
     */
    getMsgVpnAclProfilePublishTopicExceptionWithHttpInfo(msgVpnName, aclProfileName, publishTopicExceptionSyntax, publishTopicException, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnAclProfilePublishTopicException");
      }
      // verify the required parameter 'aclProfileName' is set
      if (aclProfileName === undefined || aclProfileName === null) {
        throw new Error("Missing the required parameter 'aclProfileName' when calling getMsgVpnAclProfilePublishTopicException");
      }
      // verify the required parameter 'publishTopicExceptionSyntax' is set
      if (publishTopicExceptionSyntax === undefined || publishTopicExceptionSyntax === null) {
        throw new Error("Missing the required parameter 'publishTopicExceptionSyntax' when calling getMsgVpnAclProfilePublishTopicException");
      }
      // verify the required parameter 'publishTopicException' is set
      if (publishTopicException === undefined || publishTopicException === null) {
        throw new Error("Missing the required parameter 'publishTopicException' when calling getMsgVpnAclProfilePublishTopicException");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'aclProfileName': aclProfileName,'publishTopicExceptionSyntax': publishTopicExceptionSyntax,'publishTopicException': publishTopicException
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
      let returnType = MsgVpnAclProfilePublishTopicExceptionResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/aclProfiles/{aclProfileName}/publishTopicExceptions/{publishTopicExceptionSyntax},{publishTopicException}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Publish Topic Exception object.
     * Get a Publish Topic Exception object.  A Publish Topic Exception is an exception to the default action to take when a client using the ACL Profile publishes to a topic in the Message VPN. Exceptions must be expressed as a topic.   Attribute|Identifying|Deprecated :---|:---:|:---: aclProfileName|x| msgVpnName|x| publishTopicException|x| publishTopicExceptionSyntax|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.14.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} aclProfileName The name of the ACL Profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} publishTopicExceptionSyntax The syntax of the topic for the exception to the default action taken.
     * @param {<&vendorExtensions.x-jsdoc-type>} publishTopicException The topic for the exception to the default action taken. May include wildcard characters.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnAclProfilePublishTopicExceptionResponseModel}
     */
    getMsgVpnAclProfilePublishTopicException(msgVpnName, aclProfileName, publishTopicExceptionSyntax, publishTopicException, opts) {
      return this.getMsgVpnAclProfilePublishTopicExceptionWithHttpInfo(msgVpnName, aclProfileName, publishTopicExceptionSyntax, publishTopicException, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Publish Topic Exception objects.
     * Get a list of Publish Topic Exception objects.  A Publish Topic Exception is an exception to the default action to take when a client using the ACL Profile publishes to a topic in the Message VPN. Exceptions must be expressed as a topic.   Attribute|Identifying|Deprecated :---|:---:|:---: aclProfileName|x| msgVpnName|x| publishTopicException|x| publishTopicExceptionSyntax|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.14.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} aclProfileName The name of the ACL Profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnAclProfilePublishTopicExceptionsResponseModel} and HTTP response
     */
    getMsgVpnAclProfilePublishTopicExceptionsWithHttpInfo(msgVpnName, aclProfileName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnAclProfilePublishTopicExceptions");
      }
      // verify the required parameter 'aclProfileName' is set
      if (aclProfileName === undefined || aclProfileName === null) {
        throw new Error("Missing the required parameter 'aclProfileName' when calling getMsgVpnAclProfilePublishTopicExceptions");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'aclProfileName': aclProfileName
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
      let returnType = MsgVpnAclProfilePublishTopicExceptionsResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/aclProfiles/{aclProfileName}/publishTopicExceptions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Publish Topic Exception objects.
     * Get a list of Publish Topic Exception objects.  A Publish Topic Exception is an exception to the default action to take when a client using the ACL Profile publishes to a topic in the Message VPN. Exceptions must be expressed as a topic.   Attribute|Identifying|Deprecated :---|:---:|:---: aclProfileName|x| msgVpnName|x| publishTopicException|x| publishTopicExceptionSyntax|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.14.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} aclProfileName The name of the ACL Profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnAclProfilePublishTopicExceptionsResponseModel}
     */
    getMsgVpnAclProfilePublishTopicExceptions(msgVpnName, aclProfileName, opts) {
      return this.getMsgVpnAclProfilePublishTopicExceptionsWithHttpInfo(msgVpnName, aclProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Subscribe Topic Exception object.
     * Get a Subscribe Topic Exception object.  A Subscribe Topic Exception is an exception to the default action to take when a client using the ACL Profile subscribes to a topic in the Message VPN. Exceptions must be expressed as a topic.   Attribute|Identifying|Deprecated :---|:---:|:---: aclProfileName|x|x msgVpnName|x|x subscribeExceptionTopic|x|x topicSyntax|x|x    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been deprecated since 2.14. Replaced by subscribeTopicExceptions.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} aclProfileName The name of the ACL Profile.
     * @param {String} topicSyntax The syntax of the topic for the exception to the default action taken.
     * @param {String} subscribeExceptionTopic The topic for the exception to the default action taken. May include wildcard characters.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnAclProfileSubscribeExceptionResponseModel} and HTTP response
     */
    getMsgVpnAclProfileSubscribeExceptionWithHttpInfo(msgVpnName, aclProfileName, topicSyntax, subscribeExceptionTopic, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnAclProfileSubscribeException");
      }
      // verify the required parameter 'aclProfileName' is set
      if (aclProfileName === undefined || aclProfileName === null) {
        throw new Error("Missing the required parameter 'aclProfileName' when calling getMsgVpnAclProfileSubscribeException");
      }
      // verify the required parameter 'topicSyntax' is set
      if (topicSyntax === undefined || topicSyntax === null) {
        throw new Error("Missing the required parameter 'topicSyntax' when calling getMsgVpnAclProfileSubscribeException");
      }
      // verify the required parameter 'subscribeExceptionTopic' is set
      if (subscribeExceptionTopic === undefined || subscribeExceptionTopic === null) {
        throw new Error("Missing the required parameter 'subscribeExceptionTopic' when calling getMsgVpnAclProfileSubscribeException");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'aclProfileName': aclProfileName,'topicSyntax': topicSyntax,'subscribeExceptionTopic': subscribeExceptionTopic
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
      let returnType = MsgVpnAclProfileSubscribeExceptionResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/aclProfiles/{aclProfileName}/subscribeExceptions/{topicSyntax},{subscribeExceptionTopic}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Subscribe Topic Exception object.
     * Get a Subscribe Topic Exception object.  A Subscribe Topic Exception is an exception to the default action to take when a client using the ACL Profile subscribes to a topic in the Message VPN. Exceptions must be expressed as a topic.   Attribute|Identifying|Deprecated :---|:---:|:---: aclProfileName|x|x msgVpnName|x|x subscribeExceptionTopic|x|x topicSyntax|x|x    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been deprecated since 2.14. Replaced by subscribeTopicExceptions.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} aclProfileName The name of the ACL Profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} topicSyntax The syntax of the topic for the exception to the default action taken.
     * @param {<&vendorExtensions.x-jsdoc-type>} subscribeExceptionTopic The topic for the exception to the default action taken. May include wildcard characters.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnAclProfileSubscribeExceptionResponseModel}
     */
    getMsgVpnAclProfileSubscribeException(msgVpnName, aclProfileName, topicSyntax, subscribeExceptionTopic, opts) {
      return this.getMsgVpnAclProfileSubscribeExceptionWithHttpInfo(msgVpnName, aclProfileName, topicSyntax, subscribeExceptionTopic, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Subscribe Topic Exception objects.
     * Get a list of Subscribe Topic Exception objects.  A Subscribe Topic Exception is an exception to the default action to take when a client using the ACL Profile subscribes to a topic in the Message VPN. Exceptions must be expressed as a topic.   Attribute|Identifying|Deprecated :---|:---:|:---: aclProfileName|x|x msgVpnName|x|x subscribeExceptionTopic|x|x topicSyntax|x|x    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been deprecated since 2.14. Replaced by subscribeTopicExceptions.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} aclProfileName The name of the ACL Profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnAclProfileSubscribeExceptionsResponseModel} and HTTP response
     */
    getMsgVpnAclProfileSubscribeExceptionsWithHttpInfo(msgVpnName, aclProfileName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnAclProfileSubscribeExceptions");
      }
      // verify the required parameter 'aclProfileName' is set
      if (aclProfileName === undefined || aclProfileName === null) {
        throw new Error("Missing the required parameter 'aclProfileName' when calling getMsgVpnAclProfileSubscribeExceptions");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'aclProfileName': aclProfileName
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
      let returnType = MsgVpnAclProfileSubscribeExceptionsResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/aclProfiles/{aclProfileName}/subscribeExceptions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Subscribe Topic Exception objects.
     * Get a list of Subscribe Topic Exception objects.  A Subscribe Topic Exception is an exception to the default action to take when a client using the ACL Profile subscribes to a topic in the Message VPN. Exceptions must be expressed as a topic.   Attribute|Identifying|Deprecated :---|:---:|:---: aclProfileName|x|x msgVpnName|x|x subscribeExceptionTopic|x|x topicSyntax|x|x    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been deprecated since 2.14. Replaced by subscribeTopicExceptions.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} aclProfileName The name of the ACL Profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnAclProfileSubscribeExceptionsResponseModel}
     */
    getMsgVpnAclProfileSubscribeExceptions(msgVpnName, aclProfileName, opts) {
      return this.getMsgVpnAclProfileSubscribeExceptionsWithHttpInfo(msgVpnName, aclProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Subscribe Share Name Exception object.
     * Get a Subscribe Share Name Exception object.  A Subscribe Share Name Exception is an exception to the default action to take when a client using the ACL Profile subscribes to a share-name subscription in the Message VPN. Exceptions must be expressed as a topic.   Attribute|Identifying|Deprecated :---|:---:|:---: aclProfileName|x| msgVpnName|x| subscribeShareNameException|x| subscribeShareNameExceptionSyntax|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.14.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} aclProfileName The name of the ACL Profile.
     * @param {String} subscribeShareNameExceptionSyntax The syntax of the subscribe share name for the exception to the default action taken.
     * @param {String} subscribeShareNameException The subscribe share name exception to the default action taken. May include wildcard characters.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnAclProfileSubscribeShareNameExceptionResponseModel} and HTTP response
     */
    getMsgVpnAclProfileSubscribeShareNameExceptionWithHttpInfo(msgVpnName, aclProfileName, subscribeShareNameExceptionSyntax, subscribeShareNameException, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnAclProfileSubscribeShareNameException");
      }
      // verify the required parameter 'aclProfileName' is set
      if (aclProfileName === undefined || aclProfileName === null) {
        throw new Error("Missing the required parameter 'aclProfileName' when calling getMsgVpnAclProfileSubscribeShareNameException");
      }
      // verify the required parameter 'subscribeShareNameExceptionSyntax' is set
      if (subscribeShareNameExceptionSyntax === undefined || subscribeShareNameExceptionSyntax === null) {
        throw new Error("Missing the required parameter 'subscribeShareNameExceptionSyntax' when calling getMsgVpnAclProfileSubscribeShareNameException");
      }
      // verify the required parameter 'subscribeShareNameException' is set
      if (subscribeShareNameException === undefined || subscribeShareNameException === null) {
        throw new Error("Missing the required parameter 'subscribeShareNameException' when calling getMsgVpnAclProfileSubscribeShareNameException");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'aclProfileName': aclProfileName,'subscribeShareNameExceptionSyntax': subscribeShareNameExceptionSyntax,'subscribeShareNameException': subscribeShareNameException
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
      let returnType = MsgVpnAclProfileSubscribeShareNameExceptionResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/aclProfiles/{aclProfileName}/subscribeShareNameExceptions/{subscribeShareNameExceptionSyntax},{subscribeShareNameException}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Subscribe Share Name Exception object.
     * Get a Subscribe Share Name Exception object.  A Subscribe Share Name Exception is an exception to the default action to take when a client using the ACL Profile subscribes to a share-name subscription in the Message VPN. Exceptions must be expressed as a topic.   Attribute|Identifying|Deprecated :---|:---:|:---: aclProfileName|x| msgVpnName|x| subscribeShareNameException|x| subscribeShareNameExceptionSyntax|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.14.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} aclProfileName The name of the ACL Profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} subscribeShareNameExceptionSyntax The syntax of the subscribe share name for the exception to the default action taken.
     * @param {<&vendorExtensions.x-jsdoc-type>} subscribeShareNameException The subscribe share name exception to the default action taken. May include wildcard characters.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnAclProfileSubscribeShareNameExceptionResponseModel}
     */
    getMsgVpnAclProfileSubscribeShareNameException(msgVpnName, aclProfileName, subscribeShareNameExceptionSyntax, subscribeShareNameException, opts) {
      return this.getMsgVpnAclProfileSubscribeShareNameExceptionWithHttpInfo(msgVpnName, aclProfileName, subscribeShareNameExceptionSyntax, subscribeShareNameException, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Subscribe Share Name Exception objects.
     * Get a list of Subscribe Share Name Exception objects.  A Subscribe Share Name Exception is an exception to the default action to take when a client using the ACL Profile subscribes to a share-name subscription in the Message VPN. Exceptions must be expressed as a topic.   Attribute|Identifying|Deprecated :---|:---:|:---: aclProfileName|x| msgVpnName|x| subscribeShareNameException|x| subscribeShareNameExceptionSyntax|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.14.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} aclProfileName The name of the ACL Profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnAclProfileSubscribeShareNameExceptionsResponseModel} and HTTP response
     */
    getMsgVpnAclProfileSubscribeShareNameExceptionsWithHttpInfo(msgVpnName, aclProfileName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnAclProfileSubscribeShareNameExceptions");
      }
      // verify the required parameter 'aclProfileName' is set
      if (aclProfileName === undefined || aclProfileName === null) {
        throw new Error("Missing the required parameter 'aclProfileName' when calling getMsgVpnAclProfileSubscribeShareNameExceptions");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'aclProfileName': aclProfileName
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
      let returnType = MsgVpnAclProfileSubscribeShareNameExceptionsResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/aclProfiles/{aclProfileName}/subscribeShareNameExceptions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Subscribe Share Name Exception objects.
     * Get a list of Subscribe Share Name Exception objects.  A Subscribe Share Name Exception is an exception to the default action to take when a client using the ACL Profile subscribes to a share-name subscription in the Message VPN. Exceptions must be expressed as a topic.   Attribute|Identifying|Deprecated :---|:---:|:---: aclProfileName|x| msgVpnName|x| subscribeShareNameException|x| subscribeShareNameExceptionSyntax|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.14.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} aclProfileName The name of the ACL Profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnAclProfileSubscribeShareNameExceptionsResponseModel}
     */
    getMsgVpnAclProfileSubscribeShareNameExceptions(msgVpnName, aclProfileName, opts) {
      return this.getMsgVpnAclProfileSubscribeShareNameExceptionsWithHttpInfo(msgVpnName, aclProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Subscribe Topic Exception object.
     * Get a Subscribe Topic Exception object.  A Subscribe Topic Exception is an exception to the default action to take when a client using the ACL Profile subscribes to a topic in the Message VPN. Exceptions must be expressed as a topic.   Attribute|Identifying|Deprecated :---|:---:|:---: aclProfileName|x| msgVpnName|x| subscribeTopicException|x| subscribeTopicExceptionSyntax|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.14.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} aclProfileName The name of the ACL Profile.
     * @param {String} subscribeTopicExceptionSyntax The syntax of the topic for the exception to the default action taken.
     * @param {String} subscribeTopicException The topic for the exception to the default action taken. May include wildcard characters.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnAclProfileSubscribeTopicExceptionResponseModel} and HTTP response
     */
    getMsgVpnAclProfileSubscribeTopicExceptionWithHttpInfo(msgVpnName, aclProfileName, subscribeTopicExceptionSyntax, subscribeTopicException, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnAclProfileSubscribeTopicException");
      }
      // verify the required parameter 'aclProfileName' is set
      if (aclProfileName === undefined || aclProfileName === null) {
        throw new Error("Missing the required parameter 'aclProfileName' when calling getMsgVpnAclProfileSubscribeTopicException");
      }
      // verify the required parameter 'subscribeTopicExceptionSyntax' is set
      if (subscribeTopicExceptionSyntax === undefined || subscribeTopicExceptionSyntax === null) {
        throw new Error("Missing the required parameter 'subscribeTopicExceptionSyntax' when calling getMsgVpnAclProfileSubscribeTopicException");
      }
      // verify the required parameter 'subscribeTopicException' is set
      if (subscribeTopicException === undefined || subscribeTopicException === null) {
        throw new Error("Missing the required parameter 'subscribeTopicException' when calling getMsgVpnAclProfileSubscribeTopicException");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'aclProfileName': aclProfileName,'subscribeTopicExceptionSyntax': subscribeTopicExceptionSyntax,'subscribeTopicException': subscribeTopicException
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
      let returnType = MsgVpnAclProfileSubscribeTopicExceptionResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/aclProfiles/{aclProfileName}/subscribeTopicExceptions/{subscribeTopicExceptionSyntax},{subscribeTopicException}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Subscribe Topic Exception object.
     * Get a Subscribe Topic Exception object.  A Subscribe Topic Exception is an exception to the default action to take when a client using the ACL Profile subscribes to a topic in the Message VPN. Exceptions must be expressed as a topic.   Attribute|Identifying|Deprecated :---|:---:|:---: aclProfileName|x| msgVpnName|x| subscribeTopicException|x| subscribeTopicExceptionSyntax|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.14.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} aclProfileName The name of the ACL Profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} subscribeTopicExceptionSyntax The syntax of the topic for the exception to the default action taken.
     * @param {<&vendorExtensions.x-jsdoc-type>} subscribeTopicException The topic for the exception to the default action taken. May include wildcard characters.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnAclProfileSubscribeTopicExceptionResponseModel}
     */
    getMsgVpnAclProfileSubscribeTopicException(msgVpnName, aclProfileName, subscribeTopicExceptionSyntax, subscribeTopicException, opts) {
      return this.getMsgVpnAclProfileSubscribeTopicExceptionWithHttpInfo(msgVpnName, aclProfileName, subscribeTopicExceptionSyntax, subscribeTopicException, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Subscribe Topic Exception objects.
     * Get a list of Subscribe Topic Exception objects.  A Subscribe Topic Exception is an exception to the default action to take when a client using the ACL Profile subscribes to a topic in the Message VPN. Exceptions must be expressed as a topic.   Attribute|Identifying|Deprecated :---|:---:|:---: aclProfileName|x| msgVpnName|x| subscribeTopicException|x| subscribeTopicExceptionSyntax|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.14.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} aclProfileName The name of the ACL Profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnAclProfileSubscribeTopicExceptionsResponseModel} and HTTP response
     */
    getMsgVpnAclProfileSubscribeTopicExceptionsWithHttpInfo(msgVpnName, aclProfileName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnAclProfileSubscribeTopicExceptions");
      }
      // verify the required parameter 'aclProfileName' is set
      if (aclProfileName === undefined || aclProfileName === null) {
        throw new Error("Missing the required parameter 'aclProfileName' when calling getMsgVpnAclProfileSubscribeTopicExceptions");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'aclProfileName': aclProfileName
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
      let returnType = MsgVpnAclProfileSubscribeTopicExceptionsResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/aclProfiles/{aclProfileName}/subscribeTopicExceptions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Subscribe Topic Exception objects.
     * Get a list of Subscribe Topic Exception objects.  A Subscribe Topic Exception is an exception to the default action to take when a client using the ACL Profile subscribes to a topic in the Message VPN. Exceptions must be expressed as a topic.   Attribute|Identifying|Deprecated :---|:---:|:---: aclProfileName|x| msgVpnName|x| subscribeTopicException|x| subscribeTopicExceptionSyntax|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.14.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} aclProfileName The name of the ACL Profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnAclProfileSubscribeTopicExceptionsResponseModel}
     */
    getMsgVpnAclProfileSubscribeTopicExceptions(msgVpnName, aclProfileName, opts) {
      return this.getMsgVpnAclProfileSubscribeTopicExceptionsWithHttpInfo(msgVpnName, aclProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of ACL Profile objects.
     * Get a list of ACL Profile objects.  An ACL Profile controls whether an authenticated client is permitted to establish a connection with the message broker or permitted to publish and subscribe to specific topics.   Attribute|Identifying|Deprecated :---|:---:|:---: aclProfileName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnAclProfilesResponseModel} and HTTP response
     */
    getMsgVpnAclProfilesWithHttpInfo(msgVpnName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnAclProfiles");
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
      let returnType = MsgVpnAclProfilesResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/aclProfiles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of ACL Profile objects.
     * Get a list of ACL Profile objects.  An ACL Profile controls whether an authenticated client is permitted to establish a connection with the message broker or permitted to publish and subscribe to specific topics.   Attribute|Identifying|Deprecated :---|:---:|:---: aclProfileName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnAclProfilesResponseModel}
     */
    getMsgVpnAclProfiles(msgVpnName, opts) {
      return this.getMsgVpnAclProfilesWithHttpInfo(msgVpnName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}