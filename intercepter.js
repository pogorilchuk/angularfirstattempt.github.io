httpExample.config(['$httpProvider', function($httpProvider) {
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;

    //Remove the header used to identify ajax call  that would prevent CORS from working
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.interceptors.push(function($rootScope) {
        return {
            'request': function(config) {
                config.headers['authorization'] = $rootScope.data;
                return config;
            }
        };
    });
}])