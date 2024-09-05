import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnCollectionsProxiesModel model module.
 * @module model/MsgVpnCollectionsProxiesModel
 * @version 2.36
 */
export class MsgVpnCollectionsProxiesModel {
  /**
   * Constructs a new <code>MsgVpnCollectionsProxiesModel</code>.
   * @alias module:model/MsgVpnCollectionsProxiesModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnCollectionsProxiesModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCollectionsProxiesModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCollectionsProxiesModel} The populated <code>MsgVpnCollectionsProxiesModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCollectionsProxiesModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the proxies collection. Available since 2.36.
 * @member {Number} count
 */
MsgVpnCollectionsProxiesModel.prototype.count = undefined;

