import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnClientTxFlowLinksModel model module.
 * @module model/MsgVpnClientTxFlowLinksModel
 * @version 2.36
 */
export class MsgVpnClientTxFlowLinksModel {
  /**
   * Constructs a new <code>MsgVpnClientTxFlowLinksModel</code>.
   * @alias module:model/MsgVpnClientTxFlowLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnClientTxFlowLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientTxFlowLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientTxFlowLinksModel} The populated <code>MsgVpnClientTxFlowLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientTxFlowLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Client Transmit Flow object.
 * @member {String} uri
 */
MsgVpnClientTxFlowLinksModel.prototype.uri = undefined;

