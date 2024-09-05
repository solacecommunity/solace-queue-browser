import {ApiClient} from '../ApiClient';

/**
 * The SempErrorModel model module.
 * @module model/SempErrorModel
 * @version 2.36
 */
export class SempErrorModel {
  /**
   * Constructs a new <code>SempErrorModel</code>.
   * @alias module:model/SempErrorModel
   * @class
   * @param code {Number} The error code which uniquely identifies the error that has occurred.
   * @param description {String} The verbose description of the problem.
   * @param status {String} The terse status string associated with `code`.
   */
  constructor(code, description, status) {
    this.code = code;
    this.description = description;
    this.status = status;
  }

  /**
   * Constructs a <code>SempErrorModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SempErrorModel} obj Optional instance to populate.
   * @return {module:model/SempErrorModel} The populated <code>SempErrorModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SempErrorModel();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
    }
    return obj;
  }
}

/**
 * The error code which uniquely identifies the error that has occurred.
 * @member {Number} code
 */
SempErrorModel.prototype.code = undefined;

/**
 * The verbose description of the problem.
 * @member {String} description
 */
SempErrorModel.prototype.description = undefined;

/**
 * The terse status string associated with `code`.
 * @member {String} status
 */
SempErrorModel.prototype.status = undefined;

