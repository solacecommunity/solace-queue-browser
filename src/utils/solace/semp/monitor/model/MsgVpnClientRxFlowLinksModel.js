import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnClientRxFlowLinksModel model module.
 * @module model/MsgVpnClientRxFlowLinksModel
 * @version 2.36
 */
export class MsgVpnClientRxFlowLinksModel {
  /**
   * Constructs a new <code>MsgVpnClientRxFlowLinksModel</code>.
   * @alias module:model/MsgVpnClientRxFlowLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnClientRxFlowLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientRxFlowLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientRxFlowLinksModel} The populated <code>MsgVpnClientRxFlowLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientRxFlowLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Client Receive Flow object.
 * @member {String} uri
 */
MsgVpnClientRxFlowLinksModel.prototype.uri = undefined;

