'use strict';

//'json/product/:productId.json'
//'https://apptestcompany.aws.af.cm/api/products/:productId'
var apiURL = 'http://anionsuarez.com.ar:8080/api/products';

angular.module('fampFrontendApp')
  .factory('products', ['$resource', function ($resource) {
    return $resource(apiURL,
      {}, {
        query: {method: 'GET', params: {}, isArray: false}
      });
  }]);
