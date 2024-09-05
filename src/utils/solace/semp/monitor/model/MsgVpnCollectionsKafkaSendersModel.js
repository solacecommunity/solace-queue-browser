import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnCollectionsKafkaSendersModel model module.
 * @module model/MsgVpnCollectionsKafkaSendersModel
 * @version 2.36
 */
export class MsgVpnCollectionsKafkaSendersModel {
  /**
   * Constructs a new <code>MsgVpnCollectionsKafkaSendersModel</code>.
   * @alias module:model/MsgVpnCollectionsKafkaSendersModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnCollectionsKafkaSendersModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCollectionsKafkaSendersModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCollectionsKafkaSendersModel} The populated <code>MsgVpnCollectionsKafkaSendersModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCollectionsKafkaSendersModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the kafkaSenders collection. Available since 2.36.
 * @member {Number} count
 */
MsgVpnCollectionsKafkaSendersModel.prototype.count = undefined;

