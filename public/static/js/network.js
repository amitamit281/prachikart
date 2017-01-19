zoombeiApp.factory('network', function($http, $rootScope, $q, API_URI) {
    
    $rootScope.pageLoaderImage = {
            showloader: false
    };
    var services = {
        get : function(endpoint, params,headers) {
            //$rootScope.showloader= true;
            var deferred = $q.defer();
            var api_url = API_URI + endpoint;
            console.log("Enter: " + api_url);
            var localHeaders = {"Content-Type" : "application/json"};
            if (headers != null)
            {
                localHeaders = headers;
            }
            
            $http({
                url : api_url,
                dataType : 'json',
                method : 'GET',
                data : '',
                headers : localHeaders,
                params : params
            }).success(function(data, status, headers, config) {
                deferred.resolve(data);
                console.log("Exit: " + JSON.stringify(data));
            }).error(
                    function(data, status, headers, config) {
                        deferred.reject(data);
                        console.error("Service error: " + status + " Data: "
                                + JSON.stringify(data));
                    });
            //$rootScope.showloader= false;
            return deferred.promise;
        },

        post : function(endpoint, params, headers) {
            var deferred = $q.defer();
            var api_url = API_URI + endpoint;
            //$rootScope.showloader= true;
            console.log("Enter: " + api_url + " Data: "
                    + JSON.stringify(params));
            var localHeaders = {"Content-Type" : "application/json"};
            if (headers != null)
            {
                localHeaders = headers;
            }
            $http({
                url : api_url,
                dataType : 'json',
                method : 'POST',
                data : params,
                headers : localHeaders
            }).success(function(data, status, headers, config) {
                deferred.resolve(data);
                console.log("Exit: " + JSON.stringify(data));
            }).error(
                    function(data, status, headers, config) {
                        deferred.reject(data);
                        console.error("Service error: " + status + " Data: "
                                + JSON.stringify(data));
                    });
            //$rootScope.showloader= false;
            return deferred.promise;
        },

        put : function(endpoint, params, requestParams) {
            var deferred = $q.defer();
            var api_url = API_URI + endpoint;
            console.log("Enter: " + api_url + " Data: "
                    + JSON.stringify(params));
            //$rootScope.showloader= true;
            $http({
                url : api_url,
                dataType : 'json',
                method : 'PUT',
                data : params,
                headers : {
                    "Content-Type" : "application/json",
                },
                params : requestParams
            }).success(function(data, status, headers, config) {
                deferred.resolve(data);
                console.log("Exit: " + JSON.stringify(data));
            }).error(
                    function(data, status, headers, config) {
                        deferred.reject(data);
                        console.error("Service error: " + status + " Data: "
                                + JSON.stringify(data));
                    });
            //$rootScope.showloader= false;
            return deferred.promise;
        },

        remove : function(endpoint, params) {
            var deferred = $q.defer();
            var api_url = API_URI + endpoint;
            console.log("Enter: " + api_url + " Data: "
                    + JSON.stringify(params));
            //$rootScope.showloader= true;
            $http({
                url : api_url,
                dataType : 'json',
                method : 'DELETE',
                data : params,
                headers : {
                    "Content-Type" : "application/json",
                }
            }).success(function(data, status, headers, config) {
                deferred.resolve(data);
                console.log("Exit: " + JSON.stringify(data));
            }).error(
                    function(data, status, headers, config) {
                        deferred.reject(data);
                        console.error("Service error: " + status + " Data: "
                                + JSON.stringify(data));
                    });
            //$rootScope.showloader= false;
            return deferred.promise;
        },
    };
    return services;
});
