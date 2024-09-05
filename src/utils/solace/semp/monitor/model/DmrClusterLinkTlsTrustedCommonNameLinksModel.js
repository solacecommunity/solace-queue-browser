import {ApiClient} from '../ApiClient';

/**
 * The DmrClusterLinkTlsTrustedCommonNameLinksModel model module.
 * @module model/DmrClusterLinkTlsTrustedCommonNameLinksModel
 * @version 2.36
 */
export class DmrClusterLinkTlsTrustedCommonNameLinksModel {
  /**
   * Constructs a new <code>DmrClusterLinkTlsTrustedCommonNameLinksModel</code>.
   * @alias module:model/DmrClusterLinkTlsTrustedCommonNameLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DmrClusterLinkTlsTrustedCommonNameLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterLinkTlsTrustedCommonNameLinksModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterLinkTlsTrustedCommonNameLinksModel} The populated <code>DmrClusterLinkTlsTrustedCommonNameLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterLinkTlsTrustedCommonNameLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Trusted Common Name object.
 * @member {String} uri
 */
DmrClusterLinkTlsTrustedCommonNameLinksModel.prototype.uri = undefined;

