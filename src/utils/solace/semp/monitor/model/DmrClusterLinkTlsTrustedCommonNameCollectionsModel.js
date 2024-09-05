import {ApiClient} from '../ApiClient';

/**
 * The DmrClusterLinkTlsTrustedCommonNameCollectionsModel model module.
 * @module model/DmrClusterLinkTlsTrustedCommonNameCollectionsModel
 * @version 2.36
 */
export class DmrClusterLinkTlsTrustedCommonNameCollectionsModel {
  /**
   * Constructs a new <code>DmrClusterLinkTlsTrustedCommonNameCollectionsModel</code>.
   * @alias module:model/DmrClusterLinkTlsTrustedCommonNameCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DmrClusterLinkTlsTrustedCommonNameCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterLinkTlsTrustedCommonNameCollectionsModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterLinkTlsTrustedCommonNameCollectionsModel} The populated <code>DmrClusterLinkTlsTrustedCommonNameCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterLinkTlsTrustedCommonNameCollectionsModel();
    }
    return obj;
  }
}
