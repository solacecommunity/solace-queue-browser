import {ApiClient} from '../ApiClient';
import {DmrClusterCertMatchingRuleCollectionsModel} from './DmrClusterCertMatchingRuleCollectionsModel';
import {DmrClusterCertMatchingRuleLinksModel} from './DmrClusterCertMatchingRuleLinksModel';
import {DmrClusterCertMatchingRuleModel} from './DmrClusterCertMatchingRuleModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The DmrClusterCertMatchingRulesResponseModel model module.
 * @module model/DmrClusterCertMatchingRulesResponseModel
 * @version 2.36
 */
export class DmrClusterCertMatchingRulesResponseModel {
  /**
   * Constructs a new <code>DmrClusterCertMatchingRulesResponseModel</code>.
   * @alias module:model/DmrClusterCertMatchingRulesResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>DmrClusterCertMatchingRulesResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterCertMatchingRulesResponseModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterCertMatchingRulesResponseModel} The populated <code>DmrClusterCertMatchingRulesResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterCertMatchingRulesResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [DmrClusterCertMatchingRuleCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [DmrClusterCertMatchingRuleModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [DmrClusterCertMatchingRuleLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/DmrClusterCertMatchingRuleCollectionsModel>} collections
 */
DmrClusterCertMatchingRulesResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/DmrClusterCertMatchingRuleModel>} data
 */
DmrClusterCertMatchingRulesResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/DmrClusterCertMatchingRuleLinksModel>} links
 */
DmrClusterCertMatchingRulesResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
DmrClusterCertMatchingRulesResponseModel.prototype.meta = undefined;

