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
var BatchRetrieveOrdersRequest = require('../model/BatchRetrieveOrdersRequest');
var BatchRetrieveOrdersResponse = require('../model/BatchRetrieveOrdersResponse');
var CreateOrderRequest = require('../model/CreateOrderRequest');
var CreateOrderResponse = require('../model/CreateOrderResponse');

/**
 * Orders service.
 * @module api/OrdersApi
 */

/**
 * Constructs a new OrdersApi. 
 * @alias module:api/OrdersApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;



  /**
   * BatchRetrieveOrders
   * Retrieves a set of [Order](#type-order)s by their IDs.  If a given Order ID does not exist, the ID is ignored instead of generating an error.
   * @param {String} locationId The ID of the orders&#39; associated location.
   * @param {module:model/BatchRetrieveOrdersRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BatchRetrieveOrdersResponse} and HTTP response
   */
  this.batchRetrieveOrdersWithHttpInfo = function(locationId, body) {
    var postBody = body;

    // verify the required parameter 'locationId' is set
    if (locationId === undefined || locationId === null) {
      throw new Error("Missing the required parameter 'locationId' when calling batchRetrieveOrders");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling batchRetrieveOrders");
    }


    var pathParams = {
      'location_id': locationId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2018-07-12';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = BatchRetrieveOrdersResponse;

    return this.apiClient.callApi(
      '/v2/locations/{location_id}/orders/batch-retrieve', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * BatchRetrieveOrders
   * Retrieves a set of [Order](#type-order)s by their IDs.  If a given Order ID does not exist, the ID is ignored instead of generating an error.
   * @param {String} locationId The ID of the orders&#39; associated location.
   * @param {module:model/BatchRetrieveOrdersRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BatchRetrieveOrdersResponse}
   */
  this.batchRetrieveOrders = function(locationId, body) {
    return this.batchRetrieveOrdersWithHttpInfo(locationId, body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * CreateOrder
   * Creates an [Order](#type-order) that can then be referenced as &#x60;order_id&#x60; in a request to the [Charge](#endpoint-charge) endpoint. Orders specify products for purchase, along with discounts, taxes, and other settings to apply to the purchase.  To associate a created order with a request to the Charge endpoint, provide the order&#39;s &#x60;id&#x60; in the &#x60;order_id&#x60; field of your request.  You cannot modify an order after you create it. If you need to modify an order, instead create a new order with modified details.  To learn more about the Orders API, see the [Orders API Overview](https://docs.connect.squareup.com/articles/orders-api-overview).
   * @param {String} locationId The ID of the business location to associate the order with.
   * @param {module:model/CreateOrderRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateOrderResponse} and HTTP response
   */
  this.createOrderWithHttpInfo = function(locationId, body) {
    var postBody = body;

    // verify the required parameter 'locationId' is set
    if (locationId === undefined || locationId === null) {
      throw new Error("Missing the required parameter 'locationId' when calling createOrder");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling createOrder");
    }


    var pathParams = {
      'location_id': locationId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2018-07-12';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = CreateOrderResponse;

    return this.apiClient.callApi(
      '/v2/locations/{location_id}/orders', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * CreateOrder
   * Creates an [Order](#type-order) that can then be referenced as &#x60;order_id&#x60; in a request to the [Charge](#endpoint-charge) endpoint. Orders specify products for purchase, along with discounts, taxes, and other settings to apply to the purchase.  To associate a created order with a request to the Charge endpoint, provide the order&#39;s &#x60;id&#x60; in the &#x60;order_id&#x60; field of your request.  You cannot modify an order after you create it. If you need to modify an order, instead create a new order with modified details.  To learn more about the Orders API, see the [Orders API Overview](https://docs.connect.squareup.com/articles/orders-api-overview).
   * @param {String} locationId The ID of the business location to associate the order with.
   * @param {module:model/CreateOrderRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateOrderResponse}
   */
  this.createOrder = function(locationId, body) {
    return this.createOrderWithHttpInfo(locationId, body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};
