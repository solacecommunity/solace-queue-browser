import {ApiClient} from '../ApiClient';
import {DmrClusterTopologyIssueCollectionsModel} from './DmrClusterTopologyIssueCollectionsModel';
import {DmrClusterTopologyIssueLinksModel} from './DmrClusterTopologyIssueLinksModel';
import {DmrClusterTopologyIssueModel} from './DmrClusterTopologyIssueModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The DmrClusterTopologyIssueResponseModel model module.
 * @module model/DmrClusterTopologyIssueResponseModel
 * @version 2.36
 */
export class DmrClusterTopologyIssueResponseModel {
  /**
   * Constructs a new <code>DmrClusterTopologyIssueResponseModel</code>.
   * @alias module:model/DmrClusterTopologyIssueResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>DmrClusterTopologyIssueResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterTopologyIssueResponseModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterTopologyIssueResponseModel} The populated <code>DmrClusterTopologyIssueResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterTopologyIssueResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = DmrClusterTopologyIssueCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = DmrClusterTopologyIssueModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = DmrClusterTopologyIssueLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/DmrClusterTopologyIssueCollectionsModel} collections
 */
DmrClusterTopologyIssueResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/DmrClusterTopologyIssueModel} data
 */
DmrClusterTopologyIssueResponseModel.prototype.data = undefined;

/**
 * @member {module:model/DmrClusterTopologyIssueLinksModel} links
 */
DmrClusterTopologyIssueResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
DmrClusterTopologyIssueResponseModel.prototype.meta = undefined;

