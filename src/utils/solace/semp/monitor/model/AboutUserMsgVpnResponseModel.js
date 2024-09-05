import {ApiClient} from '../ApiClient';
import {AboutUserMsgVpnCollectionsModel} from './AboutUserMsgVpnCollectionsModel';
import {AboutUserMsgVpnLinksModel} from './AboutUserMsgVpnLinksModel';
import {AboutUserMsgVpnModel} from './AboutUserMsgVpnModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The AboutUserMsgVpnResponseModel model module.
 * @module model/AboutUserMsgVpnResponseModel
 * @version 2.36
 */
export class AboutUserMsgVpnResponseModel {
  /**
   * Constructs a new <code>AboutUserMsgVpnResponseModel</code>.
   * @alias module:model/AboutUserMsgVpnResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>AboutUserMsgVpnResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AboutUserMsgVpnResponseModel} obj Optional instance to populate.
   * @return {module:model/AboutUserMsgVpnResponseModel} The populated <code>AboutUserMsgVpnResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AboutUserMsgVpnResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = AboutUserMsgVpnCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = AboutUserMsgVpnModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = AboutUserMsgVpnLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/AboutUserMsgVpnCollectionsModel} collections
 */
AboutUserMsgVpnResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/AboutUserMsgVpnModel} data
 */
AboutUserMsgVpnResponseModel.prototype.data = undefined;

/**
 * @member {module:model/AboutUserMsgVpnLinksModel} links
 */
AboutUserMsgVpnResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
AboutUserMsgVpnResponseModel.prototype.meta = undefined;

