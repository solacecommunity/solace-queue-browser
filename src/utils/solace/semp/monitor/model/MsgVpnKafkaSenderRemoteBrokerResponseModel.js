import {ApiClient} from '../ApiClient';
import {MsgVpnKafkaSenderRemoteBrokerCollectionsModel} from './MsgVpnKafkaSenderRemoteBrokerCollectionsModel';
import {MsgVpnKafkaSenderRemoteBrokerLinksModel} from './MsgVpnKafkaSenderRemoteBrokerLinksModel';
import {MsgVpnKafkaSenderRemoteBrokerModel} from './MsgVpnKafkaSenderRemoteBrokerModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnKafkaSenderRemoteBrokerResponseModel model module.
 * @module model/MsgVpnKafkaSenderRemoteBrokerResponseModel
 * @version 2.36
 */
export class MsgVpnKafkaSenderRemoteBrokerResponseModel {
  /**
   * Constructs a new <code>MsgVpnKafkaSenderRemoteBrokerResponseModel</code>.
   * @alias module:model/MsgVpnKafkaSenderRemoteBrokerResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnKafkaSenderRemoteBrokerResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnKafkaSenderRemoteBrokerResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnKafkaSenderRemoteBrokerResponseModel} The populated <code>MsgVpnKafkaSenderRemoteBrokerResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnKafkaSenderRemoteBrokerResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnKafkaSenderRemoteBrokerCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnKafkaSenderRemoteBrokerModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnKafkaSenderRemoteBrokerLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnKafkaSenderRemoteBrokerCollectionsModel} collections
 */
MsgVpnKafkaSenderRemoteBrokerResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnKafkaSenderRemoteBrokerModel} data
 */
MsgVpnKafkaSenderRemoteBrokerResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnKafkaSenderRemoteBrokerLinksModel} links
 */
MsgVpnKafkaSenderRemoteBrokerResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnKafkaSenderRemoteBrokerResponseModel.prototype.meta = undefined;

