'use strict';

angular.module('fampFrontendApp')
    .controller('ProductCtrl', function ($scope, products) {

        $scope.products = products.query();
        //console.log($scope.products);
        /*products.query({}, function (response) {
            $scope.products = response.products;
        });*/
    });
