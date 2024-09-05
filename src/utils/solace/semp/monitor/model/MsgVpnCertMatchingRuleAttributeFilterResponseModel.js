import {ApiClient} from '../ApiClient';
import {MsgVpnCertMatchingRuleAttributeFilterCollectionsModel} from './MsgVpnCertMatchingRuleAttributeFilterCollectionsModel';
import {MsgVpnCertMatchingRuleAttributeFilterLinksModel} from './MsgVpnCertMatchingRuleAttributeFilterLinksModel';
import {MsgVpnCertMatchingRuleAttributeFilterModel} from './MsgVpnCertMatchingRuleAttributeFilterModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnCertMatchingRuleAttributeFilterResponseModel model module.
 * @module model/MsgVpnCertMatchingRuleAttributeFilterResponseModel
 * @version 2.36
 */
export class MsgVpnCertMatchingRuleAttributeFilterResponseModel {
  /**
   * Constructs a new <code>MsgVpnCertMatchingRuleAttributeFilterResponseModel</code>.
   * @alias module:model/MsgVpnCertMatchingRuleAttributeFilterResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnCertMatchingRuleAttributeFilterResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCertMatchingRuleAttributeFilterResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCertMatchingRuleAttributeFilterResponseModel} The populated <code>MsgVpnCertMatchingRuleAttributeFilterResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCertMatchingRuleAttributeFilterResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnCertMatchingRuleAttributeFilterCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnCertMatchingRuleAttributeFilterModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnCertMatchingRuleAttributeFilterLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnCertMatchingRuleAttributeFilterCollectionsModel} collections
 */
MsgVpnCertMatchingRuleAttributeFilterResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnCertMatchingRuleAttributeFilterModel} data
 */
MsgVpnCertMatchingRuleAttributeFilterResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnCertMatchingRuleAttributeFilterLinksModel} links
 */
MsgVpnCertMatchingRuleAttributeFilterResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnCertMatchingRuleAttributeFilterResponseModel.prototype.meta = undefined;

