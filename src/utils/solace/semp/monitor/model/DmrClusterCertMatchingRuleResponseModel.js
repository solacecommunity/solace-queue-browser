import {ApiClient} from '../ApiClient';
import {DmrClusterCertMatchingRuleCollectionsModel} from './DmrClusterCertMatchingRuleCollectionsModel';
import {DmrClusterCertMatchingRuleLinksModel} from './DmrClusterCertMatchingRuleLinksModel';
import {DmrClusterCertMatchingRuleModel} from './DmrClusterCertMatchingRuleModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The DmrClusterCertMatchingRuleResponseModel model module.
 * @module model/DmrClusterCertMatchingRuleResponseModel
 * @version 2.36
 */
export class DmrClusterCertMatchingRuleResponseModel {
  /**
   * Constructs a new <code>DmrClusterCertMatchingRuleResponseModel</code>.
   * @alias module:model/DmrClusterCertMatchingRuleResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>DmrClusterCertMatchingRuleResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterCertMatchingRuleResponseModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterCertMatchingRuleResponseModel} The populated <code>DmrClusterCertMatchingRuleResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterCertMatchingRuleResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = DmrClusterCertMatchingRuleCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = DmrClusterCertMatchingRuleModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = DmrClusterCertMatchingRuleLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/DmrClusterCertMatchingRuleCollectionsModel} collections
 */
DmrClusterCertMatchingRuleResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/DmrClusterCertMatchingRuleModel} data
 */
DmrClusterCertMatchingRuleResponseModel.prototype.data = undefined;

/**
 * @member {module:model/DmrClusterCertMatchingRuleLinksModel} links
 */
DmrClusterCertMatchingRuleResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
DmrClusterCertMatchingRuleResponseModel.prototype.meta = undefined;

