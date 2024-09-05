import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnJndiConnectionFactoryLinksModel model module.
 * @module model/MsgVpnJndiConnectionFactoryLinksModel
 * @version 2.36
 */
export class MsgVpnJndiConnectionFactoryLinksModel {
  /**
   * Constructs a new <code>MsgVpnJndiConnectionFactoryLinksModel</code>.
   * @alias module:model/MsgVpnJndiConnectionFactoryLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnJndiConnectionFactoryLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnJndiConnectionFactoryLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnJndiConnectionFactoryLinksModel} The populated <code>MsgVpnJndiConnectionFactoryLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnJndiConnectionFactoryLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this JNDI Connection Factory object.
 * @member {String} uri
 */
MsgVpnJndiConnectionFactoryLinksModel.prototype.uri = undefined;

