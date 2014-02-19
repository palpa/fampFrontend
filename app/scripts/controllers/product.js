'use strict';

angular.module('fampFrontendApp')
    .controller('ProductCtrl', function ($scope, products) {
        products.query({}, function (response) {
            $scope.products = response.products;
        });
    });
