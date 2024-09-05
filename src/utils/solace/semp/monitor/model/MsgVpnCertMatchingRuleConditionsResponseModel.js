import {ApiClient} from '../ApiClient';
import {MsgVpnCertMatchingRuleConditionCollectionsModel} from './MsgVpnCertMatchingRuleConditionCollectionsModel';
import {MsgVpnCertMatchingRuleConditionLinksModel} from './MsgVpnCertMatchingRuleConditionLinksModel';
import {MsgVpnCertMatchingRuleConditionModel} from './MsgVpnCertMatchingRuleConditionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnCertMatchingRuleConditionsResponseModel model module.
 * @module model/MsgVpnCertMatchingRuleConditionsResponseModel
 * @version 2.36
 */
export class MsgVpnCertMatchingRuleConditionsResponseModel {
  /**
   * Constructs a new <code>MsgVpnCertMatchingRuleConditionsResponseModel</code>.
   * @alias module:model/MsgVpnCertMatchingRuleConditionsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnCertMatchingRuleConditionsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCertMatchingRuleConditionsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCertMatchingRuleConditionsResponseModel} The populated <code>MsgVpnCertMatchingRuleConditionsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCertMatchingRuleConditionsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnCertMatchingRuleConditionCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnCertMatchingRuleConditionModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnCertMatchingRuleConditionLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnCertMatchingRuleConditionCollectionsModel>} collections
 */
MsgVpnCertMatchingRuleConditionsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnCertMatchingRuleConditionModel>} data
 */
MsgVpnCertMatchingRuleConditionsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnCertMatchingRuleConditionLinksModel>} links
 */
MsgVpnCertMatchingRuleConditionsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnCertMatchingRuleConditionsResponseModel.prototype.meta = undefined;

