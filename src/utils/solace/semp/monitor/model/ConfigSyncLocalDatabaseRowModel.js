import {ApiClient} from '../ApiClient';

/**
 * The ConfigSyncLocalDatabaseRowModel model module.
 * @module model/ConfigSyncLocalDatabaseRowModel
 * @version 2.36
 */
export class ConfigSyncLocalDatabaseRowModel {
  /**
   * Constructs a new <code>ConfigSyncLocalDatabaseRowModel</code>.
   * @alias module:model/ConfigSyncLocalDatabaseRowModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ConfigSyncLocalDatabaseRowModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConfigSyncLocalDatabaseRowModel} obj Optional instance to populate.
   * @return {module:model/ConfigSyncLocalDatabaseRowModel} The populated <code>ConfigSyncLocalDatabaseRowModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ConfigSyncLocalDatabaseRowModel();
      if (data.hasOwnProperty('lastRequest'))
        obj.lastRequest = ApiClient.convertToType(data['lastRequest'], 'String');
      if (data.hasOwnProperty('lastResult'))
        obj.lastResult = ApiClient.convertToType(data['lastResult'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('role'))
        obj.role = ApiClient.convertToType(data['role'], 'String');
      if (data.hasOwnProperty('syncStatus'))
        obj.syncStatus = ApiClient.convertToType(data['syncStatus'], 'String');
      if (data.hasOwnProperty('timeInState'))
        obj.timeInState = ApiClient.convertToType(data['timeInState'], 'Number');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
    }
    return obj;
  }
}

/**
 * The last series of commands exchanged between Config Sync sites. Note that this value is only updated during transitions to any syncStatus that is not \"in-sync\".
 * @member {String} lastRequest
 */
ConfigSyncLocalDatabaseRowModel.prototype.lastRequest = undefined;

/**
 * The result of the last exchange between Config Sync sites.
 * @member {String} lastResult
 */
ConfigSyncLocalDatabaseRowModel.prototype.lastResult = undefined;

/**
 * The name is \"site\" when the row type is \"router\", otherwise it is the Message VPN name.
 * @member {String} name
 */
ConfigSyncLocalDatabaseRowModel.prototype.name = undefined;

/**
 * The row's role relative to the local broker. The allowed values and their meaning are:  <pre> \"unknown\" - The role is unknown. \"leader\" - In HA deployments, the role of the event broker and Message VPNs in the Config Sync database of both HA mates is always Leader. \"follower\" - Only replication-enabled Message VPNs on standby replication mates can have a Follower role. </pre> 
 * @member {String} role
 */
ConfigSyncLocalDatabaseRowModel.prototype.role = undefined;

/**
 * The synchronization status of the row. The allowed values and their meaning are:  <pre> \"unknown\" - The state is unknown. \"in-sync\" - The config data is synchronized between Message VPNs. \"reconciling\" - The config data is reconciling between Message VPNs. \"blocked\" - The config data is blocked from reconciling due to an error. \"out-of-sync\" - The config data is out of sync between Message VPNs. \"down\" - The state is down due to configuration. </pre> 
 * @member {String} syncStatus
 */
ConfigSyncLocalDatabaseRowModel.prototype.syncStatus = undefined;

/**
 * The amount of time this row has remained in the shown syncStatus, in seconds.
 * @member {Number} timeInState
 */
ConfigSyncLocalDatabaseRowModel.prototype.timeInState = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
ConfigSyncLocalDatabaseRowModel.TypeEnum = {
  /**
   * value: "router"
   * @const
   */
  router: "router",

  /**
   * value: "vpn"
   * @const
   */
  vpn: "vpn"
};
/**
 * The type of the row. Can be one of \"router\" or \"vpn\". There is one \"router\" row and one row for each configured \"vpn\". Each row represents a table of information that is synchronized between Config Sync and replication mates. The allowed values and their meaning are:  <pre> \"router\" - The Config Sync database row is for the Router. \"vpn\" - The Config Sync database row is for a Message VPN. </pre> 
 * @member {module:model/ConfigSyncLocalDatabaseRowModel.TypeEnum} type
 */
ConfigSyncLocalDatabaseRowModel.prototype.type = undefined;

