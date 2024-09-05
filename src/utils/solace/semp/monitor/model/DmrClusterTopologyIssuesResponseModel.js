import {ApiClient} from '../ApiClient';
import {DmrClusterTopologyIssueCollectionsModel} from './DmrClusterTopologyIssueCollectionsModel';
import {DmrClusterTopologyIssueLinksModel} from './DmrClusterTopologyIssueLinksModel';
import {DmrClusterTopologyIssueModel} from './DmrClusterTopologyIssueModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The DmrClusterTopologyIssuesResponseModel model module.
 * @module model/DmrClusterTopologyIssuesResponseModel
 * @version 2.36
 */
export class DmrClusterTopologyIssuesResponseModel {
  /**
   * Constructs a new <code>DmrClusterTopologyIssuesResponseModel</code>.
   * @alias module:model/DmrClusterTopologyIssuesResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>DmrClusterTopologyIssuesResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterTopologyIssuesResponseModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterTopologyIssuesResponseModel} The populated <code>DmrClusterTopologyIssuesResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterTopologyIssuesResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [DmrClusterTopologyIssueCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [DmrClusterTopologyIssueModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [DmrClusterTopologyIssueLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/DmrClusterTopologyIssueCollectionsModel>} collections
 */
DmrClusterTopologyIssuesResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/DmrClusterTopologyIssueModel>} data
 */
DmrClusterTopologyIssuesResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/DmrClusterTopologyIssueLinksModel>} links
 */
DmrClusterTopologyIssuesResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
DmrClusterTopologyIssuesResponseModel.prototype.meta = undefined;

