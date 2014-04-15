'use strict';

angular.module('fampFrontendApp')
  .controller('LoginCtrl', function ($scope, $location, $cookieStore, authorization, api) {
    $scope.title = 'Likeastore. Analytics';

    $scope.login = function () {
      var credentials = {
        username: this.username,
        password: this.password
      };

      var success = function (data) {
        var token = data.token;

        console.log('token');
        console.log(token);
        api.init(token);

        $cookieStore.put('token', token);
        $location.path('/');
      };

      var error = function () {
        console.error('Error de token');
      };

      authorization.login(credentials).success(success).error(error);
    };
  });
