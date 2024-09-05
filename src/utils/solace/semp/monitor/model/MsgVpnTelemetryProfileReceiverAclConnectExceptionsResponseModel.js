import {ApiClient} from '../ApiClient';
import {MsgVpnTelemetryProfileReceiverAclConnectExceptionCollectionsModel} from './MsgVpnTelemetryProfileReceiverAclConnectExceptionCollectionsModel';
import {MsgVpnTelemetryProfileReceiverAclConnectExceptionLinksModel} from './MsgVpnTelemetryProfileReceiverAclConnectExceptionLinksModel';
import {MsgVpnTelemetryProfileReceiverAclConnectExceptionModel} from './MsgVpnTelemetryProfileReceiverAclConnectExceptionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnTelemetryProfileReceiverAclConnectExceptionsResponseModel model module.
 * @module model/MsgVpnTelemetryProfileReceiverAclConnectExceptionsResponseModel
 * @version 2.36
 */
export class MsgVpnTelemetryProfileReceiverAclConnectExceptionsResponseModel {
  /**
   * Constructs a new <code>MsgVpnTelemetryProfileReceiverAclConnectExceptionsResponseModel</code>.
   * @alias module:model/MsgVpnTelemetryProfileReceiverAclConnectExceptionsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnTelemetryProfileReceiverAclConnectExceptionsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTelemetryProfileReceiverAclConnectExceptionsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTelemetryProfileReceiverAclConnectExceptionsResponseModel} The populated <code>MsgVpnTelemetryProfileReceiverAclConnectExceptionsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTelemetryProfileReceiverAclConnectExceptionsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnTelemetryProfileReceiverAclConnectExceptionCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnTelemetryProfileReceiverAclConnectExceptionModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnTelemetryProfileReceiverAclConnectExceptionLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnTelemetryProfileReceiverAclConnectExceptionCollectionsModel>} collections
 */
MsgVpnTelemetryProfileReceiverAclConnectExceptionsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnTelemetryProfileReceiverAclConnectExceptionModel>} data
 */
MsgVpnTelemetryProfileReceiverAclConnectExceptionsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnTelemetryProfileReceiverAclConnectExceptionLinksModel>} links
 */
MsgVpnTelemetryProfileReceiverAclConnectExceptionsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnTelemetryProfileReceiverAclConnectExceptionsResponseModel.prototype.meta = undefined;

