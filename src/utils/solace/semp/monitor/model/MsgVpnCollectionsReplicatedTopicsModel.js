import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnCollectionsReplicatedTopicsModel model module.
 * @module model/MsgVpnCollectionsReplicatedTopicsModel
 * @version 2.36
 */
export class MsgVpnCollectionsReplicatedTopicsModel {
  /**
   * Constructs a new <code>MsgVpnCollectionsReplicatedTopicsModel</code>.
   * @alias module:model/MsgVpnCollectionsReplicatedTopicsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnCollectionsReplicatedTopicsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCollectionsReplicatedTopicsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCollectionsReplicatedTopicsModel} The populated <code>MsgVpnCollectionsReplicatedTopicsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCollectionsReplicatedTopicsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the replicatedTopics collection. Available since 2.12.
 * @member {Number} count
 */
MsgVpnCollectionsReplicatedTopicsModel.prototype.count = undefined;

