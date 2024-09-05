import {ApiClient} from '../ApiClient';

/**
 * The DmrClusterCollectionsTopologyIssuesModel model module.
 * @module model/DmrClusterCollectionsTopologyIssuesModel
 * @version 2.36
 */
export class DmrClusterCollectionsTopologyIssuesModel {
  /**
   * Constructs a new <code>DmrClusterCollectionsTopologyIssuesModel</code>.
   * @alias module:model/DmrClusterCollectionsTopologyIssuesModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DmrClusterCollectionsTopologyIssuesModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterCollectionsTopologyIssuesModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterCollectionsTopologyIssuesModel} The populated <code>DmrClusterCollectionsTopologyIssuesModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterCollectionsTopologyIssuesModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the topologyIssues collection.
 * @member {Number} count
 */
DmrClusterCollectionsTopologyIssuesModel.prototype.count = undefined;

