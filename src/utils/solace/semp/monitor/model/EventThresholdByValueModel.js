import {ApiClient} from '../ApiClient';

/**
 * The EventThresholdByValueModel model module.
 * @module model/EventThresholdByValueModel
 * @version 2.36
 */
export class EventThresholdByValueModel {
  /**
   * Constructs a new <code>EventThresholdByValueModel</code>.
   * @alias module:model/EventThresholdByValueModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>EventThresholdByValueModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EventThresholdByValueModel} obj Optional instance to populate.
   * @return {module:model/EventThresholdByValueModel} The populated <code>EventThresholdByValueModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EventThresholdByValueModel();
      if (data.hasOwnProperty('clearValue'))
        obj.clearValue = ApiClient.convertToType(data['clearValue'], 'Number');
      if (data.hasOwnProperty('setValue'))
        obj.setValue = ApiClient.convertToType(data['setValue'], 'Number');
    }
    return obj;
  }
}

/**
 * The clear threshold for the absolute value of this counter or rate. Falling below this value will trigger a corresponding event.
 * @member {Number} clearValue
 */
EventThresholdByValueModel.prototype.clearValue = undefined;

/**
 * The set threshold for the absolute value of this counter or rate. Exceeding this value will trigger a corresponding event.
 * @member {Number} setValue
 */
EventThresholdByValueModel.prototype.setValue = undefined;

