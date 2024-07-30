/*
 * SEMP (Solace Element Management Protocol)
 * SEMP (starting in `v2`, see note 1) is a RESTful API for configuring, monitoring, and administering a Solace PubSub+ broker.  SEMP uses URIs to address manageable **resources** of the Solace PubSub+ broker. Resources are individual **objects**, **collections** of objects, or (exclusively in the action API) **actions**. This document applies to the following API:   API|Base Path|Purpose|Comments :---|:---|:---|:--- Configuration|/SEMP/v2/config|Reading and writing config state|See note 2    The following APIs are also available:   API|Base Path|Purpose|Comments :---|:---|:---|:--- Action|/SEMP/v2/action|Performing actions|See note 2 Monitoring|/SEMP/v2/monitor|Querying operational parameters|See note 2    Resources are always nouns, with individual objects being singular and collections being plural.  Objects within a collection are identified by an `obj-id`, which follows the collection name with the form `collection-name/obj-id`. An `obj-id` consists of one or more identifying attributes, separated by commas. Commas that appear in the identifying attribute itself must be percent encoded.   Actions within an object are identified by an `action-id`, which follows the object name with the form `obj-id/action-id`.  Some examples:  ``` /SEMP/v2/config/msgVpns                        ; MsgVpn collection /SEMP/v2/config/msgVpns/a                      ; MsgVpn object named \"a\" /SEMP/v2/config/msgVpns/a/bridges              ; Bridge collection in MsgVpn \"a\" /SEMP/v2/config/msgVpns/a/bridges/b,auto       ; Bridge object named \"b\" with virtual router \"auto\" in MsgVpn \"a\" /SEMP/v2/config/msgVpns/a/queues               ; Queue collection in MsgVpn \"a\" /SEMP/v2/config/msgVpns/a/queues/c             ; Queue object named \"c\" in MsgVpn \"a\" /SEMP/v2/action/msgVpns/a/queues/c/startReplay ; Action that starts a replay on Queue \"c\" in MsgVpn \"a\" /SEMP/v2/monitor/msgVpns/a/clients             ; Client collection in MsgVpn \"a\" /SEMP/v2/monitor/msgVpns/a/clients/d           ; Client object named \"d\" in MsgVpn \"a\" ```  ## Collection Resources  Collections are unordered lists of objects (unless described as otherwise), and are described by JSON arrays. Each item in the array represents an object in the same manner as the individual object would normally be represented. In the configuration API, the creation of a new object is done through its collection resource.  ## Object and Action Resources  Objects are composed of attributes, actions, collections, and other objects. They are described by JSON objects as name/value pairs. The collections and actions of an object are not contained directly in the object's JSON content; rather the content includes an attribute containing a URI which points to the collections and actions. These contained resources must be managed through this URI. At a minimum, every object has one or more identifying attributes, and its own `uri` attribute which contains the URI pointing to itself.  Actions are also composed of attributes, and are described by JSON objects as name/value pairs. Unlike objects, however, they are not members of a collection and cannot be retrieved, only performed. Actions only exist in the action API.  Attributes in an object or action may have any combination of the following properties:   Property|Meaning|Comments :---|:---|:--- Identifying|Attribute is involved in unique identification of the object, and appears in its URI| Const|Attribute value can only be chosen during object creation| Required|Attribute must be provided in the request| Read-Only|Attribute value cannot be changed|See note 3 Write-Only|Attribute can only be written, not read, unless the attribute is also opaque|See the documentation for the opaque property Requires-Disable|Attribute cannot be changed while the object (or the relevant part of the object) is administratively enabled| Auto-Disable|Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as one or more attributes will be temporarily disabled to apply the change| Deprecated|Attribute is deprecated, and will disappear in the next SEMP version| Opaque|Attribute can be set or retrieved in opaque form when the `opaquePassword` query parameter is present|See the `opaquePassword` query parameter documentation    In some requests, certain attributes may only be provided in certain combinations with other attributes:   Relationship|Meaning|Comments :---|:---|:--- Requires|Attribute may only be provided in a request if a particular attribute or combination of attributes is also provided in the request|The \"requires\" property will not be enforced for an attribute when all of the following conditions are met: (a) the attribute is not write-only; (b) the value provided for the attribute is the same as its current (or, on object creation, its default) value; and (c) the attribute requires a write-only attribute. In addition, the \"requires\" property may not be enforced even if only conditions (a) and (b) are met. Conflicts|Attribute may only be provided in a request if a particular attribute or combination of attributes is not also provided in the request|    In the monitoring API, any non-identifying attribute may not be returned in a GET.  ## HTTP Methods  The following HTTP methods manipulate resources in accordance with these general principles. Note that some methods are only used in certain APIs:   Method|Resource|Meaning|Request Body|Response Body|Notes :---|:---|:---|:---|:---|:--- POST|Collection|Create object|Initial attribute values|Object attributes and metadata|Absent attributes are set to default. If object already exists, a 400 error is returned PUT|Object|Update object|New attribute values|Object attributes and metadata|If does not exist, the object is first created. Absent attributes are set to default, with certain exceptions (see note 4) PUT|Action|Performs action|Action arguments|Action metadata| PATCH|Object|Update object|New attribute values|Object attributes and metadata|Absent attributes are left unchanged. If the object does not exist, a 404 error is returned DELETE|Object|Delete object|Empty|Object metadata|If the object does not exist, a 404 is returned GET|Object|Get object|Empty|Object attributes and metadata|If the object does not exist, a 404 is returned GET|Collection|Get collection|Empty|Object attributes and collection metadata|If the collection is empty, then an empty collection is returned with a 200 code    ## Common Query Parameters  The following are some common query parameters that are supported by many method/URI combinations. Individual URIs may document additional parameters. Note that multiple query parameters can be used together in a single URI, separated by the ampersand character. For example:  ``` ; Request for the MsgVpns collection using two hypothetical query parameters ; \"q1\" and \"q2\" with values \"val1\" and \"val2\" respectively /SEMP/v2/config/msgVpns?q1=val1&q2=val2 ```  ### select  Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. Use this query parameter to limit the size of the returned data for each returned object, return only those fields that are desired, or exclude fields that are not desired.  The value of `select` is a comma-separated list of attribute names. If the list contains attribute names that are not prefaced by `-`, only those attributes are included in the response. If the list contains attribute names that are prefaced by `-`, those attributes are excluded from the response. If the list contains both types, then the difference of the first set of attributes and the second set of attributes is returned. If the list is empty (i.e. `select=`), it is treated the same as if no `select` was provided: all attribute are returned.  All attributes that are prefaced by `-` must follow all attributes that are not prefaced by `-`. In addition, each attribute name in the list must match at least one attribute in the object.  Names may include the `*` wildcard (zero or more characters). Nested attribute names are supported using periods (e.g. `parentName.childName`).  Some examples:  ``` ; List of all MsgVpn names /SEMP/v2/config/msgVpns?select=msgVpnName ; List of all MsgVpn and their attributes except for their names /SEMP/v2/config/msgVpns?select=-msgVpnName ; Authentication attributes of MsgVpn \"finance\" /SEMP/v2/config/msgVpns/finance?select=authentication%2A ; All attributes of MsgVpn \"finance\" except for authentication attributes /SEMP/v2/config/msgVpns/finance?select=-authentication%2A ; Access related attributes of Queue \"orderQ\" of MsgVpn \"finance\" /SEMP/v2/config/msgVpns/finance/queues/orderQ?select=owner,permission ```  ### where  Include in the response only objects where certain conditions are true. Use this query parameter to limit which objects are returned to those whose attribute values meet the given conditions.  The value of `where` is a comma-separated list of expressions. All expressions must be true for the object to be included in the response. Each expression takes the form:  ``` expression  = attribute-name OP value OP          = '==' | '!=' | '<' | '>' | '<=' | '>=' ```  Write-only attributes cannot be used in a `where` expression.  `value` may be a number, string, `true`, or `false`, as appropriate for the type of `attribute-name`.  A `*` in a string `value` is interpreted as a wildcard (zero or more characters), but can be escaped using `\\`. The `\\` character can itself be escaped using `\\`. The `*` wildcard can only be used with the `==` and `!=` operators. If `*` is used as a literal with other operators, it must be escaped.  The `<`, `>`, `<=`, and `>=` operators perform a simple byte-for-byte comparison when used with a string `value`.  Some examples:  ``` ; Only enabled MsgVpns /SEMP/v2/config/msgVpns?where=enabled%3D%3Dtrue ; Only MsgVpns using basic non-LDAP authentication /SEMP/v2/config/msgVpns?where=authenticationBasicEnabled%3D%3Dtrue,authenticationBasicType%21%3Dldap ; Only MsgVpns that allow more than 100 client connections /SEMP/v2/config/msgVpns?where=maxConnectionCount%3E100 ; Only MsgVpns with msgVpnName starting with \"B\": /SEMP/v2/config/msgVpns?where=msgVpnName%3D%3DB%2A ```  ### count  Limit the count of objects in the response. This can be useful to limit the size of the response for large collections. The minimum value for `count` is `1` and the default is `10`. There is also a per-collection maximum value to limit request handling time.  `count` does not guarantee that a minimum number of objects will be returned. A page may contain fewer than `count` objects or even be empty. Additional objects may nonetheless be available for retrieval on subsequent pages. See the `cursor` query parameter documentation for more information on paging.  For example: ``` ; Up to 25 MsgVpns /SEMP/v2/config/msgVpns?count=25 ```  ### cursor  The cursor, or position, for the next page of objects. Cursors are opaque data that should not be created or interpreted by SEMP clients, and should only be used as described below.  When a request is made for a collection and there may be additional objects available for retrieval that are not included in the initial response, the response will include a `cursorQuery` field containing a cursor. The value of this field can be specified in the `cursor` query parameter of a subsequent request to retrieve the next page of objects.  Applications must continue to use the `cursorQuery` if one is provided in order to retrieve the full set of objects associated with the request, even if a page contains fewer than the requested number of objects (see the `count` query parameter documentation) or is empty.  ### opaquePassword  Attributes with the opaque property are also write-only and so cannot normally be retrieved in a GET. However, when a password is provided in the `opaquePassword` query parameter, attributes with the opaque property are retrieved in a GET in opaque form, encrypted with this password. The query parameter can also be used on a POST, PATCH, or PUT to set opaque attributes using opaque attribute values retrieved in a GET, so long as:  1. the same password that was used to retrieve the opaque attribute values is provided; and  2. the broker to which the request is being sent has the same major and minor SEMP version as the broker that produced the opaque attribute values.  The password provided in the query parameter must be a minimum of 8 characters and a maximum of 128 characters.  The query parameter can only be used in the configuration API, and only over HTTPS.  ## Authentication  When a client makes its first SEMPv2 request, it must supply a username and password using HTTP Basic authentication, or an OAuth token or tokens using HTTP Bearer authentication.  When HTTP Basic authentication is used, the broker returns a cookie containing a session key. The client can omit the username and password from subsequent requests, because the broker can use the session cookie for authentication instead. When the session expires or is deleted, the client must provide the username and password again, and the broker creates a new session.  There are a limited number of session slots available on the broker. The broker returns 529 No SEMP Session Available if it is not able to allocate a session.  If certain attributes—such as a user's password—are changed, the broker automatically deletes the affected sessions. These attributes are documented below. However, changes in external user configuration data stored on a RADIUS or LDAP server do not trigger the broker to delete the associated session(s), therefore you must do this manually, if required.  A client can retrieve its current session information using the /about/user endpoint and delete its own session using the /about/user/logout endpoint. A client with appropriate permissions can also manage all sessions using the /sessions endpoint.  Sessions are not created when authenticating with an OAuth token or tokens using HTTP Bearer authentication. If a session cookie is provided, it is ignored.  ## Help  Visit [our website](https://solace.com) to learn more about Solace.  You can also download the SEMP API specifications by clicking [here](https://solace.com/downloads/).  If you need additional support, please contact us at [support@solace.com](mailto:support@solace.com).  ## Notes  Note|Description :---:|:--- 1|This specification defines SEMP starting in \"v2\", and not the original SEMP \"v1\" interface. Request and response formats between \"v1\" and \"v2\" are entirely incompatible, although both protocols share a common port configuration on the Solace PubSub+ broker. They are differentiated by the initial portion of the URI path, one of either \"/SEMP/\" or \"/SEMP/v2/\" 2|This API is partially implemented. Only a subset of all objects are available. 3|Read-only attributes may appear in POST and PUT/PATCH requests but are ignored, except when the read-only attribute is identifying. 4|On a PUT, if the SEMP user is not authorized to modify the attribute, its value is left unchanged rather than set to default. In addition, the values of write-only attributes are not set to their defaults on a PUT, except in the following two cases: there is a mutual requires relationship with another non-write-only attribute, both attributes are absent from the request, and the non-write-only attribute is not currently set to its default value; or the attribute is also opaque and the `opaquePassword` query parameter is provided in the request.  
 *
 * OpenAPI spec version: 2.36
 * Contact: support@solace.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.34
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {EventThresholdByValueModel} from './EventThresholdByValueModel';
import {EventThresholdModel} from './EventThresholdModel';

/**
 * The MsgVpnModel model module.
 * @module model/MsgVpnModel
 * @version 2.36
 */
export class MsgVpnModel {
  /**
   * Constructs a new <code>MsgVpnModel</code>.
   * @alias module:model/MsgVpnModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnModel} The populated <code>MsgVpnModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnModel();
      if (data.hasOwnProperty('alias'))
        obj.alias = ApiClient.convertToType(data['alias'], 'String');
      if (data.hasOwnProperty('authenticationBasicEnabled'))
        obj.authenticationBasicEnabled = ApiClient.convertToType(data['authenticationBasicEnabled'], 'Boolean');
      if (data.hasOwnProperty('authenticationBasicProfileName'))
        obj.authenticationBasicProfileName = ApiClient.convertToType(data['authenticationBasicProfileName'], 'String');
      if (data.hasOwnProperty('authenticationBasicRadiusDomain'))
        obj.authenticationBasicRadiusDomain = ApiClient.convertToType(data['authenticationBasicRadiusDomain'], 'String');
      if (data.hasOwnProperty('authenticationBasicType'))
        obj.authenticationBasicType = ApiClient.convertToType(data['authenticationBasicType'], 'String');
      if (data.hasOwnProperty('authenticationClientCertAllowApiProvidedUsernameEnabled'))
        obj.authenticationClientCertAllowApiProvidedUsernameEnabled = ApiClient.convertToType(data['authenticationClientCertAllowApiProvidedUsernameEnabled'], 'Boolean');
      if (data.hasOwnProperty('authenticationClientCertCertificateMatchingRulesEnabled'))
        obj.authenticationClientCertCertificateMatchingRulesEnabled = ApiClient.convertToType(data['authenticationClientCertCertificateMatchingRulesEnabled'], 'Boolean');
      if (data.hasOwnProperty('authenticationClientCertEnabled'))
        obj.authenticationClientCertEnabled = ApiClient.convertToType(data['authenticationClientCertEnabled'], 'Boolean');
      if (data.hasOwnProperty('authenticationClientCertMaxChainDepth'))
        obj.authenticationClientCertMaxChainDepth = ApiClient.convertToType(data['authenticationClientCertMaxChainDepth'], 'Number');
      if (data.hasOwnProperty('authenticationClientCertRevocationCheckMode'))
        obj.authenticationClientCertRevocationCheckMode = ApiClient.convertToType(data['authenticationClientCertRevocationCheckMode'], 'String');
      if (data.hasOwnProperty('authenticationClientCertUsernameSource'))
        obj.authenticationClientCertUsernameSource = ApiClient.convertToType(data['authenticationClientCertUsernameSource'], 'String');
      if (data.hasOwnProperty('authenticationClientCertValidateDateEnabled'))
        obj.authenticationClientCertValidateDateEnabled = ApiClient.convertToType(data['authenticationClientCertValidateDateEnabled'], 'Boolean');
      if (data.hasOwnProperty('authenticationKerberosAllowApiProvidedUsernameEnabled'))
        obj.authenticationKerberosAllowApiProvidedUsernameEnabled = ApiClient.convertToType(data['authenticationKerberosAllowApiProvidedUsernameEnabled'], 'Boolean');
      if (data.hasOwnProperty('authenticationKerberosEnabled'))
        obj.authenticationKerberosEnabled = ApiClient.convertToType(data['authenticationKerberosEnabled'], 'Boolean');
      if (data.hasOwnProperty('authenticationOauthDefaultProfileName'))
        obj.authenticationOauthDefaultProfileName = ApiClient.convertToType(data['authenticationOauthDefaultProfileName'], 'String');
      if (data.hasOwnProperty('authenticationOauthDefaultProviderName'))
        obj.authenticationOauthDefaultProviderName = ApiClient.convertToType(data['authenticationOauthDefaultProviderName'], 'String');
      if (data.hasOwnProperty('authenticationOauthEnabled'))
        obj.authenticationOauthEnabled = ApiClient.convertToType(data['authenticationOauthEnabled'], 'Boolean');
      if (data.hasOwnProperty('authorizationLdapGroupMembershipAttributeName'))
        obj.authorizationLdapGroupMembershipAttributeName = ApiClient.convertToType(data['authorizationLdapGroupMembershipAttributeName'], 'String');
      if (data.hasOwnProperty('authorizationLdapTrimClientUsernameDomainEnabled'))
        obj.authorizationLdapTrimClientUsernameDomainEnabled = ApiClient.convertToType(data['authorizationLdapTrimClientUsernameDomainEnabled'], 'Boolean');
      if (data.hasOwnProperty('authorizationProfileName'))
        obj.authorizationProfileName = ApiClient.convertToType(data['authorizationProfileName'], 'String');
      if (data.hasOwnProperty('authorizationType'))
        obj.authorizationType = ApiClient.convertToType(data['authorizationType'], 'String');
      if (data.hasOwnProperty('bridgingTlsServerCertEnforceTrustedCommonNameEnabled'))
        obj.bridgingTlsServerCertEnforceTrustedCommonNameEnabled = ApiClient.convertToType(data['bridgingTlsServerCertEnforceTrustedCommonNameEnabled'], 'Boolean');
      if (data.hasOwnProperty('bridgingTlsServerCertMaxChainDepth'))
        obj.bridgingTlsServerCertMaxChainDepth = ApiClient.convertToType(data['bridgingTlsServerCertMaxChainDepth'], 'Number');
      if (data.hasOwnProperty('bridgingTlsServerCertValidateDateEnabled'))
        obj.bridgingTlsServerCertValidateDateEnabled = ApiClient.convertToType(data['bridgingTlsServerCertValidateDateEnabled'], 'Boolean');
      if (data.hasOwnProperty('bridgingTlsServerCertValidateNameEnabled'))
        obj.bridgingTlsServerCertValidateNameEnabled = ApiClient.convertToType(data['bridgingTlsServerCertValidateNameEnabled'], 'Boolean');
      if (data.hasOwnProperty('distributedCacheManagementEnabled'))
        obj.distributedCacheManagementEnabled = ApiClient.convertToType(data['distributedCacheManagementEnabled'], 'Boolean');
      if (data.hasOwnProperty('dmrEnabled'))
        obj.dmrEnabled = ApiClient.convertToType(data['dmrEnabled'], 'Boolean');
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('eventConnectionCountThreshold'))
        obj.eventConnectionCountThreshold = EventThresholdModel.constructFromObject(data['eventConnectionCountThreshold']);
      if (data.hasOwnProperty('eventEgressFlowCountThreshold'))
        obj.eventEgressFlowCountThreshold = EventThresholdModel.constructFromObject(data['eventEgressFlowCountThreshold']);
      if (data.hasOwnProperty('eventEgressMsgRateThreshold'))
        obj.eventEgressMsgRateThreshold = EventThresholdByValueModel.constructFromObject(data['eventEgressMsgRateThreshold']);
      if (data.hasOwnProperty('eventEndpointCountThreshold'))
        obj.eventEndpointCountThreshold = EventThresholdModel.constructFromObject(data['eventEndpointCountThreshold']);
      if (data.hasOwnProperty('eventIngressFlowCountThreshold'))
        obj.eventIngressFlowCountThreshold = EventThresholdModel.constructFromObject(data['eventIngressFlowCountThreshold']);
      if (data.hasOwnProperty('eventIngressMsgRateThreshold'))
        obj.eventIngressMsgRateThreshold = EventThresholdByValueModel.constructFromObject(data['eventIngressMsgRateThreshold']);
      if (data.hasOwnProperty('eventLargeMsgThreshold'))
        obj.eventLargeMsgThreshold = ApiClient.convertToType(data['eventLargeMsgThreshold'], 'Number');
      if (data.hasOwnProperty('eventLogTag'))
        obj.eventLogTag = ApiClient.convertToType(data['eventLogTag'], 'String');
      if (data.hasOwnProperty('eventMsgSpoolUsageThreshold'))
        obj.eventMsgSpoolUsageThreshold = EventThresholdModel.constructFromObject(data['eventMsgSpoolUsageThreshold']);
      if (data.hasOwnProperty('eventPublishClientEnabled'))
        obj.eventPublishClientEnabled = ApiClient.convertToType(data['eventPublishClientEnabled'], 'Boolean');
      if (data.hasOwnProperty('eventPublishMsgVpnEnabled'))
        obj.eventPublishMsgVpnEnabled = ApiClient.convertToType(data['eventPublishMsgVpnEnabled'], 'Boolean');
      if (data.hasOwnProperty('eventPublishSubscriptionMode'))
        obj.eventPublishSubscriptionMode = ApiClient.convertToType(data['eventPublishSubscriptionMode'], 'String');
      if (data.hasOwnProperty('eventPublishTopicFormatMqttEnabled'))
        obj.eventPublishTopicFormatMqttEnabled = ApiClient.convertToType(data['eventPublishTopicFormatMqttEnabled'], 'Boolean');
      if (data.hasOwnProperty('eventPublishTopicFormatSmfEnabled'))
        obj.eventPublishTopicFormatSmfEnabled = ApiClient.convertToType(data['eventPublishTopicFormatSmfEnabled'], 'Boolean');
      if (data.hasOwnProperty('eventServiceAmqpConnectionCountThreshold'))
        obj.eventServiceAmqpConnectionCountThreshold = EventThresholdModel.constructFromObject(data['eventServiceAmqpConnectionCountThreshold']);
      if (data.hasOwnProperty('eventServiceMqttConnectionCountThreshold'))
        obj.eventServiceMqttConnectionCountThreshold = EventThresholdModel.constructFromObject(data['eventServiceMqttConnectionCountThreshold']);
      if (data.hasOwnProperty('eventServiceRestIncomingConnectionCountThreshold'))
        obj.eventServiceRestIncomingConnectionCountThreshold = EventThresholdModel.constructFromObject(data['eventServiceRestIncomingConnectionCountThreshold']);
      if (data.hasOwnProperty('eventServiceSmfConnectionCountThreshold'))
        obj.eventServiceSmfConnectionCountThreshold = EventThresholdModel.constructFromObject(data['eventServiceSmfConnectionCountThreshold']);
      if (data.hasOwnProperty('eventServiceWebConnectionCountThreshold'))
        obj.eventServiceWebConnectionCountThreshold = EventThresholdModel.constructFromObject(data['eventServiceWebConnectionCountThreshold']);
      if (data.hasOwnProperty('eventSubscriptionCountThreshold'))
        obj.eventSubscriptionCountThreshold = EventThresholdModel.constructFromObject(data['eventSubscriptionCountThreshold']);
      if (data.hasOwnProperty('eventTransactedSessionCountThreshold'))
        obj.eventTransactedSessionCountThreshold = EventThresholdModel.constructFromObject(data['eventTransactedSessionCountThreshold']);
      if (data.hasOwnProperty('eventTransactionCountThreshold'))
        obj.eventTransactionCountThreshold = EventThresholdModel.constructFromObject(data['eventTransactionCountThreshold']);
      if (data.hasOwnProperty('exportSubscriptionsEnabled'))
        obj.exportSubscriptionsEnabled = ApiClient.convertToType(data['exportSubscriptionsEnabled'], 'Boolean');
      if (data.hasOwnProperty('jndiEnabled'))
        obj.jndiEnabled = ApiClient.convertToType(data['jndiEnabled'], 'Boolean');
      if (data.hasOwnProperty('maxConnectionCount'))
        obj.maxConnectionCount = ApiClient.convertToType(data['maxConnectionCount'], 'Number');
      if (data.hasOwnProperty('maxEgressFlowCount'))
        obj.maxEgressFlowCount = ApiClient.convertToType(data['maxEgressFlowCount'], 'Number');
      if (data.hasOwnProperty('maxEndpointCount'))
        obj.maxEndpointCount = ApiClient.convertToType(data['maxEndpointCount'], 'Number');
      if (data.hasOwnProperty('maxIngressFlowCount'))
        obj.maxIngressFlowCount = ApiClient.convertToType(data['maxIngressFlowCount'], 'Number');
      if (data.hasOwnProperty('maxMsgSpoolUsage'))
        obj.maxMsgSpoolUsage = ApiClient.convertToType(data['maxMsgSpoolUsage'], 'Number');
      if (data.hasOwnProperty('maxSubscriptionCount'))
        obj.maxSubscriptionCount = ApiClient.convertToType(data['maxSubscriptionCount'], 'Number');
      if (data.hasOwnProperty('maxTransactedSessionCount'))
        obj.maxTransactedSessionCount = ApiClient.convertToType(data['maxTransactedSessionCount'], 'Number');
      if (data.hasOwnProperty('maxTransactionCount'))
        obj.maxTransactionCount = ApiClient.convertToType(data['maxTransactionCount'], 'Number');
      if (data.hasOwnProperty('mqttRetainMaxMemory'))
        obj.mqttRetainMaxMemory = ApiClient.convertToType(data['mqttRetainMaxMemory'], 'Number');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('replicationAckPropagationIntervalMsgCount'))
        obj.replicationAckPropagationIntervalMsgCount = ApiClient.convertToType(data['replicationAckPropagationIntervalMsgCount'], 'Number');
      if (data.hasOwnProperty('replicationBridgeAuthenticationBasicClientUsername'))
        obj.replicationBridgeAuthenticationBasicClientUsername = ApiClient.convertToType(data['replicationBridgeAuthenticationBasicClientUsername'], 'String');
      if (data.hasOwnProperty('replicationBridgeAuthenticationBasicPassword'))
        obj.replicationBridgeAuthenticationBasicPassword = ApiClient.convertToType(data['replicationBridgeAuthenticationBasicPassword'], 'String');
      if (data.hasOwnProperty('replicationBridgeAuthenticationClientCertContent'))
        obj.replicationBridgeAuthenticationClientCertContent = ApiClient.convertToType(data['replicationBridgeAuthenticationClientCertContent'], 'String');
      if (data.hasOwnProperty('replicationBridgeAuthenticationClientCertPassword'))
        obj.replicationBridgeAuthenticationClientCertPassword = ApiClient.convertToType(data['replicationBridgeAuthenticationClientCertPassword'], 'String');
      if (data.hasOwnProperty('replicationBridgeAuthenticationScheme'))
        obj.replicationBridgeAuthenticationScheme = ApiClient.convertToType(data['replicationBridgeAuthenticationScheme'], 'String');
      if (data.hasOwnProperty('replicationBridgeCompressedDataEnabled'))
        obj.replicationBridgeCompressedDataEnabled = ApiClient.convertToType(data['replicationBridgeCompressedDataEnabled'], 'Boolean');
      if (data.hasOwnProperty('replicationBridgeEgressFlowWindowSize'))
        obj.replicationBridgeEgressFlowWindowSize = ApiClient.convertToType(data['replicationBridgeEgressFlowWindowSize'], 'Number');
      if (data.hasOwnProperty('replicationBridgeRetryDelay'))
        obj.replicationBridgeRetryDelay = ApiClient.convertToType(data['replicationBridgeRetryDelay'], 'Number');
      if (data.hasOwnProperty('replicationBridgeTlsEnabled'))
        obj.replicationBridgeTlsEnabled = ApiClient.convertToType(data['replicationBridgeTlsEnabled'], 'Boolean');
      if (data.hasOwnProperty('replicationBridgeUnidirectionalClientProfileName'))
        obj.replicationBridgeUnidirectionalClientProfileName = ApiClient.convertToType(data['replicationBridgeUnidirectionalClientProfileName'], 'String');
      if (data.hasOwnProperty('replicationEnabled'))
        obj.replicationEnabled = ApiClient.convertToType(data['replicationEnabled'], 'Boolean');
      if (data.hasOwnProperty('replicationEnabledQueueBehavior'))
        obj.replicationEnabledQueueBehavior = ApiClient.convertToType(data['replicationEnabledQueueBehavior'], 'String');
      if (data.hasOwnProperty('replicationQueueMaxMsgSpoolUsage'))
        obj.replicationQueueMaxMsgSpoolUsage = ApiClient.convertToType(data['replicationQueueMaxMsgSpoolUsage'], 'Number');
      if (data.hasOwnProperty('replicationQueueRejectMsgToSenderOnDiscardEnabled'))
        obj.replicationQueueRejectMsgToSenderOnDiscardEnabled = ApiClient.convertToType(data['replicationQueueRejectMsgToSenderOnDiscardEnabled'], 'Boolean');
      if (data.hasOwnProperty('replicationRejectMsgWhenSyncIneligibleEnabled'))
        obj.replicationRejectMsgWhenSyncIneligibleEnabled = ApiClient.convertToType(data['replicationRejectMsgWhenSyncIneligibleEnabled'], 'Boolean');
      if (data.hasOwnProperty('replicationRole'))
        obj.replicationRole = ApiClient.convertToType(data['replicationRole'], 'String');
      if (data.hasOwnProperty('replicationTransactionMode'))
        obj.replicationTransactionMode = ApiClient.convertToType(data['replicationTransactionMode'], 'String');
      if (data.hasOwnProperty('restTlsServerCertEnforceTrustedCommonNameEnabled'))
        obj.restTlsServerCertEnforceTrustedCommonNameEnabled = ApiClient.convertToType(data['restTlsServerCertEnforceTrustedCommonNameEnabled'], 'Boolean');
      if (data.hasOwnProperty('restTlsServerCertMaxChainDepth'))
        obj.restTlsServerCertMaxChainDepth = ApiClient.convertToType(data['restTlsServerCertMaxChainDepth'], 'Number');
      if (data.hasOwnProperty('restTlsServerCertValidateDateEnabled'))
        obj.restTlsServerCertValidateDateEnabled = ApiClient.convertToType(data['restTlsServerCertValidateDateEnabled'], 'Boolean');
      if (data.hasOwnProperty('restTlsServerCertValidateNameEnabled'))
        obj.restTlsServerCertValidateNameEnabled = ApiClient.convertToType(data['restTlsServerCertValidateNameEnabled'], 'Boolean');
      if (data.hasOwnProperty('sempOverMsgBusAdminClientEnabled'))
        obj.sempOverMsgBusAdminClientEnabled = ApiClient.convertToType(data['sempOverMsgBusAdminClientEnabled'], 'Boolean');
      if (data.hasOwnProperty('sempOverMsgBusAdminDistributedCacheEnabled'))
        obj.sempOverMsgBusAdminDistributedCacheEnabled = ApiClient.convertToType(data['sempOverMsgBusAdminDistributedCacheEnabled'], 'Boolean');
      if (data.hasOwnProperty('sempOverMsgBusAdminEnabled'))
        obj.sempOverMsgBusAdminEnabled = ApiClient.convertToType(data['sempOverMsgBusAdminEnabled'], 'Boolean');
      if (data.hasOwnProperty('sempOverMsgBusEnabled'))
        obj.sempOverMsgBusEnabled = ApiClient.convertToType(data['sempOverMsgBusEnabled'], 'Boolean');
      if (data.hasOwnProperty('sempOverMsgBusShowEnabled'))
        obj.sempOverMsgBusShowEnabled = ApiClient.convertToType(data['sempOverMsgBusShowEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceAmqpMaxConnectionCount'))
        obj.serviceAmqpMaxConnectionCount = ApiClient.convertToType(data['serviceAmqpMaxConnectionCount'], 'Number');
      if (data.hasOwnProperty('serviceAmqpPlainTextEnabled'))
        obj.serviceAmqpPlainTextEnabled = ApiClient.convertToType(data['serviceAmqpPlainTextEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceAmqpPlainTextListenPort'))
        obj.serviceAmqpPlainTextListenPort = ApiClient.convertToType(data['serviceAmqpPlainTextListenPort'], 'Number');
      if (data.hasOwnProperty('serviceAmqpTlsEnabled'))
        obj.serviceAmqpTlsEnabled = ApiClient.convertToType(data['serviceAmqpTlsEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceAmqpTlsListenPort'))
        obj.serviceAmqpTlsListenPort = ApiClient.convertToType(data['serviceAmqpTlsListenPort'], 'Number');
      if (data.hasOwnProperty('serviceMqttAuthenticationClientCertRequest'))
        obj.serviceMqttAuthenticationClientCertRequest = ApiClient.convertToType(data['serviceMqttAuthenticationClientCertRequest'], 'String');
      if (data.hasOwnProperty('serviceMqttMaxConnectionCount'))
        obj.serviceMqttMaxConnectionCount = ApiClient.convertToType(data['serviceMqttMaxConnectionCount'], 'Number');
      if (data.hasOwnProperty('serviceMqttPlainTextEnabled'))
        obj.serviceMqttPlainTextEnabled = ApiClient.convertToType(data['serviceMqttPlainTextEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceMqttPlainTextListenPort'))
        obj.serviceMqttPlainTextListenPort = ApiClient.convertToType(data['serviceMqttPlainTextListenPort'], 'Number');
      if (data.hasOwnProperty('serviceMqttTlsEnabled'))
        obj.serviceMqttTlsEnabled = ApiClient.convertToType(data['serviceMqttTlsEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceMqttTlsListenPort'))
        obj.serviceMqttTlsListenPort = ApiClient.convertToType(data['serviceMqttTlsListenPort'], 'Number');
      if (data.hasOwnProperty('serviceMqttTlsWebSocketEnabled'))
        obj.serviceMqttTlsWebSocketEnabled = ApiClient.convertToType(data['serviceMqttTlsWebSocketEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceMqttTlsWebSocketListenPort'))
        obj.serviceMqttTlsWebSocketListenPort = ApiClient.convertToType(data['serviceMqttTlsWebSocketListenPort'], 'Number');
      if (data.hasOwnProperty('serviceMqttWebSocketEnabled'))
        obj.serviceMqttWebSocketEnabled = ApiClient.convertToType(data['serviceMqttWebSocketEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceMqttWebSocketListenPort'))
        obj.serviceMqttWebSocketListenPort = ApiClient.convertToType(data['serviceMqttWebSocketListenPort'], 'Number');
      if (data.hasOwnProperty('serviceRestIncomingAuthenticationClientCertRequest'))
        obj.serviceRestIncomingAuthenticationClientCertRequest = ApiClient.convertToType(data['serviceRestIncomingAuthenticationClientCertRequest'], 'String');
      if (data.hasOwnProperty('serviceRestIncomingAuthorizationHeaderHandling'))
        obj.serviceRestIncomingAuthorizationHeaderHandling = ApiClient.convertToType(data['serviceRestIncomingAuthorizationHeaderHandling'], 'String');
      if (data.hasOwnProperty('serviceRestIncomingMaxConnectionCount'))
        obj.serviceRestIncomingMaxConnectionCount = ApiClient.convertToType(data['serviceRestIncomingMaxConnectionCount'], 'Number');
      if (data.hasOwnProperty('serviceRestIncomingPlainTextEnabled'))
        obj.serviceRestIncomingPlainTextEnabled = ApiClient.convertToType(data['serviceRestIncomingPlainTextEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceRestIncomingPlainTextListenPort'))
        obj.serviceRestIncomingPlainTextListenPort = ApiClient.convertToType(data['serviceRestIncomingPlainTextListenPort'], 'Number');
      if (data.hasOwnProperty('serviceRestIncomingTlsEnabled'))
        obj.serviceRestIncomingTlsEnabled = ApiClient.convertToType(data['serviceRestIncomingTlsEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceRestIncomingTlsListenPort'))
        obj.serviceRestIncomingTlsListenPort = ApiClient.convertToType(data['serviceRestIncomingTlsListenPort'], 'Number');
      if (data.hasOwnProperty('serviceRestMode'))
        obj.serviceRestMode = ApiClient.convertToType(data['serviceRestMode'], 'String');
      if (data.hasOwnProperty('serviceRestOutgoingMaxConnectionCount'))
        obj.serviceRestOutgoingMaxConnectionCount = ApiClient.convertToType(data['serviceRestOutgoingMaxConnectionCount'], 'Number');
      if (data.hasOwnProperty('serviceSmfMaxConnectionCount'))
        obj.serviceSmfMaxConnectionCount = ApiClient.convertToType(data['serviceSmfMaxConnectionCount'], 'Number');
      if (data.hasOwnProperty('serviceSmfPlainTextEnabled'))
        obj.serviceSmfPlainTextEnabled = ApiClient.convertToType(data['serviceSmfPlainTextEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceSmfTlsEnabled'))
        obj.serviceSmfTlsEnabled = ApiClient.convertToType(data['serviceSmfTlsEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceWebAuthenticationClientCertRequest'))
        obj.serviceWebAuthenticationClientCertRequest = ApiClient.convertToType(data['serviceWebAuthenticationClientCertRequest'], 'String');
      if (data.hasOwnProperty('serviceWebMaxConnectionCount'))
        obj.serviceWebMaxConnectionCount = ApiClient.convertToType(data['serviceWebMaxConnectionCount'], 'Number');
      if (data.hasOwnProperty('serviceWebPlainTextEnabled'))
        obj.serviceWebPlainTextEnabled = ApiClient.convertToType(data['serviceWebPlainTextEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceWebTlsEnabled'))
        obj.serviceWebTlsEnabled = ApiClient.convertToType(data['serviceWebTlsEnabled'], 'Boolean');
      if (data.hasOwnProperty('tlsAllowDowngradeToPlainTextEnabled'))
        obj.tlsAllowDowngradeToPlainTextEnabled = ApiClient.convertToType(data['tlsAllowDowngradeToPlainTextEnabled'], 'Boolean');
    }
    return obj;
  }
}

/**
 * The name of another Message VPN which this Message VPN is an alias for. When this Message VPN is enabled, the alias has no effect. When this Message VPN is disabled, Clients (but not Bridges and routing Links) logging into this Message VPN are automatically logged in to the other Message VPN, and authentication and authorization take place in the context of the other Message VPN.  Aliases may form a non-circular chain, cascading one to the next. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"\"`. Available since 2.14.
 * @member {String} alias
 */
MsgVpnModel.prototype.alias = undefined;

/**
 * Enable or disable basic authentication for clients connecting to the Message VPN. Basic authentication is authentication that involves the use of a username and password to prove identity. If a user provides credentials for a different authentication scheme, this setting is not applicable. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
 * @member {Boolean} authenticationBasicEnabled
 */
MsgVpnModel.prototype.authenticationBasicEnabled = undefined;

/**
 * The name of the RADIUS or LDAP Profile to use for basic authentication. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"default\"`.
 * @member {String} authenticationBasicProfileName
 */
MsgVpnModel.prototype.authenticationBasicProfileName = undefined;

/**
 * The RADIUS domain to use for basic authentication. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"\"`.
 * @member {String} authenticationBasicRadiusDomain
 */
MsgVpnModel.prototype.authenticationBasicRadiusDomain = undefined;

/**
 * Allowed values for the <code>authenticationBasicType</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnModel.AuthenticationBasicTypeEnum = {
  /**
   * value: "internal"
   * @const
   */
  internal: "internal",

  /**
   * value: "ldap"
   * @const
   */
  ldap: "ldap",

  /**
   * value: "radius"
   * @const
   */
  radius: "radius",

  /**
   * value: "none"
   * @const
   */
  none: "none"
};
/**
 * The type of basic authentication to use for clients connecting to the Message VPN. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"radius\"`. The allowed values and their meaning are:  <pre> \"internal\" - Internal database. Authentication is against Client Usernames. \"ldap\" - LDAP authentication. An LDAP profile name must be provided. \"radius\" - RADIUS authentication. A RADIUS profile name must be provided. \"none\" - No authentication. Anonymous login allowed. </pre> 
 * @member {module:model/MsgVpnModel.AuthenticationBasicTypeEnum} authenticationBasicType
 */
MsgVpnModel.prototype.authenticationBasicType = undefined;

/**
 * Enable or disable allowing a client to specify a Client Username via the API connect method. When disabled, the certificate CN (Common Name) is always used. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
 * @member {Boolean} authenticationClientCertAllowApiProvidedUsernameEnabled
 */
MsgVpnModel.prototype.authenticationClientCertAllowApiProvidedUsernameEnabled = undefined;

/**
 * Enable or disable certificate matching rules. When disabled, any valid certificate is accepted. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since 2.27.
 * @member {Boolean} authenticationClientCertCertificateMatchingRulesEnabled
 */
MsgVpnModel.prototype.authenticationClientCertCertificateMatchingRulesEnabled = undefined;

/**
 * Enable or disable client certificate authentication in the Message VPN. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
 * @member {Boolean} authenticationClientCertEnabled
 */
MsgVpnModel.prototype.authenticationClientCertEnabled = undefined;

/**
 * The maximum depth for a client certificate chain. The depth of a chain is defined as the number of signing CA certificates that are present in the chain back to a trusted self-signed root CA certificate. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `3`.
 * @member {Number} authenticationClientCertMaxChainDepth
 */
MsgVpnModel.prototype.authenticationClientCertMaxChainDepth = undefined;

/**
 * Allowed values for the <code>authenticationClientCertRevocationCheckMode</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnModel.AuthenticationClientCertRevocationCheckModeEnum = {
  /**
   * value: "allow-all"
   * @const
   */
  all: "allow-all",

  /**
   * value: "allow-unknown"
   * @const
   */
  unknown: "allow-unknown",

  /**
   * value: "allow-valid"
   * @const
   */
  valid: "allow-valid"
};
/**
 * The desired behavior for client certificate revocation checking. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"allow-valid\"`. The allowed values and their meaning are:  <pre> \"allow-all\" - Allow the client to authenticate, the result of client certificate revocation check is ignored. \"allow-unknown\" - Allow the client to authenticate even if the revocation status of his certificate cannot be determined. \"allow-valid\" - Allow the client to authenticate only when the revocation check returned an explicit positive response. </pre>  Available since 2.6.
 * @member {module:model/MsgVpnModel.AuthenticationClientCertRevocationCheckModeEnum} authenticationClientCertRevocationCheckMode
 */
MsgVpnModel.prototype.authenticationClientCertRevocationCheckMode = undefined;

/**
 * Allowed values for the <code>authenticationClientCertUsernameSource</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnModel.AuthenticationClientCertUsernameSourceEnum = {
  /**
   * value: "certificate-thumbprint"
   * @const
   */
  certificateThumbprint: "certificate-thumbprint",

  /**
   * value: "common-name"
   * @const
   */
  commonName: "common-name",

  /**
   * value: "common-name-last"
   * @const
   */
  commonNameLast: "common-name-last",

  /**
   * value: "subject-alternate-name-msupn"
   * @const
   */
  subjectAlternateNameMsupn: "subject-alternate-name-msupn",

  /**
   * value: "uid"
   * @const
   */
  uid: "uid",

  /**
   * value: "uid-last"
   * @const
   */
  uidLast: "uid-last"
};
/**
 * The field from the client certificate to use as the client username. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"common-name\"`. The allowed values and their meaning are:  <pre> \"certificate-thumbprint\" - The username is computed as the SHA-1 hash over the entire DER-encoded contents of the client certificate. \"common-name\" - The username is extracted from the certificate's first instance of the Common Name attribute in the Subject DN. \"common-name-last\" - The username is extracted from the certificate's last instance of the Common Name attribute in the Subject DN. \"subject-alternate-name-msupn\" - The username is extracted from the certificate's Other Name type of the Subject Alternative Name and must have the msUPN signature. \"uid\" - The username is extracted from the certificate's first instance of the User Identifier attribute in the Subject DN. \"uid-last\" - The username is extracted from the certificate's last instance of the User Identifier attribute in the Subject DN. </pre>  Available since 2.6.
 * @member {module:model/MsgVpnModel.AuthenticationClientCertUsernameSourceEnum} authenticationClientCertUsernameSource
 */
MsgVpnModel.prototype.authenticationClientCertUsernameSource = undefined;

/**
 * Enable or disable validation of the \"Not Before\" and \"Not After\" validity dates in the client certificate. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
 * @member {Boolean} authenticationClientCertValidateDateEnabled
 */
MsgVpnModel.prototype.authenticationClientCertValidateDateEnabled = undefined;

/**
 * Enable or disable allowing a client to specify a Client Username via the API connect method. When disabled, the Kerberos Principal name is always used. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
 * @member {Boolean} authenticationKerberosAllowApiProvidedUsernameEnabled
 */
MsgVpnModel.prototype.authenticationKerberosAllowApiProvidedUsernameEnabled = undefined;

/**
 * Enable or disable Kerberos authentication in the Message VPN. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
 * @member {Boolean} authenticationKerberosEnabled
 */
MsgVpnModel.prototype.authenticationKerberosEnabled = undefined;

/**
 * The name of the profile to use when the client does not supply a profile name. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"\"`. Available since 2.25.
 * @member {String} authenticationOauthDefaultProfileName
 */
MsgVpnModel.prototype.authenticationOauthDefaultProfileName = undefined;

/**
 * The name of the provider to use when the client does not supply a provider name. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"\"`. Deprecated since 2.25. authenticationOauthDefaultProviderName and authenticationOauthProviders replaced by authenticationOauthDefaultProfileName and authenticationOauthProfiles.
 * @member {String} authenticationOauthDefaultProviderName
 */
MsgVpnModel.prototype.authenticationOauthDefaultProviderName = undefined;

/**
 * Enable or disable OAuth authentication. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since 2.13.
 * @member {Boolean} authenticationOauthEnabled
 */
MsgVpnModel.prototype.authenticationOauthEnabled = undefined;

/**
 * The name of the attribute that is retrieved from the LDAP server as part of the LDAP search when authorizing a client connecting to the Message VPN. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"memberOf\"`.
 * @member {String} authorizationLdapGroupMembershipAttributeName
 */
MsgVpnModel.prototype.authorizationLdapGroupMembershipAttributeName = undefined;

/**
 * Enable or disable client-username domain trimming for LDAP lookups of client connections. When enabled, the value of $CLIENT_USERNAME (when used for searching) will be truncated at the first occurrence of the @ character. For example, if the client-username is in the form of an email address, then the domain portion will be removed. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since 2.13.
 * @member {Boolean} authorizationLdapTrimClientUsernameDomainEnabled
 */
MsgVpnModel.prototype.authorizationLdapTrimClientUsernameDomainEnabled = undefined;

/**
 * The name of the LDAP Profile to use for client authorization. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"\"`.
 * @member {String} authorizationProfileName
 */
MsgVpnModel.prototype.authorizationProfileName = undefined;

/**
 * Allowed values for the <code>authorizationType</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnModel.AuthorizationTypeEnum = {
  /**
   * value: "ldap"
   * @const
   */
  ldap: "ldap",

  /**
   * value: "internal"
   * @const
   */
  internal: "internal"
};
/**
 * The type of authorization to use for clients connecting to the Message VPN. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"internal\"`. The allowed values and their meaning are:  <pre> \"ldap\" - LDAP authorization. \"internal\" - Internal authorization. </pre> 
 * @member {module:model/MsgVpnModel.AuthorizationTypeEnum} authorizationType
 */
MsgVpnModel.prototype.authorizationType = undefined;

/**
 * Enable or disable validation of the Common Name (CN) in the server certificate from the remote broker. If enabled, the Common Name is checked against the list of Trusted Common Names configured for the Bridge. Common Name validation is not performed if Server Certificate Name Validation is enabled, even if Common Name validation is enabled. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Deprecated since 2.18. Common Name validation has been replaced by Server Certificate Name validation.
 * @member {Boolean} bridgingTlsServerCertEnforceTrustedCommonNameEnabled
 */
MsgVpnModel.prototype.bridgingTlsServerCertEnforceTrustedCommonNameEnabled = undefined;

/**
 * The maximum depth for a server certificate chain. The depth of a chain is defined as the number of signing CA certificates that are present in the chain back to a trusted self-signed root CA certificate. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `3`.
 * @member {Number} bridgingTlsServerCertMaxChainDepth
 */
MsgVpnModel.prototype.bridgingTlsServerCertMaxChainDepth = undefined;

/**
 * Enable or disable validation of the \"Not Before\" and \"Not After\" validity dates in the server certificate. When disabled, a certificate will be accepted even if the certificate is not valid based on these dates. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
 * @member {Boolean} bridgingTlsServerCertValidateDateEnabled
 */
MsgVpnModel.prototype.bridgingTlsServerCertValidateDateEnabled = undefined;

/**
 * Enable or disable the standard TLS authentication mechanism of verifying the name used to connect to the bridge. If enabled, the name used to connect to the bridge is checked against the names specified in the certificate returned by the remote broker. Legacy Common Name validation is not performed if Server Certificate Name Validation is enabled, even if Common Name validation is also enabled. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`. Available since 2.18.
 * @member {Boolean} bridgingTlsServerCertValidateNameEnabled
 */
MsgVpnModel.prototype.bridgingTlsServerCertValidateNameEnabled = undefined;

/**
 * Enable or disable managing of cache instances over the message bus. The default value is `true`. Deprecated since 2.28. Distributed cache management is now redundancy aware and thus no longer requires administrative intervention for operational state.
 * @member {Boolean} distributedCacheManagementEnabled
 */
MsgVpnModel.prototype.distributedCacheManagementEnabled = undefined;

/**
 * Enable or disable Dynamic Message Routing (DMR) for the Message VPN. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since 2.11.
 * @member {Boolean} dmrEnabled
 */
MsgVpnModel.prototype.dmrEnabled = undefined;

/**
 * Enable or disable the Message VPN. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
 * @member {Boolean} enabled
 */
MsgVpnModel.prototype.enabled = undefined;

/**
 * @member {module:model/EventThresholdModel} eventConnectionCountThreshold
 */
MsgVpnModel.prototype.eventConnectionCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventEgressFlowCountThreshold
 */
MsgVpnModel.prototype.eventEgressFlowCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdByValueModel} eventEgressMsgRateThreshold
 */
MsgVpnModel.prototype.eventEgressMsgRateThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventEndpointCountThreshold
 */
MsgVpnModel.prototype.eventEndpointCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventIngressFlowCountThreshold
 */
MsgVpnModel.prototype.eventIngressFlowCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdByValueModel} eventIngressMsgRateThreshold
 */
MsgVpnModel.prototype.eventIngressMsgRateThreshold = undefined;

/**
 * The threshold, in kilobytes, after which a message is considered to be large for the Message VPN. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1024`.
 * @member {Number} eventLargeMsgThreshold
 */
MsgVpnModel.prototype.eventLargeMsgThreshold = undefined;

/**
 * A prefix applied to all published Events in the Message VPN. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"\"`.
 * @member {String} eventLogTag
 */
MsgVpnModel.prototype.eventLogTag = undefined;

/**
 * @member {module:model/EventThresholdModel} eventMsgSpoolUsageThreshold
 */
MsgVpnModel.prototype.eventMsgSpoolUsageThreshold = undefined;

/**
 * Enable or disable Client level Event message publishing. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
 * @member {Boolean} eventPublishClientEnabled
 */
MsgVpnModel.prototype.eventPublishClientEnabled = undefined;

/**
 * Enable or disable Message VPN level Event message publishing. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
 * @member {Boolean} eventPublishMsgVpnEnabled
 */
MsgVpnModel.prototype.eventPublishMsgVpnEnabled = undefined;

/**
 * Allowed values for the <code>eventPublishSubscriptionMode</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnModel.EventPublishSubscriptionModeEnum = {
  /**
   * value: "off"
   * @const
   */
  off: "off",

  /**
   * value: "on-with-format-v1"
   * @const
   */
  onWithFormatV1: "on-with-format-v1",

  /**
   * value: "on-with-no-unsubscribe-events-on-disconnect-format-v1"
   * @const
   */
  onWithNoUnsubscribeEventsOnDisconnectFormatV1: "on-with-no-unsubscribe-events-on-disconnect-format-v1",

  /**
   * value: "on-with-format-v2"
   * @const
   */
  onWithFormatV2: "on-with-format-v2",

  /**
   * value: "on-with-no-unsubscribe-events-on-disconnect-format-v2"
   * @const
   */
  onWithNoUnsubscribeEventsOnDisconnectFormatV2: "on-with-no-unsubscribe-events-on-disconnect-format-v2"
};
/**
 * Subscription level Event message publishing mode. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"off\"`. The allowed values and their meaning are:  <pre> \"off\" - Disable client level event message publishing. \"on-with-format-v1\" - Enable client level event message publishing with format v1. \"on-with-no-unsubscribe-events-on-disconnect-format-v1\" - As \"on-with-format-v1\", but unsubscribe events are not generated when a client disconnects. Unsubscribe events are still raised when a client explicitly unsubscribes from its subscriptions. \"on-with-format-v2\" - Enable client level event message publishing with format v2. \"on-with-no-unsubscribe-events-on-disconnect-format-v2\" - As \"on-with-format-v2\", but unsubscribe events are not generated when a client disconnects. Unsubscribe events are still raised when a client explicitly unsubscribes from its subscriptions. </pre> 
 * @member {module:model/MsgVpnModel.EventPublishSubscriptionModeEnum} eventPublishSubscriptionMode
 */
MsgVpnModel.prototype.eventPublishSubscriptionMode = undefined;

/**
 * Enable or disable Event publish topics in MQTT format. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
 * @member {Boolean} eventPublishTopicFormatMqttEnabled
 */
MsgVpnModel.prototype.eventPublishTopicFormatMqttEnabled = undefined;

/**
 * Enable or disable Event publish topics in SMF format. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
 * @member {Boolean} eventPublishTopicFormatSmfEnabled
 */
MsgVpnModel.prototype.eventPublishTopicFormatSmfEnabled = undefined;

/**
 * @member {module:model/EventThresholdModel} eventServiceAmqpConnectionCountThreshold
 */
MsgVpnModel.prototype.eventServiceAmqpConnectionCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventServiceMqttConnectionCountThreshold
 */
MsgVpnModel.prototype.eventServiceMqttConnectionCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventServiceRestIncomingConnectionCountThreshold
 */
MsgVpnModel.prototype.eventServiceRestIncomingConnectionCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventServiceSmfConnectionCountThreshold
 */
MsgVpnModel.prototype.eventServiceSmfConnectionCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventServiceWebConnectionCountThreshold
 */
MsgVpnModel.prototype.eventServiceWebConnectionCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventSubscriptionCountThreshold
 */
MsgVpnModel.prototype.eventSubscriptionCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventTransactedSessionCountThreshold
 */
MsgVpnModel.prototype.eventTransactedSessionCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventTransactionCountThreshold
 */
MsgVpnModel.prototype.eventTransactionCountThreshold = undefined;

/**
 * Enable or disable the export of subscriptions in the Message VPN to other routers in the network over Neighbor links. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
 * @member {Boolean} exportSubscriptionsEnabled
 */
MsgVpnModel.prototype.exportSubscriptionsEnabled = undefined;

/**
 * Enable or disable JNDI access for clients in the Message VPN. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since 2.2.
 * @member {Boolean} jndiEnabled
 */
MsgVpnModel.prototype.jndiEnabled = undefined;

/**
 * The maximum number of client connections to the Message VPN. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is the maximum value supported by the platform.
 * @member {Number} maxConnectionCount
 */
MsgVpnModel.prototype.maxConnectionCount = undefined;

/**
 * The maximum number of transmit flows that can be created in the Message VPN. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1000`.
 * @member {Number} maxEgressFlowCount
 */
MsgVpnModel.prototype.maxEgressFlowCount = undefined;

/**
 * The maximum number of Queues and Topic Endpoints that can be created in the Message VPN. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1000`.
 * @member {Number} maxEndpointCount
 */
MsgVpnModel.prototype.maxEndpointCount = undefined;

/**
 * The maximum number of receive flows that can be created in the Message VPN. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1000`.
 * @member {Number} maxIngressFlowCount
 */
MsgVpnModel.prototype.maxIngressFlowCount = undefined;

/**
 * The maximum message spool usage by the Message VPN, in megabytes. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`.
 * @member {Number} maxMsgSpoolUsage
 */
MsgVpnModel.prototype.maxMsgSpoolUsage = undefined;

/**
 * The maximum number of local client subscriptions that can be added to the Message VPN. This limit is not enforced when a subscription is added using a management interface, such as CLI or SEMP. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default varies by platform.
 * @member {Number} maxSubscriptionCount
 */
MsgVpnModel.prototype.maxSubscriptionCount = undefined;

/**
 * The maximum number of transacted sessions that can be created in the Message VPN. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default varies by platform.
 * @member {Number} maxTransactedSessionCount
 */
MsgVpnModel.prototype.maxTransactedSessionCount = undefined;

/**
 * The maximum number of transactions that can be created in the Message VPN. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default varies by platform.
 * @member {Number} maxTransactionCount
 */
MsgVpnModel.prototype.maxTransactionCount = undefined;

/**
 * The maximum total memory usage of the MQTT Retain feature for this Message VPN, in MB. If the maximum memory is reached, any arriving retain messages that require more memory are discarded. A value of -1 indicates that the memory is bounded only by the global max memory limit. A value of 0 prevents MQTT Retain from becoming operational. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `-1`. Available since 2.11.
 * @member {Number} mqttRetainMaxMemory
 */
MsgVpnModel.prototype.mqttRetainMaxMemory = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnModel.prototype.msgVpnName = undefined;

/**
 * The acknowledgment (ACK) propagation interval for the replication Bridge, in number of replicated messages. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `20`.
 * @member {Number} replicationAckPropagationIntervalMsgCount
 */
MsgVpnModel.prototype.replicationAckPropagationIntervalMsgCount = undefined;

/**
 * The Client Username the replication Bridge uses to login to the remote Message VPN. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `\"\"`.
 * @member {String} replicationBridgeAuthenticationBasicClientUsername
 */
MsgVpnModel.prototype.replicationBridgeAuthenticationBasicClientUsername = undefined;

/**
 * The password for the Client Username. This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions in note 4. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `\"\"`.
 * @member {String} replicationBridgeAuthenticationBasicPassword
 */
MsgVpnModel.prototype.replicationBridgeAuthenticationBasicPassword = undefined;

/**
 * The PEM formatted content for the client certificate used by this bridge to login to the Remote Message VPN. It must consist of a private key and between one and three certificates comprising the certificate trust chain. This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions in note 4. The default value is `\"\"`. Available since 2.9.
 * @member {String} replicationBridgeAuthenticationClientCertContent
 */
MsgVpnModel.prototype.replicationBridgeAuthenticationClientCertContent = undefined;

/**
 * The password for the client certificate. This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions in note 4. The default value is `\"\"`. Available since 2.9.
 * @member {String} replicationBridgeAuthenticationClientCertPassword
 */
MsgVpnModel.prototype.replicationBridgeAuthenticationClientCertPassword = undefined;

/**
 * Allowed values for the <code>replicationBridgeAuthenticationScheme</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnModel.ReplicationBridgeAuthenticationSchemeEnum = {
  /**
   * value: "basic"
   * @const
   */
  basic: "basic",

  /**
   * value: "client-certificate"
   * @const
   */
  clientCertificate: "client-certificate"
};
/**
 * The authentication scheme for the replication Bridge in the Message VPN. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `\"basic\"`. The allowed values and their meaning are:  <pre> \"basic\" - Basic Authentication Scheme (via username and password). \"client-certificate\" - Client Certificate Authentication Scheme (via certificate file or content). </pre> 
 * @member {module:model/MsgVpnModel.ReplicationBridgeAuthenticationSchemeEnum} replicationBridgeAuthenticationScheme
 */
MsgVpnModel.prototype.replicationBridgeAuthenticationScheme = undefined;

/**
 * Enable or disable use of compression for the replication Bridge. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `false`.
 * @member {Boolean} replicationBridgeCompressedDataEnabled
 */
MsgVpnModel.prototype.replicationBridgeCompressedDataEnabled = undefined;

/**
 * The size of the window used for guaranteed messages published to the replication Bridge, in messages. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `255`.
 * @member {Number} replicationBridgeEgressFlowWindowSize
 */
MsgVpnModel.prototype.replicationBridgeEgressFlowWindowSize = undefined;

/**
 * The number of seconds that must pass before retrying the replication Bridge connection. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `3`.
 * @member {Number} replicationBridgeRetryDelay
 */
MsgVpnModel.prototype.replicationBridgeRetryDelay = undefined;

/**
 * Enable or disable use of encryption (TLS) for the replication Bridge connection. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `false`.
 * @member {Boolean} replicationBridgeTlsEnabled
 */
MsgVpnModel.prototype.replicationBridgeTlsEnabled = undefined;

/**
 * The Client Profile for the unidirectional replication Bridge in the Message VPN. It is used only for the TCP parameters. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"#client-profile\"`.
 * @member {String} replicationBridgeUnidirectionalClientProfileName
 */
MsgVpnModel.prototype.replicationBridgeUnidirectionalClientProfileName = undefined;

/**
 * Enable or disable replication for the Message VPN. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `false`.
 * @member {Boolean} replicationEnabled
 */
MsgVpnModel.prototype.replicationEnabled = undefined;

/**
 * Allowed values for the <code>replicationEnabledQueueBehavior</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnModel.ReplicationEnabledQueueBehaviorEnum = {
  /**
   * value: "fail-on-existing-queue"
   * @const
   */
  failOnExistingQueue: "fail-on-existing-queue",

  /**
   * value: "force-use-existing-queue"
   * @const
   */
  forceUseExistingQueue: "force-use-existing-queue",

  /**
   * value: "force-recreate-queue"
   * @const
   */
  forceRecreateQueue: "force-recreate-queue"
};
/**
 * The behavior to take when enabling replication for the Message VPN, depending on the existence of the replication Queue. This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions in note 4. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `\"fail-on-existing-queue\"`. The allowed values and their meaning are:  <pre> \"fail-on-existing-queue\" - The data replication queue must not already exist. \"force-use-existing-queue\" - The data replication queue must already exist. Any data messages on the Queue will be forwarded to interested applications. IMPORTANT: Before using this mode be certain that the messages are not stale or otherwise unsuitable to be forwarded. This mode can only be specified when the existing queue is configured the same as is currently specified under replication configuration otherwise the enabling of replication will fail. \"force-recreate-queue\" - The data replication queue must already exist. Any data messages on the Queue will be discarded. IMPORTANT: Before using this mode be certain that the messages on the existing data replication queue are not needed by interested applications. </pre> 
 * @member {module:model/MsgVpnModel.ReplicationEnabledQueueBehaviorEnum} replicationEnabledQueueBehavior
 */
MsgVpnModel.prototype.replicationEnabledQueueBehavior = undefined;

/**
 * The maximum message spool usage by the replication Bridge local Queue (quota), in megabytes. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `60000`.
 * @member {Number} replicationQueueMaxMsgSpoolUsage
 */
MsgVpnModel.prototype.replicationQueueMaxMsgSpoolUsage = undefined;

/**
 * Enable or disable whether messages discarded on the replication Bridge local Queue are rejected back to the sender. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
 * @member {Boolean} replicationQueueRejectMsgToSenderOnDiscardEnabled
 */
MsgVpnModel.prototype.replicationQueueRejectMsgToSenderOnDiscardEnabled = undefined;

/**
 * Enable or disable whether guaranteed messages published to synchronously replicated Topics are rejected back to the sender when synchronous replication becomes ineligible. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
 * @member {Boolean} replicationRejectMsgWhenSyncIneligibleEnabled
 */
MsgVpnModel.prototype.replicationRejectMsgWhenSyncIneligibleEnabled = undefined;

/**
 * Allowed values for the <code>replicationRole</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnModel.ReplicationRoleEnum = {
  /**
   * value: "active"
   * @const
   */
  active: "active",

  /**
   * value: "standby"
   * @const
   */
  standby: "standby"
};
/**
 * The replication role for the Message VPN. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `\"standby\"`. The allowed values and their meaning are:  <pre> \"active\" - Assume the Active role in replication for the Message VPN. \"standby\" - Assume the Standby role in replication for the Message VPN. </pre> 
 * @member {module:model/MsgVpnModel.ReplicationRoleEnum} replicationRole
 */
MsgVpnModel.prototype.replicationRole = undefined;

/**
 * Allowed values for the <code>replicationTransactionMode</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnModel.ReplicationTransactionModeEnum = {
  /**
   * value: "sync"
   * @const
   */
  sync: "sync",

  /**
   * value: "async"
   * @const
   */
  async: "async"
};
/**
 * The transaction replication mode for all transactions within the Message VPN. Changing this value during operation will not affect existing transactions; it is only used upon starting a transaction. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"async\"`. The allowed values and their meaning are:  <pre> \"sync\" - Messages are acknowledged when replicated (spooled remotely). \"async\" - Messages are acknowledged when pending replication (spooled locally). </pre> 
 * @member {module:model/MsgVpnModel.ReplicationTransactionModeEnum} replicationTransactionMode
 */
MsgVpnModel.prototype.replicationTransactionMode = undefined;

/**
 * Enable or disable validation of the Common Name (CN) in the server certificate from the remote REST Consumer. If enabled, the Common Name is checked against the list of Trusted Common Names configured for the REST Consumer. Common Name validation is not performed if Server Certificate Name Validation is enabled, even if Common Name validation is enabled. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Deprecated since 2.17. Common Name validation has been replaced by Server Certificate Name validation.
 * @member {Boolean} restTlsServerCertEnforceTrustedCommonNameEnabled
 */
MsgVpnModel.prototype.restTlsServerCertEnforceTrustedCommonNameEnabled = undefined;

/**
 * The maximum depth for a REST Consumer server certificate chain. The depth of a chain is defined as the number of signing CA certificates that are present in the chain back to a trusted self-signed root CA certificate. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `3`.
 * @member {Number} restTlsServerCertMaxChainDepth
 */
MsgVpnModel.prototype.restTlsServerCertMaxChainDepth = undefined;

/**
 * Enable or disable validation of the \"Not Before\" and \"Not After\" validity dates in the REST Consumer server certificate. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
 * @member {Boolean} restTlsServerCertValidateDateEnabled
 */
MsgVpnModel.prototype.restTlsServerCertValidateDateEnabled = undefined;

/**
 * Enable or disable the standard TLS authentication mechanism of verifying the name used to connect to the remote REST Consumer. If enabled, the name used to connect to the remote REST Consumer is checked against the names specified in the certificate returned by the remote broker. Legacy Common Name validation is not performed if Server Certificate Name Validation is enabled, even if Common Name validation is also enabled. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`. Available since 2.17.
 * @member {Boolean} restTlsServerCertValidateNameEnabled
 */
MsgVpnModel.prototype.restTlsServerCertValidateNameEnabled = undefined;

/**
 * Enable or disable \"admin client\" SEMP over the message bus commands for the current Message VPN. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
 * @member {Boolean} sempOverMsgBusAdminClientEnabled
 */
MsgVpnModel.prototype.sempOverMsgBusAdminClientEnabled = undefined;

/**
 * Enable or disable \"admin distributed-cache\" SEMP over the message bus commands for the current Message VPN. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
 * @member {Boolean} sempOverMsgBusAdminDistributedCacheEnabled
 */
MsgVpnModel.prototype.sempOverMsgBusAdminDistributedCacheEnabled = undefined;

/**
 * Enable or disable \"admin\" SEMP over the message bus commands for the current Message VPN. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
 * @member {Boolean} sempOverMsgBusAdminEnabled
 */
MsgVpnModel.prototype.sempOverMsgBusAdminEnabled = undefined;

/**
 * Enable or disable SEMP over the message bus for the current Message VPN. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
 * @member {Boolean} sempOverMsgBusEnabled
 */
MsgVpnModel.prototype.sempOverMsgBusEnabled = undefined;

/**
 * Enable or disable \"show\" SEMP over the message bus commands for the current Message VPN. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
 * @member {Boolean} sempOverMsgBusShowEnabled
 */
MsgVpnModel.prototype.sempOverMsgBusShowEnabled = undefined;

/**
 * The maximum number of AMQP client connections that can be simultaneously connected to the Message VPN. This value may be higher than supported by the platform. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is the maximum value supported by the platform. Available since 2.7.
 * @member {Number} serviceAmqpMaxConnectionCount
 */
MsgVpnModel.prototype.serviceAmqpMaxConnectionCount = undefined;

/**
 * Enable or disable the plain-text AMQP service in the Message VPN. Disabling causes clients connected to the corresponding listen-port to be disconnected. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since 2.7.
 * @member {Boolean} serviceAmqpPlainTextEnabled
 */
MsgVpnModel.prototype.serviceAmqpPlainTextEnabled = undefined;

/**
 * The port number for plain-text AMQP clients that connect to the Message VPN. The port must be unique across the message backbone. A value of 0 means that the listen-port is unassigned and cannot be enabled. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as serviceAmqpPlainTextEnabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`. Available since 2.7.
 * @member {Number} serviceAmqpPlainTextListenPort
 */
MsgVpnModel.prototype.serviceAmqpPlainTextListenPort = undefined;

/**
 * Enable or disable the use of encryption (TLS) for the AMQP service in the Message VPN. Disabling causes clients currently connected over TLS to be disconnected. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since 2.7.
 * @member {Boolean} serviceAmqpTlsEnabled
 */
MsgVpnModel.prototype.serviceAmqpTlsEnabled = undefined;

/**
 * The port number for AMQP clients that connect to the Message VPN over TLS. The port must be unique across the message backbone. A value of 0 means that the listen-port is unassigned and cannot be enabled. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as serviceAmqpTlsEnabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`. Available since 2.7.
 * @member {Number} serviceAmqpTlsListenPort
 */
MsgVpnModel.prototype.serviceAmqpTlsListenPort = undefined;

/**
 * Allowed values for the <code>serviceMqttAuthenticationClientCertRequest</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnModel.ServiceMqttAuthenticationClientCertRequestEnum = {
  /**
   * value: "always"
   * @const
   */
  always: "always",

  /**
   * value: "never"
   * @const
   */
  never: "never",

  /**
   * value: "when-enabled-in-message-vpn"
   * @const
   */
  whenEnabledInMessageVpn: "when-enabled-in-message-vpn"
};
/**
 * Determines when to request a client certificate from an incoming MQTT client connecting via a TLS port. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"when-enabled-in-message-vpn\"`. The allowed values and their meaning are:  <pre> \"always\" - Always ask for a client certificate regardless of the \"message-vpn > authentication > client-certificate > shutdown\" configuration. \"never\" - Never ask for a client certificate regardless of the \"message-vpn > authentication > client-certificate > shutdown\" configuration. \"when-enabled-in-message-vpn\" - Only ask for a client-certificate if client certificate authentication is enabled under \"message-vpn >  authentication > client-certificate > shutdown\". </pre>  Available since 2.21.
 * @member {module:model/MsgVpnModel.ServiceMqttAuthenticationClientCertRequestEnum} serviceMqttAuthenticationClientCertRequest
 */
MsgVpnModel.prototype.serviceMqttAuthenticationClientCertRequest = undefined;

/**
 * The maximum number of MQTT client connections that can be simultaneously connected to the Message VPN. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is the maximum value supported by the platform. Available since 2.1.
 * @member {Number} serviceMqttMaxConnectionCount
 */
MsgVpnModel.prototype.serviceMqttMaxConnectionCount = undefined;

/**
 * Enable or disable the plain-text MQTT service in the Message VPN. Disabling causes clients currently connected to be disconnected. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since 2.1.
 * @member {Boolean} serviceMqttPlainTextEnabled
 */
MsgVpnModel.prototype.serviceMqttPlainTextEnabled = undefined;

/**
 * The port number for plain-text MQTT clients that connect to the Message VPN. The port must be unique across the message backbone. A value of 0 means that the listen-port is unassigned and cannot be enabled. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as serviceMqttPlainTextEnabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`. Available since 2.1.
 * @member {Number} serviceMqttPlainTextListenPort
 */
MsgVpnModel.prototype.serviceMqttPlainTextListenPort = undefined;

/**
 * Enable or disable the use of encryption (TLS) for the MQTT service in the Message VPN. Disabling causes clients currently connected over TLS to be disconnected. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since 2.1.
 * @member {Boolean} serviceMqttTlsEnabled
 */
MsgVpnModel.prototype.serviceMqttTlsEnabled = undefined;

/**
 * The port number for MQTT clients that connect to the Message VPN over TLS. The port must be unique across the message backbone. A value of 0 means that the listen-port is unassigned and cannot be enabled. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as serviceMqttTlsEnabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`. Available since 2.1.
 * @member {Number} serviceMqttTlsListenPort
 */
MsgVpnModel.prototype.serviceMqttTlsListenPort = undefined;

/**
 * Enable or disable the use of encrypted WebSocket (WebSocket over TLS) for the MQTT service in the Message VPN. Disabling causes clients currently connected by encrypted WebSocket to be disconnected. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since 2.1.
 * @member {Boolean} serviceMqttTlsWebSocketEnabled
 */
MsgVpnModel.prototype.serviceMqttTlsWebSocketEnabled = undefined;

/**
 * The port number for MQTT clients that connect to the Message VPN using WebSocket over TLS. The port must be unique across the message backbone. A value of 0 means that the listen-port is unassigned and cannot be enabled. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as serviceMqttTlsWebSocketEnabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`. Available since 2.1.
 * @member {Number} serviceMqttTlsWebSocketListenPort
 */
MsgVpnModel.prototype.serviceMqttTlsWebSocketListenPort = undefined;

/**
 * Enable or disable the use of WebSocket for the MQTT service in the Message VPN. Disabling causes clients currently connected by WebSocket to be disconnected. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since 2.1.
 * @member {Boolean} serviceMqttWebSocketEnabled
 */
MsgVpnModel.prototype.serviceMqttWebSocketEnabled = undefined;

/**
 * The port number for plain-text MQTT clients that connect to the Message VPN using WebSocket. The port must be unique across the message backbone. A value of 0 means that the listen-port is unassigned and cannot be enabled. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as serviceMqttWebSocketEnabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`. Available since 2.1.
 * @member {Number} serviceMqttWebSocketListenPort
 */
MsgVpnModel.prototype.serviceMqttWebSocketListenPort = undefined;

/**
 * Allowed values for the <code>serviceRestIncomingAuthenticationClientCertRequest</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnModel.ServiceRestIncomingAuthenticationClientCertRequestEnum = {
  /**
   * value: "always"
   * @const
   */
  always: "always",

  /**
   * value: "never"
   * @const
   */
  never: "never",

  /**
   * value: "when-enabled-in-message-vpn"
   * @const
   */
  whenEnabledInMessageVpn: "when-enabled-in-message-vpn"
};
/**
 * Determines when to request a client certificate from an incoming REST Producer connecting via a TLS port. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"when-enabled-in-message-vpn\"`. The allowed values and their meaning are:  <pre> \"always\" - Always ask for a client certificate regardless of the \"message-vpn > authentication > client-certificate > shutdown\" configuration. \"never\" - Never ask for a client certificate regardless of the \"message-vpn > authentication > client-certificate > shutdown\" configuration. \"when-enabled-in-message-vpn\" - Only ask for a client-certificate if client certificate authentication is enabled under \"message-vpn >  authentication > client-certificate > shutdown\". </pre>  Available since 2.21.
 * @member {module:model/MsgVpnModel.ServiceRestIncomingAuthenticationClientCertRequestEnum} serviceRestIncomingAuthenticationClientCertRequest
 */
MsgVpnModel.prototype.serviceRestIncomingAuthenticationClientCertRequest = undefined;

/**
 * Allowed values for the <code>serviceRestIncomingAuthorizationHeaderHandling</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnModel.ServiceRestIncomingAuthorizationHeaderHandlingEnum = {
  /**
   * value: "drop"
   * @const
   */
  drop: "drop",

  /**
   * value: "forward"
   * @const
   */
  forward: "forward",

  /**
   * value: "legacy"
   * @const
   */
  legacy: "legacy"
};
/**
 * The handling of Authorization headers for incoming REST connections. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"drop\"`. The allowed values and their meaning are:  <pre> \"drop\" - Do not attach the Authorization header to the message as a user property. This configuration is most secure. \"forward\" - Forward the Authorization header, attaching it to the message as a user property in the same way as other headers. For best security, use the drop setting. \"legacy\" - If the Authorization header was used for authentication to the broker, do not attach it to the message. If the Authorization header was not used for authentication to the broker, attach it to the message as a user property in the same way as other headers. For best security, use the drop setting. </pre>  Available since 2.19.
 * @member {module:model/MsgVpnModel.ServiceRestIncomingAuthorizationHeaderHandlingEnum} serviceRestIncomingAuthorizationHeaderHandling
 */
MsgVpnModel.prototype.serviceRestIncomingAuthorizationHeaderHandling = undefined;

/**
 * The maximum number of REST incoming client connections that can be simultaneously connected to the Message VPN. This value may be higher than supported by the platform. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is the maximum value supported by the platform.
 * @member {Number} serviceRestIncomingMaxConnectionCount
 */
MsgVpnModel.prototype.serviceRestIncomingMaxConnectionCount = undefined;

/**
 * Enable or disable the plain-text REST service for incoming clients in the Message VPN. Disabling causes clients currently connected to be disconnected. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
 * @member {Boolean} serviceRestIncomingPlainTextEnabled
 */
MsgVpnModel.prototype.serviceRestIncomingPlainTextEnabled = undefined;

/**
 * The port number for incoming plain-text REST clients that connect to the Message VPN. The port must be unique across the message backbone. A value of 0 means that the listen-port is unassigned and cannot be enabled. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as serviceRestIncomingPlainTextEnabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`.
 * @member {Number} serviceRestIncomingPlainTextListenPort
 */
MsgVpnModel.prototype.serviceRestIncomingPlainTextListenPort = undefined;

/**
 * Enable or disable the use of encryption (TLS) for the REST service for incoming clients in the Message VPN. Disabling causes clients currently connected over TLS to be disconnected. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
 * @member {Boolean} serviceRestIncomingTlsEnabled
 */
MsgVpnModel.prototype.serviceRestIncomingTlsEnabled = undefined;

/**
 * The port number for incoming REST clients that connect to the Message VPN over TLS. The port must be unique across the message backbone. A value of 0 means that the listen-port is unassigned and cannot be enabled. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as serviceRestIncomingTlsEnabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`.
 * @member {Number} serviceRestIncomingTlsListenPort
 */
MsgVpnModel.prototype.serviceRestIncomingTlsListenPort = undefined;

/**
 * Allowed values for the <code>serviceRestMode</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnModel.ServiceRestModeEnum = {
  /**
   * value: "gateway"
   * @const
   */
  gateway: "gateway",

  /**
   * value: "messaging"
   * @const
   */
  messaging: "messaging"
};
/**
 * The REST service mode for incoming REST clients that connect to the Message VPN. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"messaging\"`. The allowed values and their meaning are:  <pre> \"gateway\" - Act as a message gateway through which REST messages are propagated. \"messaging\" - Act as a message broker on which REST messages are queued. </pre>  Available since 2.6.
 * @member {module:model/MsgVpnModel.ServiceRestModeEnum} serviceRestMode
 */
MsgVpnModel.prototype.serviceRestMode = undefined;

/**
 * The maximum number of REST Consumer (outgoing) client connections that can be simultaneously connected to the Message VPN. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default varies by platform.
 * @member {Number} serviceRestOutgoingMaxConnectionCount
 */
MsgVpnModel.prototype.serviceRestOutgoingMaxConnectionCount = undefined;

/**
 * The maximum number of SMF client connections that can be simultaneously connected to the Message VPN. This value may be higher than supported by the platform. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default varies by platform.
 * @member {Number} serviceSmfMaxConnectionCount
 */
MsgVpnModel.prototype.serviceSmfMaxConnectionCount = undefined;

/**
 * Enable or disable the plain-text SMF service in the Message VPN. Disabling causes clients currently connected to be disconnected. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
 * @member {Boolean} serviceSmfPlainTextEnabled
 */
MsgVpnModel.prototype.serviceSmfPlainTextEnabled = undefined;

/**
 * Enable or disable the use of encryption (TLS) for the SMF service in the Message VPN. Disabling causes clients currently connected over TLS to be disconnected. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
 * @member {Boolean} serviceSmfTlsEnabled
 */
MsgVpnModel.prototype.serviceSmfTlsEnabled = undefined;

/**
 * Allowed values for the <code>serviceWebAuthenticationClientCertRequest</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnModel.ServiceWebAuthenticationClientCertRequestEnum = {
  /**
   * value: "always"
   * @const
   */
  always: "always",

  /**
   * value: "never"
   * @const
   */
  never: "never",

  /**
   * value: "when-enabled-in-message-vpn"
   * @const
   */
  whenEnabledInMessageVpn: "when-enabled-in-message-vpn"
};
/**
 * Determines when to request a client certificate from a Web Transport client connecting via a TLS port. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"when-enabled-in-message-vpn\"`. The allowed values and their meaning are:  <pre> \"always\" - Always ask for a client certificate regardless of the \"message-vpn > authentication > client-certificate > shutdown\" configuration. \"never\" - Never ask for a client certificate regardless of the \"message-vpn > authentication > client-certificate > shutdown\" configuration. \"when-enabled-in-message-vpn\" - Only ask for a client-certificate if client certificate authentication is enabled under \"message-vpn >  authentication > client-certificate > shutdown\". </pre>  Available since 2.21.
 * @member {module:model/MsgVpnModel.ServiceWebAuthenticationClientCertRequestEnum} serviceWebAuthenticationClientCertRequest
 */
MsgVpnModel.prototype.serviceWebAuthenticationClientCertRequest = undefined;

/**
 * The maximum number of Web Transport client connections that can be simultaneously connected to the Message VPN. This value may be higher than supported by the platform. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is the maximum value supported by the platform.
 * @member {Number} serviceWebMaxConnectionCount
 */
MsgVpnModel.prototype.serviceWebMaxConnectionCount = undefined;

/**
 * Enable or disable the plain-text Web Transport service in the Message VPN. Disabling causes clients currently connected to be disconnected. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
 * @member {Boolean} serviceWebPlainTextEnabled
 */
MsgVpnModel.prototype.serviceWebPlainTextEnabled = undefined;

/**
 * Enable or disable the use of TLS for the Web Transport service in the Message VPN. Disabling causes clients currently connected over TLS to be disconnected. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
 * @member {Boolean} serviceWebTlsEnabled
 */
MsgVpnModel.prototype.serviceWebTlsEnabled = undefined;

/**
 * Enable or disable the allowing of TLS SMF clients to downgrade their connections to plain-text connections. Changing this will not affect existing connections. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
 * @member {Boolean} tlsAllowDowngradeToPlainTextEnabled
 */
MsgVpnModel.prototype.tlsAllowDowngradeToPlainTextEnabled = undefined;

