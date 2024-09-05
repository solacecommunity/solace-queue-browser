import {ApiClient} from '../ApiClient';
import {MsgVpnCertMatchingRuleConditionCollectionsModel} from './MsgVpnCertMatchingRuleConditionCollectionsModel';
import {MsgVpnCertMatchingRuleConditionLinksModel} from './MsgVpnCertMatchingRuleConditionLinksModel';
import {MsgVpnCertMatchingRuleConditionModel} from './MsgVpnCertMatchingRuleConditionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnCertMatchingRuleConditionResponseModel model module.
 * @module model/MsgVpnCertMatchingRuleConditionResponseModel
 * @version 2.36
 */
export class MsgVpnCertMatchingRuleConditionResponseModel {
  /**
   * Constructs a new <code>MsgVpnCertMatchingRuleConditionResponseModel</code>.
   * @alias module:model/MsgVpnCertMatchingRuleConditionResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnCertMatchingRuleConditionResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCertMatchingRuleConditionResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCertMatchingRuleConditionResponseModel} The populated <code>MsgVpnCertMatchingRuleConditionResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCertMatchingRuleConditionResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnCertMatchingRuleConditionCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnCertMatchingRuleConditionModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnCertMatchingRuleConditionLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnCertMatchingRuleConditionCollectionsModel} collections
 */
MsgVpnCertMatchingRuleConditionResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnCertMatchingRuleConditionModel} data
 */
MsgVpnCertMatchingRuleConditionResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnCertMatchingRuleConditionLinksModel} links
 */
MsgVpnCertMatchingRuleConditionResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnCertMatchingRuleConditionResponseModel.prototype.meta = undefined;

