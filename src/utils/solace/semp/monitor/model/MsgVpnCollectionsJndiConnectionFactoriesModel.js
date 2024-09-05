import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnCollectionsJndiConnectionFactoriesModel model module.
 * @module model/MsgVpnCollectionsJndiConnectionFactoriesModel
 * @version 2.36
 */
export class MsgVpnCollectionsJndiConnectionFactoriesModel {
  /**
   * Constructs a new <code>MsgVpnCollectionsJndiConnectionFactoriesModel</code>.
   * @alias module:model/MsgVpnCollectionsJndiConnectionFactoriesModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnCollectionsJndiConnectionFactoriesModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCollectionsJndiConnectionFactoriesModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCollectionsJndiConnectionFactoriesModel} The populated <code>MsgVpnCollectionsJndiConnectionFactoriesModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCollectionsJndiConnectionFactoriesModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the jndiConnectionFactories collection.
 * @member {Number} count
 */
MsgVpnCollectionsJndiConnectionFactoriesModel.prototype.count = undefined;

