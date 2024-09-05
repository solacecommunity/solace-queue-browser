import {ApiClient} from "../ApiClient";
import {DomainCertAuthoritiesResponseModel} from '../model/DomainCertAuthoritiesResponseModel';
import {DomainCertAuthorityResponseModel} from '../model/DomainCertAuthorityResponseModel';
import {SempMetaOnlyResponseModel} from '../model/SempMetaOnlyResponseModel';

/**
* DomainCertAuthority service.
* @module api/DomainCertAuthorityApi
* @version 2.36
*/
export class DomainCertAuthorityApi {

    /**
    * Constructs a new DomainCertAuthorityApi. 
    * @alias module:api/DomainCertAuthorityApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get a list of Domain Certificate Authority objects.
     * Get a list of Domain Certificate Authority objects.  Certificate Authorities trusted for domain verification.   Attribute|Identifying|Deprecated :---|:---:|:---: certAuthorityName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.19.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DomainCertAuthoritiesResponseModel} and HTTP response
     */
    getDomainCertAuthoritiesWithHttpInfo(opts) {
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
      let returnType = DomainCertAuthoritiesResponseModel;

      return this.apiClient.callApi(
        '/domainCertAuthorities', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Domain Certificate Authority objects.
     * Get a list of Domain Certificate Authority objects.  Certificate Authorities trusted for domain verification.   Attribute|Identifying|Deprecated :---|:---:|:---: certAuthorityName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.19.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DomainCertAuthoritiesResponseModel}
     */
    getDomainCertAuthorities(opts) {
      return this.getDomainCertAuthoritiesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Domain Certificate Authority object.
     * Get a Domain Certificate Authority object.  Certificate Authorities trusted for domain verification.   Attribute|Identifying|Deprecated :---|:---:|:---: certAuthorityName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.19.
     * @param {String} certAuthorityName The name of the Certificate Authority.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DomainCertAuthorityResponseModel} and HTTP response
     */
    getDomainCertAuthorityWithHttpInfo(certAuthorityName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'certAuthorityName' is set
      if (certAuthorityName === undefined || certAuthorityName === null) {
        throw new Error("Missing the required parameter 'certAuthorityName' when calling getDomainCertAuthority");
      }

      let pathParams = {
        'certAuthorityName': certAuthorityName
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
      let returnType = DomainCertAuthorityResponseModel;

      return this.apiClient.callApi(
        '/domainCertAuthorities/{certAuthorityName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Domain Certificate Authority object.
     * Get a Domain Certificate Authority object.  Certificate Authorities trusted for domain verification.   Attribute|Identifying|Deprecated :---|:---:|:---: certAuthorityName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.19.
     * @param {<&vendorExtensions.x-jsdoc-type>} certAuthorityName The name of the Certificate Authority.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DomainCertAuthorityResponseModel}
     */
    getDomainCertAuthority(certAuthorityName, opts) {
      return this.getDomainCertAuthorityWithHttpInfo(certAuthorityName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}