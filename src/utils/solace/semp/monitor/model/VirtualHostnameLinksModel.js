import {ApiClient} from '../ApiClient';

/**
 * The VirtualHostnameLinksModel model module.
 * @module model/VirtualHostnameLinksModel
 * @version 2.36
 */
export class VirtualHostnameLinksModel {
  /**
   * Constructs a new <code>VirtualHostnameLinksModel</code>.
   * @alias module:model/VirtualHostnameLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>VirtualHostnameLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VirtualHostnameLinksModel} obj Optional instance to populate.
   * @return {module:model/VirtualHostnameLinksModel} The populated <code>VirtualHostnameLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new VirtualHostnameLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Virtual Hostname object.
 * @member {String} uri
 */
VirtualHostnameLinksModel.prototype.uri = undefined;

