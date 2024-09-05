import {ApiClient} from '../ApiClient';
import {DmrClusterCollectionsCertMatchingRulesModel} from './DmrClusterCollectionsCertMatchingRulesModel';
import {DmrClusterCollectionsLinksModel} from './DmrClusterCollectionsLinksModel';
import {DmrClusterCollectionsTopologyIssuesModel} from './DmrClusterCollectionsTopologyIssuesModel';

/**
 * The DmrClusterCollectionsModel model module.
 * @module model/DmrClusterCollectionsModel
 * @version 2.36
 */
export class DmrClusterCollectionsModel {
  /**
   * Constructs a new <code>DmrClusterCollectionsModel</code>.
   * @alias module:model/DmrClusterCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DmrClusterCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterCollectionsModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterCollectionsModel} The populated <code>DmrClusterCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterCollectionsModel();
      if (data.hasOwnProperty('certMatchingRules'))
        obj.certMatchingRules = DmrClusterCollectionsCertMatchingRulesModel.constructFromObject(data['certMatchingRules']);
      if (data.hasOwnProperty('links'))
        obj.links = DmrClusterCollectionsLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('topologyIssues'))
        obj.topologyIssues = DmrClusterCollectionsTopologyIssuesModel.constructFromObject(data['topologyIssues']);
    }
    return obj;
  }
}

/**
 * @member {module:model/DmrClusterCollectionsCertMatchingRulesModel} certMatchingRules
 */
DmrClusterCollectionsModel.prototype.certMatchingRules = undefined;

/**
 * @member {module:model/DmrClusterCollectionsLinksModel} links
 */
DmrClusterCollectionsModel.prototype.links = undefined;

/**
 * @member {module:model/DmrClusterCollectionsTopologyIssuesModel} topologyIssues
 */
DmrClusterCollectionsModel.prototype.topologyIssues = undefined;

