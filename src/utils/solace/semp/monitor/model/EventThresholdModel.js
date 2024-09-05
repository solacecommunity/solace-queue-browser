import {ApiClient} from '../ApiClient';

/**
 * The EventThresholdModel model module.
 * @module model/EventThresholdModel
 * @version 2.36
 */
export class EventThresholdModel {
  /**
   * Constructs a new <code>EventThresholdModel</code>.
   * @alias module:model/EventThresholdModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>EventThresholdModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EventThresholdModel} obj Optional instance to populate.
   * @return {module:model/EventThresholdModel} The populated <code>EventThresholdModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EventThresholdModel();
      if (data.hasOwnProperty('clearPercent'))
        obj.clearPercent = ApiClient.convertToType(data['clearPercent'], 'Number');
      if (data.hasOwnProperty('clearValue'))
        obj.clearValue = ApiClient.convertToType(data['clearValue'], 'Number');
      if (data.hasOwnProperty('setPercent'))
        obj.setPercent = ApiClient.convertToType(data['setPercent'], 'Number');
      if (data.hasOwnProperty('setValue'))
        obj.setValue = ApiClient.convertToType(data['setValue'], 'Number');
    }
    return obj;
  }
}

/**
 * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
 * @member {Number} clearPercent
 */
EventThresholdModel.prototype.clearPercent = undefined;

/**
 * The clear threshold for the absolute value of this counter. Falling below this value will trigger a corresponding event.
 * @member {Number} clearValue
 */
EventThresholdModel.prototype.clearValue = undefined;

/**
 * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
 * @member {Number} setPercent
 */
EventThresholdModel.prototype.setPercent = undefined;

/**
 * The set threshold for the absolute value of this counter. Exceeding this value will trigger a corresponding event.
 * @member {Number} setValue
 */
EventThresholdModel.prototype.setValue = undefined;

