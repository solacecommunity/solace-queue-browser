import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnReplicatedTopicLinksModel model module.
 * @module model/MsgVpnReplicatedTopicLinksModel
 * @version 2.36
 */
export class MsgVpnReplicatedTopicLinksModel {
  /**
   * Constructs a new <code>MsgVpnReplicatedTopicLinksModel</code>.
   * @alias module:model/MsgVpnReplicatedTopicLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnReplicatedTopicLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnReplicatedTopicLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnReplicatedTopicLinksModel} The populated <code>MsgVpnReplicatedTopicLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnReplicatedTopicLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Replicated Topic object.
 * @member {String} uri
 */
MsgVpnReplicatedTopicLinksModel.prototype.uri = undefined;

