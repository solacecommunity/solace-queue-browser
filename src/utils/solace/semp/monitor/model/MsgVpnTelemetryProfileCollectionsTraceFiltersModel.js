import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnTelemetryProfileCollectionsTraceFiltersModel model module.
 * @module model/MsgVpnTelemetryProfileCollectionsTraceFiltersModel
 * @version 2.36
 */
export class MsgVpnTelemetryProfileCollectionsTraceFiltersModel {
  /**
   * Constructs a new <code>MsgVpnTelemetryProfileCollectionsTraceFiltersModel</code>.
   * @alias module:model/MsgVpnTelemetryProfileCollectionsTraceFiltersModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTelemetryProfileCollectionsTraceFiltersModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTelemetryProfileCollectionsTraceFiltersModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTelemetryProfileCollectionsTraceFiltersModel} The populated <code>MsgVpnTelemetryProfileCollectionsTraceFiltersModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTelemetryProfileCollectionsTraceFiltersModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the traceFilters collection.
 * @member {Number} count
 */
MsgVpnTelemetryProfileCollectionsTraceFiltersModel.prototype.count = undefined;

