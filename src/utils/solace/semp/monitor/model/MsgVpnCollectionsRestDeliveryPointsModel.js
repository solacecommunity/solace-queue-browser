import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnCollectionsRestDeliveryPointsModel model module.
 * @module model/MsgVpnCollectionsRestDeliveryPointsModel
 * @version 2.36
 */
export class MsgVpnCollectionsRestDeliveryPointsModel {
  /**
   * Constructs a new <code>MsgVpnCollectionsRestDeliveryPointsModel</code>.
   * @alias module:model/MsgVpnCollectionsRestDeliveryPointsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnCollectionsRestDeliveryPointsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCollectionsRestDeliveryPointsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCollectionsRestDeliveryPointsModel} The populated <code>MsgVpnCollectionsRestDeliveryPointsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCollectionsRestDeliveryPointsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the restDeliveryPoints collection.
 * @member {Number} count
 */
MsgVpnCollectionsRestDeliveryPointsModel.prototype.count = undefined;

