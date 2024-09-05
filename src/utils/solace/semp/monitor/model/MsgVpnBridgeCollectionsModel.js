import {ApiClient} from '../ApiClient';
import {MsgVpnBridgeCollectionsLocalSubscriptionsModel} from './MsgVpnBridgeCollectionsLocalSubscriptionsModel';
import {MsgVpnBridgeCollectionsRemoteMsgVpnsModel} from './MsgVpnBridgeCollectionsRemoteMsgVpnsModel';
import {MsgVpnBridgeCollectionsRemoteSubscriptionsModel} from './MsgVpnBridgeCollectionsRemoteSubscriptionsModel';
import {MsgVpnBridgeCollectionsTlsTrustedCommonNamesModel} from './MsgVpnBridgeCollectionsTlsTrustedCommonNamesModel';

/**
 * The MsgVpnBridgeCollectionsModel model module.
 * @module model/MsgVpnBridgeCollectionsModel
 * @version 2.36
 */
export class MsgVpnBridgeCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnBridgeCollectionsModel</code>.
   * @alias module:model/MsgVpnBridgeCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnBridgeCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnBridgeCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnBridgeCollectionsModel} The populated <code>MsgVpnBridgeCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnBridgeCollectionsModel();
      if (data.hasOwnProperty('localSubscriptions'))
        obj.localSubscriptions = MsgVpnBridgeCollectionsLocalSubscriptionsModel.constructFromObject(data['localSubscriptions']);
      if (data.hasOwnProperty('remoteMsgVpns'))
        obj.remoteMsgVpns = MsgVpnBridgeCollectionsRemoteMsgVpnsModel.constructFromObject(data['remoteMsgVpns']);
      if (data.hasOwnProperty('remoteSubscriptions'))
        obj.remoteSubscriptions = MsgVpnBridgeCollectionsRemoteSubscriptionsModel.constructFromObject(data['remoteSubscriptions']);
      if (data.hasOwnProperty('tlsTrustedCommonNames'))
        obj.tlsTrustedCommonNames = MsgVpnBridgeCollectionsTlsTrustedCommonNamesModel.constructFromObject(data['tlsTrustedCommonNames']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnBridgeCollectionsLocalSubscriptionsModel} localSubscriptions
 */
MsgVpnBridgeCollectionsModel.prototype.localSubscriptions = undefined;

/**
 * @member {module:model/MsgVpnBridgeCollectionsRemoteMsgVpnsModel} remoteMsgVpns
 */
MsgVpnBridgeCollectionsModel.prototype.remoteMsgVpns = undefined;

/**
 * @member {module:model/MsgVpnBridgeCollectionsRemoteSubscriptionsModel} remoteSubscriptions
 */
MsgVpnBridgeCollectionsModel.prototype.remoteSubscriptions = undefined;

/**
 * @member {module:model/MsgVpnBridgeCollectionsTlsTrustedCommonNamesModel} tlsTrustedCommonNames
 */
MsgVpnBridgeCollectionsModel.prototype.tlsTrustedCommonNames = undefined;

