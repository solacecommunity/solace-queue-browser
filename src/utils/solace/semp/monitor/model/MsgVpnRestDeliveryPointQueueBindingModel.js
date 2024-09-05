import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnRestDeliveryPointQueueBindingModel model module.
 * @module model/MsgVpnRestDeliveryPointQueueBindingModel
 * @version 2.36
 */
export class MsgVpnRestDeliveryPointQueueBindingModel {
  /**
   * Constructs a new <code>MsgVpnRestDeliveryPointQueueBindingModel</code>.
   * @alias module:model/MsgVpnRestDeliveryPointQueueBindingModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnRestDeliveryPointQueueBindingModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRestDeliveryPointQueueBindingModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRestDeliveryPointQueueBindingModel} The populated <code>MsgVpnRestDeliveryPointQueueBindingModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRestDeliveryPointQueueBindingModel();
      if (data.hasOwnProperty('gatewayReplaceTargetAuthorityEnabled'))
        obj.gatewayReplaceTargetAuthorityEnabled = ApiClient.convertToType(data['gatewayReplaceTargetAuthorityEnabled'], 'Boolean');
      if (data.hasOwnProperty('lastFailureReason'))
        obj.lastFailureReason = ApiClient.convertToType(data['lastFailureReason'], 'String');
      if (data.hasOwnProperty('lastFailureTime'))
        obj.lastFailureTime = ApiClient.convertToType(data['lastFailureTime'], 'Number');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('postRequestTarget'))
        obj.postRequestTarget = ApiClient.convertToType(data['postRequestTarget'], 'String');
      if (data.hasOwnProperty('queueBindingName'))
        obj.queueBindingName = ApiClient.convertToType(data['queueBindingName'], 'String');
      if (data.hasOwnProperty('requestTargetEvaluation'))
        obj.requestTargetEvaluation = ApiClient.convertToType(data['requestTargetEvaluation'], 'String');
      if (data.hasOwnProperty('restDeliveryPointName'))
        obj.restDeliveryPointName = ApiClient.convertToType(data['restDeliveryPointName'], 'String');
      if (data.hasOwnProperty('up'))
        obj.up = ApiClient.convertToType(data['up'], 'Boolean');
      if (data.hasOwnProperty('uptime'))
        obj.uptime = ApiClient.convertToType(data['uptime'], 'Number');
    }
    return obj;
  }
}

/**
 * Indicates whether the authority for the request-target is replaced with that configured for the REST Consumer remote.
 * @member {Boolean} gatewayReplaceTargetAuthorityEnabled
 */
MsgVpnRestDeliveryPointQueueBindingModel.prototype.gatewayReplaceTargetAuthorityEnabled = undefined;

/**
 * The reason for the last REST Delivery Point queue binding failure.
 * @member {String} lastFailureReason
 */
MsgVpnRestDeliveryPointQueueBindingModel.prototype.lastFailureReason = undefined;

/**
 * The timestamp of the last REST Delivery Point queue binding failure. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} lastFailureTime
 */
MsgVpnRestDeliveryPointQueueBindingModel.prototype.lastFailureTime = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnRestDeliveryPointQueueBindingModel.prototype.msgVpnName = undefined;

/**
 * The request-target string being used when sending requests to a REST Consumer.
 * @member {String} postRequestTarget
 */
MsgVpnRestDeliveryPointQueueBindingModel.prototype.postRequestTarget = undefined;

/**
 * The name of a queue in the Message VPN.
 * @member {String} queueBindingName
 */
MsgVpnRestDeliveryPointQueueBindingModel.prototype.queueBindingName = undefined;

/**
 * Allowed values for the <code>requestTargetEvaluation</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnRestDeliveryPointQueueBindingModel.RequestTargetEvaluationEnum = {
  /**
   * value: "none"
   * @const
   */
  none: "none",

  /**
   * value: "substitution-expressions"
   * @const
   */
  substitutionExpressions: "substitution-expressions"
};
/**
 * The type of evaluation to perform on the request target. The allowed values and their meaning are:  <pre> \"none\" - Do not evaluate substitution expressions on the request target. \"substitution-expressions\" - Evaluate substitution expressions on the request target. </pre>  Available since 2.23.
 * @member {module:model/MsgVpnRestDeliveryPointQueueBindingModel.RequestTargetEvaluationEnum} requestTargetEvaluation
 */
MsgVpnRestDeliveryPointQueueBindingModel.prototype.requestTargetEvaluation = undefined;

/**
 * The name of the REST Delivery Point.
 * @member {String} restDeliveryPointName
 */
MsgVpnRestDeliveryPointQueueBindingModel.prototype.restDeliveryPointName = undefined;

/**
 * Indicates whether the operational state of the REST Delivery Point queue binding is up.
 * @member {Boolean} up
 */
MsgVpnRestDeliveryPointQueueBindingModel.prototype.up = undefined;

/**
 * The amount of time in seconds since the REST Delivery Point queue binding was up.
 * @member {Number} uptime
 */
MsgVpnRestDeliveryPointQueueBindingModel.prototype.uptime = undefined;

