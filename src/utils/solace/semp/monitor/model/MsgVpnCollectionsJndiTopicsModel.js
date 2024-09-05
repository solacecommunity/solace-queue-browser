import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnCollectionsJndiTopicsModel model module.
 * @module model/MsgVpnCollectionsJndiTopicsModel
 * @version 2.36
 */
export class MsgVpnCollectionsJndiTopicsModel {
  /**
   * Constructs a new <code>MsgVpnCollectionsJndiTopicsModel</code>.
   * @alias module:model/MsgVpnCollectionsJndiTopicsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnCollectionsJndiTopicsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCollectionsJndiTopicsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCollectionsJndiTopicsModel} The populated <code>MsgVpnCollectionsJndiTopicsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCollectionsJndiTopicsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the jndiTopics collection.
 * @member {Number} count
 */
MsgVpnCollectionsJndiTopicsModel.prototype.count = undefined;

