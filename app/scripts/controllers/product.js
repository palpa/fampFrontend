'use strict';

angular.module('fampFrontendApp')
  .controller('ProductCtrl', function ($scope, product) {
        product.query( {}, function(response) {
            $scope.products = response.products;
        });
  });
