'use strict';

angular.module('fampFrontendApp')
    .factory('products', ['$resource', function ($resource) {
        return $resource(
            //'json/product/:productId.json'
            //'https://apptestcompany.aws.af.cm/api/products/:productId'
            'https://apptestcompany.aws.af.cm/'
            , {}, {
                query: {method: 'GET', params: {productId: 'all'}, isArray: true}
            });
    }]);
