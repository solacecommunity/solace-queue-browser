import {ApiClient} from "../ApiClient";
import {SempMetaOnlyResponseModel} from '../model/SempMetaOnlyResponseModel';
import {VirtualHostnameResponseModel} from '../model/VirtualHostnameResponseModel';
import {VirtualHostnamesResponseModel} from '../model/VirtualHostnamesResponseModel';

/**
* VirtualHostname service.
* @module api/VirtualHostnameApi
* @version 2.36
*/
export class VirtualHostnameApi {

    /**
    * Constructs a new VirtualHostnameApi. 
    * @alias module:api/VirtualHostnameApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get a Virtual Hostname object.
     * Get a Virtual Hostname object.  A Virtual Hostname is a provisioned object on a message broker that contains a Virtual Hostname to Message VPN mapping.  Clients which connect to a global (as opposed to per Message VPN) port and provides this hostname will be directed to its corresponding Message VPN. A case-insentive match is performed on the full client-provided hostname against the configured virtual-hostname.  This mechanism is only supported for hostnames provided through the Server Name Indication (SNI) extension of TLS.   Attribute|Identifying|Deprecated :---|:---:|:---: virtualHostname|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.17.
     * @param {String} virtualHostname The virtual hostname.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/VirtualHostnameResponseModel} and HTTP response
     */
    getVirtualHostnameWithHttpInfo(virtualHostname, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'virtualHostname' is set
      if (virtualHostname === undefined || virtualHostname === null) {
        throw new Error("Missing the required parameter 'virtualHostname' when calling getVirtualHostname");
      }

      let pathParams = {
        'virtualHostname': virtualHostname
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
      let returnType = VirtualHostnameResponseModel;

      return this.apiClient.callApi(
        '/virtualHostnames/{virtualHostname}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Virtual Hostname object.
     * Get a Virtual Hostname object.  A Virtual Hostname is a provisioned object on a message broker that contains a Virtual Hostname to Message VPN mapping.  Clients which connect to a global (as opposed to per Message VPN) port and provides this hostname will be directed to its corresponding Message VPN. A case-insentive match is performed on the full client-provided hostname against the configured virtual-hostname.  This mechanism is only supported for hostnames provided through the Server Name Indication (SNI) extension of TLS.   Attribute|Identifying|Deprecated :---|:---:|:---: virtualHostname|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.17.
     * @param {<&vendorExtensions.x-jsdoc-type>} virtualHostname The virtual hostname.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/VirtualHostnameResponseModel}
     */
    getVirtualHostname(virtualHostname, opts) {
      return this.getVirtualHostnameWithHttpInfo(virtualHostname, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Virtual Hostname objects.
     * Get a list of Virtual Hostname objects.  A Virtual Hostname is a provisioned object on a message broker that contains a Virtual Hostname to Message VPN mapping.  Clients which connect to a global (as opposed to per Message VPN) port and provides this hostname will be directed to its corresponding Message VPN. A case-insentive match is performed on the full client-provided hostname against the configured virtual-hostname.  This mechanism is only supported for hostnames provided through the Server Name Indication (SNI) extension of TLS.   Attribute|Identifying|Deprecated :---|:---:|:---: virtualHostname|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.17.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/VirtualHostnamesResponseModel} and HTTP response
     */
    getVirtualHostnamesWithHttpInfo(opts) {
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
      let returnType = VirtualHostnamesResponseModel;

      return this.apiClient.callApi(
        '/virtualHostnames', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Virtual Hostname objects.
     * Get a list of Virtual Hostname objects.  A Virtual Hostname is a provisioned object on a message broker that contains a Virtual Hostname to Message VPN mapping.  Clients which connect to a global (as opposed to per Message VPN) port and provides this hostname will be directed to its corresponding Message VPN. A case-insentive match is performed on the full client-provided hostname against the configured virtual-hostname.  This mechanism is only supported for hostnames provided through the Server Name Indication (SNI) extension of TLS.   Attribute|Identifying|Deprecated :---|:---:|:---: virtualHostname|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.17.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/VirtualHostnamesResponseModel}
     */
    getVirtualHostnames(opts) {
      return this.getVirtualHostnamesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}