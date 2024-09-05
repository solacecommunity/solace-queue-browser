import {ApiClient} from '../ApiClient';

/**
 * The DmrClusterLinkAttributeModel model module.
 * @module model/DmrClusterLinkAttributeModel
 * @version 2.36
 */
export class DmrClusterLinkAttributeModel {
  /**
   * Constructs a new <code>DmrClusterLinkAttributeModel</code>.
   * @alias module:model/DmrClusterLinkAttributeModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DmrClusterLinkAttributeModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterLinkAttributeModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterLinkAttributeModel} The populated <code>DmrClusterLinkAttributeModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterLinkAttributeModel();
      if (data.hasOwnProperty('attributeName'))
        obj.attributeName = ApiClient.convertToType(data['attributeName'], 'String');
      if (data.hasOwnProperty('attributeValue'))
        obj.attributeValue = ApiClient.convertToType(data['attributeValue'], 'String');
      if (data.hasOwnProperty('dmrClusterName'))
        obj.dmrClusterName = ApiClient.convertToType(data['dmrClusterName'], 'String');
      if (data.hasOwnProperty('remoteNodeName'))
        obj.remoteNodeName = ApiClient.convertToType(data['remoteNodeName'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the Attribute.
 * @member {String} attributeName
 */
DmrClusterLinkAttributeModel.prototype.attributeName = undefined;

/**
 * The value of the Attribute.
 * @member {String} attributeValue
 */
DmrClusterLinkAttributeModel.prototype.attributeValue = undefined;

/**
 * The name of the Cluster.
 * @member {String} dmrClusterName
 */
DmrClusterLinkAttributeModel.prototype.dmrClusterName = undefined;

/**
 * The name of the node at the remote end of the Link.
 * @member {String} remoteNodeName
 */
DmrClusterLinkAttributeModel.prototype.remoteNodeName = undefined;

