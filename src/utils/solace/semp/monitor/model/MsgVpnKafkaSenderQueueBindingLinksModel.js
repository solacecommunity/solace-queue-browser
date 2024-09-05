import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnKafkaSenderQueueBindingLinksModel model module.
 * @module model/MsgVpnKafkaSenderQueueBindingLinksModel
 * @version 2.36
 */
export class MsgVpnKafkaSenderQueueBindingLinksModel {
  /**
   * Constructs a new <code>MsgVpnKafkaSenderQueueBindingLinksModel</code>.
   * @alias module:model/MsgVpnKafkaSenderQueueBindingLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnKafkaSenderQueueBindingLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnKafkaSenderQueueBindingLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnKafkaSenderQueueBindingLinksModel} The populated <code>MsgVpnKafkaSenderQueueBindingLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnKafkaSenderQueueBindingLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Queue Binding object.
 * @member {String} uri
 */
MsgVpnKafkaSenderQueueBindingLinksModel.prototype.uri = undefined;

