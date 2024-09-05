import {ApiClient} from "../ApiClient";
import {SempMetaOnlyResponseModel} from '../model/SempMetaOnlyResponseModel';
import {SessionResponseModel} from '../model/SessionResponseModel';
import {SessionsResponseModel} from '../model/SessionsResponseModel';

/**
* Session service.
* @module api/SessionApi
* @version 2.36
*/
export class SessionApi {

    /**
    * Constructs a new SessionApi. 
    * @alias module:api/SessionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get a SEMP Session object.
     * Get a SEMP Session object.  Administrative sessions for configuration and monitoring.   Attribute|Identifying|Deprecated :---|:---:|:---: sessionId|x| sessionUsername|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.21.
     * @param {String} sessionUsername The username used for authorization.
     * @param {String} sessionId The unique identifier for the session.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SessionResponseModel} and HTTP response
     */
    getSessionWithHttpInfo(sessionUsername, sessionId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'sessionUsername' is set
      if (sessionUsername === undefined || sessionUsername === null) {
        throw new Error("Missing the required parameter 'sessionUsername' when calling getSession");
      }
      // verify the required parameter 'sessionId' is set
      if (sessionId === undefined || sessionId === null) {
        throw new Error("Missing the required parameter 'sessionId' when calling getSession");
      }

      let pathParams = {
        'sessionUsername': sessionUsername,'sessionId': sessionId
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
      let returnType = SessionResponseModel;

      return this.apiClient.callApi(
        '/sessions/{sessionUsername},{sessionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a SEMP Session object.
     * Get a SEMP Session object.  Administrative sessions for configuration and monitoring.   Attribute|Identifying|Deprecated :---|:---:|:---: sessionId|x| sessionUsername|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.21.
     * @param {<&vendorExtensions.x-jsdoc-type>} sessionUsername The username used for authorization.
     * @param {<&vendorExtensions.x-jsdoc-type>} sessionId The unique identifier for the session.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SessionResponseModel}
     */
    getSession(sessionUsername, sessionId, opts) {
      return this.getSessionWithHttpInfo(sessionUsername, sessionId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of SEMP Session objects.
     * Get a list of SEMP Session objects.  Administrative sessions for configuration and monitoring.   Attribute|Identifying|Deprecated :---|:---:|:---: sessionId|x| sessionUsername|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.21.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SessionsResponseModel} and HTTP response
     */
    getSessionsWithHttpInfo(opts) {
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
      let returnType = SessionsResponseModel;

      return this.apiClient.callApi(
        '/sessions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of SEMP Session objects.
     * Get a list of SEMP Session objects.  Administrative sessions for configuration and monitoring.   Attribute|Identifying|Deprecated :---|:---:|:---: sessionId|x| sessionUsername|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.21.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SessionsResponseModel}
     */
    getSessions(opts) {
      return this.getSessionsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}