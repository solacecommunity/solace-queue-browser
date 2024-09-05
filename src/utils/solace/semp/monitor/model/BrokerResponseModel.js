import {ApiClient} from '../ApiClient';
import {BrokerCollectionsModel} from './BrokerCollectionsModel';
import {BrokerLinksModel} from './BrokerLinksModel';
import {BrokerModel} from './BrokerModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The BrokerResponseModel model module.
 * @module model/BrokerResponseModel
 * @version 2.36
 */
export class BrokerResponseModel {
  /**
   * Constructs a new <code>BrokerResponseModel</code>.
   * @alias module:model/BrokerResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>BrokerResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BrokerResponseModel} obj Optional instance to populate.
   * @return {module:model/BrokerResponseModel} The populated <code>BrokerResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BrokerResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = BrokerCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = BrokerModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = BrokerLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/BrokerCollectionsModel} collections
 */
BrokerResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/BrokerModel} data
 */
BrokerResponseModel.prototype.data = undefined;

/**
 * @member {module:model/BrokerLinksModel} links
 */
BrokerResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
BrokerResponseModel.prototype.meta = undefined;

