import {ApiClient} from '../ApiClient';

/**
 * The SessionModel model module.
 * @module model/SessionModel
 * @version 2.36
 */
export class SessionModel {
  /**
   * Constructs a new <code>SessionModel</code>.
   * @alias module:model/SessionModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SessionModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SessionModel} obj Optional instance to populate.
   * @return {module:model/SessionModel} The populated <code>SessionModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SessionModel();
      if (data.hasOwnProperty('createTime'))
        obj.createTime = ApiClient.convertToType(data['createTime'], 'Number');
      if (data.hasOwnProperty('lastActivityTime'))
        obj.lastActivityTime = ApiClient.convertToType(data['lastActivityTime'], 'Number');
      if (data.hasOwnProperty('sessionId'))
        obj.sessionId = ApiClient.convertToType(data['sessionId'], 'String');
      if (data.hasOwnProperty('sessionUsername'))
        obj.sessionUsername = ApiClient.convertToType(data['sessionUsername'], 'String');
    }
    return obj;
  }
}

/**
 * The timestamp of when the session was created. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} createTime
 */
SessionModel.prototype.createTime = undefined;

/**
 * The timestamp of when the last activity on the session occurred. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} lastActivityTime
 */
SessionModel.prototype.lastActivityTime = undefined;

/**
 * The unique identifier for the session.
 * @member {String} sessionId
 */
SessionModel.prototype.sessionId = undefined;

/**
 * The username used for authorization.
 * @member {String} sessionUsername
 */
SessionModel.prototype.sessionUsername = undefined;

