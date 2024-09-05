import {ApiClient} from '../ApiClient';
import {MsgVpnTelemetryProfileReceiverAclConnectExceptionCollectionsModel} from './MsgVpnTelemetryProfileReceiverAclConnectExceptionCollectionsModel';
import {MsgVpnTelemetryProfileReceiverAclConnectExceptionLinksModel} from './MsgVpnTelemetryProfileReceiverAclConnectExceptionLinksModel';
import {MsgVpnTelemetryProfileReceiverAclConnectExceptionModel} from './MsgVpnTelemetryProfileReceiverAclConnectExceptionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnTelemetryProfileReceiverAclConnectExceptionResponseModel model module.
 * @module model/MsgVpnTelemetryProfileReceiverAclConnectExceptionResponseModel
 * @version 2.36
 */
export class MsgVpnTelemetryProfileReceiverAclConnectExceptionResponseModel {
  /**
   * Constructs a new <code>MsgVpnTelemetryProfileReceiverAclConnectExceptionResponseModel</code>.
   * @alias module:model/MsgVpnTelemetryProfileReceiverAclConnectExceptionResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnTelemetryProfileReceiverAclConnectExceptionResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTelemetryProfileReceiverAclConnectExceptionResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTelemetryProfileReceiverAclConnectExceptionResponseModel} The populated <code>MsgVpnTelemetryProfileReceiverAclConnectExceptionResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTelemetryProfileReceiverAclConnectExceptionResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnTelemetryProfileReceiverAclConnectExceptionCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnTelemetryProfileReceiverAclConnectExceptionModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnTelemetryProfileReceiverAclConnectExceptionLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnTelemetryProfileReceiverAclConnectExceptionCollectionsModel} collections
 */
MsgVpnTelemetryProfileReceiverAclConnectExceptionResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnTelemetryProfileReceiverAclConnectExceptionModel} data
 */
MsgVpnTelemetryProfileReceiverAclConnectExceptionResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnTelemetryProfileReceiverAclConnectExceptionLinksModel} links
 */
MsgVpnTelemetryProfileReceiverAclConnectExceptionResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnTelemetryProfileReceiverAclConnectExceptionResponseModel.prototype.meta = undefined;

