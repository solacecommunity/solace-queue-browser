import {ApiClient} from '../ApiClient';

/**
 * The DmrClusterTopologyIssueCollectionsModel model module.
 * @module model/DmrClusterTopologyIssueCollectionsModel
 * @version 2.36
 */
export class DmrClusterTopologyIssueCollectionsModel {
  /**
   * Constructs a new <code>DmrClusterTopologyIssueCollectionsModel</code>.
   * @alias module:model/DmrClusterTopologyIssueCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DmrClusterTopologyIssueCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterTopologyIssueCollectionsModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterTopologyIssueCollectionsModel} The populated <code>DmrClusterTopologyIssueCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterTopologyIssueCollectionsModel();
    }
    return obj;
  }
}
