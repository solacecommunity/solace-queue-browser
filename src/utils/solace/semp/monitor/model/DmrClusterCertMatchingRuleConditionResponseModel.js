import {ApiClient} from '../ApiClient';
import {DmrClusterCertMatchingRuleConditionCollectionsModel} from './DmrClusterCertMatchingRuleConditionCollectionsModel';
import {DmrClusterCertMatchingRuleConditionLinksModel} from './DmrClusterCertMatchingRuleConditionLinksModel';
import {DmrClusterCertMatchingRuleConditionModel} from './DmrClusterCertMatchingRuleConditionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The DmrClusterCertMatchingRuleConditionResponseModel model module.
 * @module model/DmrClusterCertMatchingRuleConditionResponseModel
 * @version 2.36
 */
export class DmrClusterCertMatchingRuleConditionResponseModel {
  /**
   * Constructs a new <code>DmrClusterCertMatchingRuleConditionResponseModel</code>.
   * @alias module:model/DmrClusterCertMatchingRuleConditionResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>DmrClusterCertMatchingRuleConditionResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterCertMatchingRuleConditionResponseModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterCertMatchingRuleConditionResponseModel} The populated <code>DmrClusterCertMatchingRuleConditionResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterCertMatchingRuleConditionResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = DmrClusterCertMatchingRuleConditionCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = DmrClusterCertMatchingRuleConditionModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = DmrClusterCertMatchingRuleConditionLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/DmrClusterCertMatchingRuleConditionCollectionsModel} collections
 */
DmrClusterCertMatchingRuleConditionResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/DmrClusterCertMatchingRuleConditionModel} data
 */
DmrClusterCertMatchingRuleConditionResponseModel.prototype.data = undefined;

/**
 * @member {module:model/DmrClusterCertMatchingRuleConditionLinksModel} links
 */
DmrClusterCertMatchingRuleConditionResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
DmrClusterCertMatchingRuleConditionResponseModel.prototype.meta = undefined;

