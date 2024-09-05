import {ApiClient} from '../ApiClient';

/**
 * The OauthProfileCollectionsDefaultMsgVpnAccessLevelExceptionsModel model module.
 * @module model/OauthProfileCollectionsDefaultMsgVpnAccessLevelExceptionsModel
 * @version 2.36
 */
export class OauthProfileCollectionsDefaultMsgVpnAccessLevelExceptionsModel {
  /**
   * Constructs a new <code>OauthProfileCollectionsDefaultMsgVpnAccessLevelExceptionsModel</code>.
   * @alias module:model/OauthProfileCollectionsDefaultMsgVpnAccessLevelExceptionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OauthProfileCollectionsDefaultMsgVpnAccessLevelExceptionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileCollectionsDefaultMsgVpnAccessLevelExceptionsModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileCollectionsDefaultMsgVpnAccessLevelExceptionsModel} The populated <code>OauthProfileCollectionsDefaultMsgVpnAccessLevelExceptionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileCollectionsDefaultMsgVpnAccessLevelExceptionsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the defaultMsgVpnAccessLevelExceptions collection.
 * @member {Number} count
 */
OauthProfileCollectionsDefaultMsgVpnAccessLevelExceptionsModel.prototype.count = undefined;

