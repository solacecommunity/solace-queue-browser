import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnQueueTemplateLinksModel model module.
 * @module model/MsgVpnQueueTemplateLinksModel
 * @version 2.36
 */
export class MsgVpnQueueTemplateLinksModel {
  /**
   * Constructs a new <code>MsgVpnQueueTemplateLinksModel</code>.
   * @alias module:model/MsgVpnQueueTemplateLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnQueueTemplateLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnQueueTemplateLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnQueueTemplateLinksModel} The populated <code>MsgVpnQueueTemplateLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnQueueTemplateLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Queue Template object.
 * @member {String} uri
 */
MsgVpnQueueTemplateLinksModel.prototype.uri = undefined;

