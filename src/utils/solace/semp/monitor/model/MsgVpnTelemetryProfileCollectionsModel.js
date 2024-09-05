import {ApiClient} from '../ApiClient';
import {MsgVpnTelemetryProfileCollectionsReceiverAclConnectExceptionsModel} from './MsgVpnTelemetryProfileCollectionsReceiverAclConnectExceptionsModel';
import {MsgVpnTelemetryProfileCollectionsTraceFiltersModel} from './MsgVpnTelemetryProfileCollectionsTraceFiltersModel';

/**
 * The MsgVpnTelemetryProfileCollectionsModel model module.
 * @module model/MsgVpnTelemetryProfileCollectionsModel
 * @version 2.36
 */
export class MsgVpnTelemetryProfileCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnTelemetryProfileCollectionsModel</code>.
   * @alias module:model/MsgVpnTelemetryProfileCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTelemetryProfileCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTelemetryProfileCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTelemetryProfileCollectionsModel} The populated <code>MsgVpnTelemetryProfileCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTelemetryProfileCollectionsModel();
      if (data.hasOwnProperty('receiverAclConnectExceptions'))
        obj.receiverAclConnectExceptions = MsgVpnTelemetryProfileCollectionsReceiverAclConnectExceptionsModel.constructFromObject(data['receiverAclConnectExceptions']);
      if (data.hasOwnProperty('traceFilters'))
        obj.traceFilters = MsgVpnTelemetryProfileCollectionsTraceFiltersModel.constructFromObject(data['traceFilters']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnTelemetryProfileCollectionsReceiverAclConnectExceptionsModel} receiverAclConnectExceptions
 */
MsgVpnTelemetryProfileCollectionsModel.prototype.receiverAclConnectExceptions = undefined;

/**
 * @member {module:model/MsgVpnTelemetryProfileCollectionsTraceFiltersModel} traceFilters
 */
MsgVpnTelemetryProfileCollectionsModel.prototype.traceFilters = undefined;

