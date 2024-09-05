import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnClientLinksModel model module.
 * @module model/MsgVpnClientLinksModel
 * @version 2.36
 */
export class MsgVpnClientLinksModel {
  /**
   * Constructs a new <code>MsgVpnClientLinksModel</code>.
   * @alias module:model/MsgVpnClientLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnClientLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientLinksModel} The populated <code>MsgVpnClientLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientLinksModel();
      if (data.hasOwnProperty('connectionsUri'))
        obj.connectionsUri = ApiClient.convertToType(data['connectionsUri'], 'String');
      if (data.hasOwnProperty('rxFlowsUri'))
        obj.rxFlowsUri = ApiClient.convertToType(data['rxFlowsUri'], 'String');
      if (data.hasOwnProperty('subscriptionsUri'))
        obj.subscriptionsUri = ApiClient.convertToType(data['subscriptionsUri'], 'String');
      if (data.hasOwnProperty('transactedSessionsUri'))
        obj.transactedSessionsUri = ApiClient.convertToType(data['transactedSessionsUri'], 'String');
      if (data.hasOwnProperty('txFlowsUri'))
        obj.txFlowsUri = ApiClient.convertToType(data['txFlowsUri'], 'String');
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Client's collection of Client Connection objects.
 * @member {String} connectionsUri
 */
MsgVpnClientLinksModel.prototype.connectionsUri = undefined;

/**
 * The URI of this Client's collection of Client Receive Flow objects.
 * @member {String} rxFlowsUri
 */
MsgVpnClientLinksModel.prototype.rxFlowsUri = undefined;

/**
 * The URI of this Client's collection of Client Subscription objects.
 * @member {String} subscriptionsUri
 */
MsgVpnClientLinksModel.prototype.subscriptionsUri = undefined;

/**
 * The URI of this Client's collection of Client Transacted Session objects.
 * @member {String} transactedSessionsUri
 */
MsgVpnClientLinksModel.prototype.transactedSessionsUri = undefined;

/**
 * The URI of this Client's collection of Client Transmit Flow objects.
 * @member {String} txFlowsUri
 */
MsgVpnClientLinksModel.prototype.txFlowsUri = undefined;

/**
 * The URI of this Client object.
 * @member {String} uri
 */
MsgVpnClientLinksModel.prototype.uri = undefined;

