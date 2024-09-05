import {ApiClient} from '../ApiClient';
import {OauthProfileAccessLevelGroupCollectionsMsgVpnAccessLevelExceptionsModel} from './OauthProfileAccessLevelGroupCollectionsMsgVpnAccessLevelExceptionsModel';

/**
 * The OauthProfileAccessLevelGroupCollectionsModel model module.
 * @module model/OauthProfileAccessLevelGroupCollectionsModel
 * @version 2.36
 */
export class OauthProfileAccessLevelGroupCollectionsModel {
  /**
   * Constructs a new <code>OauthProfileAccessLevelGroupCollectionsModel</code>.
   * @alias module:model/OauthProfileAccessLevelGroupCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OauthProfileAccessLevelGroupCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileAccessLevelGroupCollectionsModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileAccessLevelGroupCollectionsModel} The populated <code>OauthProfileAccessLevelGroupCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileAccessLevelGroupCollectionsModel();
      if (data.hasOwnProperty('msgVpnAccessLevelExceptions'))
        obj.msgVpnAccessLevelExceptions = OauthProfileAccessLevelGroupCollectionsMsgVpnAccessLevelExceptionsModel.constructFromObject(data['msgVpnAccessLevelExceptions']);
    }
    return obj;
  }
}

/**
 * @member {module:model/OauthProfileAccessLevelGroupCollectionsMsgVpnAccessLevelExceptionsModel} msgVpnAccessLevelExceptions
 */
OauthProfileAccessLevelGroupCollectionsModel.prototype.msgVpnAccessLevelExceptions = undefined;

