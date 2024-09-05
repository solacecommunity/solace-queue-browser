import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnCertMatchingRuleConditionModel model module.
 * @module model/MsgVpnCertMatchingRuleConditionModel
 * @version 2.36
 */
export class MsgVpnCertMatchingRuleConditionModel {
  /**
   * Constructs a new <code>MsgVpnCertMatchingRuleConditionModel</code>.
   * @alias module:model/MsgVpnCertMatchingRuleConditionModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnCertMatchingRuleConditionModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnCertMatchingRuleConditionModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnCertMatchingRuleConditionModel} The populated <code>MsgVpnCertMatchingRuleConditionModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnCertMatchingRuleConditionModel();
      if (data.hasOwnProperty('attribute'))
        obj.attribute = ApiClient.convertToType(data['attribute'], 'String');
      if (data.hasOwnProperty('comparisonMode'))
        obj.comparisonMode = ApiClient.convertToType(data['comparisonMode'], 'String');
      if (data.hasOwnProperty('expression'))
        obj.expression = ApiClient.convertToType(data['expression'], 'String');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('ruleName'))
        obj.ruleName = ApiClient.convertToType(data['ruleName'], 'String');
      if (data.hasOwnProperty('source'))
        obj.source = ApiClient.convertToType(data['source'], 'String');
    }
    return obj;
  }
}

/**
 * Client Username Attribute to be compared with certificate content. Either an attribute or an expression must be provided on creation, but not both.
 * @member {String} attribute
 */
MsgVpnCertMatchingRuleConditionModel.prototype.attribute = undefined;

/**
 * The comparison mode to use. The allowed values and their meaning are:  <pre> \"matches-attribute\" - Certificate field matches an attribute value exactly. \"matches-expression\" - Certificate field matches a glob expression. </pre> 
 * @member {String} comparisonMode
 */
MsgVpnCertMatchingRuleConditionModel.prototype.comparisonMode = undefined;

/**
 * Glob expression to be matched with certificate content. Either an expression or an attribute must be provided on creation, but not both.
 * @member {String} expression
 */
MsgVpnCertMatchingRuleConditionModel.prototype.expression = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnCertMatchingRuleConditionModel.prototype.msgVpnName = undefined;

/**
 * The name of the rule.
 * @member {String} ruleName
 */
MsgVpnCertMatchingRuleConditionModel.prototype.ruleName = undefined;

/**
 * Allowed values for the <code>source</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnCertMatchingRuleConditionModel.SourceEnum = {
  /**
   * value: "certificate-thumbprint"
   * @const
   */
  certificateThumbprint: "certificate-thumbprint",

  /**
   * value: "common-name"
   * @const
   */
  commonName: "common-name",

  /**
   * value: "common-name-last"
   * @const
   */
  commonNameLast: "common-name-last",

  /**
   * value: "subject-alternate-name-msupn"
   * @const
   */
  subjectAlternateNameMsupn: "subject-alternate-name-msupn",

  /**
   * value: "uid"
   * @const
   */
  uid: "uid",

  /**
   * value: "uid-last"
   * @const
   */
  uidLast: "uid-last",

  /**
   * value: "org-unit"
   * @const
   */
  orgUnit: "org-unit",

  /**
   * value: "org-unit-last"
   * @const
   */
  orgUnitLast: "org-unit-last",

  /**
   * value: "issuer"
   * @const
   */
  issuer: "issuer",

  /**
   * value: "subject"
   * @const
   */
  subject: "subject",

  /**
   * value: "serial-number"
   * @const
   */
  serialNumber: "serial-number",

  /**
   * value: "dns-name"
   * @const
   */
  dnsName: "dns-name",

  /**
   * value: "ip-address"
   * @const
   */
  ipAddress: "ip-address"
};
/**
 * Certificate field to be compared with the Attribute. The allowed values and their meaning are:  <pre> \"certificate-thumbprint\" - The attribute is computed as the SHA-1 hash over the entire DER-encoded contents of the client certificate. \"common-name\" - The attribute is extracted from the certificate's first instance of the Common Name attribute in the Subject DN. \"common-name-last\" - The attribute is extracted from the certificate's last instance of the Common Name attribute in the Subject DN. \"subject-alternate-name-msupn\" - The attribute is extracted from the certificate's Other Name type of the Subject Alternative Name and must have the msUPN signature. \"uid\" - The attribute is extracted from the certificate's first instance of the User Identifier attribute in the Subject DN. \"uid-last\" - The attribute is extracted from the certificate's last instance of the User Identifier attribute in the Subject DN. \"org-unit\" - The attribute is extracted from the certificate's first instance of the Org Unit attribute in the Subject DN. \"org-unit-last\" - The attribute is extracted from the certificate's last instance of the Org Unit attribute in the Subject DN. \"issuer\" - The attribute is extracted from the certificate's Issuer DN. \"subject\" - The attribute is extracted from the certificate's Subject DN. \"serial-number\" - The attribute is extracted from the certificate's Serial Number. \"dns-name\" - The attribute is extracted from the certificate's Subject Alt Name DNS Name. \"ip-address\" - The attribute is extracted from the certificate's Subject Alt Name IP Address. </pre> 
 * @member {module:model/MsgVpnCertMatchingRuleConditionModel.SourceEnum} source
 */
MsgVpnCertMatchingRuleConditionModel.prototype.source = undefined;

