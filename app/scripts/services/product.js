'use strict';

angular.module('fampFrontendApp')
    .factory('product', ['$resource',
        function ($resource) {
            return $resource('json/product/:productId.json', {}, {
                query: {method: 'GET', params: {productId: 'products'}, isArray: false}
            });
        }]);