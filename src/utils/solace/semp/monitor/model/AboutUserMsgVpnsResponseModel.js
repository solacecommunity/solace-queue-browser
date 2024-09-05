import {ApiClient} from '../ApiClient';
import {AboutUserMsgVpnCollectionsModel} from './AboutUserMsgVpnCollectionsModel';
import {AboutUserMsgVpnLinksModel} from './AboutUserMsgVpnLinksModel';
import {AboutUserMsgVpnModel} from './AboutUserMsgVpnModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The AboutUserMsgVpnsResponseModel model module.
 * @module model/AboutUserMsgVpnsResponseModel
 * @version 2.36
 */
export class AboutUserMsgVpnsResponseModel {
  /**
   * Constructs a new <code>AboutUserMsgVpnsResponseModel</code>.
   * @alias module:model/AboutUserMsgVpnsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>AboutUserMsgVpnsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AboutUserMsgVpnsResponseModel} obj Optional instance to populate.
   * @return {module:model/AboutUserMsgVpnsResponseModel} The populated <code>AboutUserMsgVpnsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AboutUserMsgVpnsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [AboutUserMsgVpnCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [AboutUserMsgVpnModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [AboutUserMsgVpnLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/AboutUserMsgVpnCollectionsModel>} collections
 */
AboutUserMsgVpnsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/AboutUserMsgVpnModel>} data
 */
AboutUserMsgVpnsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/AboutUserMsgVpnLinksModel>} links
 */
AboutUserMsgVpnsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
AboutUserMsgVpnsResponseModel.prototype.meta = undefined;

