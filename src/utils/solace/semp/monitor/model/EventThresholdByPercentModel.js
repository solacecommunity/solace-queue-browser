import {ApiClient} from '../ApiClient';

/**
 * The EventThresholdByPercentModel model module.
 * @module model/EventThresholdByPercentModel
 * @version 2.36
 */
export class EventThresholdByPercentModel {
  /**
   * Constructs a new <code>EventThresholdByPercentModel</code>.
   * @alias module:model/EventThresholdByPercentModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>EventThresholdByPercentModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EventThresholdByPercentModel} obj Optional instance to populate.
   * @return {module:model/EventThresholdByPercentModel} The populated <code>EventThresholdByPercentModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EventThresholdByPercentModel();
      if (data.hasOwnProperty('clearPercent'))
        obj.clearPercent = ApiClient.convertToType(data['clearPercent'], 'Number');
      if (data.hasOwnProperty('setPercent'))
        obj.setPercent = ApiClient.convertToType(data['setPercent'], 'Number');
    }
    return obj;
  }
}

/**
 * The clear threshold for the value of this counter as a percentage of its maximum value. Falling below this value will trigger a corresponding event.
 * @member {Number} clearPercent
 */
EventThresholdByPercentModel.prototype.clearPercent = undefined;

/**
 * The set threshold for the value of this counter as a percentage of its maximum value. Exceeding this value will trigger a corresponding event.
 * @member {Number} setPercent
 */
EventThresholdByPercentModel.prototype.setPercent = undefined;

