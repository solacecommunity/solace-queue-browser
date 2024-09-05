import {ApiClient} from '../ApiClient';
import {MsgVpnCertMatchingRuleAttributeFilterCollectionsModel} from './MsgVpnCertMatchingRuleAttributeFilterCollectionsModel';
import {MsgVpnCertMatchingRuleAttributeFilterLinksModel} from './MsgVpnCertMatchingRuleAttributeFilterLinksModel';
import {MsgVpnCertMatchingRuleAttributeFilterModel} from './MsgVpnCertMatchingRuleAttributeFilterModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnCertMatchingRuleAttributeFiltersResponseModel model module.
 * @module model/MsgVpnCertMatchingRuleAttributeFiltersResponseModel
 * @version 2.36
 */
export class MsgVpnCertMatchingRuleAttributeFiltersResponseModel {
  /**
   * Constructs a new <code>MsgVpnCertMatchingRuleAttributeFiltersResponseModel</code>.
   * @alias module:model/MsgVpnCertMatchingRuleAttributeFiltersResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnCertMatchingRuleAttributeFiltersResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCertMatchingRuleAttributeFiltersResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCertMatchingRuleAttributeFiltersResponseModel} The populated <code>MsgVpnCertMatchingRuleAttributeFiltersResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCertMatchingRuleAttributeFiltersResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnCertMatchingRuleAttributeFilterCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnCertMatchingRuleAttributeFilterModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnCertMatchingRuleAttributeFilterLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnCertMatchingRuleAttributeFilterCollectionsModel>} collections
 */
MsgVpnCertMatchingRuleAttributeFiltersResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnCertMatchingRuleAttributeFilterModel>} data
 */
MsgVpnCertMatchingRuleAttributeFiltersResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnCertMatchingRuleAttributeFilterLinksModel>} links
 */
MsgVpnCertMatchingRuleAttributeFiltersResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnCertMatchingRuleAttributeFiltersResponseModel.prototype.meta = undefined;

