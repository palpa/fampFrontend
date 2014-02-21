'use strict';

angular.module('fampFrontendApp')
    .factory('authorization', function ($http) {
        //var url = config.analytics.url;
        var url = 'http://localhost:9000';

        return {
            login: function (credentials) {
                return $http.post(url + '/auth', credentials);
            }
        };
    });
