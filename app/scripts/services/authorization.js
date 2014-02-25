'use strict';

angular.module('fampFrontendApp')
    .factory('authorization', function ($http) {
        //var url = config.analytics.url;
        var url = 'http://apptestcompany.aws.af.cm';

        return {
            login: function (credentials) {
                //console.log($.param(credentials));
                return $http.post(url + '/j_spring_security_check', $.param(credentials));
            }
        };
    });
