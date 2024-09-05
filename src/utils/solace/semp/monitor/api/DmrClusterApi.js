import {ApiClient} from "../ApiClient";
import {DmrClusterCertMatchingRuleAttributeFilterResponseModel} from '../model/DmrClusterCertMatchingRuleAttributeFilterResponseModel';
import {DmrClusterCertMatchingRuleAttributeFiltersResponseModel} from '../model/DmrClusterCertMatchingRuleAttributeFiltersResponseModel';
import {DmrClusterCertMatchingRuleConditionResponseModel} from '../model/DmrClusterCertMatchingRuleConditionResponseModel';
import {DmrClusterCertMatchingRuleConditionsResponseModel} from '../model/DmrClusterCertMatchingRuleConditionsResponseModel';
import {DmrClusterCertMatchingRuleResponseModel} from '../model/DmrClusterCertMatchingRuleResponseModel';
import {DmrClusterCertMatchingRulesResponseModel} from '../model/DmrClusterCertMatchingRulesResponseModel';
import {DmrClusterLinkAttributeResponseModel} from '../model/DmrClusterLinkAttributeResponseModel';
import {DmrClusterLinkAttributesResponseModel} from '../model/DmrClusterLinkAttributesResponseModel';
import {DmrClusterLinkChannelResponseModel} from '../model/DmrClusterLinkChannelResponseModel';
import {DmrClusterLinkChannelsResponseModel} from '../model/DmrClusterLinkChannelsResponseModel';
import {DmrClusterLinkRemoteAddressResponseModel} from '../model/DmrClusterLinkRemoteAddressResponseModel';
import {DmrClusterLinkRemoteAddressesResponseModel} from '../model/DmrClusterLinkRemoteAddressesResponseModel';
import {DmrClusterLinkResponseModel} from '../model/DmrClusterLinkResponseModel';
import {DmrClusterLinkTlsTrustedCommonNameResponseModel} from '../model/DmrClusterLinkTlsTrustedCommonNameResponseModel';
import {DmrClusterLinkTlsTrustedCommonNamesResponseModel} from '../model/DmrClusterLinkTlsTrustedCommonNamesResponseModel';
import {DmrClusterLinksResponseModel} from '../model/DmrClusterLinksResponseModel';
import {DmrClusterResponseModel} from '../model/DmrClusterResponseModel';
import {DmrClusterTopologyIssueResponseModel} from '../model/DmrClusterTopologyIssueResponseModel';
import {DmrClusterTopologyIssuesResponseModel} from '../model/DmrClusterTopologyIssuesResponseModel';
import {DmrClustersResponseModel} from '../model/DmrClustersResponseModel';
import {SempMetaOnlyResponseModel} from '../model/SempMetaOnlyResponseModel';

/**
* DmrCluster service.
* @module api/DmrClusterApi
* @version 2.36
*/
export class DmrClusterApi {

    /**
    * Constructs a new DmrClusterApi. 
    * @alias module:api/DmrClusterApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get a Cluster object.
     * Get a Cluster object.  A Cluster is a provisioned object on a message broker that contains global DMR configuration parameters.   Attribute|Identifying|Deprecated :---|:---:|:---: dmrClusterName|x| tlsServerCertEnforceTrustedCommonNameEnabled||x    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterResponseModel} and HTTP response
     */
    getDmrClusterWithHttpInfo(dmrClusterName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling getDmrCluster");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName
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
      let returnType = DmrClusterResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Cluster object.
     * Get a Cluster object.  A Cluster is a provisioned object on a message broker that contains global DMR configuration parameters.   Attribute|Identifying|Deprecated :---|:---:|:---: dmrClusterName|x| tlsServerCertEnforceTrustedCommonNameEnabled||x    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterResponseModel}
     */
    getDmrCluster(dmrClusterName, opts) {
      return this.getDmrClusterWithHttpInfo(dmrClusterName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Certificate Matching Rule object.
     * Get a Certificate Matching Rule object.  A Cert Matching Rule is a collection of conditions and attribute filters that all have to be satisfied for certificate to be acceptable as authentication for a given link.   Attribute|Identifying|Deprecated :---|:---:|:---: dmrClusterName|x| ruleName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} ruleName The name of the rule.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterCertMatchingRuleResponseModel} and HTTP response
     */
    getDmrClusterCertMatchingRuleWithHttpInfo(dmrClusterName, ruleName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling getDmrClusterCertMatchingRule");
      }
      // verify the required parameter 'ruleName' is set
      if (ruleName === undefined || ruleName === null) {
        throw new Error("Missing the required parameter 'ruleName' when calling getDmrClusterCertMatchingRule");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'ruleName': ruleName
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
      let returnType = DmrClusterCertMatchingRuleResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/certMatchingRules/{ruleName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Certificate Matching Rule object.
     * Get a Certificate Matching Rule object.  A Cert Matching Rule is a collection of conditions and attribute filters that all have to be satisfied for certificate to be acceptable as authentication for a given link.   Attribute|Identifying|Deprecated :---|:---:|:---: dmrClusterName|x| ruleName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} ruleName The name of the rule.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterCertMatchingRuleResponseModel}
     */
    getDmrClusterCertMatchingRule(dmrClusterName, ruleName, opts) {
      return this.getDmrClusterCertMatchingRuleWithHttpInfo(dmrClusterName, ruleName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Certificate Matching Rule Attribute Filter object.
     * Get a Certificate Matching Rule Attribute Filter object.  A Cert Matching Rule Attribute Filter compares a link attribute to a string.   Attribute|Identifying|Deprecated :---|:---:|:---: dmrClusterName|x| filterName|x| ruleName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} ruleName The name of the rule.
     * @param {String} filterName The name of the filter.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterCertMatchingRuleAttributeFilterResponseModel} and HTTP response
     */
    getDmrClusterCertMatchingRuleAttributeFilterWithHttpInfo(dmrClusterName, ruleName, filterName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling getDmrClusterCertMatchingRuleAttributeFilter");
      }
      // verify the required parameter 'ruleName' is set
      if (ruleName === undefined || ruleName === null) {
        throw new Error("Missing the required parameter 'ruleName' when calling getDmrClusterCertMatchingRuleAttributeFilter");
      }
      // verify the required parameter 'filterName' is set
      if (filterName === undefined || filterName === null) {
        throw new Error("Missing the required parameter 'filterName' when calling getDmrClusterCertMatchingRuleAttributeFilter");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'ruleName': ruleName,'filterName': filterName
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
      let returnType = DmrClusterCertMatchingRuleAttributeFilterResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/certMatchingRules/{ruleName}/attributeFilters/{filterName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Certificate Matching Rule Attribute Filter object.
     * Get a Certificate Matching Rule Attribute Filter object.  A Cert Matching Rule Attribute Filter compares a link attribute to a string.   Attribute|Identifying|Deprecated :---|:---:|:---: dmrClusterName|x| filterName|x| ruleName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} ruleName The name of the rule.
     * @param {<&vendorExtensions.x-jsdoc-type>} filterName The name of the filter.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterCertMatchingRuleAttributeFilterResponseModel}
     */
    getDmrClusterCertMatchingRuleAttributeFilter(dmrClusterName, ruleName, filterName, opts) {
      return this.getDmrClusterCertMatchingRuleAttributeFilterWithHttpInfo(dmrClusterName, ruleName, filterName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Certificate Matching Rule Attribute Filter objects.
     * Get a list of Certificate Matching Rule Attribute Filter objects.  A Cert Matching Rule Attribute Filter compares a link attribute to a string.   Attribute|Identifying|Deprecated :---|:---:|:---: dmrClusterName|x| filterName|x| ruleName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.28.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} ruleName The name of the rule.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterCertMatchingRuleAttributeFiltersResponseModel} and HTTP response
     */
    getDmrClusterCertMatchingRuleAttributeFiltersWithHttpInfo(dmrClusterName, ruleName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling getDmrClusterCertMatchingRuleAttributeFilters");
      }
      // verify the required parameter 'ruleName' is set
      if (ruleName === undefined || ruleName === null) {
        throw new Error("Missing the required parameter 'ruleName' when calling getDmrClusterCertMatchingRuleAttributeFilters");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'ruleName': ruleName
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
      let returnType = DmrClusterCertMatchingRuleAttributeFiltersResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/certMatchingRules/{ruleName}/attributeFilters', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Certificate Matching Rule Attribute Filter objects.
     * Get a list of Certificate Matching Rule Attribute Filter objects.  A Cert Matching Rule Attribute Filter compares a link attribute to a string.   Attribute|Identifying|Deprecated :---|:---:|:---: dmrClusterName|x| filterName|x| ruleName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.28.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} ruleName The name of the rule.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterCertMatchingRuleAttributeFiltersResponseModel}
     */
    getDmrClusterCertMatchingRuleAttributeFilters(dmrClusterName, ruleName, opts) {
      return this.getDmrClusterCertMatchingRuleAttributeFiltersWithHttpInfo(dmrClusterName, ruleName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Certificate Matching Rule Condition object.
     * Get a Certificate Matching Rule Condition object.  A Cert Matching Rule Condition compares data extracted from a certificate to a link attribute or an expression.   Attribute|Identifying|Deprecated :---|:---:|:---: dmrClusterName|x| ruleName|x| source|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} ruleName The name of the rule.
     * @param {String} source Certificate field to be compared with the Attribute.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterCertMatchingRuleConditionResponseModel} and HTTP response
     */
    getDmrClusterCertMatchingRuleConditionWithHttpInfo(dmrClusterName, ruleName, source, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling getDmrClusterCertMatchingRuleCondition");
      }
      // verify the required parameter 'ruleName' is set
      if (ruleName === undefined || ruleName === null) {
        throw new Error("Missing the required parameter 'ruleName' when calling getDmrClusterCertMatchingRuleCondition");
      }
      // verify the required parameter 'source' is set
      if (source === undefined || source === null) {
        throw new Error("Missing the required parameter 'source' when calling getDmrClusterCertMatchingRuleCondition");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'ruleName': ruleName,'source': source
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
      let returnType = DmrClusterCertMatchingRuleConditionResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/certMatchingRules/{ruleName}/conditions/{source}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Certificate Matching Rule Condition object.
     * Get a Certificate Matching Rule Condition object.  A Cert Matching Rule Condition compares data extracted from a certificate to a link attribute or an expression.   Attribute|Identifying|Deprecated :---|:---:|:---: dmrClusterName|x| ruleName|x| source|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} ruleName The name of the rule.
     * @param {<&vendorExtensions.x-jsdoc-type>} source Certificate field to be compared with the Attribute.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterCertMatchingRuleConditionResponseModel}
     */
    getDmrClusterCertMatchingRuleCondition(dmrClusterName, ruleName, source, opts) {
      return this.getDmrClusterCertMatchingRuleConditionWithHttpInfo(dmrClusterName, ruleName, source, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Certificate Matching Rule Condition objects.
     * Get a list of Certificate Matching Rule Condition objects.  A Cert Matching Rule Condition compares data extracted from a certificate to a link attribute or an expression.   Attribute|Identifying|Deprecated :---|:---:|:---: dmrClusterName|x| ruleName|x| source|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.28.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} ruleName The name of the rule.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterCertMatchingRuleConditionsResponseModel} and HTTP response
     */
    getDmrClusterCertMatchingRuleConditionsWithHttpInfo(dmrClusterName, ruleName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling getDmrClusterCertMatchingRuleConditions");
      }
      // verify the required parameter 'ruleName' is set
      if (ruleName === undefined || ruleName === null) {
        throw new Error("Missing the required parameter 'ruleName' when calling getDmrClusterCertMatchingRuleConditions");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'ruleName': ruleName
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
      let returnType = DmrClusterCertMatchingRuleConditionsResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/certMatchingRules/{ruleName}/conditions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Certificate Matching Rule Condition objects.
     * Get a list of Certificate Matching Rule Condition objects.  A Cert Matching Rule Condition compares data extracted from a certificate to a link attribute or an expression.   Attribute|Identifying|Deprecated :---|:---:|:---: dmrClusterName|x| ruleName|x| source|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.28.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} ruleName The name of the rule.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterCertMatchingRuleConditionsResponseModel}
     */
    getDmrClusterCertMatchingRuleConditions(dmrClusterName, ruleName, opts) {
      return this.getDmrClusterCertMatchingRuleConditionsWithHttpInfo(dmrClusterName, ruleName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Certificate Matching Rule objects.
     * Get a list of Certificate Matching Rule objects.  A Cert Matching Rule is a collection of conditions and attribute filters that all have to be satisfied for certificate to be acceptable as authentication for a given link.   Attribute|Identifying|Deprecated :---|:---:|:---: dmrClusterName|x| ruleName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.28.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterCertMatchingRulesResponseModel} and HTTP response
     */
    getDmrClusterCertMatchingRulesWithHttpInfo(dmrClusterName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling getDmrClusterCertMatchingRules");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName
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
      let returnType = DmrClusterCertMatchingRulesResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/certMatchingRules', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Certificate Matching Rule objects.
     * Get a list of Certificate Matching Rule objects.  A Cert Matching Rule is a collection of conditions and attribute filters that all have to be satisfied for certificate to be acceptable as authentication for a given link.   Attribute|Identifying|Deprecated :---|:---:|:---: dmrClusterName|x| ruleName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.28.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterCertMatchingRulesResponseModel}
     */
    getDmrClusterCertMatchingRules(dmrClusterName, opts) {
      return this.getDmrClusterCertMatchingRulesWithHttpInfo(dmrClusterName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Link object.
     * Get a Link object.  A Link connects nodes (either within a Cluster or between two different Clusters) and allows them to exchange topology information, subscriptions and data.   Attribute|Identifying|Deprecated :---|:---:|:---: dmrClusterName|x| remoteNodeName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} remoteNodeName The name of the node at the remote end of the Link.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterLinkResponseModel} and HTTP response
     */
    getDmrClusterLinkWithHttpInfo(dmrClusterName, remoteNodeName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling getDmrClusterLink");
      }
      // verify the required parameter 'remoteNodeName' is set
      if (remoteNodeName === undefined || remoteNodeName === null) {
        throw new Error("Missing the required parameter 'remoteNodeName' when calling getDmrClusterLink");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'remoteNodeName': remoteNodeName
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
      let returnType = DmrClusterLinkResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/links/{remoteNodeName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Link object.
     * Get a Link object.  A Link connects nodes (either within a Cluster or between two different Clusters) and allows them to exchange topology information, subscriptions and data.   Attribute|Identifying|Deprecated :---|:---:|:---: dmrClusterName|x| remoteNodeName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} remoteNodeName The name of the node at the remote end of the Link.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterLinkResponseModel}
     */
    getDmrClusterLink(dmrClusterName, remoteNodeName, opts) {
      return this.getDmrClusterLinkWithHttpInfo(dmrClusterName, remoteNodeName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Link Attribute object.
     * Get a Link Attribute object.  A Link Attribute is a key+value pair that can be used to locate a DMR Cluster Link, for example when using client certificate mapping.   Attribute|Identifying|Deprecated :---|:---:|:---: attributeName|x| attributeValue|x| dmrClusterName|x| remoteNodeName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} remoteNodeName The name of the node at the remote end of the Link.
     * @param {String} attributeName The name of the Attribute.
     * @param {String} attributeValue The value of the Attribute.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterLinkAttributeResponseModel} and HTTP response
     */
    getDmrClusterLinkAttributeWithHttpInfo(dmrClusterName, remoteNodeName, attributeName, attributeValue, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling getDmrClusterLinkAttribute");
      }
      // verify the required parameter 'remoteNodeName' is set
      if (remoteNodeName === undefined || remoteNodeName === null) {
        throw new Error("Missing the required parameter 'remoteNodeName' when calling getDmrClusterLinkAttribute");
      }
      // verify the required parameter 'attributeName' is set
      if (attributeName === undefined || attributeName === null) {
        throw new Error("Missing the required parameter 'attributeName' when calling getDmrClusterLinkAttribute");
      }
      // verify the required parameter 'attributeValue' is set
      if (attributeValue === undefined || attributeValue === null) {
        throw new Error("Missing the required parameter 'attributeValue' when calling getDmrClusterLinkAttribute");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'remoteNodeName': remoteNodeName,'attributeName': attributeName,'attributeValue': attributeValue
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
      let returnType = DmrClusterLinkAttributeResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/links/{remoteNodeName}/attributes/{attributeName},{attributeValue}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Link Attribute object.
     * Get a Link Attribute object.  A Link Attribute is a key+value pair that can be used to locate a DMR Cluster Link, for example when using client certificate mapping.   Attribute|Identifying|Deprecated :---|:---:|:---: attributeName|x| attributeValue|x| dmrClusterName|x| remoteNodeName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} remoteNodeName The name of the node at the remote end of the Link.
     * @param {<&vendorExtensions.x-jsdoc-type>} attributeName The name of the Attribute.
     * @param {<&vendorExtensions.x-jsdoc-type>} attributeValue The value of the Attribute.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterLinkAttributeResponseModel}
     */
    getDmrClusterLinkAttribute(dmrClusterName, remoteNodeName, attributeName, attributeValue, opts) {
      return this.getDmrClusterLinkAttributeWithHttpInfo(dmrClusterName, remoteNodeName, attributeName, attributeValue, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Link Attribute objects.
     * Get a list of Link Attribute objects.  A Link Attribute is a key+value pair that can be used to locate a DMR Cluster Link, for example when using client certificate mapping.   Attribute|Identifying|Deprecated :---|:---:|:---: attributeName|x| attributeValue|x| dmrClusterName|x| remoteNodeName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.28.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} remoteNodeName The name of the node at the remote end of the Link.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterLinkAttributesResponseModel} and HTTP response
     */
    getDmrClusterLinkAttributesWithHttpInfo(dmrClusterName, remoteNodeName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling getDmrClusterLinkAttributes");
      }
      // verify the required parameter 'remoteNodeName' is set
      if (remoteNodeName === undefined || remoteNodeName === null) {
        throw new Error("Missing the required parameter 'remoteNodeName' when calling getDmrClusterLinkAttributes");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'remoteNodeName': remoteNodeName
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
      let returnType = DmrClusterLinkAttributesResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/links/{remoteNodeName}/attributes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Link Attribute objects.
     * Get a list of Link Attribute objects.  A Link Attribute is a key+value pair that can be used to locate a DMR Cluster Link, for example when using client certificate mapping.   Attribute|Identifying|Deprecated :---|:---:|:---: attributeName|x| attributeValue|x| dmrClusterName|x| remoteNodeName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.28.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} remoteNodeName The name of the node at the remote end of the Link.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterLinkAttributesResponseModel}
     */
    getDmrClusterLinkAttributes(dmrClusterName, remoteNodeName, opts) {
      return this.getDmrClusterLinkAttributesWithHttpInfo(dmrClusterName, remoteNodeName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Cluster Link Channels object.
     * Get a Cluster Link Channels object.  A Channel is a connection between this broker and a remote node in the Cluster.   Attribute|Identifying|Deprecated :---|:---:|:---: dmrClusterName|x| msgVpnName|x| remoteNodeName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} remoteNodeName The name of the node at the remote end of the Link.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterLinkChannelResponseModel} and HTTP response
     */
    getDmrClusterLinkChannelWithHttpInfo(dmrClusterName, remoteNodeName, msgVpnName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling getDmrClusterLinkChannel");
      }
      // verify the required parameter 'remoteNodeName' is set
      if (remoteNodeName === undefined || remoteNodeName === null) {
        throw new Error("Missing the required parameter 'remoteNodeName' when calling getDmrClusterLinkChannel");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getDmrClusterLinkChannel");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'remoteNodeName': remoteNodeName,'msgVpnName': msgVpnName
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
      let returnType = DmrClusterLinkChannelResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/links/{remoteNodeName}/channels/{msgVpnName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Cluster Link Channels object.
     * Get a Cluster Link Channels object.  A Channel is a connection between this broker and a remote node in the Cluster.   Attribute|Identifying|Deprecated :---|:---:|:---: dmrClusterName|x| msgVpnName|x| remoteNodeName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} remoteNodeName The name of the node at the remote end of the Link.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterLinkChannelResponseModel}
     */
    getDmrClusterLinkChannel(dmrClusterName, remoteNodeName, msgVpnName, opts) {
      return this.getDmrClusterLinkChannelWithHttpInfo(dmrClusterName, remoteNodeName, msgVpnName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Cluster Link Channels objects.
     * Get a list of Cluster Link Channels objects.  A Channel is a connection between this broker and a remote node in the Cluster.   Attribute|Identifying|Deprecated :---|:---:|:---: dmrClusterName|x| msgVpnName|x| remoteNodeName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} remoteNodeName The name of the node at the remote end of the Link.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterLinkChannelsResponseModel} and HTTP response
     */
    getDmrClusterLinkChannelsWithHttpInfo(dmrClusterName, remoteNodeName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling getDmrClusterLinkChannels");
      }
      // verify the required parameter 'remoteNodeName' is set
      if (remoteNodeName === undefined || remoteNodeName === null) {
        throw new Error("Missing the required parameter 'remoteNodeName' when calling getDmrClusterLinkChannels");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'remoteNodeName': remoteNodeName
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
      let returnType = DmrClusterLinkChannelsResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/links/{remoteNodeName}/channels', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Cluster Link Channels objects.
     * Get a list of Cluster Link Channels objects.  A Channel is a connection between this broker and a remote node in the Cluster.   Attribute|Identifying|Deprecated :---|:---:|:---: dmrClusterName|x| msgVpnName|x| remoteNodeName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} remoteNodeName The name of the node at the remote end of the Link.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterLinkChannelsResponseModel}
     */
    getDmrClusterLinkChannels(dmrClusterName, remoteNodeName, opts) {
      return this.getDmrClusterLinkChannelsWithHttpInfo(dmrClusterName, remoteNodeName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Remote Address object.
     * Get a Remote Address object.  Each Remote Address, consisting of a FQDN or IP address and optional port, is used to connect to the remote node for this Link. Up to 4 addresses may be provided for each Link, and will be tried on a round-robin basis.   Attribute|Identifying|Deprecated :---|:---:|:---: dmrClusterName|x| remoteAddress|x| remoteNodeName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} remoteNodeName The name of the node at the remote end of the Link.
     * @param {String} remoteAddress The FQDN or IP address (and optional port) of the remote node. If a port is not provided, it will vary based on the transport encoding: 55555 (plain-text), 55443 (encrypted), or 55003 (compressed).
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterLinkRemoteAddressResponseModel} and HTTP response
     */
    getDmrClusterLinkRemoteAddressWithHttpInfo(dmrClusterName, remoteNodeName, remoteAddress, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling getDmrClusterLinkRemoteAddress");
      }
      // verify the required parameter 'remoteNodeName' is set
      if (remoteNodeName === undefined || remoteNodeName === null) {
        throw new Error("Missing the required parameter 'remoteNodeName' when calling getDmrClusterLinkRemoteAddress");
      }
      // verify the required parameter 'remoteAddress' is set
      if (remoteAddress === undefined || remoteAddress === null) {
        throw new Error("Missing the required parameter 'remoteAddress' when calling getDmrClusterLinkRemoteAddress");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'remoteNodeName': remoteNodeName,'remoteAddress': remoteAddress
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
      let returnType = DmrClusterLinkRemoteAddressResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/links/{remoteNodeName}/remoteAddresses/{remoteAddress}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Remote Address object.
     * Get a Remote Address object.  Each Remote Address, consisting of a FQDN or IP address and optional port, is used to connect to the remote node for this Link. Up to 4 addresses may be provided for each Link, and will be tried on a round-robin basis.   Attribute|Identifying|Deprecated :---|:---:|:---: dmrClusterName|x| remoteAddress|x| remoteNodeName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} remoteNodeName The name of the node at the remote end of the Link.
     * @param {<&vendorExtensions.x-jsdoc-type>} remoteAddress The FQDN or IP address (and optional port) of the remote node. If a port is not provided, it will vary based on the transport encoding: 55555 (plain-text), 55443 (encrypted), or 55003 (compressed).
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterLinkRemoteAddressResponseModel}
     */
    getDmrClusterLinkRemoteAddress(dmrClusterName, remoteNodeName, remoteAddress, opts) {
      return this.getDmrClusterLinkRemoteAddressWithHttpInfo(dmrClusterName, remoteNodeName, remoteAddress, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Remote Address objects.
     * Get a list of Remote Address objects.  Each Remote Address, consisting of a FQDN or IP address and optional port, is used to connect to the remote node for this Link. Up to 4 addresses may be provided for each Link, and will be tried on a round-robin basis.   Attribute|Identifying|Deprecated :---|:---:|:---: dmrClusterName|x| remoteAddress|x| remoteNodeName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} remoteNodeName The name of the node at the remote end of the Link.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterLinkRemoteAddressesResponseModel} and HTTP response
     */
    getDmrClusterLinkRemoteAddressesWithHttpInfo(dmrClusterName, remoteNodeName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling getDmrClusterLinkRemoteAddresses");
      }
      // verify the required parameter 'remoteNodeName' is set
      if (remoteNodeName === undefined || remoteNodeName === null) {
        throw new Error("Missing the required parameter 'remoteNodeName' when calling getDmrClusterLinkRemoteAddresses");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'remoteNodeName': remoteNodeName
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
      let returnType = DmrClusterLinkRemoteAddressesResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/links/{remoteNodeName}/remoteAddresses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Remote Address objects.
     * Get a list of Remote Address objects.  Each Remote Address, consisting of a FQDN or IP address and optional port, is used to connect to the remote node for this Link. Up to 4 addresses may be provided for each Link, and will be tried on a round-robin basis.   Attribute|Identifying|Deprecated :---|:---:|:---: dmrClusterName|x| remoteAddress|x| remoteNodeName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} remoteNodeName The name of the node at the remote end of the Link.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterLinkRemoteAddressesResponseModel}
     */
    getDmrClusterLinkRemoteAddresses(dmrClusterName, remoteNodeName, opts) {
      return this.getDmrClusterLinkRemoteAddressesWithHttpInfo(dmrClusterName, remoteNodeName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Trusted Common Name object.
     * Get a Trusted Common Name object.  The Trusted Common Names for the Link are used by encrypted transports to verify the name in the certificate presented by the remote node. They must include the common name of the remote node&#x27;s server certificate or client certificate, depending upon the initiator of the connection.   Attribute|Identifying|Deprecated :---|:---:|:---: dmrClusterName|x|x remoteNodeName|x|x tlsTrustedCommonName|x|x    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been deprecated since 2.18. Common Name validation has been replaced by Server Certificate Name validation.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} remoteNodeName The name of the node at the remote end of the Link.
     * @param {String} tlsTrustedCommonName The expected trusted common name of the remote certificate.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterLinkTlsTrustedCommonNameResponseModel} and HTTP response
     */
    getDmrClusterLinkTlsTrustedCommonNameWithHttpInfo(dmrClusterName, remoteNodeName, tlsTrustedCommonName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling getDmrClusterLinkTlsTrustedCommonName");
      }
      // verify the required parameter 'remoteNodeName' is set
      if (remoteNodeName === undefined || remoteNodeName === null) {
        throw new Error("Missing the required parameter 'remoteNodeName' when calling getDmrClusterLinkTlsTrustedCommonName");
      }
      // verify the required parameter 'tlsTrustedCommonName' is set
      if (tlsTrustedCommonName === undefined || tlsTrustedCommonName === null) {
        throw new Error("Missing the required parameter 'tlsTrustedCommonName' when calling getDmrClusterLinkTlsTrustedCommonName");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'remoteNodeName': remoteNodeName,'tlsTrustedCommonName': tlsTrustedCommonName
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
      let returnType = DmrClusterLinkTlsTrustedCommonNameResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/links/{remoteNodeName}/tlsTrustedCommonNames/{tlsTrustedCommonName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Trusted Common Name object.
     * Get a Trusted Common Name object.  The Trusted Common Names for the Link are used by encrypted transports to verify the name in the certificate presented by the remote node. They must include the common name of the remote node&#x27;s server certificate or client certificate, depending upon the initiator of the connection.   Attribute|Identifying|Deprecated :---|:---:|:---: dmrClusterName|x|x remoteNodeName|x|x tlsTrustedCommonName|x|x    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been deprecated since 2.18. Common Name validation has been replaced by Server Certificate Name validation.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} remoteNodeName The name of the node at the remote end of the Link.
     * @param {<&vendorExtensions.x-jsdoc-type>} tlsTrustedCommonName The expected trusted common name of the remote certificate.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterLinkTlsTrustedCommonNameResponseModel}
     */
    getDmrClusterLinkTlsTrustedCommonName(dmrClusterName, remoteNodeName, tlsTrustedCommonName, opts) {
      return this.getDmrClusterLinkTlsTrustedCommonNameWithHttpInfo(dmrClusterName, remoteNodeName, tlsTrustedCommonName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Trusted Common Name objects.
     * Get a list of Trusted Common Name objects.  The Trusted Common Names for the Link are used by encrypted transports to verify the name in the certificate presented by the remote node. They must include the common name of the remote node&#x27;s server certificate or client certificate, depending upon the initiator of the connection.   Attribute|Identifying|Deprecated :---|:---:|:---: dmrClusterName|x|x remoteNodeName|x|x tlsTrustedCommonName|x|x    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been deprecated since 2.18. Common Name validation has been replaced by Server Certificate Name validation.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} remoteNodeName The name of the node at the remote end of the Link.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterLinkTlsTrustedCommonNamesResponseModel} and HTTP response
     */
    getDmrClusterLinkTlsTrustedCommonNamesWithHttpInfo(dmrClusterName, remoteNodeName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling getDmrClusterLinkTlsTrustedCommonNames");
      }
      // verify the required parameter 'remoteNodeName' is set
      if (remoteNodeName === undefined || remoteNodeName === null) {
        throw new Error("Missing the required parameter 'remoteNodeName' when calling getDmrClusterLinkTlsTrustedCommonNames");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'remoteNodeName': remoteNodeName
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
      let returnType = DmrClusterLinkTlsTrustedCommonNamesResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/links/{remoteNodeName}/tlsTrustedCommonNames', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Trusted Common Name objects.
     * Get a list of Trusted Common Name objects.  The Trusted Common Names for the Link are used by encrypted transports to verify the name in the certificate presented by the remote node. They must include the common name of the remote node&#x27;s server certificate or client certificate, depending upon the initiator of the connection.   Attribute|Identifying|Deprecated :---|:---:|:---: dmrClusterName|x|x remoteNodeName|x|x tlsTrustedCommonName|x|x    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been deprecated since 2.18. Common Name validation has been replaced by Server Certificate Name validation.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} remoteNodeName The name of the node at the remote end of the Link.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterLinkTlsTrustedCommonNamesResponseModel}
     */
    getDmrClusterLinkTlsTrustedCommonNames(dmrClusterName, remoteNodeName, opts) {
      return this.getDmrClusterLinkTlsTrustedCommonNamesWithHttpInfo(dmrClusterName, remoteNodeName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Link objects.
     * Get a list of Link objects.  A Link connects nodes (either within a Cluster or between two different Clusters) and allows them to exchange topology information, subscriptions and data.   Attribute|Identifying|Deprecated :---|:---:|:---: dmrClusterName|x| remoteNodeName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterLinksResponseModel} and HTTP response
     */
    getDmrClusterLinksWithHttpInfo(dmrClusterName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling getDmrClusterLinks");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName
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
      let returnType = DmrClusterLinksResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/links', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Link objects.
     * Get a list of Link objects.  A Link connects nodes (either within a Cluster or between two different Clusters) and allows them to exchange topology information, subscriptions and data.   Attribute|Identifying|Deprecated :---|:---:|:---: dmrClusterName|x| remoteNodeName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterLinksResponseModel}
     */
    getDmrClusterLinks(dmrClusterName, opts) {
      return this.getDmrClusterLinksWithHttpInfo(dmrClusterName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Cluster Topology Issue object.
     * Get a Cluster Topology Issue object.  A Cluster Topology Issue indicates incorrect or inconsistent configuration within the DMR network. Such issues will cause messages to be undelivered or lost.   Attribute|Identifying|Deprecated :---|:---:|:---: dmrClusterName|x| topologyIssue|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} topologyIssue The topology issue discovered in the Cluster. A topology issue indicates incorrect or inconsistent configuration within the DMR network. Such issues will cause messages to be undelivered or lost.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterTopologyIssueResponseModel} and HTTP response
     */
    getDmrClusterTopologyIssueWithHttpInfo(dmrClusterName, topologyIssue, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling getDmrClusterTopologyIssue");
      }
      // verify the required parameter 'topologyIssue' is set
      if (topologyIssue === undefined || topologyIssue === null) {
        throw new Error("Missing the required parameter 'topologyIssue' when calling getDmrClusterTopologyIssue");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'topologyIssue': topologyIssue
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
      let returnType = DmrClusterTopologyIssueResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/topologyIssues/{topologyIssue}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Cluster Topology Issue object.
     * Get a Cluster Topology Issue object.  A Cluster Topology Issue indicates incorrect or inconsistent configuration within the DMR network. Such issues will cause messages to be undelivered or lost.   Attribute|Identifying|Deprecated :---|:---:|:---: dmrClusterName|x| topologyIssue|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} topologyIssue The topology issue discovered in the Cluster. A topology issue indicates incorrect or inconsistent configuration within the DMR network. Such issues will cause messages to be undelivered or lost.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterTopologyIssueResponseModel}
     */
    getDmrClusterTopologyIssue(dmrClusterName, topologyIssue, opts) {
      return this.getDmrClusterTopologyIssueWithHttpInfo(dmrClusterName, topologyIssue, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Cluster Topology Issue objects.
     * Get a list of Cluster Topology Issue objects.  A Cluster Topology Issue indicates incorrect or inconsistent configuration within the DMR network. Such issues will cause messages to be undelivered or lost.   Attribute|Identifying|Deprecated :---|:---:|:---: dmrClusterName|x| topologyIssue|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterTopologyIssuesResponseModel} and HTTP response
     */
    getDmrClusterTopologyIssuesWithHttpInfo(dmrClusterName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling getDmrClusterTopologyIssues");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName
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
      let returnType = DmrClusterTopologyIssuesResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/topologyIssues', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Cluster Topology Issue objects.
     * Get a list of Cluster Topology Issue objects.  A Cluster Topology Issue indicates incorrect or inconsistent configuration within the DMR network. Such issues will cause messages to be undelivered or lost.   Attribute|Identifying|Deprecated :---|:---:|:---: dmrClusterName|x| topologyIssue|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterTopologyIssuesResponseModel}
     */
    getDmrClusterTopologyIssues(dmrClusterName, opts) {
      return this.getDmrClusterTopologyIssuesWithHttpInfo(dmrClusterName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Cluster objects.
     * Get a list of Cluster objects.  A Cluster is a provisioned object on a message broker that contains global DMR configuration parameters.   Attribute|Identifying|Deprecated :---|:---:|:---: dmrClusterName|x| tlsServerCertEnforceTrustedCommonNameEnabled||x    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClustersResponseModel} and HTTP response
     */
    getDmrClustersWithHttpInfo(opts) {
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
      let returnType = DmrClustersResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Cluster objects.
     * Get a list of Cluster objects.  A Cluster is a provisioned object on a message broker that contains global DMR configuration parameters.   Attribute|Identifying|Deprecated :---|:---:|:---: dmrClusterName|x| tlsServerCertEnforceTrustedCommonNameEnabled||x    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClustersResponseModel}
     */
    getDmrClusters(opts) {
      return this.getDmrClustersWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}