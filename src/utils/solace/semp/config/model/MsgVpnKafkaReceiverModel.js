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

/**
 * The MsgVpnKafkaReceiverModel model module.
 * @module model/MsgVpnKafkaReceiverModel
 * @version 2.36
 */
export class MsgVpnKafkaReceiverModel {
  /**
   * Constructs a new <code>MsgVpnKafkaReceiverModel</code>.
   * @alias module:model/MsgVpnKafkaReceiverModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnKafkaReceiverModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnKafkaReceiverModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnKafkaReceiverModel} The populated <code>MsgVpnKafkaReceiverModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnKafkaReceiverModel();
      if (data.hasOwnProperty('authenticationBasicPassword'))
        obj.authenticationBasicPassword = ApiClient.convertToType(data['authenticationBasicPassword'], 'String');
      if (data.hasOwnProperty('authenticationBasicUsername'))
        obj.authenticationBasicUsername = ApiClient.convertToType(data['authenticationBasicUsername'], 'String');
      if (data.hasOwnProperty('authenticationClientCertContent'))
        obj.authenticationClientCertContent = ApiClient.convertToType(data['authenticationClientCertContent'], 'String');
      if (data.hasOwnProperty('authenticationClientCertPassword'))
        obj.authenticationClientCertPassword = ApiClient.convertToType(data['authenticationClientCertPassword'], 'String');
      if (data.hasOwnProperty('authenticationOauthClientId'))
        obj.authenticationOauthClientId = ApiClient.convertToType(data['authenticationOauthClientId'], 'String');
      if (data.hasOwnProperty('authenticationOauthClientScope'))
        obj.authenticationOauthClientScope = ApiClient.convertToType(data['authenticationOauthClientScope'], 'String');
      if (data.hasOwnProperty('authenticationOauthClientSecret'))
        obj.authenticationOauthClientSecret = ApiClient.convertToType(data['authenticationOauthClientSecret'], 'String');
      if (data.hasOwnProperty('authenticationOauthClientTokenEndpoint'))
        obj.authenticationOauthClientTokenEndpoint = ApiClient.convertToType(data['authenticationOauthClientTokenEndpoint'], 'String');
      if (data.hasOwnProperty('authenticationScheme'))
        obj.authenticationScheme = ApiClient.convertToType(data['authenticationScheme'], 'String');
      if (data.hasOwnProperty('authenticationScramHash'))
        obj.authenticationScramHash = ApiClient.convertToType(data['authenticationScramHash'], 'String');
      if (data.hasOwnProperty('authenticationScramPassword'))
        obj.authenticationScramPassword = ApiClient.convertToType(data['authenticationScramPassword'], 'String');
      if (data.hasOwnProperty('authenticationScramUsername'))
        obj.authenticationScramUsername = ApiClient.convertToType(data['authenticationScramUsername'], 'String');
      if (data.hasOwnProperty('batchDelay'))
        obj.batchDelay = ApiClient.convertToType(data['batchDelay'], 'Number');
      if (data.hasOwnProperty('batchMaxSize'))
        obj.batchMaxSize = ApiClient.convertToType(data['batchMaxSize'], 'Number');
      if (data.hasOwnProperty('bootstrapAddressList'))
        obj.bootstrapAddressList = ApiClient.convertToType(data['bootstrapAddressList'], 'String');
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('groupId'))
        obj.groupId = ApiClient.convertToType(data['groupId'], 'String');
      if (data.hasOwnProperty('groupKeepaliveInterval'))
        obj.groupKeepaliveInterval = ApiClient.convertToType(data['groupKeepaliveInterval'], 'Number');
      if (data.hasOwnProperty('groupKeepaliveTimeout'))
        obj.groupKeepaliveTimeout = ApiClient.convertToType(data['groupKeepaliveTimeout'], 'Number');
      if (data.hasOwnProperty('groupMembershipType'))
        obj.groupMembershipType = ApiClient.convertToType(data['groupMembershipType'], 'String');
      if (data.hasOwnProperty('groupPartitionSchemeList'))
        obj.groupPartitionSchemeList = ApiClient.convertToType(data['groupPartitionSchemeList'], 'String');
      if (data.hasOwnProperty('kafkaReceiverName'))
        obj.kafkaReceiverName = ApiClient.convertToType(data['kafkaReceiverName'], 'String');
      if (data.hasOwnProperty('metadataTopicExcludeList'))
        obj.metadataTopicExcludeList = ApiClient.convertToType(data['metadataTopicExcludeList'], 'String');
      if (data.hasOwnProperty('metadataTopicRefreshInterval'))
        obj.metadataTopicRefreshInterval = ApiClient.convertToType(data['metadataTopicRefreshInterval'], 'Number');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('transportTlsEnabled'))
        obj.transportTlsEnabled = ApiClient.convertToType(data['transportTlsEnabled'], 'Boolean');
    }
    return obj;
  }
}

/**
 * The password for the Username. This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions in note 4. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"\"`.
 * @member {String} authenticationBasicPassword
 */
MsgVpnKafkaReceiverModel.prototype.authenticationBasicPassword = undefined;

/**
 * The username the Kafka Receiver uses to login to the remote Kafka broker. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"\"`.
 * @member {String} authenticationBasicUsername
 */
MsgVpnKafkaReceiverModel.prototype.authenticationBasicUsername = undefined;

/**
 * The PEM formatted content for the client certificate used by the Kafka Receiver to login to the remote Kafka broker. This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions in note 4. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. The default value is `\"\"`.
 * @member {String} authenticationClientCertContent
 */
MsgVpnKafkaReceiverModel.prototype.authenticationClientCertContent = undefined;

/**
 * The password for the client certificate. This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions in note 4. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. The default value is `\"\"`.
 * @member {String} authenticationClientCertPassword
 */
MsgVpnKafkaReceiverModel.prototype.authenticationClientCertPassword = undefined;

/**
 * The OAuth client ID. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"\"`.
 * @member {String} authenticationOauthClientId
 */
MsgVpnKafkaReceiverModel.prototype.authenticationOauthClientId = undefined;

/**
 * The OAuth scope. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"\"`.
 * @member {String} authenticationOauthClientScope
 */
MsgVpnKafkaReceiverModel.prototype.authenticationOauthClientScope = undefined;

/**
 * The OAuth client secret. This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions in note 4. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"\"`.
 * @member {String} authenticationOauthClientSecret
 */
MsgVpnKafkaReceiverModel.prototype.authenticationOauthClientSecret = undefined;

/**
 * The OAuth token endpoint URL that the Kafka Receiver will use to request a token for login to the Kafka broker. Must begin with \"https\". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"\"`.
 * @member {String} authenticationOauthClientTokenEndpoint
 */
MsgVpnKafkaReceiverModel.prototype.authenticationOauthClientTokenEndpoint = undefined;

/**
 * Allowed values for the <code>authenticationScheme</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnKafkaReceiverModel.AuthenticationSchemeEnum = {
  /**
   * value: "none"
   * @const
   */
  none: "none",

  /**
   * value: "basic"
   * @const
   */
  basic: "basic",

  /**
   * value: "scram"
   * @const
   */
  scram: "scram",

  /**
   * value: "client-certificate"
   * @const
   */
  clientCertificate: "client-certificate",

  /**
   * value: "oauth-client"
   * @const
   */
  oauthClient: "oauth-client"
};
/**
 * The authentication scheme for the Kafka Receiver. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"none\"`. The allowed values and their meaning are:  <pre> \"none\" - Anonymous Authentication. \"basic\" - Basic Authentication. \"scram\" - Salted Challenge Response Authentication. \"client-certificate\" - Client Certificate Authentication. \"oauth-client\" - Oauth Authentication. </pre> 
 * @member {module:model/MsgVpnKafkaReceiverModel.AuthenticationSchemeEnum} authenticationScheme
 */
MsgVpnKafkaReceiverModel.prototype.authenticationScheme = undefined;

/**
 * Allowed values for the <code>authenticationScramHash</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnKafkaReceiverModel.AuthenticationScramHashEnum = {
  /**
   * value: "sha-256"
   * @const
   */
  _256: "sha-256",

  /**
   * value: "sha-512"
   * @const
   */
  _512: "sha-512"
};
/**
 * The hash used for SCRAM authentication. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"sha-512\"`. The allowed values and their meaning are:  <pre> \"sha-256\" - SHA-2 256 bits. \"sha-512\" - SHA-2 512 bits. </pre> 
 * @member {module:model/MsgVpnKafkaReceiverModel.AuthenticationScramHashEnum} authenticationScramHash
 */
MsgVpnKafkaReceiverModel.prototype.authenticationScramHash = undefined;

/**
 * The password for the Username. This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions in note 4. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"\"`.
 * @member {String} authenticationScramPassword
 */
MsgVpnKafkaReceiverModel.prototype.authenticationScramPassword = undefined;

/**
 * The username the Kafka Receiver uses to login to the remote Kafka broker. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"\"`.
 * @member {String} authenticationScramUsername
 */
MsgVpnKafkaReceiverModel.prototype.authenticationScramUsername = undefined;

/**
 * Delay (in ms) to wait to accumulate a batch of messages to receive. Batching is done on a per-partition basis. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `500`.
 * @member {Number} batchDelay
 */
MsgVpnKafkaReceiverModel.prototype.batchDelay = undefined;

/**
 * Maximum size of a message batch, in bytes (B). Batching is done on a per-partition basis. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1`.
 * @member {Number} batchMaxSize
 */
MsgVpnKafkaReceiverModel.prototype.batchMaxSize = undefined;

/**
 * Comma separated list of addresses (and optional ports) of brokers in the Kafka Cluster from which the state of the entire Kafka Cluster can be learned. If a port is not provided with an address it will default to 9092. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"\"`.
 * @member {String} bootstrapAddressList
 */
MsgVpnKafkaReceiverModel.prototype.bootstrapAddressList = undefined;

/**
 * Enable or disable the Kafka Receiver. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
 * @member {Boolean} enabled
 */
MsgVpnKafkaReceiverModel.prototype.enabled = undefined;

/**
 * The id of the Kafka consumer group for the Receiver. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"\"`.
 * @member {String} groupId
 */
MsgVpnKafkaReceiverModel.prototype.groupId = undefined;

/**
 * The time between sending keepalives to the group. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `3000`.
 * @member {Number} groupKeepaliveInterval
 */
MsgVpnKafkaReceiverModel.prototype.groupKeepaliveInterval = undefined;

/**
 * The time until unresponsive group members are removed, triggering a partition rebalance across other members of the group. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `45000`.
 * @member {Number} groupKeepaliveTimeout
 */
MsgVpnKafkaReceiverModel.prototype.groupKeepaliveTimeout = undefined;

/**
 * Allowed values for the <code>groupMembershipType</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnKafkaReceiverModel.GroupMembershipTypeEnum = {
  /**
   * value: "dynamic"
   * @const
   */
  dynamic: "dynamic",

  /**
   * value: "static"
   * @const
   */
  _static: "static"
};
/**
 * The membership type of the Kafka consumer group for the Receiver. Static members can leave and rejoin the group (within groupKeepaliveTimeout) without prompting a group rebalance. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"dynamic\"`. The allowed values and their meaning are:  <pre> \"dynamic\" - Dynamic Membership. \"static\" - Static Membership. </pre> 
 * @member {module:model/MsgVpnKafkaReceiverModel.GroupMembershipTypeEnum} groupMembershipType
 */
MsgVpnKafkaReceiverModel.prototype.groupMembershipType = undefined;

/**
 * The ordered, comma-separated list of schemes used for partition assignment of the consumer group for this Receiver. Both Eager (\"range\", \"roundrobin\") and Cooperative (\"cooperative-sticky\") schemes are supported. The elected group leader will choose the first common strategy provided by all members of the group. Eager and Cooperative schemes must not be mixed. For more information on these schemes, see Kafka documentation. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"range,roundrobin\"`.
 * @member {String} groupPartitionSchemeList
 */
MsgVpnKafkaReceiverModel.prototype.groupPartitionSchemeList = undefined;

/**
 * The name of the Kafka Receiver.
 * @member {String} kafkaReceiverName
 */
MsgVpnKafkaReceiverModel.prototype.kafkaReceiverName = undefined;

/**
 * A comma-separated list of regular expressions. Any matching topic names will be ignored in broker metadata. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"\"`.
 * @member {String} metadataTopicExcludeList
 */
MsgVpnKafkaReceiverModel.prototype.metadataTopicExcludeList = undefined;

/**
 * The time between refreshes of topic metadata from the Kafka Cluster. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `30000`.
 * @member {Number} metadataTopicRefreshInterval
 */
MsgVpnKafkaReceiverModel.prototype.metadataTopicRefreshInterval = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnKafkaReceiverModel.prototype.msgVpnName = undefined;

/**
 * Enable or disable encryption (TLS) for the Kafka Receiver. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
 * @member {Boolean} transportTlsEnabled
 */
MsgVpnKafkaReceiverModel.prototype.transportTlsEnabled = undefined;

