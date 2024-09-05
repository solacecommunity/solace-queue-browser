import {ApiClient} from '../ApiClient';

/**
 * The DmrClusterLinkAttributeLinksModel model module.
 * @module model/DmrClusterLinkAttributeLinksModel
 * @version 2.36
 */
export class DmrClusterLinkAttributeLinksModel {
  /**
   * Constructs a new <code>DmrClusterLinkAttributeLinksModel</code>.
   * @alias module:model/DmrClusterLinkAttributeLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DmrClusterLinkAttributeLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterLinkAttributeLinksModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterLinkAttributeLinksModel} The populated <code>DmrClusterLinkAttributeLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterLinkAttributeLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Link Attribute object.
 * @member {String} uri
 */
DmrClusterLinkAttributeLinksModel.prototype.uri = undefined;

