import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnJndiTopicLinksModel model module.
 * @module model/MsgVpnJndiTopicLinksModel
 * @version 2.36
 */
export class MsgVpnJndiTopicLinksModel {
  /**
   * Constructs a new <code>MsgVpnJndiTopicLinksModel</code>.
   * @alias module:model/MsgVpnJndiTopicLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnJndiTopicLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnJndiTopicLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnJndiTopicLinksModel} The populated <code>MsgVpnJndiTopicLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnJndiTopicLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this JNDI Topic object.
 * @member {String} uri
 */
MsgVpnJndiTopicLinksModel.prototype.uri = undefined;

