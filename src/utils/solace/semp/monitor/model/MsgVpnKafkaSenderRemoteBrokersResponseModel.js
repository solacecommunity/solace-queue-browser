import {ApiClient} from '../ApiClient';
import {MsgVpnKafkaSenderRemoteBrokerCollectionsModel} from './MsgVpnKafkaSenderRemoteBrokerCollectionsModel';
import {MsgVpnKafkaSenderRemoteBrokerLinksModel} from './MsgVpnKafkaSenderRemoteBrokerLinksModel';
import {MsgVpnKafkaSenderRemoteBrokerModel} from './MsgVpnKafkaSenderRemoteBrokerModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnKafkaSenderRemoteBrokersResponseModel model module.
 * @module model/MsgVpnKafkaSenderRemoteBrokersResponseModel
 * @version 2.36
 */
export class MsgVpnKafkaSenderRemoteBrokersResponseModel {
  /**
   * Constructs a new <code>MsgVpnKafkaSenderRemoteBrokersResponseModel</code>.
   * @alias module:model/MsgVpnKafkaSenderRemoteBrokersResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnKafkaSenderRemoteBrokersResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnKafkaSenderRemoteBrokersResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnKafkaSenderRemoteBrokersResponseModel} The populated <code>MsgVpnKafkaSenderRemoteBrokersResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnKafkaSenderRemoteBrokersResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnKafkaSenderRemoteBrokerCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnKafkaSenderRemoteBrokerModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnKafkaSenderRemoteBrokerLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnKafkaSenderRemoteBrokerCollectionsModel>} collections
 */
MsgVpnKafkaSenderRemoteBrokersResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnKafkaSenderRemoteBrokerModel>} data
 */
MsgVpnKafkaSenderRemoteBrokersResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnKafkaSenderRemoteBrokerLinksModel>} links
 */
MsgVpnKafkaSenderRemoteBrokersResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnKafkaSenderRemoteBrokersResponseModel.prototype.meta = undefined;

