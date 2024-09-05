import {ApiClient} from '../ApiClient';
import {MsgVpnCertMatchingRuleCollectionsModel} from './MsgVpnCertMatchingRuleCollectionsModel';
import {MsgVpnCertMatchingRuleLinksModel} from './MsgVpnCertMatchingRuleLinksModel';
import {MsgVpnCertMatchingRuleModel} from './MsgVpnCertMatchingRuleModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnCertMatchingRulesResponseModel model module.
 * @module model/MsgVpnCertMatchingRulesResponseModel
 * @version 2.36
 */
export class MsgVpnCertMatchingRulesResponseModel {
  /**
   * Constructs a new <code>MsgVpnCertMatchingRulesResponseModel</code>.
   * @alias module:model/MsgVpnCertMatchingRulesResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnCertMatchingRulesResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCertMatchingRulesResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCertMatchingRulesResponseModel} The populated <code>MsgVpnCertMatchingRulesResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCertMatchingRulesResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnCertMatchingRuleCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnCertMatchingRuleModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnCertMatchingRuleLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnCertMatchingRuleCollectionsModel>} collections
 */
MsgVpnCertMatchingRulesResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnCertMatchingRuleModel>} data
 */
MsgVpnCertMatchingRulesResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnCertMatchingRuleLinksModel>} links
 */
MsgVpnCertMatchingRulesResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnCertMatchingRulesResponseModel.prototype.meta = undefined;

