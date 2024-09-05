import {ApiClient} from '../ApiClient';
import {MsgVpnBridgeRemoteMsgVpnCollectionsModel} from './MsgVpnBridgeRemoteMsgVpnCollectionsModel';
import {MsgVpnBridgeRemoteMsgVpnLinksModel} from './MsgVpnBridgeRemoteMsgVpnLinksModel';
import {MsgVpnBridgeRemoteMsgVpnModel} from './MsgVpnBridgeRemoteMsgVpnModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnBridgeRemoteMsgVpnsResponseModel model module.
 * @module model/MsgVpnBridgeRemoteMsgVpnsResponseModel
 * @version 2.36
 */
export class MsgVpnBridgeRemoteMsgVpnsResponseModel {
  /**
   * Constructs a new <code>MsgVpnBridgeRemoteMsgVpnsResponseModel</code>.
   * @alias module:model/MsgVpnBridgeRemoteMsgVpnsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnBridgeRemoteMsgVpnsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnBridgeRemoteMsgVpnsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnBridgeRemoteMsgVpnsResponseModel} The populated <code>MsgVpnBridgeRemoteMsgVpnsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnBridgeRemoteMsgVpnsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnBridgeRemoteMsgVpnCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnBridgeRemoteMsgVpnModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnBridgeRemoteMsgVpnLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnBridgeRemoteMsgVpnCollectionsModel>} collections
 */
MsgVpnBridgeRemoteMsgVpnsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnBridgeRemoteMsgVpnModel>} data
 */
MsgVpnBridgeRemoteMsgVpnsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnBridgeRemoteMsgVpnLinksModel>} links
 */
MsgVpnBridgeRemoteMsgVpnsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnBridgeRemoteMsgVpnsResponseModel.prototype.meta = undefined;

