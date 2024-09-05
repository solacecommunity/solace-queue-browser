import {ApiClient} from '../ApiClient';

/**
 * The DmrClusterTopologyIssueModel model module.
 * @module model/DmrClusterTopologyIssueModel
 * @version 2.36
 */
export class DmrClusterTopologyIssueModel {
  /**
   * Constructs a new <code>DmrClusterTopologyIssueModel</code>.
   * @alias module:model/DmrClusterTopologyIssueModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DmrClusterTopologyIssueModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterTopologyIssueModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterTopologyIssueModel} The populated <code>DmrClusterTopologyIssueModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterTopologyIssueModel();
      if (data.hasOwnProperty('dmrClusterName'))
        obj.dmrClusterName = ApiClient.convertToType(data['dmrClusterName'], 'String');
      if (data.hasOwnProperty('topologyIssue'))
        obj.topologyIssue = ApiClient.convertToType(data['topologyIssue'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the Cluster.
 * @member {String} dmrClusterName
 */
DmrClusterTopologyIssueModel.prototype.dmrClusterName = undefined;

/**
 * The topology issue discovered in the Cluster. A topology issue indicates incorrect or inconsistent configuration within the DMR network. Such issues will cause messages to be undelivered or lost.
 * @member {String} topologyIssue
 */
DmrClusterTopologyIssueModel.prototype.topologyIssue = undefined;

