import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnTopicEndpointTemplateLinksModel model module.
 * @module model/MsgVpnTopicEndpointTemplateLinksModel
 * @version 2.36
 */
export class MsgVpnTopicEndpointTemplateLinksModel {
  /**
   * Constructs a new <code>MsgVpnTopicEndpointTemplateLinksModel</code>.
   * @alias module:model/MsgVpnTopicEndpointTemplateLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTopicEndpointTemplateLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTopicEndpointTemplateLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTopicEndpointTemplateLinksModel} The populated <code>MsgVpnTopicEndpointTemplateLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTopicEndpointTemplateLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Topic Endpoint Template object.
 * @member {String} uri
 */
MsgVpnTopicEndpointTemplateLinksModel.prototype.uri = undefined;

