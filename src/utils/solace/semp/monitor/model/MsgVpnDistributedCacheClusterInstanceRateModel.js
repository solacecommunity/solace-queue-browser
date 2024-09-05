import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnDistributedCacheClusterInstanceRateModel model module.
 * @module model/MsgVpnDistributedCacheClusterInstanceRateModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheClusterInstanceRateModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheClusterInstanceRateModel</code>.
   * The rates associated with the Cache Instance. Deprecated since 2.13. All attributes in this object have been moved to the MsgVpnDistributedCacheClusterInstance object.
   * @alias module:model/MsgVpnDistributedCacheClusterInstanceRateModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheClusterInstanceRateModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheClusterInstanceRateModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheClusterInstanceRateModel} The populated <code>MsgVpnDistributedCacheClusterInstanceRateModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheClusterInstanceRateModel();
      if (data.hasOwnProperty('averageDataRxBytePeakRate'))
        obj.averageDataRxBytePeakRate = ApiClient.convertToType(data['averageDataRxBytePeakRate'], 'Number');
      if (data.hasOwnProperty('averageDataRxByteRate'))
        obj.averageDataRxByteRate = ApiClient.convertToType(data['averageDataRxByteRate'], 'Number');
      if (data.hasOwnProperty('averageDataRxMsgPeakRate'))
        obj.averageDataRxMsgPeakRate = ApiClient.convertToType(data['averageDataRxMsgPeakRate'], 'Number');
      if (data.hasOwnProperty('averageDataRxMsgRate'))
        obj.averageDataRxMsgRate = ApiClient.convertToType(data['averageDataRxMsgRate'], 'Number');
      if (data.hasOwnProperty('averageDataTxMsgPeakRate'))
        obj.averageDataTxMsgPeakRate = ApiClient.convertToType(data['averageDataTxMsgPeakRate'], 'Number');
      if (data.hasOwnProperty('averageDataTxMsgRate'))
        obj.averageDataTxMsgRate = ApiClient.convertToType(data['averageDataTxMsgRate'], 'Number');
      if (data.hasOwnProperty('averageRequestRxPeakRate'))
        obj.averageRequestRxPeakRate = ApiClient.convertToType(data['averageRequestRxPeakRate'], 'Number');
      if (data.hasOwnProperty('averageRequestRxRate'))
        obj.averageRequestRxRate = ApiClient.convertToType(data['averageRequestRxRate'], 'Number');
      if (data.hasOwnProperty('dataRxBytePeakRate'))
        obj.dataRxBytePeakRate = ApiClient.convertToType(data['dataRxBytePeakRate'], 'Number');
      if (data.hasOwnProperty('dataRxByteRate'))
        obj.dataRxByteRate = ApiClient.convertToType(data['dataRxByteRate'], 'Number');
      if (data.hasOwnProperty('dataRxMsgPeakRate'))
        obj.dataRxMsgPeakRate = ApiClient.convertToType(data['dataRxMsgPeakRate'], 'Number');
      if (data.hasOwnProperty('dataRxMsgRate'))
        obj.dataRxMsgRate = ApiClient.convertToType(data['dataRxMsgRate'], 'Number');
      if (data.hasOwnProperty('dataTxMsgPeakRate'))
        obj.dataTxMsgPeakRate = ApiClient.convertToType(data['dataTxMsgPeakRate'], 'Number');
      if (data.hasOwnProperty('dataTxMsgRate'))
        obj.dataTxMsgRate = ApiClient.convertToType(data['dataTxMsgRate'], 'Number');
      if (data.hasOwnProperty('requestRxPeakRate'))
        obj.requestRxPeakRate = ApiClient.convertToType(data['requestRxPeakRate'], 'Number');
      if (data.hasOwnProperty('requestRxRate'))
        obj.requestRxRate = ApiClient.convertToType(data['requestRxRate'], 'Number');
    }
    return obj;
  }
}

/**
 * The peak of the one minute average of the data message rate received by the Cache Instance, in bytes per second (B/sec). Deprecated since 2.13. This attribute has been moved to the MsgVpnDistributedCacheClusterInstance object.
 * @member {Number} averageDataRxBytePeakRate
 */
MsgVpnDistributedCacheClusterInstanceRateModel.prototype.averageDataRxBytePeakRate = undefined;

/**
 * The one minute average of the data message rate received by the Cache Instance, in bytes per second (B/sec). Deprecated since 2.13. This attribute has been moved to the MsgVpnDistributedCacheClusterInstance object.
 * @member {Number} averageDataRxByteRate
 */
MsgVpnDistributedCacheClusterInstanceRateModel.prototype.averageDataRxByteRate = undefined;

/**
 * The peak of the one minute average of the data message rate received by the Cache Instance, in messages per second (msg/sec). Deprecated since 2.13. This attribute has been moved to the MsgVpnDistributedCacheClusterInstance object.
 * @member {Number} averageDataRxMsgPeakRate
 */
MsgVpnDistributedCacheClusterInstanceRateModel.prototype.averageDataRxMsgPeakRate = undefined;

/**
 * The one minute average of the data message rate received by the Cache Instance, in messages per second (msg/sec). Deprecated since 2.13. This attribute has been moved to the MsgVpnDistributedCacheClusterInstance object.
 * @member {Number} averageDataRxMsgRate
 */
MsgVpnDistributedCacheClusterInstanceRateModel.prototype.averageDataRxMsgRate = undefined;

/**
 * The peak of the one minute average of the data message rate transmitted by the Cache Instance, in messages per second (msg/sec). Deprecated since 2.13. This attribute has been moved to the MsgVpnDistributedCacheClusterInstance object.
 * @member {Number} averageDataTxMsgPeakRate
 */
MsgVpnDistributedCacheClusterInstanceRateModel.prototype.averageDataTxMsgPeakRate = undefined;

/**
 * The one minute average of the data message rate transmitted by the Cache Instance, in messages per second (msg/sec). Deprecated since 2.13. This attribute has been moved to the MsgVpnDistributedCacheClusterInstance object.
 * @member {Number} averageDataTxMsgRate
 */
MsgVpnDistributedCacheClusterInstanceRateModel.prototype.averageDataTxMsgRate = undefined;

/**
 * The peak of the one minute average of the request rate received by the Cache Instance, in requests per second (req/sec). Deprecated since 2.13. This attribute has been moved to the MsgVpnDistributedCacheClusterInstance object.
 * @member {Number} averageRequestRxPeakRate
 */
MsgVpnDistributedCacheClusterInstanceRateModel.prototype.averageRequestRxPeakRate = undefined;

/**
 * The one minute average of the request rate received by the Cache Instance, in requests per second (req/sec). Deprecated since 2.13. This attribute has been moved to the MsgVpnDistributedCacheClusterInstance object.
 * @member {Number} averageRequestRxRate
 */
MsgVpnDistributedCacheClusterInstanceRateModel.prototype.averageRequestRxRate = undefined;

/**
 * The data message peak rate received by the Cache Instance, in bytes per second (B/sec). Deprecated since 2.13. This attribute has been moved to the MsgVpnDistributedCacheClusterInstance object.
 * @member {Number} dataRxBytePeakRate
 */
MsgVpnDistributedCacheClusterInstanceRateModel.prototype.dataRxBytePeakRate = undefined;

/**
 * The data message rate received by the Cache Instance, in bytes per second (B/sec). Deprecated since 2.13. This attribute has been moved to the MsgVpnDistributedCacheClusterInstance object.
 * @member {Number} dataRxByteRate
 */
MsgVpnDistributedCacheClusterInstanceRateModel.prototype.dataRxByteRate = undefined;

/**
 * The data message peak rate received by the Cache Instance, in messages per second (msg/sec). Deprecated since 2.13. This attribute has been moved to the MsgVpnDistributedCacheClusterInstance object.
 * @member {Number} dataRxMsgPeakRate
 */
MsgVpnDistributedCacheClusterInstanceRateModel.prototype.dataRxMsgPeakRate = undefined;

/**
 * The data message rate received by the Cache Instance, in messages per second (msg/sec). Deprecated since 2.13. This attribute has been moved to the MsgVpnDistributedCacheClusterInstance object.
 * @member {Number} dataRxMsgRate
 */
MsgVpnDistributedCacheClusterInstanceRateModel.prototype.dataRxMsgRate = undefined;

/**
 * The data message peak rate transmitted by the Cache Instance, in messages per second (msg/sec). Deprecated since 2.13. This attribute has been moved to the MsgVpnDistributedCacheClusterInstance object.
 * @member {Number} dataTxMsgPeakRate
 */
MsgVpnDistributedCacheClusterInstanceRateModel.prototype.dataTxMsgPeakRate = undefined;

/**
 * The data message rate transmitted by the Cache Instance, in messages per second (msg/sec). Deprecated since 2.13. This attribute has been moved to the MsgVpnDistributedCacheClusterInstance object.
 * @member {Number} dataTxMsgRate
 */
MsgVpnDistributedCacheClusterInstanceRateModel.prototype.dataTxMsgRate = undefined;

/**
 * The request peak rate received by the Cache Instance, in requests per second (req/sec). Deprecated since 2.13. This attribute has been moved to the MsgVpnDistributedCacheClusterInstance object.
 * @member {Number} requestRxPeakRate
 */
MsgVpnDistributedCacheClusterInstanceRateModel.prototype.requestRxPeakRate = undefined;

/**
 * The request rate received by the Cache Instance, in requests per second (req/sec). Deprecated since 2.13. This attribute has been moved to the MsgVpnDistributedCacheClusterInstance object.
 * @member {Number} requestRxRate
 */
MsgVpnDistributedCacheClusterInstanceRateModel.prototype.requestRxRate = undefined;

