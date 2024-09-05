import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnCollectionsReplayLogsModel model module.
 * @module model/MsgVpnCollectionsReplayLogsModel
 * @version 2.36
 */
export class MsgVpnCollectionsReplayLogsModel {
  /**
   * Constructs a new <code>MsgVpnCollectionsReplayLogsModel</code>.
   * @alias module:model/MsgVpnCollectionsReplayLogsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnCollectionsReplayLogsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCollectionsReplayLogsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCollectionsReplayLogsModel} The populated <code>MsgVpnCollectionsReplayLogsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCollectionsReplayLogsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the replayLogs collection.
 * @member {Number} count
 */
MsgVpnCollectionsReplayLogsModel.prototype.count = undefined;

