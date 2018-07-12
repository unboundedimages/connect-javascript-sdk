/**
 * Square Connect API
 * Client library for accessing the Square Connect APIs
 *
 * OpenAPI spec version: 2.0
 * Contact: developers@squareup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 */
var ApiClient = require('../ApiClient');




/**
 * The CustomerSort model module.
 * @module model/CustomerSort
 */

/**
 * Constructs a new <code>CustomerSort</code>.
 * Indicates the field to use for sorting customer profiles. For example, by total money spent with the merchant or the date of their first purchase.
 * @alias module:model/CustomerSort
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>CustomerSort</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CustomerSort} obj Optional instance to populate.
 * @return {module:model/CustomerSort} The populated <code>CustomerSort</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('field')) {
      obj['field'] = ApiClient.convertToType(data['field'], 'String');
    }
      if (data.hasOwnProperty('order')) {
      obj['order'] = ApiClient.convertToType(data['order'], 'String');
    }
    }
  return obj;
}

/**
 * The field to sort the results on. It could be the total money spent at the merchant, the date of the first visit (etc). See [CustomerSortField](#type-customersortfield) for possible values. Default value: `DEFAULT`.
 * @member {module:model/CustomerSort.FieldEnum} field
 */
exports.prototype['field'] = undefined;
/**
 * Indicates the order in which results should be displayed based on the value of the sort field. String comparisons use standard alphabetic comparison to determine order. Strings representing numbers are sorted as strings. See [SortOrder](#type-sortorder) for possible values. Default value: `ASC`.
 * @member {module:model/CustomerSort.OrderEnum} order
 */
exports.prototype['order'] = undefined;


  /**
   * Allowed values for the <code>field</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FieldEnum = {
    /**
     * value: "DEFAULT"
     * @const
     */
    "DEFAULT": "DEFAULT",
    /**
     * value: "CREATED_AT"
     * @const
     */
    "CREATED_AT": "CREATED_AT"  };

  /**
   * Allowed values for the <code>order</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OrderEnum = {
    /**
     * value: "DESC"
     * @const
     */
    "DESC": "DESC",
    /**
     * value: "ASC"
     * @const
     */
    "ASC": "ASC"  };


module.exports = exports;



