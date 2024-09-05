import {ApiClient} from '../ApiClient';

/**
 * The OauthProfileAccessLevelGroupCollectionsMsgVpnAccessLevelExceptionsModel model module.
 * @module model/OauthProfileAccessLevelGroupCollectionsMsgVpnAccessLevelExceptionsModel
 * @version 2.36
 */
export class OauthProfileAccessLevelGroupCollectionsMsgVpnAccessLevelExceptionsModel {
  /**
   * Constructs a new <code>OauthProfileAccessLevelGroupCollectionsMsgVpnAccessLevelExceptionsModel</code>.
   * @alias module:model/OauthProfileAccessLevelGroupCollectionsMsgVpnAccessLevelExceptionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OauthProfileAccessLevelGroupCollectionsMsgVpnAccessLevelExceptionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileAccessLevelGroupCollectionsMsgVpnAccessLevelExceptionsModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileAccessLevelGroupCollectionsMsgVpnAccessLevelExceptionsModel} The populated <code>OauthProfileAccessLevelGroupCollectionsMsgVpnAccessLevelExceptionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileAccessLevelGroupCollectionsMsgVpnAccessLevelExceptionsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the msgVpnAccessLevelExceptions collection.
 * @member {Number} count
 */
OauthProfileAccessLevelGroupCollectionsMsgVpnAccessLevelExceptionsModel.prototype.count = undefined;

