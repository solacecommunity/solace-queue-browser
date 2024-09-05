import {ApiClient} from "../ApiClient";
import {MsgVpnCertMatchingRuleAttributeFilterResponseModel} from '../model/MsgVpnCertMatchingRuleAttributeFilterResponseModel';
import {MsgVpnCertMatchingRuleAttributeFiltersResponseModel} from '../model/MsgVpnCertMatchingRuleAttributeFiltersResponseModel';
import {MsgVpnCertMatchingRuleConditionResponseModel} from '../model/MsgVpnCertMatchingRuleConditionResponseModel';
import {MsgVpnCertMatchingRuleConditionsResponseModel} from '../model/MsgVpnCertMatchingRuleConditionsResponseModel';
import {MsgVpnCertMatchingRuleResponseModel} from '../model/MsgVpnCertMatchingRuleResponseModel';
import {MsgVpnCertMatchingRulesResponseModel} from '../model/MsgVpnCertMatchingRulesResponseModel';
import {SempMetaOnlyResponseModel} from '../model/SempMetaOnlyResponseModel';

/**
* CertMatchingRule service.
* @module api/CertMatchingRuleApi
* @version 2.36
*/
export class CertMatchingRuleApi {

    /**
    * Constructs a new CertMatchingRuleApi. 
    * @alias module:api/CertMatchingRuleApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get a Certificate Matching Rule object.
     * Get a Certificate Matching Rule object.  A Cert Matching Rule is a collection of conditions and attribute filters that all have to be satisfied for certificate to be acceptable as authentication for a given username.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| ruleName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.27.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} ruleName The name of the rule.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnCertMatchingRuleResponseModel} and HTTP response
     */
    getMsgVpnCertMatchingRuleWithHttpInfo(msgVpnName, ruleName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnCertMatchingRule");
      }
      // verify the required parameter 'ruleName' is set
      if (ruleName === undefined || ruleName === null) {
        throw new Error("Missing the required parameter 'ruleName' when calling getMsgVpnCertMatchingRule");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'ruleName': ruleName
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
      let returnType = MsgVpnCertMatchingRuleResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/certMatchingRules/{ruleName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Certificate Matching Rule object.
     * Get a Certificate Matching Rule object.  A Cert Matching Rule is a collection of conditions and attribute filters that all have to be satisfied for certificate to be acceptable as authentication for a given username.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| ruleName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.27.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} ruleName The name of the rule.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnCertMatchingRuleResponseModel}
     */
    getMsgVpnCertMatchingRule(msgVpnName, ruleName, opts) {
      return this.getMsgVpnCertMatchingRuleWithHttpInfo(msgVpnName, ruleName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Certificate Matching Rule Attribute Filter object.
     * Get a Certificate Matching Rule Attribute Filter object.  A Cert Matching Rule Attribute Filter compares a username attribute to a string.   Attribute|Identifying|Deprecated :---|:---:|:---: filterName|x| msgVpnName|x| ruleName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} ruleName The name of the rule.
     * @param {String} filterName The name of the filter.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnCertMatchingRuleAttributeFilterResponseModel} and HTTP response
     */
    getMsgVpnCertMatchingRuleAttributeFilterWithHttpInfo(msgVpnName, ruleName, filterName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnCertMatchingRuleAttributeFilter");
      }
      // verify the required parameter 'ruleName' is set
      if (ruleName === undefined || ruleName === null) {
        throw new Error("Missing the required parameter 'ruleName' when calling getMsgVpnCertMatchingRuleAttributeFilter");
      }
      // verify the required parameter 'filterName' is set
      if (filterName === undefined || filterName === null) {
        throw new Error("Missing the required parameter 'filterName' when calling getMsgVpnCertMatchingRuleAttributeFilter");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'ruleName': ruleName,'filterName': filterName
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
      let returnType = MsgVpnCertMatchingRuleAttributeFilterResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/certMatchingRules/{ruleName}/attributeFilters/{filterName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Certificate Matching Rule Attribute Filter object.
     * Get a Certificate Matching Rule Attribute Filter object.  A Cert Matching Rule Attribute Filter compares a username attribute to a string.   Attribute|Identifying|Deprecated :---|:---:|:---: filterName|x| msgVpnName|x| ruleName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} ruleName The name of the rule.
     * @param {<&vendorExtensions.x-jsdoc-type>} filterName The name of the filter.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnCertMatchingRuleAttributeFilterResponseModel}
     */
    getMsgVpnCertMatchingRuleAttributeFilter(msgVpnName, ruleName, filterName, opts) {
      return this.getMsgVpnCertMatchingRuleAttributeFilterWithHttpInfo(msgVpnName, ruleName, filterName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Certificate Matching Rule Attribute Filter objects.
     * Get a list of Certificate Matching Rule Attribute Filter objects.  A Cert Matching Rule Attribute Filter compares a username attribute to a string.   Attribute|Identifying|Deprecated :---|:---:|:---: filterName|x| msgVpnName|x| ruleName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.28.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} ruleName The name of the rule.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnCertMatchingRuleAttributeFiltersResponseModel} and HTTP response
     */
    getMsgVpnCertMatchingRuleAttributeFiltersWithHttpInfo(msgVpnName, ruleName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnCertMatchingRuleAttributeFilters");
      }
      // verify the required parameter 'ruleName' is set
      if (ruleName === undefined || ruleName === null) {
        throw new Error("Missing the required parameter 'ruleName' when calling getMsgVpnCertMatchingRuleAttributeFilters");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'ruleName': ruleName
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
      let returnType = MsgVpnCertMatchingRuleAttributeFiltersResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/certMatchingRules/{ruleName}/attributeFilters', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Certificate Matching Rule Attribute Filter objects.
     * Get a list of Certificate Matching Rule Attribute Filter objects.  A Cert Matching Rule Attribute Filter compares a username attribute to a string.   Attribute|Identifying|Deprecated :---|:---:|:---: filterName|x| msgVpnName|x| ruleName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.28.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} ruleName The name of the rule.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnCertMatchingRuleAttributeFiltersResponseModel}
     */
    getMsgVpnCertMatchingRuleAttributeFilters(msgVpnName, ruleName, opts) {
      return this.getMsgVpnCertMatchingRuleAttributeFiltersWithHttpInfo(msgVpnName, ruleName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Certificate Matching Rule Condition object.
     * Get a Certificate Matching Rule Condition object.  A Cert Matching Rule Condition compares data extracted from a certificate to a username attribute or an expression.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| ruleName|x| source|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.27.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} ruleName The name of the rule.
     * @param {String} source Certificate field to be compared with the Attribute.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnCertMatchingRuleConditionResponseModel} and HTTP response
     */
    getMsgVpnCertMatchingRuleConditionWithHttpInfo(msgVpnName, ruleName, source, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnCertMatchingRuleCondition");
      }
      // verify the required parameter 'ruleName' is set
      if (ruleName === undefined || ruleName === null) {
        throw new Error("Missing the required parameter 'ruleName' when calling getMsgVpnCertMatchingRuleCondition");
      }
      // verify the required parameter 'source' is set
      if (source === undefined || source === null) {
        throw new Error("Missing the required parameter 'source' when calling getMsgVpnCertMatchingRuleCondition");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'ruleName': ruleName,'source': source
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
      let returnType = MsgVpnCertMatchingRuleConditionResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/certMatchingRules/{ruleName}/conditions/{source}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Certificate Matching Rule Condition object.
     * Get a Certificate Matching Rule Condition object.  A Cert Matching Rule Condition compares data extracted from a certificate to a username attribute or an expression.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| ruleName|x| source|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.27.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} ruleName The name of the rule.
     * @param {<&vendorExtensions.x-jsdoc-type>} source Certificate field to be compared with the Attribute.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnCertMatchingRuleConditionResponseModel}
     */
    getMsgVpnCertMatchingRuleCondition(msgVpnName, ruleName, source, opts) {
      return this.getMsgVpnCertMatchingRuleConditionWithHttpInfo(msgVpnName, ruleName, source, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Certificate Matching Rule Condition objects.
     * Get a list of Certificate Matching Rule Condition objects.  A Cert Matching Rule Condition compares data extracted from a certificate to a username attribute or an expression.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| ruleName|x| source|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.27.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} ruleName The name of the rule.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnCertMatchingRuleConditionsResponseModel} and HTTP response
     */
    getMsgVpnCertMatchingRuleConditionsWithHttpInfo(msgVpnName, ruleName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnCertMatchingRuleConditions");
      }
      // verify the required parameter 'ruleName' is set
      if (ruleName === undefined || ruleName === null) {
        throw new Error("Missing the required parameter 'ruleName' when calling getMsgVpnCertMatchingRuleConditions");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'ruleName': ruleName
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
      let returnType = MsgVpnCertMatchingRuleConditionsResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/certMatchingRules/{ruleName}/conditions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Certificate Matching Rule Condition objects.
     * Get a list of Certificate Matching Rule Condition objects.  A Cert Matching Rule Condition compares data extracted from a certificate to a username attribute or an expression.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| ruleName|x| source|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.27.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} ruleName The name of the rule.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnCertMatchingRuleConditionsResponseModel}
     */
    getMsgVpnCertMatchingRuleConditions(msgVpnName, ruleName, opts) {
      return this.getMsgVpnCertMatchingRuleConditionsWithHttpInfo(msgVpnName, ruleName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Certificate Matching Rule objects.
     * Get a list of Certificate Matching Rule objects.  A Cert Matching Rule is a collection of conditions and attribute filters that all have to be satisfied for certificate to be acceptable as authentication for a given username.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| ruleName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.27.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnCertMatchingRulesResponseModel} and HTTP response
     */
    getMsgVpnCertMatchingRulesWithHttpInfo(msgVpnName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnCertMatchingRules");
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
      let returnType = MsgVpnCertMatchingRulesResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/certMatchingRules', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Certificate Matching Rule objects.
     * Get a list of Certificate Matching Rule objects.  A Cert Matching Rule is a collection of conditions and attribute filters that all have to be satisfied for certificate to be acceptable as authentication for a given username.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| ruleName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.27.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnCertMatchingRulesResponseModel}
     */
    getMsgVpnCertMatchingRules(msgVpnName, opts) {
      return this.getMsgVpnCertMatchingRulesWithHttpInfo(msgVpnName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}