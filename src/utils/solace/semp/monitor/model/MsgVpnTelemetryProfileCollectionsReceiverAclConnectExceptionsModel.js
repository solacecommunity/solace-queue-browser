import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnTelemetryProfileCollectionsReceiverAclConnectExceptionsModel model module.
 * @module model/MsgVpnTelemetryProfileCollectionsReceiverAclConnectExceptionsModel
 * @version 2.36
 */
export class MsgVpnTelemetryProfileCollectionsReceiverAclConnectExceptionsModel {
  /**
   * Constructs a new <code>MsgVpnTelemetryProfileCollectionsReceiverAclConnectExceptionsModel</code>.
   * @alias module:model/MsgVpnTelemetryProfileCollectionsReceiverAclConnectExceptionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTelemetryProfileCollectionsReceiverAclConnectExceptionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTelemetryProfileCollectionsReceiverAclConnectExceptionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTelemetryProfileCollectionsReceiverAclConnectExceptionsModel} The populated <code>MsgVpnTelemetryProfileCollectionsReceiverAclConnectExceptionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTelemetryProfileCollectionsReceiverAclConnectExceptionsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the receiverAclConnectExceptions collection.
 * @member {Number} count
 */
MsgVpnTelemetryProfileCollectionsReceiverAclConnectExceptionsModel.prototype.count = undefined;

