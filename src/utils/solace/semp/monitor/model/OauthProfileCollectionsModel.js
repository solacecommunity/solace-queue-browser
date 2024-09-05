import {ApiClient} from '../ApiClient';
import {OauthProfileCollectionsAccessLevelGroupsModel} from './OauthProfileCollectionsAccessLevelGroupsModel';
import {OauthProfileCollectionsClientAllowedHostsModel} from './OauthProfileCollectionsClientAllowedHostsModel';
import {OauthProfileCollectionsClientAuthorizationParametersModel} from './OauthProfileCollectionsClientAuthorizationParametersModel';
import {OauthProfileCollectionsClientRequiredClaimsModel} from './OauthProfileCollectionsClientRequiredClaimsModel';
import {OauthProfileCollectionsDefaultMsgVpnAccessLevelExceptionsModel} from './OauthProfileCollectionsDefaultMsgVpnAccessLevelExceptionsModel';
import {OauthProfileCollectionsResourceServerRequiredClaimsModel} from './OauthProfileCollectionsResourceServerRequiredClaimsModel';

/**
 * The OauthProfileCollectionsModel model module.
 * @module model/OauthProfileCollectionsModel
 * @version 2.36
 */
export class OauthProfileCollectionsModel {
  /**
   * Constructs a new <code>OauthProfileCollectionsModel</code>.
   * @alias module:model/OauthProfileCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OauthProfileCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileCollectionsModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileCollectionsModel} The populated <code>OauthProfileCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileCollectionsModel();
      if (data.hasOwnProperty('accessLevelGroups'))
        obj.accessLevelGroups = OauthProfileCollectionsAccessLevelGroupsModel.constructFromObject(data['accessLevelGroups']);
      if (data.hasOwnProperty('clientAllowedHosts'))
        obj.clientAllowedHosts = OauthProfileCollectionsClientAllowedHostsModel.constructFromObject(data['clientAllowedHosts']);
      if (data.hasOwnProperty('clientAuthorizationParameters'))
        obj.clientAuthorizationParameters = OauthProfileCollectionsClientAuthorizationParametersModel.constructFromObject(data['clientAuthorizationParameters']);
      if (data.hasOwnProperty('clientRequiredClaims'))
        obj.clientRequiredClaims = OauthProfileCollectionsClientRequiredClaimsModel.constructFromObject(data['clientRequiredClaims']);
      if (data.hasOwnProperty('defaultMsgVpnAccessLevelExceptions'))
        obj.defaultMsgVpnAccessLevelExceptions = OauthProfileCollectionsDefaultMsgVpnAccessLevelExceptionsModel.constructFromObject(data['defaultMsgVpnAccessLevelExceptions']);
      if (data.hasOwnProperty('resourceServerRequiredClaims'))
        obj.resourceServerRequiredClaims = OauthProfileCollectionsResourceServerRequiredClaimsModel.constructFromObject(data['resourceServerRequiredClaims']);
    }
    return obj;
  }
}

/**
 * @member {module:model/OauthProfileCollectionsAccessLevelGroupsModel} accessLevelGroups
 */
OauthProfileCollectionsModel.prototype.accessLevelGroups = undefined;

/**
 * @member {module:model/OauthProfileCollectionsClientAllowedHostsModel} clientAllowedHosts
 */
OauthProfileCollectionsModel.prototype.clientAllowedHosts = undefined;

/**
 * @member {module:model/OauthProfileCollectionsClientAuthorizationParametersModel} clientAuthorizationParameters
 */
OauthProfileCollectionsModel.prototype.clientAuthorizationParameters = undefined;

/**
 * @member {module:model/OauthProfileCollectionsClientRequiredClaimsModel} clientRequiredClaims
 */
OauthProfileCollectionsModel.prototype.clientRequiredClaims = undefined;

/**
 * @member {module:model/OauthProfileCollectionsDefaultMsgVpnAccessLevelExceptionsModel} defaultMsgVpnAccessLevelExceptions
 */
OauthProfileCollectionsModel.prototype.defaultMsgVpnAccessLevelExceptions = undefined;

/**
 * @member {module:model/OauthProfileCollectionsResourceServerRequiredClaimsModel} resourceServerRequiredClaims
 */
OauthProfileCollectionsModel.prototype.resourceServerRequiredClaims = undefined;

