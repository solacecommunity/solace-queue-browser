import {ApiClient} from "../ApiClient";
import {MsgVpnTelemetryProfileReceiverAclConnectExceptionResponseModel} from '../model/MsgVpnTelemetryProfileReceiverAclConnectExceptionResponseModel';
import {MsgVpnTelemetryProfileReceiverAclConnectExceptionsResponseModel} from '../model/MsgVpnTelemetryProfileReceiverAclConnectExceptionsResponseModel';
import {MsgVpnTelemetryProfileResponseModel} from '../model/MsgVpnTelemetryProfileResponseModel';
import {MsgVpnTelemetryProfileTraceFilterResponseModel} from '../model/MsgVpnTelemetryProfileTraceFilterResponseModel';
import {MsgVpnTelemetryProfileTraceFilterSubscriptionResponseModel} from '../model/MsgVpnTelemetryProfileTraceFilterSubscriptionResponseModel';
import {MsgVpnTelemetryProfileTraceFilterSubscriptionsResponseModel} from '../model/MsgVpnTelemetryProfileTraceFilterSubscriptionsResponseModel';
import {MsgVpnTelemetryProfileTraceFiltersResponseModel} from '../model/MsgVpnTelemetryProfileTraceFiltersResponseModel';
import {MsgVpnTelemetryProfilesResponseModel} from '../model/MsgVpnTelemetryProfilesResponseModel';
import {SempMetaOnlyResponseModel} from '../model/SempMetaOnlyResponseModel';

/**
* TelemetryProfile service.
* @module api/TelemetryProfileApi
* @version 2.36
*/
export class TelemetryProfileApi {

    /**
    * Constructs a new TelemetryProfileApi. 
    * @alias module:api/TelemetryProfileApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get a Telemetry Profile object.
     * Get a Telemetry Profile object.  Using the Telemetry Profile allows trace spans to be generated as messages are processed by the broker. The generated spans are stored persistently on the broker and may be consumed by the Solace receiver component of an OpenTelemetry Collector.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| telemetryProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.31.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} telemetryProfileName The name of the Telemetry Profile.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnTelemetryProfileResponseModel} and HTTP response
     */
    getMsgVpnTelemetryProfileWithHttpInfo(msgVpnName, telemetryProfileName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnTelemetryProfile");
      }
      // verify the required parameter 'telemetryProfileName' is set
      if (telemetryProfileName === undefined || telemetryProfileName === null) {
        throw new Error("Missing the required parameter 'telemetryProfileName' when calling getMsgVpnTelemetryProfile");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'telemetryProfileName': telemetryProfileName
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
      let returnType = MsgVpnTelemetryProfileResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/telemetryProfiles/{telemetryProfileName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Telemetry Profile object.
     * Get a Telemetry Profile object.  Using the Telemetry Profile allows trace spans to be generated as messages are processed by the broker. The generated spans are stored persistently on the broker and may be consumed by the Solace receiver component of an OpenTelemetry Collector.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| telemetryProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.31.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} telemetryProfileName The name of the Telemetry Profile.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnTelemetryProfileResponseModel}
     */
    getMsgVpnTelemetryProfile(msgVpnName, telemetryProfileName, opts) {
      return this.getMsgVpnTelemetryProfileWithHttpInfo(msgVpnName, telemetryProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Receiver ACL Connect Exception object.
     * Get a Receiver ACL Connect Exception object.  A Receiver ACL Connect Exception is an exception to the default action to take when a receiver connects to the broker. Exceptions must be expressed as an IP address/netmask in CIDR form.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| receiverAclConnectExceptionAddress|x| telemetryProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.31.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} telemetryProfileName The name of the Telemetry Profile.
     * @param {String} receiverAclConnectExceptionAddress The IP address/netmask of the receiver connect exception in CIDR form.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnTelemetryProfileReceiverAclConnectExceptionResponseModel} and HTTP response
     */
    getMsgVpnTelemetryProfileReceiverAclConnectExceptionWithHttpInfo(msgVpnName, telemetryProfileName, receiverAclConnectExceptionAddress, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnTelemetryProfileReceiverAclConnectException");
      }
      // verify the required parameter 'telemetryProfileName' is set
      if (telemetryProfileName === undefined || telemetryProfileName === null) {
        throw new Error("Missing the required parameter 'telemetryProfileName' when calling getMsgVpnTelemetryProfileReceiverAclConnectException");
      }
      // verify the required parameter 'receiverAclConnectExceptionAddress' is set
      if (receiverAclConnectExceptionAddress === undefined || receiverAclConnectExceptionAddress === null) {
        throw new Error("Missing the required parameter 'receiverAclConnectExceptionAddress' when calling getMsgVpnTelemetryProfileReceiverAclConnectException");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'telemetryProfileName': telemetryProfileName,'receiverAclConnectExceptionAddress': receiverAclConnectExceptionAddress
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
      let returnType = MsgVpnTelemetryProfileReceiverAclConnectExceptionResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/telemetryProfiles/{telemetryProfileName}/receiverAclConnectExceptions/{receiverAclConnectExceptionAddress}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Receiver ACL Connect Exception object.
     * Get a Receiver ACL Connect Exception object.  A Receiver ACL Connect Exception is an exception to the default action to take when a receiver connects to the broker. Exceptions must be expressed as an IP address/netmask in CIDR form.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| receiverAclConnectExceptionAddress|x| telemetryProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.31.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} telemetryProfileName The name of the Telemetry Profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} receiverAclConnectExceptionAddress The IP address/netmask of the receiver connect exception in CIDR form.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnTelemetryProfileReceiverAclConnectExceptionResponseModel}
     */
    getMsgVpnTelemetryProfileReceiverAclConnectException(msgVpnName, telemetryProfileName, receiverAclConnectExceptionAddress, opts) {
      return this.getMsgVpnTelemetryProfileReceiverAclConnectExceptionWithHttpInfo(msgVpnName, telemetryProfileName, receiverAclConnectExceptionAddress, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Receiver ACL Connect Exception objects.
     * Get a list of Receiver ACL Connect Exception objects.  A Receiver ACL Connect Exception is an exception to the default action to take when a receiver connects to the broker. Exceptions must be expressed as an IP address/netmask in CIDR form.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| receiverAclConnectExceptionAddress|x| telemetryProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.31.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} telemetryProfileName The name of the Telemetry Profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnTelemetryProfileReceiverAclConnectExceptionsResponseModel} and HTTP response
     */
    getMsgVpnTelemetryProfileReceiverAclConnectExceptionsWithHttpInfo(msgVpnName, telemetryProfileName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnTelemetryProfileReceiverAclConnectExceptions");
      }
      // verify the required parameter 'telemetryProfileName' is set
      if (telemetryProfileName === undefined || telemetryProfileName === null) {
        throw new Error("Missing the required parameter 'telemetryProfileName' when calling getMsgVpnTelemetryProfileReceiverAclConnectExceptions");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'telemetryProfileName': telemetryProfileName
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
      let returnType = MsgVpnTelemetryProfileReceiverAclConnectExceptionsResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/telemetryProfiles/{telemetryProfileName}/receiverAclConnectExceptions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Receiver ACL Connect Exception objects.
     * Get a list of Receiver ACL Connect Exception objects.  A Receiver ACL Connect Exception is an exception to the default action to take when a receiver connects to the broker. Exceptions must be expressed as an IP address/netmask in CIDR form.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| receiverAclConnectExceptionAddress|x| telemetryProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.31.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} telemetryProfileName The name of the Telemetry Profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnTelemetryProfileReceiverAclConnectExceptionsResponseModel}
     */
    getMsgVpnTelemetryProfileReceiverAclConnectExceptions(msgVpnName, telemetryProfileName, opts) {
      return this.getMsgVpnTelemetryProfileReceiverAclConnectExceptionsWithHttpInfo(msgVpnName, telemetryProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Trace Filter object.
     * Get a Trace Filter object.  A Trace Filter controls which messages received by the broker will be traced. If an incoming message matches an enabled tracing filter&#x27;s subscription, the message will be traced as it passes through the broker.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| telemetryProfileName|x| traceFilterName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.31.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} telemetryProfileName The name of the Telemetry Profile.
     * @param {String} traceFilterName A name used to identify the trace filter. Consider a name that describes the subscriptions contained within the filter, such as the name of the application and/or the scenario in which the trace filter might be enabled, such as \&quot;appNameDebug\&quot;.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnTelemetryProfileTraceFilterResponseModel} and HTTP response
     */
    getMsgVpnTelemetryProfileTraceFilterWithHttpInfo(msgVpnName, telemetryProfileName, traceFilterName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnTelemetryProfileTraceFilter");
      }
      // verify the required parameter 'telemetryProfileName' is set
      if (telemetryProfileName === undefined || telemetryProfileName === null) {
        throw new Error("Missing the required parameter 'telemetryProfileName' when calling getMsgVpnTelemetryProfileTraceFilter");
      }
      // verify the required parameter 'traceFilterName' is set
      if (traceFilterName === undefined || traceFilterName === null) {
        throw new Error("Missing the required parameter 'traceFilterName' when calling getMsgVpnTelemetryProfileTraceFilter");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'telemetryProfileName': telemetryProfileName,'traceFilterName': traceFilterName
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
      let returnType = MsgVpnTelemetryProfileTraceFilterResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/telemetryProfiles/{telemetryProfileName}/traceFilters/{traceFilterName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Trace Filter object.
     * Get a Trace Filter object.  A Trace Filter controls which messages received by the broker will be traced. If an incoming message matches an enabled tracing filter&#x27;s subscription, the message will be traced as it passes through the broker.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| telemetryProfileName|x| traceFilterName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.31.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} telemetryProfileName The name of the Telemetry Profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} traceFilterName A name used to identify the trace filter. Consider a name that describes the subscriptions contained within the filter, such as the name of the application and/or the scenario in which the trace filter might be enabled, such as \&quot;appNameDebug\&quot;.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnTelemetryProfileTraceFilterResponseModel}
     */
    getMsgVpnTelemetryProfileTraceFilter(msgVpnName, telemetryProfileName, traceFilterName, opts) {
      return this.getMsgVpnTelemetryProfileTraceFilterWithHttpInfo(msgVpnName, telemetryProfileName, traceFilterName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Telemetry Trace Filter Subscription object.
     * Get a Telemetry Trace Filter Subscription object.  Trace filter subscriptions control which messages will be attracted by the tracing filter.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| subscription|x| subscriptionSyntax|x| telemetryProfileName|x| traceFilterName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.31.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} telemetryProfileName The name of the Telemetry Profile.
     * @param {String} traceFilterName A name used to identify the trace filter. Consider a name that describes the subscriptions contained within the filter, such as the name of the application and/or the scenario in which the trace filter might be enabled, such as \&quot;appNameDebug\&quot;.
     * @param {String} subscription Messages matching this subscription will follow this filter&#x27;s configuration.
     * @param {String} subscriptionSyntax The syntax of the trace filter subscription.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnTelemetryProfileTraceFilterSubscriptionResponseModel} and HTTP response
     */
    getMsgVpnTelemetryProfileTraceFilterSubscriptionWithHttpInfo(msgVpnName, telemetryProfileName, traceFilterName, subscription, subscriptionSyntax, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnTelemetryProfileTraceFilterSubscription");
      }
      // verify the required parameter 'telemetryProfileName' is set
      if (telemetryProfileName === undefined || telemetryProfileName === null) {
        throw new Error("Missing the required parameter 'telemetryProfileName' when calling getMsgVpnTelemetryProfileTraceFilterSubscription");
      }
      // verify the required parameter 'traceFilterName' is set
      if (traceFilterName === undefined || traceFilterName === null) {
        throw new Error("Missing the required parameter 'traceFilterName' when calling getMsgVpnTelemetryProfileTraceFilterSubscription");
      }
      // verify the required parameter 'subscription' is set
      if (subscription === undefined || subscription === null) {
        throw new Error("Missing the required parameter 'subscription' when calling getMsgVpnTelemetryProfileTraceFilterSubscription");
      }
      // verify the required parameter 'subscriptionSyntax' is set
      if (subscriptionSyntax === undefined || subscriptionSyntax === null) {
        throw new Error("Missing the required parameter 'subscriptionSyntax' when calling getMsgVpnTelemetryProfileTraceFilterSubscription");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'telemetryProfileName': telemetryProfileName,'traceFilterName': traceFilterName,'subscription': subscription,'subscriptionSyntax': subscriptionSyntax
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
      let returnType = MsgVpnTelemetryProfileTraceFilterSubscriptionResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/telemetryProfiles/{telemetryProfileName}/traceFilters/{traceFilterName}/subscriptions/{subscription},{subscriptionSyntax}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Telemetry Trace Filter Subscription object.
     * Get a Telemetry Trace Filter Subscription object.  Trace filter subscriptions control which messages will be attracted by the tracing filter.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| subscription|x| subscriptionSyntax|x| telemetryProfileName|x| traceFilterName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.31.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} telemetryProfileName The name of the Telemetry Profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} traceFilterName A name used to identify the trace filter. Consider a name that describes the subscriptions contained within the filter, such as the name of the application and/or the scenario in which the trace filter might be enabled, such as \&quot;appNameDebug\&quot;.
     * @param {<&vendorExtensions.x-jsdoc-type>} subscription Messages matching this subscription will follow this filter&#x27;s configuration.
     * @param {<&vendorExtensions.x-jsdoc-type>} subscriptionSyntax The syntax of the trace filter subscription.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnTelemetryProfileTraceFilterSubscriptionResponseModel}
     */
    getMsgVpnTelemetryProfileTraceFilterSubscription(msgVpnName, telemetryProfileName, traceFilterName, subscription, subscriptionSyntax, opts) {
      return this.getMsgVpnTelemetryProfileTraceFilterSubscriptionWithHttpInfo(msgVpnName, telemetryProfileName, traceFilterName, subscription, subscriptionSyntax, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Telemetry Trace Filter Subscription objects.
     * Get a list of Telemetry Trace Filter Subscription objects.  Trace filter subscriptions control which messages will be attracted by the tracing filter.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| subscription|x| subscriptionSyntax|x| telemetryProfileName|x| traceFilterName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.31.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} telemetryProfileName The name of the Telemetry Profile.
     * @param {String} traceFilterName A name used to identify the trace filter. Consider a name that describes the subscriptions contained within the filter, such as the name of the application and/or the scenario in which the trace filter might be enabled, such as \&quot;appNameDebug\&quot;.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnTelemetryProfileTraceFilterSubscriptionsResponseModel} and HTTP response
     */
    getMsgVpnTelemetryProfileTraceFilterSubscriptionsWithHttpInfo(msgVpnName, telemetryProfileName, traceFilterName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnTelemetryProfileTraceFilterSubscriptions");
      }
      // verify the required parameter 'telemetryProfileName' is set
      if (telemetryProfileName === undefined || telemetryProfileName === null) {
        throw new Error("Missing the required parameter 'telemetryProfileName' when calling getMsgVpnTelemetryProfileTraceFilterSubscriptions");
      }
      // verify the required parameter 'traceFilterName' is set
      if (traceFilterName === undefined || traceFilterName === null) {
        throw new Error("Missing the required parameter 'traceFilterName' when calling getMsgVpnTelemetryProfileTraceFilterSubscriptions");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'telemetryProfileName': telemetryProfileName,'traceFilterName': traceFilterName
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
      let returnType = MsgVpnTelemetryProfileTraceFilterSubscriptionsResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/telemetryProfiles/{telemetryProfileName}/traceFilters/{traceFilterName}/subscriptions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Telemetry Trace Filter Subscription objects.
     * Get a list of Telemetry Trace Filter Subscription objects.  Trace filter subscriptions control which messages will be attracted by the tracing filter.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| subscription|x| subscriptionSyntax|x| telemetryProfileName|x| traceFilterName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.31.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} telemetryProfileName The name of the Telemetry Profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} traceFilterName A name used to identify the trace filter. Consider a name that describes the subscriptions contained within the filter, such as the name of the application and/or the scenario in which the trace filter might be enabled, such as \&quot;appNameDebug\&quot;.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnTelemetryProfileTraceFilterSubscriptionsResponseModel}
     */
    getMsgVpnTelemetryProfileTraceFilterSubscriptions(msgVpnName, telemetryProfileName, traceFilterName, opts) {
      return this.getMsgVpnTelemetryProfileTraceFilterSubscriptionsWithHttpInfo(msgVpnName, telemetryProfileName, traceFilterName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Trace Filter objects.
     * Get a list of Trace Filter objects.  A Trace Filter controls which messages received by the broker will be traced. If an incoming message matches an enabled tracing filter&#x27;s subscription, the message will be traced as it passes through the broker.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| telemetryProfileName|x| traceFilterName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.31.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} telemetryProfileName The name of the Telemetry Profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnTelemetryProfileTraceFiltersResponseModel} and HTTP response
     */
    getMsgVpnTelemetryProfileTraceFiltersWithHttpInfo(msgVpnName, telemetryProfileName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnTelemetryProfileTraceFilters");
      }
      // verify the required parameter 'telemetryProfileName' is set
      if (telemetryProfileName === undefined || telemetryProfileName === null) {
        throw new Error("Missing the required parameter 'telemetryProfileName' when calling getMsgVpnTelemetryProfileTraceFilters");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'telemetryProfileName': telemetryProfileName
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
      let returnType = MsgVpnTelemetryProfileTraceFiltersResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/telemetryProfiles/{telemetryProfileName}/traceFilters', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Trace Filter objects.
     * Get a list of Trace Filter objects.  A Trace Filter controls which messages received by the broker will be traced. If an incoming message matches an enabled tracing filter&#x27;s subscription, the message will be traced as it passes through the broker.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| telemetryProfileName|x| traceFilterName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.31.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} telemetryProfileName The name of the Telemetry Profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnTelemetryProfileTraceFiltersResponseModel}
     */
    getMsgVpnTelemetryProfileTraceFilters(msgVpnName, telemetryProfileName, opts) {
      return this.getMsgVpnTelemetryProfileTraceFiltersWithHttpInfo(msgVpnName, telemetryProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Telemetry Profile objects.
     * Get a list of Telemetry Profile objects.  Using the Telemetry Profile allows trace spans to be generated as messages are processed by the broker. The generated spans are stored persistently on the broker and may be consumed by the Solace receiver component of an OpenTelemetry Collector.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| telemetryProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.31.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnTelemetryProfilesResponseModel} and HTTP response
     */
    getMsgVpnTelemetryProfilesWithHttpInfo(msgVpnName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnTelemetryProfiles");
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
      let returnType = MsgVpnTelemetryProfilesResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/telemetryProfiles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Telemetry Profile objects.
     * Get a list of Telemetry Profile objects.  Using the Telemetry Profile allows trace spans to be generated as messages are processed by the broker. The generated spans are stored persistently on the broker and may be consumed by the Solace receiver component of an OpenTelemetry Collector.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| telemetryProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.31.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnTelemetryProfilesResponseModel}
     */
    getMsgVpnTelemetryProfiles(msgVpnName, opts) {
      return this.getMsgVpnTelemetryProfilesWithHttpInfo(msgVpnName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}