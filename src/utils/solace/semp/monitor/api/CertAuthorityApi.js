import {ApiClient} from "../ApiClient";
import {CertAuthoritiesResponseModel} from '../model/CertAuthoritiesResponseModel';
import {CertAuthorityOcspTlsTrustedCommonNameResponseModel} from '../model/CertAuthorityOcspTlsTrustedCommonNameResponseModel';
import {CertAuthorityOcspTlsTrustedCommonNamesResponseModel} from '../model/CertAuthorityOcspTlsTrustedCommonNamesResponseModel';
import {CertAuthorityResponseModel} from '../model/CertAuthorityResponseModel';
import {SempMetaOnlyResponseModel} from '../model/SempMetaOnlyResponseModel';

/**
* CertAuthority service.
* @module api/CertAuthorityApi
* @version 2.36
*/
export class CertAuthorityApi {

    /**
    * Constructs a new CertAuthorityApi. 
    * @alias module:api/CertAuthorityApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get a list of Certificate Authority objects.
     * Get a list of Certificate Authority objects.  Clients can authenticate with the message broker over TLS by presenting a valid client certificate. The message broker authenticates the client certificate by constructing a full certificate chain (from the client certificate to intermediate CAs to a configured root CA). The intermediate CAs in this chain can be provided by the client, or configured in the message broker. The root CA must be configured on the message broker.   Attribute|Identifying|Deprecated :---|:---:|:---: certAuthorityName|x|x certContent||x crlDayList||x crlLastDownloadTime||x crlLastFailureReason||x crlLastFailureTime||x crlNextDownloadTime||x crlTimeList||x crlUp||x crlUrl||x ocspLastFailureReason||x ocspLastFailureTime||x ocspLastFailureUrl||x ocspNonResponderCertEnabled||x ocspOverrideUrl||x ocspTimeout||x revocationCheckEnabled||x    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been deprecated since 2.19. Replaced by clientCertAuthorities and domainCertAuthorities.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CertAuthoritiesResponseModel} and HTTP response
     */
    getCertAuthoritiesWithHttpInfo(opts) {
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
      let returnType = CertAuthoritiesResponseModel;

      return this.apiClient.callApi(
        '/certAuthorities', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Certificate Authority objects.
     * Get a list of Certificate Authority objects.  Clients can authenticate with the message broker over TLS by presenting a valid client certificate. The message broker authenticates the client certificate by constructing a full certificate chain (from the client certificate to intermediate CAs to a configured root CA). The intermediate CAs in this chain can be provided by the client, or configured in the message broker. The root CA must be configured on the message broker.   Attribute|Identifying|Deprecated :---|:---:|:---: certAuthorityName|x|x certContent||x crlDayList||x crlLastDownloadTime||x crlLastFailureReason||x crlLastFailureTime||x crlNextDownloadTime||x crlTimeList||x crlUp||x crlUrl||x ocspLastFailureReason||x ocspLastFailureTime||x ocspLastFailureUrl||x ocspNonResponderCertEnabled||x ocspOverrideUrl||x ocspTimeout||x revocationCheckEnabled||x    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been deprecated since 2.19. Replaced by clientCertAuthorities and domainCertAuthorities.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CertAuthoritiesResponseModel}
     */
    getCertAuthorities(opts) {
      return this.getCertAuthoritiesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Certificate Authority object.
     * Get a Certificate Authority object.  Clients can authenticate with the message broker over TLS by presenting a valid client certificate. The message broker authenticates the client certificate by constructing a full certificate chain (from the client certificate to intermediate CAs to a configured root CA). The intermediate CAs in this chain can be provided by the client, or configured in the message broker. The root CA must be configured on the message broker.   Attribute|Identifying|Deprecated :---|:---:|:---: certAuthorityName|x|x certContent||x crlDayList||x crlLastDownloadTime||x crlLastFailureReason||x crlLastFailureTime||x crlNextDownloadTime||x crlTimeList||x crlUp||x crlUrl||x ocspLastFailureReason||x ocspLastFailureTime||x ocspLastFailureUrl||x ocspNonResponderCertEnabled||x ocspOverrideUrl||x ocspTimeout||x revocationCheckEnabled||x    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been deprecated since 2.19. Replaced by clientCertAuthorities and domainCertAuthorities.
     * @param {String} certAuthorityName The name of the Certificate Authority.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CertAuthorityResponseModel} and HTTP response
     */
    getCertAuthorityWithHttpInfo(certAuthorityName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'certAuthorityName' is set
      if (certAuthorityName === undefined || certAuthorityName === null) {
        throw new Error("Missing the required parameter 'certAuthorityName' when calling getCertAuthority");
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
      let returnType = CertAuthorityResponseModel;

      return this.apiClient.callApi(
        '/certAuthorities/{certAuthorityName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Certificate Authority object.
     * Get a Certificate Authority object.  Clients can authenticate with the message broker over TLS by presenting a valid client certificate. The message broker authenticates the client certificate by constructing a full certificate chain (from the client certificate to intermediate CAs to a configured root CA). The intermediate CAs in this chain can be provided by the client, or configured in the message broker. The root CA must be configured on the message broker.   Attribute|Identifying|Deprecated :---|:---:|:---: certAuthorityName|x|x certContent||x crlDayList||x crlLastDownloadTime||x crlLastFailureReason||x crlLastFailureTime||x crlNextDownloadTime||x crlTimeList||x crlUp||x crlUrl||x ocspLastFailureReason||x ocspLastFailureTime||x ocspLastFailureUrl||x ocspNonResponderCertEnabled||x ocspOverrideUrl||x ocspTimeout||x revocationCheckEnabled||x    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been deprecated since 2.19. Replaced by clientCertAuthorities and domainCertAuthorities.
     * @param {<&vendorExtensions.x-jsdoc-type>} certAuthorityName The name of the Certificate Authority.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CertAuthorityResponseModel}
     */
    getCertAuthority(certAuthorityName, opts) {
      return this.getCertAuthorityWithHttpInfo(certAuthorityName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get an OCSP Responder Trusted Common Name object.
     * Get an OCSP Responder Trusted Common Name object.  When an OCSP override URL is configured, the OCSP responder will be required to sign the OCSP responses with certificates issued to these Trusted Common Names. A maximum of 8 common names can be configured as valid response signers.   Attribute|Identifying|Deprecated :---|:---:|:---: certAuthorityName|x|x ocspTlsTrustedCommonName|x|x    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been deprecated since 2.19. Replaced by clientCertAuthorities.
     * @param {String} certAuthorityName The name of the Certificate Authority.
     * @param {String} ocspTlsTrustedCommonName The expected Trusted Common Name of the OCSP responder remote certificate.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CertAuthorityOcspTlsTrustedCommonNameResponseModel} and HTTP response
     */
    getCertAuthorityOcspTlsTrustedCommonNameWithHttpInfo(certAuthorityName, ocspTlsTrustedCommonName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'certAuthorityName' is set
      if (certAuthorityName === undefined || certAuthorityName === null) {
        throw new Error("Missing the required parameter 'certAuthorityName' when calling getCertAuthorityOcspTlsTrustedCommonName");
      }
      // verify the required parameter 'ocspTlsTrustedCommonName' is set
      if (ocspTlsTrustedCommonName === undefined || ocspTlsTrustedCommonName === null) {
        throw new Error("Missing the required parameter 'ocspTlsTrustedCommonName' when calling getCertAuthorityOcspTlsTrustedCommonName");
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
      let returnType = CertAuthorityOcspTlsTrustedCommonNameResponseModel;

      return this.apiClient.callApi(
        '/certAuthorities/{certAuthorityName}/ocspTlsTrustedCommonNames/{ocspTlsTrustedCommonName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get an OCSP Responder Trusted Common Name object.
     * Get an OCSP Responder Trusted Common Name object.  When an OCSP override URL is configured, the OCSP responder will be required to sign the OCSP responses with certificates issued to these Trusted Common Names. A maximum of 8 common names can be configured as valid response signers.   Attribute|Identifying|Deprecated :---|:---:|:---: certAuthorityName|x|x ocspTlsTrustedCommonName|x|x    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been deprecated since 2.19. Replaced by clientCertAuthorities.
     * @param {<&vendorExtensions.x-jsdoc-type>} certAuthorityName The name of the Certificate Authority.
     * @param {<&vendorExtensions.x-jsdoc-type>} ocspTlsTrustedCommonName The expected Trusted Common Name of the OCSP responder remote certificate.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CertAuthorityOcspTlsTrustedCommonNameResponseModel}
     */
    getCertAuthorityOcspTlsTrustedCommonName(certAuthorityName, ocspTlsTrustedCommonName, opts) {
      return this.getCertAuthorityOcspTlsTrustedCommonNameWithHttpInfo(certAuthorityName, ocspTlsTrustedCommonName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of OCSP Responder Trusted Common Name objects.
     * Get a list of OCSP Responder Trusted Common Name objects.  When an OCSP override URL is configured, the OCSP responder will be required to sign the OCSP responses with certificates issued to these Trusted Common Names. A maximum of 8 common names can be configured as valid response signers.   Attribute|Identifying|Deprecated :---|:---:|:---: certAuthorityName|x|x ocspTlsTrustedCommonName|x|x    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been deprecated since 2.19. Replaced by clientCertAuthorities.
     * @param {String} certAuthorityName The name of the Certificate Authority.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CertAuthorityOcspTlsTrustedCommonNamesResponseModel} and HTTP response
     */
    getCertAuthorityOcspTlsTrustedCommonNamesWithHttpInfo(certAuthorityName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'certAuthorityName' is set
      if (certAuthorityName === undefined || certAuthorityName === null) {
        throw new Error("Missing the required parameter 'certAuthorityName' when calling getCertAuthorityOcspTlsTrustedCommonNames");
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
      let returnType = CertAuthorityOcspTlsTrustedCommonNamesResponseModel;

      return this.apiClient.callApi(
        '/certAuthorities/{certAuthorityName}/ocspTlsTrustedCommonNames', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of OCSP Responder Trusted Common Name objects.
     * Get a list of OCSP Responder Trusted Common Name objects.  When an OCSP override URL is configured, the OCSP responder will be required to sign the OCSP responses with certificates issued to these Trusted Common Names. A maximum of 8 common names can be configured as valid response signers.   Attribute|Identifying|Deprecated :---|:---:|:---: certAuthorityName|x|x ocspTlsTrustedCommonName|x|x    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been deprecated since 2.19. Replaced by clientCertAuthorities.
     * @param {<&vendorExtensions.x-jsdoc-type>} certAuthorityName The name of the Certificate Authority.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CertAuthorityOcspTlsTrustedCommonNamesResponseModel}
     */
    getCertAuthorityOcspTlsTrustedCommonNames(certAuthorityName, opts) {
      return this.getCertAuthorityOcspTlsTrustedCommonNamesWithHttpInfo(certAuthorityName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}