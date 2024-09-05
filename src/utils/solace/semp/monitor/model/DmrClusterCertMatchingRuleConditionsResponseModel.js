import {ApiClient} from '../ApiClient';
import {DmrClusterCertMatchingRuleConditionCollectionsModel} from './DmrClusterCertMatchingRuleConditionCollectionsModel';
import {DmrClusterCertMatchingRuleConditionLinksModel} from './DmrClusterCertMatchingRuleConditionLinksModel';
import {DmrClusterCertMatchingRuleConditionModel} from './DmrClusterCertMatchingRuleConditionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The DmrClusterCertMatchingRuleConditionsResponseModel model module.
 * @module model/DmrClusterCertMatchingRuleConditionsResponseModel
 * @version 2.36
 */
export class DmrClusterCertMatchingRuleConditionsResponseModel {
  /**
   * Constructs a new <code>DmrClusterCertMatchingRuleConditionsResponseModel</code>.
   * @alias module:model/DmrClusterCertMatchingRuleConditionsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>DmrClusterCertMatchingRuleConditionsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterCertMatchingRuleConditionsResponseModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterCertMatchingRuleConditionsResponseModel} The populated <code>DmrClusterCertMatchingRuleConditionsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterCertMatchingRuleConditionsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [DmrClusterCertMatchingRuleConditionCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [DmrClusterCertMatchingRuleConditionModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [DmrClusterCertMatchingRuleConditionLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/DmrClusterCertMatchingRuleConditionCollectionsModel>} collections
 */
DmrClusterCertMatchingRuleConditionsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/DmrClusterCertMatchingRuleConditionModel>} data
 */
DmrClusterCertMatchingRuleConditionsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/DmrClusterCertMatchingRuleConditionLinksModel>} links
 */
DmrClusterCertMatchingRuleConditionsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
DmrClusterCertMatchingRuleConditionsResponseModel.prototype.meta = undefined;

