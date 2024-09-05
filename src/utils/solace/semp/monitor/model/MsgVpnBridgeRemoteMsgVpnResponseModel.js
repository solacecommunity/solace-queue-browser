import {ApiClient} from '../ApiClient';
import {MsgVpnBridgeRemoteMsgVpnCollectionsModel} from './MsgVpnBridgeRemoteMsgVpnCollectionsModel';
import {MsgVpnBridgeRemoteMsgVpnLinksModel} from './MsgVpnBridgeRemoteMsgVpnLinksModel';
import {MsgVpnBridgeRemoteMsgVpnModel} from './MsgVpnBridgeRemoteMsgVpnModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnBridgeRemoteMsgVpnResponseModel model module.
 * @module model/MsgVpnBridgeRemoteMsgVpnResponseModel
 * @version 2.36
 */
export class MsgVpnBridgeRemoteMsgVpnResponseModel {
  /**
   * Constructs a new <code>MsgVpnBridgeRemoteMsgVpnResponseModel</code>.
   * @alias module:model/MsgVpnBridgeRemoteMsgVpnResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnBridgeRemoteMsgVpnResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnBridgeRemoteMsgVpnResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnBridgeRemoteMsgVpnResponseModel} The populated <code>MsgVpnBridgeRemoteMsgVpnResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnBridgeRemoteMsgVpnResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnBridgeRemoteMsgVpnCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnBridgeRemoteMsgVpnModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnBridgeRemoteMsgVpnLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnBridgeRemoteMsgVpnCollectionsModel} collections
 */
MsgVpnBridgeRemoteMsgVpnResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnBridgeRemoteMsgVpnModel} data
 */
MsgVpnBridgeRemoteMsgVpnResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnBridgeRemoteMsgVpnLinksModel} links
 */
MsgVpnBridgeRemoteMsgVpnResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnBridgeRemoteMsgVpnResponseModel.prototype.meta = undefined;

