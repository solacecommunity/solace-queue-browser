import {ApiClient} from '../ApiClient';

/**
 * The AboutUserModel model module.
 * @module model/AboutUserModel
 * @version 2.36
 */
export class AboutUserModel {
  /**
   * Constructs a new <code>AboutUserModel</code>.
   * @alias module:model/AboutUserModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AboutUserModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AboutUserModel} obj Optional instance to populate.
   * @return {module:model/AboutUserModel} The populated <code>AboutUserModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AboutUserModel();
      if (data.hasOwnProperty('globalAccessLevel'))
        obj.globalAccessLevel = ApiClient.convertToType(data['globalAccessLevel'], 'String');
      if (data.hasOwnProperty('sessionActive'))
        obj.sessionActive = ApiClient.convertToType(data['sessionActive'], 'Boolean');
      if (data.hasOwnProperty('sessionCreateTime'))
        obj.sessionCreateTime = ApiClient.convertToType(data['sessionCreateTime'], 'Number');
      if (data.hasOwnProperty('sessionCurrentTime'))
        obj.sessionCurrentTime = ApiClient.convertToType(data['sessionCurrentTime'], 'Number');
      if (data.hasOwnProperty('sessionHardExpiryTime'))
        obj.sessionHardExpiryTime = ApiClient.convertToType(data['sessionHardExpiryTime'], 'Number');
      if (data.hasOwnProperty('sessionId'))
        obj.sessionId = ApiClient.convertToType(data['sessionId'], 'String');
      if (data.hasOwnProperty('sessionIdleExpiryTime'))
        obj.sessionIdleExpiryTime = ApiClient.convertToType(data['sessionIdleExpiryTime'], 'Number');
      if (data.hasOwnProperty('username'))
        obj.username = ApiClient.convertToType(data['username'], 'String');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>globalAccessLevel</code> property.
 * @enum {String}
 * @readonly
 */
AboutUserModel.GlobalAccessLevelEnum = {
  /**
   * value: "admin"
   * @const
   */
  admin: "admin",

  /**
   * value: "none"
   * @const
   */
  none: "none",

  /**
   * value: "read-only"
   * @const
   */
  readOnly: "read-only",

  /**
   * value: "read-write"
   * @const
   */
  readWrite: "read-write"
};
/**
 * The global access level of the User. The allowed values and their meaning are:  <pre> \"admin\" - Full administrative access. \"none\" - No access. \"read-only\" - Read only access. \"read-write\" - Read and write access. </pre> 
 * @member {module:model/AboutUserModel.GlobalAccessLevelEnum} globalAccessLevel
 */
AboutUserModel.prototype.globalAccessLevel = undefined;

/**
 * Indicates whether a session is active for this request. Available since 2.24.
 * @member {Boolean} sessionActive
 */
AboutUserModel.prototype.sessionActive = undefined;

/**
 * The timestamp of when the session was created. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time). Available since 2.21.
 * @member {Number} sessionCreateTime
 */
AboutUserModel.prototype.sessionCreateTime = undefined;

/**
 * The current server timestamp. This is provided as a reference point for the other timestamps provided. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time). Available since 2.21.
 * @member {Number} sessionCurrentTime
 */
AboutUserModel.prototype.sessionCurrentTime = undefined;

/**
 * The hard expiry time for the session. After this time the session will be invalid, regardless of activity. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time). Available since 2.21.
 * @member {Number} sessionHardExpiryTime
 */
AboutUserModel.prototype.sessionHardExpiryTime = undefined;

/**
 * An identifier for the session to differentiate this session from other sessions for the same user. This value is not guaranteed to be unique between active sessions for different users. Available since 2.21.
 * @member {String} sessionId
 */
AboutUserModel.prototype.sessionId = undefined;

/**
 * The session idle expiry time. After this time the session will be invalid if there has been no activity. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time). Available since 2.21.
 * @member {Number} sessionIdleExpiryTime
 */
AboutUserModel.prototype.sessionIdleExpiryTime = undefined;

/**
 * The username of the User. Available since 2.17.
 * @member {String} username
 */
AboutUserModel.prototype.username = undefined;

