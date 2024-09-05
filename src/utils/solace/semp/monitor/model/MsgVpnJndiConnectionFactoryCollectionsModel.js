import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnJndiConnectionFactoryCollectionsModel model module.
 * @module model/MsgVpnJndiConnectionFactoryCollectionsModel
 * @version 2.36
 */
export class MsgVpnJndiConnectionFactoryCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnJndiConnectionFactoryCollectionsModel</code>.
   * @alias module:model/MsgVpnJndiConnectionFactoryCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnJndiConnectionFactoryCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnJndiConnectionFactoryCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnJndiConnectionFactoryCollectionsModel} The populated <code>MsgVpnJndiConnectionFactoryCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnJndiConnectionFactoryCollectionsModel();
    }
    return obj;
  }
}
