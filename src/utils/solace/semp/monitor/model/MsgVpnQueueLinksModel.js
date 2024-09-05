import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnQueueLinksModel model module.
 * @module model/MsgVpnQueueLinksModel
 * @version 2.36
 */
export class MsgVpnQueueLinksModel {
  /**
   * Constructs a new <code>MsgVpnQueueLinksModel</code>.
   * @alias module:model/MsgVpnQueueLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnQueueLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnQueueLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnQueueLinksModel} The populated <code>MsgVpnQueueLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnQueueLinksModel();
      if (data.hasOwnProperty('msgsUri'))
        obj.msgsUri = ApiClient.convertToType(data['msgsUri'], 'String');
      if (data.hasOwnProperty('prioritiesUri'))
        obj.prioritiesUri = ApiClient.convertToType(data['prioritiesUri'], 'String');
      if (data.hasOwnProperty('subscriptionsUri'))
        obj.subscriptionsUri = ApiClient.convertToType(data['subscriptionsUri'], 'String');
      if (data.hasOwnProperty('txFlowsUri'))
        obj.txFlowsUri = ApiClient.convertToType(data['txFlowsUri'], 'String');
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Queue's collection of Queue Message objects.
 * @member {String} msgsUri
 */
MsgVpnQueueLinksModel.prototype.msgsUri = undefined;

/**
 * The URI of this Queue's collection of Queue Priority objects.
 * @member {String} prioritiesUri
 */
MsgVpnQueueLinksModel.prototype.prioritiesUri = undefined;

/**
 * The URI of this Queue's collection of Queue Subscription objects.
 * @member {String} subscriptionsUri
 */
MsgVpnQueueLinksModel.prototype.subscriptionsUri = undefined;

/**
 * The URI of this Queue's collection of Queue Transmit Flow objects.
 * @member {String} txFlowsUri
 */
MsgVpnQueueLinksModel.prototype.txFlowsUri = undefined;

/**
 * The URI of this Queue object.
 * @member {String} uri
 */
MsgVpnQueueLinksModel.prototype.uri = undefined;

