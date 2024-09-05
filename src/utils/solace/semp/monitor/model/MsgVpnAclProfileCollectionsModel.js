import {ApiClient} from '../ApiClient';
import {MsgVpnAclProfileCollectionsClientConnectExceptionsModel} from './MsgVpnAclProfileCollectionsClientConnectExceptionsModel';
import {MsgVpnAclProfileCollectionsPublishExceptionsModel} from './MsgVpnAclProfileCollectionsPublishExceptionsModel';
import {MsgVpnAclProfileCollectionsPublishTopicExceptionsModel} from './MsgVpnAclProfileCollectionsPublishTopicExceptionsModel';
import {MsgVpnAclProfileCollectionsSubscribeExceptionsModel} from './MsgVpnAclProfileCollectionsSubscribeExceptionsModel';
import {MsgVpnAclProfileCollectionsSubscribeShareNameExceptionsModel} from './MsgVpnAclProfileCollectionsSubscribeShareNameExceptionsModel';
import {MsgVpnAclProfileCollectionsSubscribeTopicExceptionsModel} from './MsgVpnAclProfileCollectionsSubscribeTopicExceptionsModel';

/**
 * The MsgVpnAclProfileCollectionsModel model module.
 * @module model/MsgVpnAclProfileCollectionsModel
 * @version 2.36
 */
export class MsgVpnAclProfileCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnAclProfileCollectionsModel</code>.
   * @alias module:model/MsgVpnAclProfileCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAclProfileCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAclProfileCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAclProfileCollectionsModel} The populated <code>MsgVpnAclProfileCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAclProfileCollectionsModel();
      if (data.hasOwnProperty('clientConnectExceptions'))
        obj.clientConnectExceptions = MsgVpnAclProfileCollectionsClientConnectExceptionsModel.constructFromObject(data['clientConnectExceptions']);
      if (data.hasOwnProperty('publishExceptions'))
        obj.publishExceptions = MsgVpnAclProfileCollectionsPublishExceptionsModel.constructFromObject(data['publishExceptions']);
      if (data.hasOwnProperty('publishTopicExceptions'))
        obj.publishTopicExceptions = MsgVpnAclProfileCollectionsPublishTopicExceptionsModel.constructFromObject(data['publishTopicExceptions']);
      if (data.hasOwnProperty('subscribeExceptions'))
        obj.subscribeExceptions = MsgVpnAclProfileCollectionsSubscribeExceptionsModel.constructFromObject(data['subscribeExceptions']);
      if (data.hasOwnProperty('subscribeShareNameExceptions'))
        obj.subscribeShareNameExceptions = MsgVpnAclProfileCollectionsSubscribeShareNameExceptionsModel.constructFromObject(data['subscribeShareNameExceptions']);
      if (data.hasOwnProperty('subscribeTopicExceptions'))
        obj.subscribeTopicExceptions = MsgVpnAclProfileCollectionsSubscribeTopicExceptionsModel.constructFromObject(data['subscribeTopicExceptions']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnAclProfileCollectionsClientConnectExceptionsModel} clientConnectExceptions
 */
MsgVpnAclProfileCollectionsModel.prototype.clientConnectExceptions = undefined;

/**
 * @member {module:model/MsgVpnAclProfileCollectionsPublishExceptionsModel} publishExceptions
 */
MsgVpnAclProfileCollectionsModel.prototype.publishExceptions = undefined;

/**
 * @member {module:model/MsgVpnAclProfileCollectionsPublishTopicExceptionsModel} publishTopicExceptions
 */
MsgVpnAclProfileCollectionsModel.prototype.publishTopicExceptions = undefined;

/**
 * @member {module:model/MsgVpnAclProfileCollectionsSubscribeExceptionsModel} subscribeExceptions
 */
MsgVpnAclProfileCollectionsModel.prototype.subscribeExceptions = undefined;

/**
 * @member {module:model/MsgVpnAclProfileCollectionsSubscribeShareNameExceptionsModel} subscribeShareNameExceptions
 */
MsgVpnAclProfileCollectionsModel.prototype.subscribeShareNameExceptions = undefined;

/**
 * @member {module:model/MsgVpnAclProfileCollectionsSubscribeTopicExceptionsModel} subscribeTopicExceptions
 */
MsgVpnAclProfileCollectionsModel.prototype.subscribeTopicExceptions = undefined;

