'use strict';

var app = angular.module('fampFrontendApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
]);

app.config(function ($routeProvider, $httpProvider) {

  $httpProvider.responseInterceptors.push('httpInterceptor');
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];

  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/products', {
      templateUrl: 'views/product-list.html',
      controller: 'ProductCtrl'
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});

app.run(function (api) {
  api.init();
});