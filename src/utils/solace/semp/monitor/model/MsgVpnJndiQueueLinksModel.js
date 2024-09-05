import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnJndiQueueLinksModel model module.
 * @module model/MsgVpnJndiQueueLinksModel
 * @version 2.36
 */
export class MsgVpnJndiQueueLinksModel {
  /**
   * Constructs a new <code>MsgVpnJndiQueueLinksModel</code>.
   * @alias module:model/MsgVpnJndiQueueLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnJndiQueueLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnJndiQueueLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnJndiQueueLinksModel} The populated <code>MsgVpnJndiQueueLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnJndiQueueLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this JNDI Queue object.
 * @member {String} uri
 */
MsgVpnJndiQueueLinksModel.prototype.uri = undefined;

