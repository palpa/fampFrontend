'use strict';

angular.module('fampFrontendApp')
    .factory('products', ['$resource', function ($resource) {
        return $resource(
            //'json/product/:productId.json'
            //'https://apptestcompany.aws.af.cm/api/products/:productId'
            'http://anionsuarez.com.ar:8080/api/products'
            , {}, {
                query: {method: 'GET', params: {}, isArray: false}
            });
    }]);
