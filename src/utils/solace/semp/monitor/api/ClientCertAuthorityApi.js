import {ApiClient} from "../ApiClient";
import {ClientCertAuthoritiesResponseModel} from '../model/ClientCertAuthoritiesResponseModel';
import {ClientCertAuthorityOcspTlsTrustedCommonNameResponseModel} from '../model/ClientCertAuthorityOcspTlsTrustedCommonNameResponseModel';
import {ClientCertAuthorityOcspTlsTrustedCommonNamesResponseModel} from '../model/ClientCertAuthorityOcspTlsTrustedCommonNamesResponseModel';
import {ClientCertAuthorityResponseModel} from '../model/ClientCertAuthorityResponseModel';
import {SempMetaOnlyResponseModel} from '../model/SempMetaOnlyResponseModel';

/**
* ClientCertAuthority service.
* @module api/ClientCertAuthorityApi
* @version 2.36
*/
export class ClientCertAuthorityApi {

    /**
    * Constructs a new ClientCertAuthorityApi. 
    * @alias module:api/ClientCertAuthorityApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get a list of Client Certificate Authority objects.
     * Get a list of Client Certificate Authority objects.  Clients can authenticate with the message broker over TLS by presenting a valid client certificate. The message broker authenticates the client certificate by constructing a full certificate chain (from the client certificate to intermediate CAs to a configured root CA). The intermediate CAs in this chain can be provided by the client, or configured in the message broker. The root CA must be configured on the message broker.   Attribute|Identifying|Deprecated :---|:---:|:---: certAuthorityName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.19.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ClientCertAuthoritiesResponseModel} and HTTP response
     */
    getClientCertAuthoritiesWithHttpInfo(opts) {
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
      let returnType = ClientCertAuthoritiesResponseModel;

      return this.apiClient.callApi(
        '/clientCertAuthorities', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Client Certificate Authority objects.
     * Get a list of Client Certificate Authority objects.  Clients can authenticate with the message broker over TLS by presenting a valid client certificate. The message broker authenticates the client certificate by constructing a full certificate chain (from the client certificate to intermediate CAs to a configured root CA). The intermediate CAs in this chain can be provided by the client, or configured in the message broker. The root CA must be configured on the message broker.   Attribute|Identifying|Deprecated :---|:---:|:---: certAuthorityName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.19.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ClientCertAuthoritiesResponseModel}
     */
    getClientCertAuthorities(opts) {
      return this.getClientCertAuthoritiesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Client Certificate Authority object.
     * Get a Client Certificate Authority object.  Clients can authenticate with the message broker over TLS by presenting a valid client certificate. The message broker authenticates the client certificate by constructing a full certificate chain (from the client certificate to intermediate CAs to a configured root CA). The intermediate CAs in this chain can be provided by the client, or configured in the message broker. The root CA must be configured on the message broker.   Attribute|Identifying|Deprecated :---|:---:|:---: certAuthorityName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.19.
     * @param {String} certAuthorityName The name of the Certificate Authority.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ClientCertAuthorityResponseModel} and HTTP response
     */
    getClientCertAuthorityWithHttpInfo(certAuthorityName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'certAuthorityName' is set
      if (certAuthorityName === undefined || certAuthorityName === null) {
        throw new Error("Missing the required parameter 'certAuthorityName' when calling getClientCertAuthority");
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
      let returnType = ClientCertAuthorityResponseModel;

      return this.apiClient.callApi(
        '/clientCertAuthorities/{certAuthorityName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Client Certificate Authority object.
     * Get a Client Certificate Authority object.  Clients can authenticate with the message broker over TLS by presenting a valid client certificate. The message broker authenticates the client certificate by constructing a full certificate chain (from the client certificate to intermediate CAs to a configured root CA). The intermediate CAs in this chain can be provided by the client, or configured in the message broker. The root CA must be configured on the message broker.   Attribute|Identifying|Deprecated :---|:---:|:---: certAuthorityName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.19.
     * @param {<&vendorExtensions.x-jsdoc-type>} certAuthorityName The name of the Certificate Authority.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ClientCertAuthorityResponseModel}
     */
    getClientCertAuthority(certAuthorityName, opts) {
      return this.getClientCertAuthorityWithHttpInfo(certAuthorityName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get an OCSP Responder Trusted Common Name object.
     * Get an OCSP Responder Trusted Common Name object.  When an OCSP override URL is configured, the OCSP responder will be required to sign the OCSP responses with certificates issued to these Trusted Common Names. A maximum of 8 common names can be configured as valid response signers.   Attribute|Identifying|Deprecated :---|:---:|:---: certAuthorityName|x| ocspTlsTrustedCommonName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.19.
     * @param {String} certAuthorityName The name of the Certificate Authority.
     * @param {String} ocspTlsTrustedCommonName The expected Trusted Common Name of the OCSP responder remote certificate.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ClientCertAuthorityOcspTlsTrustedCommonNameResponseModel} and HTTP response
     */
    getClientCertAuthorityOcspTlsTrustedCommonNameWithHttpInfo(certAuthorityName, ocspTlsTrustedCommonName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'certAuthorityName' is set
      if (certAuthorityName === undefined || certAuthorityName === null) {
        throw new Error("Missing the required parameter 'certAuthorityName' when calling getClientCertAuthorityOcspTlsTrustedCommonName");
      }
      // verify the required parameter 'ocspTlsTrustedCommonName' is set
      if (ocspTlsTrustedCommonName === undefined || ocspTlsTrustedCommonName === null) {
        throw new Error("Missing the required parameter 'ocspTlsTrustedCommonName' when calling getClientCertAuthorityOcspTlsTrustedCommonName");
      }

      let pathParams = {
        'certAuthorityName': certAuthorityName,'ocspTlsTrustedCommonName': ocspTlsTrustedCommonName
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
      let returnType = ClientCertAuthorityOcspTlsTrustedCommonNameResponseModel;

      return this.apiClient.callApi(
        '/clientCertAuthorities/{certAuthorityName}/ocspTlsTrustedCommonNames/{ocspTlsTrustedCommonName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get an OCSP Responder Trusted Common Name object.
     * Get an OCSP Responder Trusted Common Name object.  When an OCSP override URL is configured, the OCSP responder will be required to sign the OCSP responses with certificates issued to these Trusted Common Names. A maximum of 8 common names can be configured as valid response signers.   Attribute|Identifying|Deprecated :---|:---:|:---: certAuthorityName|x| ocspTlsTrustedCommonName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.19.
     * @param {<&vendorExtensions.x-jsdoc-type>} certAuthorityName The name of the Certificate Authority.
     * @param {<&vendorExtensions.x-jsdoc-type>} ocspTlsTrustedCommonName The expected Trusted Common Name of the OCSP responder remote certificate.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ClientCertAuthorityOcspTlsTrustedCommonNameResponseModel}
     */
    getClientCertAuthorityOcspTlsTrustedCommonName(certAuthorityName, ocspTlsTrustedCommonName, opts) {
      return this.getClientCertAuthorityOcspTlsTrustedCommonNameWithHttpInfo(certAuthorityName, ocspTlsTrustedCommonName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of OCSP Responder Trusted Common Name objects.
     * Get a list of OCSP Responder Trusted Common Name objects.  When an OCSP override URL is configured, the OCSP responder will be required to sign the OCSP responses with certificates issued to these Trusted Common Names. A maximum of 8 common names can be configured as valid response signers.   Attribute|Identifying|Deprecated :---|:---:|:---: certAuthorityName|x| ocspTlsTrustedCommonName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.19.
     * @param {String} certAuthorityName The name of the Certificate Authority.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ClientCertAuthorityOcspTlsTrustedCommonNamesResponseModel} and HTTP response
     */
    getClientCertAuthorityOcspTlsTrustedCommonNamesWithHttpInfo(certAuthorityName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'certAuthorityName' is set
      if (certAuthorityName === undefined || certAuthorityName === null) {
        throw new Error("Missing the required parameter 'certAuthorityName' when calling getClientCertAuthorityOcspTlsTrustedCommonNames");
      }

      let pathParams = {
        'certAuthorityName': certAuthorityName
      };
      let queryParams = {
        'where': this.apiClient.buildCollectionParam(opts['where'], 'csv'),'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ClientCertAuthorityOcspTlsTrustedCommonNamesResponseModel;

      return this.apiClient.callApi(
        '/clientCertAuthorities/{certAuthorityName}/ocspTlsTrustedCommonNames', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of OCSP Responder Trusted Common Name objects.
     * Get a list of OCSP Responder Trusted Common Name objects.  When an OCSP override URL is configured, the OCSP responder will be required to sign the OCSP responses with certificates issued to these Trusted Common Names. A maximum of 8 common names can be configured as valid response signers.   Attribute|Identifying|Deprecated :---|:---:|:---: certAuthorityName|x| ocspTlsTrustedCommonName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.19.
     * @param {<&vendorExtensions.x-jsdoc-type>} certAuthorityName The name of the Certificate Authority.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ClientCertAuthorityOcspTlsTrustedCommonNamesResponseModel}
     */
    getClientCertAuthorityOcspTlsTrustedCommonNames(certAuthorityName, opts) {
      return this.getClientCertAuthorityOcspTlsTrustedCommonNamesWithHttpInfo(certAuthorityName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}