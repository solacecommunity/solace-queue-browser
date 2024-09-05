import {ApiClient} from "../ApiClient";
import {ConfigSyncLocalDatabaseRowResponseModel} from '../model/ConfigSyncLocalDatabaseRowResponseModel';
import {ConfigSyncLocalDatabaseRowsResponseModel} from '../model/ConfigSyncLocalDatabaseRowsResponseModel';
import {SempMetaOnlyResponseModel} from '../model/SempMetaOnlyResponseModel';

/**
* ConfigSyncLocalDatabaseRow service.
* @module api/ConfigSyncLocalDatabaseRowApi
* @version 2.36
*/
export class ConfigSyncLocalDatabaseRowApi {

    /**
    * Constructs a new ConfigSyncLocalDatabaseRowApi. 
    * @alias module:api/ConfigSyncLocalDatabaseRowApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get a Config Sync Local Database object.
     * Get a Config Sync Local Database object.  Config Sync Local Database Rows contains information about the status of the table for this Broker or a local Message VPN.   Attribute|Identifying|Deprecated :---|:---:|:---: name|x| type|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/none\&quot; is required to perform this operation.  This has been available since 2.22.
     * @param {String} type The type of the row. Can be one of \&quot;router\&quot; or \&quot;vpn\&quot;. There is one \&quot;router\&quot; row and one row for each configured \&quot;vpn\&quot;. Each row represents a table of information that is synchronized between Config Sync and replication mates.
     * @param {String} name The name is \&quot;site\&quot; when the row type is \&quot;router\&quot;, otherwise it is the Message VPN name.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConfigSyncLocalDatabaseRowResponseModel} and HTTP response
     */
    getConfigSyncLocalDatabaseRowWithHttpInfo(type, name, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling getConfigSyncLocalDatabaseRow");
      }
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling getConfigSyncLocalDatabaseRow");
      }

      let pathParams = {
        'type': type,'name': name
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
      let returnType = ConfigSyncLocalDatabaseRowResponseModel;

      return this.apiClient.callApi(
        '/configSyncLocalDatabaseRows/{type},{name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Config Sync Local Database object.
     * Get a Config Sync Local Database object.  Config Sync Local Database Rows contains information about the status of the table for this Broker or a local Message VPN.   Attribute|Identifying|Deprecated :---|:---:|:---: name|x| type|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/none\&quot; is required to perform this operation.  This has been available since 2.22.
     * @param {<&vendorExtensions.x-jsdoc-type>} type The type of the row. Can be one of \&quot;router\&quot; or \&quot;vpn\&quot;. There is one \&quot;router\&quot; row and one row for each configured \&quot;vpn\&quot;. Each row represents a table of information that is synchronized between Config Sync and replication mates.
     * @param {<&vendorExtensions.x-jsdoc-type>} name The name is \&quot;site\&quot; when the row type is \&quot;router\&quot;, otherwise it is the Message VPN name.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConfigSyncLocalDatabaseRowResponseModel}
     */
    getConfigSyncLocalDatabaseRow(type, name, opts) {
      return this.getConfigSyncLocalDatabaseRowWithHttpInfo(type, name, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Config Sync Local Database objects.
     * Get a list of Config Sync Local Database objects.  Config Sync Local Database Rows contains information about the status of the table for this Broker or a local Message VPN.   Attribute|Identifying|Deprecated :---|:---:|:---: name|x| type|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/none\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.22.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConfigSyncLocalDatabaseRowsResponseModel} and HTTP response
     */
    getConfigSyncLocalDatabaseRowsWithHttpInfo(opts) {
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
      let returnType = ConfigSyncLocalDatabaseRowsResponseModel;

      return this.apiClient.callApi(
        '/configSyncLocalDatabaseRows', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Config Sync Local Database objects.
     * Get a list of Config Sync Local Database objects.  Config Sync Local Database Rows contains information about the status of the table for this Broker or a local Message VPN.   Attribute|Identifying|Deprecated :---|:---:|:---: name|x| type|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/none\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.22.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConfigSyncLocalDatabaseRowsResponseModel}
     */
    getConfigSyncLocalDatabaseRows(opts) {
      return this.getConfigSyncLocalDatabaseRowsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}