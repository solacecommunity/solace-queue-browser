import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnQueueTxFlowLinksModel model module.
 * @module model/MsgVpnQueueTxFlowLinksModel
 * @version 2.36
 */
export class MsgVpnQueueTxFlowLinksModel {
  /**
   * Constructs a new <code>MsgVpnQueueTxFlowLinksModel</code>.
   * @alias module:model/MsgVpnQueueTxFlowLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnQueueTxFlowLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnQueueTxFlowLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnQueueTxFlowLinksModel} The populated <code>MsgVpnQueueTxFlowLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnQueueTxFlowLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Queue Transmit Flow object.
 * @member {String} uri
 */
MsgVpnQueueTxFlowLinksModel.prototype.uri = undefined;

