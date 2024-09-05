import {ApiClient} from "../ApiClient";
import {SempMetaOnlyResponseModel} from '../model/SempMetaOnlyResponseModel';
import {StandardDomainCertAuthoritiesResponseModel} from '../model/StandardDomainCertAuthoritiesResponseModel';
import {StandardDomainCertAuthorityResponseModel} from '../model/StandardDomainCertAuthorityResponseModel';

/**
* StandardDomainCertAuthority service.
* @module api/StandardDomainCertAuthorityApi
* @version 2.36
*/
export class StandardDomainCertAuthorityApi {

    /**
    * Constructs a new StandardDomainCertAuthorityApi. 
    * @alias module:api/StandardDomainCertAuthorityApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get a list of Standard Domain Certificate Authority objects.
     * Get a list of Standard Domain Certificate Authority objects.  Standard Certificate Authorities trusted for domain verification.   Attribute|Identifying|Deprecated :---|:---:|:---: certAuthorityName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.19.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StandardDomainCertAuthoritiesResponseModel} and HTTP response
     */
    getStandardDomainCertAuthoritiesWithHttpInfo(opts) {
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
      let returnType = StandardDomainCertAuthoritiesResponseModel;

      return this.apiClient.callApi(
        '/standardDomainCertAuthorities', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Standard Domain Certificate Authority objects.
     * Get a list of Standard Domain Certificate Authority objects.  Standard Certificate Authorities trusted for domain verification.   Attribute|Identifying|Deprecated :---|:---:|:---: certAuthorityName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.19.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StandardDomainCertAuthoritiesResponseModel}
     */
    getStandardDomainCertAuthorities(opts) {
      return this.getStandardDomainCertAuthoritiesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Standard Domain Certificate Authority object.
     * Get a Standard Domain Certificate Authority object.  Standard Certificate Authorities trusted for domain verification.   Attribute|Identifying|Deprecated :---|:---:|:---: certAuthorityName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.19.
     * @param {String} certAuthorityName The name of the Certificate Authority.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StandardDomainCertAuthorityResponseModel} and HTTP response
     */
    getStandardDomainCertAuthorityWithHttpInfo(certAuthorityName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'certAuthorityName' is set
      if (certAuthorityName === undefined || certAuthorityName === null) {
        throw new Error("Missing the required parameter 'certAuthorityName' when calling getStandardDomainCertAuthority");
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
      let returnType = StandardDomainCertAuthorityResponseModel;

      return this.apiClient.callApi(
        '/standardDomainCertAuthorities/{certAuthorityName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Standard Domain Certificate Authority object.
     * Get a Standard Domain Certificate Authority object.  Standard Certificate Authorities trusted for domain verification.   Attribute|Identifying|Deprecated :---|:---:|:---: certAuthorityName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.19.
     * @param {<&vendorExtensions.x-jsdoc-type>} certAuthorityName The name of the Certificate Authority.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StandardDomainCertAuthorityResponseModel}
     */
    getStandardDomainCertAuthority(certAuthorityName, opts) {
      return this.getStandardDomainCertAuthorityWithHttpInfo(certAuthorityName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}