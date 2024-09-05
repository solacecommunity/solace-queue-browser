import {ApiClient} from '../ApiClient';
import {MsgVpnCertMatchingRuleCollectionsModel} from './MsgVpnCertMatchingRuleCollectionsModel';
import {MsgVpnCertMatchingRuleLinksModel} from './MsgVpnCertMatchingRuleLinksModel';
import {MsgVpnCertMatchingRuleModel} from './MsgVpnCertMatchingRuleModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnCertMatchingRuleResponseModel model module.
 * @module model/MsgVpnCertMatchingRuleResponseModel
 * @version 2.36
 */
export class MsgVpnCertMatchingRuleResponseModel {
  /**
   * Constructs a new <code>MsgVpnCertMatchingRuleResponseModel</code>.
   * @alias module:model/MsgVpnCertMatchingRuleResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnCertMatchingRuleResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCertMatchingRuleResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCertMatchingRuleResponseModel} The populated <code>MsgVpnCertMatchingRuleResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCertMatchingRuleResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnCertMatchingRuleCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnCertMatchingRuleModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnCertMatchingRuleLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnCertMatchingRuleCollectionsModel} collections
 */
MsgVpnCertMatchingRuleResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnCertMatchingRuleModel} data
 */
MsgVpnCertMatchingRuleResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnCertMatchingRuleLinksModel} links
 */
MsgVpnCertMatchingRuleResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnCertMatchingRuleResponseModel.prototype.meta = undefined;

