import {ApiClient} from '../ApiClient';

/**
 * The AboutUserMsgVpnLinksModel model module.
 * @module model/AboutUserMsgVpnLinksModel
 * @version 2.36
 */
export class AboutUserMsgVpnLinksModel {
  /**
   * Constructs a new <code>AboutUserMsgVpnLinksModel</code>.
   * @alias module:model/AboutUserMsgVpnLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AboutUserMsgVpnLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AboutUserMsgVpnLinksModel} obj Optional instance to populate.
   * @return {module:model/AboutUserMsgVpnLinksModel} The populated <code>AboutUserMsgVpnLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AboutUserMsgVpnLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this User Message VPN object.
 * @member {String} uri
 */
AboutUserMsgVpnLinksModel.prototype.uri = undefined;

