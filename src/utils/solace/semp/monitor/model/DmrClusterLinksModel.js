import {ApiClient} from '../ApiClient';

/**
 * The DmrClusterLinksModel model module.
 * @module model/DmrClusterLinksModel
 * @version 2.36
 */
export class DmrClusterLinksModel {
  /**
   * Constructs a new <code>DmrClusterLinksModel</code>.
   * @alias module:model/DmrClusterLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DmrClusterLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterLinksModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterLinksModel} The populated <code>DmrClusterLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterLinksModel();
      if (data.hasOwnProperty('certMatchingRulesUri'))
        obj.certMatchingRulesUri = ApiClient.convertToType(data['certMatchingRulesUri'], 'String');
      if (data.hasOwnProperty('linksUri'))
        obj.linksUri = ApiClient.convertToType(data['linksUri'], 'String');
      if (data.hasOwnProperty('topologyIssuesUri'))
        obj.topologyIssuesUri = ApiClient.convertToType(data['topologyIssuesUri'], 'String');
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Cluster's collection of Certificate Matching Rule objects. Available since 2.28.
 * @member {String} certMatchingRulesUri
 */
DmrClusterLinksModel.prototype.certMatchingRulesUri = undefined;

/**
 * The URI of this Cluster's collection of Link objects.
 * @member {String} linksUri
 */
DmrClusterLinksModel.prototype.linksUri = undefined;

/**
 * The URI of this Cluster's collection of Cluster Topology Issue objects.
 * @member {String} topologyIssuesUri
 */
DmrClusterLinksModel.prototype.topologyIssuesUri = undefined;

/**
 * The URI of this Cluster object.
 * @member {String} uri
 */
DmrClusterLinksModel.prototype.uri = undefined;

