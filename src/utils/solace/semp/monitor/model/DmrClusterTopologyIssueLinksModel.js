import {ApiClient} from '../ApiClient';

/**
 * The DmrClusterTopologyIssueLinksModel model module.
 * @module model/DmrClusterTopologyIssueLinksModel
 * @version 2.36
 */
export class DmrClusterTopologyIssueLinksModel {
  /**
   * Constructs a new <code>DmrClusterTopologyIssueLinksModel</code>.
   * @alias module:model/DmrClusterTopologyIssueLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DmrClusterTopologyIssueLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterTopologyIssueLinksModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterTopologyIssueLinksModel} The populated <code>DmrClusterTopologyIssueLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterTopologyIssueLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Cluster Topology Issue object.
 * @member {String} uri
 */
DmrClusterTopologyIssueLinksModel.prototype.uri = undefined;

